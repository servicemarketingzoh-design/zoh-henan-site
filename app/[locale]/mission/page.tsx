"use client";

import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Handshake, Award, TrendingUp, CheckCircle2, Users, Building2, MapPin } from "lucide-react";

const valeurs = [
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Transparence",
    desc: "Chaque projet est accompagné de tous les agréments et autorisations légales requis.",
  },
  {
    icon: <Award size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Qualité",
    desc: "Nos constructions respectent les normes les plus exigeantes, encadrées par des experts reconnus.",
  },
  {
    icon: <Handshake size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Confiance",
    desc: "Nous opérerons avec confiance des établissements privé, public et tous les souscripteurs.",
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Ambition",
    desc: "Révolutionner l'immobilier ivoirien en rétablissant la confiance des investisseurs.",
  },
];

const agréments = [
  "Arrêté de Concession Définitive (ACD) sur l'ensemble du terrain",
  "Agrément Promoteur délivré par le Ministère de l'Urbanisme et des Cadres de Vie",
  "Agrément du Programme Immobilier faisant office de permis de construire",
  "Certificat de Mutation de Propriété Foncière (CMPF) garantissant la pleine propriété aux acquéreurs",
];

const experts = [
  {
    num: "01",
    nom: "Cabinet CAIE",
    role: "Cabinet d'Architecture, d'Ingénierie et d'Études",
    detail: "Du feu GBAGBEU GONNE",
  },
  {
    num: "02",
    nom: "Atelier Privé d'Urbanisme",
    role: "Cabinet d'urbanisme et Promotion de l'Habitat",
    detail: "Dirigé par M. GUEI Étienne, Ingénieur Urbaniste & Formateur à l'INP-HB",
  },
  {
    num: "03",
    nom: "Cabinet SYGMA",
    role: "Ingénierie des projets immobiliers",
    detail: "Dirigé par Dr. NGUESSAN Francis",
  },
];

export default function MissionPage() {
  return (
    <>
      <Header />
      <FloatingButtons />
      <main className="min-h-screen pt-[70px]">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative py-36 px-6 sm:px-12 overflow-hidden">
          {/* Image de fond */}
          <Image
            src="/images/accueil/hero-slider/VILLAS Prestige 6P vue perspective.jpg"
            alt="Cité Prestige ZOH-HENAN"
            fill
            priority
            quality={80}
            className="object-cover object-center"
          />
          {/* Dégradé : sombre à gauche/bas, transparent à droite */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          {/* ligne verte gauche */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e5d2e]" />
          <div className="relative max-w-4xl mx-auto">
            <p className="text-[#1e5d2e] text-xs font-semibold tracking-[5px] uppercase mb-5">Qui sommes-nous</p>
            <h1 className="text-white font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(34px,5.5vw,64px)" }}>
              Notre Mission
            </h1>
            <div className="w-14 h-[3px] bg-[#1e5d2e] rounded mb-8" />
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl">
              Révolutionner le secteur immobilier en Côte d'Ivoire en rétablissant la confiance des investisseurs grâce à la transparence, la rigueur et l'excellence.
            </p>
          </div>
        </section>

        {/* ── HISTOIRE ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

            {/* Texte */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase">Notre histoire</p>
              <h2 className="text-gray-900 font-black leading-tight"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,3.5vw,40px)" }}>
                Une expertise ivoirienne à portée internationale
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded" />
              <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed">
                <p>Fondée en <strong className="text-gray-900">2017</strong> avec un capital social de <strong className="text-gray-900">25 000 000 FCFA</strong>, la société immobilière ZOH-HENAN est une société anonyme avec conseil d'administration de droit Ivoirien, dirigée par de jeunes experts Ivoiriens.</p>
                <p>Son professionnalisme et son expertise ont favorisé un partenariat stratégique internationnale. Forte d'un capital de plus de <strong className="text-gray-900">12 milliards FCFA</strong> et d'une solide présence dans la région Ouest-Africaine, son actionnariat est néanmoins entièrement détenu par des <strong className="text-gray-900">Ivoiriens</strong>.</p>
                <p>Grâce à sa maîtrise des BTP et de la promotion immobilière, elle a obtenu l'ensemble des agréments et documents administratifs auprès du <strong className="text-gray-900">Ministère de l'Urbanisme et des Cadres de Vie</strong>. Cela lui confère la confiance de nombreux établissements privé, public et tous les souscripteurs.</p>
              </div>
            </div>

            {/* Chiffres clés */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              <div className="col-span-2 bg-[#1e5d2e] rounded-2xl p-7 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <Building2 size={22} strokeWidth={1.5} className="text-white/70" />
                  <span className="text-xs font-semibold tracking-widest uppercase text-white/70">Année de fondation</span>
                </div>
                <div className="text-5xl font-black" style={{ fontFamily: "var(--font-playfair)" }}>2017</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-[#1e5d2e] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>100%</div>
                <div className="text-[10px] font-semibold tracking-wider uppercase text-gray-500 leading-tight">Actionnariat<br/>ivoirien</div>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
                <div className="text-3xl font-black text-[#1e5d2e] mb-1" style={{ fontFamily: "var(--font-playfair)" }}>619+</div>
                <div className="text-[10px] font-semibold tracking-wider uppercase text-gray-500 leading-tight">Villas en<br/>développement</div>
              </div>
              <div className="col-span-2 bg-gray-50 border border-gray-100 rounded-2xl p-5 flex items-center gap-5">
                <MapPin size={28} strokeWidth={1.5} className="text-[#1e5d2e] flex-shrink-0" />
                <div>
                  <div className="text-2xl font-black text-[#1e5d2e]" style={{ fontFamily: "var(--font-playfair)" }}>31 hectares</div>
                  <div className="text-[10px] font-semibold tracking-wider uppercase text-gray-500">Aménagés à Bingerville</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── BANDEAU PROJET PHARE ──────────────────────────────────── */}
        <section className="bg-gray-50 border-y border-gray-100 py-16 px-6 sm:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
              <div className="flex-shrink-0 w-1 self-stretch bg-[#1e5d2e] rounded hidden lg:block" />
              <div>
                <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Programme immobilier phare</p>
                <h2 className="text-gray-900 font-black leading-tight mb-4"
                  style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
                  Cité Prestige ZOH-HENAN de Bingerville
                </h2>
                <p className="text-gray-600 text-[15px] leading-relaxed max-w-3xl">
                  Le programme comprend <strong className="text-gray-900">619 villas</strong> de moyens et bons standings construites sur plus de <strong className="text-gray-900">31 hectares</strong>, offrant un environnement paisible et sécurisé aux acquéreurs. Toutes les procédures légales ont été rigoureusement respectées, garantissant à chaque souscripteur la pleine possession de son bien.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── VALEURS ───────────────────────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Ce qui nous guide</p>
              <h2 className="text-gray-900 font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,4vw,40px)" }}>Nos Valeurs</h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {valeurs.map((v) => (
                <div key={v.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:border-[#1e5d2e]/40 hover:shadow-sm transition-all duration-300">
                  <div className="w-11 h-11 rounded-full bg-[#1e5d2e]/15 flex items-center justify-center mb-4">{v.icon}</div>
                  <h3 className="text-gray-900 font-bold text-base mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{v.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── AGRÉMENTS + EXPERTS ──────────────────────────────────── */}
        <section className="py-24 px-6 sm:px-12 lg:px-20 bg-gray-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Agréments */}
            <div>
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Cadre légal</p>
              <h2 className="text-gray-900 font-black mb-4 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
                Tous les agréments
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-6" />
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                ZOH-HENAN a obtenu l'ensemble des autorisations administratives nécessaires auprès du Ministère de l'Urbanisme et des Cadres de Vie.
              </p>
              <ul className="space-y-4">
                {agréments.map((a, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={18} strokeWidth={2} className="text-[#1e5d2e] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Experts */}
            <div>
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Expertise technique</p>
              <h2 className="text-gray-900 font-black mb-4 leading-tight"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
                Les experts qui pilotent nos projets
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mb-6" />
              <div className="space-y-4">
                {experts.map((e) => (
                  <div key={e.num} className="bg-white border border-gray-100 rounded-xl p-5 flex gap-4 hover:border-[#1e5d2e]/30 hover:shadow-sm transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-[#1e5d2e] text-white text-xs font-black flex items-center justify-center flex-shrink-0"
                      style={{ fontFamily: "var(--font-playfair)" }}>{e.num}</div>
                    <div>
                      <h3 className="text-gray-900 font-bold text-sm mb-0.5" style={{ fontFamily: "var(--font-playfair)" }}>{e.nom}</h3>
                      <p className="text-[#1e5d2e] text-xs font-semibold uppercase tracking-wide">{e.role}</p>
                      <p className="text-gray-400 text-xs mt-1">{e.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CITATION AMBITION ─────────────────────────────────────── */}
        <section className="bg-[#0a2e14] py-20 px-6 sm:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.04]"
            style={{ backgroundImage: "repeating-linear-gradient(45deg,white 0,white 1px,transparent 0,transparent 40px)" }} />
          <div className="relative max-w-3xl mx-auto text-center">
            <div className="text-[#1e5d2e] text-6xl font-black leading-none mb-4" style={{ fontFamily: "var(--font-playfair)" }}>"</div>
            <p className="text-white text-xl sm:text-2xl font-semibold leading-relaxed mb-4"
              style={{ fontFamily: "var(--font-playfair)" }}>
              Notre ambition est de révolutionner le secteur de l'immobilier en Côte d'Ivoire en restaurant l'image des investisseurs vis-à-vis des programmes immobiliers.
            </p>
            <div className="w-10 h-[2px] bg-[#1e5d2e] rounded mx-auto mt-6" />
            <p className="text-white/50 text-sm mt-4 tracking-widest uppercase">ZOH-HENAN Immobilier</p>
          </div>
        </section>

        {/* ── PARTENAIRES ──────────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-20 bg-white">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Ils nous font confiance</p>
              <h2 className="text-gray-900 font-black mb-4"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
                Nos Partenaires
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto" />
            </div>
            {/* Placeholder — les logos seront ajoutés ici */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-32 h-16 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                  <span className="text-gray-300 text-xs font-semibold uppercase tracking-wider">Logo {i}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA DOUBLE BOUTONS ─────────────────────────────────────── */}
        <section className="bg-white border-t border-gray-100 py-20 px-6 sm:px-12 text-center">
          <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-4">En savoir plus</p>
          <h2 className="text-gray-900 font-black mb-3 leading-tight"
            style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3.5vw,38px)" }}>
            Découvrez notre univers
          </h2>
          <p className="text-gray-500 text-sm mb-10 max-w-md mx-auto">
            Plongez dans l'écosystème ZOH-HENAN : de la construction à l'équipe qui donne vie à vos projets.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/zoh-henan-construction"
              className="inline-flex items-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold px-8 py-4 rounded text-sm tracking-wide transition-colors duration-200"
            >
              <Building2 size={17} />
              ZOH HENAN Construction
            </Link>
            <Link
              href="/equipes"
              className="inline-flex items-center gap-2 border-2 border-[#1e5d2e] text-[#1e5d2e] hover:bg-[#1e5d2e] hover:text-white font-bold px-8 py-4 rounded text-sm tracking-wide transition-all duration-200"
            >
              <Users size={17} />
              Nos Équipes
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
