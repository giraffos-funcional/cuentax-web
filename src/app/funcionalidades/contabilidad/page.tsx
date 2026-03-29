"use client";

import {
  BookOpen,
  FileSpreadsheet,
  Layers,
  PieChart,
  TrendingUp,
  Building2,
  GitBranch,
  Calculator,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function ContabilidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Contabilidad completa para tu PYME. Sin ser contador."
        subtitle="Plan de cuentas SII, asientos automaticos, reportes financieros y multi-empresa. Todo lo que necesitas para llevar tu contabilidad de forma profesional y sin complicaciones."
        badge="Modulo Contabilidad"
      />

      <FeatureSection
        title="Plan de cuentas alineado al SII"
        description="Comienza con un plan de cuentas preconfigurado segun las normas del SII chileno. Personalizable para tu industria."
        icon={BookOpen}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Estructura estandar SII",
            description:
              "Plan de cuentas listo para usar, basado en la normativa chilena vigente.",
          },
          {
            title: "Cuentas personalizables",
            description:
              "Agrega subcuentas especificas para tu rubro sin perder compatibilidad.",
          },
          {
            title: "Clasificacion automatica",
            description:
              "El sistema sugiere la cuenta correcta basado en el tipo de transaccion.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Asientos automaticos e inteligentes"
          description="Olvida los asientos manuales. CuentaX genera asientos contables automaticamente a partir de tus facturas, pagos y nomina."
          icon={FileSpreadsheet}
          accentColor="emerald"
          imagePosition="left"
          features={[
            {
              title: "Desde facturacion",
              description:
                "Cada factura emitida o recibida genera su asiento contable automaticamente.",
            },
            {
              title: "Desde remuneraciones",
              description:
                "Las liquidaciones de sueldo crean asientos con detalle de haberes y descuentos.",
            },
            {
              title: "Conciliacion bancaria",
              description:
                "Importa cartolas y concilia movimientos con tus registros contables.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Libro Mayor y Libro Diario"
        description="Consulta tus libros contables en tiempo real. Filtra por periodo, cuenta o centro de costo."
        icon={Layers}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Libro Mayor detallado",
            description:
              "Visualiza saldos y movimientos por cuenta con filtros avanzados.",
          },
          {
            title: "Libro Diario cronologico",
            description:
              "Todos los asientos ordenados por fecha con detalle completo.",
          },
          {
            title: "Exportacion digital",
            description:
              "Genera archivos compatibles con el formato electronico del SII.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Balance General y Estado de Resultados"
          description="Reportes financieros profesionales generados automaticamente. Listos para presentar a socios, bancos o al SII."
          icon={PieChart}
          accentColor="amber"
          imagePosition="left"
          features={[
            {
              title: "Balance General",
              description:
                "Activos, pasivos y patrimonio actualizados en tiempo real.",
            },
            {
              title: "Estado de Resultados",
              description:
                "Ingresos, costos y gastos con desglose por categoria.",
            },
            {
              title: "Comparativo mensual",
              description:
                "Compara periodos para identificar tendencias y variaciones.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Ratios financieros automaticos"
        description="Indicadores clave de tu negocio calculados automaticamente. Liquidez, endeudamiento y rentabilidad en un vistazo."
        icon={TrendingUp}
        accentColor="rose"
        imagePosition="right"
        features={[
          {
            title: "Liquidez corriente",
            description:
              "Mide tu capacidad de pago a corto plazo de forma automatica.",
          },
          {
            title: "Endeudamiento",
            description:
              "Controla la proporcion entre deuda y patrimonio de tu empresa.",
          },
          {
            title: "Rentabilidad",
            description:
              "ROE, ROA y margen neto para evaluar la eficiencia de tu negocio.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Centros de costo y multi-empresa"
          description="Gestiona multiples lineas de negocio o empresas desde una sola cuenta. Asigna ingresos y gastos por centro de costo."
          icon={Building2}
          accentColor="cyan"
          imagePosition="left"
          features={[
            {
              title: "Centros de costo ilimitados",
              description:
                "Crea centros para sucursales, proyectos o departamentos.",
            },
            {
              title: "Multi-empresa",
              description:
                "Administra varias empresas desde un unico panel consolidado.",
            },
            {
              title: "Reportes consolidados",
              description:
                "Genera reportes individuales o consolidados entre empresas.",
            },
          ]}
        />
      </div>

      <CtaSection
        headline="Tu contabilidad en piloto automatico"
        subheadline="Deja que CuentaX se encargue de los asientos, libros y reportes. Tu enfocate en hacer crecer tu empresa."
      />
    </main>
  );
}
