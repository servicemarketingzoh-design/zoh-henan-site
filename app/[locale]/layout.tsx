import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import Providers from './components/Providers';

const locales = ['fr', 'en'] as const;

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "RealEstateAgent"],
    "@id": "https://www.zoh-henan.com/#organization",
    name: "Zoh Henan Guoji",
    alternateName: ["Zoh-Henan SA", "ZOH HENAN GUOJI"],
    url: "https://www.zoh-henan.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.zoh-henan.com/images/logo.png",
      width: 512,
      height: 512,
    },
    image: "https://www.zoh-henan.com/images/logo.png",
    description:
      "Promoteur immobilier de référence en Côte d'Ivoire. Cité Prestige Bingerville : 619 villas modernes 3 à 6 pièces. Prix SICI 2026 du Meilleur Projet Immobilier.",
    foundingDate: "2017",
    areaServed: "Côte d'Ivoire",
    telephone: ["+225-27-22-49-67-39", "+225-07-16-17-17-17"],
    email: "contact@zoh-henan.com",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+225-27-22-49-67-39",
        contactType: "sales",
        availableLanguage: ["French"],
      },
      {
        "@type": "ContactPoint",
        telephone: "+225-07-16-17-17-17",
        contactType: "customer service",
        availableLanguage: ["French"],
      },
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Faya-Cité SIR",
      addressLocality: "Cocody",
      addressRegion: "Abidjan",
      addressCountry: "CI",
    },
    award: "Prix du Meilleur Projet Immobilier – SICI 2026",
    sameAs: [
      "https://www.zoh-henan.com",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.zoh-henan.com/#website",
    name: "Zoh Henan Guoji",
    url: "https://www.zoh-henan.com",
    description: "Site officiel de Zoh Henan Guoji, promoteur immobilier en Côte d'Ivoire.",
    publisher: { "@id": "https://www.zoh-henan.com/#organization" },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.zoh-henan.com/fr/proprietes/cite-prestige",
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: ["fr", "en"],
  },
];

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as 'fr' | 'en')) notFound();

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd, null, 0) }}
        />
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KF5V9FVF');` }} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KF5V9FVF" height="0" width="0" style={{ display: 'none', visibility: 'hidden' }} />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}