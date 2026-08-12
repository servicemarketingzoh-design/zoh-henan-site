import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zoh-Henan Immobilier – Promoteur Immobilier à Bingerville, Abidjan",
    template: "%s | Zoh-Henan Immobilier",
  },
  description:
    "Zoh-Henan SA, promoteur immobilier de référence en Côte d'Ivoire. Promotion immobilière de la Cité Prestige à Bingerville : 619 villas modernes de 3 à 6 pièces. Prix SICI 2026 du Meilleur Projet Immobilier.",
  metadataBase: new URL("https://www.zoh-henan.com"),
  keywords: [
    "promoteur immobilier Abidjan",
    "promoteur immobilier Côte d'Ivoire",
    "promoteur immobilier Bingerville",
    "meilleur promoteur immobilier Abidjan",
    "promotion immobilière Bingerville",
    "villa Bingerville",
    "Cité Prestige Bingerville",
    "immobilier Côte d'Ivoire",
    "Zoh-Henan Immobilier",
    "acheter villa Abidjan",
    "acheter villa Bingerville",
    "logement Abidjan",
    "villa neuve Côte d'Ivoire",
    "programme immobilier Abidjan",
    "programme immobilier Bingerville",
    "SICI 2026 meilleur projet immobilier",
  ],
  authors: [{ name: "Zoh-Henan Immobilier", url: "https://www.zoh-henan.com" }],
  creator: "Zoh-Henan Immobilier",
  publisher: "Zoh-Henan Immobilier",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Zoh-Henan Immobilier – Promoteur Immobilier à Bingerville, Abidjan",
    description:
      "619 villas à la Cité Prestige, notre promotion immobilière à Bingerville. Prix SICI 2026 du Meilleur Projet Immobilier. Votre promoteur de confiance en Côte d'Ivoire depuis 2017.",
    url: "https://www.zoh-henan.com",
    siteName: "Zoh-Henan Immobilier",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Zoh-Henan Immobilier",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoh-Henan Immobilier – Promoteur Immobilier à Abidjan",
    description:
      "619 villas à la Cité Prestige de Bingerville. Prix SICI 2026 du Meilleur Projet Immobilier.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
