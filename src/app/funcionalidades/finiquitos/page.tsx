"use client";

import {
  Calculator,
  Scale,
  FileText,
  GitBranch,
  ShieldCheck,
  CheckCircle,
  Zap,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function FiniquitosPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Finiquitos calculados al centavo, sin errores legales"
        subtitle="Calcula indemnizacion por anos de servicio, vacaciones proporcionales y todos los conceptos legales chilenos. PDF listo para firmar."
        badge="Finiquitos"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Calculo automatico segun ley chilena"
        description="Todos los conceptos del finiquito calculados de forma automatica, respetando topes legales y normativa vigente."
        icon={Calculator}
        accentColor="rose"
        imagePosition="right"
        features={[
          {
            title: "Indemnizacion por anos de servicio",
            description:
              "Tope de 11 anos y 90 UF por ano, calculado automaticamente segun remuneracion.",
          },
          {
            title: "Vacaciones proporcionales",
            description:
              "Dias pendientes y proporcionales calculados al dia exacto de termino.",
          },
          {
            title: "Sueldo proporcional del ultimo mes",
            description:
              "Dias trabajados del mes de desvinculacion prorrateados correctamente.",
          },
          {
            title: "Gratificacion proporcional",
            description:
              "Gratificacion legal calculada en proporcion al periodo trabajado.",
          },
          {
            title: "Promedio ultimos 3 meses",
            description:
              "Base de calculo determinada automaticamente con las ultimas 3 remuneraciones.",
          },
        ]}
      />

      <FeatureSection
        title="Causales de termino"
        description="Selecciona la causal y el sistema determina automaticamente que conceptos corresponde pagar segun la legislacion chilena."
        icon={Scale}
        accentColor="amber"
        imagePosition="left"
        features={[
          {
            title: "Necesidades de la empresa (Art. 161)",
            description:
              "Indemnizacion por anos de servicio, aviso previo y todos los conceptos legales.",
          },
          {
            title: "Renuncia voluntaria",
            description:
              "Solo vacaciones proporcionales y haberes pendientes. Sin indemnizacion.",
          },
          {
            title: "Mutuo acuerdo",
            description:
              "Calculo flexible segun lo pactado entre las partes, con validacion legal.",
          },
          {
            title: "Art. 160 (sin indemnizacion)",
            description:
              "Despido por causa justificada. Solo haberes devengados y vacaciones.",
          },
          {
            title: "Vencimiento de plazo fijo",
            description:
              "Termino por cumplimiento de plazo contractual con los haberes correspondientes.",
          },
          {
            title: "Calculo automatico por causal",
            description:
              "El sistema determina que corresponde pagar segun la causal seleccionada.",
          },
        ]}
      />

      <FeatureSection
        title="PDF formato legal"
        description="Genera un documento con desglose completo, listo para presentar ante la Inspeccion del Trabajo o para firma entre las partes."
        icon={FileText}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Documento con desglose completo",
            description:
              "Detalle de cada concepto: indemnizacion, vacaciones, sueldo proporcional y descuentos.",
          },
          {
            title: "Formato aceptado por la Inspeccion del Trabajo",
            description:
              "Estructura y contenido que cumple con los requisitos legales chilenos.",
          },
          {
            title: "Listo para firma",
            description:
              "Compatible con firma electronica o impresion para firma presencial.",
          },
        ]}
      />

      <FeatureSection
        title="Flujo completo"
        description="Desde el borrador hasta el PDF firmado, cada paso queda registrado y vinculado al historial del trabajador."
        icon={GitBranch}
        accentColor="blue"
        imagePosition="left"
        features={[
          {
            title: "Borrador > Calculo > Confirmacion > PDF",
            description:
              "Proceso guiado paso a paso para evitar errores y omisiones.",
          },
          {
            title: "Trazabilidad de cada paso",
            description:
              "Registro completo de quien creo, reviso y confirmo el finiquito.",
          },
          {
            title: "Vinculado al contrato y liquidaciones",
            description:
              "El finiquito se genera con datos reales del contrato y las liquidaciones del trabajador.",
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
              Calcula finiquitos correctos en minutos, sin riesgo de errores
              legales ni multas.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: ShieldCheck,
                title: "Cumplimiento legal garantizado",
                description:
                  "Topes, causales y conceptos calculados segun la legislacion laboral chilena vigente.",
              },
              {
                icon: CheckCircle,
                title: "Cero errores de calculo",
                description:
                  "Promedio de remuneraciones, topes de UF y dias proporcionales calculados automaticamente.",
              },
              {
                icon: Zap,
                title: "Proceso rapido y trazable",
                description:
                  "Del borrador al PDF en minutos, con registro completo de cada paso del proceso.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-rose-50 text-rose-600">
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
        headline="Calcula finiquitos sin riesgo legal"
        subheadline="Genera finiquitos correctos en minutos. Cumple con la ley chilena sin ser experto."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
