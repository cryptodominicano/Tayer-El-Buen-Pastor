'use client';

const reasons = [
  {
    title: 'Más de 15 Años de Experiencia',
    text: 'Más de 15 años fabricando herrería artística en Santo Domingo. Conocemos cada detalle del oficio y lo aplicamos en cada proyecto.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Sin Subcontratistas',
    text: 'Todos los trabajos fabricados e instalados por nosotros directamente. No subcontratamos. Usted trata siempre con el maestro herrero.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: 'Garantía en Todos los Trabajos',
    text: 'Garantía en todos nuestros trabajos. Materiales de primera calidad con pintura anticorrosiva incluida en cada pieza.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Servicio en Todo Santo Domingo',
    text: 'Servicio en todo el Gran Santo Domingo: Este, Norte, Oeste y Distrito Nacional. Instalamos donde usted lo necesite.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  return (
    <section id="por-que" className="bg-offwhite py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="section-label">Nuestra Diferencia</span>
          <h2 className="section-title">¿Por Qué Elegir Tayer El Buen Pastor?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="flex gap-5 rounded-2xl bg-white p-8 border border-gray-100 shadow-sm">
              <div className="flex-shrink-0 h-14 w-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                {reason.icon}
              </div>
              <div>
                <h3 className="text-lg font-display font-bold text-iron mb-2">{reason.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{reason.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
