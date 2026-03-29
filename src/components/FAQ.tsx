'use client';

import { useState } from 'react';

interface FAQItem {
  q: string;
  a: string;
}

const defaultFaqs: FAQItem[] = [
  {
    q: '¿Hacen trabajos a domicilio en todo Santo Domingo?',
    a: 'Sí. Tayer El Buen Pastor fabrica en nuestro taller en Santo Domingo Este e instalamos en todo el Gran Santo Domingo, incluyendo el Distrito Nacional, la zona Norte, Oeste y Este. No cobramos cargo adicional por instalación dentro del área metropolitana.',
  },
  {
    q: '¿Cuánto tiempo tarda fabricar e instalar una reja para ventana?',
    a: 'El tiempo de fabricación e instalación depende del diseño y la cantidad de piezas. Una reja estándar para ventana se fabrica e instala en 3 a 5 días hábiles. Trabajos más complejos como portones o escaleras de caracol pueden tomar de 2 a 4 semanas según el diseño.',
  },
  {
    q: '¿Ofrecen garantía en sus trabajos?',
    a: 'Sí. Todos nuestros trabajos incluyen garantía. Utilizamos materiales de primera calidad y aplicamos pintura anticorrosiva antes del acabado final para garantizar durabilidad. Si surge algún problema con el trabajo instalado, lo revisamos y corregimos sin costo adicional.',
  },
  {
    q: '¿Cómo puedo solicitar una cotización?',
    a: 'Puede contactarnos directamente por WhatsApp al número en esta página, enviarnos un mensaje con una foto de referencia del trabajo que desea, o utilizar nuestro formulario de contacto. Respondemos en menos de 24 horas con una cotización personalizada.',
  },
  {
    q: '¿Fabrican diseños personalizados o solo diseños estándar?',
    a: 'Fabricamos principalmente trabajos a medida y diseños personalizados. Puede traer una foto de referencia, un diseño propio, o trabajar con nosotros para crear algo único. Todos nuestros trabajos se fabrican según las medidas exactas de su espacio.',
  },
  {
    q: '¿Cuánto cuesta una reja para ventana en Santo Domingo?',
    a: 'El precio depende del tamaño, el diseño y la cantidad de ventanas. Una reja estándar de diseño sencillo comienza desde RD$4,000 hasta RD$10,000 según las medidas. Los diseños decorativos y artísticos tienen un costo mayor. Contáctenos para una cotización exacta según sus medidas.',
  },
  {
    q: '¿Trabajan con hierro y también con acero inoxidable?',
    a: 'Sí. Fabricamos en hierro negro con acabado anticorrosivo, que es el material más común y económico para rejas y portones. También trabajamos con acero inoxidable para barandas modernas, escaleras de caracol y trabajos que requieren mayor resistencia a la corrosión en ambientes húmedos.',
  },
  {
    q: '¿Pueden fabricar una escalera de caracol para mi casa?',
    a: 'Sí. Las escaleras de caracol o helicoidales son uno de nuestros trabajos más especializados. Fabricamos escaleras de caracol en hierro para interiores y exteriores, con diseños clásicos y modernos. Para cotizar necesitamos las medidas del espacio disponible y la altura entre pisos.',
  },
  {
    q: '¿Instalan portones eléctricos o automatizados?',
    a: 'Fabricamos la estructura metálica del portón y coordinamos la instalación del sistema de automatización. Trabajamos con portones corredizos y abatibles que pueden adaptarse a sistemas eléctricos de apertura remota.',
  },
  {
    q: '¿En qué zonas de Santo Domingo trabajan?',
    a: 'Atendemos todo el Gran Santo Domingo: Santo Domingo Este (nuestra zona principal), Santo Domingo Norte, Santo Domingo Oeste y el Distrito Nacional. Para trabajos fuera de esta área puede consultarnos y evaluamos según la distancia.',
  },
];

export default function FAQ({ items, title }: { items?: FAQItem[]; title?: string }) {
  const faqs = items || defaultFaqs;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
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

  return (
    <section id="faq" className="bg-white py-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="section-label">Preguntas Frecuentes</span>
          <h2 className="section-title">{title || 'Preguntas Frecuentes'}</h2>
        </div>

        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => toggle(i)}
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
                <div className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}>
                  <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
