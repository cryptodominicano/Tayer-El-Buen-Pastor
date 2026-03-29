import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import Script from 'next/script';
import { siteConfig } from '@/config/site.config';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tayer El Buen Pastor — Herrería Artística en Santo Domingo',
  description: 'Fabricamos e instalamos rejas para ventanas, portones, barandas, escaleras de caracol y verjas de hierro a medida en todo el Gran Santo Domingo. Más de 15 años de experiencia.',
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tayer El Buen Pastor — Herrería Artística en Santo Domingo',
    description: 'Fabricamos e instalamos rejas para ventanas, portones, barandas, escaleras de caracol y verjas de hierro a medida en todo el Gran Santo Domingo.',
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: 'es_DO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tayer El Buen Pastor — Herrería Artística en Santo Domingo',
    description: 'Fabricamos e instalamos rejas, portones, barandas y escaleras de caracol a medida en Santo Domingo.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        <meta charSet="UTF-8" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HomeAndConstructionBusiness",
              "name": "Tayer El Buen Pastor",
              "description": "Herrería artística en Santo Domingo. Fabricamos e instalamos rejas para ventanas, portones, barandas, escaleras de caracol y verjas perimetrales a medida en todo el Gran Santo Domingo.",
              "url": siteConfig.url,
              "telephone": `+${siteConfig.whatsapp}`,
              "email": siteConfig.email,
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Santo Domingo Este",
                "addressRegion": "Santo Domingo",
                "addressCountry": "DO"
              },
              "areaServed": [
                "Santo Domingo Este",
                "Santo Domingo Norte",
                "Santo Domingo Oeste",
                "Distrito Nacional",
                "Los Mina",
                "San Isidro",
                "Villa Mella",
                "Los Alcarrizos",
                "Haina",
                "Alma Rosa I",
                "Alma Rosa II",
                "Lucerna",
                "Invivienda",
                "Los Corales del Este",
                "El Almirante"
              ],
              "availableLanguage": ["Spanish"],
              "priceRange": "$$",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicios de Herrería",
                "itemListElement": [
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rejas para Ventanas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Portones Residenciales" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Barandas y Barandillas" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Escaleras de Caracol" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Verjas Perimetrales" } },
                  { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Puertas de Hierro" } }
                ]
              }
            })
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        {process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID &&
         process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID !== 'PLACEHOLDER' &&
         process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID !== 'YOUR_PORTAL_ID_HERE' && (
          <Script
            id="hubspot-tracking"
            src={`//js.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
