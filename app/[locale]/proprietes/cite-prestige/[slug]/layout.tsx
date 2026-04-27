import type { Metadata } from "next";
import { villas, formatPrix } from "../../villas-data";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const villa = villas.find((v) => v.slug === slug);

  if (!villa) return {};

  const title = `${villa.titre} – Villa ${villa.type} à Bingerville, Abidjan | Zoh Henan Guoji`;
  const description = `${villa.titre} : villa ${villa.type} de ${villa.superficie} m² à la Cité Prestige de Bingerville. ${villa.chambres} chambres, ${villa.sallesDeBain} salles de bain${villa.garage ? ", garage" : ""}. Prix : ${formatPrix(villa.prix)}. Promoteur Zoh Henan Guoji.`;

  return {
    title,
    description,
    keywords: [
      `villa ${villa.type} Bingerville`,
      `${villa.gamme} Zoh Henan`,
      `villa ${villa.chambres} chambres Abidjan`,
      `${villa.titre}`,
      "achat villa Bingerville",
      "villa neuve Abidjan prix",
      "Cité Prestige villa",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/proprietes/cite-prestige/${slug}`,
      languages: {
        fr: `${BASE_URL}/fr/proprietes/cite-prestige/${slug}`,
        en: `${BASE_URL}/en/proprietes/cite-prestige/${slug}`,
        "x-default": `${BASE_URL}/fr/proprietes/cite-prestige/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/proprietes/cite-prestige/${slug}`,
      images: [
        {
          url: villa.photos[0].startsWith("http") ? villa.photos[0] : `${BASE_URL}${villa.photos[0]}`,
          width: 1200,
          height: 630,
          alt: villa.titre,
        },
      ],
    },
  };
}

export default function VillaDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
