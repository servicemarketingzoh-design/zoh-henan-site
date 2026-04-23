"use client";

import { useState, useCallback, useEffect } from "react";
import Header from "../components/Header";
import FloatingButtons from "../components/FloatingButtons";
import Footer from "../components/Footer";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Images } from "lucide-react";

// ── Collections organisées ────────────────────────────────────────────────────

const collections = [
  {
    id: "sici-2026",
    label: "SICI 2026 — Prix du Meilleur Projet Immobilier",
    description: "Les 7 et 8 février 2026 au Parc des Expositions d'Abidjan, ZOH-HENAN remporte le Prix du Meilleur Projet Immobilier lors du Salon de l'Immobilier de Côte d'Ivoire.",
    cover: "/images/actualites/sici-2026/0D9A9697.webp",
    images: [
      "/images/actualites/sici-2026/0D9A9697.webp",
      "/images/actualites/sici-2026/0D9A9732.webp",
      "/images/actualites/sici-2026/0D9A9727.webp",
      "/images/actualites/sici-2026/0D9A9695.webp",
      "/images/actualites/sici-2026/0D9A9654.webp",
      "/images/actualites/sici-2026/0D9A9505.webp",
      "/images/actualites/sici-2026/0D9A9422.webp",
      "/images/actualites/sici-2026/0D9A9395.webp",
      "/images/actualites/sici-2026/0D9A9387.webp",
      "/images/actualites/sici-2026/0D9A9383.webp",
      "/images/actualites/sici-2026/0D9A9357.webp",
      "/images/actualites/sici-2026/0D9A9346.webp",
      "/images/actualites/sici-2026/0D9A9294.webp",
      "/images/actualites/sici-2026/0D9A9269.webp",
      "/images/actualites/sici-2026/0D9A9262.webp",
      "/images/actualites/sici-2026/0D9A9258.webp",
      "/images/actualites/sici-2026/0D9A9244.webp",
      "/images/actualites/sici-2026/0D9A9230.webp",
      "/images/actualites/sici-2026/0D9A9211.webp",
      "/images/actualites/sici-2026/0D9A9174.webp",
      "/images/actualites/sici-2026/0D9A9154.webp",
      "/images/actualites/sici-2026/0D9A9148.webp",
      "/images/actualites/sici-2026/0D9A9144.webp",
      "/images/actualites/sici-2026/0D9A9083.webp",
      "/images/actualites/sici-2026/0D9A9073.webp",
      "/images/actualites/sici-2026/0D9A9070.webp",
      "/images/actualites/sici-2026/0D9A9063.webp",
      "/images/actualites/sici-2026/0D9A9056.webp",
      "/images/actualites/sici-2026/0D9A9044.webp",
      "/images/actualites/sici-2026/0D9A8968.webp",
      "/images/actualites/sici-2026/0D9A8957.webp",
      "/images/actualites/sici-2026/0D9A8950.webp",
      "/images/actualites/sici-2026/0D9A8940.webp",
      "/images/actualites/sici-2026/0D9A8910.webp",
      "/images/actualites/sici-2026/0D9A8893.webp",
      "/images/actualites/sici-2026/0D9A8890.webp",
      "/images/actualites/sici-2026/0D9A8877.webp",
      "/images/actualites/sici-2026/0D9A8685.webp",
      "/images/actualites/sici-2026/IMG_8624.webp",
      "/images/actualites/sici-2026/IMG_8622.webp",
      "/images/actualites/sici-2026/IMG_8621.webp",
      "/images/actualites/sici-2026/IMG_8620.webp",
    ],
  },
  {
    id: "don-communaute-mbatto-bouake-2025",
    label: "Solidarité à M'batto Bouaké — Décembre 2025",
    description: "Le 21 décembre 2025, ZOH-HENAN Immobilier était présent auprès de la communauté villageoise de M'batto à Bouaké pour une journée de partage et de dons.",
    cover: "/images/m'batto bouake/IMG_1482.jpg",
    images: [
      "/images/m'batto bouake/IMG_1585.jpg",
      "/images/m'batto bouake/IMG_1482.jpg",
      "/images/m'batto bouake/IMG_1522.jpg",
      "/images/m'batto bouake/IMG_1538.jpg",
      "/images/m'batto bouake/IMG_1540.jpg",
      "/images/m'batto bouake/IMG_1553.jpg",
      "/images/m'batto bouake/IMG_1444.jpg",
      "/images/m'batto bouake/IMG_1446.jpg",
      "/images/m'batto bouake/IMG_1457.jpg",
      "/images/m'batto bouake/IMG_1460.jpg",
      "/images/m'batto bouake/IMG_1465.jpg",
      "/images/m'batto bouake/IMG_1468.jpg",
      "/images/m'batto bouake/IMG_1408.jpg",
      "/images/m'batto bouake/IMG_1413.jpg",
      "/images/m'batto bouake/IMG_1415.jpg",
      "/images/m'batto bouake/IMG_1393.jpg",
      "/images/m'batto bouake/IMG_1400.jpg",
      "/images/m'batto bouake/IMG_1605.jpg",
      "/images/m'batto bouake/IMG_1613.jpg",
      "/images/m'batto bouake/IMG_1621.jpg",
      "/images/m'batto bouake/IMG_1633.jpg",
      "/images/m'batto bouake/IMG_1641.jpg",
    ],
  },
  {
    id: "ceremonie-independance-mbatto-bouake-2025",
    label: "Fête Nationale à M'batto Bouaké — Août 2025",
    description: "Le 7 août 2025, ZOH-HENAN était présent à la cérémonie de la fête nationale à M'batto Bouaké, couronnée par un défilé impressionnant et une belle communion nationale.",
    cover: "/images/independance/DSC_9155.jpg",
    images: [
      "/images/independance/DSC_9538-2.jpg",
      "/images/independance/DSC_9634.jpg",
      "/images/independance/DSC_9644.jpg",
      "/images/independance/DSC_9646.jpg",
      "/images/independance/DSC_9663.jpg",
      "/images/independance/DSC_9669-2.jpg",
      "/images/independance/DSC_9679.jpg",
      "/images/independance/DSC_9697.jpg",
      "/images/independance/DSC_9155.jpg",
      "/images/independance/DSC_9276.jpg",
      "/images/independance/DSC_9986.jpg",
      "/images/independance/DSC_0158.jpg",
      "/images/independance/DSC_0162.jpg",
      "/images/independance/DSC_0176-2.jpg",
      "/images/independance/DSC_0205.jpg",
      "/images/independance/DSC_0205-2.jpg",
      "/images/independance/DSC_0220.jpg",
      "/images/independance/DSC_0231.jpg",
      "/images/independance/DSC_0245.jpg",
      "/images/independance/DSC_0121.jpg",
      "/images/independance/DSC_9765.jpg",
      "/images/independance/DSC_9831.jpg",
      "/images/independance/DSC_9331.jpg",
    ],
  },
  {
    id: "journee-femme-2025",
    label: "Journée de la Femme 2025 — Moments ZOH!",
    description: "Le 8 mars 2025, ZOH-HENAN Immobilier célèbre la Journée Internationale des Droits de la Femme avec toutes ses collaboratrices dans une ambiance de fête et de reconnaissance.",
    cover: "/images/actualites/journee-femme-2025/IMG_1302.jpg",
    images: [
      "/images/actualites/journee-femme-2025/IMG_1302.jpg",
      "/images/actualites/journee-femme-2025/IMG_1173.jpg",
      "/images/actualites/journee-femme-2025/IMG_1173-3.jpg",
      "/images/actualites/journee-femme-2025/IMG_1184.jpg",
      "/images/actualites/journee-femme-2025/IMG_1224.jpg",
      "/images/actualites/journee-femme-2025/IMG_1239.jpg",
      "/images/actualites/journee-femme-2025/IMG_1254.jpg",
      "/images/actualites/journee-femme-2025/IMG_1263.jpg",
      "/images/actualites/journee-femme-2025/IMG_1272.jpg",
      "/images/actualites/journee-femme-2025/IMG_1275.jpg",
      "/images/actualites/journee-femme-2025/IMG_1278.jpg",
      "/images/actualites/journee-femme-2025/IMG_1281.jpg",
      "/images/actualites/journee-femme-2025/IMG_1289.jpg",
      "/images/actualites/journee-femme-2025/IMG_1305.jpg",
      "/images/actualites/journee-femme-2025/IMG_1160.jpg",
    ],
  },
  {
    id: "salon-immobilier-2025",
    label: "Salon de l'Immobilier 2025 — 8ème Édition",
    description: "Les 1er et 2 février 2025, ZOH-HENAN au Salon de l'Immobilier d'Abidjan. Deux journées intenses, des centaines de visiteurs et des actes de réservation signés sur place.",
    cover: "/images/actualites/salon-immobilier-2025/IMG_5056.webp",
    images: [
      "/images/actualites/salon-immobilier-2025/IMG_5056.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5587.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5577.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5575.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5542.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5530.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5524.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5517.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5500.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5375.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5362.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5347.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5166.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5150.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5140.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5108.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5080.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5075.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5071.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5778.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5747.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5701.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5696.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5685.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5675.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5653.webp",
      "/images/actualites/salon-immobilier-2025/IMG_5643.webp",
    ],
  },
  {
    id: "concert-nestor-david-2024",
    label: "Concert Frère Nestor David — Décembre 2024",
    description: "Le 29 décembre 2024, ZOH-HENAN Immobilier était présent au concert d'adoration exceptionnel de Frère Nestor David, partageant un moment de grâce avec la communauté ivoirienne.",
    cover: "/images/actualites/concert-nestor-david-2024/475267418_122154056876352907_8299280081389996389_n.jpg",
    images: [
      "/images/actualites/concert-nestor-david-2024/475183841_122154056756352907_7299609166237097733_n.jpg",
      "/images/actualites/concert-nestor-david-2024/475267418_122154056876352907_8299280081389996389_n.jpg",
      "/images/actualites/concert-nestor-david-2024/475594688_122154056816352907_8460544103201414485_n.jpg",
      "/images/actualites/concert-nestor-david-2024/475360190_122154056420352907_8772355621899218781_n.jpg",
    ],
  },
  {
    id: "chantier-batiments",
    label: "Chantier — Travaux de Bâtiments",
    description: "Le quotidien du chantier : fondations, élévations, finitions. Les équipes de ZOH-HENAN à l'œuvre sur la Cité Prestige de Bingerville.",
    cover: "/images/zoh-henan-construction/batiments/4T5B0591.JPG",
    images: [
      "/images/zoh-henan-construction/batiments/4T5B0408.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0414.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0416.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0419.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0424.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0524.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0537.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0539.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0542.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0580.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0586.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0587.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0589.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0591.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0595.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0599.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0605.JPG",
      "/images/zoh-henan-construction/batiments/4T5B0627.JPG",
    ],
  },
  {
    id: "chantier-vrd",
    label: "Chantier — Travaux Publics & VRD",
    description: "Routes, assainissement, adduction d'eau, réseaux électriques. Les infrastructures qui donnent vie à la Cité Prestige.",
    cover: "/images/zoh-henan-construction/vrd/4T5B0452.JPG",
    images: [
      "/images/zoh-henan-construction/vrd/4T5B0444.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0449.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0452.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0453.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0458.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0478.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0479.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0484.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0496.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0512.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0513.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0517.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0565.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0575.JPG",
      "/images/zoh-henan-construction/vrd/4T5B0607.JPG",
    ],
  },
  {
    id: "pose-premiere-pierre",
    label: "Pose de la Première Pierre",
    description: "La cérémonie historique marquant le lancement officiel de la Cité Prestige ZOH-HENAN à Bingerville.",
    cover: "/images/pose-premiere-pierre/644708085_122210347778352907_3718145542609171158_n.jpg",
    images: [
      "/images/pose-premiere-pierre/644708085_122210347778352907_3718145542609171158_n.jpg",
      "/images/pose-premiere-pierre/644725423_122210347862352907_3947988256167180902_n.jpg",
      "/images/pose-premiere-pierre/644764173_122210348138352907_4319039734650402534_n.jpg",
      "/images/pose-premiere-pierre/644799357_122210207798352907_2630052246930544939_n.jpg",
      "/images/pose-premiere-pierre/644864771_122210348222352907_6310250879411127255_n.jpg",
      "/images/pose-premiere-pierre/644934356_122210347874352907_1345325989948735977_n.jpg",
      "/images/pose-premiere-pierre/645430164_122210348114352907_2826843988799340114_n.jpg",
      "/images/pose-premiere-pierre/645468694_122210347838352907_8209842761060859698_n.jpg",
      "/images/pose-premiere-pierre/645489717_122210347850352907_3298105776634547751_n.jpg",
      "/images/pose-premiere-pierre/645565397_122210348048352907_3053450330366026567_n.jpg",
      "/images/pose-premiere-pierre/645594988_122210208074352907_506460804554032940_n.jpg",
      "/images/pose-premiere-pierre/645616125_122210348246352907_5032557506489678785_n.jpg",
      "/images/pose-premiere-pierre/645689670_122210347928352907_4384305893315957321_n.jpg",
      "/images/pose-premiere-pierre/645730119_122210347766352907_5035184963629765483_n.jpg",
      "/images/pose-premiere-pierre/645931858_122210347940352907_9212184106136525676_n.jpg",
      "/images/pose-premiere-pierre/646045295_122210347826352907_897202891254817266_n.jpg",
      "/images/pose-premiere-pierre/646358189_122210348390352907_1228054326172129824_n.jpg",
      "/images/pose-premiere-pierre/646752239_122210348324352907_5115353209566895087_n.jpg",
      "/images/pose-premiere-pierre/647207178_122210347892352907_3988900477554870430_n.jpg",
      "/images/pose-premiere-pierre/647565124_122210348102352907_7643865022342908290_n.jpg",
      "/images/pose-premiere-pierre/635100936_122208863330352907_2613579720267116466_n.jpg",
    ],
  },
  {
    id: "cite-prestige",
    label: "Cité Prestige — Vue d'ensemble",
    description: "Le site, l'entrée principale, les plans de masse et les perspectives générales de la Cité Prestige de Bingerville.",
    cover: "/images/accueil/hero-slider/GUERITE ENTREE PRINCIPALE.jpg",
    images: [
      "/images/accueil/hero-slider/GUERITE ENTREE PRINCIPALE.jpg",
      "/images/accueil/cite-prestige/GUERITE ENTREE PRINCIPALE.jpg",
      "/images/accueil/hero-slider/Perspective masse 01.jpg",
      "/images/accueil/cite-prestige/PLAN DE MASSE 01.jpg",
      "/images/accueil/cite-prestige/PLAN DE MASSE 01.webp",
      "/images/accueil/cite-prestige/PLAN DE MASSE 02.webp",
      "/images/accueil/hero-slider/VILLAS Prestige 6P vue perspective.jpg",
    ],
  },
  {
    id: "villa-6p",
    label: "Villa Prestige 6 Pièces — PRESTIGE",
    description: "La villa au sommet de la gamme sur deux niveaux. Salon double hauteur, suite parentale, terrasse panoramique et garage double.",
    cover: "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLAS Prestige 6P vue perspective.webp",
    images: [
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLAS Prestige 6P vue perspective.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE01.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE02.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE03.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE03_.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE04.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE05.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE06.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE07.webp",
    ],
  },
  {
    id: "villa-4p",
    label: "Villa Duplex 4 Pièces — TOPAZE",
    description: "La Villa Topaze, idéale pour les couples et jeunes familles. Fonctionnelle sur deux niveaux avec de belles finitions.",
    cover: "/images/nos-proprietes/cite-prestige/VILLAS Diamant 5P et Topaze 4P vue perspective.webp",
    images: [
      "/images/nos-proprietes/cite-prestige/VILLAS Diamant 5P et Topaze 4P vue perspective.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE01.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE02.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE04.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE04_.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE07.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE08.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE09.webp",
    ],
  },
  {
    id: "villa-5p-basse",
    label: "Villa Basse 5 Pièces — ÉMERAUDE",
    description: "La Villa Émeraude en plain-pied. Grand séjour ouvert sur jardin, 4 chambres, terrasses avant et arrière.",
    cover: "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P EMERAUDE.webp",
    images: [
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P EMERAUDE.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE01.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE02.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE03.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE04.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE05.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE06.webp",
    ],
  },
  {
    id: "villa-3p",
    label: "Villa Basse 3 Pièces — SAPHIR",
    description: "La Villa Saphir, porte d'entrée vers la propriété à la Cité Prestige. Compacte, bien pensée et lumineuse.",
    cover: "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE01.webp",
    images: [
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE01.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE02.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE03.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE04.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE05.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE06.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE07.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE08.webp",
    ],
  },
];

// ── Lightbox ──────────────────────────────────────────────────────────────────

function Lightbox({
  images, startIndex, titre, onClose,
}: {
  images: string[]; startIndex: number; titre: string; onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);
  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black/97 flex flex-col" onClick={onClose}>
      {/* Barre supérieure */}
      <div className="flex items-center justify-between px-6 py-4 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-white/40 text-[10px] uppercase tracking-[3px]">{titre}</p>
          <p className="text-white/60 text-xs">{idx + 1} / {images.length}</p>
        </div>
        <button onClick={onClose} className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
          <X size={16} className="text-white" />
        </button>
      </div>

      {/* Image centrale */}
      <div className="flex-1 flex items-center justify-center relative px-16" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-full max-w-5xl">
          <Image
            src={images[idx]}
            alt={`${titre} - ${idx + 1}`}
            fill
            className="object-contain"
            quality={92}
            sizes="(max-width: 1400px) 100vw, 1200px"
            priority
          />
        </div>
        <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
          <ChevronLeft size={22} className="text-white" />
        </button>
        <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors">
          <ChevronRight size={22} className="text-white" />
        </button>
      </div>

      {/* Pellicule miniatures */}
      <div className="flex-shrink-0 px-6 py-4 overflow-x-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-2 w-max mx-auto">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all duration-200 ${i === idx ? "border-[#1e5d2e] opacity-100" : "border-transparent opacity-40 hover:opacity-70"}`}
            >
              <Image src={img} alt="" fill className="object-cover" quality={40} sizes="64px" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Visionneuse de collection ─────────────────────────────────────────────────

function CollectionViewer({
  collection, onClose,
}: {
  collection: typeof collections[0]; onClose: () => void;
}) {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  return (
    <div className="fixed inset-0 z-40 bg-[#050d08] overflow-y-auto" onClick={onClose}>
      {lightboxIdx !== null && (
        <Lightbox
          images={collection.images}
          startIndex={lightboxIdx}
          titre={collection.label}
          onClose={() => setLightboxIdx(null)}
        />
      )}

      {/* Header collection */}
      <div className="sticky top-0 z-30 bg-[#050d08]/95 backdrop-blur-md border-b border-white/5 px-6 py-4 flex items-center gap-4" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors flex-shrink-0">
          <ChevronLeft size={16} className="text-white" />
        </button>
        <div>
          <p className="text-[#1e5d2e] text-[10px] uppercase tracking-[3px] font-semibold">Collection</p>
          <h2 className="text-white font-bold text-sm">{collection.label}</h2>
        </div>
        <span className="ml-auto text-white/30 text-xs">{collection.images.length} photos</span>
      </div>

      {/* Grille de photos de la collection */}
      <div className="px-4 sm:px-8 py-8" onClick={(e) => e.stopPropagation()}>
        <p className="text-white/50 text-sm mb-8 max-w-2xl px-2">{collection.description}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {collection.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setLightboxIdx(i)}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={img}
                alt={`${collection.label} - ${i + 1}`}
                fill quality={70}
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white text-xs font-bold bg-black/40 px-3 py-1.5 rounded-full transition-opacity">
                  Agrandir
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Page principale ───────────────────────────────────────────────────────────

export default function GaleriePage() {
  const [openCollection, setOpenCollection] = useState<typeof collections[0] | null>(null);

  return (
    <>
      <Header />
      <FloatingButtons />
      {openCollection && (
        <CollectionViewer collection={openCollection} onClose={() => setOpenCollection(null)} />
      )}

      <main className="min-h-screen bg-[#050d08]">

        {/* ── HERO PLEIN ÉCRAN ──────────────────────────────────────── */}
        <section className="relative overflow-hidden" style={{ height: "100vh" }}>
          <Image
            src="/images/galerie/HEROS.JPG"
            alt="Galerie ZOH-HENAN"
            fill priority quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/95" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: "repeating-linear-gradient(0deg,white 0,white 1px,transparent 0,transparent 100px),repeating-linear-gradient(90deg,white 0,white 1px,transparent 0,transparent 100px)" }} />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pt-[70px]">
            <p className="text-[#1e5d2e] text-xs font-semibold tracking-[6px] uppercase mb-6">ZOH-HENAN Immobilier</p>
            <h1
              className="text-white font-black leading-none mb-6 max-w-4xl"
              style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(50px,9vw,110px)", textShadow: "0 4px 60px rgba(0,0,0,0.6)" }}
            >
              Notre Galerie
            </h1>
            <div className="w-16 h-[3px] bg-[#1e5d2e] rounded mx-auto mb-8" />
            <p className="text-white/60 text-base sm:text-lg max-w-lg leading-relaxed">
              Chaque image raconte une vision, une ambition, un foyer.
            </p>
          </div>

          {/* Compteurs en bas */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-8">
            {[
              { val: collections.reduce((s, c) => s + c.images.length, 0), label: "Photos" },
              { val: collections.length, label: "Collections" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-white font-black text-3xl" style={{ fontFamily: "var(--font-playfair)" }}>{s.val}+</div>
                <div className="text-white/40 text-[10px] uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
            <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center pt-1">
              <div className="w-0.5 h-1.5 bg-white/50 rounded-full" />
            </div>
          </div>
        </section>

        {/* ── COLLECTIONS ───────────────────────────────────────────── */}
        <section className="py-20 px-6 sm:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">

            <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[#1e5d2e] text-xs font-semibold tracking-[4px] uppercase mb-3">Explorer par thème</p>
                <h2 className="text-white font-black" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(26px,4vw,44px)" }}>
                  Nos Collections
                </h2>
                <div className="w-10 h-[3px] bg-[#1e5d2e] rounded mt-4" />
              </div>
              <p className="text-white/30 text-sm">{collections.length} collections · {collections.reduce((s, c) => s + c.images.length, 0)} photos</p>
            </div>

            {/* Grille de collections */}
            <div className="space-y-6">

              {/* Grande carte (1ère collection) */}
              {collections[0] && (
                <button
                  onClick={() => setOpenCollection(collections[0])}
                  className="group w-full relative rounded-2xl overflow-hidden cursor-pointer text-left"
                  style={{ height: "480px" }}
                >
                  <Image
                    src={collections[0].cover}
                    alt={collections[0].label}
                    fill quality={85}
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    sizes="100vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

                  {/* Aperçu photos en bas à droite */}
                  <div className="absolute bottom-6 right-6 flex gap-2">
                    {collections[0].images.slice(1, 4).map((img, i) => (
                      <div key={i} className="relative w-16 h-16 rounded-lg overflow-hidden border border-white/20 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                        <Image src={img} alt="" fill className="object-cover" quality={40} sizes="64px" />
                      </div>
                    ))}
                    <div className="w-16 h-16 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">+{collections[0].images.length - 4}</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-[2px] bg-[#1e5d2e]" />
                      <span className="text-[#1e5d2e] text-[10px] font-bold uppercase tracking-[3px]">{collections[0].images.length} photos</span>
                    </div>
                    <h3 className="text-white font-black mb-2" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(22px,3vw,36px)" }}>
                      {collections[0].label}
                    </h3>
                    <p className="text-white/60 text-sm max-w-lg leading-relaxed mb-4">{collections[0].description}</p>
                    <span className="inline-flex items-center gap-2 text-white text-sm font-bold border border-white/30 px-5 py-2.5 rounded-lg group-hover:bg-[#1e5d2e] group-hover:border-[#1e5d2e] transition-all duration-300">
                      <Images size={15} />
                      Voir la collection
                    </span>
                  </div>
                </button>
              )}

              {/* Grille 2 colonnes pour les suivantes */}
              {collections.length > 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {collections.slice(1).map((col) => (
                    <button
                      key={col.id}
                      onClick={() => setOpenCollection(col)}
                      className="group relative rounded-2xl overflow-hidden cursor-pointer text-left"
                      style={{ height: "340px" }}
                    >
                      <Image
                        src={col.cover}
                        alt={col.label}
                        fill quality={80}
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-5 h-[2px] bg-[#1e5d2e]" />
                          <span className="text-[#1e5d2e] text-[10px] font-bold uppercase tracking-[3px]">{col.images.length} photos</span>
                        </div>
                        <h3 className="text-white font-black mb-1" style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(18px,2.5vw,26px)" }}>
                          {col.label}
                        </h3>
                        <p className="text-white/50 text-xs leading-relaxed line-clamp-2 mb-4">{col.description}</p>
                        <span className="inline-flex items-center gap-2 text-white/70 text-xs font-bold group-hover:text-[#1e5d2e] transition-colors duration-300">
                          <Images size={13} />
                          Voir la collection →
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
