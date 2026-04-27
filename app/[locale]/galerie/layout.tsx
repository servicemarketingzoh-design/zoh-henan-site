import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Galerie Photos – Cité Prestige Bingerville | Zoh Henan Guoji",
    description:
      "Découvrez en images nos villas et la Cité Prestige de Bingerville. Plus de 400 photos de constructions, événements et réalisations immobilières à Abidjan, Côte d'Ivoire.",
    keywords: [
      "galerie villa Abidjan",
      "photos Cité Prestige Bingerville",
      "images villas Côte d'Ivoire",
      "photos construction immobilier Abidjan",
      "villa prestige photos",
      "Zoh Henan galerie",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/galerie`,
      languages: {
        fr: `${BASE_URL}/fr/galerie`,
        en: `${BASE_URL}/en/galerie`,
        "x-default": `${BASE_URL}/fr/galerie`,
      },
    },
    openGraph: {
      title: "Galerie – Nos Villas & Réalisations | Zoh Henan Guoji",
      description:
        "400+ photos de la Cité Prestige de Bingerville : villas, construction, événements et équipes. Visualisez votre futur chez Zoh-Henan Guoji.",
      url: `${BASE_URL}/${locale}/galerie`,
      images: [
        {
          url: `${BASE_URL}/images/galerie/HEROS.JPG`,
          width: 1200,
          height: 630,
          alt: "Galerie Zoh Henan Guoji – Cité Prestige Bingerville",
        },
      ],
    },
  };
}

export default function GalerieLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
