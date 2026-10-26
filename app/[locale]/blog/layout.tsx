import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Blog – Conseils immobiliers en Côte d'Ivoire | Zoh-Henan Immobilier",
    description:
      "Guides d'achat, financement, démarches juridiques et vie à Bingerville : les conseils des experts Zoh-Henan pour réussir votre projet immobilier en Côte d'Ivoire.",
    alternates: {
      canonical: `${BASE_URL}/${locale}/blog`,
      languages: {
        fr: `${BASE_URL}/fr/blog`,
        en: `${BASE_URL}/en/blog`,
        "x-default": `${BASE_URL}/fr/blog`,
      },
    },
  };
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
