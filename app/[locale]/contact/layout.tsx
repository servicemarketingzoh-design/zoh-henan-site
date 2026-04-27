import type { Metadata } from "next";

const BASE_URL = "https://www.zoh-henan.com";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: "Contactez-nous – Zoh Henan Guoji | Abidjan, Côte d'Ivoire",
    description:
      "Contactez Zoh-Henan Guoji : (+225) 27 22 49 67 39 ou (+225) 07 16 17 17 17. Bureau à Cocody, Abidjan – Faya-Cité SIR. Envoyez-nous un message ou écrivez sur WhatsApp.",
    keywords: [
      "contact Zoh Henan",
      "immobilier contact Abidjan",
      "téléphone promoteur immobilier Côte d'Ivoire",
      "bureau immobilier Cocody Abidjan",
      "Zoh Henan adresse",
      "WhatsApp immobilier Abidjan",
    ],
    alternates: {
      canonical: `${BASE_URL}/${locale}/contact`,
      languages: {
        fr: `${BASE_URL}/fr/contact`,
        en: `${BASE_URL}/en/contact`,
        "x-default": `${BASE_URL}/fr/contact`,
      },
    },
    openGraph: {
      title: "Contactez Zoh Henan Guoji – Bureau à Cocody, Abidjan",
      description:
        "Parlons de votre projet immobilier. Joignez Zoh-Henan Guoji par téléphone, WhatsApp ou formulaire. Bureau : Faya-Cité SIR, Cocody, Abidjan.",
      url: `${BASE_URL}/${locale}/contact`,
      images: [{ url: `${BASE_URL}/images/logo.png`, width: 512, height: 512, alt: "Zoh Henan Guoji" }],
    },
  };
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
