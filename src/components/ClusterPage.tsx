'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site.config';
import { getClusterPage, type ClusterPageConfig } from '@/lib/cluster-pages';

interface SectionInput {
  title?: string;
  heading?: string;
  paragraphs?: string[];
  content?: string;
  listItems?: string[];
  id?: string;
}

interface Section {
  title: string;
  paragraphs: string[];
  listItems?: string[];
}

interface FAQInput {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

interface FAQItem {
  q: string;
  a: string;
}

interface ClusterPageProps {
  pageKey: string;
  title: string;
  subtitle: string;
  intro: string;
  sections: SectionInput[];
  faqs: FAQInput[];
  metaTitle: string;
}

function normalizeSection(s: SectionInput): Section {
  return {
    title: s.title || s.heading || '',
    paragraphs: s.paragraphs || (s.content ? s.content.split('\n\n').filter(Boolean) : []),
    listItems: s.listItems,
  };
}

function normalizeFaq(f: FAQInput): FAQItem {
  return {
    q: f.q || f.question || '',
    a: f.a || f.answer || '',
  };
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex items-center justify-between py-5 text-left focus:outline-none group"
              aria-expanded={isOpen}
            >
              <span className="text-lg font-medium text-iron group-hover:text-gold transition-colors">
                {faq.q}
              </span>
              <svg
                className={`w-5 h-5 text-gray-400 flex-shrink-0 ml-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-[600px] pb-5' : 'max-h-0'}`}>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function ClusterPage({ pageKey, title, subtitle, intro, sections: rawSections, faqs: rawFaqs, metaTitle }: ClusterPageProps) {
  const config = getClusterPage(pageKey);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;
  const sections = rawSections.map(normalizeSection);
  const faqs = rawFaqs.map(normalizeFaq);

  const relatedPages = config?.related
    .map((key) => getClusterPage(key))
    .filter(Boolean) as ClusterPageConfig[] || [];

  const relatedLabels: Record<string, string> = {
    rejas: 'Rejas para Ventanas',
    portones: 'Portones Residenciales',
    barandas: 'Barandas y Barandillas',
    escaleras: 'Escaleras de Caracol',
    verjas: 'Verjas Perimetrales',
    puertas: 'Puertas de Hierro',
    custom: 'Trabajos a Medida',
  };

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metaTitle,
    description: subtitle,
    datePublished: '2026-03-01',
    dateModified: '2026-03-29',
    author: {
      '@type': 'Organization',
      name: 'Tayer El Buen Pastor',
      url: siteConfig.url,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Tayer El Buen Pastor',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: siteConfig.url,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: `${siteConfig.url}/${config?.slug}/`,
      },
    ],
  };

  return (
    <article className="bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero with breadcrumb */}
      <header className="bg-iron pt-32 md:pt-36 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/50 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-gold transition-colors">Inicio</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">{title}</span>
          </nav>
          <div className="text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              {subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="speakable-intro text-lg text-gray-700 leading-relaxed mb-12">
          {intro}
        </p>

        {sections.map((section, i) => (
          <section key={i} className="mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-iron mb-4">
              {section.title}
            </h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-gray-700 leading-relaxed mb-4">{p}</p>
            ))}
            {section.listItems && (
              <ul className="space-y-2 mb-4 ml-4">
                {section.listItems.map((item, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>
        ))}

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-sm text-gold font-semibold mb-4 block">Preguntas Frecuentes</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-iron">Preguntas Frecuentes</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </section>

        {/* Related Pages */}
        {relatedPages.length > 0 && (
          <section className="mb-16">
            <h2 className="font-display text-2xl font-bold text-iron mb-6">Servicios Relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedPages.map((related) => (
                <a
                  key={related.key}
                  href={`/${related.slug}/`}
                  className="block p-6 bg-gray-50 rounded-xl hover:bg-gold/10 border border-gray-200 hover:border-gold/30 transition-colors group"
                >
                  <h3 className="font-semibold text-iron group-hover:text-gold transition-colors mb-2">
                    {relatedLabels[related.key] || related.key}
                  </h3>
                  <span className="text-sm text-gold font-medium">
                    Leer más &rarr;
                  </span>
                </a>
              ))}
            </div>
          </section>
        )}
      </div>

      {/* CTA Section */}
      <section className="bg-iron py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            ¿Listo para Su Proyecto de Herrería?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contáctenos hoy para una cotización personalizada. Respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-iron font-semibold rounded-lg hover:bg-gold/90 transition-colors text-lg"
            >
              Solicitar Cotización
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
