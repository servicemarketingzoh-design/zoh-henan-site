import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Zoh Henan Guoji – Promoteur Immobilier à Abidjan, Côte d'Ivoire",
    template: "%s | Zoh Henan Guoji",
  },
  description:
    "Zoh-Henan SA, promoteur immobilier de référence en Côte d'Ivoire. Cité Prestige Bingerville : 619 villas modernes de 3 à 6 pièces. Prix SICI 2026 du Meilleur Projet Immobilier.",
  metadataBase: new URL("https://www.zoh-henan.com"),
  keywords: [
    "promoteur immobilier Abidjan",
    "villa Bingerville",
    "Cité Prestige Bingerville",
    "immobilier Côte d'Ivoire",
    "Zoh Henan Guoji",
    "acheter villa Abidjan",
    "logement Abidjan",
    "villa neuve Côte d'Ivoire",
    "programme immobilier Abidjan",
    "SICI 2026 meilleur projet immobilier",
  ],
  authors: [{ name: "Zoh Henan Guoji", url: "https://www.zoh-henan.com" }],
  creator: "Zoh Henan Guoji",
  publisher: "Zoh Henan Guoji",
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
    title: "Zoh Henan Guoji – Promoteur Immobilier à Abidjan, Côte d'Ivoire",
    description:
      "619 villas à la Cité Prestige de Bingerville. Prix SICI 2026 du Meilleur Projet Immobilier. Votre promoteur de confiance en Côte d'Ivoire depuis 2017.",
    url: "https://www.zoh-henan.com",
    siteName: "Zoh Henan Guoji",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Logo Zoh Henan Guoji",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoh Henan Guoji – Promoteur Immobilier à Abidjan",
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
