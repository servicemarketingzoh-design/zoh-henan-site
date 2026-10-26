import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, CalendarDays, MessageCircle } from "lucide-react";
import Header from "../../components/Header";
import FloatingButtons from "../../components/FloatingButtons";
import Footer from "../../components/Footer";
import { blogPosts, getBlogPost } from "@/lib/blog";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
  const { slug, locale } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog Zoh-Henan Immobilier`,
    description: post.excerpt,
    alternates: { canonical: `${BASE_URL}/${locale}/blog/${slug}` },
    openGraph: { title: post.title, description: post.excerpt, images: [`${BASE_URL}${post.image}`] },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string; locale: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px] bg-white">

        {/* EN-TÊTE */}
        <section className="bg-[#f6f8f6] pt-14 pb-10 px-6 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e5d2e] hover:gap-2.5 transition-all mb-8">
              <ArrowLeft size={16} /> Retour au blog
            </Link>
            <span className="block text-[#1e5d2e] text-xs font-bold uppercase tracking-[3px] mb-4">{post.category}</span>
            <h1 className="text-gray-900 font-black leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,4.5vw,46px)" }}>
              {post.title}
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-white ring-1 ring-gray-200 flex items-center justify-center overflow-hidden">
                  <Image src="/images/logo.png" alt="" width={36} height={36} className="object-contain p-1" />
                </div>
                <span className="font-semibold text-gray-800">{post.author}</span>
              </div>
              <span className="flex items-center gap-1.5"><CalendarDays size={15} />{post.date}</span>
              <span className="flex items-center gap-1.5"><Clock size={15} />{post.readingTime} min de lecture</span>
            </div>
          </div>
        </section>

        {/* IMAGE */}
        <div className="px-6 sm:px-8 -mb-2">
          <div className="relative max-w-5xl mx-auto aspect-[16/8] rounded-3xl overflow-hidden -mt-1 shadow-xl">
            <Image src={post.image} alt={post.title} fill priority sizes="(min-width: 1024px) 1024px, 100vw" className="object-cover" />
          </div>
        </div>

        {/* CONTENU */}
        <article className="max-w-3xl mx-auto px-6 sm:px-8 py-16">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-gray-900 font-bold text-2xl mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
                {section.heading}
              </h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="text-gray-600 text-[16.5px] leading-[1.85] mb-4">{p}</p>
              ))}
            </section>
          ))}

          {/* Encadré contact */}
          <aside className="mt-14 rounded-2xl border border-[#1e5d2e]/20 bg-[#1e5d2e]/5 p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-gray-900 font-bold text-lg mb-1" style={{ fontFamily: "var(--font-playfair)" }}>Un projet immobilier en tête ?</p>
              <p className="text-gray-500 text-sm">Nos conseillers vous accompagnent gratuitement, de la visite à la remise des clés.</p>
            </div>
            <a
              href="https://wa.me/2250716171717"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-2 rounded-xl bg-[#1e5d2e] hover:bg-[#163f20] text-white text-sm font-bold px-5 py-3 transition-colors"
            >
              <MessageCircle size={16} /> Parler à un conseiller
            </a>
          </aside>
        </article>

        {/* À LIRE AUSSI */}
        <section className="bg-[#f6f8f6] py-20 px-6 sm:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-gray-900 font-black text-2xl sm:text-3xl mb-10" style={{ fontFamily: "var(--font-playfair)" }}>À lire aussi</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 768px) 360px, 100vw" className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-5">
                    <span className="text-[#1e5d2e] text-[11px] font-bold uppercase tracking-wider">{p.category}</span>
                    <h3 className="text-gray-900 font-bold leading-snug mt-2 mb-3 group-hover:text-[#1e5d2e] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>{p.title}</h3>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#1e5d2e]">Lire <ArrowRight size={14} /></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
