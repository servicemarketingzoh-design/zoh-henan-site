"use client";

import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Clock } from "lucide-react";

const projets = [
  {
    slug: "cite-prestige",
    nom: "Cité Prestige",
    lieu: "Bingerville, Abidjan",
    statut: "En cours",
    statutColor: "#1e5d2e",
    villas: "619 villas",
    hectares: "31 hectares",
    types: "3P · 4P · 5P · 6P",
    desc: "Le programme résidentiel le plus ambitieux de Côte d'Ivoire. 619 villas de moyen et bon standing sur 31 hectares aménagés dans un cadre sécurisé et verdoyant.",
    photo: "/images/accueil/cite-prestige/GUERITE ENTREE PRINCIPALE.jpg",
    actif: true,
  },
  {
    slug: "songon",
    nom: "Projet Songon",
    lieu: "Songon, Abidjan",
    statut: "Bientôt disponible",
    statutColor: "#d97706",
    villas: "À venir",
    hectares: "—",
    types: "—",
    desc: "Un nouveau programme résidentiel de standing sera prochainement lancé à Songon. Inscrivez-vous pour être informé en priorité.",
    photo: "/images/accueil/hero-slider/PLAN DE MASSE 01.jpg",
    actif: false,
  },
];

export default function ProprietesPage() {
  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px]">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative py-32 px-6 sm:px-12 overflow-hidden">
          <Image
            src="/images/accueil/hero-slider/Perspective masse 01.jpg"
            alt="Nos Propriétés"
            fill priority quality={80}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e5d2e]" />
          <div className="relative max-w-4xl mx-auto">
            <p className="text-[#1e5d2e] text-xs font-semibold tracking-[5px] uppercase mb-5">Notre portefeuille</p>
            <h1 className="text-white font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(34px,5.5vw,64px)" }}>
              Nos Propriétés
            </h1>
            <div className="w-14 h-[3px] bg-[#1e5d2e] rounded mb-8" />
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
              Découvrez nos programmes immobiliers résidentiels — des villas de qualité dans des cadres de vie exceptionnels, avec tous les titres de propriété garantis.
            </p>
          </div>
        </section>

        {/* ── PROJETS ──────────────────────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Nos programmes</p>
              <h2 className="text-gray-900 font-black"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,4vw,42px)" }}>
                Choisissez votre projet
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projets.map((p) => (
                <div key={p.slug}
                  className={`group relative rounded-3xl overflow-hidden shadow-lg ${p.actif ? "cursor-pointer" : "cursor-default"}`}>
                  {/* Photo de fond */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={p.photo}
                      alt={p.nom}
                      fill quality={80}
                      className={`object-cover transition-transform duration-700 ${p.actif ? "group-hover:scale-105" : "grayscale"}`}
                    />
                    {/* Dégradé */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                    {/* Badge statut */}
                    <div className="absolute top-5 left-5">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: p.statutColor }}>
                        {p.actif && <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />}
                        {p.statut}
                      </span>
                    </div>

                    {/* Infos en bas */}
                    <div className="absolute bottom-0 left-0 right-0 p-7">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={13} className="text-[#1e5d2e]" />
                        <span className="text-white/70 text-xs">{p.lieu}</span>
                      </div>
                      <h3 className="text-white font-black text-2xl mb-2"
                        style={{ fontFamily: "var(--font-playfair)" }}>{p.nom}</h3>
                      <p className="text-white/70 text-sm leading-relaxed mb-5 max-w-sm">{p.desc}</p>

                      {/* Stats */}
                      <div className="flex flex-wrap gap-4 mb-6">
                        {[
                          { val: p.villas, label: "Villas" },
                          { val: p.hectares, label: "Hectares" },
                          { val: p.types, label: "Types" },
                        ].map((s) => s.val !== "—" && (
                          <div key={s.label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-2 text-center">
                            <div className="text-white font-black text-sm">{s.val}</div>
                            <div className="text-white/50 text-[10px] uppercase tracking-wider">{s.label}</div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      {p.actif ? (
                        <Link href={`/proprietes/${p.slug}`}
                          className="inline-flex items-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200 group-hover:gap-3">
                          Voir les villas
                          <ArrowRight size={16} />
                        </Link>
                      ) : (
                        <Link href="/contact"
                          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-200">
                          <Clock size={15} />
                          Être informé en priorité
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GARANTIES ────────────────────────────────────────────── */}
        <section className="bg-gray-50 border-t border-gray-100 py-16 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { val: "619+", label: "Villas disponibles" },
              { val: "100%", label: "Titres CMPF garantis" },
              { val: "31 ha", label: "Terrain aménagé" },
              { val: "2017", label: "Fondée en" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-xl p-6 border border-gray-100">
                <div className="text-[#1e5d2e] font-black text-3xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{s.val}</div>
                <div className="w-6 h-[2px] bg-[#1e5d2e]/30 rounded mx-auto mb-2" />
                <div className="text-gray-500 text-sm font-semibold uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
