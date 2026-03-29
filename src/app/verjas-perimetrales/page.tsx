import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import ClusterPage from "@/components/ClusterPage";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Verjas Perimetrales de Hierro en Santo Domingo | Tayer Christiano",
  description:
    "Fabricamos e instalamos verjas de hierro en Santo Domingo para residencias y comercios. Diseños personalizados, materiales duraderos y máxima seguridad perimetral. Cotización gratis.",
  alternates: {
    canonical: "/verjas-perimetrales",
  },
};

const sections = [
  {
    id: "seguridad-perimetral",
    heading: "Seguridad Perimetral con Verjas de Hierro en Santo Domingo",
    content: `La protección de una propiedad comienza en su perímetro. En Santo Domingo, donde la seguridad es una prioridad para familias y negocios, las verjas de hierro representan la solución más confiable y duradera del mercado. A diferencia de cercas de alambre o muros ciegos, las verjas perimetrales de hierro forjado ofrecen una barrera física robusta sin sacrificar la visibilidad ni la estética de la propiedad.

Nuestras verjas de hierro en Santo Domingo están fabricadas con perfiles estructurales de acero de alta resistencia, tratados con procesos anticorrosión que garantizan décadas de vida útil incluso bajo el clima tropical dominicano. Cada proyecto parte de un levantamiento técnico del terreno donde evaluamos pendientes, tipo de suelo, puntos de acceso y necesidades específicas del cliente. El resultado es un sistema perimetral que combina función disuasoria, resistencia ante impactos y una presencia visual imponente que eleva el valor de cualquier inmueble.`,
  },
  {
    id: "residencial-vs-comercial",
    heading: "Verjas Residenciales vs. Comerciales: Diferencias Clave",
    content: `No todas las verjas perimetrales cumplen el mismo propósito. En el ámbito residencial, el diseño busca equilibrar seguridad con elegancia: líneas curvas, remates decorativos en punta de lanza, combinaciones de barrotes verticales con motivos ornamentales y acabados en pintura electrostática que armonizan con la fachada de la vivienda. Trabajamos alturas desde 1.80 m hasta 2.40 m según las normativas municipales y las preferencias del propietario.

Para proyectos comerciales e industriales en Santo Domingo, la prioridad cambia hacia la máxima disuasión y resistencia. Utilizamos perfiles de mayor calibre, espaciados más cerrados entre barrotes, y sistemas anti-escalada como puntas o concertinas integradas en la parte superior. En naves industriales, plazas comerciales y estacionamientos, nuestras verjas de hierro incorporan refuerzos horizontales adicionales y bases de anclaje sobredimensionadas para soportar intentos de forzamiento. Además, diseñamos paneles modulares que facilitan el mantenimiento y la reposición de secciones individuales sin afectar el resto de la instalación.`,
  },
  {
    id: "disenos-estilos",
    heading: "Diseños y Estilos de Verjas de Hierro Disponibles",
    content: `La versatilidad del hierro forjado permite una gama casi ilimitada de diseños. En Tayer Christiano ofrecemos líneas predefinidas y también diseños totalmente personalizados para verjas de hierro en Santo Domingo:

Los diseños clásicos incluyen barrotes verticales lisos con terminaciones en punta de lanza, ideales para residencias que buscan un aspecto tradicional y sobrio. Los diseños contemporáneos apuestan por líneas geométricas rectas, combinaciones de barrotes planos y tubulares, y acabados minimalistas en negro mate o grafito que se integran perfectamente con arquitectura moderna.

Para quienes desean un toque artístico, realizamos trabajos con volutas, hojas de acanto, medallones centrales y otros elementos ornamentales forjados a mano. Estos detalles convierten la verja perimetral en una pieza decorativa que distingue la propiedad.

También ofrecemos verjas mixtas que combinan hierro con otros materiales: paneles de vidrio templado para mayor visibilidad, piedra natural en las columnas de soporte, o madera tratada como elemento decorativo intermedio. Cada combinación se diseña respetando la integridad estructural del sistema y garantizando que la seguridad nunca se vea comprometida por la estética.`,
  },
  {
    id: "postes-rieles-estructura",
    heading: "Postes, Rieles y Estructura: Anatomía de una Verja Durable",
    content: `La durabilidad de una verja perimetral depende de la calidad de cada componente estructural. Nuestros postes principales se fabrican en tubo estructural cuadrado o rectangular de calibre pesado, anclados al suelo mediante platinas de acero soldadas y pernos de expansión embebidos en dados de concreto armado. En terrenos con pendiente, cada poste se nivela individualmente para mantener la línea superior de la verja uniforme.

Los rieles horizontales — superior e inferior — funcionan como la columna vertebral que mantiene los barrotes alineados y distribuye las cargas laterales. Utilizamos perfiles rectangulares de acero laminado en caliente, soldados a los postes con cordones de soldadura continua que superan las pruebas de resistencia requeridas. En verjas de mayor altura, incorporamos un riel intermedio que previene la flexión de los barrotes y aumenta la rigidez general del panel.

Todo el conjunto recibe un tratamiento de superficie que incluye limpieza mecánica, aplicación de primer anticorrosivo rico en zinc, y dos capas de esmalte poliuretano resistente a rayos UV. Este sistema de pintura, aplicado en nuestro taller de Santo Domingo antes de la instalación, protege el hierro contra la humedad, la salinidad y la oxidación durante años.`,
  },
  {
    id: "integracion-portones",
    heading: "Integración con Portones y Sistemas de Acceso",
    content: `Una verja perimetral alcanza su máximo potencial cuando se integra correctamente con portones de acceso vehicular y peatonal. Diseñamos ambos elementos como un sistema unificado: misma línea estética, mismos acabados y transiciones fluidas entre la sección fija y las hojas móviles del portón.

Para el acceso vehicular, ofrecemos portones correderos sobre riel de piso o aéreos, y portones batientes de una o dos hojas. La elección depende del espacio disponible, la frecuencia de uso y el nivel de automatización deseado. Todos nuestros portones de hierro admiten la instalación de motores eléctricos, fotoceldas de seguridad, controles remotos y sistemas de intercomunicación con video.

El acceso peatonal se resuelve con puertas integradas en la verja, ya sea como una sección abatible con cerradura de alta seguridad o como un portillo independiente junto al portón principal. En proyectos residenciales de Santo Domingo, recomendamos cerraduras electromagnéticas compatibles con sistemas de control de acceso por tarjeta, huella dactilar o aplicación móvil, sumando tecnología a la solidez del hierro forjado.`,
  },
  {
    id: "proceso-instalacion",
    heading: "Nuestro Proceso de Fabricación e Instalación",
    content: `Cada proyecto de verjas de hierro en Santo Domingo que realizamos sigue un proceso estructurado en cinco etapas. Primero, la visita técnica: nuestro equipo acude a la propiedad para tomar medidas exactas, evaluar condiciones del terreno y discutir preferencias de diseño con el cliente. Segundo, el diseño y presupuesto: elaboramos planos detallados y un presupuesto transparente sin costos ocultos.

La tercera etapa es la fabricación en taller. Todos los cortes, soldaduras, acabados decorativos y tratamientos de superficie se realizan en nuestras instalaciones bajo condiciones controladas. Esto garantiza calidad uniforme y minimiza imprevistos durante la instalación. Cuarto, el transporte e instalación: llevamos los paneles prefabricados al sitio y los montamos siguiendo las especificaciones del plano. Los anclajes se instalan con concreto de alta resistencia y se verifican los niveles y alineaciones.

Finalmente, la quinta etapa es la revisión y entrega. Inspeccionamos cada soldadura, cada unión y cada acabado. Retocamos cualquier imperfección y entregamos la verja con una garantía por escrito que cubre estructura, soldaduras y acabados. Desde la primera visita hasta la entrega final, mantenemos comunicación constante con el cliente para que esté informado en cada paso del proceso.`,
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta instalar verjas de hierro en Santo Domingo?",
    answer:
      "El precio varía según el metraje lineal, la altura, el diseño y los acabados seleccionados. Un presupuesto residencial estándar parte desde RD$3,500 por metro lineal para diseños sencillos. Ofrecemos cotización gratuita y sin compromiso visitando su propiedad para darle un precio exacto.",
  },
  {
    question: "¿Qué mantenimiento necesitan las verjas perimetrales de hierro?",
    answer:
      "Recomendamos una limpieza con agua y jabón suave cada tres meses para remover polvo y residuos. Cada dos a tres años conviene aplicar una capa de esmalte protector, especialmente en zonas cercanas al mar. Con este mantenimiento básico, nuestras verjas mantienen su aspecto y resistencia durante décadas.",
  },
  {
    question: "¿Cuánto tiempo toma fabricar e instalar una verja perimetral completa?",
    answer:
      "Para una residencia promedio de 30 a 50 metros lineales, el proceso completo desde la visita técnica hasta la instalación toma entre 3 y 4 semanas. Proyectos comerciales de mayor envergadura pueden requerir de 5 a 8 semanas dependiendo de la complejidad del diseño y las condiciones del terreno.",
  },
  {
    question: "¿Las verjas de hierro se oxidan con el clima de Santo Domingo?",
    answer:
      "No si reciben el tratamiento adecuado. Todas nuestras verjas pasan por un proceso de limpieza, aplicación de primer anticorrosivo rico en zinc y doble capa de esmalte poliuretano resistente a UV y humedad. Este sistema de protección está diseñado específicamente para las condiciones tropicales y salinas del Caribe dominicano.",
  },
  {
    question: "¿Pueden fabricar una verja que combine hierro con otros materiales?",
    answer:
      "Sí. Trabajamos diseños mixtos que integran hierro forjado con vidrio templado, piedra natural, madera tratada o paneles de aluminio. Cada combinación se evalúa estructuralmente para garantizar que la seguridad y la durabilidad no se vean afectadas. Consúltenos su idea y le presentamos opciones viables.",
  },
];

export default function VerjaPerimetralesPage() {
  return (
    <>
      <Navbar />
      <Analytics />
      <main>
        <ClusterPage
          pageKey="verjas"
          title="Verjas Perimetrales de Hierro en Santo Domingo"
          subtitle="Protección perimetral robusta con diseño personalizado para residencias y comercios"
          intro="En Tayer Christiano somos especialistas en la fabricación e instalación de verjas de hierro en Santo Domingo. Combinamos acero de alta resistencia, tratamientos anticorrosión de última generación y diseños que se adaptan a la arquitectura de su propiedad. Ya sea para proteger su hogar, negocio o proyecto industrial, nuestras verjas perimetrales ofrecen seguridad real sin renunciar a la estética."
          sections={sections}
          faqs={faqs}
          metaTitle="Verjas Perimetrales de Hierro en Santo Domingo | Tayer Christiano"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
