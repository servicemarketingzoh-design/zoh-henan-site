"use client";

import { useState } from "react";
import Header from "../../components/Header";
import FloatingButtons from "../../components/FloatingButtons";
import Footer from "../../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Bed, Bath, Car, Ruler, Heart, ArrowRight, ShoppingBag, Check } from "lucide-react";
import { villas, formatPrix } from "../villas-data";
import { useCart } from "../../components/CartContext";

const filtres = ["Tous", "Duplex", "Villa Basse"];

const typeLabels: Record<string, string> = {
  "6P":       "Villa Prestige 6 Pièces",
  "5P Basse": "Villa Basse 5 Pièces",
  "5P Duplex":"Villa Duplex 5 Pièces",
  "4P Duplex":"Villa Duplex 4 Pièces",
  "3P":       "Villa Basse 3 Pièces",
};
const standings = ["Tous les standings", "Moyen", "moyen", "Bon", "Haut"];

export default function CitePrestigePage() {
  const [filtre, setFiltre] = useState("Tous");
  const [standing, setStanding] = useState("Tous les standings");
  const { add, remove, isInCart, count } = useCart();

  const villasFiltrees = villas
    .filter((v) => {
      const isDuplex = v.niveaux.includes("R+1");
      const matchType =
        filtre === "Tous" ||
        (filtre === "Duplex" && isDuplex) ||
        (filtre === "Villa Basse" && !isDuplex);
      const matchStanding = standing === "Tous les standings" || v.standing === standing;
      return matchType && matchStanding;
    })
    .sort((a, b) => {
      // Duplex (R+1) en premier, Plain-pied après
      const isDuplexA = a.niveaux.includes("R+1") ? 0 : 1;
      const isDuplexB = b.niveaux.includes("R+1") ? 0 : 1;
      return isDuplexA - isDuplexB;
    });

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px]">

        {/* ── HERO COMPACT ─────────────────────────────────────────── */}
        <section className="relative py-20 px-6 sm:px-12 overflow-hidden">
          <Image
            src="/images/accueil/hero-slider/VILLAS Prestige 6P vue perspective.jpg"
            alt="Cité Prestige"
            fill priority quality={80}
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/25" />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e5d2e]" />
          <div className="relative max-w-5xl mx-auto flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Link href="/proprietes" className="text-white/50 text-xs hover:text-white transition-colors">Propriétés</Link>
                <span className="text-white/30 text-xs">›</span>
                <span className="text-white text-xs font-semibold">Cité Prestige</span>
              </div>
              <h1 className="text-white font-black leading-tight mb-3"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(28px,4vw,50px)" }}>
                Cité Prestige<br />ZOH-HENAN
              </h1>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin size={14} className="text-[#1e5d2e]" />
                Bingerville, Abidjan — 31 hectares · 619 villas
              </div>
            </div>
            {count > 0 && (
              <Link href="/panier"
                className="inline-flex items-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold px-5 py-3 rounded-xl text-sm transition-colors duration-200 flex-shrink-0">
                <ShoppingBag size={16} />
                Ma sélection ({count})
              </Link>
            )}
          </div>
        </section>

        {/* ── FILTRES ───────────────────────────────────────────────── */}
        <section className="sticky top-[70px] z-30 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 sm:px-12 py-3 flex flex-wrap items-center gap-3">
            {/* Filtre par type */}
            <div className="flex flex-wrap gap-2">
              {filtres.map((f) => (
                <button
                  key={f}
                  onClick={() => setFiltre(f)}
                  className={`px-4 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-200 ${
                    filtre === f
                      ? "bg-[#1e5d2e] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="h-4 w-px bg-gray-200 hidden sm:block" />
            {/* Filtre par standing */}
            <select
              value={standing}
              onChange={(e) => setStanding(e.target.value)}
              className="text-sm font-semibold text-gray-500 bg-gray-100 border-none rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1e5d2e]/30"
            >
              {standings.map((s) => <option key={s}>{s}</option>)}
            </select>
            <span className="ml-auto text-sm text-gray-400">{villasFiltrees.length} villa{villasFiltrees.length > 1 ? "s" : ""}</span>
          </div>
        </section>

        {/* ── GRILLE DE VILLAS ─────────────────────────────────────── */}
        <section className="py-12 px-6 sm:px-12 lg:px-20 bg-gray-50 min-h-[400px]">
          <div className="max-w-6xl mx-auto">
            {villasFiltrees.length === 0 ? (
              <div className="text-center py-20 text-gray-400">Aucune villa ne correspond à ces filtres.</div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
                {villasFiltrees.map((villa) => {
                  const enPanier = isInCart(villa.slug);
                  return (
                    <div key={villa.slug}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-xl hover:border-[#1e5d2e]/20 transition-all duration-300">

                      {/* Photo */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={villa.photos[0]}
                          alt={villa.titre}
                          fill quality={75}
                          className="object-cover group-hover:scale-105 transition-transform duration-600"
                        />
                        {/* Overlay hover */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        {/* Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                          <span className={`text-xs font-bold px-3 py-1 rounded-full text-white ${
                            villa.standing === "Haut" ? "bg-[#1e5d2e]" :
                            villa.standing === "Bon" ? "bg-[#1a6b8a]" : "bg-gray-500"
                          }`}>
                            {villa.standing} Standing
                          </span>
                          {villa.badge && (
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500 text-white">
                              {villa.badge}
                            </span>
                          )}
                        </div>
                        {/* Bouton cœur */}
                        <button
                          onClick={() => enPanier ? remove(villa.slug) : add({ slug: villa.slug, titre: villa.titre, type: villa.type, prix: villa.prix, photo: villa.photos[0] })}
                          className={`absolute bottom-3 right-3 w-9 h-9 rounded-full flex items-center justify-center shadow-md transition-all duration-200 ${
                            enPanier ? "bg-[#1e5d2e] text-white" : "bg-white text-gray-400 hover:text-[#1e5d2e]"
                          }`}
                        >
                          {enPanier ? <Check size={16} /> : <Heart size={16} />}
                        </button>
                      </div>

                      {/* Infos */}
                      <div className="p-5">
                        <div className="mb-2">
                          <p className="text-[#1e5d2e] text-xs font-bold uppercase tracking-widest mb-1">{typeLabels[villa.type] ?? villa.type} · {villa.niveaux}</p>
                          <h3 className="text-gray-900 font-black text-xl leading-tight"
                            style={{ fontFamily: "var(--font-playfair)" }}>{villa.titre}</h3>
                        </div>

                        {/* Prix */}
                        <div className="text-[#1e5d2e] font-black text-xl mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                          {formatPrix(villa.prix)}
                          <span className="text-gray-400 text-sm font-normal ml-1">*</span>
                        </div>

                        {/* Specs */}
                        <div className="flex items-center gap-4 text-gray-500 text-sm mb-5 border-t border-gray-100 pt-3">
                          <span className="flex items-center gap-1.5"><Bed size={14} /> {villa.chambres} ch.</span>
                          <span className="flex items-center gap-1.5"><Bath size={14} /> {villa.sallesDeBain} SDB</span>
                          <span className="flex items-center gap-1.5"><Ruler size={14} /> {villa.superficie} m²</span>
                          {villa.garage && <span className="flex items-center gap-1.5"><Car size={14} /> Garage</span>}
                        </div>

                        {/* Actions */}
                        <div className="flex gap-2">
                          <Link href={`/proprietes/cite-prestige/${villa.slug}`}
                            className="flex-1 text-center bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold py-3 rounded-xl text-sm transition-colors duration-200">
                            Voir les détails
                          </Link>
                          <button
                            onClick={() => enPanier ? remove(villa.slug) : add({ slug: villa.slug, titre: villa.titre, type: villa.type, prix: villa.prix, photo: villa.photos[0] })}
                            className={`px-4 py-3 rounded-xl text-sm font-bold transition-all duration-200 border ${
                              enPanier
                                ? "bg-[#1e5d2e]/10 border-[#1e5d2e]/30 text-[#1e5d2e]"
                                : "border-gray-200 text-gray-400 hover:border-[#1e5d2e]/40 hover:text-[#1e5d2e]"
                            }`}
                          >
                            {enPanier ? "✓" : "+"}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Note prix */}
            <p className="text-center text-gray-400 text-xs mt-8">
              * Prix indicatifs — données provisoires sujettes à modification. Contactez notre équipe pour les tarifs définitifs.
            </p>
          </div>
        </section>

        {/* ── PANIER FLOTTANT si sélection ─────────────────────────── */}
        {count > 0 && (
          <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-40">
            <Link href="/panier"
              className="inline-flex items-center gap-3 bg-[#0a2e14] text-white font-bold px-7 py-4 rounded-2xl shadow-2xl text-sm hover:bg-[#1e5d2e] transition-colors duration-200">
              <ShoppingBag size={18} />
              {count} villa{count > 1 ? "s" : ""} sélectionnée{count > 1 ? "s" : ""} — Voir ma sélection
              <ArrowRight size={16} />
            </Link>
          </div>
        )}

      </main>
      <Footer />
    </>
  );
}
