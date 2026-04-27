import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Nos Propriétés – Villas à Bingerville & Songon | Zoh Henan Guoji",
    description:
      "Découvrez nos programmes immobiliers en Côte d'Ivoire : Cité Prestige Bingerville (619 villas) et le futur Projet Songon. Villas 3 à 6 pièces, accessibles et de qualité supérieure.",
    keywords: [
      "villas Bingerville",
      "propriétés Abidjan",
      "villa 3 pièces Abidjan",
      "villa 5 pièces Côte d'Ivoire",
      "villa 6 pièces Abidjan",
      "programme immobilier Bingerville",
      "villa duplex Abidjan",
      "achat villa Côte d'Ivoire",
      "Zoh Henan propriétés",
      "Cité Prestige villa prix",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/proprietes`,
      languages: {
        fr: `${BASE_URL}/fr/proprietes`,
        en: `${BASE_URL}/en/proprietes`,
        "x-default": `${BASE_URL}/fr/proprietes`,
      },
    },
    openGraph: {
      title: "Nos Propriétés – Villas à Bingerville | Zoh Henan Guoji",
      description:
        "Villas de prestige à Bingerville, Abidjan. Cité Prestige : 619 villas 3 à 6 pièces dans un cadre sécurisé. Agréées Ministère de l'Urbanisme.",
      url: `${BASE_URL}/${locale}/proprietes`,
      images: [
        {
          url: `${BASE_URL}/images/accueil/cite-prestige/PLAN DE MASSE 01.webp`,
          width: 1200,
          height: 630,
          alt: "Plan de masse Cité Prestige Bingerville – Zoh Henan Guoji",
        },
      ],
    },
  };
}

export default function ProprietesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
