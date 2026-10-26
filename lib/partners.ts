// Partenaires de ZOH-HENAN Immobilier.
// Pour afficher un logo : déposer l'image dans /public/images/partenaires/logos/
// puis renseigner le champ `logo` (ex. "/images/partenaires/logos/bhci.png").

export type Partner = {
  slug: string;
  sigle: string;
  nom: string;
  categorie: "Financement" | "Institution";
  role: string;
  description: string;
  points: string[];
  logo?: string;
};

export const partners: Partner[] = [
  {
    slug: "bhci",
    sigle: "BHCI",
    nom: "Banque de l'Habitat de Côte d'Ivoire",
    categorie: "Financement",
    role: "Partenaire bancaire officiel de la Cité Prestige",
    description:
      "La BHCI accompagne les acquéreurs de la Cité Prestige avec des conditions de crédit immobilier préférentielles pour financer leur villa.",
    points: ["Crédit habitat sur 10 à 20 ans", "Conditions préférentielles Cité Prestige", "Dossier accompagné par nos conseillers"],
  },
  {
    slug: "sgci",
    sigle: "SGCI",
    nom: "Société Générale Côte d'Ivoire",
    categorie: "Financement",
    role: "Journées de l'Immobilier en agence",
    description:
      "ZOH-HENAN et la Société Générale Côte d'Ivoire organisent des Journées de l'Immobilier dans les agences SGCI à travers Abidjan, avec des conditions dédiées aux clients de la banque.",
    points: ["Journées de l'Immobilier en agence", "Offres dédiées aux clients SGCI", "Rencontres avec nos conseillers"],
  },
  {
    slug: "cnps",
    sigle: "CNPS",
    nom: "Caisse Nationale de Prévoyance Sociale",
    categorie: "Financement",
    role: "Accord de financement pour les affiliés",
    description:
      "Grâce à l'accord de partenariat signé avec la CNPS, les affiliés bénéficient de conditions de financement avantageuses pour devenir propriétaires à la Cité Prestige.",
    points: ["Taux préférentiels négociés", "Remboursement adapté", "Accompagnement personnalisé"],
  },
  {
    slug: "ministere-urbanisme",
    sigle: "Urbanisme",
    nom: "Ministère de l'Urbanisme et des Cadres de Vie",
    categorie: "Institution",
    role: "Agréments et autorisations du programme",
    description:
      "Le Ministère a délivré à ZOH-HENAN l'agrément promoteur et l'agrément du programme immobilier, garantissant la conformité légale de la Cité Prestige.",
    points: ["Agrément Promoteur Immobilier", "Agrément du Programme Immobilier", "Cadre légal de la pleine propriété (CMPF)"],
  },
];
