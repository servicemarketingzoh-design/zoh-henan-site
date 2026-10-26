"use client";

import { useEffect, useState } from "react";
import { MessageCircle, HelpCircle, X, ArrowUp } from "lucide-react";
import ChatBot from "./ChatBot";
import FaqPanel from "./FaqPanel";

type Panel = "chat" | "faq" | null;

const buttonBase =
  "relative w-[52px] h-[52px] rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-105";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [showTeaser, setShowTeaser] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Apparaît quand on est à 90% du bas de la page
      const scrolled = window.scrollY + window.innerHeight;
      const total = document.documentElement.scrollHeight;
      setShowScrollTop(scrolled >= total * 0.9);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Petite bulle d'accueil affichée une fois par session
  useEffect(() => {
    try {
      if (sessionStorage.getItem("zh-teaser-seen")) return;
    } catch {}
    const timer = setTimeout(() => setShowTeaser(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!panel) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPanel(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [panel]);

  const dismissTeaser = () => {
    setShowTeaser(false);
    try {
      sessionStorage.setItem("zh-teaser-seen", "1");
    } catch {}
  };

  const toggle = (next: Exclude<Panel, null>) => {
    dismissTeaser();
    setPanel((current) => (current === next ? null : next));
  };

  return (
    <>
      <ChatBot open={panel === "chat"} onClose={() => setPanel(null)} />
      {panel === "faq" && <FaqPanel onClose={() => setPanel(null)} onOpenChat={() => setPanel("chat")} />}

      <div className="fixed bottom-8 right-6 z-[9999] flex flex-col items-end gap-3">

        {/* Bulle d'accueil */}
        {showTeaser && !panel && (
          <div className="zh-panel-in absolute bottom-[calc(100%-52px)] right-[64px] w-56 rounded-2xl rounded-br-md bg-white px-4 py-3 shadow-xl border border-gray-100">
            <button onClick={dismissTeaser} aria-label="Fermer" className="absolute top-2 right-2 text-gray-300 hover:text-gray-500">
              <X size={14} />
            </button>
            <p className="text-[13px] font-semibold text-gray-900 pr-4">Bonjour 👋</p>
            <button onClick={() => toggle("chat")} className="text-left text-[12.5px] text-gray-500 leading-snug mt-0.5 hover:text-[#1e5d2e]">
              Une question sur nos villas ? Notre assistant vous répond tout de suite.
            </button>
          </div>
        )}

        {/* ChatBot */}
        <button
          onClick={() => toggle("chat")}
          title="Assistant ZOH-HENAN"
          aria-label={panel === "chat" ? "Fermer le chat" : "Ouvrir le chat"}
          aria-expanded={panel === "chat"}
          className={`${buttonBase} shadow-[0_8px_24px_rgba(30,93,46,0.45)] ${panel === "chat" ? "bg-[#0a2e14]" : "bg-[#1e5d2e]"}`}
        >
          {panel === "chat" ? <X size={20} /> : <MessageCircle size={22} />}
          {panel !== "chat" && (
            <span className="absolute top-[3px] right-[3px] w-[11px] h-[11px] rounded-full bg-[#4ade80] border-2 border-white" />
          )}
        </button>

        {/* FAQ */}
        <button
          onClick={() => toggle("faq")}
          title="FAQ"
          aria-label={panel === "faq" ? "Fermer la FAQ" : "Aide et FAQ"}
          aria-expanded={panel === "faq"}
          className={`${buttonBase} shadow-[0_4px_16px_rgba(30,93,46,0.4)] ${panel === "faq" ? "bg-[#0a2e14]" : "bg-[#1e5d2e]"}`}
        >
          {panel === "faq" ? <X size={20} /> : <HelpCircle size={22} />}
        </button>

        {/* Scroll to top — apparaît seulement en bas de page */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          title="Remonter en haut"
          aria-label="Remonter en haut"
          className={`${buttonBase} bg-[#1e5d2e] hover:bg-[#163f20] shadow-[0_4px_16px_rgba(18,154,57,0.5)] ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
          }`}
        >
          <ArrowUp size={22} />
        </button>
      </div>
    </>
  );
}
