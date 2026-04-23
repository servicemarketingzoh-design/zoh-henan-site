"use client";

import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Trash2, ShoppingBag, MessageCircle, Phone, ArrowLeft, ArrowRight } from "lucide-react";
import { useCart } from "../components/CartContext";
import { formatPrix } from "../proprietes/villas-data";

export default function PanierPage() {
  const { items, remove, clear } = useCart();
  const total = items.reduce((sum, i) => sum + i.prix, 0);

  const messageWhatsApp = encodeURIComponent(
    "Bonjour, je suis intéressé(e) par les villas suivantes à la Cité Prestige :\n" +
    items.map((i) => `• ${i.titre} (${formatPrix(i.prix)})`).join("\n") +
    "\n\nPourriez-vous me contacter pour plus d'informations ?"
  );

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px] bg-gray-50">

        {/* ── HEADER ───────────────────────────────────────────────── */}
        <section className="bg-white border-b border-gray-100 py-10 px-6 sm:px-12 lg:px-20">
          <div className="max-w-5xl mx-auto">
            <Link href="/proprietes/cite-prestige"
              className="inline-flex items-center gap-1.5 text-gray-400 hover:text-[#1e5d2e] text-sm font-semibold transition-colors mb-5">
              <ArrowLeft size={14} /> Continuer à explorer
            </Link>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1e5d2e]/10 flex items-center justify-center">
                <ShoppingBag size={22} className="text-[#1e5d2e]" />
              </div>
              <div>
                <h1 className="text-gray-900 font-black"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3.5vw,36px)" }}>
                  Ma Sélection
                </h1>
                <p className="text-gray-400 text-sm">
                  {items.length === 0 ? "Aucune villa sélectionnée" : `${items.length} villa${items.length > 1 ? "s" : ""} sélectionnée${items.length > 1 ? "s" : ""}`}
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-20 py-10">

          {items.length === 0 ? (
            /* ── PANIER VIDE ─────────────────────────────────────── */
            <div className="text-center py-24">
              <div className="w-20 h-20 rounded-2xl bg-gray-100 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag size={36} strokeWidth={1.5} className="text-gray-300" />
              </div>
              <h2 className="text-gray-900 font-black mb-3" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(20px,3vw,30px)" }}>
                Votre sélection est vide
              </h2>
              <p className="text-gray-400 text-sm mb-8 max-w-sm mx-auto">
                Parcourez nos villas et ajoutez celles qui vous intéressent à votre sélection.
              </p>
              <Link href="/proprietes/cite-prestige"
                className="inline-flex items-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold px-8 py-4 rounded-xl text-sm transition-colors duration-200">
                Explorer les villas
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

              {/* ── LISTE DES VILLAS ─────────────────────────────── */}
              <div className="lg:col-span-2 space-y-4">
                {items.map((item) => (
                  <div key={item.slug} className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex gap-0 hover:border-[#1e5d2e]/20 hover:shadow-sm transition-all duration-200">
                    {/* Photo */}
                    <div className="relative w-32 sm:w-44 flex-shrink-0">
                      <Image src={item.photo} alt={item.titre} fill className="object-cover" />
                    </div>
                    {/* Infos */}
                    <div className="flex-1 p-5 flex flex-col justify-between">
                      <div>
                        <p className="text-[#1e5d2e] text-[10px] font-bold uppercase tracking-widest mb-1">{item.type} · Cité Prestige</p>
                        <h3 className="text-gray-900 font-black text-lg leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
                          {item.titre}
                        </h3>
                        <p className="text-[#1e5d2e] font-black text-base mt-1">{formatPrix(item.prix)}</p>
                      </div>
                      <div className="flex items-center justify-between mt-3">
                        <Link href={`/proprietes/cite-prestige/${item.slug}`}
                          className="text-[#1e5d2e] text-xs font-bold hover:underline">
                          Voir les détails →
                        </Link>
                        <button onClick={() => remove(item.slug)}
                          className="flex items-center gap-1.5 text-gray-400 hover:text-red-500 text-xs font-semibold transition-colors">
                          <Trash2 size={13} /> Retirer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                <button onClick={clear}
                  className="text-gray-400 hover:text-red-400 text-xs font-semibold transition-colors flex items-center gap-1.5 mt-2">
                  <Trash2 size={13} /> Vider la sélection
                </button>
              </div>

              {/* ── RÉCAPITULATIF ────────────────────────────────── */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl border border-gray-100 p-7 sticky top-24 space-y-5">
                  <h2 className="text-gray-900 font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px,2.5vw,22px)" }}>
                    Récapitulatif
                  </h2>
                  <div className="space-y-2 border-b border-gray-100 pb-4">
                    {items.map((item) => (
                      <div key={item.slug} className="flex justify-between text-sm">
                        <span className="text-gray-600 truncate max-w-[150px]">{item.titre}</span>
                        <span className="text-gray-800 font-semibold flex-shrink-0 ml-2">{formatPrix(item.prix)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-500 text-sm">Total indicatif</span>
                    <span className="text-[#1e5d2e] font-black text-lg" style={{ fontFamily: "var(--font-playfair)" }}>{formatPrix(total)}</span>
                  </div>
                  <p className="text-gray-400 text-xs">* Prix provisoires. Un conseiller vous contactera pour les tarifs définitifs.</p>

                  {/* Boutons */}
                  <div className="space-y-3 pt-2">
                    <a
                      href={`https://wa.me/2250716171717?text=${messageWhatsApp}`}
                      target="_blank" rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3.5 rounded-xl text-sm transition-colors duration-200">
                      <MessageCircle size={16} />
                      Envoyer via WhatsApp
                    </a>
                    <Link href="/contact"
                      className="w-full flex items-center justify-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold py-3.5 rounded-xl text-sm transition-colors duration-200">
                      <Phone size={16} />
                      Demander un rendez-vous
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
