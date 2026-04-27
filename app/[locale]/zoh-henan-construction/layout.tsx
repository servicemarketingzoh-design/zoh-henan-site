import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Zoh Henan Construction – Entreprise BTP de Référence en Côte d'Ivoire",
    description:
      "Zoh-Henan Construction, branche BTP du groupe Zoh-Henan. Travaux de construction, VRD et bâtiments à Abidjan. Excellence technique et qualité ivoirienne depuis 2017.",
    keywords: [
      "Zoh Henan Construction",
      "BTP Abidjan",
      "entreprise construction Côte d'Ivoire",
      "travaux VRD Abidjan",
      "construction bâtiment Abidjan",
      "génie civil Côte d'Ivoire",
      "construction villa Abidjan",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/zoh-henan-construction`,
      languages: {
        fr: `${BASE_URL}/fr/zoh-henan-construction`,
        en: `${BASE_URL}/en/zoh-henan-construction`,
        "x-default": `${BASE_URL}/fr/zoh-henan-construction`,
      },
    },
    openGraph: {
      title: "Zoh Henan Construction – BTP & Génie Civil en Côte d'Ivoire",
      description:
        "Construction, VRD et bâtiments à Abidjan. La branche BTP de Zoh-Henan Guoji bâtit avec excellence technique et rigueur ivoirienne.",
      url: `${BASE_URL}/${locale}/zoh-henan-construction`,
      images: [
        {
          url: `${BASE_URL}/images/zoh-henan-construction/batiments/4T5B0408.JPG`,
          width: 1200,
          height: 630,
          alt: "Zoh Henan Construction – Bâtiments Abidjan",
        },
      ],
    },
  };
}

export default function ConstructionLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
