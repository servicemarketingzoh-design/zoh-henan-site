"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, X, MessageCircle, HelpCircle } from "lucide-react";
import { faq } from "@/lib/faq";

export default function FaqPanel({ onClose, onOpenChat }: { onClose: () => void; onOpenChat: () => void }) {
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const normalized = query.trim().toLowerCase();
  const results = faq
    .map((item, index) => ({ ...item, index }))
    .filter(
      (item) =>
        !normalized ||
        item.question.toLowerCase().includes(normalized) ||
        item.reponse.toLowerCase().includes(normalized),
    );

  return (
    <div
      role="dialog"
      aria-label="Questions fréquentes"
      className="zh-panel-in fixed z-[10000] inset-3 top-[84px] sm:inset-auto sm:bottom-8 sm:right-[92px] sm:w-[390px] sm:h-[min(620px,calc(100vh-130px))] flex flex-col rounded-[28px] overflow-hidden isolate
        bg-white/45 backdrop-blur-2xl backdrop-saturate-150
        border border-white/60 ring-1 ring-black/5
        shadow-[0_30px_80px_-20px_rgba(10,46,20,0.45),inset_0_1px_0_rgba(255,255,255,0.7)]"
    >
      {/* Reflets colorés derrière le verre */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#1e5d2e]/30 blur-3xl" />
        <div className="absolute top-1/3 -right-24 w-64 h-64 rounded-full bg-[#4ade80]/20 blur-3xl" />
        <div className="absolute -bottom-20 left-10 w-64 h-64 rounded-full bg-[#1e5d2e]/20 blur-3xl" />
      </div>

      {/* En-tête */}
      <div className="relative px-5 pt-5 pb-6 bg-gradient-to-br from-[#0a2e14]/85 via-[#154522]/80 to-[#1e5d2e]/75 backdrop-blur-xl border-b border-white/15 text-white flex-shrink-0">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <button
          onClick={onClose}
          aria-label="Fermer la FAQ"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>
        <div className="w-10 h-10 rounded-2xl bg-white/15 border border-white/25 shadow-[inset_0_1px_0_rgba(255,255,255,0.3)] flex items-center justify-center mb-3">
          <HelpCircle size={20} />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[3px] text-white/60">Centre d&apos;aide</p>
        <h2 className="text-xl font-bold mt-1">
          Questions fréquentes
        </h2>
        <div className="mt-4 flex items-center gap-2 rounded-full bg-white/75 backdrop-blur-md border border-white/90 px-4 py-2.5 text-gray-700 focus-within:ring-2 focus-within:ring-white/50">
          <Search size={16} className="text-gray-400 flex-shrink-0" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une question…"
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Questions */}
      <div className="flex-1 min-h-0 overflow-y-auto px-4 py-4 space-y-2">
        {results.length === 0 && (
          <p className="text-center text-sm text-gray-500 py-8">
            Aucune question ne correspond à votre recherche.
          </p>
        )}
        {results.map((item) => {
          const isOpen = openIndex === item.index;
          return (
            <div
              key={item.index}
              className={`rounded-2xl backdrop-blur-xl border transition-all ${
                isOpen
                  ? "bg-white/80 border-white shadow-[0_8px_24px_-10px_rgba(10,46,20,0.3)]"
                  : "bg-white/55 border-white/80 shadow-[0_2px_10px_-4px_rgba(10,46,20,0.15)] hover:bg-white/70"
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : item.index)}
                aria-expanded={isOpen}
                className="w-full flex items-start justify-between gap-3 px-4 py-3.5 text-left"
              >
                <span className="text-[13.5px] font-semibold text-gray-900 leading-snug">{item.question}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#1e5d2e] flex-shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isOpen && (
                <p className="zh-msg-in px-4 pb-4 -mt-1 text-[13px] text-gray-600 leading-relaxed">{item.reponse}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* Pied */}
      <div className="flex-shrink-0 border-t border-white/60 bg-white/35 backdrop-blur-xl px-4 py-3">
        <p className="text-xs text-gray-600 mb-2">Vous ne trouvez pas votre réponse ?</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onOpenChat}
            className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-[#1e5d2e] to-[#2b7a40] hover:from-[#163f20] hover:to-[#1e5d2e] border border-white/10 text-white text-[13px] font-semibold py-2.5 shadow-[0_6px_16px_-8px_rgba(30,93,46,0.8)] transition-colors"
          >
            <MessageCircle size={15} />
            Assistant
          </button>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center rounded-xl bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/90 text-[#1e5d2e] text-[13px] font-semibold py-2.5 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
