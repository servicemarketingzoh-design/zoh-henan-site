export type Piece = {
  section?: string; // "Rez de chaussée" | "Étage"
  nom: string;
  superficie: string;
};

export type Villa = {
  slug: string;
  type: string;
  titre: string;
  gamme: string;          // nom de la gamme : Saphir, Émeraude, etc.
  standing: "Moyen" | "Bon" | "Haut";
  prix: number;
  superficie: number;     // m² terrain
  superficieBatie: number;
  chambres: number;
  sallesDeBain: number;
  garage: boolean;
  niveaux: string;
  disponibles: number;
  description: string;
  equipements: string[];
  pieces: Piece[];        // dimensions pièce par pièce
  photos: string[];
  badge?: string;
  dossierImages: string; // chemin du dossier GitHub pour les photos
};

export const villas: Villa[] = [
  {
    slug: "villa-6p",
    type: "6P",
    titre: "Villa PRESTIGE",
    gamme: "PRESTIGE",
    standing: "Haut",
    prix: 130000000,
    superficie: 350,
    superficieBatie: 280,
    chambres: 5,
    sallesDeBain: 6,
    garage: true,
    niveaux: "R+1 (Duplex)",
    disponibles: 48,
    badge: "Prestige",
    description:
      "Sommet de l'élégance à la Cité Prestige, la Villa Prestige 6 Pièces offre de vastes espaces de vie sur deux niveaux. Conçue pour une famille exigeante, elle dispose d'un salon double hauteur, d'une salle à manger avec baie vitrée, de chambres spacieuses dont une suite parentale avec dressing, et d'une terrasse panoramique privative.",
    equipements: [
      "Suite parentale avec salle d'eau",
      "Salon + salle à manger : 44.92 m²",
      "Cuisine + rangement : 17.14 m²",
      "Terrasses avant et arrière",
      "Chambre + balcon à l'étage : 32.83 m²",
      "Garage double couvert",
      "Jardin privé clôturé",
      "Titre de propriété (CMPF) inclus",
    ],
    pieces: [
      { section: "Rez de chaussée", nom: "Salon + salle à manger", superficie: "44.92 m²" },
      { section: "Rez de chaussée", nom: "Cuisine + rangement", superficie: "17.14 m²" },
      { section: "Rez de chaussée", nom: "Terrasse avant", superficie: "6.80 m²" },
      { section: "Rez de chaussée", nom: "Terrasse arrière", superficie: "5.47 m²" },
      { section: "Étage", nom: "Chambre + balcon", superficie: "32.83 m²" },
      { section: "Étage", nom: "Salle d'eau chambre principale", superficie: "6.20 m²" },
    ],
    dossierImages: "public/images/nos-proprietes/cite-prestige/DUPLEX 6P/",
    photos: [
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE01.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLAS Prestige 6P vue perspective.webp",
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
    slug: "villa-5p-basse",
    type: "5P Basse",
    titre: "Villa ÉMERAUDE",
    gamme: "ÉMERAUDE",
    standing: "moyen",
    prix: 59000000,
    superficie: 300,
    superficieBatie: 130,
    chambres: 4,
    sallesDeBain: 5,
    garage: true,
    niveaux: "Plain-pied",
    disponibles: 65,
    description:
      "La Villa Émeraude offre tout le confort d'une villa 5 pièces en plain-pied. Sa distribution lumineuse avec grand séjour ouvrant sur le jardin, 4 chambres, cuisine équipée et terrasses avant et arrière en fait un choix idéal pour les familles.",
    equipements: [
      "Salon + salle à manger : 35.91 m²",
      "Cuisine + rangement : 13.72 m²",
      "Chambre principale : 17.85 m²",
      "Salle d'eau chambre principale : 4 m²",
      "Terrasses avant et arrière",
      "Garage couvert",
      "Titre de propriété (CMPF) inclus",
    ],
    pieces: [
      { nom: "Salon + salle à manger", superficie: "35.91 m²" },
      { nom: "Cuisine + rangement", superficie: "13.72 m²" },
      { nom: "Terrasse avant", superficie: "7.53 m²" },
      { nom: "Terrasse arrière", superficie: "5.76 m²" },
      { nom: "Chambre principale", superficie: "17.85 m²" },
      { nom: "Salle d'eau chambre principale", superficie: "4.00 m²" },
    ],
    dossierImages: "public/images/nos-proprietes/cite-prestige/BASSE 5P/",
    photos: [
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE01.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P EMERAUDE.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE02.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE03.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE04.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE05.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE06.webp",
    ],
  },
  {
    slug: "villa-5p-duplex",
    type: "5P Duplex",
    titre: "Villa DIAMANT",
    gamme: "DIAMANT",
    standing: "haut",
    prix: 89810000,
    superficie: 300,
    superficieBatie: 200,
    chambres: 4,
    sallesDeBain: 5,
    garage: true,
    niveaux: "R+1 (Duplex)",
    disponibles: 55,
    description:
      "La Villa Diamant propose une architecture duplex élégante sur 350 m² de terrain. Le rez-de-chaussée accueille les espaces de vie, tandis que l'étage offre des chambres privatives avec balcon. Un cadre de vie premium pour toute la famille.",
    equipements: [
      "Salon + salle à manger : 26.45 m²",
      "Cuisine + rangement : 13.32 m²",
      "Terrasses avant et arrière",
      "Chambre + balcon à l'étage : 24.49 m²",
      "Salle d'eau chambre principale : 5.28 m²",
      "Garage couvert",
      "Titre de propriété (CMPF) inclus",
    ],
    pieces: [
      { section: "Rez de chaussée", nom: "Salon + salle à manger", superficie: "26.45 m²" },
      { section: "Rez de chaussée", nom: "Cuisine + rangement", superficie: "13.32 m²" },
      { section: "Rez de chaussée", nom: "Terrasse avant", superficie: "7.02 m²" },
      { section: "Rez de chaussée", nom: "Terrasse arrière", superficie: "5.00 m²" },
      { section: "Étage", nom: "Chambre + balcon", superficie: "24.49 m²" },
      { section: "Étage", nom: "Salle d'eau chambre principale", superficie: "5.28 m²" },
    ],
    dossierImages: "public/images/nos-proprietes/cite-prestige/DUPLEX 5P/",
    photos: [
      "/images/nos-proprietes/cite-prestige/VILLAS Diamant 5P et Topaze 4P vue perspective.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE01.webp",
      "/images/accueil/hero-slider/GUERITE ENTREE PRINCIPALE.jpg",
    ],
  },
  {
    slug: "villa-4p-duplex",
    type: "4P Duplex",
    titre: "Villa TOPAZE",
    gamme: "TOPAZE",
    standing: "haut",
    prix: 69030000,
    superficie: 250,
    superficieBatie: 180,
    chambres: 3,
    sallesDeBain: 4,
    garage: true,
    niveaux: "R+1 (Duplex)",
    disponibles: 110,
    description:
      "La Villa Topaze est la solution idéale pour les couples et jeunes familles souhaitant accéder à la propriété dans un cadre sécurisé. Sur 250 m² de terrain, elle offre des espaces fonctionnels sur deux niveaux avec une belle qualité de finitions.",
    equipements: [
      "Salon + salle à manger : 37.48 m²",
      "Cuisine + rangement : 15.90 m²",
      "Terrasses avant et arrière",
      "Chambre + balcon à l'étage : 22.57 m²",
      "Salle d'eau chambre principale : 5.28 m²",
      "Garage individuel",
      "Titre de propriété (CMPF) inclus",
    ],
    pieces: [
      { section: "Rez de chaussée", nom: "Salon + salle à manger", superficie: "37.48 m²" },
      { section: "Rez de chaussée", nom: "Cuisine + rangement", superficie: "15.90 m²" },
      { section: "Rez de chaussée", nom: "Terrasse avant", superficie: "6.90 m²" },
      { section: "Rez de chaussée", nom: "Terrasse arrière", superficie: "6.19 m²" },
      { section: "Étage", nom: "Chambre + balcon", superficie: "22.57 m²" },
      { section: "Étage", nom: "Salle d'eau chambre principale", superficie: "5.28 m²" },
    ],
    dossierImages: "public/images/nos-proprietes/cite-prestige/DUPLEX 4P/",
    photos: [
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE01.webp",
      "/images/nos-proprietes/cite-prestige/VILLAS Diamant 5P et Topaze 4P vue perspective.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE02.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE04.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE04_.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE07.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE08.webp",
      "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE09.webp",
    ],
  },
  {
    slug: "villa-3p",
    type: "3P",
    titre: "Villa SAPHIR",
    gamme: "SAPHIR",
    standing: "Moyen",
    prix: 39530000,
    superficie: 200,
    superficieBatie: 100,
    chambres: 2,
    sallesDeBain: 3,
    garage: false,
    niveaux: "Plain-pied",
    disponibles: 140,
    badge: "Entrée de gamme",
    description:
      "La Villa Saphir est la porte d'entrée vers la propriété à la Cité Prestige. Compacte et bien pensée sur 200 m², elle convient parfaitement aux jeunes actifs et aux couples. Tout le confort nécessaire : séjour agréable, 2 chambres, cuisine équipée et terrasses privatives.",
    equipements: [
      "Salon + salle à manger : 30.20 m²",
      "Cuisine + rangement : 11.52 m²",
      "Chambre principale : 18.85 m²",
      "Salle d'eau chambre principale : 4.25 m²",
      "Terrasses avant et arrière",
      "Cour extérieure privative",
      "Titre de propriété (CMPF) inclus",
    ],
    pieces: [
      { nom: "Salon + salle à manger", superficie: "30.20 m²" },
      { nom: "Cuisine + rangement", superficie: "11.52 m²" },
      { nom: "Terrasse avant", superficie: "5.79 m²" },
      { nom: "Terrasse arrière", superficie: "5.48 m²" },
      { nom: "Chambre principale", superficie: "18.85 m²" },
      { nom: "Salle d'eau chambre principale", superficie: "4.25 m²" },
    ],
    dossierImages: "public/images/nos-proprietes/cite-prestige/BASSE 3P/",
    photos: [
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE02.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE01.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE03.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE04.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE05.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE06.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE07.webp",
      "/images/nos-proprietes/cite-prestige/BASSE 3P/VILLA-BASSE-3P-VUE08.webp",
    ],
  },
];

export function formatPrix(prix: number): string {
  return new Intl.NumberFormat("fr-FR").format(prix) + " FCFA";
}
