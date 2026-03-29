import type { Metadata } from 'next';
import GalleryContent from './GalleryContent';

export const metadata: Metadata = {
  title: 'Galería de Trabajos de Herrería — Tayer El Buen Pastor, Santo Domingo',
  description: 'Vea trabajos reales de herrería en Santo Domingo: rejas para ventanas, portones decorativos, barandas, escaleras de caracol y proyectos especiales. Fotos de proyectos completados por Tayer El Buen Pastor.',
  alternates: {
    canonical: '/galeria/',
  },
  openGraph: {
    title: 'Galería de Trabajos de Herrería — Tayer El Buen Pastor',
    description: 'Fotos reales de rejas, portones, barandas, escaleras y trabajos especiales en hierro. Santo Domingo.',
    url: 'https://tayerelbuenpastor.com/galeria/',
    siteName: 'Tayer El Buen Pastor',
    locale: 'es_DO',
    type: 'website',
  },
};

export default function GaleriaPage() {
  return <GalleryContent />;
}
