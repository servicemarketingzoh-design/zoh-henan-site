"use client";

import { useState } from "react";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ nom: "", email: "", telephone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.nom || !form.email || !form.telephone || !form.message) return;
    setSent(true);
  };

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
            <p className="text-white/70 text-xs font-semibold tracking-[4px] uppercase mb-4">Parlons-nous</p>
            <h1 className="text-white font-black mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px,5vw,56px)" }}>
              Contactez-nous
            </h1>
            <div className="w-16 h-[3px] bg-white/40 rounded mx-auto mb-8" />
            <p className="text-white/90 text-lg max-w-xl mx-auto">
              Notre équipe est disponible pour répondre à toutes vos questions sur nos projets immobiliers.
            </p>
          </div>
        </section>

        {/* INFOS + FORMULAIRE */}
        <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* INFOS */}
            <div>
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Nos coordonnées</p>
              <h2 className="text-gray-900 font-black mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3vw,36px)" }}>
                Nous sommes à votre écoute
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-8" />

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e5d2e]/10 flex items-center justify-center flex-shrink-0">
                    <Phone size={18} className="text-[#1e5d2e]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Téléphone</p>
                    <p className="text-gray-800 font-semibold text-sm">(+225) 27 22 49 67 39</p>
                    <p className="text-gray-800 font-semibold text-sm">(+225) 07 16 17 17 17</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e5d2e]/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={18} className="text-[#1e5d2e]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/2250716171717"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-semibold px-4 py-2 rounded hover:bg-[#1ebe5a] transition-colors duration-200 mt-1"
                    >
                      <MessageCircle size={15} />
                      Écrire sur WhatsApp
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e5d2e]/10 flex items-center justify-center flex-shrink-0">
                    <Mail size={18} className="text-[#1e5d2e]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email</p>
                    <a href="mailto:contact@zoh-henan.com" className="text-[#1e5d2e] font-semibold text-sm hover:underline">
                      contact@zoh-henan.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#1e5d2e]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin size={18} className="text-[#1e5d2e]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Adresse</p>
                    <p className="text-gray-800 font-semibold text-sm">Abidjan, Cocody</p>
                    <p className="text-gray-600 text-sm">Faya-Cité SIR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FORMULAIRE */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
              {sent ? (
                <div className="flex flex-col items-center justify-center h-full text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#1e5d2e] flex items-center justify-center mb-4">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M5 14l7 7 11-11" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <h3 className="text-gray-900 font-bold text-xl mb-2" style={{ fontFamily: "var(--font-playfair)" }}>Message envoyé !</h3>
                  <p className="text-gray-500 text-sm">Nous vous répondrons dans les plus brefs délais.</p>
                  <button onClick={() => { setSent(false); setForm({ nom: "", email: "", telephone: "", message: "" }); }}
                    className="mt-6 text-[#1e5d2e] text-sm font-semibold underline">
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-gray-900 font-bold text-xl mb-6" style={{ fontFamily: "var(--font-playfair)" }}>Envoyez-nous un message</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Nom complet *</label>
                      <input
                        type="text"
                        value={form.nom}
                        onChange={(e) => setForm({ ...form, nom: e.target.value })}
                        placeholder="Votre nom"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1e5d2e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="votre@email.com"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1e5d2e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        value={form.telephone}
                        onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                        placeholder="(+225) XX XX XX XX XX"
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1e5d2e] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide block mb-1">Message *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Votre message..."
                        rows={5}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#1e5d2e] transition-colors resize-none"
                      />
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold py-4 rounded-lg text-sm tracking-wide transition-colors duration-200 cursor-pointer"
                    >
                      Envoyer le message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* CARTE */}
        <section className="pb-0">
          <div className="w-full h-[400px]">
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=-3.8417%2C5.3402%2C-3.8017%2C5.3802&layer=mapnik&marker=5.3602%2C-3.8217"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Localisation Zoh-Henan Guoji - Abidjan, Cocody, Faya-Cité SIR"
            />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
