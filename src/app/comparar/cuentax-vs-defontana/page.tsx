import { ComparisonPageLayout } from "@/components/comparison-page-layout";

const COMPARISON_ROWS = [
  { feature: "Contabilidad completa", values: ["yes", "yes"] },
  { feature: "Remuneraciones", values: ["yes", "yes"] },
  { feature: "Facturacion electronica SII", values: ["yes", "yes"] },
  { feature: "ERP completo", values: ["Contabilidad + RRHH", "ERP full"] },
  { feature: "Facilidad de uso", values: ["Muy facil", "Complejo"] },
  { feature: "Tiempo de implementacion", values: ["1 dia", "2-8 semanas"] },
  { feature: "Capacitacion necesaria", values: ["Minima", "Extensa"] },
  { feature: "Multi-empresa", values: ["yes", "yes"] },
  { feature: "Operacion Renta", values: ["yes", "partial"] },
  { feature: "API moderna (REST)", values: ["yes", "partial"] },
  { feature: "Interfaz moderna", values: ["yes", "no"] },
  { feature: "Soporte incluido", values: ["yes", "Costo adicional"] },
  { feature: "Costos ocultos", values: ["no", "Implementacion + capacitacion"] },
  { feature: "Ideal para PYMEs", values: ["yes", "Empresas grandes"] },
];

const DIFFERENTIATORS = [
  {
    title: "Simple de verdad",
    description:
      "Defontana es un ERP corporativo con cientos de modulos. CuentaX te da exactamente lo que una PYME necesita, sin la complejidad innecesaria.",
  },
  {
    title: "Listo en un dia",
    description:
      "Mientras Defontana requiere semanas de implementacion y consultoria, con CuentaX empiezas a trabajar el mismo dia que te registras.",
  },
  {
    title: "Sin costos ocultos",
    description:
      "Defontana cobra por implementacion, capacitacion y soporte premium. CuentaX incluye todo en un precio transparente.",
  },
  {
    title: "Precio accesible para PYMEs",
    description:
      "Defontana esta pensado para empresas medianas y grandes. Su precio refleja eso. CuentaX esta disenado para el presupuesto de una PYME.",
  },
  {
    title: "Sin capacitacion extensa",
    description:
      "La interfaz de CuentaX es tan intuitiva que tu equipo puede usarla desde el dia uno sin necesidad de horas de capacitacion.",
  },
  {
    title: "Soporte real incluido",
    description:
      "En Defontana el soporte premium es un costo adicional. En CuentaX, el soporte humano viene incluido en todos los planes.",
  },
];

export default function CuentaxVsDefontanaPage() {
  return (
    <ComparisonPageLayout
      heroBadge="Comparacion detallada"
      heroTitle="CuentaX vs Defontana: La misma potencia, menos complejidad"
      heroSubtitle="Defontana es un ERP poderoso, pero es complejo y costoso para PYMEs. CuentaX ofrece lo esencial a una fraccion del precio."
      comparisonHeaders={["Funcionalidad", "CuentaX", "Defontana"]}
      comparisonRows={COMPARISON_ROWS}
      differentiators={DIFFERENTIATORS}
      pricingComparison={{
        cuentax: "0,99",
        competitor: "3,0+",
        competitorName: "Defontana",
      }}
      whySwitch={{
        title: "Por que PYMEs migran de Defontana a CuentaX",
        points: [
          "Precio hasta 70% menor sin sacrificar las funcionalidades esenciales de contabilidad y remuneraciones.",
          "Implementacion inmediata: sin semanas de consultoria ni capacitaciones costosas.",
          "Interfaz moderna y facil de usar que no requiere un manual de 200 paginas.",
          "Todo incluido en el precio: soporte, actualizaciones, migracion.",
          "Pensado para PYMEs chilenas, no para corporaciones multinacionales.",
          "Migracion gratuita y asistida desde Defontana.",
        ],
      }}
      ctaTitle="Simplifica tu contabilidad. Migra de Defontana a CuentaX."
      ctaSubtitle="Menos complejidad, mismo poder. Te ayudamos a migrar gratis."
      ctaButtonText="Solicitar migracion gratuita"
      ctaButtonHref="/contacto?from=defontana"
    />
  );
}
