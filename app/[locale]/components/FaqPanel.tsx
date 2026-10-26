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
      className="zh-panel-in fixed z-[10000] inset-3 top-[84px] sm:inset-auto sm:bottom-8 sm:right-[92px] sm:w-[380px] sm:h-[min(600px,calc(100vh-130px))] flex flex-col rounded-3xl overflow-hidden bg-white shadow-[0_24px_60px_-12px_rgba(10,46,20,0.35)] border border-gray-100"
    >
      {/* En-tête */}
      <div className="relative px-5 pt-5 pb-6 bg-gradient-to-br from-[#0a2e14] via-[#154522] to-[#1e5d2e] text-white flex-shrink-0">
        <button
          onClick={onClose}
          aria-label="Fermer la FAQ"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>
        <div className="w-10 h-10 rounded-2xl bg-white/15 flex items-center justify-center mb-3">
          <HelpCircle size={20} />
        </div>
        <p className="text-[11px] font-semibold uppercase tracking-[3px] text-white/60">Centre d&apos;aide</p>
        <h2 className="text-xl font-bold mt-1">
          Questions fréquentes
        </h2>
        <div className="mt-4 flex items-center gap-2 rounded-xl bg-white px-3 py-2.5 text-gray-700">
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
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 bg-[#f6f8f6]">
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
              className={`rounded-2xl bg-white border transition-colors ${isOpen ? "border-[#1e5d2e]/30 shadow-sm" : "border-gray-100"}`}
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
      <div className="flex-shrink-0 border-t border-gray-100 bg-white px-4 py-3">
        <p className="text-xs text-gray-500 mb-2">Vous ne trouvez pas votre réponse ?</p>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={onOpenChat}
            className="flex items-center justify-center gap-2 rounded-xl bg-[#1e5d2e] hover:bg-[#163f20] text-white text-[13px] font-semibold py-2.5 transition-colors"
          >
            <MessageCircle size={15} />
            Assistant
          </button>
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-center rounded-xl border border-[#1e5d2e]/30 text-[#1e5d2e] hover:bg-[#1e5d2e]/5 text-[13px] font-semibold py-2.5 transition-colors"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </div>
  );
}
