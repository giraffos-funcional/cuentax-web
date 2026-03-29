import { ComparisonPageLayout } from "@/components/comparison-page-layout";

const COMPARISON_ROWS = [
  { feature: "Contabilidad completa", values: ["yes", "yes"] },
  { feature: "Remuneraciones integradas", values: ["yes", "partial"] },
  { feature: "Facturacion electronica SII", values: ["yes", "yes"] },
  { feature: "Libro de compras y ventas", values: ["yes", "yes"] },
  { feature: "Declaracion F29", values: ["yes", "yes"] },
  { feature: "Operacion Renta automatizada", values: ["yes", "no"] },
  { feature: "Conciliacion bancaria", values: ["yes", "yes"] },
  { feature: "Multi-empresa", values: ["yes", "no"] },
  { feature: "Portal para contadores", values: ["yes", "no"] },
  { feature: "Previred automatico", values: ["yes", "no"] },
  { feature: "API de integracion", values: ["yes", "partial"] },
  { feature: "App movil", values: ["Proximamente", "no"] },
  { feature: "Interfaz moderna", values: ["yes", "no"] },
  { feature: "Migracion gratuita", values: ["yes", "no"] },
  { feature: "Soporte chat en vivo", values: ["yes", "yes"] },
];

const DIFFERENTIATORS = [
  {
    title: "Remuneraciones integradas de verdad",
    description:
      "En Nubox, remuneraciones es un modulo aparte con costo adicional. En CuentaX, viene integrado desde el plan Pro.",
  },
  {
    title: "Multi-empresa sin complicaciones",
    description:
      "Administra todas tus empresas desde un solo dashboard. En Nubox necesitas licencias separadas para cada RUT.",
  },
  {
    title: "Operacion Renta automatizada",
    description:
      "CuentaX genera tu Operacion Renta automaticamente con los datos del ano. Nubox no ofrece esta funcionalidad.",
  },
  {
    title: "Interfaz del siglo XXI",
    description:
      "Disenada en 2025 con tecnologia moderna. Nubox arrastra una interfaz que no ha cambiado significativamente en anos.",
  },
  {
    title: "Previred automatico",
    description:
      "Genera y envia tu archivo Previred con un clic. En Nubox tienes que exportar manualmente y subirlo.",
  },
  {
    title: "Migracion gratis y asistida",
    description:
      "Nuestro equipo migra tus datos desde Nubox sin costo. Importamos clientes, proveedores, plan de cuentas y saldos.",
  },
];

export default function CuentaxVsNuboxPage() {
  return (
    <ComparisonPageLayout
      heroBadge="Comparacion detallada"
      heroTitle="CuentaX vs Nubox: Cual es mejor para tu PYME?"
      heroSubtitle="Ambos son software de contabilidad chilenos, pero CuentaX ofrece mas funcionalidades a un precio menor. Comparacion honesta y transparente."
      comparisonHeaders={["Funcionalidad", "CuentaX", "Nubox"]}
      comparisonRows={COMPARISON_ROWS}
      differentiators={DIFFERENTIATORS}
      pricingComparison={{
        cuentax: "0,99",
        competitor: "2,5",
        competitorName: "Nubox",
      }}
      whySwitch={{
        title: "Por que PYMEs eligen CuentaX sobre Nubox",
        points: [
          "Precio hasta 60% menor con mas funcionalidades incluidas en cada plan.",
          "Remuneraciones y contabilidad integradas en una sola plataforma, sin modulos adicionales.",
          "Interfaz moderna e intuitiva que reduce la curva de aprendizaje de semanas a horas.",
          "Multi-empresa real: un solo login para todas tus sociedades, sin pagar multiples licencias.",
          "Operacion Renta automatizada que te ahorra semanas de trabajo cada ano.",
          "Soporte humano y dedicado, no un chatbot que te manda a leer la documentacion.",
          "Migracion asistida y gratuita: nos encargamos de traer tus datos desde Nubox.",
        ],
      }}
      ctaTitle="Migra de Nubox a CuentaX. Te ayudamos gratis."
      ctaSubtitle="Nuestro equipo se encarga de migrar todos tus datos. El proceso toma entre 1 y 5 dias habiles."
      ctaButtonText="Solicitar migracion gratuita"
      ctaButtonHref="/contacto?from=nubox"
    />
  );
}
