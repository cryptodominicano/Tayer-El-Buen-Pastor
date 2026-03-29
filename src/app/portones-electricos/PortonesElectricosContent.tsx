'use client';

import { useState } from 'react';
import { siteConfig } from '@/config/site.config';

function FAQAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
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

const faqs = [
  {
    q: '\u00bfCu\u00e1nto cuesta instalar un port\u00f3n el\u00e9ctrico en Santo Domingo?',
    a: 'El costo var\u00eda seg\u00fan el motor y el tama\u00f1o del port\u00f3n. Los motores m\u00e1s comunes (800\u20131,200\u00a0kg) cuestan entre RD$16,000 y RD$26,000, m\u00e1s la fabricaci\u00f3n del port\u00f3n a medida. Un proyecto completo de port\u00f3n corredizo con motor puede oscilar entre RD$50,000 y RD$120,000 seg\u00fan dise\u00f1o y dimensiones.',
  },
  {
    q: '\u00bfQu\u00e9 motor recomiendan para uso residencial?',
    a: 'Para uso residencial normal recomendamos Powergate o G-Master. Para viviendas con sistema smart home, el Can-Pro Wifi permite control desde el celular. Para condominios o portones industriales de m\u00e1s de 1,200\u00a0kg, el Motormatic Oil es la opci\u00f3n indicada.',
  },
  {
    q: '\u00bfInstalan el motor tambi\u00e9n o solo fabrican el port\u00f3n?',
    a: 'Coordinamos la instalaci\u00f3n completa \u2014 fabricamos el port\u00f3n y gestionamos la instalaci\u00f3n del motor. Un solo contrato, sin subcontratistas para la estructura met\u00e1lica. El motor lo instala un t\u00e9cnico certificado de la marca que coordinamos nosotros.',
  },
  {
    q: '\u00bfCu\u00e1nto tiempo toma fabricar e instalar un port\u00f3n el\u00e9ctrico?',
    a: 'La fabricaci\u00f3n del port\u00f3n toma entre 2 y 3 semanas dependiendo del dise\u00f1o. La instalaci\u00f3n del motor se coordina inmediatamente despu\u00e9s y toma 1 d\u00eda adicional. En total, desde la aprobaci\u00f3n del dise\u00f1o hasta tener el port\u00f3n funcionando con motor, son aproximadamente 3 a 4 semanas.',
  },
  {
    q: '\u00bfSe puede motorizar un port\u00f3n de hierro existente?',
    a: 'En la mayor\u00eda de los casos, s\u00ed. Evaluamos la estructura existente del port\u00f3n y el riel (en caso de corredizo) para determinar si soporta un motor. Si la estructura es s\u00f3lida, instalamos el motor sin necesidad de fabricar un port\u00f3n nuevo. Si necesita refuerzos, lo indicamos en la cotizaci\u00f3n.',
  },
];

export default function PortonesElectricosContent() {
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent('Hola, me interesa una cotizaci\u00f3n para un port\u00f3n el\u00e9ctrico con motor.')}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Portones El\u00e9ctricos en Santo Domingo \u2014 Fabricaci\u00f3n e Instalaci\u00f3n con Motor Incluido',
    description: 'Fabricamos e instalamos portones el\u00e9ctricos en Santo Domingo. Trabajamos con motores Powergate, G-Master y Can-Pro Wifi. Cotizaci\u00f3n gratis por WhatsApp.',
    datePublished: '2026-03-29',
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
        name: 'Portones El\u00e9ctricos',
        item: `${siteConfig.url}/portones-electricos`,
      },
    ],
  };

  return (
    <article className="bg-white">
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* ============================================================ */}
      {/* HERO                                                         */}
      {/* ============================================================ */}
      <header className="bg-iron pt-32 md:pt-36 pb-16 md:pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-white/50 mb-8" aria-label="Breadcrumb">
            <a href="/" className="hover:text-gold transition-colors">Inicio</a>
            <span className="mx-2">/</span>
            <span className="text-white/80">Portones El&eacute;ctricos</span>
          </nav>
          <div className="text-center">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Portones El&eacute;ctricos en Santo Domingo &mdash; Fabricaci&oacute;n e Instalaci&oacute;n con Motor Incluido
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
              Fabricamos la estructura del port&oacute;n y coordinamos la instalaci&oacute;n del motor el&eacute;ctrico. Todo en una sola contrataci&oacute;n.
            </p>
          </div>
        </div>
      </header>

      {/* ============================================================ */}
      {/* CONTENT                                                      */}
      {/* ============================================================ */}
      <div className="max-w-4xl mx-auto px-6 py-16">

        {/* Intro */}
        <p className="speakable-intro text-lg text-gray-700 leading-relaxed mb-12">
          En <strong>Tayer El Buen Pastor</strong> fabricamos la estructura del port&oacute;n a medida y coordinamos la instalaci&oacute;n del motor el&eacute;ctrico. Todo en una sola contrataci&oacute;n, sin necesidad de buscar instaladores por separado. Coordinamos todo &mdash; usted solo aprueba el dise&ntilde;o y recibe su port&oacute;n funcionando. Somos especialistas en <strong>portones el&eacute;ctricos en Santo Domingo</strong> con m&aacute;s de una d&eacute;cada de experiencia en herrer&iacute;a residencial e industrial, y trabajamos con las marcas de motores m&aacute;s confiables del mercado dominicano.
        </p>

        {/* ---------------------------------------------------------- */}
        {/* SECTION 1 — Como funciona                                  */}
        {/* ---------------------------------------------------------- */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-iron mb-4">
            &iquest;C&oacute;mo Funciona Nuestro Servicio de Portones El&eacute;ctricos?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nuestro servicio de portones el&eacute;ctricos integra dos especialidades en un solo contrato: la fabricaci&oacute;n met&aacute;lica y la automatizaci&oacute;n con motor. Esto significa que usted no tiene que buscar un herrero por un lado y un instalador de motores por otro. Nosotros nos encargamos de todo el proceso, desde el dise&ntilde;o hasta la entrega del port&oacute;n funcionando con su control remoto.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Primero, fabricamos la estructura del port&oacute;n en nuestro taller utilizando hierro y acero de alta resistencia, con las dimensiones exactas de su entrada. El port&oacute;n se dise&ntilde;a espec&iacute;ficamente para soportar el peso y la tensi&oacute;n que genera el motor el&eacute;ctrico, con rieles reforzados y puntos de anclaje preparados para la instalaci&oacute;n del automatismo.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Segundo, coordinamos la instalaci&oacute;n del motor con t&eacute;cnicos certificados de la marca seleccionada. Trabajamos con <strong>Powergate</strong>, <strong>G-Master</strong> y <strong>Can-Pro Wifi</strong> para uso residencial, y <strong>Motormatic Oil</strong> para portones industriales y de condominios. El t&eacute;cnico instala el motor, programa el control remoto, ajusta los l&iacute;mites de apertura y cierre, y verifica el correcto funcionamiento del sensor de obst&aacute;culos.
          </p>
          <ul className="space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Fabricamos la estructura del port&oacute;n con especificaciones exactas para su entrada</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Coordinamos la instalaci&oacute;n del motor (Powergate, G-Master, Can-Pro Wifi o Motormatic Oil)</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Un solo contrato, sin subcontratistas para la estructura met&aacute;lica</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Entregamos el port&oacute;n instalado y funcionando con control remoto incluido</span>
            </li>
          </ul>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* SECTION 2 — Motor Comparison Table                         */}
        {/* ---------------------------------------------------------- */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-iron mb-4">
            Motores para Portones: Comparativa de Precios
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Seleccionar el motor correcto es fundamental para la durabilidad y el funcionamiento &oacute;ptimo de su port&oacute;n el&eacute;ctrico. A continuaci&oacute;n presentamos una comparativa de los motores que instalamos con mayor frecuencia en Santo Domingo, con sus capacidades y rangos de precio actualizados. El <strong>precio del port&oacute;n el&eacute;ctrico en Rep&uacute;blica Dominicana</strong> depende en gran medida del motor seleccionado y las dimensiones de la estructura.
          </p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 mb-6">
            <table className="w-full text-left text-sm md:text-base">
              <thead>
                <tr className="bg-iron text-white">
                  <th className="px-4 py-3 font-semibold">Motor</th>
                  <th className="px-4 py-3 font-semibold">Capacidad</th>
                  <th className="px-4 py-3 font-semibold">Precio (RD$)</th>
                  <th className="px-4 py-3 font-semibold">Caracter&iacute;sticas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-iron">Powergate</td>
                  <td className="px-4 py-3 text-gray-700">800&ndash;1,200&nbsp;kg</td>
                  <td className="px-4 py-3 text-gray-700">24,000&ndash;26,000</td>
                  <td className="px-4 py-3 text-gray-700">Motor robusto, uso residencial pesado</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-iron">G-Master</td>
                  <td className="px-4 py-3 text-gray-700">800&ndash;1,200&nbsp;kg</td>
                  <td className="px-4 py-3 text-gray-700">16,000&ndash;24,000</td>
                  <td className="px-4 py-3 text-gray-700">Relaci&oacute;n calidad-precio, uso residencial</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-iron">Can-Pro Wifi</td>
                  <td className="px-4 py-3 text-gray-700">800&ndash;1,200&nbsp;kg</td>
                  <td className="px-4 py-3 text-gray-700">17,500&ndash;18,500</td>
                  <td className="px-4 py-3 text-gray-700">Control por app m&oacute;vil, smart home</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium text-iron">Motormatic Oil</td>
                  <td className="px-4 py-3 text-gray-700">Hasta 2,200&nbsp;kg</td>
                  <td className="px-4 py-3 text-gray-700">46,000</td>
                  <td className="px-4 py-3 text-gray-700">Uso industrial, condominios</td>
                </tr>
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-iron">Control remoto universal</td>
                  <td className="px-4 py-3 text-gray-700">&mdash;</td>
                  <td className="px-4 py-3 text-gray-700">490&ndash;1,100</td>
                  <td className="px-4 py-3 text-gray-700">Compatible con m&uacute;ltiples marcas</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 italic">
            * Precios en pesos dominicanos (RD$), sujetos a disponibilidad. No incluyen fabricaci&oacute;n del port&oacute;n. Consulte por WhatsApp para cotizaci&oacute;n actualizada.
          </p>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* SECTION 3 — Tipos de Portones Electricos                   */}
        {/* ---------------------------------------------------------- */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-iron mb-4">
            Tipos de Portones El&eacute;ctricos
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            En Santo Domingo, los dos tipos de portones el&eacute;ctricos m&aacute;s utilizados son el <strong>port&oacute;n corredizo</strong> y el <strong>port&oacute;n abatible</strong>. La elecci&oacute;n entre uno y otro depende del espacio disponible, la frecuencia de uso y las caracter&iacute;sticas del terreno. Ambos tipos pueden motorizarse con cualquiera de los motores de nuestra tabla comparativa.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El <strong>port&oacute;n corredizo (sliding)</strong> es el m&aacute;s com&uacute;n para instalaciones residenciales con motor en Santo Domingo. Se desliza lateralmente sobre un riel paralelo al muro perimetral, lo que significa que no necesita espacio de apertura frontal. Es la opci&oacute;n ideal para entradas en pendiente, espacios reducidos y residenciales donde los veh&iacute;culos se estacionan cerca de la entrada. La automatizaci&oacute;n del port&oacute;n corredizo es m&aacute;s sencilla y econ&oacute;mica porque el motor se instala en un solo punto lateral.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            El <strong>port&oacute;n abatible (swing)</strong> es el dise&ntilde;o tradicional de hojas que se abren hacia adentro o hacia afuera. Requiere espacio de giro libre frente al port&oacute;n, lo que lo hace menos pr&aacute;ctico en entradas estrechas. Sin embargo, permite dise&ntilde;os decorativos m&aacute;s elaborados y es la opci&oacute;n preferida para propiedades con entradas amplias y estilo cl&aacute;sico. La motorizaci&oacute;n de un port&oacute;n abatible requiere un motor de brazo articulado o un motor subterr&aacute;neo, dependiendo del peso y las dimensiones.
          </p>
          <ul className="space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700"><strong>Corredizo:</strong> ideal para espacios reducidos, f&aacute;cil de motorizar, el m&aacute;s popular en Santo Domingo</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700"><strong>Abatible:</strong> dise&ntilde;o cl&aacute;sico, requiere espacio de giro, ideal para entradas amplias</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Ambos tipos se pueden automatizar con los motores de nuestra tabla comparativa</span>
            </li>
          </ul>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* SECTION 4 — Instalacion y Garantia                         */}
        {/* ---------------------------------------------------------- */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-iron mb-4">
            Instalaci&oacute;n y Garant&iacute;a
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El proceso de instalaci&oacute;n de <strong>portones el&eacute;ctricos en Santo Domingo</strong> comienza con una visita t&eacute;cnica gratuita donde tomamos medidas exactas de la entrada, evaluamos el tipo de muro o columnas existentes y determinamos la ubicaci&oacute;n &oacute;ptima del motor. En esa misma visita discutimos las opciones de dise&ntilde;o y el motor recomendado seg&uacute;n el peso y las dimensiones del port&oacute;n.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Una vez aprobado el dise&ntilde;o y seleccionado el motor, nuestro taller inicia la fabricaci&oacute;n de la estructura met&aacute;lica. Fabricamos el port&oacute;n con hierro y acero de alta resistencia, con tratamiento anticorrosivo completo: limpieza mec&aacute;nica, primer rico en zinc y pintura esmalte industrial. El port&oacute;n se fabrica espec&iacute;ficamente para soportar la tensi&oacute;n del motor, con puntos de anclaje reforzados y riel de acero de calibre pesado para portones corredizos.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            La <strong>instalaci&oacute;n de motores para portones</strong> la realiza un t&eacute;cnico certificado que coordinamos nosotros. El t&eacute;cnico instala el motor, configura los l&iacute;mites de apertura y cierre, programa los controles remotos, verifica el sensor de obst&aacute;culos y realiza pruebas de funcionamiento. Si usted seleccion&oacute; el <strong>Can-Pro Wifi</strong>, tambi&eacute;n se configura la conexi&oacute;n a la app m&oacute;vil para que pueda controlar su <strong>port&oacute;n automatizado en Santo Domingo Este</strong> desde cualquier lugar.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Ofrecemos garant&iacute;a de 2 a&ntilde;os por defectos de fabricaci&oacute;n en la estructura met&aacute;lica. Los motores tienen la garant&iacute;a propia del fabricante, que var&iacute;a entre 1 y 2 a&ntilde;os seg&uacute;n la marca. Si necesita un <strong>motor Powergate en Santo Domingo</strong>, un <strong>Can-Pro Wifi port&oacute;n en Dominicana</strong> o cualquier otra marca, nosotros gestionamos la garant&iacute;a directamente con el proveedor para su tranquilidad. La instalaci&oacute;n incluye una revisi&oacute;n de seguimiento a los 30 d&iacute;as para verificar el correcto funcionamiento.
          </p>
          <ul className="space-y-2 mb-4 ml-4">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Visita t&eacute;cnica y cotizaci&oacute;n gratuita a domicilio</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Fabricaci&oacute;n en taller: 2 a 3 semanas</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Instalaci&oacute;n de port&oacute;n y motor: 1 d&iacute;a</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Garant&iacute;a de 2 a&ntilde;os en estructura met&aacute;lica</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gold flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Revisi&oacute;n de seguimiento a los 30 d&iacute;as sin costo adicional</span>
            </li>
          </ul>
        </section>

        {/* ---------------------------------------------------------- */}
        {/* FAQ                                                        */}
        {/* ---------------------------------------------------------- */}
        <section className="mb-16">
          <div className="text-center mb-10">
            <span className="uppercase tracking-widest text-sm text-gold font-semibold mb-4 block">Preguntas Frecuentes</span>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-iron">Preguntas Frecuentes sobre Portones El&eacute;ctricos</h2>
          </div>
          <FAQAccordion faqs={faqs} />
        </section>

        {/* ---------------------------------------------------------- */}
        {/* Related Pages                                              */}
        {/* ---------------------------------------------------------- */}
        <section className="mb-16">
          <h2 className="font-display text-2xl font-bold text-iron mb-6">Servicios Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/portones-residenciales/"
              className="block p-6 bg-gray-50 rounded-xl hover:bg-gold/10 border border-gray-200 hover:border-gold/30 transition-colors group"
            >
              <h3 className="font-semibold text-iron group-hover:text-gold transition-colors mb-2">
                Portones Residenciales
              </h3>
              <p className="text-sm text-gray-500">
                Portones de hierro y acero a medida para residencias en Santo Domingo.
              </p>
              <span className="text-sm text-gold font-medium mt-2 inline-block">
                Leer m&aacute;s &rarr;
              </span>
            </a>
            <a
              href="/trabajos-a-medida/"
              className="block p-6 bg-gray-50 rounded-xl hover:bg-gold/10 border border-gray-200 hover:border-gold/30 transition-colors group"
            >
              <h3 className="font-semibold text-iron group-hover:text-gold transition-colors mb-2">
                Trabajos a Medida
              </h3>
              <p className="text-sm text-gray-500">
                Herrer&iacute;a personalizada: estructuras met&aacute;licas, mobiliario y proyectos &uacute;nicos.
              </p>
              <span className="text-sm text-gold font-medium mt-2 inline-block">
                Leer m&aacute;s &rarr;
              </span>
            </a>
          </div>
        </section>
      </div>

      {/* ============================================================ */}
      {/* CTA                                                          */}
      {/* ============================================================ */}
      <section className="bg-iron py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-4">
            Solicitar Cotizaci&oacute;n para Port&oacute;n El&eacute;ctrico
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Cont&aacute;ctenos hoy para una cotizaci&oacute;n personalizada de su port&oacute;n el&eacute;ctrico con motor incluido. Respondemos en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-gold text-iron font-semibold rounded-lg hover:bg-gold/90 transition-colors text-lg"
            >
              Solicitar Cotizaci&oacute;n
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
