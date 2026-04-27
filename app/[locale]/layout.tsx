import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import '../globals.css';
import Providers from './components/Providers';

const locales = ['fr', 'en'] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Zoh Henan Guoji",
  alternateName: "Zoh-Henan SA",
  url: "https://www.zoh-henan.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.zoh-henan.com/images/logo.png",
    width: 512,
    height: 512,
  },
  image: "https://www.zoh-henan.com/images/logo.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+225-27-22-49-67-39",
    contactType: "customer service",
    availableLanguage: ["French"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Faya-Cité SIR",
    addressLocality: "Cocody",
    addressRegion: "Abidjan",
    addressCountry: "CI",
  },
};

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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            {children}
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}