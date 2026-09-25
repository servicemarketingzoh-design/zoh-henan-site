"use server";

import { randomUUID } from "node:crypto";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

const ALLOWED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp", "image/avif"]);
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

function safeLocale(value: FormDataEntryValue | null) {
  return value === "en" ? "en" : "fr";
}

function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function validateImage(file: File) {
  if (!ALLOWED_IMAGE_TYPES.has(file.type)) throw new Error("Format d'image non accepté.");
  if (file.size > MAX_IMAGE_SIZE) throw new Error("Chaque image doit peser moins de 10 Mo.");
}

async function requireAdmin(locale: string) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) redirect(`/${locale}/admin/actualites/login`);

  const { data: membership } = await supabase
    .from("news_admins")
    .select("user_id")
    .eq("user_id", userId)
    .maybeSingle();

  if (!membership) redirect(`/${locale}/admin/actualites/login?error=acces`);
  return { supabase, userId };
}

export async function login(formData: FormData) {
  const locale = safeLocale(formData.get("locale"));
  const email = String(formData.get("email") ?? "").trim();
  const password = String(formData.get("password") ?? "");
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error || !data.user) redirect(`/${locale}/admin/actualites/login?error=identifiants`);

  const { data: membership } = await supabase
    .from("news_admins")
    .select("user_id")
    .eq("user_id", data.user.id)
    .maybeSingle();

  if (!membership) {
    await supabase.auth.signOut();
    redirect(`/${locale}/admin/actualites/login?error=acces`);
  }

  redirect(`/${locale}/admin/actualites`);
}

export async function logout(formData: FormData) {
  const locale = safeLocale(formData.get("locale"));
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect(`/${locale}/admin/actualites/login`);
}

async function uploadImage(
  supabase: Awaited<ReturnType<typeof createClient>>,
  file: File,
  userId: string,
) {
  validateImage(file);
  const extension = file.name.split(".").pop()?.toLowerCase().replace(/[^a-z0-9]/g, "") || "jpg";
  const path = `${userId}/${new Date().getUTCFullYear()}/${randomUUID()}.${extension}`;
  const { error } = await supabase.storage
    .from("news-media")
    .upload(path, Buffer.from(await file.arrayBuffer()), { contentType: file.type, upsert: false });
  if (error) throw new Error(error.message);
  return supabase.storage.from("news-media").getPublicUrl(path).data.publicUrl;
}

export async function createArticle(formData: FormData) {
  const locale = safeLocale(formData.get("locale"));
  const { supabase, userId } = await requireAdmin(locale);
  const title = String(formData.get("title") ?? "").trim();
  const slug = slugify(String(formData.get("slug") || title));
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const videoUrl = String(formData.get("videoUrl") ?? "").trim() || null;
  const status = formData.get("status") === "published" ? "published" : "draft";
  const publicationDate = String(formData.get("publicationDate") ?? "");
  const cover = formData.get("cover");
  const gallery = formData.getAll("gallery").filter((item): item is File => item instanceof File && item.size > 0);

  if (!title || !slug || excerpt.length < 10 || content.length < 20 || !category) {
    redirect(`/${locale}/admin/actualites/new?error=champs`);
  }
  if (!(cover instanceof File) || cover.size === 0) {
    redirect(`/${locale}/admin/actualites/new?error=image`);
  }

  let coverUrl: string;
  let galleryUrls: string[];
  try {
    coverUrl = await uploadImage(supabase, cover, userId);
    galleryUrls = [coverUrl];
    for (const image of gallery) galleryUrls.push(await uploadImage(supabase, image, userId));
  } catch {
    redirect(`/${locale}/admin/actualites/new?error=televersement`);
  }

  const publishedAt = status === "published"
    ? publicationDate ? `${publicationDate}T12:00:00.000Z` : new Date().toISOString()
    : null;

  const { error } = await supabase.from("news_articles").insert({
    locale,
    slug,
    title,
    excerpt,
    content,
    category,
    cover_image_url: coverUrl,
    gallery_urls: galleryUrls,
    video_url: videoUrl,
    status,
    published_at: publishedAt,
    created_by: userId,
    updated_by: userId,
  });

  if (error) {
    const code = error.code === "23505" ? "slug" : "enregistrement";
    redirect(`/${locale}/admin/actualites/new?error=${code}`);
  }

  revalidatePath(`/${locale}/actualites`);
  revalidatePath(`/${locale}/admin/actualites`);
  redirect(`/${locale}/admin/actualites?created=1`);
}

export async function updateArticle(formData: FormData) {
  const locale = safeLocale(formData.get("locale"));
  const id = String(formData.get("id") ?? "");
  const { supabase, userId } = await requireAdmin(locale);
  const title = String(formData.get("title") ?? "").trim();
  const slug = slugify(String(formData.get("slug") || title));
  const excerpt = String(formData.get("excerpt") ?? "").trim();
  const content = String(formData.get("content") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const videoUrl = String(formData.get("videoUrl") ?? "").trim() || null;
  const status = formData.get("status") === "published" ? "published" : "draft";
  const publicationDate = String(formData.get("publicationDate") ?? "");
  const cover = formData.get("cover");
  const gallery = formData.getAll("gallery").filter((item): item is File => item instanceof File && item.size > 0);
  const replaceGallery = formData.get("replaceGallery") === "on";

  if (!id || !title || !slug || excerpt.length < 10 || content.length < 20 || !category) {
    redirect(`/${locale}/admin/actualites/${id}/edit?error=champs`);
  }

  const { data: currentArticle } = await supabase
    .from("news_articles")
    .select("cover_image_url, gallery_urls")
    .eq("id", id)
    .eq("locale", locale)
    .maybeSingle();

  if (!currentArticle) redirect(`/${locale}/admin/actualites`);

  let coverUrl = currentArticle.cover_image_url;
  let galleryUrls = replaceGallery ? [] : currentArticle.gallery_urls;
  try {
    if (cover instanceof File && cover.size > 0) {
      coverUrl = await uploadImage(supabase, cover, userId);
    }
    for (const image of gallery) galleryUrls.push(await uploadImage(supabase, image, userId));
  } catch {
    redirect(`/${locale}/admin/actualites/${id}/edit?error=televersement`);
  }

  if (galleryUrls.length === 0) galleryUrls = [coverUrl];
  const publishedAt = status === "published"
    ? publicationDate ? `${publicationDate}T12:00:00.000Z` : new Date().toISOString()
    : null;

  const { error } = await supabase
    .from("news_articles")
    .update({
      slug,
      title,
      excerpt,
      content,
      category,
      cover_image_url: coverUrl,
      gallery_urls: galleryUrls,
      video_url: videoUrl,
      status,
      published_at: publishedAt,
      updated_by: userId,
    })
    .eq("id", id)
    .eq("locale", locale);

  if (error) {
    const code = error.code === "23505" ? "slug" : "enregistrement";
    redirect(`/${locale}/admin/actualites/${id}/edit?error=${code}`);
  }

  revalidatePath(`/${locale}/actualites`);
  revalidatePath(`/${locale}/actualites/${slug}`);
  revalidatePath(`/${locale}/admin/actualites`);
  redirect(`/${locale}/admin/actualites?updated=1`);
}

export async function deleteArticle(formData: FormData) {
  const locale = safeLocale(formData.get("locale"));
  const id = String(formData.get("id") ?? "");
  const { supabase } = await requireAdmin(locale);
  if (!id) redirect(`/${locale}/admin/actualites`);

  const { error } = await supabase
    .from("news_articles")
    .delete()
    .eq("id", id)
    .eq("locale", locale);

  if (error) redirect(`/${locale}/admin/actualites?error=suppression`);

  revalidatePath(`/${locale}/actualites`);
  revalidatePath(`/${locale}/admin/actualites`);
  redirect(`/${locale}/admin/actualites?deleted=1`);
}

