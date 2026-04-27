"use client";

import HeroSlider from "../components/HeroSlider";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import {
  Building2, Map, Home, ShieldCheck, Award, Handshake,
  TrendingUp, MessageCircle, Phone, CalendarDays, ArrowRight, ChevronLeft, ChevronRight
} from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { actualites } from "../actualites/data";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const numericValue = parseInt(value.replace(/\D/g, ""));
  const count = useCountUp(numericValue, 2000, started);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="flex items-center justify-center gap-3 text-center px-6 py-4">
      <div className="text-2xl font-black text-white leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
        {count}+
      </div>
      <div className="w-px h-6 bg-white/40" />
      <div className="text-[10px] font-semibold text-white/90 tracking-wider uppercase leading-tight max-w-[130px] text-left">{label}</div>
    </div>
  );
}

const stats = [
  { icon: <Building2 size={40} strokeWidth={1.5} className="text-white" />, value: "+619", label: "VILLAS EN DÉVELOPPEMENT À BINGERVILLE" },
  { icon: <Map size={40} strokeWidth={1.5} className="text-white" />, value: "31", label: "HECTARES AMÉNAGÉS POUR LA CITÉ PRESTIGE" },
  { icon: <Home size={40} strokeWidth={1.5} className="text-white" />, value: "+120", label: "VILLAS DÉJÀ LIVRÉES" },
];

const raisons = [
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Transparence totale",
    desc: "Tous nos projets sont accompagnés des agréments et autorisations légales délivrés par le Ministère de l'Urbanisme et des Cadres de Vie.",
  },
  {
    icon: <Award size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Qualité certifiée",
    desc: "Nos constructions respectent les normes les plus exigeantes, encadrées par des cabinets d'architectes et d'ingénieurs reconnus.",
  },
  {
    icon: <Handshake size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Confiance établie",
    desc: "Nous opérerons avec confiance des établissements privés, publics et tous les souscripteurs.",
  },
  {
    icon: <TrendingUp size={28} strokeWidth={1.5} className="text-[#1e5d2e]" />,
    title: "Expertise internationale",
    desc: "ZOH-HENAN externalise son savoir-faire sur le marché ouest-africain.",
  },
];

const actualitesVisibles = actualites.filter((a) => !a.hidden);

function ActualitesCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = actualitesVisibles.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next, paused]);

  const featured = actualitesVisibles[current % total];
  const secondary = [
    actualitesVisibles[(current + 1) % total],
    actualitesVisibles[(current + 2) % total],
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 items-stretch min-h-[420px]">

        {/* CARTE PRINCIPALE */}
        <Link
          href={`/actualites/${featured.slug}`}
          className="lg:col-span-3 relative rounded-2xl overflow-hidden group min-h-[360px] flex flex-col justify-end"
        >
          <img
            src={featured.img}
            alt={featured.titre}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="relative z-10 p-7">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-[#1e5d2e] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                {featured.categorie}
              </span>
              <span className="text-white/60 text-xs flex items-center gap-1">
                <CalendarDays size={11} />{featured.date}
              </span>
            </div>
            <h3
              className="text-white font-black leading-tight mb-3 group-hover:text-[#1e5d2e] transition-colors duration-200"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px,2.2vw,26px)" }}
            >
              {featured.titre}
            </h3>
            <p className="text-white/70 text-sm leading-relaxed line-clamp-2 mb-4">{featured.extrait}</p>
            <span className="inline-flex items-center gap-2 text-white text-sm font-bold border border-white/30 px-4 py-2 rounded-lg group-hover:bg-white group-hover:text-[#1e5d2e] transition-all duration-300">
              Lire l'actualité <ArrowRight size={14} />
            </span>
          </div>
        </Link>

        {/* CARTES SECONDAIRES */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          {secondary.map((actu, i) => (
            <Link
              key={`${actu.slug}-${i}`}
              href={`/actualites/${actu.slug}`}
              className="relative rounded-2xl overflow-hidden group flex-1 min-h-[150px] flex flex-col justify-end"
            >
              <img
                src={actu.img}
                alt={actu.titre}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative z-10 p-5">
                <span className="text-white/60 text-[10px] flex items-center gap-1 mb-2">
                  <CalendarDays size={10} />{actu.date}
                </span>
                <h3
                  className="text-white font-bold leading-snug text-sm group-hover:text-[#1e5d2e] transition-colors duration-200 line-clamp-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {actu.titre}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center justify-between mt-6">
        <div className="flex gap-2">
          {actualitesVisibles.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-[3px] rounded-full transition-all duration-500 ${i === current ? "w-8 bg-[#1e5d2e]" : "w-3 bg-gray-300 hover:bg-gray-400"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#1e5d2e] hover:text-[#1e5d2e] transition-colors duration-200">
            <ChevronLeft size={18} />
          </button>
          <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#1e5d2e] hover:text-[#1e5d2e] transition-colors duration-200">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Accueil() {
  return (
    <>
      <Header />
      <FloatingButtons />
      <HeroSlider />

      {/* STATS */}
      <section className="bg-[#1e5d2e] py-3 px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center divide-y sm:divide-y-0 sm:divide-x divide-white/30">
          {stats.map((stat) => (
            <StatItem key={stat.label} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
      </section>

      {/* NOS PROJETS */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-gray-900">
        <div className="max-w-5xl mx-auto">
          {/* Titre section */}
          <div className="text-center mb-14">
            <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Ce que nous bâtissons</p>
            <h2 className="text-white font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,4vw,42px)" }}>
              Nos Projets
            </h2>
            <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-stretch">

            {/* CITÉ PRESTIGE — carte principale (3/5) */}
            <div className="lg:col-span-3 relative rounded-2xl overflow-hidden min-h-[480px] flex flex-col justify-end group">
              <Image
                src="/images/accueil/cite-prestige/GUERITE ENTREE PRINCIPALE.jpg"
                alt="Cité Prestige Bingerville"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                quality={75}
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              <div className="relative z-10 p-8">
                <span className="inline-block bg-[#1e5d2e] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                  En cours
                </span>
                <h3 className="text-white font-black mb-2 leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(24px,3vw,36px)" }}>
                  Cité Prestige<br /><span className="text-[#1e5d2e]">Bingerville</span>
                </h3>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed max-w-sm">
                  619+ villas sur 31 hectares aménagés. Le projet résidentiel le plus ambitieux de Côte d'Ivoire.
                </p>
                <div className="flex gap-4 mb-6">
                  {[{ val: "619+", label: "Villas" }, { val: "31ha", label: "Aménagés" }, { val: "120+", label: "Livrées" }].map((s) => (
                    <div key={s.label} className="text-center">
                      <div className="text-lg font-black text-[#1e5d2e]" style={{ fontFamily: "var(--font-playfair)" }}>{s.val}</div>
                      <div className="text-gray-400 text-[9px] uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>
                <Link href="/proprietes" className="inline-flex items-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white px-6 py-3 rounded text-sm font-bold transition-colors duration-200">
                  Voir les propriétés <ArrowRight size={15} />
                </Link>
              </div>
            </div>

            {/* SONGON — carte "À venir" (2/5) */}
            <div className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[480px] flex flex-col justify-end group">
              <img
                src="public/images/photo-1500382017468-9049fed747ef.jpeg"
                alt="Projet Songon"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

              {/* Badge À venir */}
              <div className="absolute top-6 left-6">
                <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-widest px-3 py-2 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                  Bientôt disponible
                </span>
              </div>

              <div className="relative z-10 p-8">
                <h3 className="text-white font-black mb-2 leading-tight" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,2.5vw,32px)" }}>
                  Projet<br /><span className="text-yellow-400">Songon</span>
                </h3>
                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  Notre prochain grand projet résidentiel. Les détails seront révélés très prochainement.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white px-6 py-3 rounded text-sm font-bold transition-colors duration-200">
                  Être informé en avant-première <ArrowRight size={15} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* POURQUOI NOUS CHOISIR */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Nos engagements</p>
            <h2 className="text-gray-900 font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,4vw,40px)" }}>
              Pourquoi nous choisir ?
            </h2>
            <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {raisons.map((r) => (
              <div key={r.title} className="bg-gray-50 rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-[#1e5d2e]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-[#1e5d2e]/15 flex items-center justify-center mb-4">{r.icon}</div>
                <h3 className="text-gray-900 font-bold text-base mb-2" style={{ fontFamily: "var(--font-playfair)" }}>{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTUALITÉS & ÉVÉNEMENTS — CAROUSEL */}
      <section className="py-16 sm:py-24 px-6 sm:px-12 lg:px-20 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
            <div>
              <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Restez informés</p>
              <h2 className="text-gray-900 font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,4vw,40px)" }}>
                Actualités & Événements
              </h2>
              <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mt-4" />
            </div>
            <Link href="/actualites" className="text-[#1e5d2e] text-sm font-semibold flex items-center gap-1 hover:underline shrink-0">
              Voir tout <ArrowRight size={14} />
            </Link>
          </div>
          <ActualitesCarousel />
        </div>
      </section>

      {/* BANDEAU CTA */}
      <section className="bg-white border-t border-[#1e5d2e]/20 py-16 px-6 sm:px-12">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-[#1e5d2e] font-black mb-2 leading-tight whitespace-nowrap" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px,2.5vw,28px)" }}>
              Intéressé par la Cité Prestige ?
            </h2>
            <p className="text-[#1e5d2e]/70 text-sm">Réservez votre villa dès aujourd'hui et rejoignez la Cité Prestige de Bingerville.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="https://wa.me/2250716171717"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1e5d2e] hover:bg-[#163f20] text-white font-bold px-6 py-4 rounded text-sm transition-colors duration-200"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1e5d2e] text-white hover:bg-[#163f20] font-bold px-6 py-4 rounded text-sm transition-colors duration-200"
            >
              <Phone size={18} />
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
