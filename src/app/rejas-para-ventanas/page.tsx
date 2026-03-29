import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import ClusterPage from "@/components/ClusterPage";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title:
    "Rejas para Ventanas en Santo Domingo — Fabricaci\u00f3n e Instalaci\u00f3n",
  description:
    "Fabricaci\u00f3n e instalaci\u00f3n de rejas para ventanas en Santo Domingo. Dise\u00f1os decorativos y de seguridad en hierro forjado a medida. Cotizaci\u00f3n gratis. Llame ahora.",
  alternates: {
    canonical: "/rejas-para-ventanas",
  },
};

export default function RejasParaVentanasPage() {
  return (
    <>
      <Navbar />
      <Analytics />
      <main>
        <ClusterPage
          pageKey="rejas"
          title="Rejas para Ventanas en Santo Domingo — Fabricaci\u00f3n e Instalaci\u00f3n"
          subtitle="Proteja su hogar con rejas de hierro fabricadas a medida. Dise\u00f1os decorativos y de seguridad para todo tipo de ventanas."
          intro="En la Rep\u00fablica Dominicana, la seguridad del hogar comienza por las ventanas. Seg\u00fan estudios de seguridad residencial, aproximadamente el 85% de los intentos de intrusi\u00f3n se producen a trav\u00e9s de ventanas y puertas sin protecci\u00f3n adecuada. Las rejas para ventanas en Santo Domingo no son simplemente un accesorio: representan la primera l\u00ednea de defensa de su familia y sus bienes. En Tayer Christiano llevamos a\u00f1os fabricando e instalando rejas de hierro que combinan resistencia estructural con acabados est\u00e9ticos que realzan la fachada de cualquier propiedad, ya sea una vivienda unifamiliar en Los Alcarrizos, un apartamento en Gazcue o una residencia en Arroyo Hondo."
          sections={[
            {
              title: "\u00bfQu\u00e9 son las rejas para ventanas y por qu\u00e9 son importantes?",
              paragraphs: [
                "Las rejas para ventanas son estructuras met\u00e1licas fijadas al marco o a la pared que rodea la ventana, dise\u00f1adas para impedir el acceso no autorizado sin bloquear la ventilaci\u00f3n ni la luz natural. En Santo Domingo, donde el clima tropical invita a mantener las ventanas abiertas gran parte del a\u00f1o, contar con rejas de hierro de calidad permite disfrutar de la brisa sin comprometer la seguridad.",
                "A diferencia de otros sistemas de seguridad electr\u00f3nicos que dependen de electricidad y conexi\u00f3n a internet, las rejas funcionan las 24 horas del d\u00eda sin mantenimiento tecnol\u00f3gico. Son una inversi\u00f3n \u00fanica que protege su propiedad durante d\u00e9cadas cuando se fabrican con materiales de primera calidad y se instalan correctamente.",
                "Adem\u00e1s de su funci\u00f3n de seguridad, las rejas modernas cumplen un papel decorativo fundamental. Un dise\u00f1o bien elegido puede transformar la apariencia de toda la fachada, a\u00f1adiendo valor est\u00e9tico y econ\u00f3mico a la propiedad."
              ],
            },
            {
              title: "Por qu\u00e9 todo hogar dominicano necesita rejas de calidad",
              paragraphs: [
                "La realidad de la seguridad en la Rep\u00fablica Dominicana exige medidas preventivas concretas. Las rejas para ventanas en Santo Domingo son una inversi\u00f3n que se paga sola al evitar p\u00e9rdidas por robo y al incrementar el valor de reventa de la propiedad. Las aseguradoras incluso valoran positivamente la presencia de rejas al calcular las primas de p\u00f3lizas residenciales.",
                "En zonas urbanas como el Distrito Nacional, Santo Domingo Este y Santo Domingo Norte, la densidad poblacional hace que las viviendas en planta baja y primer piso sean especialmente vulnerables. Instalar rejas de hierro forjado en todas las ventanas accesibles es una pr\u00e1ctica est\u00e1ndar que ning\u00fan propietario responsable debe omitir.",
                "M\u00e1s all\u00e1 de la seguridad, las rejas tambi\u00e9n ofrecen protecci\u00f3n contra accidentes dom\u00e9sticos, especialmente en hogares con ni\u00f1os peque\u00f1os, al prevenir ca\u00eddas desde ventanas elevadas."
              ],
              listItems: [
                "Disuasi\u00f3n visual inmediata contra intrusos",
                "Protecci\u00f3n permanente sin consumo el\u00e9ctrico",
                "Aumento del valor de la propiedad entre un 5% y un 10%",
                "Seguridad para ni\u00f1os y mascotas en pisos altos",
                "Reducci\u00f3n de primas de seguros residenciales",
              ],
            },
            {
              title: "Tipos de rejas para ventanas que fabricamos",
              paragraphs: [
                "En Tayer Christiano ofrecemos tres categor\u00edas principales de rejas para ventanas, cada una adaptada a diferentes necesidades y presupuestos. Nuestro equipo de herreros trabaja tanto con dise\u00f1os est\u00e1ndar como con proyectos completamente personalizados.",
                "Las rejas simples o rectas son la opci\u00f3n m\u00e1s econ\u00f3mica, compuestas por barras verticales u horizontales equidistantes. Las rejas decorativas incorporan volutas, curvas y elementos ornamentales que embellecen la fachada. Finalmente, las rejas art\u00edsticas son piezas \u00fanicas de hierro forjado con dise\u00f1os elaborados que pueden incluir motivos florales, geom\u00e9tricos o escudos familiares."
              ],
              listItems: [
                "Rejas simples (barras rectas): desde RD$4,000 por ventana est\u00e1ndar",
                "Rejas decorativas con volutas: desde RD$6,500 por ventana est\u00e1ndar",
                "Rejas art\u00edsticas de hierro forjado: desde RD$8,500 hasta RD$10,000+",
                "Rejas con sistema abatible para salida de emergencia",
                "Rejas fijas empotradas en muro para m\u00e1xima seguridad",
              ],
            },
            {
              title: "Materiales y acabados de nuestras rejas",
              paragraphs: [
                "La durabilidad de una reja depende directamente de la calidad del material y del tratamiento anticorrosi\u00f3n aplicado. En Santo Domingo, la humedad salina del Caribe acelera la oxidaci\u00f3n del metal, por lo que utilizar materiales certificados y aplicar acabados protectores no es opcional: es indispensable.",
                "Trabajamos principalmente con hierro s\u00f3lido de diferentes calibres, seleccionando el grosor seg\u00fan la ubicaci\u00f3n de la ventana y el nivel de seguridad requerido. Tambi\u00e9n ofrecemos opciones en acero inoxidable para ambientes costeros donde la corrosi\u00f3n es a\u00fan m\u00e1s agresiva.",
                "Todos nuestros trabajos incluyen un proceso de preparaci\u00f3n de superficie, aplicaci\u00f3n de primer anticorrosivo y pintura de acabado. Ofrecemos esmalte industrial en una amplia gama de colores, as\u00ed como acabado tipo forja envejecida para un aspecto r\u00fastico elegante."
              ],
              listItems: [
                "Hierro s\u00f3lido redondo y cuadrado de 1/2\" a 3/4\"",
                "Platinas y tubos estructurales para marcos reforzados",
                "Primer anticorrosivo de alta adherencia",
                "Pintura esmalte industrial resistente a rayos UV",
                "Opci\u00f3n de acabado galvanizado en caliente",
              ],
            },
            {
              title: "Proceso de instalaci\u00f3n profesional",
              paragraphs: [
                "La instalaci\u00f3n de rejas para ventanas en Santo Domingo requiere precisi\u00f3n y conocimiento de los diferentes tipos de construcci\u00f3n dominicana. Nuestro proceso comienza con una visita t\u00e9cnica gratuita donde medimos cada ventana, evaluamos el tipo de pared (block, hormig\u00f3n, piedra) y acordamos el dise\u00f1o con el cliente.",
                "La fabricaci\u00f3n se realiza en nuestro taller, donde cada pieza se corta, suelda y pule con precisi\u00f3n. Una vez terminada, la reja recibe el tratamiento anticorrosivo completo antes de ser transportada al lugar de instalaci\u00f3n. El anclaje se realiza con pernos de expansi\u00f3n o varillas empotradas en la pared, seg\u00fan las condiciones estructurales.",
                "El tiempo promedio desde la medici\u00f3n hasta la instalaci\u00f3n es de 5 a 10 d\u00edas laborables, dependiendo de la cantidad de ventanas y la complejidad del dise\u00f1o. Para proyectos urgentes ofrecemos servicio express con entrega en 3 d\u00edas."
              ],
              listItems: [
                "Visita t\u00e9cnica y medici\u00f3n sin costo",
                "Fabricaci\u00f3n en taller con soldadura certificada",
                "Tratamiento anticorrosivo de doble capa",
                "Instalaci\u00f3n con anclaje estructural reforzado",
                "Limpieza del \u00e1rea de trabajo al finalizar",
              ],
            },
            {
              title: "Mantenimiento para prolongar la vida \u00fatil de sus rejas",
              paragraphs: [
                "Con el mantenimiento adecuado, unas rejas de hierro bien fabricadas pueden durar m\u00e1s de 25 a\u00f1os en perfecto estado. El clima h\u00famedo de Santo Domingo exige una rutina de cuidado sencilla pero constante para evitar la corrosi\u00f3n prematura.",
                "Recomendamos una inspecci\u00f3n visual cada tres meses para detectar puntos de \u00f3xido incipiente. Si aparecen, basta con lijar suavemente el \u00e1rea afectada y aplicar una capa de pintura anticorrosiva. Una repintura completa cada 3 a 5 a\u00f1os mantiene las rejas como nuevas y renueva la protecci\u00f3n contra los elementos.",
                "Tambi\u00e9n ofrecemos un servicio de mantenimiento profesional que incluye limpieza profunda, eliminaci\u00f3n de \u00f3xido, aplicaci\u00f3n de primer y repintado completo. Es una inversi\u00f3n peque\u00f1a comparada con el costo de reemplazar rejas deterioradas.",
                "\u00bfSus rejas actuales necesitan mantenimiento? Ofrecemos servicio de reparaci\u00f3n y pintura anticorrosiva profesional. Visite nuestra <a href='/mantenimiento-herreria'>p\u00e1gina de mantenimiento de herrer\u00eda</a> para m\u00e1s informaci\u00f3n."
              ],
              listItems: [
                "Inspecci\u00f3n visual trimestral de puntos de soldadura",
                "Limpieza con agua y jab\u00f3n suave mensualmente",
                "Retoque de pintura en zonas da\u00f1adas de inmediato",
                "Repintado completo cada 3-5 a\u00f1os",
                "Lubricaci\u00f3n de bisagras en rejas abatibles",
              ],
            },
            {
              title: "Precios de Rejas para Ventanas en Santo Domingo",
              paragraphs: [
                "Una reja estándar para ventana cuesta entre RD$4,000 y RD$10,000 por unidad, dependiendo del diseño, las dimensiones y el material. Un proyecto completo de 12 ventanas más balcón con hierro galvanizado e instalación incluida puede rondar los RD$260,000. En Tayer El Buen Pastor le damos cotización exacta según las medidas de su propiedad.",
                "El hierro negro es el material más económico pero se oxida rápidamente en el clima húmedo de Santo Domingo si no recibe protección adecuada. Por eso en nuestro taller trabajamos preferiblemente con hierro galvanizado como estándar — el recubrimiento de zinc agrega años de vida útil antes de necesitar pintura. Para el acabado final utilizamos un sistema de doble barrera: primer epóxico + poliuretano, que protege las rejas entre 5 y 10 años incluso en zonas costeras.",
                "En República Dominicana, \"poner los hierros\" a la casa es una de las primeras inversiones que hace todo propietario. Ya sea que busque \"hierros para las ventanas\" o una protección completa para su residencia, fabricamos los hierros para la casa dominicana con la calidad y el diseño que su hogar merece."
              ],
            },
          ]}
          faqs={[
            {
              q: "\u00bfCu\u00e1nto cuestan las rejas para ventanas en Santo Domingo?",
              a: "El precio var\u00eda seg\u00fan el tama\u00f1o de la ventana, el dise\u00f1o y los materiales. Las rejas simples comienzan desde RD$4,000 por ventana est\u00e1ndar, mientras que los dise\u00f1os decorativos y art\u00edsticos pueden alcanzar los RD$10,000 o m\u00e1s. Ofrecemos cotizaci\u00f3n gratuita a domicilio para darle un precio exacto.",
            },
            {
              q: "\u00bfCu\u00e1nto tiempo tarda la fabricaci\u00f3n e instalaci\u00f3n de rejas?",
              a: "El plazo est\u00e1ndar es de 5 a 10 d\u00edas laborables desde la medici\u00f3n hasta la instalaci\u00f3n terminada. Para proyectos de una o dos ventanas con dise\u00f1o sencillo, podemos entregar en tan solo 3 d\u00edas con nuestro servicio express.",
            },
            {
              q: "\u00bfLas rejas pueden tener una salida de emergencia?",
              a: "S\u00ed, fabricamos rejas con sistema abatible o con secci\u00f3n removible que permite la evacuaci\u00f3n en caso de emergencia. Estas rejas cuentan con un mecanismo de apertura r\u00e1pida desde el interior que no compromete la seguridad exterior. Es una opci\u00f3n muy recomendada para dormitorios.",
            },
            {
              q: "\u00bfQu\u00e9 tipo de reja es mejor para un apartamento en piso alto?",
              a: "Para apartamentos en pisos altos donde la prioridad es la protecci\u00f3n contra ca\u00eddas m\u00e1s que contra intrusos, recomendamos rejas de barras verticales con separaci\u00f3n no mayor a 10 cent\u00edmetros. Pueden ser de dise\u00f1o m\u00e1s ligero y decorativo, lo que reduce el costo y mejora la est\u00e9tica.",
            },
            {
              q: "\u00bfOfrecen garant\u00eda en las rejas para ventanas?",
              a: "S\u00ed, todas nuestras rejas incluyen garant\u00eda de 2 a\u00f1os contra defectos de fabricaci\u00f3n y soldadura. La garant\u00eda cubre desprendimiento de pintura prematuro, fallas en puntos de soldadura y deformaciones no causadas por impacto externo. Adem\u00e1s, ofrecemos servicio post-venta para mantenimiento y reparaciones.",
            },
            {
              q: "\u00bfCu\u00e1nto cuesta una reja para ventana en Santo Domingo?",
              a: "Una reja est\u00e1ndar para ventana cuesta entre RD$4,000 y RD$10,000 por unidad, dependiendo del dise\u00f1o y el material. Proyectos completos con 12 ventanas y balc\u00f3n rondan los RD$260,000 con hierro galvanizado e instalaci\u00f3n incluida. Cont\u00e1ctenos por WhatsApp para una cotizaci\u00f3n exacta seg\u00fan las medidas de su propiedad.",
            },
          ]}
          metaTitle="Rejas para Ventanas en Santo Domingo — Fabricaci\u00f3n e Instalaci\u00f3n"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
