"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Header from "../../../components/Header";
import FloatingButtons from "../../../components/FloatingButtons";
import Footer from "../../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Car, Ruler, Check, ArrowLeft, ShoppingBag, Phone, MessageCircle, ChevronLeft, ChevronRight, X } from "lucide-react";
import { villas, formatPrix } from "../../villas-data";

const typeLabels: Record<string, string> = {
  "6P":       "Villa Prestige 6 Pièces",
  "5P":       "Villa 5 Pièces",
  "5P Basse": "Villa Basse 5 Pièces",
  "5P Duplex":"Villa Duplex 5 Pièces",
  "4P Duplex":"Villa Duplex 4 Pièces",
  "3P":       "Villa Basse 3 Pièces",
};
import { useCart } from "../../../components/CartContext";

export default function VillaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const villa = villas.find((v) => v.slug === slug);
  if (!villa) notFound();

  const { add, remove, isInCart } = useCart();
  const enPanier = isInCart(villa.slug);

  const [photoActive, setPhotoActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);

  const autresVillas = villas.filter((v) => v.slug !== villa.slug).slice(0, 3);

  const goLightbox = (dir: 1 | -1) => {
    if (lightbox === null) return;
    setLightbox((lightbox + dir + villa.photos.length) % villa.photos.length);
  };

  return (
    <>
      <Header />
      <FloatingButtons />

      {/* ── LIGHTBOX ──────────────────────────────────────────────── */}
      {lightbox !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col" onClick={() => setLightbox(null)}>
          <div className="flex items-center justify-between px-6 py-4">
            <span className="text-white/50 text-sm">{lightbox + 1} / {villa.photos.length}</span>
            <button onClick={() => setLightbox(null)} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <X size={18} className="text-white" />
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center relative px-16" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full max-w-4xl aspect-[16/9]">
              <Image src={villa.photos[lightbox]} alt={`Photo ${lightbox + 1}`} fill className="object-contain" />
            </div>
            <button onClick={() => goLightbox(-1)} className="absolute left-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <ChevronLeft size={22} className="text-white" />
            </button>
            <button onClick={() => goLightbox(1)} className="absolute right-4 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center">
              <ChevronRight size={22} className="text-white" />
            </button>
          </div>
          <div className="flex justify-center gap-2 px-6 py-4 overflow-x-auto">
            {villa.photos.map((p, i) => (
              <button key={i} onClick={(e) => { e.stopPropagation(); setLightbox(i); }}
                className={`flex-shrink-0 w-16 h-12 rounded-lg overflow-hidden border-2 transition-all ${i === lightbox ? "border-[#1e5d2e]" : "border-transparent opacity-50 hover:opacity-80"}`}>
                <Image src={p} alt="" width={64} height={48} className="object-cover w-full h-full" />
              </button>
            ))}
          </div>
        </div>
      )}

      <main className="min-h-screen pt-[70px] bg-gray-50">

        {/* ── BREADCRUMB ────────────────────────────────────────────── */}
        <div className="bg-white border-b border-gray-100 px-6 sm:px-12 lg:px-20 py-3">
          <div className="max-w-6xl mx-auto flex items-center gap-2 text-xs text-gray-400">
            <Link href="/proprietes" className="hover:text-[#1e5d2e] transition-colors">Propriétés</Link>
            <span>›</span>
            <Link href="/proprietes/cite-prestige" className="hover:text-[#1e5d2e] transition-colors">Cité Prestige</Link>
            <span>›</span>
            <span className="text-gray-700 font-semibold">{villa.titre}</span>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-20 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

            {/* ── GALERIE (gauche) ──────────────────────────────────── */}
            <div className="lg:col-span-3 space-y-3">
              {/* Photo principale */}
              <div
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => setLightbox(photoActive)}
              >
                <Image
                  src={villa.photos[photoActive]}
                  alt={villa.titre}
                  fill quality={85}
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-bold px-4 py-2 rounded-full">
                    Agrandir
                  </span>
                </div>
                {/* Compteur */}
                <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                  {photoActive + 1} / {villa.photos.length}
                </div>
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${villa.standing === "Haut" ? "bg-[#1e5d2e]" : villa.standing === "Bon" ? "bg-[#1a6b8a]" : "bg-gray-500"}`}>
                    {villa.standing} Standing
                  </span>
                  {villa.badge && <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500 text-white">{villa.badge}</span>}
                </div>
              </div>

              {/* Miniatures */}
              <div className="grid grid-cols-4 gap-2">
                {villa.photos.map((p, i) => (
                  <button key={i} onClick={() => setPhotoActive(i)}
                    className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-200 ${i === photoActive ? "border-[#1e5d2e]" : "border-transparent opacity-60 hover:opacity-100"}`}>
                    <Image src={p} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* ── INFOS (droite) ────────────────────────────────────── */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-7 border border-gray-100 shadow-sm sticky top-24 space-y-6">

                {/* Titre & type */}
                <div>
                  <p className="text-[#1e5d2e] text-xs font-bold uppercase tracking-[4px] mb-1">{typeLabels[villa.type] ?? villa.type} · Cité Prestige · Bingerville</p>
                  <h1 className="text-gray-900 font-black leading-tight"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,3vw,36px)" }}>
                    {villa.titre}
                  </h1>
                  <div className="flex items-center gap-2 mt-2 text-gray-500 text-sm">
                    <MapPin size={13} className="text-[#1e5d2e]" />
                    Bingerville, Abidjan
                    <span className="text-gray-200">·</span>
                    <span className="text-[#1e5d2e] font-semibold">{villa.disponibles} disponibles</span>
                  </div>
                </div>

                {/* Prix */}
                <div className="bg-[#1e5d2e]/5 border border-[#1e5d2e]/20 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-1">Prix indicatif à partir de</p>
                  <p className="text-[#1e5d2e] font-black text-2xl" style={{ fontFamily: "var(--font-playfair)" }}>
                    {formatPrix(villa.prix)}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">* Tarif provisoire — à confirmer avec notre équipe</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: <Ruler size={15} />, label: "Superficie bâtie", val: `${villa.superficieBatie} m²` },
                    { icon: <Ruler size={15} />, label: "Superficie terrain", val: `${villa.superficie} m²` },
                    { icon: <Bed size={15} />, label: "Chambres", val: villa.chambres.toString() },
                    { icon: <Bath size={15} />, label: "Salles de bain", val: villa.sallesDeBain.toString() },
                    { icon: <Car size={15} />, label: "Garage", val: villa.garage ? "Oui" : "Non" },
                    { icon: null, label: "Niveaux", val: villa.niveaux },
                  ].map((s) => (
                    <div key={s.label} className="bg-gray-50 rounded-xl p-4">
                      <p className="text-gray-400 text-xs uppercase tracking-wider mb-1">{s.label}</p>
                      <p className="text-gray-800 font-bold text-base">{s.val}</p>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-3">
                  <button
                    onClick={() => enPanier ? remove(villa.slug) : add({ slug: villa.slug, titre: villa.titre, type: villa.type, prix: villa.prix, photo: villa.photos[0] })}
                    className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-all duration-200 ${
                      enPanier ? "bg-[#1e5d2e]/10 text-[#1e5d2e] border-2 border-[#1e5d2e]/30" : "bg-[#1e5d2e] hover:bg-[#163f20] text-white"
                    }`}
                  >
                    {enPanier ? <><Check size={16} /> Dans ma sélection</> : <><ShoppingBag size={16} /> Ajouter à ma sélection</>}
                  </button>
                  <a href="https://wa.me/2250716171717" target="_blank" rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3.5 rounded-xl text-sm transition-colors duration-200">
                    <MessageCircle size={16} />
                    Renseignements WhatsApp
                  </a>
                  <Link href="/contact"
                    className="w-full flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-[#1e5d2e]/40 text-gray-600 hover:text-[#1e5d2e] font-bold py-3.5 rounded-xl text-sm transition-all duration-200">
                    <Phone size={16} />
                    Contacter notre équipe
                  </Link>
                </div>

              </div>
            </div>
          </div>

          {/* ── DESCRIPTION & ÉQUIPEMENTS ─────────────────────────── */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 className="text-gray-900 font-black mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px,2.5vw,24px)" }}>
                Description
              </h2>
              <div className="w-8 h-[2px] bg-[#1e5d2e] rounded mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed">{villa.description}</p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100">
              <h2 className="text-gray-900 font-black mb-4" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px,2.5vw,24px)" }}>
                Équipements & prestations
              </h2>
              <div className="w-8 h-[2px] bg-[#1e5d2e] rounded mb-5" />
              <ul className="space-y-3">
                {villa.equipements.map((eq) => (
                  <li key={eq} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#1e5d2e] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={11} className="text-white" strokeWidth={3} />
                    </div>
                    <span className="text-gray-600 text-sm">{eq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── AUTRES VILLAS ─────────────────────────────────────── */}
          <div className="mt-12">
            <div className="flex items-center justify-between mb-7">
              <h2 className="text-gray-900 font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,3vw,28px)" }}>
                Autres villas disponibles
              </h2>
              <Link href="/proprietes/cite-prestige" className="text-[#1e5d2e] text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Voir tout <ArrowLeft size={14} className="rotate-180" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {autresVillas.map((v) => (
                <Link key={v.slug} href={`/proprietes/cite-prestige/${v.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-[#1e5d2e]/20 transition-all duration-300">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={v.photos[0]} alt={v.titre} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <p className="text-[#1e5d2e] text-[10px] font-bold uppercase tracking-widest mb-0.5">{v.type}</p>
                    <h3 className="text-gray-900 font-bold text-base" style={{ fontFamily: "var(--font-playfair)" }}>{v.titre}</h3>
                    <p className="text-[#1e5d2e] font-black text-sm mt-1">{formatPrix(v.prix)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Retour */}
          <div className="mt-10">
            <Link href="/proprietes/cite-prestige"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-[#1e5d2e] text-sm font-semibold transition-colors">
              <ArrowLeft size={15} /> Retour à la liste des villas
            </Link>
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
