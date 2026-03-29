'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileStickyBar from '@/components/MobileStickyBar';
import Analytics from '@/components/Analytics';

const photos = [
  // Rejas y Ventanas
  { src: '/images/client/rejas-decorativas-forjadas.webp', alt: 'Rejas decorativas de hierro forjado con barras torneadas y diseño de abanico — Tayer El Buen Pastor, Santo Domingo', category: 'rejas' },
  { src: '/images/client/rejas-galvanizadas-taller.webp', alt: 'Rejas de hierro galvanizado para ventanas en proceso de fabricación en taller — Tayer El Buen Pastor, Santo Domingo', category: 'rejas' },
  { src: '/images/client/proteccion-galeria-ornamental.webp', alt: 'Protección de galería con hierro decorativo y detalles dorados tipo estrella — Tayer El Buen Pastor, Santo Domingo', category: 'rejas' },
  { src: '/images/client/techo-metalico-ventanas.webp', alt: 'Techo metálico con rejas horizontales para ventanas en residencia — Tayer El Buen Pastor, Santo Domingo', category: 'rejas' },

  // Portones
  { src: '/images/client/porton-peatonal-moderno.webp', alt: 'Portón peatonal moderno de hierro negro con franjas horizontales y acento diagonal — Tayer El Buen Pastor, Santo Domingo', category: 'portones' },
  { src: '/images/client/porton-abatible-moderno.webp', alt: 'Portón abatible de hierro con diseño horizontal moderno y puerta peatonal integrada — Tayer El Buen Pastor, Santo Domingo', category: 'portones' },
  { src: '/images/client/porton-corredizo-dorado.webp', alt: 'Portón corredizo decorativo negro con ornamentos dorados para entrada vehicular — Tayer El Buen Pastor, Santo Domingo', category: 'portones' },
  { src: '/images/client/porton-garaje-mariposas.webp', alt: 'Portón de garaje doble con motivos de mariposas y hojas forjadas en hierro gris — Tayer El Buen Pastor, Santo Domingo', category: 'portones' },
  { src: '/images/client/porton-ornamental-dorado.webp', alt: 'Portón ornamental gris con volutas y detalles dorados estilo clásico dominicano — Tayer El Buen Pastor, Santo Domingo', category: 'portones' },
  { src: '/images/client/porton-ornamental-amplio.webp', alt: 'Vista amplia de portón ornamental con medallones y acabado en dos tonos — Tayer El Buen Pastor, Santo Domingo', category: 'portones' },

  // Barandas y Escaleras
  { src: '/images/client/baranda-balcon-segundo-piso.webp', alt: 'Baranda de hierro con patrón horizontal y rombos en balcón de segundo piso — Tayer El Buen Pastor, Santo Domingo', category: 'barandas' },
  { src: '/images/client/baranda-escalera-diamante.webp', alt: 'Baranda de escalera exterior con diseño de diamantes en hierro natural — Tayer El Buen Pastor, Santo Domingo', category: 'barandas' },
  { src: '/images/client/escalera-roja-exterior.webp', alt: 'Escalera metálica exterior con acabado rojo y baranda de barras horizontales — Tayer El Buen Pastor, Santo Domingo', category: 'barandas' },
  { src: '/images/client/escalera-roja-lateral.webp', alt: 'Vista lateral de escalera roja con baranda horizontal instalada en segundo nivel — Tayer El Buen Pastor, Santo Domingo', category: 'barandas' },

  // Trabajos Especiales
  { src: '/images/client/puerta-hierro-moderna-doble.webp', alt: 'Puerta doble de hierro moderno con ranuras horizontales y cerradura de seguridad — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/puerta-hierro-ornamental-arco.webp', alt: 'Puerta de hierro ornamental con arco y vidrio, detalles forjados clásicos — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/puerta-hierro-louvers.webp', alt: 'Puerta de hierro con louvers y paneles, acabado oscuro — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/verja-horizontal-puntas.webp', alt: 'Verja perimetral moderna con barras horizontales y puntas de seguridad — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/puerta-enrollable-comercial.webp', alt: 'Puerta enrollable de acero galvanizado para local comercial — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/litera-hierro-azul.webp', alt: 'Litera de hierro azul fabricada a medida con base de madera — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/carport-metalico-curvo.webp', alt: 'Carport metálico curvo con techo de policarbonato para vehículo — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/carport-metalico-frontal.webp', alt: 'Vista frontal de estructura metálica curva para estacionamiento techado — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/techo-metalico-patio.webp', alt: 'Techo metálico con estructura de zinc para patio exterior — Tayer El Buen Pastor, Santo Domingo', category: 'especiales' },
  { src: '/images/client/gabriel-herrero.webp', alt: 'Gabriel, maestro herrero de Tayer El Buen Pastor con careta de soldadura — Santo Domingo', category: 'especiales' },
];

const tabs = [
  { label: 'Todos', value: 'todos' },
  { label: 'Rejas y Ventanas', value: 'rejas' },
  { label: 'Portones', value: 'portones' },
  { label: 'Barandas y Escaleras', value: 'barandas' },
  { label: 'Trabajos Especiales', value: 'especiales' },
];

export default function GaleriaPage() {
  const [activeTab, setActiveTab] = useState('todos');
  const [lightboxPhoto, setLightboxPhoto] = useState<typeof photos[number] | null>(null);

  const filtered = activeTab === 'todos'
    ? photos
    : photos.filter((p) => p.category === activeTab);

  return (
    <>
      <head>
        <title>Galería de Trabajos — Tayer El Buen Pastor, Santo Domingo</title>
      </head>

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

        {/* Tabs */}
        <section className="pt-12 px-4">
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-base transition-colors duration-200 ${
                  activeTab === tab.value
                    ? 'bg-gold text-iron shadow-md'
                    : 'bg-white text-iron/70 hover:bg-gold/20 border border-iron/15'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 px-4">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((photo, index) => (
              <button
                key={photo.src}
                onClick={() => setLightboxPhoto(photo)}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gold"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white font-semibold text-sm md:text-base p-5 text-left">
                    {photo.alt}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-iron text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gold mb-6">
              ¿Le gustó lo que vio? Solicite su cotización
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Podemos crear algo igual de impresionante para su hogar o negocio.
              Contáctenos para una cotización gratuita.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/#contacto"
                className="inline-block bg-gold text-iron font-bold px-10 py-4 rounded-xl text-lg hover:bg-yellow-400 transition-colors"
              >
                Solicitar Cotización Gratis
              </Link>
              <a
                href="https://wa.me/18097817680?text=Hola%2C%20vi%20su%20galería%20y%20me%20interesa%20una%20cotización."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-500 transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.943 11.943 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.352 0-4.55-.655-6.43-1.79l-.246-.152-3.256 1.091 1.091-3.256-.152-.246A9.96 9.96 0 012 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          onClick={() => setLightboxPhoto(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Close button */}
          <button
            onClick={() => setLightboxPhoto(null)}
            className="absolute top-4 right-4 z-10 text-white bg-black/50 hover:bg-black/80 rounded-full w-12 h-12 flex items-center justify-center transition-colors"
            aria-label="Cerrar"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-4xl w-full aspect-[4/3] z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={lightboxPhoto.src}
              alt={lightboxPhoto.alt}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </div>

          {/* Caption */}
          <p
            className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm md:text-base px-8 z-10"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxPhoto.alt}
          </p>
        </div>
      )}
    </>
  );
}
