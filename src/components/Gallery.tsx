'use client';

const photos = [
  { src: '/images/metal-gate-hero.jpeg', alt: 'Portón de hierro decorativo' },
  { src: '/images/metal-window-guards.jpeg', alt: 'Rejas para ventanas de hierro' },
  { src: '/images/metal-red-stairs.jpeg', alt: 'Escalera de hierro con acabado rojo' },
  { src: '/images/metal-door.jpeg', alt: 'Puerta de hierro decorativa' },
  { src: '/images/metal-railings.jpeg', alt: 'Barandas de hierro para segundo piso' },
  { src: '/images/metal-spiked-fence.jpeg', alt: 'Verja perimetral con puntas de hierro' },
  { src: '/images/metal-car-port.jpeg', alt: 'Estructura metálica para carport' },
  { src: '/images/metal-bunk-bed.jpeg', alt: 'Litera de hierro fabricada a medida' },
  { src: '/images/metal-garage-doors.jpeg', alt: 'Puertas de garaje de hierro' },
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
