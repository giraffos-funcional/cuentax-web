import { ComparisonPageLayout } from "@/components/comparison-page-layout";

const COMPARISON_ROWS = [
  { feature: "Remuneraciones", values: ["yes", "yes"] },
  { feature: "Liquidaciones de sueldo", values: ["yes", "yes"] },
  { feature: "Previred automatico", values: ["yes", "yes"] },
  { feature: "Gestion de vacaciones y permisos", values: ["Basica", "yes"] },
  { feature: "Evaluaciones de desempeno", values: ["no", "yes"] },
  { feature: "Portal del empleado", values: ["Proximamente", "yes"] },
  { feature: "Contabilidad completa", values: ["yes", "no"] },
  { feature: "Facturacion electronica", values: ["yes", "no"] },
  { feature: "Libro de compras y ventas", values: ["yes", "no"] },
  { feature: "Declaracion F29", values: ["yes", "no"] },
  { feature: "Operacion Renta", values: ["yes", "no"] },
  { feature: "Conciliacion bancaria", values: ["yes", "no"] },
  { feature: "Reportes financieros", values: ["yes", "no"] },
  { feature: "Multi-empresa", values: ["yes", "yes"] },
  { feature: "Ideal para PYMEs (< 50 empleados)", values: ["yes", "Empresas medianas+"] },
];

const DIFFERENTIATORS = [
  {
    title: "Contabilidad + Remuneraciones juntas",
    description:
      "BUK es excelente para RRHH, pero no tiene contabilidad. Con CuentaX tienes ambas cosas en una sola plataforma, perfectamente integradas.",
  },
  {
    title: "Facturacion electronica incluida",
    description:
      "CuentaX incluye facturacion electronica certificada por el SII. BUK no factura. Necesitarias otro software adicional.",
  },
  {
    title: "Precio pensado para PYMEs",
    description:
      "BUK esta disenado para empresas medianas y grandes con +50 empleados. Su precio refleja eso. CuentaX esta pensado para PYMEs.",
  },
  {
    title: "Todo el cumplimiento SII",
    description:
      "Declaraciones F29, libros contables, Operacion Renta, todo automatizado. BUK solo cubre el lado de remuneraciones.",
  },
  {
    title: "Conciliacion bancaria",
    description:
      "Conecta tu banco y concilia movimientos automaticamente. Algo que BUK simplemente no hace porque no es un software financiero.",
  },
  {
    title: "Una cuenta, todo tu negocio",
    description:
      "Deja de saltar entre plataformas. CuentaX unifica contabilidad, remuneraciones y facturacion en una experiencia fluida.",
  },
];

export default function CuentaxVsBukPage() {
  return (
    <ComparisonPageLayout
      heroBadge="Comparacion detallada"
      heroTitle="CuentaX vs BUK: RRHH esta bien, pero tu PYME necesita mas"
      heroSubtitle="BUK es un gran software de recursos humanos. Pero si tambien necesitas contabilidad y facturacion, CuentaX es la solucion integral."
      comparisonHeaders={["Funcionalidad", "CuentaX", "BUK"]}
      comparisonRows={COMPARISON_ROWS}
      differentiators={DIFFERENTIATORS}
      pricingComparison={{
        cuentax: "0,99",
        competitor: "3,0+",
        competitorName: "BUK",
      }}
      whySwitch={{
        title: "Por que PYMEs eligen CuentaX sobre BUK",
        points: [
          "Una sola plataforma para contabilidad, remuneraciones y facturacion. BUK solo cubre remuneraciones.",
          "Precio significativamente menor, especialmente para empresas con menos de 50 empleados.",
          "Facturacion electronica certificada SII incluida en todos los planes.",
          "Declaracion F29 automatica, libros contables, Operacion Renta — BUK no ofrece nada de esto.",
          "Si tu PYME tiene menos de 50 empleados, CuentaX cubre todo lo que necesitas sin pagar de mas por funciones corporativas.",
        ],
      }}
      ctaTitle="Mas que RRHH. Contabilidad completa para tu PYME."
      ctaSubtitle="14 dias gratis. Sin tarjeta de credito. Sin contratos."
      ctaButtonText="Empezar prueba gratis"
      ctaButtonHref="/registro"
    />
  );
}
