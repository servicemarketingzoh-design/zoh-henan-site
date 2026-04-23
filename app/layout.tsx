import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zoh Henan Guoji – Votre cadre de vie paisible et sécurisé",
  description:
    "Découvrez Zoh Henan Guoji, un cadre de vie moderne, paisible et sécurisé.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
