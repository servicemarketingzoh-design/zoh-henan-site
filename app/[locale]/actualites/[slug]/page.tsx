"use client";

import { use, useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Header from "../../components/Header";
import FloatingButtons from "../../components/FloatingButtons";
import Footer from "../../components/Footer";
import { actualites } from "../data";
import { CalendarDays, ArrowLeft, ArrowRight, Tag, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ActualiteDetailPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug } = use(params);
  const actu = actualites.find((a) => a.slug === slug);
  if (!actu) notFound();

  const index = actualites.indexOf(actu);
  const prev = actualites[index - 1] ?? null;
  const next = actualites[index + 1] ?? null;

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px]">

        {/* HERO IMAGE */}
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
              <h1 className="text-white font-black leading-tight"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,4vw,46px)" }}>
                {actu.titre}
              </h1>
            </div>
          </div>
        </div>

        {/* CONTENU */}
        <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <Link href="/actualites" className="inline-flex items-center gap-2 text-[#1e5d2e] text-sm font-semibold mb-10 hover:underline">
              <ArrowLeft size={16} /> Retour aux actualités
            </Link>

            {/* TEXTE */}
            <div className="prose prose-sm max-w-none text-gray-600 leading-relaxed space-y-4">
              {actu.contenu.split("\n\n").map((para, i) => (
                <p key={i} className="text-gray-600 text-[15px] leading-relaxed">{para}</p>
              ))}
            </div>

            {/* GALERIE PHOTOS */}
            {actu.photos.length > 0 && (
              <div className="mt-14">
                <h2 className="text-gray-900 font-black mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,3vw,30px)" }}>
                  Photos de l'événement
                </h2>
                <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-8" />
                <PhotoGallery photos={actu.photos} />
              </div>
            )}

            {/* VIDÉO */}
            {actu.video && (
              <div className="mt-14">
                <h2 className="text-gray-900 font-black mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,3vw,30px)" }}>
                  Vidéo
                </h2>
                <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-8" />
                <div className="aspect-video rounded-xl overflow-hidden">
                  <iframe
                    src={actu.video}
                    className="w-full h-full"
                    allowFullScreen
                    title="Vidéo événement"
                  />
                </div>
              </div>
            )}
          </div>
        </section>

        {/* NAVIGATION PREV / NEXT */}
        <section className="py-10 px-6 sm:px-12 lg:px-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between gap-4">
            {prev ? (
              <Link href={`/actualites/${prev.slug}`} className="flex items-center gap-3 group max-w-xs">
                <ArrowLeft size={18} className="text-[#1e5d2e] shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Article précédent</p>
                  <p className="text-gray-700 text-sm font-semibold group-hover:text-[#1e5d2e] transition-colors leading-snug">{prev.titre}</p>
                </div>
              </Link>
            ) : <div />}
            {next ? (
              <Link href={`/actualites/${next.slug}`} className="flex items-center gap-3 group max-w-xs sm:text-right sm:flex-row-reverse">
                <ArrowRight size={18} className="text-[#1e5d2e] shrink-0" />
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400 mb-1">Article suivant</p>
                  <p className="text-gray-700 text-sm font-semibold group-hover:text-[#1e5d2e] transition-colors leading-snug">{next.titre}</p>
                </div>
              </Link>
            ) : <div />}
          </div>
        </section>

        {/* AUTRES ARTICLES */}
        <section className="py-14 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-gray-900 font-black mb-8" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,3vw,30px)" }}>
              Autres actualités
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {actualites.filter((a) => a.slug !== slug).slice(0, 3).map((a) => (
                <Link key={a.slug} href={`/actualites/${a.slug}`} className="group flex flex-col gap-3">
                  <div className="overflow-hidden rounded-xl relative h-40">
                    <Image src={a.img} alt={a.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="(max-width:768px) 100vw, 33vw" />
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-xs"><CalendarDays size={12} />{a.date}</div>
                  <h3 className="text-gray-800 font-bold text-sm leading-snug group-hover:text-[#1e5d2e] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                    {a.titre}
                  </h3>
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

function PhotoGallery({ photos }: { photos: string[] }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openAt = (i: number) => setSelectedIndex(i);
  const close = () => setSelectedIndex(null);
  const goPrev = () => setSelectedIndex((i) => (i! - 1 + photos.length) % photos.length);
  const goNext = () => setSelectedIndex((i) => (i! + 1) % photos.length);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex]);

  return (
    <>
      {/* GRILLE MASONRY */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {/* 1ère photo grande */}
        {photos[0] && (
          <button
            onClick={() => openAt(0)}
            className="col-span-2 row-span-2 overflow-hidden rounded-2xl group cursor-pointer relative"
          >
            <img
              src={photos[0]}
              alt="Photo 1"
              className="w-full h-72 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>
            </div>
          </button>
        )}
        {/* Reste des photos */}
        {photos.slice(1).map((photo, i) => (
          <button
            key={i + 1}
            onClick={() => openAt(i + 1)}
            className="overflow-hidden rounded-2xl group cursor-pointer relative"
          >
            <img
              src={photo}
              alt={`Photo ${i + 2}`}
              className="w-full h-36 sm:h-40 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 shrink-0">
            <span className="text-white/50 text-sm">{selectedIndex + 1} / {photos.length}</span>
            <button onClick={close} className="text-white/70 hover:text-white transition-colors text-2xl font-light">✕</button>
          </div>

          {/* Image */}
          <div className="flex-1 flex items-center justify-center px-16 relative overflow-hidden">
            <img
              src={photos[selectedIndex]}
              alt={`Photo ${selectedIndex + 1}`}
              className="max-w-full max-h-full object-contain rounded-xl transition-opacity duration-300"
            />

            {/* Flèches */}
            <button
              onClick={goPrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={goNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:scale-110"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Miniatures */}
          <div className="shrink-0 px-6 py-4 flex gap-2 overflow-x-auto justify-center">
            {photos.map((photo, i) => (
              <button
                key={i}
                onClick={() => setSelectedIndex(i)}
                className={`shrink-0 rounded-lg overflow-hidden transition-all duration-200 ${
                  i === selectedIndex ? "ring-2 ring-[#1e5d2e] opacity-100 scale-105" : "opacity-40 hover:opacity-70"
                }`}
              >
                <Image src={photo} alt={`Miniature ${i + 1}`} width={56} height={40} className="object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
