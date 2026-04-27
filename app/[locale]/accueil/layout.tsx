import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Zoh Henan Guoji – Promoteur Immobilier de Confiance à Abidjan, Côte d'Ivoire",
    description:
      "Zoh Henan Guoji, votre promoteur immobilier à Abidjan. Découvrez la Cité Prestige de Bingerville : 619 villas modernes de 3 à 6 pièces. 120+ villas déjà livrées depuis 2017.",
    keywords: [
      "promoteur immobilier Abidjan",
      "villa Bingerville",
      "Cité Prestige Bingerville",
      "immobilier Côte d'Ivoire",
      "acheter villa Abidjan",
      "logement Cocody Abidjan",
      "Zoh Henan Guoji",
      "Zoh Henan immobilier",
      "villa neuve Abidjan",
      "programme immobilier Côte d'Ivoire",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/accueil`,
      languages: {
        fr: `${BASE_URL}/fr/accueil`,
        en: `${BASE_URL}/en/accueil`,
        "x-default": `${BASE_URL}/fr/accueil`,
      },
    },
    openGraph: {
      title: "Zoh Henan Guoji – Promoteur Immobilier à Abidjan, Côte d'Ivoire",
      description:
        "619 villas à Bingerville, Abidjan. Découvrez la Cité Prestige de Zoh Henan Guoji, promoteur immobilier de référence en Côte d'Ivoire depuis 2017.",
      url: `${BASE_URL}/${locale}/accueil`,
      images: [
        {
          url: `${BASE_URL}/images/accueil/hero-slider/GUERITE ENTREE PRINCIPALE.jpg`,
          width: 1200,
          height: 630,
          alt: "Cité Prestige Bingerville – Zoh Henan Guoji",
        },
      ],
    },
  };
}

export default function AccueilLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
