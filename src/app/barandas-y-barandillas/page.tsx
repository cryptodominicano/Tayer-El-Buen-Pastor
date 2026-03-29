import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import ClusterPage from "@/components/ClusterPage";
import Analytics from "@/components/Analytics";

export const metadata: Metadata = {
  title: "Barandas y Barandillas de Hierro en Santo Domingo | Tayer Christiano",
  description:
    "Fabricamos barandas y barandillas de hierro forjado a medida en Santo Domingo. Diseños personalizados para escaleras, balcones y terrazas con instalación profesional.",
  alternates: {
    canonical: "/barandas-y-barandillas",
  },
};

const sections = [
  {
    id: "que-son",
    title: "Barandas de Hierro: Seguridad y Elegancia para su Propiedad",
    content: `Las barandas y barandillas de hierro representan una de las soluciones más versátiles y duraderas para proteger y embellecer cualquier espacio. En Santo Domingo, donde la arquitectura combina estilos modernos con influencias coloniales, las barandas de hierro forjado se han convertido en un elemento esencial tanto en residencias como en proyectos comerciales.

Una baranda cumple dos funciones fundamentales: garantizar la seguridad de las personas y aportar un valor estético significativo a la edificación. Ya sea para una escalera interior, un balcón con vista al mar o una terraza en un segundo nivel, una baranda de hierro bien diseñada transforma por completo la apariencia de cualquier estructura.

En Tayer Christiano contamos con más de dos décadas de experiencia fabricando barandas y barandillas de hierro en Santo Domingo. Cada proyecto que realizamos parte de un diseño personalizado que se adapta a las dimensiones exactas del espacio, al estilo arquitectónico de la propiedad y a las preferencias del cliente. No trabajamos con piezas genéricas: cada baranda es una pieza única, cortada, soldada y terminada en nuestro taller.`,
  },
  {
    id: "tipos",
    title: "Tipos de Barandas que Fabricamos",
    content: `Nuestra línea de producción abarca todos los tipos de barandas que un proyecto puede requerir en República Dominicana:

**Barandas para escaleras interiores:** Son las más solicitadas. Diseñamos barandas que acompañan el recorrido de la escalera con líneas fluidas, combinando balaustres rectos, curvos o con motivos decorativos según el estilo deseado. Para escaleras de tramos rectos utilizamos paneles con patrones geométricos, mientras que para escaleras curvas fabricamos piezas que siguen la curvatura exacta del pasamanos.

**Barandas para balcones:** En Santo Domingo, los balcones son espacios de convivencia. Las barandas para balcones deben cumplir con alturas mínimas de seguridad (generalmente 1.05 metros) y resistir las condiciones climáticas tropicales. Aplicamos tratamientos anticorrosivos especiales y acabados en pintura electrostática para garantizar durabilidad frente a la humedad y la salinidad del ambiente caribeño.

**Barandas para terrazas y azoteas:** Las terrazas en niveles superiores requieren barandas robustas que soporten vientos y ofrezcan protección sin obstruir la vista. Diseñamos opciones con barras verticales espaciadas, paneles de hierro con vidrio templado o combinaciones de hierro con acero inoxidable para lograr un aspecto contemporáneo.

**Barandas para rampas y áreas comerciales:** Locales comerciales, restaurantes, hoteles y plazas comerciales en Santo Domingo confían en nuestras barandas para cumplir con códigos de construcción y normativas de accesibilidad. Fabricamos pasamanos continuos, barandas dobles y sistemas que integran señalización.`,
  },
  {
    id: "materiales",
    title: "Hierro Forjado vs. Acero Inoxidable: Ventajas de Cada Material",
    content: `Una de las preguntas más frecuentes que recibimos es sobre la diferencia entre barandas de hierro forjado y barandas de acero inoxidable. Ambos materiales tienen ventajas específicas y la elección depende del contexto del proyecto.

**Hierro forjado:** Es el material clásico por excelencia. Permite una libertad de diseño prácticamente ilimitada: volutas, hojas, flores, patrones geométricos complejos y formas orgánicas que no se pueden replicar con otros materiales. El hierro forjado aporta carácter, peso visual y una presencia imponente. Requiere un tratamiento anticorrosivo periódico, especialmente en zonas costeras de Santo Domingo, pero con el mantenimiento adecuado puede durar generaciones.

**Acero inoxidable:** Ofrece un aspecto limpio, minimalista y moderno. Es altamente resistente a la corrosión sin necesidad de pintura ni tratamientos especiales, lo que lo convierte en una opción de bajo mantenimiento. Es ideal para proyectos contemporáneos, edificios de apartamentos y espacios comerciales donde se busca una estética depurada.

**Combinaciones:** En muchos proyectos utilizamos ambos materiales. Por ejemplo, una baranda con estructura de hierro forjado y pasamanos de acero inoxidable, o balaustres de hierro con cables de acero tensado. Estas combinaciones permiten obtener lo mejor de ambos mundos: la riqueza decorativa del hierro con la practicidad del acero inoxidable.`,
  },
  {
    id: "diseno",
    title: "Proceso de Diseño y Personalización",
    content: `Cada baranda que fabricamos en Tayer Christiano pasa por un proceso de diseño detallado que garantiza un resultado impecable:

**Visita técnica y medición:** Nuestro equipo visita la propiedad en Santo Domingo o cualquier punto de República Dominicana para tomar medidas precisas. Evaluamos el tipo de superficie de anclaje (concreto, bloque, madera), la geometría del espacio y las condiciones ambientales. Esta visita es fundamental para evitar errores en la fabricación.

**Diseño personalizado:** Presentamos opciones de diseño basadas en las preferencias del cliente. Trabajamos con estilos que van desde el colonial dominicano tradicional, con volutas elaboradas y motivos florales, hasta diseños contemporáneos con líneas rectas y acabados industriales. El cliente aprueba el diseño antes de iniciar la fabricación.

**Selección de acabados:** Ofrecemos múltiples opciones de acabado: pintura electrostática en cualquier color RAL, acabado tipo óxido controlado para un aspecto rústico, galvanizado en caliente para máxima protección anticorrosiva, o combinaciones con madera y vidrio templado.

**Fabricación en taller:** Cada componente se corta, dobla, suelda y ensambla en nuestro taller con maquinaria especializada. Realizamos controles de calidad en cada etapa para asegurar que las soldaduras sean limpias, las medidas sean exactas y los acabados sean uniformes.

**Instalación profesional:** Nuestros instaladores fijan la baranda con anclajes mecánicos o químicos según el tipo de superficie, asegurando estabilidad y cumplimiento con las normativas de seguridad vigentes.`,
  },
  {
    id: "seguridad",
    title: "Normativas de Seguridad para Barandas en República Dominicana",
    content: `La instalación de barandas no es solo una cuestión estética; es un requisito de seguridad regulado por códigos de construcción. En República Dominicana, las normativas establecen parámetros que toda baranda debe cumplir:

**Altura mínima:** Las barandas en balcones, terrazas y escaleras deben tener una altura mínima que generalmente oscila entre 0.90 y 1.10 metros, dependiendo de la altura de caída. En edificios de más de tres niveles, las alturas requeridas suelen ser mayores.

**Espaciado entre balaustres:** Los espacios entre barras verticales no deben permitir el paso de una esfera de 10 centímetros de diámetro, una medida diseñada para prevenir que niños pequeños puedan pasar a través de la baranda.

**Resistencia estructural:** Las barandas deben soportar cargas horizontales y verticales específicas sin deformarse. Esto es especialmente importante en espacios públicos y comerciales donde la concentración de personas puede ser alta.

**Pasamanos:** En escaleras, el pasamanos debe ser continuo y ergonómico, permitiendo un agarre seguro. Debe extenderse más allá del primer y último escalón para facilitar el acceso.

En Tayer Christiano conocemos estas normativas a fondo y las aplicamos en cada proyecto. Nuestras barandas de hierro en Santo Domingo no solo son hermosas sino que cumplen con todos los estándares de seguridad requeridos.`,
  },
  {
    id: "mantenimiento",
    title: "Mantenimiento y Durabilidad de las Barandas de Hierro",
    content: `El clima tropical de Santo Domingo presenta desafíos específicos para cualquier estructura metálica. La humedad elevada, las lluvias frecuentes y la salinidad del aire caribeño pueden acelerar la corrosión si no se toman las precauciones adecuadas. Por eso, en Tayer Christiano aplicamos sistemas de protección multicapa desde la fabricación.

**Preparación de superficie:** Antes de aplicar cualquier acabado, limpiamos el hierro mediante granallado o cepillado mecánico para eliminar óxido, escamas de laminación y contaminantes. Una superficie bien preparada es la base de una protección duradera.

**Primer anticorrosivo:** Aplicamos una capa de primer rico en zinc o epóxico que crea una barrera química contra la oxidación. Este primer se adhiere directamente al metal limpio y proporciona protección catódica.

**Acabado final:** La capa de acabado puede ser pintura electrostática (horneada a alta temperatura para máxima adherencia), esmalte sintético de alta calidad o, en casos de máxima exigencia, galvanizado en caliente seguido de pintura.

**Mantenimiento recomendado:** Aconsejamos a nuestros clientes realizar una inspección visual cada seis meses, buscando puntos donde la pintura pueda haberse dañado por golpes o desgaste. Esas áreas deben limpiarse y retocarse con pintura anticorrosiva. Con este mantenimiento básico, una baranda de hierro fabricada por Tayer Christiano puede durar más de 25 años sin problemas estructurales.

Si necesita barandas de hierro en Santo Domingo, contáctenos para una cotización sin compromiso. Nuestro equipo le asesorará sobre el diseño, material y acabado ideal para su proyecto.`,
  },
  {
    id: "acero-inoxidable-precios",
    title: "Barandas de Acero Inoxidable: Precios y Acabados",
    content: `Además del hierro forjado tradicional, fabricamos barandas en acero inoxidable 304, el estándar de la industria para aplicaciones arquitectónicas. Este material ofrece resistencia superior a la corrosión sin necesidad de pintura, ideal para el clima húmedo de Santo Domingo y zonas costeras.

Las barandas en acero inoxidable 304 cuestan entre RD$3,300 y RD$4,600 por metro lineal, dependiendo del acabado (satinado o espejo) y el número de hilos horizontales. El acabado satinado ofrece un aspecto contemporáneo con menor mantenimiento, mientras que el acabado espejo refleja luz y aporta elegancia a espacios interiores.

Para diseños de hierros para balcones que combinan funcionalidad con estética, ofrecemos opciones mixtas: estructura de hierro forjado con pasamanos de acero inoxidable, o balaustres de acero con cables tensados que maximizan la visibilidad.`,
  },
];

const faqs = [
  {
    question: "¿Cuánto cuesta una baranda de hierro en Santo Domingo?",
    answer:
      "El precio varía según el diseño, las dimensiones y el acabado. Una baranda estándar para escalera interior puede comenzar desde RD$3,500 por metro lineal, mientras que diseños elaborados en hierro forjado con acabados especiales pueden superar los RD$8,000 por metro lineal. Ofrecemos cotizaciones personalizadas sin compromiso tras evaluar su proyecto.",
  },
  {
    question: "¿Cuánto tiempo tarda la fabricación e instalación de una baranda?",
    answer:
      "El tiempo de fabricación depende de la complejidad del diseño y la cantidad de metros lineales. En promedio, una baranda residencial tarda entre 7 y 15 días hábiles desde la aprobación del diseño hasta la instalación. Proyectos comerciales de mayor envergadura pueden requerir de 3 a 4 semanas.",
  },
  {
    question: "¿Las barandas de hierro se oxidan con el clima de Santo Domingo?",
    answer:
      "Sin protección, cualquier hierro se oxidará con el clima tropical. Sin embargo, nuestras barandas reciben un tratamiento anticorrosivo completo que incluye preparación de superficie, primer anticorrosivo y acabado en pintura electrostática o galvanizado. Con un mantenimiento mínimo (inspección y retoque cada 6-12 meses), nuestras barandas resisten la corrosión durante décadas.",
  },
  {
    question: "¿Puedo combinar hierro con vidrio o acero inoxidable en mi baranda?",
    answer:
      "Sí, fabricamos barandas mixtas que combinan hierro forjado con paneles de vidrio templado, cables de acero inoxidable o pasamanos de madera. Estas combinaciones son muy populares en proyectos modernos porque ofrecen seguridad, transparencia visual y un estilo contemporáneo.",
  },
  {
    question: "¿Qué altura debe tener una baranda de balcón en República Dominicana?",
    answer:
      "La altura mínima recomendada para barandas de balcón es de 1.05 metros medidos desde el nivel del piso terminado. En edificios de gran altura o espacios públicos, la altura puede ser mayor según las normativas locales. Nuestro equipo se asegura de que cada instalación cumpla con los códigos de construcción vigentes.",
  },
  {
    question: "¿Cuánto cuesta una baranda de acero inoxidable en Santo Domingo?",
    answer:
      "Las barandas en acero inoxidable 304 cuestan entre RD$3,300 y RD$4,600 por metro lineal, dependiendo del acabado (satinado o espejo) y el número de hilos horizontales. Es una inversión superior al hierro pero con mantenimiento prácticamente nulo y resistencia total a la corrosión.",
  },
];

export default function BarandasYBarandillasPage() {
  return (
    <>
      <Navbar />
      <Analytics />
      <main>
        <ClusterPage
          pageKey="barandas"
          title="Barandas y Barandillas de Hierro en Santo Domingo"
          subtitle="Diseño, fabricación e instalación de barandas de hierro forjado a medida para escaleras, balcones y terrazas en toda República Dominicana."
          intro="En Tayer Christiano somos especialistas en la fabricación de barandas y barandillas de hierro en Santo Domingo. Desde barandas ornamentales para residencias coloniales hasta sistemas modernos para edificios comerciales, nuestro equipo transforma el hierro en piezas funcionales y decorativas que elevan la seguridad y el valor estético de cualquier propiedad. Trabajamos con hierro forjado, acero inoxidable y combinaciones de materiales para ofrecer soluciones adaptadas a cada necesidad y presupuesto."
          sections={sections}
          faqs={faqs}
          metaTitle="Barandas y Barandillas de Hierro en Santo Domingo | Tayer Christiano"
        />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileStickyBar />
    </>
  );
}
