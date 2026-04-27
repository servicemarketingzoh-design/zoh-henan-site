import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoh Henan Guoji – Votre cadre de vie paisible et sécurisé",
  description:
    "Zoh-Henan SA développe des projets immobiliers modernes et accessibles, conçus pour répondre aux besoins des familles et contribuer à l'aménagement durable du territoire ivoirien.",
  metadataBase: new URL("https://www.zoh-henan.com"),
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  openGraph: {
    title: "Zoh Henan Guoji – Votre cadre de vie paisible et sécurisé",
    description:
      "Zoh-Henan SA développe des projets immobiliers modernes et accessibles, conçus pour répondre aux besoins des familles et contribuer à l'aménagement durable du territoire ivoirien.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
