'use client';

const services = [
  {
    title: 'Rejas para Ventanas',
    text: 'Protege tu hogar con rejas decorativas y de seguridad para ventanas. Diseños clásicos y modernos fabricados a medida.',
    href: '/rejas-para-ventanas',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Portones Residenciales',
    text: 'Portones de hierro para entrada vehicular y peatonal. Diseños personalizados con acabado anticorrosivo de larga duración.',
    href: '/portones-residenciales',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Barandas y Barandillas',
    text: 'Barandas de hierro para escaleras, balcones y terrazas. Combinamos seguridad con elegancia en cada diseño.',
    href: '/barandas-y-barandillas',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 4h18M3 8h18M3 12h18M7 16v4M12 16v4M17 16v4" />
      </svg>
    ),
  },
  {
    title: 'Escaleras de Caracol',
    text: 'Escaleras helicoidales en hierro y acero para interiores y exteriores. Diseño arquitectónico único fabricado completamente a medida.',
    href: '/escaleras-de-caracol',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m-7-9H4m16 0h1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    title: 'Verjas Perimetrales',
    text: 'Cercas y verjas de hierro para delimitar y proteger su propiedad. Soluciones completas para residencias y negocios.',
    href: '/verjas-perimetrales',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16M8 6v12M12 6v12M16 6v12" />
      </svg>
    ),
  },
  {
    title: 'Portones Eléctricos',
    text: 'Portones automatizados con motores Powergate, G-Master y Can-Pro Wifi. Fabricamos la estructura e instalamos el motor. Todo en un solo contrato.',
    href: '/portones-electricos',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Trabajos Especiales a Medida',
    text: 'Decoraciones en hierro, estructuras metálicas, mobiliario y cualquier trabajo que pueda imaginar en hierro y acero.',
    href: '/trabajos-a-medida',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a1 1 0 010-1.42l.71-.71a1 1 0 011.42 0l3.88 3.88 8.89-8.89a1 1 0 011.42 0l.7.71a1 1 0 010 1.41l-10.5 10.5a1 1 0 01-1.42 0z" />
      </svg>
    ),
  },
  {
    title: 'Mantenimiento y Reparación',
    text: 'Reparamos rejas oxidadas, portones desalineados y barandas flojas. Pintura anticorrosiva profesional que dura hasta 10 años.',
    href: '/mantenimiento-herreria',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Lo Que Hacemos</span>
          <h2 className="section-title">Nuestros Servicios de Herrería</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <a
              key={service.href}
              href={service.href}
              className="group block rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/5"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-white">
                {service.icon}
              </div>
              <h3 className="mb-3 text-xl font-display font-bold text-iron group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.text}
              </p>
              <span className="mt-4 inline-block text-sm font-semibold text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                Ver más &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
