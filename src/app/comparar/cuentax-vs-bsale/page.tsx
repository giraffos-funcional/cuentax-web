import { ComparisonPageLayout } from "@/components/comparison-page-layout";

const COMPARISON_ROWS = [
  { feature: "Punto de venta (POS)", values: ["Proximamente", "yes"] },
  { feature: "Facturacion electronica", values: ["yes", "yes"] },
  { feature: "Boletas electronicas", values: ["yes", "yes"] },
  { feature: "Contabilidad completa", values: ["yes", "no"] },
  { feature: "Libro de compras y ventas", values: ["yes", "no"] },
  { feature: "Declaracion F29", values: ["yes", "no"] },
  { feature: "Remuneraciones", values: ["yes", "no"] },
  { feature: "Liquidaciones de sueldo", values: ["yes", "no"] },
  { feature: "Previred", values: ["yes", "no"] },
  { feature: "Operacion Renta", values: ["yes", "no"] },
  { feature: "Conciliacion bancaria", values: ["yes", "no"] },
  { feature: "Reportes financieros", values: ["yes", "Basicos (ventas)"] },
  { feature: "Multi-empresa", values: ["yes", "no"] },
  { feature: "Inventario", values: ["Basico", "yes"] },
  { feature: "Integraciones e-commerce", values: ["Proximamente", "yes"] },
];

const DIFFERENTIATORS = [
  {
    title: "Contabilidad real, no solo ventas",
    description:
      "Bsale es excelente para facturar y vender, pero no tiene contabilidad. Si necesitas llevar tus libros, necesitas otro software. CuentaX lo tiene todo.",
  },
  {
    title: "Remuneraciones completas",
    description:
      "Bsale no ofrece ningun modulo de remuneraciones. Con CuentaX manejas liquidaciones, Previred y Operacion Renta desde la misma plataforma.",
  },
  {
    title: "Declaraciones SII automaticas",
    description:
      "CuentaX genera tu F29, libros contables y Operacion Renta automaticamente. Con Bsale necesitas exportar y hacer todo a mano o contratar un contador.",
  },
  {
    title: "Una plataforma, no tres",
    description:
      "Con Bsale necesitas: Bsale para facturar + otro software para contabilidad + otro para remuneraciones. Con CuentaX, todo esta en un solo lugar.",
  },
  {
    title: "Conciliacion bancaria",
    description:
      "Conecta tu banco y concilia automaticamente. Bsale no ofrece esta funcionalidad porque no es un software contable.",
  },
  {
    title: "Reportes financieros reales",
    description:
      "Balance general, estado de resultados, flujo de caja. CuentaX te da los reportes que tu contador necesita, no solo un reporte de ventas.",
  },
];

export default function CuentaxVsBsalePage() {
  return (
    <ComparisonPageLayout
      heroBadge="Comparacion detallada"
      heroTitle="CuentaX vs Bsale: Ventas + contabilidad en un solo lugar"
      heroSubtitle="Bsale es bueno para punto de venta y facturacion, pero no es un software contable. CuentaX te da ventas, contabilidad y remuneraciones en una sola plataforma."
      comparisonHeaders={["Funcionalidad", "CuentaX", "Bsale"]}
      comparisonRows={COMPARISON_ROWS}
      differentiators={DIFFERENTIATORS}
      pricingComparison={{
        cuentax: "0,99",
        competitor: "1,5+",
        competitorName: "Bsale",
      }}
      whySwitch={{
        title: "Por que elegir CuentaX en vez de Bsale",
        points: [
          "CuentaX incluye contabilidad completa que Bsale simplemente no ofrece.",
          "Remuneraciones integradas: liquidaciones, Previred, Operacion Renta.",
          "Declaracion F29 automatica directo al SII. Con Bsale necesitas otro software.",
          "Una sola plataforma en vez de tres: ahorra tiempo, dinero y dolores de cabeza.",
          "Si solo necesitas facturar, Bsale funciona. Si necesitas llevar tu empresa completa, CuentaX es tu mejor opcion.",
        ],
      }}
      ctaTitle="Mas que facturacion. Contabilidad completa para tu PYME."
      ctaSubtitle="Prueba gratis por 14 dias y descubre todo lo que CuentaX puede hacer por tu negocio."
      ctaButtonText="Empezar prueba gratis"
      ctaButtonHref="/registro"
    />
  );
}
