'use client';

import Script from 'next/script';
import { siteConfig } from '@/config/site.config';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackWhatsAppClick(label: string) {
  window.gtag?.('event', 'whatsapp_click', { event_label: label });
}

export default function Analytics() {
  const GA_ID = siteConfig.ga4Id;

  if (GA_ID === 'PENDING') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
