'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import { siteConfig } from '@/config/site.config';

const contactSchema = z.object({
  nombre: z.string().min(1, 'Requerido'),
  telefono: z.string().min(5, 'Mínimo 5 caracteres'),
  tipoTrabajo: z.string().min(1, 'Seleccione un tipo'),
  descripcion: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceTypes = [
  'Rejas para ventanas',
  'Portón residencial',
  'Barandas',
  'Escalera de caracol',
  'Verja perimetral',
  'Puertas de hierro',
  'Otro trabajo',
];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, pageUri: window.location.href }),
      });
      if (res.ok) setSubmitted(true);
    } catch (err) {
      console.error('Form error:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`;

  const handleWhatsAppClick = () => {
    window.gtag?.('event', 'whatsapp_click', { event_label: 'contact' });
  };

  const inputCls = 'w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-iron placeholder-gray-400 transition focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20';
  const labelCls = 'mb-1.5 block text-sm font-medium text-iron';

  if (submitted) {
    return (
      <section id="contacto" className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <div className="rounded-2xl bg-white p-12 shadow-lg">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-xl font-semibold text-iron">¡Mensaje enviado! Le responderemos en menos de 24 horas.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contacto" className="bg-gray-50 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <span className="section-label">Contáctenos</span>
          <h2 className="section-title">Solicite Su Cotización</h2>
          <p className="section-subtitle">Envíenos los detalles de su proyecto y le respondemos en menos de 24 horas con una cotización personalizada.</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="rounded-2xl bg-white p-8 shadow-lg md:p-12">
          <div className="mb-6">
            <label htmlFor="nombre" className={labelCls}>Nombre</label>
            <input id="nombre" type="text" placeholder="Su nombre completo" className={`${inputCls} ${errors.nombre ? 'border-red-500' : ''}`} {...register('nombre')} />
          </div>

          <div className="mb-6">
            <label htmlFor="telefono" className={labelCls}>Teléfono / WhatsApp</label>
            <input id="telefono" type="tel" placeholder="Ej: 829-570-4821" className={`${inputCls} ${errors.telefono ? 'border-red-500' : ''}`} {...register('telefono')} />
          </div>

          <div className="mb-6">
            <label htmlFor="tipoTrabajo" className={labelCls}>Tipo de Trabajo</label>
            <select id="tipoTrabajo" defaultValue="" className={`${inputCls} ${errors.tipoTrabajo ? 'border-red-500' : ''}`} {...register('tipoTrabajo')}>
              <option value="" disabled>Seleccione el tipo de trabajo</option>
              {serviceTypes.map((type) => <option key={type} value={type}>{type}</option>)}
            </select>
          </div>

          <div className="mb-8">
            <label htmlFor="descripcion" className={labelCls}>Descripción del Trabajo</label>
            <textarea id="descripcion" rows={4} placeholder="Describa el trabajo que necesita, medidas aproximadas, etc." className={inputCls} {...register('descripcion')} />
          </div>

          <div className="space-y-4">
            <button type="submit" disabled={submitting} className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed">
              {submitting ? 'Enviando...' : 'Enviar Cotización'}
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-whatsapp px-8 py-4 font-semibold text-white transition-all duration-300 hover:brightness-110"
            >
              <svg viewBox="0 0 24 24" fill="white" className="h-5 w-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              O escríbenos por WhatsApp
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
