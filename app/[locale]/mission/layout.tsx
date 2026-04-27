import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Notre Mission – Promoteur Immobilier de Confiance en Côte d'Ivoire | Zoh Henan",
    description:
      "Fondée en 2017, Zoh-Henan SA révolutionne l'immobilier ivoirien avec transparence et accessibilité. Capital 100% ivoirien, 12 milliards FCFA d'actifs, 120+ villas livrées à Bingerville.",
    keywords: [
      "mission Zoh Henan",
      "promoteur immobilier Côte d'Ivoire",
      "immobilier ivoirien confiance",
      "promoteur agréé Abidjan",
      "Zoh Henan histoire",
      "société immobilière Abidjan 2017",
      "capital ivoirien immobilier",
      "Zoh Henan valeurs",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/mission`,
      languages: {
        fr: `${BASE_URL}/fr/mission`,
        en: `${BASE_URL}/en/mission`,
        "x-default": `${BASE_URL}/fr/mission`,
      },
    },
    openGraph: {
      title: "Notre Mission – Zoh Henan Guoji, Immobilier Ivoirien de Confiance",
      description:
        "Depuis 2017, Zoh-Henan SA construit avec intégrité. 120+ villas livrées, 12 milliards FCFA d'actifs, 100% capital ivoirien. Prix SICI 2026 du Meilleur Projet Immobilier.",
      url: `${BASE_URL}/${locale}/mission`,
      images: [{ url: `${BASE_URL}/images/logo.png`, width: 512, height: 512, alt: "Zoh Henan Guoji" }],
    },
  };
}

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
