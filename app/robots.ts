import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/panier"],
      },
    ],
    sitemap: "https://www.zoh-henan.com/sitemap.xml",
    host: "https://www.zoh-henan.com",
  };
}
