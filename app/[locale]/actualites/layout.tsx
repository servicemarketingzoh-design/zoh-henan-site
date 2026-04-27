import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Actualités & Événements – Zoh Henan Guoji | Immobilier Abidjan",
    description:
      "Suivez toute l'actualité de Zoh-Henan Guoji : Prix SICI 2026 du Meilleur Projet Immobilier, livraisons de villas, partenariat CNPS, et événements immobiliers à Abidjan.",
    keywords: [
      "actualités immobilier Abidjan",
      "Zoh Henan actualités",
      "SICI 2026 prix immobilier",
      "événements immobilier Côte d'Ivoire",
      "livraison villa Bingerville",
      "partenariat CNPS immobilier",
      "news immobilier Abidjan",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/actualites`,
      languages: {
        fr: `${BASE_URL}/fr/actualites`,
        en: `${BASE_URL}/en/actualites`,
        "x-default": `${BASE_URL}/fr/actualites`,
      },
    },
    openGraph: {
      title: "Actualités – Zoh Henan Guoji | Prix SICI 2026 & Livraisons",
      description:
        "ZOH-HENAN remporte le Prix du Meilleur Projet Immobilier au SICI 2026. Suivez nos actualités, livraisons et événements à Abidjan.",
      url: `${BASE_URL}/${locale}/actualites`,
      images: [
        {
          url: `${BASE_URL}/images/actualites/sici-2026/0D9A9697.webp`,
          width: 1200,
          height: 630,
          alt: "Prix SICI 2026 – Zoh Henan Guoji Meilleur Projet Immobilier",
        },
      ],
    },
  };
}

export default function ActualitesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
