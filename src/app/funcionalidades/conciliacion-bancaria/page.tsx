"use client";

import {
  Landmark,
  ArrowLeftRight,
  CheckCircle,
  FileSpreadsheet,
  Clock,
  ShieldCheck,
  Eye,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function ConciliacionBancariaPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Concilia tus cuentas bancarias sin perder la cabeza"
        subtitle="Importa cartolas de cualquier banco chileno, concilia automaticamente y ten tus cuentas al dia en minutos."
        badge="Conciliacion Bancaria"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Importacion multi-banco"
        description="Importa cartolas bancarias en formato OFX o CSV desde los principales bancos de Chile. Solo arrastra el archivo y CuentaX hace el resto."
        icon={Landmark}
        accentColor="blue"
        imagePosition="right"
        features={[
          {
            title: "Bancos soportados",
            description:
              "BancoEstado, BCI, Santander, Scotiabank y mas. Compatibilidad con los formatos mas usados en Chile.",
          },
          {
            title: "Drag & drop",
            description:
              "Arrastra tu cartola directo al navegador. Sin configuraciones, sin pasos intermedios.",
          },
          {
            title: "Parseo automatico",
            description:
              "CuentaX detecta el formato del archivo y extrae movimientos, fechas y montos automaticamente.",
          },
        ]}
      />

      <FeatureSection
        title="Auto-matching inteligente"
        description="El sistema cruza automaticamente los movimientos bancarios con tus registros contables y sugiere las mejores coincidencias."
        icon={ArrowLeftRight}
        accentColor="emerald"
        imagePosition="left"
        features={[
          {
            title: "Matching por monto exacto",
            description:
              "Detecta coincidencias exactas entre movimientos bancarios y asientos contables.",
          },
          {
            title: "Fecha aproximada y referencia",
            description:
              "Busca coincidencias por rango de fecha y numero de folio o referencia del documento.",
          },
          {
            title: "Score de confianza",
            description:
              "Cada sugerencia incluye un puntaje de confianza para que decidas rapidamente si aceptar o revisar.",
          },
        ]}
      />

      <FeatureSection
        title="Conciliacion manual asistida"
        description="Cuando el matching automatico no basta, la vista lado a lado te permite conciliar manualmente con un solo click."
        icon={CheckCircle}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Vista lado a lado",
            description:
              "Banco a la izquierda, contabilidad a la derecha. Compara movimientos de forma visual e intuitiva.",
          },
          {
            title: "Conciliacion con un click",
            description:
              "Selecciona el movimiento bancario y el asiento contable, y concilia con un solo click.",
          },
          {
            title: "Historial de conciliaciones",
            description:
              "Registro completo de todas las conciliaciones realizadas, con fecha, usuario y detalle.",
          },
        ]}
      />

      <FeatureSection
        title="Reportes de conciliacion"
        description="Visualiza el estado de tus conciliaciones con reportes claros que muestran partidas pendientes, diferencias y avance mensual."
        icon={FileSpreadsheet}
        accentColor="amber"
        imagePosition="left"
        features={[
          {
            title: "Partidas pendientes",
            description:
              "Lista de movimientos bancarios y contables sin conciliar, ordenados por antiguedad.",
          },
          {
            title: "Diferencias detectadas",
            description:
              "Resumen de discrepancias entre saldos bancarios y contables para cada cuenta.",
          },
          {
            title: "Exportable en PDF",
            description:
              "Descarga el reporte de conciliacion en PDF para respaldo, auditoria o revision con tu contador.",
          },
        ]}
      />

      {/* Benefits section */}
      <section className="border-t border-gray-100 bg-gray-50/50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Beneficios para tu empresa
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              La conciliacion bancaria automatizada reduce errores, ahorra horas
              de trabajo manual y te da visibilidad total sobre tus finanzas.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Clock,
                title: "Ahorra tiempo",
                description:
                  "Concilia en minutos lo que antes tomaba horas. Importa, revisa y confirma sin salir de CuentaX.",
              },
              {
                icon: ShieldCheck,
                title: "Elimina errores",
                description:
                  "El matching automatico reduce errores humanos y asegura que cada movimiento quede correctamente registrado.",
              },
              {
                icon: Eye,
                title: "Control total",
                description:
                  "Visualiza partidas pendientes, diferencias y estado de conciliacion en tiempo real desde un solo lugar.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        headline="Deja de conciliar en Excel"
        subheadline="Importa tu primera cartola y concilia en minutos. Incluido en todos los planes de CuentaX."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
