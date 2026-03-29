'use client';

const photos = [
  { src: '/images/client/porton-ornamental-dorado.webp', alt: 'Portón ornamental gris con volutas y detalles dorados estilo clásico dominicano — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/rejas-decorativas-forjadas.webp', alt: 'Rejas decorativas de hierro forjado con barras torneadas y diseño de abanico — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/baranda-balcon-segundo-piso.webp', alt: 'Baranda de hierro con patrón horizontal y rombos en balcón de segundo piso — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/puerta-hierro-ornamental-arco.webp', alt: 'Puerta de hierro ornamental con arco y vidrio, detalles forjados clásicos — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/porton-garaje-mariposas.webp', alt: 'Portón de garaje doble con motivos de mariposas y hojas forjadas en hierro gris — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/verja-horizontal-puntas.webp', alt: 'Verja perimetral moderna con barras horizontales y puntas de seguridad — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/escalera-roja-exterior.webp', alt: 'Escalera metálica exterior con acabado rojo y baranda de barras horizontales — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/carport-metalico-frontal.webp', alt: 'Estructura metálica curva para estacionamiento techado — Tayer El Buen Pastor, Santo Domingo' },
  { src: '/images/client/proteccion-galeria-ornamental.webp', alt: 'Protección de galería con hierro decorativo y detalles dorados tipo estrella — Tayer El Buen Pastor, Santo Domingo' },
];

export default function Gallery() {
  return (
    <section id="galeria" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Portafolio</span>
          <h2 className="section-title">Nuestros Trabajos</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl aspect-[4/3]">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-iron/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{photo.alt}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="/galeria" className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-600 transition-colors">
            Ver toda la galería
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
