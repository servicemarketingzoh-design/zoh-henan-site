import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Notre Équipe – Les Experts de Zoh-Henan Immobilier | Immobilier Abidjan",
    description:
      "Rencontrez l'équipe professionnelle de Zoh-Henan Immobilier : direction, bureau d'études, administration et chantier. Des experts engagés au service de votre projet immobilier à Abidjan.",
    keywords: [
      "équipe Zoh-Henan",
      "direction immobilier Abidjan",
      "experts immobilier Côte d'Ivoire",
      "architectes Abidjan",
      "promoteur Abidjan équipe",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/equipes`,
      languages: {
        fr: `${BASE_URL}/fr/equipes`,
        en: `${BASE_URL}/en/equipes`,
        "x-default": `${BASE_URL}/fr/equipes`,
      },
    },
    openGraph: {
      title: "Notre Équipe – Zoh-Henan Immobilier",
      description:
        "Des professionnels engagés autour d'une même vision : rendre l'immobilier de qualité accessible à tous les Ivoiriens.",
      url: `${BASE_URL}/${locale}/equipes`,
      images: [{ url: `${BASE_URL}/images/logo.png`, width: 512, height: 512, alt: "Zoh-Henan Immobilier" }],
    },
  };
}

export default function EquipesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
