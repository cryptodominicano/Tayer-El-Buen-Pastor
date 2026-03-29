import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Analytics from "@/components/Analytics";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Por Qué Elegir Tayer El Buen Pastor — Herrería en Santo Domingo",
  description:
    "Con más de 15 años de experiencia en herrería dominicana, Tayer El Buen Pastor ofrece trabajos en hierro de calidad superior, sin subcontratistas, con garantía y diseños personalizados en Santo Domingo y todo el país.",
};

export default function PorQueElegirnosPage() {
  return (
    <>
      <Navbar />
      <Analytics />

      <main className="bg-offwhite">
        {/* Hero */}
        <section className="bg-iron py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6">
              ¿Por Qué Elegir Tayer El Buen Pastor?
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Más de 15 años transformando hogares y negocios dominicanos con
              trabajos en hierro de la más alta calidad.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cuando usted invierte en herrería para su hogar o negocio, no está
              comprando un simple producto: está protegiendo a su familia,
              embelleciendo su propiedad y añadiendo valor real a su inversión.
              Por eso, elegir al herrero correcto es una de las decisiones más
              importantes que puede tomar. En Tayer El Buen Pastor, entendemos
              esa responsabilidad y la asumimos con el mismo compromiso que si
              fuera nuestra propia casa.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Desde nuestros inicios en Santo Domingo, hemos construido una
              reputación basada en la honestidad, la puntualidad y la calidad de
              nuestro trabajo. No somos una empresa que promete y no cumple:
              somos artesanos del hierro que dejan hablar a sus obras. Cada
              portón, cada reja, cada baranda que fabricamos lleva nuestra firma
              de excelencia.
            </p>
          </div>
        </section>

        {/* Experiencia */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-iron mb-6">
              Más de 15 Años de Experiencia Comprobada
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              En el mundo de la herrería, la experiencia no se improvisa. Cada
              año de trabajo nos ha enseñado algo nuevo: cómo manejar los
              diferentes tipos de hierro y acero, qué técnicas de soldadura
              funcionan mejor para cada aplicación, cómo adaptar diseños
              europeos y modernos al clima tropical dominicano, y cómo
              garantizar que cada pieza resista el paso del tiempo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Hemos completado cientos de proyectos en residencias,
              apartamentos, locales comerciales, iglesias, escuelas y
              edificaciones gubernamentales. Esa trayectoria nos permite
              anticipar problemas antes de que ocurran, ofrecer soluciones
              creativas a espacios difíciles y entregar resultados que superan
              las expectativas de nuestros clientes.
            </p>
          </div>
        </section>

        {/* Sin subcontratistas */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-iron mb-6">
              Sin Subcontratistas: Nosotros Hacemos Todo el Trabajo
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Muchas empresas de herrería en Santo Domingo aceptan su pedido y
              luego lo envían a un taller externo que usted nunca conoce. Eso
              significa que nadie controla la calidad, los tiempos se alargan y
              si hay un problema, nadie se hace responsable. Nosotros no
              trabajamos así.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              En Tayer El Buen Pastor, cada proyecto es fabricado e instalado por
              nuestro propio equipo de herreros calificados, bajo la supervisión
              directa de Gabriel, nuestro maestro herrero fundador. Desde el
              primer corte de hierro hasta la última mano de pintura, todo pasa
              por nuestras manos. Eso nos permite garantizar la calidad en cada
              detalle y responder personalmente si usted tiene alguna inquietud.
            </p>
          </div>
        </section>

        {/* Materiales */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-iron mb-6">
              Materiales de Primera Calidad
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La durabilidad de un trabajo en hierro depende directamente de los
              materiales utilizados. Nosotros no escatimamos en calidad: usamos
              hierro estructural de calibre grueso, perfiles de acero
              certificados, soldadura industrial y pinturas anticorrosivas de
              grado profesional. Cada material es seleccionado pensando en el
              clima húmedo y salino de la República Dominicana.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Además, aplicamos tratamientos de preparación de superficie que
              incluyen limpieza mecánica, imprimación anticorrosiva y acabado
              final con pintura de poliuretano o esmalte industrial. Esto
              asegura que su inversión luzca como nueva durante muchos años, sin
              importar si está en la costa de Boca Chica o en las montañas de
              Jarabacoa.
            </p>
          </div>
        </section>

        {/* Garantía */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-iron mb-6">
              Garantía Real en Todos Nuestros Trabajos
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              No le ofrecemos una garantía de papel que nadie honra. Nuestra
              garantía es tan sólida como el hierro que trabajamos. Cada
              proyecto que entregamos viene respaldado por nuestra palabra y
              nuestro compromiso de servicio postventa. Si en el período de
              garantía surge algún defecto de fabricación o instalación, lo
              corregimos sin costo adicional.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pero más allá de la garantía formal, nuestra mejor garantía es
              nuestra reputación. Después de más de 15 años en el mercado,
              nuestros clientes nos siguen recomendando a familiares y amigos.
              Eso solo sucede cuando uno cumple lo que promete, una y otra vez.
            </p>
          </div>
        </section>

        {/* Cobertura geográfica */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-iron mb-6">
              Cobertura en Todo Santo Domingo y Más Allá
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Nuestro taller está ubicado en Santo Domingo, pero nuestra
              cobertura no tiene fronteras dentro de la isla. Atendemos
              proyectos en Santo Domingo Este, Santo Domingo Oeste, Santo
              Domingo Norte, el Distrito Nacional, Los Alcarrizos, Boca Chica,
              San Cristóbal, San Pedro de Macorís y prácticamente cualquier
              punto de la República Dominicana donde nuestros clientes nos
              necesiten.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Realizamos visitas de medición y presupuesto sin compromiso. Uno
              de nuestros técnicos se desplaza hasta su ubicación para tomar
              medidas exactas, evaluar las condiciones del espacio y ofrecerle
              un presupuesto detallado y transparente. Sin sorpresas, sin costos
              ocultos.
            </p>
          </div>
        </section>

        {/* Diseños personalizados */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-iron mb-6">
              Diseños Personalizados Para Cada Cliente
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cada hogar es único, y su herrería debería serlo también. En Tayer
              El Buen Pastor no trabajamos con catálogos genéricos. Si usted
              tiene una idea, una foto de referencia o simplemente una visión de
              lo que quiere, nosotros lo hacemos realidad. Trabajamos estilos
              modernos, clásicos, coloniales, minimalistas y contemporáneos.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Desde portones residenciales con detalles ornamentales hasta
              escaleras de caracol que se convierten en la pieza central de su
              hogar, pasando por rejas de seguridad que no sacrifican la
              estética, cada diseño es creado específicamente para usted. Le
              presentamos bocetos y opciones antes de empezar, para que usted
              apruebe cada detalle.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nuestro compromiso es que cuando vea el resultado final, sienta
              orgullo de su decisión. Que cada vecino que pase frente a su casa
              pregunte quién hizo ese trabajo. Que cada visita que reciba elogie
              el acabado y el diseño. Ese es el estándar que mantenemos en cada
              proyecto, sin importar su tamaño.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-iron text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              ¿Listo Para Transformar Su Espacio?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contáctenos hoy para una cotización sin compromiso. Le visitamos,
              medimos y le presentamos un presupuesto transparente.
            </p>
            <Link
              href="/#contacto"
              className="inline-block bg-gold text-iron font-bold px-10 py-4 rounded-xl text-lg hover:bg-yellow-400 transition-colors"
            >
              Solicitar Cotización Gratis
            </Link>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
