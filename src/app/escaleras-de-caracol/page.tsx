import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import ClusterPage from "@/components/ClusterPage";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Escaleras de Caracol en Hierro — Santo Domingo | Tayer Christiano",
  description:
    "Fabricación de escaleras de caracol en hierro forjado a medida en Santo Domingo. Soluciones compactas, elegantes y seguras para espacios reducidos. Diseño personalizado e instalación profesional.",
  alternates: {
    canonical: "/escaleras-de-caracol",
  },
};

const sections = [
  {
    id: "que-son",
    title: "¿Qué es una Escalera de Caracol y Por Qué Elegirla?",
    content: `Una escalera de caracol es una estructura helicoidal que gira alrededor de un eje central, permitiendo la conexión entre niveles de una edificación en un espacio significativamente menor al que requiere una escalera convencional. En Santo Domingo, donde los terrenos urbanos son cada vez más reducidos y costosos, las escaleras de caracol en hierro se han convertido en una solución arquitectónica altamente demandada.

A diferencia de una escalera de tramos rectos que puede necesitar entre 4 y 6 metros cuadrados de superficie, una escalera de caracol bien diseñada puede ocupar tan solo 1.5 a 2.5 metros cuadrados. Esta eficiencia espacial la convierte en la opción ideal para apartamentos, locales comerciales, mezanines, accesos a azoteas y cualquier espacio donde cada metro cuadrado cuenta.

Pero la escalera de caracol no es solo una solución práctica: es una declaración de diseño. Una escalera de caracol en hierro forjado fabricada a medida se convierte en el punto focal de cualquier espacio, aportando movimiento, verticalidad y carácter escultórico. En Tayer Christiano llevamos más de veinte años fabricando escaleras de caracol en Santo Domingo, y cada una de ellas es una pieza única diseñada para las dimensiones y el estilo específico de cada proyecto.`,
  },
  {
    id: "cuando-usar",
    title: "¿Cuándo Conviene Instalar una Escalera de Caracol?",
    content: `Las escaleras de caracol no son apropiadas para todas las situaciones, pero en ciertos escenarios son la mejor opción disponible. Estos son los casos donde recomendamos su instalación:

**Espacios reducidos:** Si el hueco disponible para la escalera es menor a 2 metros de ancho, una escalera de caracol es prácticamente la única alternativa viable. Es la solución perfecta para apartamentos tipo estudio, dúplex compactos y locales comerciales con mezanine.

**Accesos a azoteas y terrazas:** En muchas viviendas y edificios de Santo Domingo, la azotea se utiliza como espacio de esparcimiento. Una escalera de caracol exterior en hierro galvanizado proporciona acceso cómodo y seguro sin sacrificar espacio interior.

**Elemento decorativo central:** Algunos clientes eligen una escalera de caracol no por limitación de espacio sino por su impacto visual. En vestíbulos, salones de doble altura y espacios comerciales, una escalera de caracol en hierro forjado con diseño ornamental se convierte en una obra de arte funcional.

**Escaleras secundarias:** En residencias que ya cuentan con una escalera principal, la escalera de caracol funciona como acceso secundario a un área de servicio, un altillo o un nivel superior privado.

**Proyectos de remodelación:** Cuando se desea agregar un nivel a una estructura existente sin modificar la distribución actual, la escalera de caracol permite la conexión vertical con intervención mínima en la planta baja.`,
  },
  {
    id: "diseno",
    title: "Proceso de Diseño: Del Concepto a los Planos",
    content: `Diseñar una escalera de caracol en hierro requiere precisión milimétrica. Un error de centímetros en el cálculo puede resultar en escalones incómodos, alturas inadecuadas o una estructura que simplemente no encaja en el espacio. Nuestro proceso de diseño elimina esos riesgos:

**Levantamiento de medidas:** Visitamos el sitio para medir el diámetro disponible, la altura piso a piso, la ubicación del punto de entrada y salida, y las obstrucciones existentes (vigas, columnas, instalaciones eléctricas). Estas medidas determinan todos los parámetros de la escalera.

**Cálculo estructural:** Con las medidas en mano, calculamos el número de escalones necesarios, el ángulo de giro entre cada escalón (generalmente entre 22 y 30 grados), la huella útil de cada peldaño, la contrahuella (altura entre escalones, idealmente entre 18 y 22 centímetros) y el diámetro del poste central.

**Propuesta de diseño:** Presentamos al cliente una propuesta que incluye el diseño de los peldaños (chapa lisa, chapa estriada, rejilla o combinación con madera), el estilo de la baranda (balaustres rectos, curvos, paneles decorativos), el tipo de pasamanos y las opciones de acabado.

**Aprobación y ajustes:** El cliente revisa la propuesta y solicita los ajustes que considere necesarios. Solo cuando el diseño está completamente aprobado procedemos a la fabricación. Este paso es fundamental porque una escalera de caracol, por su geometría compleja, no permite modificaciones sencillas una vez fabricada.`,
  },
  {
    id: "medidas",
    title: "Medidas Esenciales para su Escalera de Caracol",
    content: `Para que una escalera de caracol sea cómoda y segura, debe cumplir con ciertos parámetros dimensionales. Compartimos esta información para que nuestros clientes en Santo Domingo puedan evaluar la viabilidad de su proyecto antes de contactarnos:

**Diámetro total:** El diámetro mínimo recomendado para una escalera de caracol residencial es de 1.20 metros, aunque lo ideal es disponer de 1.40 a 1.60 metros para mayor comodidad. Para uso comercial o público, el diámetro mínimo suele ser de 1.60 metros. Escaleras puramente decorativas o de acceso esporádico (como acceso a azotea) pueden funcionar con diámetros desde 1.00 metro.

**Altura piso a piso:** Es la distancia vertical entre el nivel inferior y el nivel superior, medida desde el piso terminado. Esta medida determina la cantidad de escalones y el número de giros completos que tendrá la escalera.

**Hueco en el forjado superior:** El hueco en la losa o forjado del nivel superior debe tener un diámetro al menos 5 centímetros mayor que el diámetro de la escalera para permitir la instalación y evitar roces.

**Altura libre de paso:** En cada punto de la escalera, la distancia vertical entre un escalón y la parte inferior de la losa superior debe ser de al menos 2.00 metros para evitar golpes en la cabeza. Este es un parámetro crítico que muchos fabricantes pasan por alto.

**Sentido de giro:** Las escaleras de caracol pueden girar en sentido horario o antihorario. La elección depende de la ubicación de entrada y salida, así como de la configuración del espacio circundante.`,
  },
  {
    id: "interior-exterior",
    title: "Escaleras de Caracol para Interior y Exterior",
    content: `Las condiciones de uso determinan en gran medida los materiales y acabados que debe llevar una escalera de caracol. En Tayer Christiano fabricamos escaleras tanto para interior como para exterior, con especificaciones adaptadas a cada entorno:

**Escaleras de caracol para interior:** En espacios interiores, la escalera está protegida de la intemperie, lo que permite mayor libertad en la selección de acabados. Utilizamos hierro forjado con pintura electrostática, peldaños de chapa metálica con acabado antideslizante o combinaciones de hierro con madera de caoba, roble o pino tratado. Los diseños interiores suelen ser más elaborados, con balaustres ornamentales y pasamanos de madera torneada.

**Escaleras de caracol para exterior:** El clima de Santo Domingo exige protección reforzada contra la corrosión. Para escaleras exteriores aplicamos galvanizado en caliente como primera capa de protección, seguido de primer epóxico y acabado en pintura de poliuretano resistente a rayos UV. Los peldaños exteriores llevan superficie antideslizante obligatoria, ya sea mediante chapa estriada (lagrimada), rejilla tipo Irving o aplicación de recubrimiento texturizado.

**Escaleras mixtas:** Algunas escaleras de caracol comienzan en un espacio interior y terminan en una terraza o azotea exterior. En estos casos, aplicamos tratamientos diferenciados: acabado estándar en la sección interior y protección reforzada en la sección expuesta a la intemperie. La transición se diseña para que sea estéticamente coherente.

En ambos casos, la estructura portante de la escalera se calcula para soportar las cargas de uso con un margen de seguridad amplio. El poste central, los brazos de soporte y los peldaños se dimensionan según el diámetro y la altura de la escalera.`,
  },
  {
    id: "fabricacion",
    title: "Proceso de Fabricación Artesanal en Nuestro Taller",
    content: `La fabricación de una escalera de caracol en hierro es un proceso que combina artesanía tradicional con tecnología moderna. En nuestro taller en Santo Domingo, cada escalera se construye siguiendo una secuencia rigurosa:

**Corte de materiales:** Utilizamos maquinaria de corte con disco y plasma para obtener las piezas con precisión. El poste central se fabrica en tubo de acero de diámetro y espesor calculados según la carga. Los peldaños se cortan en chapa de acero de 3 a 6 milímetros de espesor según las especificaciones del diseño.

**Conformado de peldaños:** Cada peldaño de una escalera de caracol tiene forma de cuña o sector circular. Se cortan individualmente y se les da la curvatura necesaria. En los bordes se sueldan perfiles de refuerzo para rigidizar la pieza y evitar vibraciones durante el uso.

**Ensamblaje del poste central:** Los peldaños se sueldan al poste central respetando el ángulo de giro y la contrahuella calculados. Este ensamblaje se realiza con la escalera en posición vertical, verificando con nivel y plomada que cada peldaño quede perfectamente nivelado.

**Fabricación de la baranda:** Los balaustres y el pasamanos se fabrican por separado y se instalan una vez que la estructura de peldaños está completa. El pasamanos helicoidal se dobla en caliente para seguir la curvatura exacta de la escalera, un proceso que requiere experiencia y destreza manual.

**Acabado y protección:** Toda la estructura se somete a limpieza mecánica, aplicación de primer anticorrosivo y acabado final según lo especificado. Para escaleras exteriores, el proceso de protección es más extenso e incluye galvanizado previo.

**Transporte e instalación:** La escalera se transporta en secciones si su tamaño lo requiere y se ensambla en sitio. El poste central se ancla al piso con placa base y pernos de expansión, y la parte superior se fija a la losa o estructura existente. La instalación típica toma entre medio día y un día completo dependiendo de la complejidad.

Si está considerando una escalera de caracol en Santo Domingo, en Tayer Christiano le ofrecemos asesoría completa desde el diseño hasta la instalación. Contáctenos por WhatsApp o visite nuestro taller para conocer muestras de trabajos realizados y discutir las posibilidades para su proyecto.`,
  },
];

const faqs = [
  {
    question: "¿Cuánto espacio necesito para instalar una escalera de caracol?",
    answer:
      "El espacio mínimo requerido es un círculo de 1.20 metros de diámetro para uso residencial, aunque recomendamos al menos 1.40 metros para mayor comodidad. Esto significa que con apenas 1.5 metros cuadrados de superficie puede tener una escalera de caracol funcional. Para uso comercial o tránsito frecuente, el diámetro recomendado es de 1.60 metros o más.",
  },
  {
    question: "¿Cuánto cuesta una escalera de caracol de hierro en Santo Domingo?",
    answer:
      "El precio depende del diámetro, la altura, el diseño de la baranda y los acabados seleccionados. Una escalera de caracol estándar en hierro con acabado en pintura electrostática puede comenzar desde RD$45,000, mientras que diseños elaborados con hierro forjado ornamental y combinaciones con madera pueden superar los RD$120,000. Realizamos cotizaciones personalizadas sin compromiso.",
  },
  {
    question: "¿Una escalera de caracol es segura para niños y personas mayores?",
    answer:
      "Sí, siempre que esté bien diseñada y fabricada. Nuestras escaleras de caracol incluyen barandas con balaustres espaciados según normativa (menos de 10 cm entre barras), pasamanos ergonómicos continuos y peldaños con superficie antideslizante. Para hogares con niños pequeños, podemos agregar protecciones adicionales como puertas de seguridad en la entrada y salida de la escalera.",
  },
  {
    question: "¿Cuánto tiempo toma fabricar e instalar una escalera de caracol?",
    answer:
      "El proceso completo desde la visita de medición hasta la instalación finalizada toma entre 15 y 25 días hábiles para una escalera residencial estándar. Proyectos con diseños más elaborados o dimensiones especiales pueden requerir hasta 30 días. La instalación en sitio toma generalmente entre 4 y 8 horas.",
  },
  {
    question: "¿Se puede instalar una escalera de caracol en una construcción existente?",
    answer:
      "Sí, es una de las grandes ventajas de la escalera de caracol. Al ocupar poco espacio y apoyarse principalmente en el poste central, se puede instalar en construcciones existentes con intervención mínima. Solo se necesita un hueco circular en la losa del nivel superior (si no existe) y un punto de anclaje sólido en el piso inferior. Nuestro equipo evalúa la viabilidad estructural antes de iniciar el proyecto.",
  },
];

export default function EscalerasDeCaracolPage() {
  return (
    <>
      <Navbar />
      <Analytics />
      <main>
        <ClusterPage
          pageKey="escaleras"
          title="Escaleras de Caracol en Hierro — Santo Domingo"
          subtitle="Fabricación e instalación de escaleras de caracol en hierro forjado a medida. Soluciones compactas y elegantes para conectar niveles en espacios reducidos."
          intro="Las escaleras de caracol son la solución perfecta cuando el espacio es limitado pero la exigencia de calidad y diseño es alta. En Tayer Christiano fabricamos escaleras de caracol en hierro forjado completamente a medida, adaptadas a las dimensiones exactas de su espacio y al estilo de su propiedad en Santo Domingo. Desde escaleras compactas para acceso a azoteas hasta piezas escultóricas para vestíbulos de doble altura, cada proyecto recibe el mismo nivel de atención al detalle, precisión en la fabricación y calidad en los acabados."
          sections={sections}
          faqs={faqs}
          metaTitle="Escaleras de Caracol en Hierro — Santo Domingo | Tayer Christiano"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
