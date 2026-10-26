// Articles du blog. Pour l'instant ce sont des exemples de démonstration
// servant à valider le design ; ils pourront être remplacés par de vrais
// articles (ou branchés sur Supabase comme les actualités).

export type BlogSection = {
  heading: string;
  paragraphs: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: number;
  author: string;
  image: string;
  featured?: boolean;
  sections: BlogSection[];
};

export const blogCategories = ["Guide d'achat", "Financement", "Juridique", "Conseils", "Vivre à Bingerville", "Investissement"];

export const blogPosts: BlogPost[] = [
  {
    slug: "acheter-une-villa-a-bingerville-guide-complet",
    title: "Acheter une villa à Bingerville : le guide complet",
    excerpt:
      "Choix de la villa, réservation, financement, remise des clés : toutes les étapes pour devenir propriétaire en toute sérénité à la Cité Prestige.",
    category: "Guide d'achat",
    date: "20 octobre 2026",
    readingTime: 7,
    author: "Équipe Zoh-Henan",
    image: "/images/nos-proprietes/cite-prestige/DUPLEX 6P/VILLA DUPLEX 6P VUE01.webp",
    featured: true,
    sections: [
      {
        heading: "1. Définir votre projet",
        paragraphs: [
          "Avant de choisir une villa, posez les bases : taille de votre famille, budget global, mode de financement et horizon d'emménagement. Une villa 3 pièces plain-pied ne répond pas aux mêmes besoins qu'un duplex 6 pièces.",
          "Nos conseillers vous aident gratuitement à clarifier ces critères lors d'un premier échange, en agence ou sur WhatsApp.",
        ],
      },
      {
        heading: "2. Réserver et sécuriser votre villa",
        paragraphs: [
          "Une fois la villa choisie, la réservation se fait par la signature d'un acte et le versement d'un acompte. Vous recevez les documents attestant de la régularité du programme : ACD, agrément promoteur et agrément du programme immobilier.",
        ],
      },
      {
        heading: "3. Financer et signer",
        paragraphs: [
          "Crédit bancaire, partenariat CNPS ou fonds propres : le dossier de financement est monté avec l'aide de nos équipes. La signature du contrat de vente officialise ensuite votre acquisition.",
          "À la livraison, vous recevez les clés et votre Certificat de Mutation de Propriété Foncière (CMPF), qui fait de vous le plein propriétaire de votre bien.",
        ],
      },
    ],
  },
  {
    slug: "acd-cmpf-agrement-documents-qui-protegent-votre-achat",
    title: "ACD, CMPF, agrément : les documents qui protègent votre achat",
    excerpt:
      "Comprendre les documents officiels à exiger d'un promoteur immobilier en Côte d'Ivoire pour acheter sans risque.",
    category: "Juridique",
    date: "12 octobre 2026",
    readingTime: 5,
    author: "Service juridique",
    image: "/images/accueil/hero-slider/GUERITE ENTREE PRINCIPALE.jpg",
    sections: [
      {
        heading: "L'Arrêté de Concession Définitive (ACD)",
        paragraphs: [
          "L'ACD est le titre foncier définitif délivré par l'État. Il prouve que le terrain sur lequel est bâti le programme appartient légalement au promoteur et qu'il peut être découpé et vendu.",
        ],
      },
      {
        heading: "L'agrément promoteur et l'agrément du programme",
        paragraphs: [
          "Délivrés par le Ministère de l'Urbanisme et des Cadres de Vie, ils attestent que le promoteur est autorisé à exercer et que le programme respecte les règles d'urbanisme. L'agrément du programme fait office de permis de construire.",
        ],
      },
      {
        heading: "Le CMPF",
        paragraphs: [
          "Le Certificat de Mutation de Propriété Foncière transfère officiellement la propriété du lot à l'acquéreur. Chez Zoh-Henan, il est inclus avec chaque villa.",
        ],
      },
    ],
  },
  {
    slug: "financer-sa-villa-en-cote-d-ivoire",
    title: "Crédit immobilier en Côte d'Ivoire : comment financer votre villa",
    excerpt:
      "Banques partenaires, financement CNPS, apport personnel : tour d'horizon des solutions pour concrétiser votre projet.",
    category: "Financement",
    date: "3 octobre 2026",
    readingTime: 6,
    author: "Équipe commerciale",
    image: "/images/nos-proprietes/cite-prestige/BASSE 5P/VILLA BASSE 5P VUE01.webp",
    sections: [
      {
        heading: "Le crédit bancaire",
        paragraphs: [
          "Les banques ivoiriennes proposent des crédits habitat sur 10 à 20 ans. Zoh-Henan travaille notamment avec la BHCI et la Société Générale CI pour faciliter l'étude des dossiers.",
        ],
      },
      {
        heading: "Le partenariat CNPS",
        paragraphs: [
          "Les affiliés à la CNPS peuvent bénéficier de conditions de financement avantageuses grâce à l'accord signé avec Zoh-Henan Immobilier.",
        ],
      },
      {
        heading: "Préparer son dossier",
        paragraphs: [
          "Bulletins de salaire, relevés bancaires, pièce d'identité, attestation de travail : rassembler ces pièces en amont accélère nettement l'accord de financement.",
        ],
      },
    ],
  },
  {
    slug: "plain-pied-ou-duplex-quelle-villa-choisir",
    title: "Plain-pied ou duplex : quelle villa choisir pour votre famille ?",
    excerpt:
      "Espace, budget, accessibilité, évolution de la famille : nos conseils pour choisir le bon type de villa.",
    category: "Conseils",
    date: "25 septembre 2026",
    readingTime: 4,
    author: "Équipe Zoh-Henan",
    image: "/images/nos-proprietes/cite-prestige/DUPLEX 4P/VILLA DUPLEX 4P VUE04_.webp",
    sections: [
      {
        heading: "Les atouts du plain-pied",
        paragraphs: [
          "Tout est au même niveau : idéal pour les jeunes enfants, les parents âgés et pour un entretien simplifié. Les villas SAPHIR et ÉMERAUDE en sont de bons exemples.",
        ],
      },
      {
        heading: "Les atouts du duplex",
        paragraphs: [
          "Le duplex sépare les espaces de vie et de nuit et offre plus de pièces sur un terrain équivalent. Il convient aux familles nombreuses et aux investisseurs.",
        ],
      },
    ],
  },
  {
    slug: "bingerville-commune-qui-attire-les-familles",
    title: "Bingerville, la commune qui attire les familles abidjanaises",
    excerpt:
      "Cadre verdoyant, accès rapide au Plateau, nouvelles infrastructures : pourquoi Bingerville séduit de plus en plus.",
    category: "Vivre à Bingerville",
    date: "15 septembre 2026",
    readingTime: 5,
    author: "Équipe Zoh-Henan",
    image: "/images/accueil/hero-slider/Perspective masse 01.jpg",
    sections: [
      {
        heading: "Un cadre de vie apaisé",
        paragraphs: [
          "À l'est d'Abidjan, Bingerville offre un environnement calme et verdoyant, loin de l'agitation des grandes communes, tout en restant à une vingtaine de minutes du Plateau.",
        ],
      },
      {
        heading: "Une commune en plein essor",
        paragraphs: [
          "Routes, écoles, commerces : les nouveaux aménagements renforcent l'attractivité de la commune et la valeur des biens qui y sont construits.",
        ],
      },
    ],
  },
  {
    slug: "investir-depuis-la-diaspora",
    title: "Investir dans l'immobilier ivoirien depuis la diaspora",
    excerpt:
      "Suivi à distance, sécurité juridique, paiements : nos conseils pour investir sereinement depuis l'étranger.",
    category: "Investissement",
    date: "2 septembre 2026",
    readingTime: 6,
    author: "Équipe commerciale",
    image: "/images/zoh-henan-construction/batiments/4T5B0605.JPG",
    sections: [
      {
        heading: "Choisir un promoteur agréé",
        paragraphs: [
          "À distance, la confiance est essentielle. Vérifiez les agréments du promoteur et la présence d'un ACD sur le terrain avant tout versement.",
        ],
      },
      {
        heading: "Suivre l'avancement de son chantier",
        paragraphs: [
          "Photos, vidéos et points réguliers avec un conseiller dédié permettent de suivre la construction de votre villa où que vous soyez.",
        ],
      },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
