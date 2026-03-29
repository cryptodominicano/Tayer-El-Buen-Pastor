'use client';

const zones = [
  {
    title: 'Santo Domingo Este',
    areas: 'Los Mina, San Isidro, Boca Chica, La Romana, Juan Dolio',
    highlight: true,
  },
  {
    title: 'Santo Domingo Norte',
    areas: 'Villa Mella, Los Alcarrizos, Guaricano, Licey',
  },
  {
    title: 'Santo Domingo Oeste',
    areas: 'Haina, Pedro Brand, Los Alcarrizos',
  },
  {
    title: 'Distrito Nacional',
    areas: 'Gazcue, Naco, Piantini, Evaristo Morales, Bella Vista, Los Cacicazgos',
  },
];

export default function Zones() {
  return (
    <section className="bg-iron py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="uppercase tracking-widest text-sm text-gold font-semibold mb-4 block">Cobertura</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Servimos Todo el Gran Santo Domingo
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {zones.map((zone) => (
            <div
              key={zone.title}
              className={`rounded-2xl p-6 border ${zone.highlight ? 'border-gold/40 bg-gold/10' : 'border-white/10 bg-white/5'}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 className="text-lg font-display font-bold text-white">{zone.title}</h3>
              </div>
              <p className="text-white/70 text-sm leading-relaxed">{zone.areas}</p>
              {zone.highlight && (
                <span className="mt-3 inline-block text-xs font-semibold text-gold uppercase tracking-wider">Zona Principal</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
