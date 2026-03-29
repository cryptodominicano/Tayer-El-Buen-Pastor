import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Analytics from "@/components/Analytics";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto — Tayer El Buen Pastor",
  description:
    "Contáctenos para una cotización gratuita de herrería en Santo Domingo. Portones, rejas, barandas, escaleras, puertas de hierro y más. Respuesta rápida garantizada.",
};

export default function ContactoPage() {
  return (
    <>
      <Navbar />
      <Analytics />

      <main>
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
