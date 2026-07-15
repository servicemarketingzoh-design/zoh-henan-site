"use client";

import { useState, useEffect, useRef } from "react";

// ── Types ──────────────────────────────────────────────────────────────────────

type Message = {
  id: number;
  from: "bot" | "user";
  text: string;
  typing?: boolean;
};

type Option = {
  label: string;
  value: string;
};

type Step = {
  messages: string[];
  options?: Option[];
  end?: boolean;
};

// ── Arbre de conversation ──────────────────────────────────────────────────────

const FLOW: Record<string, Step> = {

  start: {
    messages: [
      "Bonjour ! 👋 Bienvenue chez **ZOH-HENAN Immobilier**.",
      "Je suis votre assistant. Quel est votre besoin aujourd'hui ?",
    ],
    options: [
      { label: "🏡 Découvrir nos villas", value: "villas" },
      { label: "💰 Prix & financement", value: "financement" },
      { label: "📍 Localisation du projet", value: "localisation" },
      { label: "📋 Garanties & documents", value: "garanties" },
      { label: "📞 Parler à un conseiller", value: "conseiller" },
    ],
  },

  villas: {
    messages: [
      "Nous proposons plusieurs types de villas à la **Cité Prestige de Bingerville**. Que souhaitez-vous savoir ?",
    ],
    options: [
      { label: "🔑 Voir tous les types de villas", value: "villas_types" },
      { label: "🏠 Villas plain-pied (Basse)", value: "villas_basse" },
      { label: "🏘 Villas duplex (R+1)", value: "villas_duplex" },
      { label: "⬅ Retour au menu", value: "start" },
    ],
  },

  villas_types: {
    messages: [
      "Voici nos 6 gammes de villas :",
      "🔹 **Villa SAPHIR** — Basse 3P · 39 530 000 FCFA\n🔹 **Villa ÉMERAUDE** — Basse 5P · 59 000 000 FCFA\n🔹 **Villa TOPAZE** — Duplex 4P · 69 030 000 FCFA\n🔹 **Villa 5P** — Duplex 5P · 65 000 000 FCFA\n🔹 **Villa DIAMANT** — Duplex 5P · 89 810 000 FCFA\n🔹 **Villa PRESTIGE** — Duplex 6P · 130 000 000 FCFA",
      "Toutes sont livrées avec un **titre de propriété CMPF** inclus. Puis-je vous en dire plus ?",
    ],
    options: [
      { label: "💰 Options de financement", value: "financement" },
      { label: "🛒 Comment acheter ?", value: "achat" },
      { label: "⬅ Retour aux villas", value: "villas" },
    ],
  },

  villas_basse: {
    messages: [
      "Nos villas **plain-pied** sont idéales pour les familles qui préfèrent tout de plein-pied :",
      "🏠 **Villa SAPHIR** — 3 Pièces, 200 m² terrain, 2 chambres, 2 SDB\n→ À partir de **39 530 000 FCFA**\n\n🏠 **Villa ÉMERAUDE** — 5 Pièces, 300 m² terrain, 4 chambres, 2 SDB, garage\n→ À partir de **59 000 000 FCFA**",
      "Ces villas conviennent parfaitement aux primo-accédants et aux familles. Que souhaitez-vous faire ?",
    ],
    options: [
      { label: "💰 Financement disponible ?", value: "financement" },
      { label: "🛒 Comment acheter ?", value: "achat" },
      { label: "⬅ Voir aussi les duplex", value: "villas_duplex" },
    ],
  },

  villas_duplex: {
    messages: [
      "Nos villas **duplex (R+1)** offrent de grands espaces sur deux niveaux :",
      "🏘 **Villa TOPAZE** — 4P, 250 m² terrain, 3 chambres, garage\n→ À partir de **69 030 000 FCFA**\n\n🏘 **Villa 5P** — 5P, 280 m² terrain, 4 chambres, 3 SDB, garage\n→ À partir de **65 000 000 FCFA**\n\n🏘 **Villa DIAMANT** — 5P, 350 m² terrain, 4 chambres, 3 SDB\n→ À partir de **89 810 000 FCFA**\n\n🏘 **Villa PRESTIGE** — 6P, 350 m² terrain, 5 chambres, 4 SDB, garage double\n→ À partir de **130 000 000 FCFA**",
      "Nos duplex sont parfaits pour les familles nombreuses et les investisseurs.",
    ],
    options: [
      { label: "💰 Financement disponible ?", value: "financement" },
      { label: "🛒 Comment acheter ?", value: "achat" },
      { label: "⬅ Voir aussi les basses", value: "villas_basse" },
    ],
  },

  financement: {
    messages: [
      "Plusieurs options de financement sont disponibles pour l'acquisition de votre villa. Quelle est votre situation ?",
    ],
    options: [
      { label: "🏦 Je cherche un crédit immobilier", value: "financement_credit" },
      { label: "👷 Je suis affilié à la CNPS", value: "financement_cnps" },
      { label: "🏦 Je suis client Société Générale", value: "financement_sgci" },
      { label: "💵 Achat comptant / fonds propres", value: "financement_comptant" },
      { label: "⬅ Retour au menu", value: "start" },
    ],
  },

  financement_credit: {
    messages: [
      "ZOH-HENAN travaille avec plusieurs partenaires bancaires :",
      "🏦 **BHCI** (Banque de l'Habitat de Côte d'Ivoire) — notre partenaire officiel avec des conditions préférentielles pour la Cité Prestige.\n\n🏦 **Société Générale CI** — journées immobilier partenaires, dossiers accompagnés.\n\n🏦 **Plusieurs autres banques** acceptant les crédits habitat sur 10 à 20 ans.",
      "Nos conseillers vous aident à monter votre dossier gratuitement. Voulez-vous être rappelé ?",
    ],
    options: [
      { label: "📞 Être rappelé par un conseiller", value: "conseiller" },
      { label: "⬅ Autres options de financement", value: "financement" },
    ],
  },

  financement_cnps: {
    messages: [
      "Excellente nouvelle ! ZOH-HENAN a signé un **accord de partenariat avec la CNPS** (Caisse Nationale de Prévoyance Sociale).",
      "En tant qu'affilié CNPS, vous bénéficiez de :\n✅ Conditions de financement avantageuses\n✅ Taux préférentiels négociés\n✅ Modalités de remboursement adaptées\n✅ Accompagnement personnalisé",
      "Contactez-nous avec votre numéro d'affiliation CNPS pour démarrer votre dossier.",
    ],
    options: [
      { label: "📞 Contacter un conseiller", value: "conseiller" },
      { label: "⬅ Retour au financement", value: "financement" },
    ],
  },

  financement_sgci: {
    messages: [
      "ZOH-HENAN et la Société Générale CI organisent régulièrement des **Journées de l'Immobilier** dans les agences SGCI à travers Abidjan.",
      "En tant que client SGCI, vous pouvez bénéficier de conditions spéciales. Rapprochez-vous de votre agence SGCI ou contactez-nous directement.",
    ],
    options: [
      { label: "📞 Contacter un conseiller", value: "conseiller" },
      { label: "⬅ Retour au financement", value: "financement" },
    ],
  },

  financement_comptant: {
    messages: [
      "Parfait ! L'achat comptant est la solution la plus rapide pour acquérir votre villa.",
      "Le processus est simplifié :\n1️⃣ Choix de votre villa\n2️⃣ Réservation et signature\n3️⃣ Versement du prix\n4️⃣ Remise des clés + titre CMPF",
      "Un conseiller peut vous accompagner pour toutes les formalités. Voulez-vous en savoir plus ?",
    ],
    options: [
      { label: "🛒 Processus d'achat complet", value: "achat" },
      { label: "📞 Parler à un conseiller", value: "conseiller" },
      { label: "⬅ Retour au menu", value: "start" },
    ],
  },

  achat: {
    messages: [
      "Voici le **processus d'acquisition** d'une villa à la Cité Prestige :",
      "1️⃣ **Choix de la villa** — visitez notre site ou venez en agence\n2️⃣ **Réservation** — signature de l'acte et versement d'un acompte\n3️⃣ **Dossier de financement** — BHCI, banque ou fonds propres\n4️⃣ **Signature du contrat** — acte de vente officiel\n5️⃣ **Remise des clés** — avec titre de propriété CMPF inclus",
      "Nos conseillers vous accompagnent **gratuitement** à chaque étape. Prêt à commencer ?",
    ],
    options: [
      { label: "📞 Démarrer avec un conseiller", value: "conseiller" },
      { label: "💰 Options de financement", value: "financement" },
      { label: "⬅ Retour au menu", value: "start" },
    ],
  },

  localisation: {
    messages: [
      "La **Cité Prestige ZOH-HENAN** est située à **Bingerville, Abidjan**.",
      "📍 Bingerville, commune de l'est d'Abidjan\n🛣 Accessible en 20 min depuis le Plateau via l'autoroute\n🏘 31 hectares entièrement viabilisés\n🏗 619 villas planifiées\n🛣 Routes intérieures bitumées\n🌿 Espaces verts aménagés\n💧 VRD complets (eau, électricité, assainissement)",
      "Bingerville est un cadre de vie calme, verdoyant et en plein essor, idéal pour les familles.",
    ],
    options: [
      { label: "🏡 Voir les villas disponibles", value: "villas" },
      { label: "📞 Organiser une visite", value: "conseiller" },
      { label: "⬅ Retour au menu", value: "start" },
    ],
  },

  garanties: {
    messages: [
      "ZOH-HENAN Immobilier est un promoteur **100% agréé et sécurisé**.",
      "✅ **Agrément Promoteur Immobilier** — Ministère de l'Urbanisme et des Cadres de Vie\n✅ **Arrêté de Concession Définitive (ACD)**\n✅ **CMPF inclus** avec chaque villa (Certificat de Mutation de Propriété Foncière)\n✅ **Prix du Meilleur Projet Immobilier** — SICI 2026\n✅ **Partenaire BHCI** — Banque de l'Habitat de Côte d'Ivoire",
      "Votre investissement est **sécurisé juridiquement**. Aucun risque sur la propriété du terrain.",
    ],
    options: [
      { label: "🏡 Voir les villas", value: "villas" },
      { label: "📞 Parler à un conseiller", value: "conseiller" },
      { label: "⬅ Retour au menu", value: "start" },
    ],
  },

  conseiller: {
    messages: [
      "Parfait ! Notre équipe est disponible pour vous accompagner.",
      "📞 **27 22 49 67 39**\n📱 **07 16 17 17 17**\n\nOu écrivez-nous directement sur WhatsApp en cliquant sur le bouton ci-dessous. Un conseiller vous répondra dans les plus brefs délais.",
    ],
    options: [
      { label: "⬅ Retour au menu", value: "start" },
    ],
    end: true,
  },
};

// ── Composant principal ────────────────────────────────────────────────────────

let msgId = 0;
const newMsg = (from: "bot" | "user", text: string, typing = false): Message => ({
  id: ++msgId, from, text, typing,
});

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [stepKey, setStepKey] = useState("start");
  const bottomRef = useRef<HTMLDivElement>(null);

  // Scroll au dernier message
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Lancer le step initial à l'ouverture
  useEffect(() => {
    if (open && messages.length === 0) playStep("start");
  }, [open]);

  const playStep = async (key: string) => {
    const step = FLOW[key];
    if (!step) return;
    setStepKey(key);
    setOptions([]);

    for (const text of step.messages) {
      setIsTyping(true);
      await delay(600 + text.length * 12);
      setIsTyping(false);
      setMessages((prev) => [...prev, newMsg("bot", text)]);
      await delay(180);
    }

    if (step.options) setOptions(step.options);
  };

  const handleOption = async (opt: Option) => {
    setOptions([]);
    setMessages((prev) => [...prev, newMsg("user", opt.label)]);
    await delay(300);
    playStep(opt.value);
  };

  const handleReset = () => {
    setMessages([]);
    setOptions([]);
    setIsTyping(false);
    setTimeout(() => playStep("start"), 100);
  };

  const whatsappUrl = `https://wa.me/2250716171717?text=${encodeURIComponent("Bonjour ZOH-HENAN Immobilier, je souhaite obtenir des informations sur vos villas.")}`;

  return (
    <>
      {/* Fenêtre de chat */}
      {open && (
        <div
          className="fixed bottom-[80px] right-6 z-[9998] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-gray-100"
          style={{ width: 340, height: 540, background: "#fff" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#1e5d2e] flex-shrink-0">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" width="20" height="20">
                <path d="M12 2C6.477 2 2 6.477 2 12v3a3 3 0 003 3h1a1 1 0 001-1v-4a1 1 0 00-1-1H4.071A8 8 0 0120 12h-2a1 1 0 00-1 1v4a1 1 0 001 1h1a3 3 0 003-3v-3c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-white font-bold text-sm leading-none">ZOH-HENAN Immobilier</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-[#4ade80] inline-block" />
                <p className="text-white/80 text-[11px]">Assistant en ligne</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={handleReset} title="Recommencer" className="text-white/60 hover:text-white transition-colors">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" width="16" height="16">
                  <path d="M3 12a9 9 0 109-9M3 3v4h4" />
                </svg>
              </button>
              <button onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors" aria-label="Fermer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="16" height="16">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-2 bg-[#f8faf8]">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                {msg.from === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-[#1e5d2e] flex items-center justify-center flex-shrink-0 mr-2 mt-1">
                    <svg viewBox="0 0 24 24" fill="white" width="12" height="12">
                      <path d="M12 2C6.477 2 2 6.477 2 12v3a3 3 0 003 3h1a1 1 0 001-1v-4a1 1 0 00-1-1H4.071A8 8 0 0120 12h-2a1 1 0 00-1 1v4a1 1 0 001 1h1a3 3 0 003-3v-3c0-5.523-4.477-10-10-10z" />
                    </svg>
                  </div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
                    msg.from === "bot"
                      ? "bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none"
                      : "bg-[#1e5d2e] text-white rounded-tr-none"
                  }`}
                  style={{ fontWeight: msg.from === "bot" ? 400 : 500 }}
                  dangerouslySetInnerHTML={{
                    __html: msg.text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                  }}
                />
              </div>
            ))}

            {/* Indicateur de frappe */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="w-6 h-6 rounded-full bg-[#1e5d2e] flex items-center justify-center flex-shrink-0 mr-2 mt-1">
                  <svg viewBox="0 0 24 24" fill="white" width="12" height="12">
                    <path d="M12 2C6.477 2 2 6.477 2 12v3a3 3 0 003 3h1a1 1 0 001-1v-4a1 1 0 00-1-1H4.071A8 8 0 0120 12h-2a1 1 0 00-1 1v4a1 1 0 001 1h1a3 3 0 003-3v-3c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex gap-1 items-center">
                  <span className="w-2 h-2 bg-[#1e5d2e]/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-2 h-2 bg-[#1e5d2e]/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-2 h-2 bg-[#1e5d2e]/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            {/* Options de réponse */}
            {!isTyping && options.length > 0 && (
              <div className="space-y-1.5 pt-2">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    onClick={() => handleOption(opt)}
                    className="w-full text-left text-[12.5px] font-medium text-[#1e5d2e] border border-[#1e5d2e]/30 rounded-xl px-3 py-2.5 bg-white hover:bg-[#1e5d2e] hover:text-white transition-all duration-200 shadow-sm"
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* WhatsApp footer */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#1ebe5d] transition-colors text-white text-[13px] font-bold flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="white" width="18" height="18">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.932-1.41A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2zm0 18.182a8.182 8.182 0 01-4.178-1.144l-.3-.178-3.1.886.888-3.02-.196-.31A8.182 8.182 0 1112 20.182z" />
            </svg>
            Discuter sur WhatsApp
          </a>
        </div>
      )}

      {/* Bouton flottant */}
      <button
        onClick={() => setOpen((o) => !o)}
        title="Assistant ZOH-HENAN"
        aria-label="Ouvrir le chat"
        style={{
          width: 52, height: 52, borderRadius: "50%",
          backgroundColor: open ? "#163f20" : "#1e5d2e",
          border: "none", cursor: "pointer",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 20px rgba(46,125,50,0.5)",
          transition: "all 0.25s",
          position: "relative",
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
      >
        {!open ? (
          <svg viewBox="0 0 24 24" fill="white" width="22" height="22">
            <path d="M12 2C6.477 2 2 6.477 2 12v3a3 3 0 003 3h1a1 1 0 001-1v-4a1 1 0 00-1-1H4.071A8 8 0 0120 12h-2a1 1 0 00-1 1v4a1 1 0 001 1h1a3 3 0 003-3v-3c0-5.523-4.477-10-10-10z" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" width="20" height="20">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        )}
        {!open && (
          <span style={{
            position: "absolute", top: 3, right: 3,
            width: 11, height: 11, borderRadius: "50%",
            backgroundColor: "#4ade80", border: "2px solid white",
          }} />
        )}
      </button>
    </>
  );
}

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
