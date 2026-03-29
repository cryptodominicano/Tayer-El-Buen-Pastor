'use client';

import { siteConfig } from '@/config/site.config';

export default function Hero() {
  const whatsappMessage = encodeURIComponent(siteConfig.whatsappMessage);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

  return (
    <section className="relative min-h-[90vh] h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Video Background - hidden on mobile */}
      <video
        className="absolute inset-0 w-full h-full object-cover hidden md:block"
        style={{ filter: 'saturate(0.7) brightness(0.85)' }}
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/barandas-balcon-moderno.webm" type="video/webm" />
        <source src="/videos/barandas-balcon-moderno.mp4" type="video/mp4" />
      </video>

      {/* Fallback image on mobile */}
      <img
        src="/images/client/porton-ornamental-dorado.webp"
        alt="Portón ornamental de hierro con detalles dorados — Tayer El Buen Pastor, Santo Domingo"
        className="absolute inset-0 w-full h-full object-cover block md:hidden"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-iron/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center justify-center">
        <span className="uppercase tracking-widest text-sm text-gold font-semibold mb-4">
          Herrería Artística en Santo Domingo
        </span>

        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Herrería Artística en Santo Domingo
        </h1>

        <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-10">
          Fabricamos e instalamos rejas, portones, barandas y escaleras de caracol a medida. Trabajo garantizado en todo el Gran Santo Domingo.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-gold text-iron font-semibold rounded-lg hover:bg-gold/90 transition-colors text-lg"
          >
            Solicitar Cotización
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos por WhatsApp
          </a>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          {[
            'Trabajo Garantizado',
            'Diseño a Medida',
            'Santo Domingo Este y Alrededores',
            'Más de 15 Años de Experiencia',
          ].map((badge, i) => (
            <div key={i} className="flex items-center gap-2 text-white text-sm">
              <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
