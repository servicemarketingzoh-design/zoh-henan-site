import type { Metadata } from "next";
import { actualites } from "../data";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = actualites.find((a) => a.slug === slug);

  if (!article) return {};

  const title = `${article.titre} | Zoh Henan Guoji`;
  const description = article.extrait;

  return {
    title,
    description,
    keywords: [
      "actualité immobilier Abidjan",
      article.categorie,
      "Zoh Henan actualité",
      "immobilier Côte d'Ivoire",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/actualites/${slug}`,
      languages: {
        fr: `${BASE_URL}/fr/actualites/${slug}`,
        en: `${BASE_URL}/en/actualites/${slug}`,
        "x-default": `${BASE_URL}/fr/actualites/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/${locale}/actualites/${slug}`,
      type: "article",
      publishedTime: article.date,
      images: [
        {
          url: article.img.startsWith("http") ? article.img : `${BASE_URL}${article.img}`,
          width: 1200,
          height: 630,
          alt: article.titre,
        },
      ],
    },
  };
}

export default function ArticleDetailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
