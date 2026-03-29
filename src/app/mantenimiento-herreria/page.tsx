import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Analytics from "@/components/Analytics";
import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export const metadata: Metadata = {
  title:
    "Mantenimiento de Rejas y Portones en Santo Domingo — Reparacion y Pintura Anticorrosiva | Tayer El Buen Pastor",
  description:
    "Reparamos rejas, portones y barandas en Santo Domingo. Pintura anticorrosiva, ajuste de bisagras, restauracion de hierro oxidado. Llamenos por WhatsApp.",
  alternates: {
    canonical: "/mantenimiento-herreria",
  },
};

const faqs = [
  {
    q: "\u00bfC\u00f3mo quitar el \u00f3xido de las rejas?",
    a: "El proceso correcto comienza con un cepillo de alambre o esmeril para eliminar el \u00f3xido suelto y la pintura deteriorada, seguido de un primer ep\u00f3xico que sella el metal y crea una barrera qu\u00edmica contra la oxidaci\u00f3n. El acabado final es una capa de poliuretano para protecci\u00f3n UV y resistencia al agua. No use pintura alqu\u00eddica com\u00fan \u2014 dura menos de un a\u00f1o en el clima h\u00famedo de Santo Domingo.",
  },
  {
    q: "\u00bfCada cu\u00e1nto tiempo hay que pintar las rejas?",
    a: "Con pintura industrial ep\u00f3xica + poliuretano, las rejas pueden durar entre 5 y 10 a\u00f1os sin necesidad de repintar, dependiendo de la exposici\u00f3n al sol y la humedad. Con pintura com\u00fan de ferreter\u00eda, el ciclo es de apenas 1 a 2 a\u00f1os. La inversi\u00f3n en pintura profesional se paga sola al reducir la frecuencia de mantenimiento.",
  },
  {
    q: "\u00bfReparan portones el\u00e9ctricos?",
    a: "S\u00ed, realizamos mantenimiento de la estructura met\u00e1lica del port\u00f3n: lubricamos rieles, ajustamos l\u00edmites de recorrido, enderezamos hojas desalineadas y soldamos piezas rotas. Para fallas del motor el\u00e9ctrico espec\u00edficamente, recomendamos el t\u00e9cnico certificado de la marca (Powergate, G-Master o Can-Pro).",
  },
  {
    q: "\u00bfOfrecen servicio de herrero a domicilio en Santo Domingo?",
    a: "S\u00ed. Nuestro servicio de mantenimiento y reparaci\u00f3n es a domicilio. Visitamos su propiedad en Santo Domingo Este, Norte, Oeste o Distrito Nacional para evaluar el trabajo necesario y darle una cotizaci\u00f3n en el momento. No cobramos por la visita de evaluaci\u00f3n dentro del \u00e1rea metropolitana.",
  },
  {
    q: "\u00bfVale la pena reparar rejas viejas o es mejor hacer nuevas?",
    a: "Depende del estado del hierro. Si la estructura est\u00e1 s\u00f3lida y solo tiene \u00f3xido superficial y pintura deteriorada, la restauraci\u00f3n con sistema ep\u00f3xico + poliuretano es significativamente m\u00e1s econ\u00f3mica que fabricar rejas nuevas. Si el hierro tiene corrosi\u00f3n profunda que ha debilitado la estructura, recomendamos fabricaci\u00f3n nueva. Evaluamos cada caso sin compromiso.",
  },
];

export default function MantenimientoHerreriaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Mantenimiento de Herrer\u00eda",
        item: `${siteConfig.url}/mantenimiento-herreria`,
      },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline:
      "Mantenimiento de Rejas y Portones en Santo Domingo \u2014 Reparaci\u00f3n y Pintura Anticorrosiva",
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    description:
      "Gu\u00eda completa de mantenimiento y reparaci\u00f3n de herrer\u00eda en Santo Domingo: pintura anticorrosiva, restauraci\u00f3n de rejas oxidadas, reparaci\u00f3n de portones y m\u00e1s.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/mantenimiento-herreria`,
    },
  };

  return (
    <>
      <Navbar />
      <Analytics />

      <main className="bg-offwhite">
        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        {/* Hero */}
        <section className="bg-iron py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center gap-2 text-sm text-white/60">
                <li>
                  <Link href="/" className="hover:text-gold transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>/</li>
                <li className="text-gold">Mantenimiento de Herrer&iacute;a</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-5xl font-display font-bold text-gold mb-6 leading-tight">
              Mantenimiento de Rejas y Portones en Santo Domingo &mdash;
              Reparaci&oacute;n y Pintura Anticorrosiva
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Servicio profesional de restauraci&oacute;n y mantenimiento de
              herrer&iacute;a a domicilio en Santo Domingo Este y todo el
              &aacute;rea metropolitana.
            </p>
          </div>
        </section>

        {/* Intro */}
        <article>
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                La mayor&iacute;a de los herreros en Santo Domingo solo se
                dedican a la fabricaci&oacute;n de trabajos nuevos: rejas,
                portones, barandas. Pero &iquest;qu&eacute; pasa cuando su
                herrer&iacute;a existente necesita atenci&oacute;n? Rejas
                oxidadas que lucen deterioradas, portones desalineados que no
                cierran bien, barandas flojas que representan un peligro, o
                bisagras da&ntilde;adas que chirrían con cada movimiento. Estos
                problemas son comunes en el clima h&uacute;medo y salino de la
                Rep&uacute;blica Dominicana, pero pocos talleres ofrecen un
                servicio serio de reparaci&oacute;n y mantenimiento.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                En{" "}
                <strong>
                  Tayer El Buen Pastor
                </strong>
                , llenamos ese vac&iacute;o. Adem&aacute;s de fabricar
                herrer&iacute;a nueva, ofrecemos un servicio completo de{" "}
                <strong>
                  mantenimiento de rejas en Santo Domingo
                </strong>
                , restauraci&oacute;n de hierro oxidado y reparaci&oacute;n de
                portones el&eacute;ctricos y manuales. Trabajamos como{" "}
                <strong>herrero a domicilio en Santo Domingo Este</strong>,
                Norte, Oeste y Distrito Nacional, visit&aacute;ndole en su
                propiedad para evaluar el estado de su herrer&iacute;a y darle
                una soluci&oacute;n inmediata y profesional.
              </p>
            </div>
          </section>

          {/* Servicios de Mantenimiento */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-iron mb-6">
                Servicios de Mantenimiento y Reparaci&oacute;n
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Nuestro servicio de{" "}
                <strong>
                  restauraci&oacute;n de herrer&iacute;a en Santo Domingo
                </strong>{" "}
                abarca una amplia gama de trabajos que cubren todo lo que su
                herrer&iacute;a pueda necesitar. Ya sea una reja de ventana con
                &oacute;xido superficial o un port&oacute;n el&eacute;ctrico
                que no funciona correctamente, tenemos la experiencia y las
                herramientas para resolverlo.
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#10003;</span>
                  <span>
                    <strong>Pintura anticorrosiva profesional</strong> (sistema
                    epoxy + poliuretano) &mdash; protecci&oacute;n industrial
                    que dura de 5 a 10 a&ntilde;os
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#10003;</span>
                  <span>
                    <strong>Reparaci&oacute;n de bisagras y rieles</strong> de
                    portones &mdash; ajuste, lubricaci&oacute;n y reemplazo de
                    piezas desgastadas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#10003;</span>
                  <span>
                    <strong>Restauraci&oacute;n de rejas oxidadas</strong>{" "}
                    &mdash; eliminaci&oacute;n completa de &oacute;xido,
                    tratamiento y repintado profesional
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#10003;</span>
                  <span>
                    <strong>
                      Ajuste y lubricaci&oacute;n de motores de portones
                      el&eacute;ctricos
                    </strong>{" "}
                    &mdash; mantenimiento de portones el&eacute;ctricos
                    incluyendo rieles, l&iacute;mites de recorrido y hojas
                    desalineadas
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#10003;</span>
                  <span>
                    <strong>Soldadura de piezas rotas</strong> &mdash;
                    reconstrucci&oacute;n de secciones da&ntilde;adas con
                    soldadura industrial
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#10003;</span>
                  <span>
                    <strong>Repintado para extender vida &uacute;til 10+
                    a&ntilde;os</strong> &mdash; un{" "}
                    <em>taller de soldadura cerca de m&iacute;</em> que
                    realmente invierte en la durabilidad de su herrer&iacute;a
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* Sistema Anticorrosivo */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-iron mb-6">
                El Sistema de Doble Barrera Anticorrosiva
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Cuando un cliente nos pregunta{" "}
                <strong>
                  c&oacute;mo quitar el &oacute;xido de las rejas
                </strong>
                , no le damos una respuesta simple. Le explicamos el sistema
                profesional completo que utilizamos, porque la diferencia entre
                un trabajo que dura un a&ntilde;o y uno que dura diez est&aacute;
                en el proceso, no solo en la pintura.
              </p>

              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-display font-bold text-iron mb-4">
                  Paso 1: Preparaci&oacute;n de Superficie
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Eliminamos todo el &oacute;xido suelto y la pintura
                  deteriorada usando cepillo de alambre, esmeril y disco de
                  desbaste. Este paso es cr&iacute;tico: si se pinta sobre
                  &oacute;xido existente, la nueva pintura se desprender&aacute;
                  en semanas. El metal debe quedar limpio y con perfil de
                  anclaje para que el primer se adhiera correctamente.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-display font-bold text-iron mb-4">
                  Paso 2: Primer Ep&oacute;xico (Barrera Qu&iacute;mica)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Aplicamos un primer ep&oacute;xico de grado industrial (tipo
                  Osel-Lock 475 o equivalente) que sella el metal y crea una
                  barrera qu&iacute;mica contra la oxidaci&oacute;n. A
                  diferencia del primer com&uacute;n de ferreter&iacute;a, el
                  ep&oacute;xico penetra en los poros del hierro y forma un
                  enlace molecular con el metal, no solo una capa superficial.
                  Esta es la{" "}
                  <strong>
                    pintura anticorrosiva para hierro
                  </strong>{" "}
                  que realmente funciona en el clima dominicano.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
                <h3 className="text-xl font-display font-bold text-iron mb-4">
                  Paso 3: Acabado de Poliuretano (Barrera F&iacute;sica)
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  La capa final de poliuretano proporciona resistencia UV,
                  retenci&oacute;n de color y protecci&oacute;n contra la
                  humedad y la lluvia. Es el escudo exterior que protege tanto
                  al primer como al metal de los elementos. Con este sistema de
                  doble barrera, las rejas mantienen su apariencia y
                  protecci&oacute;n durante 5 a 10 a&ntilde;os sin necesidad de
                  repintar.
                </p>
              </div>

              <div className="bg-gold-50 border-l-4 border-gold rounded-r-xl p-6 mb-8">
                <p className="text-gray-800 leading-relaxed font-medium">
                  <strong>&iquest;Por qu&eacute; no pintura alqu&iacute;dica?</strong>{" "}
                  La pintura alqu&iacute;dica (la pintura de esmalte com&uacute;n
                  que venden en las ferreter&iacute;as) es la opci&oacute;n que
                  la mayor&iacute;a elige por su bajo costo inicial. Sin embargo,
                  en la humedad de Santo Domingo, esta pintura se deteriora en
                  apenas 1 a 2 a&ntilde;os, obligando a repintar constantemente.
                  A largo plazo, el sistema ep&oacute;xico + poliuretano es
                  significativamente m&aacute;s econ&oacute;mico porque elimina
                  3 o 4 ciclos de repintado.
                </p>
              </div>

              <h3 className="text-2xl font-display font-bold text-iron mb-4">
                Hierro Negro vs. Hierro Galvanizado
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Entender la diferencia entre estos dos materiales es fundamental
                para el mantenimiento correcto de su herrer&iacute;a.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                El <strong>hierro negro</strong> es el material m&aacute;s
                com&uacute;n en la herrer&iacute;a dominicana. Es econ&oacute;mico
                y f&aacute;cil de trabajar, pero sin protecci&oacute;n adecuada
                comienza a oxidarse en cuesti&oacute;n de meses en el clima
                tropical de la Rep&uacute;blica Dominicana. La humedad relativa
                promedio en Santo Domingo supera el 80%, lo que acelera
                dr&aacute;sticamente la corrosi&oacute;n del hierro sin tratar.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                El <strong>hierro galvanizado</strong> tiene un recubrimiento de
                zinc aplicado en f&aacute;brica que a&ntilde;ade a&ntilde;os de
                protecci&oacute;n adicional. Para trabajos nuevos, en Tayer El
                Buen Pastor recomendamos hierro galvanizado siempre que el
                presupuesto lo permita. Para herrer&iacute;a existente en hierro
                negro, nuestro sistema de ep&oacute;xico + poliuretano es la
                mejor alternativa para lograr una protecci&oacute;n comparable
                sin necesidad de reemplazar la estructura.
              </p>
            </div>
          </section>

          {/* Signos de Mantenimiento */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-iron mb-6">
                &iquest;Cu&aacute;ndo Necesita Mantenimiento su
                Herrer&iacute;a?
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Muchos propietarios esperan hasta que el da&ntilde;o es severo
                para buscar un herrero, lo que termina costando mucho m&aacute;s
                que un mantenimiento preventivo a tiempo. Estos son los signos
                de que su herrer&iacute;a necesita atenci&oacute;n profesional:
              </p>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#9888;</span>
                  <span>
                    <strong>Burbujas o descascaramiento de pintura</strong>{" "}
                    &mdash; indica que la humedad ha penetrado bajo la capa de
                    pintura y el &oacute;xido est&aacute; avanzando por debajo
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#9888;</span>
                  <span>
                    <strong>Manchas de &oacute;xido marr&oacute;n visibles</strong>{" "}
                    &mdash; corrosi&oacute;n activa que debe tratarse antes de
                    que debilite la estructura
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#9888;</span>
                  <span>
                    <strong>
                      Bisagras que chirr&iacute;an o portones dif&iacute;ciles
                      de mover
                    </strong>{" "}
                    &mdash; fricci&oacute;n excesiva por falta de
                    lubricaci&oacute;n o desalineaci&oacute;n estructural
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#9888;</span>
                  <span>
                    <strong>Soldaduras agrietadas</strong> &mdash; comprometen
                    la integridad estructural y la seguridad de la
                    herrer&iacute;a
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gold font-bold text-xl mt-0.5">&#9888;</span>
                  <span>
                    <strong>Barandas flojas o que se mueven</strong> &mdash;
                    peligro de ca&iacute;da, especialmente si tiene
                    ni&ntilde;os o personas mayores en el hogar
                  </span>
                </li>
              </ul>
              <p className="text-lg text-gray-700 leading-relaxed mt-6">
                Si identifica cualquiera de estos problemas, no espere.
                Cont&aacute;ctenos para una evaluaci&oacute;n gratuita a
                domicilio. El mantenimiento preventivo siempre es m&aacute;s
                econ&oacute;mico que la reparaci&oacute;n de da&ntilde;os
                avanzados o la fabricaci&oacute;n de herrer&iacute;a nueva.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-display font-bold text-iron mb-10">
                Preguntas Frecuentes sobre Mantenimiento de Herrer&iacute;a
              </h2>
              <div className="space-y-6">
                {faqs.map((faq, i) => (
                  <details
                    key={i}
                    className="bg-white rounded-2xl shadow-sm group"
                  >
                    <summary className="cursor-pointer px-8 py-6 text-lg font-bold text-iron flex items-center justify-between gap-4 list-none [&::-webkit-details-marker]:hidden">
                      <span>{faq.q}</span>
                      <span className="text-gold text-2xl transition-transform group-open:rotate-45 shrink-0">
                        +
                      </span>
                    </summary>
                    <div className="px-8 pb-6">
                      <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-4 bg-iron text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gold mb-6">
                &iquest;Su Herrer&iacute;a Necesita Mantenimiento?
              </h2>
              <p className="text-lg text-white/90 mb-8">
                Cont&aacute;ctenos hoy para una evaluaci&oacute;n gratuita a
                domicilio. Revisamos el estado de sus rejas, portones y barandas
                y le damos una cotizaci&oacute;n en el momento, sin compromiso.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/#contacto"
                  className="inline-block bg-gold text-iron font-bold px-10 py-4 rounded-xl text-lg hover:bg-yellow-400 transition-colors"
                >
                  Solicitar Evaluaci&oacute;n Gratis
                </Link>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hola, necesito mantenimiento o reparaci\u00f3n de herrer\u00eda. \u00bfMe pueden dar una cotizaci\u00f3n?")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-whatsapp text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-500 transition-colors"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Related Pages */}
          <section className="py-16 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-display font-bold text-iron mb-8 text-center">
                Servicios Relacionados
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link
                  href="/rejas-para-ventanas/"
                  className="block bg-offwhite rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-iron mb-2">
                    Rejas para Ventanas
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Fabricaci&oacute;n e instalaci&oacute;n de rejas de
                    seguridad y decorativas
                  </p>
                </Link>
                <Link
                  href="/portones-electricos/"
                  className="block bg-offwhite rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-iron mb-2">
                    Portones El&eacute;ctricos
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Instalaci&oacute;n y reparaci&oacute;n de portones
                    el&eacute;ctricos en Santo Domingo
                  </p>
                </Link>
                <Link
                  href="/portones-residenciales/"
                  className="block bg-offwhite rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-iron mb-2">
                    Portones Residenciales
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Portones de hierro a medida para casas y residenciales
                  </p>
                </Link>
              </div>
            </div>
          </section>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
