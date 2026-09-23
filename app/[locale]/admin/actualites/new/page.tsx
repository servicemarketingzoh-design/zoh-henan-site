import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowLeft, ImagePlus } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { createArticle } from "../actions";

const errors: Record<string, string> = {
  champs: "Vérifiez les champs obligatoires et la longueur des textes.",
  image: "Une image de couverture est obligatoire.",
  televersement: "Une image n'a pas pu être envoyée. Formats acceptés : JPG, PNG, WebP ou AVIF, 10 Mo maximum.",
  slug: "Cette adresse d'article existe déjà. Modifiez le slug.",
  enregistrement: "L'article n'a pas pu être enregistré.",
};

export default async function NewArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  const { locale } = await params;
  const { error } = await searchParams;
  const supabase = await createClient();
  const { data } = await supabase.auth.getClaims();
  const userId = data?.claims?.sub;
  if (!userId) redirect(`/${locale}/admin/actualites/login`);
  const { data: membership } = await supabase.from("news_admins").select("user_id").eq("user_id", userId).maybeSingle();
  if (!membership) redirect(`/${locale}/admin/actualites/login?error=acces`);

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 sm:px-10">
      <div className="max-w-4xl mx-auto">
        <Link href={`/${locale}/admin/actualites`} className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1e5d2e] hover:underline"><ArrowLeft size={16} />Retour à la liste</Link>
        <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[3px] text-[#1e5d2e] mb-2">Nouvelle publication</p>
          <h1 className="text-3xl font-black text-gray-900 mb-8" style={{ fontFamily: "var(--font-playfair)" }}>Ajouter une actualité</h1>
          {error && errors[error] && <p className="mb-6 rounded-xl bg-red-50 px-5 py-4 text-sm text-red-700">{errors[error]}</p>}

          <form action={createArticle} className="space-y-7">
            <input type="hidden" name="locale" value={locale} />
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Titre de l'article" name="title" required />
              <Field label="Adresse courte (slug)" name="slug" placeholder="créée automatiquement si vide" />
              <Field label="Catégorie" name="category" required placeholder="Événement, Projet, Vie d'entreprise…" />
              <label className="block text-sm font-semibold text-gray-700">Date de publication
                <input name="publicationDate" type="date" defaultValue={new Date().toISOString().slice(0, 10)} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e]" />
              </label>
            </div>

            <label className="block text-sm font-semibold text-gray-700">Résumé
              <textarea name="excerpt" required minLength={10} maxLength={500} rows={3} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e]" placeholder="Quelques lignes visibles sur la carte de l'article." />
            </label>
            <label className="block text-sm font-semibold text-gray-700">Contenu complet
              <textarea name="content" required minLength={20} rows={14} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 leading-relaxed outline-none focus:border-[#1e5d2e]" placeholder="Rédigez le texte. Séparez les paragraphes avec une ligne vide." />
            </label>
            <Field label="Lien vidéo (facultatif)" name="videoUrl" type="url" placeholder="https://www.youtube.com/embed/..." />

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="rounded-2xl border-2 border-dashed border-gray-200 p-6 text-sm font-semibold text-gray-700 hover:border-[#1e5d2e]">
                <ImagePlus size={25} className="mb-3 text-[#1e5d2e]" />Image de couverture *
                <input name="cover" type="file" accept="image/jpeg,image/png,image/webp,image/avif" required className="mt-3 block w-full text-xs font-normal text-gray-500" />
              </label>
              <label className="rounded-2xl border-2 border-dashed border-gray-200 p-6 text-sm font-semibold text-gray-700 hover:border-[#1e5d2e]">
                <ImagePlus size={25} className="mb-3 text-[#1e5d2e]" />Galerie photos
                <input name="gallery" type="file" multiple accept="image/jpeg,image/png,image/webp,image/avif" className="mt-3 block w-full text-xs font-normal text-gray-500" />
              </label>
            </div>

            <div className="flex flex-col gap-3 border-t border-gray-100 pt-7 sm:flex-row sm:justify-end">
              <button name="status" value="draft" type="submit" className="rounded-xl border border-gray-200 px-6 py-3 font-bold text-gray-600 hover:bg-gray-50">Enregistrer en brouillon</button>
              <button name="status" value="published" type="submit" className="rounded-xl bg-[#1e5d2e] px-6 py-3 font-bold text-white hover:bg-[#174923]">Publier maintenant</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

function Field({ label, name, type = "text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return <label className="block text-sm font-semibold text-gray-700">{label}<input name={name} type={type} required={required} placeholder={placeholder} className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-[#1e5d2e]" /></label>;
}

