import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Galería de Trabajos — Tayer El Buen Pastor",
  description:
    "Vea nuestra galería de trabajos en hierro: portones, rejas, barandas, escaleras, puertas, techos metálicos y más. Proyectos reales completados por Tayer El Buen Pastor en Santo Domingo.",
};

const photos = [
  { src: "/images/metal-gate-hero.jpeg", alt: "Portón de hierro decorativo" },
  { src: "/images/metal-window-guards.jpeg", alt: "Rejas para ventanas" },
  { src: "/images/metal-red-stairs.jpeg", alt: "Escalera de hierro roja" },
  {
    src: "/images/metal-red-stairs-1.jpeg",
    alt: "Escalera de hierro acabado rojo",
  },
  { src: "/images/metal-door.jpeg", alt: "Puerta de hierro" },
  { src: "/images/metal-door1.jpeg", alt: "Puerta de hierro decorativa" },
  { src: "/images/metal-doors.jpeg", alt: "Puertas de hierro múltiples" },
  { src: "/images/metal-railings.jpeg", alt: "Barandas de segundo piso" },
  {
    src: "/images/metal-spiked-fence.jpeg",
    alt: "Verja perimetral con puntas",
  },
  { src: "/images/metal-car-port.jpeg", alt: "Carport metálico" },
  { src: "/images/metal-car-ports.jpeg", alt: "Estructuras de carport" },
  { src: "/images/metal-bunk-bed.jpeg", alt: "Litera de hierro" },
  { src: "/images/metal-garage-doors.jpeg", alt: "Puertas de garaje" },
  {
    src: "/images/metal-garage-roll-doors.jpeg",
    alt: "Puertas de garaje enrollables",
  },
  {
    src: "/images/metal-garage-door-frame.jpeg",
    alt: "Marco de puerta de garaje",
  },
  {
    src: "/images/metal-gallery-protection.jpeg",
    alt: "Protección de galería",
  },
  { src: "/images/metal-rolling-gate.jpeg", alt: "Portón enrollable" },
  { src: "/images/metal-gate-roll-door.jpeg", alt: "Portón corredizo" },
  { src: "/images/metal-roll-down-doors.jpeg", alt: "Puertas enrollables" },
  { src: "/images/metal-roof.jpeg", alt: "Techo metálico" },
  {
    src: "/images/metal-window-protection.jpeg",
    alt: "Protección de ventanas",
  },
  {
    src: "/images/windows-metal-roof.jpeg",
    alt: "Ventanas con techo metálico",
  },
  { src: "/images/stairs.jpeg", alt: "Escaleras" },
  { src: "/images/gabriel.jpeg", alt: "Gabriel, maestro herrero" },
];

export default function GaleriaPage() {
  return (
    <>
      <Navbar />
      <Analytics />

      <main className="bg-offwhite">
        {/* Hero */}
        <section className="bg-iron py-20 px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gold mb-6">
              Galería de Trabajos
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              Cada imagen representa un proyecto real completado por nuestro
              equipo. Vea la calidad y el detalle que ponemos en cada trabajo.
            </p>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-lg p-5">
                    {photo.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-iron text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              ¿Le Gustó Lo Que Vio?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Podemos crear algo igual de impresionante para su hogar o negocio.
              Contáctenos para una cotización gratuita.
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
