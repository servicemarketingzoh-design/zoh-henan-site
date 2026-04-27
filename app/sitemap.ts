import { MetadataRoute } from "next";
import { villas } from "./[locale]/proprietes/villas-data";
import { actualites } from "./[locale]/actualites/data";

const BASE_URL = "https://www.zoh-henan.com";
const locales = ["fr", "en"] as const;

type ChangeFreq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";

const staticRoutes: { path: string; priority: number; changeFrequency: ChangeFreq }[] = [
  { path: "/accueil",                    priority: 1.0, changeFrequency: "weekly"  },
  { path: "/proprietes",                 priority: 0.9, changeFrequency: "weekly"  },
  { path: "/proprietes/cite-prestige",   priority: 0.9, changeFrequency: "weekly"  },
  { path: "/actualites",                 priority: 0.8, changeFrequency: "daily"   },
  { path: "/contact",                    priority: 0.8, changeFrequency: "monthly" },
  { path: "/mission",                    priority: 0.7, changeFrequency: "monthly" },
  { path: "/galerie",                    priority: 0.7, changeFrequency: "monthly" },
  { path: "/zoh-henan-construction",     priority: 0.7, changeFrequency: "monthly" },
  { path: "/equipes",                    priority: 0.6, changeFrequency: "monthly" },
  { path: "/partenaires",               priority: 0.5, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const urls: MetadataRoute.Sitemap = [];
  const now = new Date();

  for (const locale of locales) {
    for (const route of staticRoutes) {
      urls.push({
        url: `${BASE_URL}/${locale}${route.path}`,
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
      });
    }

    for (const villa of villas) {
      urls.push({
        url: `${BASE_URL}/${locale}/proprietes/cite-prestige/${villa.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.85,
      });
    }

    for (const article of actualites) {
      urls.push({
        url: `${BASE_URL}/${locale}/actualites/${article.slug}`,
        lastModified: now,
        changeFrequency: "yearly",
        priority: 0.75,
      });
    }
  }

  return urls;
}
