import Link from "next/link";
import { redirect } from "next/navigation";
import { CalendarDays, FilePlus2, LogOut } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { logout } from "./actions";

export default async function AdminNewsPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ created?: string }>;
}) {
  const { locale } = await params;
  const { created } = await searchParams;
  const supabase = await createClient();
  const { data: claimsData } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;
  if (!userId) redirect(`/${locale}/admin/actualites/login`);

  const { data: membership } = await supabase.from("news_admins").select("user_id").eq("user_id", userId).maybeSingle();
  if (!membership) redirect(`/${locale}/admin/actualites/login?error=acces`);

  const { data: articles } = await supabase
    .from("news_articles")
    .select("id, title, slug, category, status, published_at, updated_at")
    .eq("locale", locale)
    .order("updated_at", { ascending: false });

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[3px] text-[#1e5d2e] mb-2">Administration ZOH-HENAN</p>
            <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: "var(--font-playfair)" }}>Actualités</h1>
            <p className="mt-2 text-sm text-gray-500">Créez vos articles, préparez-les en brouillon puis publiez-les.</p>
          </div>
          <div className="flex gap-3">
            <Link href={`/${locale}/admin/actualites/new`} className="inline-flex items-center gap-2 rounded-xl bg-[#1e5d2e] px-5 py-3 text-sm font-bold text-white hover:bg-[#174923]"><FilePlus2 size={17} />Nouvelle actualité</Link>
            <form action={logout}>
              <input type="hidden" name="locale" value={locale} />
              <button className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-100"><LogOut size={16} />Quitter</button>
            </form>
          </div>
        </div>

        {created === "1" && <p className="mb-6 rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-sm font-semibold text-green-800">L&apos;actualité a bien été enregistrée.</p>}

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          {articles && articles.length > 0 ? (
            <div className="divide-y divide-gray-100">
              {articles.map((article) => (
                <div key={article.id} className="flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase ${article.status === "published" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-800"}`}>{article.status === "published" ? "Publié" : "Brouillon"}</span>
                      <span className="text-xs font-semibold text-[#1e5d2e]">{article.category}</span>
                    </div>
                    <h2 className="font-bold text-gray-900">{article.title}</h2>
                    <p className="mt-1 text-xs text-gray-400">/{article.slug}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500"><CalendarDays size={14} />{article.published_at ? new Intl.DateTimeFormat("fr-FR", { dateStyle: "medium" }).format(new Date(article.published_at)) : "Non publié"}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="px-6 py-20 text-center">
              <FilePlus2 size={38} className="mx-auto mb-4 text-gray-300" />
              <p className="font-semibold text-gray-700">Aucune actualité administrable pour le moment.</p>
              <p className="mt-2 text-sm text-gray-400">Les anciens articles restent visibles sur le site. Commencez ici pour les prochains événements.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

