"use client";

import { useState } from "react";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { HardHat, Wrench, Building2, Droplets, CheckCircle2, X } from "lucide-react";

// ── Galeries images par service ───────────────────────────────────────────────
const galerieBatiment = [
  "/images/nos realisation/4T5B0239.JPG",
  "/images/nos realisation/4T5B0462.JPG",
  "/images/nos realisation/4T5B0487.JPG",
  "/images/nos realisation/4T5B0561.JPG",
  "/images/nos realisation/Capture d'écran 2026-03-04 131335.webp",
  "/images/nos realisation/Capture d'écran 2026-03-04 141528.webp",
  "/images/nos realisation/Capture d'écran 2026-04-14 115530.webp",
  "/images/nos realisation/Capture d'écran 2026-04-14 115655.webp",
  "/images/nos realisation/Capture d'écran 2026-04-14 115803.webp",
  "/images/nos realisation/Capture d'écran 2026-04-14 120028.webp",
  "/images/nos realisation/Capture d'écran 2026-04-14 122615.webp",
  "/images/nos realisation/Capture d'écran 2026-04-14 122658.webp",
  "/images/nos realisation/IMG_4415.JPG.webp",
  "/images/nos realisation/IMG_4441.JPG.webp",
  "/images/nos realisation/IMG_8638.JPG",
  "/images/nos realisation/Screenshot_20260414-165054.webp",
  "/images/nos realisation/Screenshot_20260414-165800.webp",
  "/images/nos realisation/Screenshot_20260414-170244.webp",
  "/images/nos realisation/dji_fly_20240413_095304_712_1713010100034_photo-1.JPG",
];

const galerieVRD = [
  "/images/zoh-henan-construction/vrd/4T5B0444.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0449.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0452.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0453.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0458.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0478.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0479.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0484.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0496.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0512.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0513.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0517.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0565.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0575.JPG",
  "/images/zoh-henan-construction/vrd/4T5B0607.JPG",
];

type GaleriePopupProps = {
  images: string[];
  titre: string;
  onClose: () => void;
};

function GaleriePopup({ images, titre, onClose }: GaleriePopupProps) {
  const [active, setActive] = useState(0);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" />
      <div
        className="relative bg-[#0a1a0e] rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
          <h3 className="text-white font-bold text-sm tracking-wider uppercase">{titre}</h3>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <X size={14} className="text-white" />
          </button>
        </div>
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={images[active]}
            alt={`${titre} - ${active + 1}`}
            fill
            className="object-cover"
            quality={85}
            sizes="800px"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </div>
        <div className="grid grid-cols-6 gap-1.5 p-4">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${i === active ? "border-[#1e5d2e]" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <Image src={img} alt="" fill className="object-cover" quality={60} sizes="80px" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const objectifsCourt = [
  "Acquisition de matériels et d'engins de construction de dernière génération",
  "Renforcement des capacités opérationnelles pour répondre à la demande croissante",
  "Optimisation des coûts de production",
];

const objectifsLong = [
  "Unité de fabrication d'agglos, baies vitrées, portes et cadres",
  "Unité de production de ciment pour réduire la dépendance aux fournisseurs",
  "Création de nombreux emplois et optimisation de la chaîne de production",
  "Positionnement comme leader de l'immobilier en Côte d'Ivoire",
];

const partenaires = [
  { nom: "Cabinet CAIE – GBAGBEU GONNE", role: "Architecture visionnaire — espaces modernes et élégants" },
  { nom: "Atelier Privé d'Urbanisme", role: "M. GUEI Étienne, Ingénieur Urbaniste & Formateur INP-HB — environnements urbains harmonieux" },
  { nom: "Cabinet SYGMA – NGUESSAN Francis", role: "Ingénierie de pointe et réalisations techniques d'une précision irréprochable" },
];

export default function ZohHenanConstructionPage() {
  const [galerie, setGalerie] = useState<{ images: string[]; titre: string } | null>(null);

  return (
    <>
      <Header />
      <FloatingButtons />
      {galerie && <GaleriePopup images={galerie.images} titre={galerie.titre} onClose={() => setGalerie(null)} />}

      <main className="min-h-screen pt-[70px]">

        {/* ── HERO CINÉMATIQUE ─────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ height: "80vh", minHeight: "500px" }}>
          <Image
            src="/images/accueil/hero-slider/GUERITE ENTREE PRINCIPALE.jpg"
            alt="ZOH HENAN Construction"
            fill priority quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e5d2e]" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-12 lg:px-20">
            <div className="max-w-3xl">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[5px] uppercase mb-5">Branche Construction</p>
              <h1 className="text-white font-black leading-tight mb-6"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(36px,6vw,70px)" }}>
                ZOH HENAN<br />Construction
              </h1>
              <div className="w-14 h-[3px] bg-[#1e5d2e] rounded mb-8" />
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
                Véritable moteur opérationnel de ZOH-HENAN Immobilier, la Direction de Construction et des Travaux transforme chaque vision immobilière en réalité bâtie, avec rigueur, expertise et ambition.
              </p>
            </div>
          </div>
          {/* Stats flottants */}
          <div className="absolute bottom-10 right-6 sm:right-12 flex gap-4">
            {[
              { val: "619", label: "Villas" },
              { val: "31 ha", label: "Aménagés" },
              { val: "15+", label: "Ans d'exp." },
            ].map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-5 py-3 text-center">
                <div className="text-white font-black text-lg" style={{ fontFamily: "var(--font-playfair)" }}>{s.val}</div>
                <div className="text-white/60 text-[9px] uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── VISION ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Notre vision</p>
              <h2 className="text-gray-900 font-black mb-4 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,38px)" }}>
                Construire, pas seulement concevoir
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-6" />
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed">
                <p>La société ZOH-HENAN Immobilier s'appuie sur deux leviers fondamentaux : <strong className="text-gray-900">l'ingénierie et la conception</strong> de projets innovants, et la <strong className="text-gray-900">construction et la réalisation</strong> de travaux de qualité.</p>
                <p>Notre mission est claire : construire tous les projets que nous développons, mais aussi <strong className="text-gray-900">accompagner nos partenaires externes</strong> en leur offrant des solutions fiables, durables et adaptées à leurs besoins.</p>
                <p>ZOH-HENAN incarne ainsi la promesse d'un acteur immobilier complet, capable de transformer une vision en réalité.</p>
              </div>
            </div>
            {/* Image immersive */}
            <div className="relative rounded-2xl overflow-hidden h-80 lg:h-[420px]">
              <Image
                src="/images/4T5B0354.JPG"
                alt="Construction villa"
                fill quality={85}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5">
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { val: "15+", label: "Années d'expérience" },
                    { val: "619", label: "Villas en construction" },
                    { val: "3", label: "Cabinets partenaires" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/15 backdrop-blur-sm rounded-lg p-3 text-center border border-white/20">
                      <div className="text-white font-black text-xl" style={{ fontFamily: "var(--font-playfair)" }}>{s.val}</div>
                      <div className="text-white/70 text-[9px] uppercase tracking-wide leading-tight">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DEUX SERVICES CLIQUABLES ──────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-gray-950">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Organisation</p>
              <h2 className="text-white font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,40px)" }}>
                Nos Deux Services
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4" />
              <p className="text-white/50 text-sm mt-4">Cliquez sur un service pour voir les réalisations</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* BÂTIMENTS */}
              <button
                onClick={() => setGalerie({ images: galerieBatiment, titre: "Travaux de Bâtiments" })}
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer text-left"
              >
                <Image
                  src="/images/zoh-henan-construction/batiments/4T5B0591.JPG"
                  alt="Travaux de Bâtiments"
                  fill quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 transition-all duration-500" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e5d2e]/20 border border-[#1e5d2e]/40 flex items-center justify-center mb-4 group-hover:bg-[#1e5d2e]/40 transition-colors">
                    <Building2 size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Travaux de Bâtiments</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Conception et réalisation d'ouvrages immobiliers modernes, fonctionnels et durables.</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[#1e5d2e] text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Voir les réalisations →
                  </span>
                </div>
              </button>

              {/* VRD */}
              <button
                onClick={() => setGalerie({ images: galerieVRD, titre: "Travaux Publics & VRD" })}
                className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer text-left"
              >
                <Image
                  src="/images/zoh-henan-construction/vrd/4T5B0452.JPG"
                  alt="Travaux Publics VRD"
                  fill quality={80}
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10 group-hover:from-black/95 transition-all duration-500" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <div className="w-14 h-14 rounded-2xl bg-[#1e5d2e]/20 border border-[#1e5d2e]/40 flex items-center justify-center mb-4 group-hover:bg-[#1e5d2e]/40 transition-colors">
                    <Droplets size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Travaux Publics & VRD</h3>
                  <p className="text-white/60 text-sm leading-relaxed">Routes, assainissement, adduction d'eau, réseaux électriques et voiries.</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[#1e5d2e] text-xs font-bold uppercase tracking-wider group-hover:gap-3 transition-all">
                    Voir les réalisations →
                  </span>
                </div>
              </button>

            </div>
          </div>
        </section>

        {/* ── IMAGE IMMERSIVE INTERMÉDIAIRE ──────────────────────────── */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <Image
            src="/images/zoh-henan-construction/batiments/4T5B0580.JPG"
            alt="Chantier ZOH-HENAN"
            fill quality={80}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a2e14]/80 via-black/50 to-[#0a2e14]/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/90 text-xl sm:text-2xl font-bold text-center max-w-2xl px-6 leading-relaxed"
              style={{ fontFamily: "var(--font-playfair)" }}>
              &ldquo;Chaque villa est le fruit d'une expertise collective et d'une exigence absolue.&rdquo;
            </p>
          </div>
        </div>

        {/* ── ORGANIGRAMME ──────────────────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Structure</p>
              <h2 className="text-gray-900 font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,38px)" }}>
                Organisation des Services
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4" />
            </div>

            {/* Organigramme visuel */}
            <div className="flex flex-col items-center gap-0">

              {/* DIRECTION */}
              <div className="bg-[#0a2e14] text-white rounded-2xl px-8 py-5 text-center w-full max-w-xs shadow-lg border border-[#1e5d2e]/30">
                <div className="w-10 h-10 rounded-full bg-[#1e5d2e] flex items-center justify-center mx-auto mb-3">
                  <HardHat size={18} className="text-white" />
                </div>
                <p className="text-[#7ddc9e] text-[10px] font-semibold tracking-[3px] uppercase mb-1">Direction</p>
                <h3 className="text-white font-black text-base leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                  Direction des Travaux<br />et Constructions
                </h3>
              </div>

              {/* Ligne verticale + branche horizontale */}
              <div className="flex flex-col items-center">
                <div className="w-[2px] h-8 bg-[#1e5d2e]/40" />
                <div className="relative w-full max-w-2xl flex justify-center">
                  <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-[#1e5d2e]/40" />
                </div>
              </div>

              {/* DEUX RESPONSABLES */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-2xl">

                {/* VRD */}
                <div className="flex flex-col items-center gap-0">
                  <div className="w-[2px] h-8 bg-[#1e5d2e]/40" />
                  <div className="bg-gray-50 border-2 border-[#1e5d2e]/40 rounded-2xl px-6 py-5 text-center w-full">
                    <div className="w-10 h-10 rounded-full bg-[#1e5d2e]/15 border border-[#1e5d2e]/40 flex items-center justify-center mx-auto mb-3">
                      <Droplets size={18} className="text-[#1e5d2e]" />
                    </div>
                    <p className="text-[#1e5d2e] text-[10px] font-semibold tracking-[3px] uppercase mb-1">Responsable</p>
                    <h3 className="text-gray-900 font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                      Travaux Publics & VRD
                    </h3>
                  </div>
                  {/* Assistant VRD — même style */}
                  <div className="w-[2px] h-6 bg-[#1e5d2e]/30" />
                  <div className="bg-gray-50 border-2 border-[#1e5d2e]/40 rounded-2xl px-6 py-4 text-center w-full">
                    <div className="w-8 h-8 rounded-full bg-[#1e5d2e]/15 border border-[#1e5d2e]/40 flex items-center justify-center mx-auto mb-2">
                      <Droplets size={14} className="text-[#1e5d2e]" />
                    </div>
                    <p className="text-[#1e5d2e] text-[10px] font-semibold tracking-[3px] uppercase mb-0.5">Assistant</p>
                    <p className="text-gray-700 text-xs font-bold">VRD</p>
                  </div>
                </div>

                {/* BÂTIMENTS */}
                <div className="flex flex-col items-center gap-0">
                  <div className="w-[2px] h-8 bg-[#1e5d2e]/40" />
                  <div className="bg-gray-50 border-2 border-[#1e5d2e]/40 rounded-2xl px-6 py-5 text-center w-full">
                    <div className="w-10 h-10 rounded-full bg-[#1e5d2e]/15 border border-[#1e5d2e]/40 flex items-center justify-center mx-auto mb-3">
                      <Building2 size={18} className="text-[#1e5d2e]" />
                    </div>
                    <p className="text-[#1e5d2e] text-[10px] font-semibold tracking-[3px] uppercase mb-1">Responsable</p>
                    <h3 className="text-gray-900 font-bold text-sm leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                      Travaux Bâtiments
                    </h3>
                  </div>
                  {/* Assistant Bâtiments — même style */}
                  <div className="w-[2px] h-6 bg-[#1e5d2e]/30" />
                  <div className="bg-gray-50 border-2 border-[#1e5d2e]/40 rounded-2xl px-6 py-4 text-center w-full">
                    <div className="w-8 h-8 rounded-full bg-[#1e5d2e]/15 border border-[#1e5d2e]/40 flex items-center justify-center mx-auto mb-2">
                      <Building2 size={14} className="text-[#1e5d2e]" />
                    </div>
                    <p className="text-[#1e5d2e] text-[10px] font-semibold tracking-[3px] uppercase mb-0.5">Assistant</p>
                    <p className="text-gray-700 text-xs font-bold">Bâtiments</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALERIE PHOTOS CHANTIER ──────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Sur le terrain</p>
              <h2 className="text-white font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,38px)" }}>
                Nos Réalisations
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {galerieBatiment.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setGalerie({ images: galerieBatiment, titre: "Réalisations" })}
                  className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Réalisation ${i + 1}`}
                    fill quality={75}
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white text-xs font-bold bg-black/50 px-3 py-1.5 rounded-full">
                      Agrandir
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOGISTIQUE ───────────────────────────────────────────── */}
        <section className="relative py-24 px-6 sm:px-12 overflow-hidden">
          <Image
            src="/images/zoh-henan-construction/vrd/4T5B0444.JPG"
            alt="Logistique chantier"
            fill quality={75}
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0a2e14]/88" />
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 40px)" }} />
          <div className="relative max-w-4xl mx-auto text-center">
            <HardHat size={40} strokeWidth={1.5} className="text-[#1e5d2e] mx-auto mb-5" />
            <h2 className="text-white font-black mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
              Une logistique intégrée et performante
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed max-w-2xl mx-auto">
              Dotée d'engins lourds, de véhicules légers et d'équipements spécialisés, la société a rendu son département Construction totalement autonome. Sur chaque chantier, elle assure son approvisionnement en eau et en énergie grâce à des châteaux d'eau et un local de transformateur — garantissant indépendance, efficacité et fiabilité.
            </p>
          </div>
        </section>

        {/* ── PARTENAIRES ──────────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Une alliance d'excellence</p>
              <h2 className="text-gray-900 font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,38px)" }}>
                Nos Partenaires Techniques
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4 mb-4" />
              <p className="text-gray-500 text-sm max-w-xl mx-auto">Chaque projet est conçu et réalisé grâce à l'expertise des meilleurs spécialistes.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {partenaires.map((p, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-100 text-center hover:border-[#1e5d2e]/30 hover:shadow-sm transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-[#1e5d2e] text-white font-black text-sm flex items-center justify-center mx-auto mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}>0{i + 1}</div>
                  <h3 className="text-gray-900 font-bold text-sm mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{p.nom}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{p.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OBJECTIFS ────────────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Court terme</p>
              <h2 className="text-gray-900 font-black mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,2.5vw,30px)" }}>
                Nos Objectifs Immédiats
              </h2>
              <ul className="space-y-3">
                {objectifsCourt.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#1e5d2e] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Moyen & long terme</p>
              <h2 className="text-gray-900 font-black mb-6 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,2.5vw,30px)" }}>
                Notre Vision Stratégique
              </h2>
              <ul className="space-y-3">
                {objectifsLong.map((o, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={17} className="text-[#1e5d2e] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────── */}
        <section className="bg-white border-t border-gray-100 py-16 px-6 text-center">
          <h2 className="text-gray-900 font-black mb-3"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
            Un projet de construction en tête ?
          </h2>
          <p className="text-gray-500 text-sm mb-8 max-w-md mx-auto">
            Notre équipe est prête à étudier votre projet et à vous proposer les meilleures solutions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold px-8 py-4 rounded text-sm transition-colors duration-200">
              <Wrench size={16} />
              Nous contacter
            </Link>
            <Link href="/mission"
              className="inline-flex items-center gap-2 border-2 border-[#1e5d2e] text-[#1e5d2e] hover:bg-[#1e5d2e] hover:text-white font-bold px-8 py-4 rounded text-sm transition-all duration-200">
              <Building2 size={16} />
              Notre Mission
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
