import Link from "next/link";
import { CheckCircle2, Landmark, Banknote, MessageCircle, Phone } from "lucide-react";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import PartnerMark from "../components/PartnerMark";
import { partners } from "@/lib/partners";

export default function PartenairesPage() {
  const financement = partners.filter((p) => p.categorie === "Financement");
  const institutions = partners.filter((p) => p.categorie === "Institution");

  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px]">

        {/* HERO */}
        <section className="relative bg-[#0a2e14] py-28 px-6 sm:px-12 overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 40px)" }}
          />
          <div className="relative max-w-4xl mx-auto text-center">
            <p className="text-[#4ade80] text-xs font-semibold tracking-[5px] uppercase mb-4">Ils nous font confiance</p>
            <h1 className="text-white font-black leading-tight mb-6" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(32px,5vw,56px)" }}>
              Nos Partenaires
            </h1>
            <div className="w-16 h-[3px] bg-[#1e5d2e] rounded mx-auto mb-8" />
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              Des institutions financières et publiques de premier plan qui accompagnent ZOH-HENAN Immobilier et facilitent l&apos;accès à la propriété de nos acquéreurs.
            </p>
          </div>
        </section>

        {/* BANDEAU SIGLES */}
        <section className="bg-white border-b border-gray-100 py-10 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {partners.map((p) => (
              <a key={p.slug} href={`#${p.slug}`} className="group flex flex-col items-center gap-3 text-center">
                <PartnerMark partner={p} size="sm" />
                <span className="text-xs font-semibold text-gray-500 group-hover:text-[#1e5d2e] transition-colors">{p.nom}</span>
              </a>
            ))}
          </div>
        </section>

        {/* FINANCEMENT */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-3 mb-3">
              <Banknote size={20} strokeWidth={1.6} className="text-[#1e5d2e]" />
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase">Partenaires financiers</p>
            </div>
            <h2 className="text-gray-900 font-black mb-4 leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,4vw,40px)" }}>
              Financer votre villa en toute sérénité
            </h2>
            <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-12" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {financement.map((p) => (
                <article key={p.slug} id={p.slug} className="scroll-mt-[100px] flex flex-col bg-white rounded-2xl border border-gray-100 p-7 hover:border-[#1e5d2e]/30 hover:shadow-lg transition-all duration-300">
                  <PartnerMark partner={p} />
                  <h3 className="text-gray-900 font-bold text-lg mt-6 mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{p.nom}</h3>
                  <p className="text-[#1e5d2e] text-xs font-semibold uppercase tracking-wide mb-4">{p.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{p.description}</p>
                  <ul className="mt-auto space-y-2.5">
                    {p.points.map((pt) => (
                      <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 size={16} strokeWidth={2} className="text-[#1e5d2e] mt-0.5 flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INSTITUTION */}
        {institutions.map((p) => (
          <section key={p.slug} id={p.slug} className="scroll-mt-[90px] py-24 px-6 sm:px-12 lg:px-20 bg-white">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-2">
                <div className="max-w-[240px] mb-6">
                  <PartnerMark partner={p} />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <Landmark size={20} strokeWidth={1.6} className="text-[#1e5d2e]" />
                  <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase">Institution</p>
                </div>
                <h2 className="text-gray-900 font-black leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,36px)" }}>
                  {p.nom}
                </h2>
                <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mt-4" />
              </div>
              <div className="lg:col-span-3 bg-gray-50 border border-gray-100 rounded-2xl p-8">
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{p.description}</p>
                <ul className="space-y-3">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <CheckCircle2 size={16} strokeWidth={2} className="text-[#1e5d2e] mt-0.5 flex-shrink-0" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-[#1e5d2e] py-20 px-6 sm:px-12 text-center">
          <h2 className="text-white font-black mb-3 leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,38px)" }}>
            Besoin d&apos;aide pour votre financement ?
          </h2>
          <p className="text-white/75 text-sm mb-10 max-w-md mx-auto">
            Nos conseillers montent gratuitement votre dossier avec nos partenaires.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/2250716171717"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#1e5d2e] hover:bg-gray-100 font-bold px-8 py-4 rounded text-sm tracking-wide transition-colors"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#1e5d2e] font-bold px-8 py-4 rounded text-sm tracking-wide transition-all"
            >
              <Phone size={17} />
              Nous contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
