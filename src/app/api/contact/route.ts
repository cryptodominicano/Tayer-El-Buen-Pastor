import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

async function sendViaResend(body: Record<string, string>) {
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.startsWith('re_placeholder')) {
    console.warn('Resend API key not configured');
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { nombre, telefono, tipoTrabajo, descripcion } = body;

  const htmlContent = `
    <h2>Nueva Solicitud de Cotización — Tayer El Buen Pastor</h2>
    <table style="border-collapse: collapse; width: 100%;">
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Nombre</td><td style="padding: 8px; border: 1px solid #ddd;">${nombre}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Teléfono/WhatsApp</td><td style="padding: 8px; border: 1px solid #ddd;">${telefono}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Tipo de Trabajo</td><td style="padding: 8px; border: 1px solid #ddd;">${tipoTrabajo}</td></tr>
      <tr><td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Descripción</td><td style="padding: 8px; border: 1px solid #ddd;">${descripcion || 'Sin descripción'}</td></tr>
    </table>
  `;

  await resend.emails.send({
    from: 'Tayer El Buen Pastor <noreply@tayerelbuenpastor.com>',
    to: ['info@tayerelbuenpastor.com'],
    subject: `Nueva Cotización: ${nombre} - ${tipoTrabajo}`,
    html: htmlContent,
  });
}

async function sendViaHubSpot(body: Record<string, string>) {
  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formId = process.env.HUBSPOT_FORM_ID;

  const hubspotPayload = {
    fields: [
      { name: 'firstname', value: body.nombre || '' },
      { name: 'phone', value: body.telefono || '' },
      { name: 'service_type', value: body.tipoTrabajo || '' },
      { name: 'message', value: body.descripcion || '' },
    ],
    context: {
      pageUri: body.pageUri || 'https://tayerelbuenpastor.com/',
      pageName: 'Tayer El Buen Pastor — Formulario de Contacto',
    },
  };

  const response = await fetch(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(hubspotPayload),
    }
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`HubSpot submission failed: ${response.status} ${errorText}`);
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const portalId = process.env.HUBSPOT_PORTAL_ID;
    const hubspotConfigured = portalId && portalId !== 'PLACEHOLDER' && portalId !== 'YOUR_PORTAL_ID_HERE';

    if (hubspotConfigured) {
      await Promise.all([
        sendViaHubSpot(body),
        sendViaResend(body),
      ]);
    } else {
      await sendViaResend(body);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
