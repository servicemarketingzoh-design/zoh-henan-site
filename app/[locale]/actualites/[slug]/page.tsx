import { notFound } from "next/navigation";
import Header from "../../components/Header";
import FloatingButtons from "../../components/FloatingButtons";
import Footer from "../../components/Footer";
import { getNewsBySlug, getPublishedNews } from "@/lib/news";
import { CalendarDays, ArrowLeft, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const BASE_URL = "https://www.zoh-henan.com";

export default async function ActualiteDetailPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug, locale } = await params;
  const [actu, articles] = await Promise.all([
    getNewsBySlug(slug, locale),
    getPublishedNews(locale),
  ]);
  if (!actu) notFound();

  const index = articles.findIndex((article) => article.slug === slug);
  const prev = index > 0 ? articles[index - 1] : null;
  const next = index >= 0 ? articles[index + 1] ?? null : null;
  const pageUrl = `${BASE_URL}/${locale}/actualites/${slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: actu.titre,
    description: actu.extrait,
    image: [actu.img.startsWith("http") ? actu.img : `${BASE_URL}${actu.img}`],
    url: pageUrl,
    author: { "@type": "Organization", name: "Zoh-Henan Immobilier" },
    publisher: {
      "@type": "Organization",
      name: "Zoh-Henan Immobilier",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/images/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
  };

  return (
    <>
      <Header />
      <FloatingButtons />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <main className="min-h-screen pt-[70px]">
        <div className="relative w-full h-[420px] overflow-hidden">
          <Image src={actu.img} alt={actu.titre} fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-[#1e5d2e] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag size={10} />{actu.categorie}
                </span>
                <span className="flex items-center gap-1 text-white/70 text-xs"><CalendarDays size={12} />{actu.date}</span>
              </div>
              <h1 className="text-white font-black leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,4vw,46px)" }}>
                {actu.titre}
              </h1>
            </div>
          </div>
        </div>

        <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <Link href="/actualites" className="inline-flex items-center gap-2 text-[#1e5d2e] text-sm font-semibold mb-10 hover:underline">
              <ArrowLeft size={16} /> Retour aux actualités
            </Link>
            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4">
              {actu.contenu.split("\n\n").map((paragraph, paragraphIndex) => (
                <p key={paragraphIndex} className="text-gray-600 text-[15px] leading-relaxed">{paragraph}</p>
              ))}
            </div>

            {actu.photos.length > 0 && (
              <div className="mt-14">
                <h2 className="text-gray-900 font-black mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,3vw,30px)" }}>Photos de l&apos;événement</h2>
                <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-8" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {actu.photos.map((photo, photoIndex) => (
                    <div key={photo} className={`relative overflow-hidden rounded-2xl ${photoIndex === 0 ? "sm:col-span-2 sm:row-span-2 h-80" : "h-48"}`}>
                      <Image src={photo} alt={`Photo ${photoIndex + 1} — ${actu.titre}`} fill className="object-cover" sizes="(max-width: 640px) 100vw, 50vw" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {actu.video && (
              <div className="mt-14">
                <h2 className="text-gray-900 font-black mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,3vw,30px)" }}>Vidéo</h2>
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe src={actu.video} className="w-full h-full" allowFullScreen title="Vidéo événement" />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="py-10 px-6 sm:px-12 lg:px-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link href={`/actualites/${prev.slug}`} className="flex items-center gap-3 group max-w-xs">
                <ArrowLeft size={18} className="text-[#1e5d2e] shrink-0" />
                <div><p className="text-[10px] uppercase text-gray-400">Article précédent</p><p className="text-gray-700 text-sm font-semibold group-hover:text-[#1e5d2e]">{prev.titre}</p></div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/actualites/${next.slug}`} className="flex items-center gap-3 group max-w-xs sm:text-right sm:flex-row-reverse">
                <ArrowRight size={18} className="text-[#1e5d2e] shrink-0" />
                <div><p className="text-[10px] uppercase text-gray-400">Article suivant</p><p className="text-gray-700 text-sm font-semibold group-hover:text-[#1e5d2e]">{next.titre}</p></div>
              </Link>
            ) : <div />}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

