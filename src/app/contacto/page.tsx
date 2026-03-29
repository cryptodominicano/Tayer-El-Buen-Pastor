import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Analytics from "@/components/Analytics";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Cotización de Herrería en Santo Domingo — Contacto | Tayer El Buen Pastor",
  description:
    "Solicite cotización gratuita para rejas, portones, barandas o escaleras de caracol en Santo Domingo. Respondemos en menos de 24 horas por WhatsApp. Tayer El Buen Pastor.",
  alternates: {
    canonical: "/contacto/",
  },
  openGraph: {
    title: "Cotización de Herrería en Santo Domingo — Contacto | Tayer El Buen Pastor",
    description:
      "Solicite cotización gratuita para rejas, portones, barandas o escaleras de caracol en Santo Domingo. Respondemos en menos de 24 horas por WhatsApp.",
    url: "https://tayerelbuenpastor.com/contacto/",
    siteName: "Tayer El Buen Pastor",
    locale: "es_DO",
    type: "website",
  },
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <Analytics />

      <main>
        <h1 className="sr-only">Cotización de Herrería en Santo Domingo — Contacto</h1>
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
