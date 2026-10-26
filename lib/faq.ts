// Questions fréquentes partagées entre la page d'accueil et le panneau FAQ flottant.

export type FaqEntry = {
  question: string;
  reponse: string;
};

export const faq: FaqEntry[] = [
  {
    question: "Qui est Zoh-Henan Immobilier ?",
    reponse:
      "Zoh-Henan Immobilier est un promoteur immobilier basé à Abidjan, en Côte d'Ivoire, fondé en 2017. Nous concevons et construisons des programmes immobiliers résidentiels, dont la Cité Prestige à Bingerville, lauréate du Prix du Meilleur Projet Immobilier au SICI 2026.",
  },
  {
    question: "Où se trouve la promotion immobilière de Zoh-Henan Immobilier à Bingerville ?",
    reponse:
      "Notre programme phare, la Cité Prestige, est une promotion immobilière de 619 villas sur 31 hectares, située à Bingerville, à environ 20 minutes du Plateau d'Abidjan.",
  },
  {
    question: "Quels types de villas propose ce promoteur immobilier à Bingerville ?",
    reponse:
      "La Cité Prestige propose 6 gammes de villas de 3 à 6 pièces, en plain-pied ou en duplex (SAPHIR, ÉMERAUDE, TOPAZE, DIAMANT, PRESTIGE), toutes livrées avec un titre de propriété CMPF inclus.",
  },
  {
    question: "Comment financer l'achat d'une villa avec Zoh-Henan Immobilier ?",
    reponse:
      "Plusieurs options sont disponibles : crédit immobilier via nos partenaires bancaires (BHCI, Société Générale CI), financement CNPS pour les affiliés, ou achat comptant. Nos conseillers accompagnent gratuitement chaque dossier.",
  },
  {
    question: "Zoh-Henan Immobilier est-il un promoteur immobilier agréé en Côte d'Ivoire ?",
    reponse:
      "Oui. Zoh-Henan Immobilier est agréé par le Ministère de l'Urbanisme et des Cadres de Vie, dispose d'un Arrêté de Concession Définitive (ACD) et livre chaque villa avec son titre de propriété CMPF.",
  },
];
