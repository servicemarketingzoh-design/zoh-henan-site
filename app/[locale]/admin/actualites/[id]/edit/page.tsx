import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { updateArticle } from "../../actions";

const errors: Record<string, string> = {
  champs: "Vérifiez les champs obligatoires et la longueur des textes.",
  televersement: "Une image n'a pas pu être envoyée. Formats acceptés : JPG, PNG, WebP ou AVIF, 10 Mo maximum.",
  slug: "Cette adresse d'article existe déjà. Modifiez le slug.",
  enregistrement: "L'article n'a pas pu être modifié.",
};

export default async function EditArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string; id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const [{ locale, id }, { error }] = await Promise.all([params, searchParams]);
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;
  if (!userId) redirect(`/${locale}/admin/actualites/login`);

  const [{ data: membership }, { data: article }] = await Promise.all([
    supabase.from("news_admins").select("user_id").eq("user_id", userId).maybeSingle(),
    supabase
      .from("news_articles")
      .select("id, slug, title, excerpt, content, category, cover_image_url, gallery_urls, video_url, status, published_at")
      .eq("id", id)
      .eq("locale", locale)
      .maybeSingle(),
  ]);

  if (!membership) redirect(`/${locale}/admin/actualites/login?error=acces`);
  if (!article) notFound();

  const publicationDate = article.published_at
    ? new Date(article.published_at).toISOString().slice(0, 10)
    : new Date().toISOString().slice(0, 10);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <Link href={`/${locale}/admin/actualites`} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1e5d2e] hover:underline"><ArrowLeft size={16} />Retour à la liste</Link>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="mb-2 text-xs font-bold uppercase tracking-[3px] text-[#1e5d2e]">Modification</p>
          <h1 className="mb-8 text-3xl font-black text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>Modifier l&apos;actualité</h1>
          {error && errors[error] && <p className="mb-6 rounded-xl bg-red-50 px-5 py-4 text-sm text-red-700">{errors[error]}</p>}

          <form action={updateArticle} className="space-y-7">
            <input type="hidden" name="id" value={article.id} />
            <input type="hidden" name="locale" value={locale} />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Titre de l'article" name="title" required defaultValue={article.title} />
              <Field label="Adresse courte (slug)" name="slug" required defaultValue={article.slug} />
              <Field label="Catégorie" name="category" required defaultValue={article.category} />
              <label className="block text-sm font-semibold text-gray-700">Date de publication
                <input name="publicationDate" type="date" defaultValue={publicationDate} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e]" />
              </label>
            </div>

            <label className="block text-sm font-semibold text-gray-700">Résumé
              <textarea name="excerpt" required minLength={10} maxLength={500} rows={3} defaultValue={article.excerpt} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e]" />
            </label>
            <label className="block text-sm font-semibold text-gray-700">Contenu complet
              <textarea name="content" required minLength={20} rows={14} defaultValue={article.content} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 leading-relaxed outline-none focus:border-[#1e5d2e]" />
            </label>
            <Field label="Lien vidéo (facultatif)" name="videoUrl" type="url" defaultValue={article.video_url ?? ""} />

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <p className="mb-3 text-sm font-bold text-gray-800">Image de couverture actuelle</p>
              <Image src={article.cover_image_url} alt="Couverture actuelle" width={180} height={110} className="h-28 w-44 rounded-xl object-cover" />
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="rounded-2xl border-2 border-dashed border-gray-200 p-6 text-sm font-semibold text-gray-700 hover:border-[#1e5d2e]">
                <ImagePlus size={25} className="mb-3 text-[#1e5d2e]" />Nouvelle couverture (facultatif)
                <input name="cover" type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="mt-3 block w-full text-xs font-normal text-gray-500" />
              </label>
              <label className="rounded-2xl border-2 border-dashed border-gray-200 p-6 text-sm font-semibold text-gray-700 hover:border-[#1e5d2e]">
                <ImagePlus size={25} className="mb-3 text-[#1e5d2e]" />Ajouter des photos à la galerie
                <input name="gallery" type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" className="mt-3 block w-full text-xs font-normal text-gray-500" />
                <span className="mt-4 flex items-center gap-2 text-xs font-normal text-gray-600">
                  <input name="replaceGallery" type="checkbox" className="h-4 w-4 accent-[#1e5d2e]" /> Remplacer les {article.gallery_urls.length} photos actuelles
                </span>
              </label>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-7 sm:flex-row sm:justify-end">
              <button name="status" value="draft" type="submit" className="rounded-xl border border-gray-200 px-6 py-3 font-bold text-gray-600 hover:bg-gray-50">Enregistrer en brouillon</button>
              <button name="status" value="published" type="submit" className="rounded-xl bg-[#1e5d2e] px-6 py-3 font-bold text-white hover:bg-[#174923]">{article.status === "published" ? "Enregistrer et maintenir publié" : "Publier maintenant"}</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  defaultValue,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  defaultValue?: string;
}) {
  return <label className="block text-sm font-semibold text-gray-700">{label}<input name={name} type={type} required={required} defaultValue={defaultValue} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e]" /></label>;
}

