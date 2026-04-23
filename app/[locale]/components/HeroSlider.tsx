"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const slides = [
  {
    url: "/images/accueil/hero-slider/GUERITE ENTREE PRINCIPALE.jpg",
    alt: "Guérite entrée principale - Cité Prestige",
  },
  {
    url: "/images/accueil/hero-slider/Perspective masse 01.jpg",
    alt: "Cité Prestige Bingerville - Vue d'ensemble",
  },
  {
    url: "/images/accueil/hero-slider/VILLAS Prestige 6P vue perspective.jpg",
    alt: "Villas Prestige 6P - Vue perspective",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent((index + slides.length) % slides.length);
    setTimeout(() => setAnimating(false), 1200);
  }, [animating]);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [current, goTo]);

  return (
    <section className="relative min-h-[600px] overflow-hidden" style={{ height: "92vh" }}>
      {/* SLIDES */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${
            i === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.url}
            alt={slide.alt}
            fill
            className="object-cover"
            priority={i === 0}
            quality={75}
            sizes="100vw"
          />
        </div>
      ))}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black/40 z-10" />

      {/* CONTENT */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6 pt-[70px]">
        <h1
          className="font-serif text-white font-black leading-tight max-w-3xl mb-4"
          style={{
            fontSize: "clamp(18px, 3vw, 42px)",
            textShadow: "0 4px 30px rgba(0,0,0,0.4)",
          }}
        >
          CONSTRUIRE AUJOURD&apos;HUI,<br />
          POUR LOGER LA CÔTE D&apos;IVOIRE DE DEMAIN
        </h1>

        <p
          className="text-white/90 max-w-2xl leading-relaxed mb-10 font-light"
          style={{
            fontSize: "clamp(14px, 1.5vw, 18px)",
            textShadow: "0 2px 10px rgba(0,0,0,0.5)",
          }}
        >
          Zoh-Henan SA développe des projets immobiliers modernes et accessibles,
          conçus pour répondre aux besoins des familles et contribuer à
          l&apos;aménagement durable du territoire Ivoirien.
        </p>

        <div className="flex gap-4 flex-wrap justify-center">
          <button className="px-9 py-4 cursor-pointer bg-[#1e5d2e] hover:bg-[#1e5d2e] text-white rounded text-sm font-semibold tracking-wide shadow-[0_4px_20px_rgba(46,125,50,0.4)] hover:-translate-y-1 hover:shadow-[0_8px_28px_rgba(46,125,50,0.5)] transition-all duration-250">
            Découvrir nos projets
          </button>
          <button className="cursor-pointer bg-transparent hover:bg-white/15 text-white border-2 border-white/80 hover:border-white px-9 py-4 rounded text-sm font-semibold tracking-wide hover:-translate-y-1 transition-all duration-250">
            Nous contacter
          </button>
        </div>
      </div>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
