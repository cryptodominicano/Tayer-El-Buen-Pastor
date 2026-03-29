import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import Analytics from "@/components/Analytics";
import PortonesElectricosContent from "./PortonesElectricosContent";

export const metadata: Metadata = {
  title: "Portones Eléctricos en Santo Domingo | Tayer El Buen Pastor",
  description:
    "Portones eléctricos con motor Powergate, G-Master o Can-Pro Wifi desde RD$16,000. Fabricamos el portón e instalamos el motor. Cotización gratis.",
  alternates: {
    canonical: "/portones-electricos/",
  },
  openGraph: {
    title: "Portones Eléctricos en Santo Domingo | Tayer El Buen Pastor",
    description:
      "Portones eléctricos con motor Powergate, G-Master o Can-Pro Wifi desde RD$16,000. Fabricamos el portón e instalamos el motor. Cotización gratis.",
    url: "https://tayerelbuenpastor.com/portones-electricos/",
    siteName: "Tayer El Buen Pastor",
    locale: "es_DO",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portones Eléctricos en Santo Domingo | Tayer El Buen Pastor",
    description:
      "Portones eléctricos con motor Powergate, G-Master o Can-Pro Wifi desde RD$16,000. Fabricamos el portón e instalamos el motor. Cotización gratis.",
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
