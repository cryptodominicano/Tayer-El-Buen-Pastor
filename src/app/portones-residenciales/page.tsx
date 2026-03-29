import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import ClusterPage from "@/components/ClusterPage";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title:
    "Portones Residenciales en Santo Domingo — Hierro y Acero a Medida",
  description:
    "Fabricaci\u00f3n e instalaci\u00f3n de portones residenciales de hierro y acero en Santo Domingo. Portones abatibles, corredizos y autom\u00e1ticos a medida. Cotizaci\u00f3n gratis.",
  alternates: {
    canonical: "/portones-residenciales",
  },
};

export default function PortonesResidencialesPage() {
  return (
    <>
      <Navbar />
      <Analytics />
      <main>
        <ClusterPage
          pageKey="portones"
          title="Portones Residenciales en Santo Domingo — Hierro y Acero a Medida"
          subtitle="Portones de hierro forjado y acero dise\u00f1ados a la medida de su residencia. Seguridad, elegancia y durabilidad garantizada."
          intro="El port\u00f3n es la carta de presentaci\u00f3n de cualquier residencia y, al mismo tiempo, su principal barrera de seguridad. En Santo Domingo, donde la protecci\u00f3n perimetral es una prioridad para todo propietario, contar con un port\u00f3n de hierro o acero fabricado a medida marca la diferencia entre una propiedad vulnerable y una verdaderamente protegida. En Tayer Christiano nos especializamos en la fabricaci\u00f3n e instalaci\u00f3n de portones residenciales que combinan la resistencia del hierro con dise\u00f1os que realzan la arquitectura de su hogar, ya sea en Naco, Bella Vista, Los Prados o cualquier sector del Gran Santo Domingo."
          sections={[
            {
              title: "\u00bfQu\u00e9 define un buen port\u00f3n residencial?",
              paragraphs: [
                "Un port\u00f3n residencial de calidad debe cumplir tres funciones simult\u00e1neas: seguridad, funcionalidad y est\u00e9tica. La seguridad se logra mediante materiales resistentes, soldaduras certificadas y un sistema de cerradura robusto. La funcionalidad depende del tipo de apertura adecuado para el espacio disponible. Y la est\u00e9tica es lo que transforma una simple barrera met\u00e1lica en un elemento arquitect\u00f3nico que a\u00f1ade valor a la propiedad.",
                "En el mercado dominicano, los portones de hierro siguen siendo la opci\u00f3n preferida por su relaci\u00f3n entre resistencia, durabilidad y costo. Un port\u00f3n de hierro bien fabricado resiste intentos de forzado, soporta el clima tropical y puede durar m\u00e1s de 30 a\u00f1os con mantenimiento b\u00e1sico.",
                "Cada propiedad tiene necesidades \u00fanicas. El ancho de la entrada vehicular, la pendiente del terreno, la frecuencia de uso y las preferencias est\u00e9ticas del propietario son factores que determinan el dise\u00f1o ideal. Por eso trabajamos exclusivamente con fabricaci\u00f3n a medida, nunca con piezas prefabricadas gen\u00e9ricas."
              ],
            },
            {
              title: "Tipos de portones: abatible vs. corredizo",
              paragraphs: [
                "Los dos tipos principales de portones residenciales en Santo Domingo son el abatible (de hojas que se abren hacia adentro o afuera) y el corredizo (que se desliza lateralmente sobre un riel). La elecci\u00f3n entre uno y otro depende fundamentalmente del espacio disponible y del uso previsto.",
                "El port\u00f3n abatible es el dise\u00f1o cl\u00e1sico, ideal para entradas amplias donde hay suficiente espacio de giro. Puede ser de una o dos hojas, y permite dise\u00f1os decorativos m\u00e1s elaborados. Es la opci\u00f3n m\u00e1s econ\u00f3mica y de mantenimiento m\u00e1s sencillo, ya que su mecanismo se limita a bisagras de alta resistencia.",
                "El port\u00f3n corredizo es la soluci\u00f3n perfecta para espacios reducidos o entradas en pendiente. Se desliza paralelo al muro perimetral y no requiere espacio de apertura frontal. Es la opci\u00f3n preferida para residenciales y condominios, y se adapta f\u00e1cilmente a sistemas de automatizaci\u00f3n con motor el\u00e9ctrico."
              ],
              listItems: [
                "Port\u00f3n abatible de una hoja: ideal para entradas peatonales y vehiculares estrechas",
                "Port\u00f3n abatible de dos hojas: cl\u00e1sico para entradas vehiculares amplias",
                "Port\u00f3n corredizo sobre riel: \u00f3ptimo para espacios limitados",
                "Port\u00f3n corredizo colgante: elimina el riel de piso para terrenos irregulares",
                "Port\u00f3n mixto: secci\u00f3n vehicular corrediza con puerta peatonal abatible integrada",
              ],
            },
            {
              title: "Materiales y construcci\u00f3n de nuestros portones",
              paragraphs: [
                "La estructura de nuestros portones residenciales se fabrica con tubos de hierro rectangular y cuadrado de calibre pesado, garantizando rigidez y resistencia al impacto. Los marcos principales utilizan tubo de 2\"x4\" o 3\"x3\" seg\u00fan las dimensiones del port\u00f3n, mientras que los elementos decorativos se forjan a partir de hierro s\u00f3lido redondo y cuadrado.",
                "Para portones de hierro en Santo Domingo, el tratamiento anticorrosivo es cr\u00edtico. La proximidad al mar y la humedad constante exigen un proceso riguroso: limpieza mec\u00e1nica de la superficie, aplicaci\u00f3n de primer rico en zinc, y m\u00ednimo dos capas de pintura esmalte industrial. Opcionalmente ofrecemos galvanizado en caliente para protecci\u00f3n m\u00e1xima.",
                "Tambi\u00e9n trabajamos portones mixtos que combinan hierro con l\u00e1minas de acero, madera tratada o vidrio templado, creando dise\u00f1os contempor\u00e1neos que ofrecen privacidad total o parcial seg\u00fan la preferencia del cliente."
              ],
              listItems: [
                "Tubo estructural de hierro de 2\"x4\" y 3\"x3\"",
                "Hierro s\u00f3lido forjado para elementos decorativos",
                "L\u00e1mina de acero calibre 16-18 para portones ciegos",
                "Bisagras industriales de bola con capacidad de carga superior",
                "Cerraduras de alta seguridad tipo multilock",
                "Ruedas industriales con rodamiento para portones corredizos",
              ],
            },
            {
              title: "Caracter\u00edsticas de seguridad integradas",
              paragraphs: [
                "Un port\u00f3n residencial es tan seguro como sus componentes m\u00e1s d\u00e9biles. Por eso, en cada proyecto integramos caracter\u00edsticas de seguridad que van m\u00e1s all\u00e1 de la simple estructura met\u00e1lica. Desde el sistema de cerradura hasta los puntos de anclaje, cada detalle est\u00e1 pensado para maximizar la protecci\u00f3n.",
                "Todos nuestros portones incluyen cerradura de alta seguridad, pasadores superiores e inferiores, y topes anti-levantamiento. Para portones corredizos, instalamos un sistema de bloqueo en el riel que impide descarrilar el port\u00f3n desde el exterior. Opcionalmente, integramos preparaci\u00f3n para sistemas de automatizaci\u00f3n y control remoto.",
                "Para residencias que requieren privacidad total, fabricamos portones ciegos con l\u00e1mina de acero que impiden la visi\u00f3n desde el exterior. Tambi\u00e9n ofrecemos dise\u00f1os semiciegos que combinan secciones opacas con secciones abiertas decorativas, logrando un balance entre privacidad y ventilaci\u00f3n."
              ],
              listItems: [
                "Cerradura multilock de doble cilindro",
                "Pasadores verticales en acero templado",
                "Sistema anti-levantamiento para portones corredizos",
                "Preparaci\u00f3n para motor de automatizaci\u00f3n",
                "Mirilla o intercomunicador integrado opcional",
              ],
            },
            {
              title: "Dise\u00f1os personalizados y opciones est\u00e9ticas",
              paragraphs: [
                "Cada residencia tiene su propia personalidad arquitect\u00f3nica, y el port\u00f3n debe ser coherente con ella. Ofrecemos una amplia variedad de estilos, desde los dise\u00f1os coloniales con arcos y volutas cl\u00e1sicas hasta las l\u00edneas limpias y minimalistas del estilo contempor\u00e1neo. Nuestro equipo de dise\u00f1o trabaja directamente con el cliente para crear el port\u00f3n perfecto.",
                "Entre las opciones m\u00e1s solicitadas en Santo Domingo se encuentran los portones con combinaci\u00f3n de hierro forjado y piedra decorativa, los dise\u00f1os con iniciales o escudo familiar incorporado, y los portones de estilo europeo con curvas elegantes. Tambi\u00e9n hemos fabricado portones inspirados en la arquitectura colonial de la Zona Colonial para propiedades en el casco hist\u00f3rico.",
                "Los precios de portones residenciales en Santo Domingo var\u00edan seg\u00fan el tama\u00f1o y la complejidad. Un port\u00f3n est\u00e1ndar de hierro para entrada vehicular parte desde RD$35,000, mientras que los dise\u00f1os elaborados con elementos forjados a mano pueden superar los RD$120,000."
              ],
            },
            {
              title: "Proceso de fabricaci\u00f3n, instalaci\u00f3n y plazos de entrega",
              paragraphs: [
                "Nuestro proceso comienza con una visita t\u00e9cnica gratuita donde evaluamos las condiciones del sitio: ancho de la entrada, tipo de muro o columnas, nivelaci\u00f3n del terreno y acceso para la instalaci\u00f3n. En esa misma visita, discutimos las preferencias de dise\u00f1o y tomamos medidas precisas.",
                "La fabricaci\u00f3n de un port\u00f3n residencial est\u00e1ndar toma entre 10 y 15 d\u00edas laborables. Portones de mayor envergadura o con dise\u00f1os art\u00edsticos complejos pueden requerir de 20 a 25 d\u00edas. Durante la fabricaci\u00f3n, el cliente recibe fotos del avance para aprobar cada etapa antes de continuar.",
                "La instalaci\u00f3n en sitio toma generalmente un d\u00eda completo. Incluye el montaje de las columnas de soporte si es necesario, la colocaci\u00f3n del port\u00f3n, la alineaci\u00f3n y nivelaci\u00f3n precisa, la instalaci\u00f3n de cerraduras y accesorios, y la verificaci\u00f3n del correcto funcionamiento de apertura y cierre. Dejamos el \u00e1rea limpia y al cliente completamente satisfecho."
              ],
              listItems: [
                "Visita t\u00e9cnica y cotizaci\u00f3n: 1-2 d\u00edas",
                "Fabricaci\u00f3n est\u00e1ndar: 10-15 d\u00edas laborables",
                "Fabricaci\u00f3n personalizada: 20-25 d\u00edas laborables",
                "Instalaci\u00f3n en sitio: 1 d\u00eda",
                "Garant\u00eda incluida: 2 a\u00f1os por defectos de fabricaci\u00f3n",
              ],
            },
          ]}
          faqs={[
            {
              q: "\u00bfCu\u00e1nto cuesta un port\u00f3n residencial de hierro en Santo Domingo?",
              a: "Los precios dependen del tama\u00f1o, tipo de apertura y complejidad del dise\u00f1o. Un port\u00f3n abatible est\u00e1ndar para entrada vehicular parte desde RD$35,000. Los portones corredizos comienzan en RD$45,000 por el riel y mecanismo adicional. Dise\u00f1os art\u00edsticos con hierro forjado a mano pueden superar los RD$120,000. Ofrecemos cotizaci\u00f3n gratuita a domicilio.",
            },
            {
              q: "\u00bfEs mejor un port\u00f3n abatible o uno corredizo?",
              a: "Depende de su espacio y necesidades. El abatible es m\u00e1s econ\u00f3mico y de mantenimiento sencillo, pero requiere espacio de giro. El corredizo es ideal para espacios reducidos y se automatiza m\u00e1s f\u00e1cilmente. En nuestra visita t\u00e9cnica evaluamos su entrada y le recomendamos la mejor opci\u00f3n.",
            },
            {
              q: "\u00bfPueden automatizar mi port\u00f3n con motor el\u00e9ctrico?",
              a: "S\u00ed, todos nuestros portones se fabrican con preparaci\u00f3n para automatizaci\u00f3n. Trabajamos con motores de marcas reconocidas que incluyen control remoto, sensor de obst\u00e1culos y bater\u00eda de respaldo para apagones. La automatizaci\u00f3n puede instalarse junto con el port\u00f3n o a\u00f1adirse posteriormente.",
            },
            {
              q: "\u00bfQu\u00e9 mantenimiento necesita un port\u00f3n de hierro?",
              a: "El mantenimiento b\u00e1sico incluye lubricar bisagras y ruedas cada 3 meses, inspeccionar puntos de soldadura y \u00f3xido trimestralmente, y repintar completamente cada 4-5 a\u00f1os. Para portones con motor, se debe revisar el sistema el\u00e9ctrico anualmente. Con estos cuidados, su port\u00f3n durar\u00e1 m\u00e1s de 30 a\u00f1os.",
            },
            {
              q: "\u00bfFabrican portones con puerta peatonal integrada?",
              a: "S\u00ed, es una de las opciones m\u00e1s solicitadas. Integramos una puerta peatonal dentro de una de las hojas del port\u00f3n, con su propia cerradura independiente. Esto permite el acceso a pie sin necesidad de abrir todo el port\u00f3n vehicular, lo que mejora la seguridad y la comodidad diaria.",
            },
          ]}
          metaTitle="Portones Residenciales en Santo Domingo — Hierro y Acero a Medida"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
