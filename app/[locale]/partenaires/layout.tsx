import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Nos Partenaires – BHCI, SGCI, CNPS | Zoh-Henan Immobilier",
    description:
      "Banque de l'Habitat de Côte d'Ivoire, Société Générale Côte d'Ivoire, CNPS et Ministère de l'Urbanisme : les partenaires qui accompagnent Zoh-Henan Immobilier et ses acquéreurs.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/partenaires`,
      languages: {
        fr: `${BASE_URL}/fr/partenaires`,
        en: `${BASE_URL}/en/partenaires`,
        "x-default": `${BASE_URL}/fr/partenaires`,
      },
    },
  };
}

export default function PartenairesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
