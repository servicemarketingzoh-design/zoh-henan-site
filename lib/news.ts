import { createClient as createSupabaseClient } from "@supabase/supabase-js";
import { actualites as articlesStatiques, type Actualite } from "@/app/[locale]/actualites/data";
import { supabasePublishableKey, supabaseUrl } from "@/lib/supabase/config";

type NewsRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  cover_image_url: string;
  gallery_urls: string[];
  video_url: string | null;
  published_at: string;
};

function publicClient() {
  return createSupabaseClient(supabaseUrl, supabasePublishableKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Africa/Abidjan",
  })
    .format(new Date(date))
    .replace(/^./, (letter) => letter.toUpperCase());
}

function mapRow(row: NewsRow): Actualite {
  return {
    slug: row.slug,
    titre: row.title,
    extrait: row.excerpt,
    contenu: row.content,
    date: formatDate(row.published_at),
    categorie: row.category,
    img: row.cover_image_url,
    photos: row.gallery_urls,
    video: row.video_url ?? undefined,
  };
}

export async function getPublishedNews(locale = "fr"): Promise<Actualite[]> {
  const supabase = publicClient();
  const fallback = articlesStatiques.filter((article) => !article.hidden);
  if (!supabase) return fallback;

  const { data, error } = await supabase
    .from("news_articles")
    .select("id, slug, title, excerpt, content, category, cover_image_url, gallery_urls, video_url, published_at")
    .eq("locale", locale)
    .eq("status", "published")
    .order("published_at", { ascending: false });

  if (error || !data) {
    console.error("Impossible de charger les actualités Supabase", error?.message);
    return fallback;
  }

  return (data as NewsRow[]).map(mapRow);
}

export async function getNewsBySlug(slug: string, locale = "fr") {
  const supabase = publicClient();
  const { data, error } = await supabase
    .from("news_articles")
    .select("id, slug, title, excerpt, content, category, cover_image_url, gallery_urls, video_url, published_at")
    .eq("locale", locale)
    .eq("slug", slug)
    .eq("status", "published")
    .maybeSingle();

  if (error) {
    console.error("Impossible de charger l'actualité Supabase", error.message);
    return articlesStatiques.find((article) => article.slug === slug && !article.hidden) ?? null;
  }

  return data ? mapRow(data as NewsRow) : null;
}

