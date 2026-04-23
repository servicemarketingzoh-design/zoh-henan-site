"use client";

import { useEffect, useState } from "react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-8 right-6 z-[9999] flex flex-col gap-3">

      {/* Support / Headset */}
      <button
        title="Support client"
        aria-label="Support client"
        style={{
          width: 52, height: 52, borderRadius: "50%",
          backgroundColor: "#1e5d2e", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(46,125,50,0.45)",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1e5d2e")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1e5d2e")}
      >
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
          <path d="M12 2C6.477 2 2 6.477 2 12v3a3 3 0 003 3h1a1 1 0 001-1v-4a1 1 0 00-1-1H4.071A8 8 0 0120 12h-2a1 1 0 00-1 1v4a1 1 0 001 1h1a3 3 0 003-3v-3c0-5.523-4.477-10-10-10z" />
        </svg>
      </button>

      {/* FAQ / Question */}
      <button
        title="FAQ"
        aria-label="Aide et FAQ"
        style={{
          width: 52, height: 52, borderRadius: "50%",
          backgroundColor: "#1e5d2e", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(46,125,50,0.45)",
          transition: "all 0.2s",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1e5d2e")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1e5d2e")}
      >
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
        </svg>
      </button>

      {/* Scroll to top — apparaît seulement en bas de page */}
      <button
        onClick={scrollToTop}
        title="Remonter en haut"
        aria-label="Remonter en haut"
        style={{
          width: 52, height: 52, borderRadius: "50%",
          backgroundColor: "#1e5d2e", border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 16px rgba(18,154,57,0.5)",
          transition: "all 0.3s",
          opacity: showScrollTop ? 1 : 0,
          transform: showScrollTop ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
          pointerEvents: showScrollTop ? "auto" : "none",
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#163f20")}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1e5d2e")}
      >
        <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
          <path d="M12 4l-8 8h5v8h6v-8h5z" />
        </svg>
      </button>

    </div>
  );
}