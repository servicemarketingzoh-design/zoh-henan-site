import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Cité Prestige Bingerville – Villas 3 à 6 Pièces | Zoh Henan Guoji",
    description:
      "31 hectares, 619 villas à Bingerville, Abidjan. Villas Saphir 3P, Topaze 4P, Émeraude 5P et Prestige 6P. Agréées Ministère de l'Urbanisme. Prix accessibles avec financement CNPS.",
    keywords: [
      "Cité Prestige Bingerville",
      "villa 3 pièces Bingerville",
      "villa 4 pièces Abidjan",
      "villa 5 pièces Bingerville",
      "villa 6 pièces Abidjan",
      "villa Saphir Zoh Henan",
      "villa Topaze Zoh Henan",
      "villa Émeraude Zoh Henan",
      "villa Prestige Abidjan",
      "villa duplex Bingerville",
      "logement Bingerville",
      "financement CNPS immobilier Côte d'Ivoire",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/proprietes/cite-prestige`,
      languages: {
        fr: `${BASE_URL}/fr/proprietes/cite-prestige`,
        en: `${BASE_URL}/en/proprietes/cite-prestige`,
        "x-default": `${BASE_URL}/fr/proprietes/cite-prestige`,
      },
    },
    openGraph: {
      title: "Cité Prestige Bingerville – 619 Villas | Zoh Henan Guoji",
      description:
        "Découvrez la Cité Prestige : 31 hectares, 619 villas sécurisées à Bingerville, Abidjan. Villas de 3 à 6 pièces avec financement possible via CNPS.",
      url: `${BASE_URL}/${locale}/proprietes/cite-prestige`,
      images: [
        {
          url: `${BASE_URL}/images/accueil/cite-prestige/PLAN DE MASSE 01.webp`,
          width: 1200,
          height: 630,
          alt: "Plan de masse Cité Prestige Bingerville",
        },
      ],
    },
  };
}

export default function CitePrestigeLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
