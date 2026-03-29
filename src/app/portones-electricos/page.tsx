import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Analytics from "@/components/Analytics";
import PortonesElectricosContent from "./PortonesElectricosContent";

export const metadata: Metadata = {
  title:
    "Portones El\u00e9ctricos en Santo Domingo \u2014 Fabricaci\u00f3n e Instalaci\u00f3n con Motor | Tayer El Buen Pastor",
  description:
    "Fabricamos e instalamos portones el\u00e9ctricos en Santo Domingo. Trabajamos con motores Powergate, G-Master y Can-Pro Wifi. Cotizaci\u00f3n gratis por WhatsApp.",
  alternates: {
    canonical: "/portones-electricos",
  },
};

export default function PortonesElectricosPage() {
  return (
    <>
      <Navbar />
      <Analytics />
      <main>
        <PortonesElectricosContent />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
