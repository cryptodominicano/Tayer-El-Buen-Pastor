'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { siteConfig } from '@/config/site.config';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const NAV_LINKS = [
  { label: 'Servicios', sectionId: 'servicios' },
  { label: 'Por Qué Elegirnos', sectionId: 'por-que' },
  { label: 'Galería', sectionId: 'galeria' },
  { label: 'Contacto', sectionId: 'contacto' },
] as const;

const SERVICE_LINKS = [
  { label: 'Rejas para Ventanas', href: '/rejas-para-ventanas' },
  { label: 'Portones Residenciales', href: '/portones-residenciales' },
  { label: 'Portones Eléctricos', href: '/portones-electricos' },
  { label: 'Barandas y Barandillas', href: '/barandas-y-barandillas' },
  { label: 'Escaleras de Caracol', href: '/escaleras-de-caracol' },
  { label: 'Verjas Perimetrales', href: '/verjas-perimetrales' },
  { label: 'Puertas de Hierro', href: '/puertas-de-hierro' },
  { label: 'Trabajos a Medida', href: '/trabajos-a-medida' },
  { label: 'Mantenimiento', href: '/mantenimiento-herreria' },
];

function WhatsAppIcon({ size = 24 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const scrollToSection = useCallback((sectionId: string) => {
    setMobileOpen(false);
    setDropdownOpen(false);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const handleDropdownEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
  };

  const whatsappMessage = encodeURIComponent(siteConfig.whatsappMessage);
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`;

  const handleWhatsAppClick = () => {
    window.gtag?.('event', 'whatsapp_click', { event_label: 'nav' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-iron shadow-lg shadow-black/20">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2" aria-label="Tayer El Buen Pastor - Inicio" onClick={() => setMobileOpen(false)}>
          <span className="text-xl sm:text-2xl font-display font-bold text-white">
            Tayer <span className="text-gold">El Buen Pastor</span>
          </span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef} onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-300 transition-colors hover:text-gold"
            >
              Servicios
              <svg className={`w-3.5 h-3.5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute left-0 top-full mt-2 w-[280px] rounded-xl bg-white shadow-2xl border border-gray-200 p-4" onMouseEnter={handleDropdownEnter} onMouseLeave={handleDropdownLeave}>
                <ul className="space-y-1">
                  {SERVICE_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="block px-3 py-2 text-sm text-gray-700 rounded-lg hover:bg-gold/10 hover:text-gold transition-colors"
                        onClick={() => setDropdownOpen(false)}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {NAV_LINKS.filter(l => l.label !== 'Servicios').map(({ label, sectionId }) => (
            <button key={sectionId} type="button" onClick={() => scrollToSection(sectionId)} className="text-sm font-medium text-gray-300 transition-colors hover:text-gold">
              {label}
            </button>
          ))}
        </div>

        {/* Desktop right section */}
        <div className="hidden items-center gap-4 lg:flex">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="group relative text-whatsapp transition-colors hover:text-green-400" aria-label="Contactar por WhatsApp">
            <WhatsAppIcon size={24} />
            <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-charcoal px-2 py-1 text-xs text-white opacity-0 shadow-lg transition-opacity group-hover:opacity-100">WhatsApp</span>
          </a>
          <button type="button" onClick={() => scrollToSection('contacto')} className="rounded-lg bg-gold px-5 py-2.5 text-sm font-semibold text-iron transition-all hover:bg-gold-300 hover:shadow-lg hover:shadow-gold/20 active:scale-[0.98]">
            Solicitar Cotización
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="text-whatsapp" aria-label="Contactar por WhatsApp">
            <WhatsAppIcon size={22} />
          </a>
          <button type="button" onClick={() => setMobileOpen((prev) => !prev)} className="text-white" aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={mobileOpen}>
            {mobileOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 top-0 z-40 bg-iron/95 backdrop-blur-sm lg:hidden overflow-y-auto" role="dialog" aria-modal="true">
          <div className="flex justify-end px-4 py-3 sm:px-6">
            <button type="button" onClick={() => setMobileOpen(false)} className="text-white" aria-label="Cerrar menú">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          </div>

          <div className="flex flex-col items-center gap-4 px-6 pt-4 pb-20">
            {/* Services expandable */}
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center gap-2 text-lg font-medium text-white transition-colors hover:text-gold"
            >
              Servicios
              <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {mobileServicesOpen && (
              <div className="w-full max-w-xs space-y-2 pl-4 border-l-2 border-gold/30">
                {SERVICE_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-sm text-white/80 hover:text-gold py-1"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {NAV_LINKS.filter(l => l.label !== 'Servicios').map(({ label, sectionId }) => (
              <button key={sectionId} type="button" onClick={() => scrollToSection(sectionId)} className="text-lg font-medium text-white transition-colors hover:text-gold">
                {label}
              </button>
            ))}

            <button type="button" onClick={() => scrollToSection('contacto')} className="mt-4 w-full max-w-xs rounded-lg bg-gold px-6 py-3 text-center text-base font-semibold text-iron transition-all hover:bg-gold-300 active:scale-[0.98]">
              Solicitar Cotización
            </button>

            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={handleWhatsAppClick} className="flex items-center gap-2 text-whatsapp transition-colors hover:text-green-400" aria-label="Contactar por WhatsApp">
              <WhatsAppIcon size={20} />
              <span className="text-sm font-medium">Escríbenos por WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
