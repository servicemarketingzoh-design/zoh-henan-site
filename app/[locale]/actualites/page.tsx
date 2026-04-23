"use client";

import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import { CalendarDays, ArrowRight } from "lucide-react";
import Link from "next/link";
import { actualites } from "./data";

export default function ActualitesPage() {
  const visibles = actualites.filter((a) => !a.hidden);
  const [hero, ...reste] = visibles;

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px]">

        {/* HERO */}
        <section className="relative bg-[#1e5d2e] py-24 px-6 sm:px-12 overflow-hidden">
          <div className="absolute inset-0 opacity-10"
            style={{ backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)", backgroundSize: "20px 20px" }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-white/70 text-xs font-semibold tracking-[4px] uppercase mb-4">Restez informés</p>
            <h1 className="text-white font-black mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px,5vw,56px)" }}>
              Actualités & Événements
            </h1>
            <div className="w-16 h-[3px] bg-white/40 rounded mx-auto mb-8" />
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              Suivez toute l'actualité de ZOH-HENAN GUOJI : lancements de projets, partenariats, événements et bien plus.
            </p>
          </div>
        </section>

        {/* ARTICLE PRINCIPAL */}
        <section className="py-16 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <Link href={`/actualites/${hero.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={hero.img}
                  alt={hero.titre}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[#1e5d2e] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">{hero.categorie}</span>
                  <span className="flex items-center gap-1 text-gray-400 text-xs"><CalendarDays size={12} />{hero.date}</span>
                </div>
                <h2 className="text-gray-900 font-black mb-4 leading-tight group-hover:text-[#1e5d2e] transition-colors"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
                  {hero.titre}
                </h2>
                <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-4" />
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{hero.extrait}</p>
                <span className="inline-flex items-center gap-2 text-[#1e5d2e] font-bold text-sm group-hover:gap-3 transition-all duration-200">
                  Lire l'article <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          </div>
        </section>

        {/* GRILLE GALERIE */}
        <section className="py-10 pb-20 px-6 sm:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-gray-900 font-black mb-10" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,32px)" }}>
              Tous les articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {reste.map((actu) => (
                <Link
                  key={actu.slug}
                  href={`/actualites/${actu.slug}`}
                  className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col group"
                >
                  <div className="relative overflow-hidden">
                    <img src={actu.img} alt={actu.titre} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 left-3 bg-[#1e5d2e] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {actu.categorie}
                    </span>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                      <CalendarDays size={13} />{actu.date}
                    </div>
                    <h3 className="text-gray-900 font-bold text-base mb-2 leading-snug group-hover:text-[#1e5d2e] transition-colors" style={{ fontFamily: "var(--font-playfair)" }}>
                      {actu.titre}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{actu.extrait}</p>
                    <span className="mt-4 text-[#1e5d2e] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-200 self-start">
                      Lire plus <ArrowRight size={14} />
                    </span>
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
