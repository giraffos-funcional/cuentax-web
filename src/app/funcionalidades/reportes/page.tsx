"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  TrendingUp,
  Gauge,
  LayoutDashboard,
  Download,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function ReportesPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Reportes que te ayudan a tomar decisiones."
        subtitle="Dashboard ejecutivo, ratios financieros, flujo de caja y exportacion a PDF y Excel. Toda la informacion de tu empresa en tiempo real."
        badge="Modulo Reportes"
      />

      {/* Mini Dashboard Preview */}
      <section className="border-b border-gray-100 bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Tu negocio en un vistazo
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-600">
              Metricas clave actualizadas automaticamente desde tu contabilidad.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {[
              {
                label: "Ingresos mensuales",
                value: "$12.450.000",
                change: "+12%",
                up: true,
              },
              {
                label: "Gastos operacionales",
                value: "$8.320.000",
                change: "+3%",
                up: true,
              },
              {
                label: "Utilidad neta",
                value: "$4.130.000",
                change: "+28%",
                up: true,
              },
              {
                label: "Liquidez corriente",
                value: "1.85",
                change: "-0.05",
                up: false,
              },
            ].map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
                className="rounded-xl border border-gray-200/60 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                  {metric.label}
                </p>
                <p className="mt-2 text-2xl font-bold text-gray-900">
                  {metric.value}
                </p>
                <div className="mt-1 flex items-center gap-1">
                  {metric.up ? (
                    <ArrowUpRight className="h-3.5 w-3.5 text-emerald-500" />
                  ) : (
                    <ArrowDownRight className="h-3.5 w-3.5 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${
                      metric.up ? "text-emerald-600" : "text-red-600"
                    }`}
                  >
                    {metric.change}
                  </span>
                  <span className="text-xs text-gray-400">vs mes anterior</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <FeatureSection
        title="Balance General en tiempo real"
        description="Activos, pasivos y patrimonio actualizados automaticamente con cada transaccion. Sin esperar al cierre contable."
        icon={PieChart}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Activos detallados",
            description:
              "Corrientes y no corrientes con desglose por subcuenta.",
          },
          {
            title: "Pasivos y patrimonio",
            description:
              "Obligaciones a corto y largo plazo junto al patrimonio de los socios.",
          },
          {
            title: "Comparativo",
            description:
              "Compara con periodos anteriores para ver la evolucion de tu empresa.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Estado de Resultados"
          description="Visualiza ingresos, costos y gastos con claridad. Identifica que lineas de negocio son mas rentables."
          icon={BarChart3}
          accentColor="emerald"
          imagePosition="left"
          features={[
            {
              title: "Ingresos por linea",
              description:
                "Desglose de ingresos por tipo de producto o servicio.",
            },
            {
              title: "Costos y gastos",
              description:
                "Analisis detallado de costos directos y gastos operacionales.",
            },
            {
              title: "Margen operacional",
              description:
                "Calculo automatico de margen bruto, operacional y neto.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Flujo de caja proyectado"
        description="Anticipa tu situacion de liquidez. Visualiza ingresos y egresos proyectados para las proximas semanas y meses."
        icon={TrendingUp}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Proyeccion a 30/60/90 dias",
            description:
              "Basada en facturas por cobrar, por pagar y gastos recurrentes.",
          },
          {
            title: "Alertas de liquidez",
            description:
              "Notificaciones cuando el saldo proyectado baja de un umbral critico.",
          },
          {
            title: "Escenarios",
            description:
              "Simula escenarios optimistas y pesimistas para planificar mejor.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Ratios financieros automaticos"
          description="Indicadores de liquidez, endeudamiento y rentabilidad calculados en tiempo real desde tu contabilidad."
          icon={Gauge}
          accentColor="amber"
          imagePosition="left"
          features={[
            {
              title: "Liquidez corriente y acida",
              description:
                "Mide tu capacidad de cubrir obligaciones a corto plazo.",
            },
            {
              title: "Endeudamiento",
              description:
                "Proporcion entre deuda total y patrimonio. Clave para acceder a credito.",
            },
            {
              title: "ROE y ROA",
              description:
                "Rentabilidad sobre patrimonio y activos para evaluar eficiencia.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Dashboard ejecutivo"
        description="Panel visual con las metricas mas importantes de tu empresa. Diseniado para que tomes decisiones rapidas con datos reales."
        icon={LayoutDashboard}
        accentColor="rose"
        imagePosition="right"
        features={[
          {
            title: "Vista consolidada",
            description:
              "Ingresos, gastos, utilidad y liquidez en una sola pantalla.",
          },
          {
            title: "Graficos interactivos",
            description:
              "Visualizaciones claras con filtros por periodo y centro de costo.",
          },
          {
            title: "Acceso rapido",
            description:
              "Desde el dashboard accedes directamente a cualquier reporte detallado.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Exportar a PDF y Excel"
          description="Descarga cualquier reporte en formato PDF profesional o Excel editable. Listos para compartir con socios, bancos o auditores."
          icon={Download}
          accentColor="cyan"
          imagePosition="left"
          features={[
            {
              title: "PDF con tu marca",
              description:
                "Reportes con el logo y colores de tu empresa. Profesionales y elegantes.",
            },
            {
              title: "Excel editable",
              description:
                "Datos estructurados en Excel para analisis adicional o presentaciones.",
            },
            {
              title: "Envio por email",
              description:
                "Comparte reportes directamente por email desde la plataforma.",
            },
          ]}
        />
      </div>

      <CtaSection
        headline="Toma decisiones con datos reales"
        subheadline="Reportes financieros automaticos, dashboard ejecutivo y ratios calculados en tiempo real. Todo lo que necesitas para dirigir tu PYME con confianza."
      />
    </main>
  );
}
