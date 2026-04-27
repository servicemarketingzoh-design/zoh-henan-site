"use client";

import { useState } from "react";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Image from "next/image";
import { X, Briefcase, GraduationCap, ChevronRight, MapPin } from "lucide-react";

type Membre = {
  id: number;
  nom: string;
  titre: string;
  photo: string | null;
  groupe: "administration" | "bureau" | "chantier";
  bio: string;
  experience: string[];
  formation?: string;
};

const membres: Membre[] = [

  // ── CONSEIL D'ADMINISTRATION ──────────────────────────────────────
  {
    id: 1,
    nom: "Mme ZOH Hortense",
    titre: "Présidente du Conseil d'Administration",
    photo: "/images/nos-equipes/PCA.JPG",
    groupe: "administration",
    formation: "Secteur immobilier — Côte d'Ivoire",
    bio: "Mme Zoh Hortense est une dirigeante reconnue dans le secteur immobilier en Côte d'Ivoire. Partie de la base, avec pour moteur une vision claire et une détermination constante, elle a su transformer ses ambitions en réalisations concrètes.",
    experience: [
      "Présidente du Conseil d'Administration de ZOH-HENAN GUOJI SA, où elle définit et oriente les grandes stratégies de développement de l'entreprise.",
      "Sous sa direction, ZOH-HENAN s'impose progressivement comme un acteur de référence grâce à des projets immobiliers d'envergure en Côte d'Ivoire et à l'international.",
      "L'une des rares femmes à accéder au poste de PCA dans le secteur immobilier ivoirien.",
      "Son parcours, marqué par le travail acharné et l'abnégation, fait d'elle une source d'inspiration pour les femmes et l'ensemble des acteurs du monde entrepreneurial.",
    ],
  },
  {
    id: 2,
    nom: "Marcel Meumika OUEHI",
    titre: "Directeur Général",
    photo: "/images/nos-equipes/DG.JPG",
    groupe: "administration",
    formation: "Ingénieur en Management & Marketing — ESICOM Abidjan Plateau (2005-2008) · BTS Industries Agro-Alimentaires — Lycée Technique d'Abidjan · Baccalauréat série D (1997)",
    bio: "Marcel Meumika Ouehi est une figure respectée dans le secteur de la construction et de la promotion immobilière en Côte d'Ivoire. Né le 20 août 1978 à Tieupleu (Danané), il incarne les valeurs de rigueur, de persévérance et de leadership.",
    experience: [
      "Directeur Général de ZOH-HENAN GUOJI SA depuis juin 2019 — dirige l'ensemble des opérations et assure le positionnement stratégique sur le marché ivoirien.",
      "Directeur Général Adjoint de ZOH-HENAN (2017-2019) — chargé de la gestion et de la mise en place du projet de 1 000 logements bon standing en Côte d'Ivoire.",
      "Directeur Général de VALES Côte d'Ivoire (SVCI) de 2012 à 2017 — renforcement des compétences en gestion de projets BTP.",
      "Responsable du projet de construction du marché de la Première Dame à Yopougon-Selmer (2009-2012).",
      "Missions internationales : Chine (Pékin, 2016), Sierra Leone (Freetown, 2017), Zambie (2017) dans le cadre des projets de ZOH-HENAN GUOJI.",
    ],
  },

  // ── ÉQUIPE DU BUREAU ──────────────────────────────────────────────
  {
    id: 3,
    nom: "Affoué Natogoma AKA N'DIAYE",
    titre: "Head of Development",
    photo: "/images/nos-equipes/AKA.png",
    groupe: "bureau",
    formation: "Master 2 Marketing/Management — EDHEC Yamoussoukro · Licence Professionnelle Marketing/Management · BTS Tourisme et Loisirs",
    bio: "Affoué Natogoma AKA N'DIAYE possède une carrière remarquable de plus de 15 ans dans le secteur bancaire, ponctuée par une progression constante dans des postes à responsabilités croissantes.",
    experience: [
      "Responsable du Service Développement de ZOH-HENAN GUOJI SA — conçoit et pilote des actions de développement stratégique, développe des partenariats commerciaux.",
      "Superviseur banque chez KEDA Côte d'Ivoire (2024) — transition vers le secteur industriel avant de rejoindre ZOH-HENAN.",
      "Responsable d'agence à la NSIA Banque CI (ex-BIAO-CI) dans plusieurs localités clés : Yamoussoukro, Divo, Bingerville, Yopougon, Cocody et Marcory.",
      "Plus de 15 ans chez NSIA Banque (2007-2024) : stagiaire commerciale → assistante clientèle → conseillère → responsable d'agence.",
      "Maîtrise des outils bancaires : Orion, VSIGN, Amplitude. Langues : français (courant), anglais (compréhension).",
    ],
  },
  {
    id: 4,
    nom: "Marie BEHIBRO",
    titre: "Sales Director",
    photo: "/images/nos-equipes/BEHIBRO.jpg",
    groupe: "bureau",
    formation: "Certification Marketing Management — AVIS ACADEMY (2022) · BTS Secrétariat Bureautique — CBCG Cocody",
    bio: "Marie BEHIBRO est une professionnelle accomplie dans le domaine commercial, administratif et managérial, avec plus de 15 ans d'expérience dans des structures de renom.",
    experience: [
      "Directrice Commerciale chez ZOH-HENAN GUOJI SA depuis mai 2024 — dirige l'équipe commerciale, met en œuvre les stratégies de vente, assure le suivi client et la recherche de financement.",
      "Responsable Commerciale & Responsable des Achats chez BEL DÉCLIC IMMOBILIER (2017) — coordination commerciale, gestion des stocks, supervision d'équipe.",
      "Assistante du Directeur Général chez INTERBAT pendant près de 10 ans (2008-2017) — gestion des plannings, reporting, correspondance des services.",
      "Leadership naturel, capacité à fédérer une équipe autour d'objectifs communs.",
      "Maîtrise des outils : Outlook, Word, Excel. Excellente communication et sens du service.",
    ],
  },
  {
    id: 5,
    nom: "Yves-Arnaud DJE BY",
    titre: "Marketing & Communication Director",
    photo: "/images/nos-equipes/DJE BY.JPG",
    groupe: "bureau",
    formation: "Master Management-Marketing — (2016-2018) · Double Licence Commerce International & Économie — ISEG Strasbourg & Université Économique de Prague",
    bio: "Spécialiste en management d'équipe, marketing et gestion de projets, Yves-Arnaud DJE BY est un professionnel dynamique fort de plus de 5 ans d'expérience dans des environnements internationaux et multiculturels.",
    experience: [
      "Directeur du département Marketing & Communication de ZOH-HENAN GUOJI SA depuis 2024 — élabore et pilote les campagnes marketing, conçoit les supports de communication interne et externe.",
      "Consultant en gestion de projet et management d'entreprise chez O'JASSER Consulting depuis 2019 — pilotage stratégique, formation et accompagnement opérationnel.",
      "Coordinateur activités & relation client à l'Hôtel Labranda Golden Beach, Espagne (2018) — relation client en français et anglais.",
      "Commercial Microsoft chez Techsell Strasbourg (2015) — promotion et vente de produits technologiques, objectifs régulièrement dépassés.",
      "Polyglotte : français (courant), anglais TOEIC 750. Compétences : digital marketing, négociation, CRM, leadership.",
    ],
  },
  {
    id: 6,
    nom: "N'ZI OI N'ZI Jean Noël",
    titre: "Management Controller",
    photo: "/images/nos-equipes/N'zi.png",
    groupe: "chantier",
    formation: "Licence Professionnelle Comptabilité & Finance — Groupe CEFIAT Salomon (2020) · BTS Finance, Comptabilité & Gestion — EPCCI-CI (2013) · Baccalauréat série D (2011)",
    bio: "Né en Côte d'Ivoire en 1992, Jean Noël N'ZI OI N'ZI s'est très tôt intéressé aux chiffres, à l'organisation et à la fiabilité des processus financiers.",
    experience: [
      "Contrôleur de Gestion chez ZOH-HENAN GUOJI SA depuis mars 2025 — analyse des processus de production BTP et VRD, suivi budgétaire, évaluation des coûts de revient et des marges.",
      "Responsable du Pôle Économique & RH chez IDÉAL BLUE SARL (2021-2024) — planification budgétaire, états financiers, suivi des performances, gestion RH.",
      "Responsable Administratif & Financier chez ATM Informatique (2019-2021) — comptabilité ERP Odoo, fiscalité, contrôle budgétaire.",
      "Comptable principal chez Ivodine & cabinet Wildfin (2017) — tenue comptable, déclarations fiscales, contrôle interne.",
      "Agent de recouvrement chez SUNU Assurances Vie-CI (2016). Assistant auditeur chez KPMG Côte d'Ivoire (2014).",
    ],
  },

  // ── RESPONSABLES DE CHANTIER ──────────────────────────────────────
  {
    id: 7,
    nom: "KOFFI Couacou Hippolyte",
    titre: "Director of Construction & Works",
    photo: null,
    groupe: "chantier",
    formation: "INP-HB Yamoussoukro — Techniques du Bâtiment et de l'Urbanisme",
    bio: "Expert en génie civil, bâtiment et urbanisme, KOFFI Couacou Hippolyte incarne plus de quinze années dans la conception, la planification et la réalisation de projets immobiliers d'envergure.",
    experience: [
      "Directeur de Construction & Travaux de ZOH-HENAN SA — pilote avec rigueur des opérations ambitieuses : villas haut de gamme, VRD, aménagements urbains et infrastructures complexes.",
      "Anciennement chez SETELCOM, SCI Les Rosiers et le cabinet Guiton-Architecture — solide expérience dans des structures prestigieuses.",
      "Maîtrise des outils numériques : AutoCAD, ArchiCAD, Revit, MS Project.",
      "Visionnaire et pragmatique, il crée des espaces de vie où confort, fonctionnalité et durabilité se conjuguent.",
      "Plus de 15 ans d'expérience dans la conception et réalisation de projets immobiliers d'envergure en Côte d'Ivoire.",
    ],
  },
  {
    id: 8,
    nom: "Ferdinand KONAN",
    titre: "Building Works Manager",
    photo: null,
    groupe: "chantier",
    formation: "BTS Génie Civil, option Bâtiment (2015) · Baccalauréat série D (2012)",
    bio: "Né en Côte d'Ivoire, Ferdinand KONAN est un professionnel du bâtiment et des travaux publics, spécialisé dans le génie civil, avec près d'une décennie d'expérience sur des chantiers d'envergure.",
    experience: [
      "2022-2025 : Contribution majeure à la Cité Prestige ZOH-HENAN de Bingerville — construction de logements de standing.",
      "2021-2022 : Construction de bureaux de contrôle pour CIMAT IVOIRE.",
      "2020-2021 : Supervision de deux immeubles R+3 type Appartements à la Riviera 2, avec EGECI SARL.",
      "2019-2020 : Bureaux de contrôle pour IVOIR TELECOM à Sinfra, M'bahiakro et Tiémélékro (entreprise KBF).",
      "2018-2019 : Travaux BTP avec SERBAF — salles de classes et bureaux. 2017-2018 : Centre des impôts d'Adzopé (DGBF). 2016-2017 : Construction de l'IFEF à Adjamé (NCIS).",
    ],
  },
  {
    id: 9,
    nom: "Yao BROU",
    titre: "Public Works & Infrastructure Manager",
    photo: null,
    groupe: "chantier",
    formation: "DEA Sciences de la Terre option Hydrogéologie — Université d'Abobo-Adjamé (2002) · Maîtrise Sciences & Techniques de l'Eau (1998)",
    bio: "Expert hydrogéologue de renommée, Yao BROU s'est imposé comme l'un des spécialistes les plus accomplis de sa génération avec plus de deux décennies d'expérience en Afrique de l'Ouest.",
    experience: [
      "Responsable des travaux d'eau potable, assainissement, voirie et électrification sur la Cité Prestige ZOH-HENAN de Bingerville.",
      "Renforcement AEP d'Abidjan depuis la rivière Mé — projet BESIX/PFO (2019-2021).",
      "Alimentation en eau potable d'Abidjan depuis Saint Viateur et Bimbresso (2013-2015).",
      "Projet Présidentiel d'Urgence : réalisation de 300 forages en Côte d'Ivoire (2013).",
      "Programme Banque Mondiale : 20 forages équipés de PMH dans 7 districts sanitaires (2018). Missions en Guinée, CEFACL, AFDEV, BETICI-SN, EGIS-EAU.",
    ],
  },
];

const groupes = [
  {
    key: "administration",
    label: "Conseil d'Administration",
    subtitle: "La gouvernance stratégique de ZOH-HENAN",
  },
  {
    key: "bureau",
    label: "Équipe du Bureau",
    subtitle: "Les experts qui pilotent la gestion et les opérations",
  },
  {
    key: "chantier",
    label: "Équipe du Chantier",
    subtitle: "Les techniciens qui donnent vie à nos projets sur le terrain",
  },
];

function Initiales({ nom }: { nom: string }) {
  return <>{nom.split(" ").filter(Boolean).map((n) => n[0] ?? "").join("").slice(0, 2).toUpperCase()}</>;
}

function MembreModal({ membre, onClose }: { membre: Membre; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl w-full sm:max-w-xl max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors">
          <X size={16} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-[#0a2e14] to-[#1a5c2a] px-8 pt-8 pb-10 rounded-t-3xl sm:rounded-t-2xl text-white">
          <div className="flex items-center gap-5">
            <div className="w-20 h-20 rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center flex-shrink-0 overflow-hidden">
              {membre.photo
                ? <Image src={membre.photo} alt={membre.nom} width={80} height={80} quality={90} className="object-cover object-top w-full h-full" />
                : <span className="text-2xl font-black text-white/70" style={{ fontFamily: "var(--font-playfair)" }}>
                    <Initiales nom={membre.nom} />
                  </span>
              }
            </div>
            <div>
              <h2 className="text-xl font-black leading-tight mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{membre.nom}</h2>
              <p className="text-[#7ddc9e] text-sm font-semibold">{membre.titre}</p>
            </div>
          </div>
        </div>

        {/* Corps */}
        <div className="px-7 py-6 space-y-6">
          {/* Bio */}
          <p className="text-gray-600 text-sm leading-relaxed italic border-l-2 border-[#1e5d2e]/30 pl-4">
            {membre.bio}
          </p>

          {/* Formation */}
          {membre.formation && (
            <div>
              <div className="flex items-center gap-2 mb-3">
                <GraduationCap size={15} className="text-[#1e5d2e]" />
                <span className="text-xs font-semibold tracking-[3px] uppercase text-[#1e5d2e]">Formation</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{membre.formation}</p>
            </div>
          )}

          {/* Expérience */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Briefcase size={15} className="text-[#1e5d2e]" />
              <span className="text-xs font-semibold tracking-[3px] uppercase text-[#1e5d2e]">Parcours & Expériences</span>
            </div>
            <ul className="space-y-3">
              {membre.experience.map((exp, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <ChevronRight size={14} className="text-[#1e5d2e] mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 text-sm leading-relaxed">{exp}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function MembreCard({ membre, onClick }: { membre: Membre; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-[#1e5d2e]/30 transition-all duration-300 text-left w-full cursor-pointer"
    >
      {/* Avatar */}
      <div className="aspect-[4/3] bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden">
        {membre.photo
          ? <Image src={membre.photo} alt={membre.nom} fill quality={90} sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover object-top group-hover:scale-105 transition-transform duration-500" />
          : <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#1e5d2e]/20 to-[#1e5d2e]/10 flex items-center justify-center">
              <span className="text-2xl font-black text-[#1e5d2e]/60" style={{ fontFamily: "var(--font-playfair)" }}>
                <Initiales nom={membre.nom} />
              </span>
            </div>
        }
        <div className="absolute inset-0 bg-[#1e5d2e]/0 group-hover:bg-[#1e5d2e]/10 transition-colors duration-300 flex items-end justify-center pb-3">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-[#1e5d2e] text-xs font-bold px-3 py-1.5 rounded-full shadow">
            Voir le profil →
          </span>
        </div>
      </div>
      {/* Infos */}
      <div className="p-4">
        <h3 className="text-gray-900 font-bold text-sm leading-tight mb-1" style={{ fontFamily: "var(--font-playfair)" }}>{membre.nom}</h3>
        <p className="text-[#1e5d2e] text-xs font-semibold leading-tight">{membre.titre}</p>
      </div>
    </button>
  );
}

export default function EquipesPage() {
  const [selected, setSelected] = useState<Membre | null>(null);

  return (
    <>
      <Header />
      <FloatingButtons />
      {selected && <MembreModal membre={selected} onClose={() => setSelected(null)} />}

      <main className="min-h-screen pt-[70px]">

        {/* ── HERO ─────────────────────────────────────────────────── */}
        <section className="relative bg-[#0a2e14] py-28 px-6 sm:px-12 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.05]"
            style={{ backgroundImage: "repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 60px),repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 60px)" }} />
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1e5d2e]" />
          <div className="relative max-w-4xl mx-auto">
            <p className="text-[#1e5d2e] text-xs font-semibold tracking-[5px] uppercase mb-5">L'équipe ZOH-HENAN</p>
            <h1 className="text-white font-black leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(34px,5.5vw,64px)" }}>
              Nos Équipes
            </h1>
            <div className="w-14 h-[3px] bg-[#1e5d2e] rounded mb-8" />
            <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
              Des professionnels engagés, réunis autour d'une même vision : offrir un immobilier de qualité, transparent et accessible aux Ivoiriens.
            </p>
          </div>
        </section>

        {/* ── SECTIONS PAR GROUPE ───────────────────────────────────── */}
        {groupes.filter((g) => g.key !== "chantier").map((groupe, idx) => {
          const membres_groupe = membres.filter((m) => m.groupe === groupe.key);
          return (
            <section key={groupe.key} className={`py-20 px-6 sm:px-12 lg:px-20 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
              <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-[3px] bg-[#1e5d2e] rounded" />
                    <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase">{groupe.label}</p>
                  </div>
                  <h2 className="text-gray-900 font-black mb-2"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,34px)" }}>
                    {groupe.label}
                  </h2>
                  <p className="text-gray-400 text-sm">{groupe.subtitle}</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
                  {membres_groupe.map((m) => (
                    <MembreCard key={m.id} membre={m} onClick={() => setSelected(m)} />
                  ))}
                </div>
              </div>
            </section>
          );
        })}

      </main>
      <Footer />
    </>
  );
}
