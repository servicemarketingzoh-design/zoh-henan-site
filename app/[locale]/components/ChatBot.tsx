"use client";

import { useState, useEffect, useRef, useCallback, type ReactNode, type FormEvent } from "react";
import Image from "next/image";
import { RotateCcw, X, Send, Phone } from "lucide-react";

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


// ── Compréhension des messages tapés ──────────────────────────────────────────

const KEYWORDS: { step: string; words: string[] }[] = [
  { step: "conseiller", words: ["conseiller", "appel", "rappel", "telephone", "contact", "humain", "parler", "visite", "whatsapp"] },
  { step: "financement", words: ["prix", "cout", "tarif", "combien", "financ", "credit", "banque", "cnps", "payer", "paiement", "bhci"] },
  { step: "achat", words: ["acheter", "achat", "reserv", "process", "etape", "acquerir"] },
  { step: "garanties", words: ["titre", "cmpf", "acd", "agre", "garantie", "document", "securi", "legal", "arnaque", "fiable"] },
  { step: "localisation", words: ["ou se", "localis", "adresse", "bingerville", "situe", "plan", "acces", "trouve"] },
  { step: "villas_duplex", words: ["duplex", "r+1", "etage"] },
  { step: "villas_basse", words: ["plain", "basse"] },
  { step: "villas", words: ["villa", "maison", "piece", "chambre", "logement", "type"] },
  { step: "start", words: ["bonjour", "salut", "bonsoir", "menu", "hello", "aide"] },
];

function normalize(text: string) {
  return text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function matchStep(text: string) {
  const value = normalize(text);
  return KEYWORDS.find(({ words }) => words.some((w) => value.includes(w)))?.step;
}

// Rend le gras **texte** sans injecter de HTML.
function formatText(text: string): ReactNode[] {
  return text.split(/(\*\*.*?\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="font-semibold text-gray-900">{part.slice(2, -2)}</strong>
    ) : (
      part
    ),
  );
}

// ── Composant principal ────────────────────────────────────────────────────────

let msgId = 0;
const newMsg = (from: "bot" | "user", text: string): Message => ({ id: ++msgId, from, text });

const PHONE = "+2250716171717";
const WHATSAPP_URL = `https://wa.me/2250716171717?text=${encodeURIComponent("Bonjour ZOH-HENAN Immobilier, je souhaite obtenir des informations sur vos villas.")}`;

function BotAvatar({ size = 28 }: { size?: number }) {
  return (
    <div
      className="rounded-full bg-white/80 backdrop-blur-md ring-1 ring-white/80 shadow-[0_2px_8px_rgba(10,46,20,0.12)] flex items-center justify-center flex-shrink-0 overflow-hidden"
      style={{ width: size, height: size }}
    >
      <Image src="/images/logo.png" alt="" width={size} height={size} className="object-contain p-[3px]" />
    </div>
  );
}

export default function ChatBot({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [options, setOptions] = useState<Option[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const runRef = useRef(0);

  useEffect(() => {
    // Fait défiler uniquement la liste des messages (pas la fenêtre ni la page).
    const list = listRef.current;
    if (list) list.scrollTo({ top: list.scrollHeight, behavior: "smooth" });
  }, [messages, isTyping, options]);

  const playStep = useCallback(async (key: string, intro?: string) => {
    const step = FLOW[key];
    if (!step) return;
    const run = ++runRef.current;
    setOptions([]);

    for (const text of intro ? [intro, ...step.messages] : step.messages) {
      setIsTyping(true);
      await delay(450 + Math.min(text.length, 200) * 6);
      if (run !== runRef.current) return;
      setIsTyping(false);
      setMessages((prev) => [...prev, newMsg("bot", text)]);
      await delay(150);
    }

    if (run === runRef.current && step.options) setOptions(step.options);
  }, []);

  // Lance l'accueil à la première ouverture.
  const startedRef = useRef(false);
  useEffect(() => {
    if (!open || startedRef.current) return;
    startedRef.current = true;
    const timer = setTimeout(() => playStep("start"), 0);
    return () => clearTimeout(timer);
  }, [open, playStep]);

  const handleOption = async (opt: Option) => {
    setOptions([]);
    setMessages((prev) => [...prev, newMsg("user", opt.label)]);
    await delay(250);
    playStep(opt.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setInput("");
    setOptions([]);
    setMessages((prev) => [...prev, newMsg("user", text)]);
    await delay(250);
    const step = matchStep(text);
    if (step) playStep(step);
    else playStep("start", "Je n'ai pas bien compris votre demande 🤔 Voici les sujets sur lesquels je peux vous aider :");
  };

  const handleReset = () => {
    runRef.current++;
    setMessages([]);
    setOptions([]);
    setIsTyping(false);
    setTimeout(() => playStep("start"), 100);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-label="Assistant ZOH-HENAN"
      className="zh-panel-in fixed z-[10000] inset-3 top-[84px] sm:inset-auto sm:bottom-8 sm:right-[92px] sm:w-[390px] sm:h-[min(640px,calc(100vh-130px))] flex flex-col rounded-[28px] overflow-hidden isolate
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
      <div className="relative flex items-center gap-3 px-4 py-4 flex-shrink-0 bg-gradient-to-br from-[#0a2e14]/85 via-[#154522]/80 to-[#1e5d2e]/75 backdrop-blur-xl border-b border-white/15">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
        <div className="relative">
          <div className="rounded-full p-[2px] bg-gradient-to-br from-white/80 to-white/20">
            <BotAvatar size={42} />
          </div>
          <span className="absolute bottom-0.5 right-0.5 w-3 h-3 rounded-full bg-[#4ade80] ring-2 ring-[#154522] shadow-[0_0_8px_#4ade80]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white font-bold text-[15px] leading-tight">Assistant Zoh-Henan</p>
          <p className="text-white/70 text-[11.5px] mt-0.5">En ligne · Répond instantanément</p>
        </div>
        <button
          onClick={handleReset}
          title="Recommencer"
          aria-label="Recommencer la conversation"
          className="w-8 h-8 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        >
          <RotateCcw size={14} />
        </button>
        <button
          onClick={onClose}
          aria-label="Fermer le chat"
          className="w-8 h-8 rounded-full text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center transition-colors"
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages */}
      <div ref={listRef} className="flex-1 min-h-0 overflow-y-auto px-4 py-5 space-y-3">
        <div className="flex justify-center">
          <span className="text-[10.5px] font-semibold uppercase tracking-[2px] text-[#1e5d2e]/70 bg-white/50 backdrop-blur-md border border-white/60 rounded-full px-3 py-1">
            Aujourd&apos;hui
          </span>
        </div>

        {messages.map((msg, i) => {
          const prev = messages[i - 1];
          const showAvatar = msg.from === "bot" && prev?.from !== "bot";
          return (
            <div key={msg.id} className={`zh-msg-in flex items-end gap-2 ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
              {msg.from === "bot" && (showAvatar ? <BotAvatar /> : <div className="w-7 flex-shrink-0" />)}
              <div
                className={`max-w-[82%] px-3.5 py-2.5 text-[13px] leading-relaxed whitespace-pre-line ${
                  msg.from === "bot"
                    ? "bg-white/70 backdrop-blur-xl text-gray-700 rounded-2xl rounded-bl-md border border-white/80 shadow-[0_4px_16px_-6px_rgba(10,46,20,0.15)]"
                    : "bg-gradient-to-br from-[#1e5d2e] to-[#2b7a40] text-white rounded-2xl rounded-br-md font-medium shadow-[0_6px_18px_-6px_rgba(30,93,46,0.6)] border border-white/10"
                }`}
              >
                {msg.from === "bot" ? formatText(msg.text) : msg.text}
              </div>
            </div>
          );
        })}

        {isTyping && (
          <div className="zh-msg-in flex items-end gap-2">
            <BotAvatar />
            <div className="bg-white/70 backdrop-blur-xl border border-white/80 rounded-2xl rounded-bl-md px-4 py-3 shadow-[0_4px_16px_-6px_rgba(10,46,20,0.15)] flex gap-1 items-center">
              {[0, 150, 300].map((d) => (
                <span key={d} className="w-1.5 h-1.5 bg-[#1e5d2e]/60 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
              ))}
            </div>
          </div>
        )}

        {!isTyping && options.length > 0 && (
          <div className="zh-msg-in flex flex-wrap gap-2 pl-9 pt-1">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleOption(opt)}
                className="text-left text-[12.5px] font-medium text-[#1e5d2e] bg-white/55 backdrop-blur-md border border-white/80 rounded-full px-3.5 py-2 shadow-[0_2px_10px_-4px_rgba(10,46,20,0.2)] hover:bg-[#1e5d2e] hover:text-white hover:border-[#1e5d2e] hover:-translate-y-px transition-all duration-150"
              >
                {opt.label}
              </button>
            ))}
          </div>
        )}

      </div>

      {/* Saisie + contacts directs */}
      <div className="flex-shrink-0 px-3 pt-3 pb-3 space-y-2.5 bg-white/35 backdrop-blur-xl border-t border-white/60">
        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 rounded-full bg-white/70 backdrop-blur-md border border-white/90 shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] pl-4 pr-1.5 py-1.5 focus-within:ring-2 focus-within:ring-[#1e5d2e]/25"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Écrivez votre question…"
            aria-label="Votre message"
            className="flex-1 bg-transparent text-[13px] outline-none placeholder:text-gray-400"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            aria-label="Envoyer"
            className="w-8 h-8 rounded-full bg-gradient-to-br from-[#1e5d2e] to-[#2b7a40] text-white flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(30,93,46,0.7)] disabled:opacity-40 transition-opacity"
          >
            <Send size={14} />
          </button>
        </form>
        <div className="grid grid-cols-2 gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 rounded-xl bg-[#25D366]/90 hover:bg-[#25D366] backdrop-blur-md border border-white/40 text-white text-[12.5px] font-semibold py-2 shadow-[0_6px_16px_-8px_rgba(37,211,102,0.9)] transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="white" width="15" height="15" aria-hidden>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.932-1.41A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.522 2 11.999 2zm0 18.182a8.182 8.182 0 01-4.178-1.144l-.3-.178-3.1.886.888-3.02-.196-.31A8.182 8.182 0 1112 20.182z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={`tel:${PHONE}`}
            className="flex items-center justify-center gap-1.5 rounded-xl bg-white/60 hover:bg-white/80 backdrop-blur-md border border-white/90 text-[#1e5d2e] text-[12.5px] font-semibold py-2 transition-colors"
          >
            <Phone size={14} />
            Appeler
          </a>
        </div>
      </div>
    </div>
  );
}

function delay(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
