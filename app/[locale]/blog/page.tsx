"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Search, Mail } from "lucide-react";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import { blogPosts, blogCategories, type BlogPost } from "@/lib/blog";

function PostCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-[#1e5d2e]/30 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-4 left-4 bg-white/95 text-[#1e5d2e] text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
          {post.category}
        </span>
      </div>
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-gray-300" />
          <span className="flex items-center gap-1"><Clock size={12} />{post.readingTime} min</span>
        </div>
        <h3 className="text-gray-900 font-bold text-lg leading-snug mb-3 group-hover:text-[#1e5d2e] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-5">{post.excerpt}</p>
        <span className="mt-auto inline-flex items-center gap-1.5 text-[#1e5d2e] text-sm font-semibold">
          Lire l&apos;article <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}

export default function BlogPage() {
  const [category, setCategory] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [newsletterSent, setNewsletterSent] = useState(false);

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const q = query.trim().toLowerCase();
  const isFiltering = Boolean(category || q);
  const posts = blogPosts.filter(
    (p) =>
      (isFiltering || p.slug !== featured.slug) &&
      (!category || p.category === category) &&
      (!q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)),
  );

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px] bg-[#f6f8f6]">

        {/* HERO */}
        <section className="relative bg-[#0a2e14] pt-20 pb-28 px-6 sm:px-12 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 40px)" }}
          />
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#1e5d2e]/40 blur-3xl" />
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-[#4ade80] text-xs font-semibold tracking-[5px] uppercase mb-4">Le blog Zoh-Henan</p>
            <h1 className="text-white font-black leading-tight mb-5" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px,5vw,56px)" }}>
              Conseils & guides immobiliers
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
              Acheter, financer, sécuriser et bien vivre son projet immobilier en Côte d&apos;Ivoire, expliqué par nos experts.
            </p>
            <div className="max-w-lg mx-auto flex items-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-xl">
              <Search size={18} className="text-gray-400 flex-shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher un article…"
                aria-label="Rechercher un article"
                className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
              />
            </div>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 sm:px-8 -mt-14 relative">

          {/* ARTICLE À LA UNE */}
          {!isFiltering && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-14"
            >
              <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[380px] overflow-hidden">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 576px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <div className="flex items-center gap-3 mb-5">
                  <span className="bg-[#1e5d2e] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">À la une</span>
                  <span className="text-[#1e5d2e] text-xs font-semibold uppercase tracking-wider">{featured.category}</span>
                </div>
                <h2 className="text-gray-900 font-black leading-tight mb-4 group-hover:text-[#1e5d2e] transition-colors" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3vw,34px)" }}>
                  {featured.title}
                </h2>
                <p className="text-gray-500 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-400">
                    <p className="font-semibold text-gray-700">{featured.author}</p>
                    <p>{featured.date} · {featured.readingTime} min de lecture</p>
                  </div>
                  <span className="w-11 h-11 rounded-full bg-[#1e5d2e] text-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                    <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            </Link>
          )}

          {/* CATÉGORIES */}
          <div className={`flex gap-2 overflow-x-auto pb-2 mb-8 ${isFiltering ? "pt-20" : ""}`}>
            {[null, ...blogCategories].map((c) => (
              <button
                key={c ?? "all"}
                onClick={() => setCategory(c)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold border transition-colors ${
                  category === c
                    ? "bg-[#1e5d2e] text-white border-[#1e5d2e]"
                    : "bg-white text-gray-600 border-gray-200 hover:border-[#1e5d2e]/40 hover:text-[#1e5d2e]"
                }`}
              >
                {c ?? "Tous les articles"}
              </button>
            ))}
          </div>

          {/* GRILLE */}
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
              {posts.map((post) => <PostCard key={post.slug} post={post} />)}
            </div>
          ) : (
            <p className="text-center text-gray-500 py-16 mb-20">Aucun article ne correspond à votre recherche.</p>
          )}
        </div>

        {/* NEWSLETTER */}
        <section className="px-6 sm:px-8 pb-24">
          <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-br from-[#0a2e14] to-[#1e5d2e] px-8 py-14 sm:px-14 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
                <Mail size={22} className="text-white" />
              </div>
              <h2 className="text-white font-black text-2xl sm:text-3xl mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                Recevez nos conseils immobiliers
              </h2>
              <p className="text-white/70 text-sm leading-relaxed">
                Nouveaux articles, offres et actualités de la Cité Prestige, directement dans votre boîte mail.
              </p>
            </div>
            {/* Formulaire de démonstration : à brancher sur un outil d'emailing */}
            <form
              onSubmit={(e) => { e.preventDefault(); setNewsletterSent(true); }}
              className="w-full lg:w-auto flex flex-col sm:flex-row flex-wrap gap-3"
            >
              <input
                type="email"
                required
                placeholder="Votre adresse e-mail"
                aria-label="Votre adresse e-mail"
                className="w-full sm:w-72 rounded-xl px-4 py-3.5 text-sm outline-none bg-white"
              />
              <button type="submit" className="rounded-xl bg-[#4ade80] hover:bg-[#3fcf73] text-[#0a2e14] font-bold px-6 py-3.5 text-sm transition-colors">
                S&apos;abonner
              </button>
              {newsletterSent && (
                <p className="w-full text-white/80 text-xs">L&apos;inscription à la newsletter sera bientôt disponible.</p>
              )}
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
