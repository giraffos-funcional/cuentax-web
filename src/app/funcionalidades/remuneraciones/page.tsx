"use client";

import { motion } from "framer-motion";
import {
  Users,
  Calculator,
  FileText,
  Award,
  Link2,
  Calendar,
  FileCheck,
  CheckCircle2,
  X,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function RemuneracionesPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Liquidaciones de sueldo en 3 clicks. Asi de simple."
        subtitle="Calculo automatico de imposiciones, integracion con Previred, libro de remuneraciones y certificados. Todo lo que necesitas para pagar a tu equipo correctamente."
        badge="Modulo Remuneraciones"
      />

      <FeatureSection
        title="Liquidaciones automaticas"
        description="Ingresa los datos del trabajador una sola vez. CuentaX calcula haberes, descuentos legales y sueldo liquido automaticamente cada mes."
        icon={Users}
        accentColor="emerald"
        imagePosition="right"
        features={[
          {
            title: "Haberes automaticos",
            description:
              "Sueldo base, gratificacion legal, horas extras, comisiones y bonos configurables.",
          },
          {
            title: "Descuentos legales",
            description:
              "AFP, Isapre/Fonasa, Seguro de Cesantia y otros descuentos calculados al dia.",
          },
          {
            title: "PDF profesional",
            description:
              "Liquidaciones con el formato legal chileno, listas para firmar y enviar.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Calculo exacto de imposiciones"
          description="AFP, Isapre, Fonasa, Seguro de Cesantia y mutual. Todas las tasas actualizadas automaticamente segun la normativa vigente."
          icon={Calculator}
          accentColor="blue"
          imagePosition="left"
          features={[
            {
              title: "Tasas AFP actualizadas",
              description:
                "Todas las AFP con sus comisiones vigentes. Se actualizan automaticamente.",
            },
            {
              title: "Isapre y Fonasa",
              description:
                "Calculo correcto segun plan de salud o tope imponible.",
            },
            {
              title: "Seguro de Cesantia",
              description:
                "Aporte empleador y trabajador calculados segun tipo de contrato.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Libro de remuneraciones electronico"
        description="Generado automaticamente con cada liquidacion. Cumple con el formato exigido por la Direccion del Trabajo."
        icon={FileText}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Formato DT",
            description:
              "Cumple con la estructura exigida por la Direccion del Trabajo.",
          },
          {
            title: "Generacion automatica",
            description:
              "Se actualiza con cada liquidacion procesada. Sin trabajo extra.",
          },
          {
            title: "Historico completo",
            description:
              "Consulta el libro de cualquier periodo anterior en segundos.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Certificados y documentos laborales"
          description="Genera certificados de sueldo, antigueedad y otros documentos laborales con un click."
          icon={Award}
          accentColor="amber"
          imagePosition="left"
          features={[
            {
              title: "Certificado de sueldo",
              description:
                "Con detalle de remuneraciones de los ultimos 6 o 12 meses.",
            },
            {
              title: "Certificado de antiguedad",
              description:
                "Fecha de ingreso, cargo y tipo de contrato del trabajador.",
            },
            {
              title: "Cartas y constancias",
              description:
                "Plantillas personalizables para documentos laborales frecuentes.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Previred integrado"
        description="Genera el archivo Previred directamente desde CuentaX. Sin copiar datos, sin errores manuales."
        icon={Link2}
        accentColor="emerald"
        imagePosition="right"
        features={[
          {
            title: "Archivo automatico",
            description:
              "Genera el archivo de pago Previred con un solo click desde las liquidaciones.",
          },
          {
            title: "Validacion previa",
            description:
              "Verifica montos y RUTs antes de generar para evitar rechazos.",
          },
          {
            title: "Historial de envios",
            description:
              "Registro de todos los archivos generados con fecha y detalle.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Vacaciones, licencias y finiquitos"
          description="Controla dias disponibles, licencias medicas y calcula finiquitos segun la normativa laboral chilena."
          icon={Calendar}
          accentColor="rose"
          imagePosition="left"
          features={[
            {
              title: "Control de vacaciones",
              description:
                "Dias acumulados, tomados y pendientes por cada trabajador.",
            },
            {
              title: "Licencias medicas",
              description:
                "Registro y seguimiento de licencias con calculo de subsidio.",
            },
            {
              title: "Finiquitos automaticos",
              description:
                "Calculo de indemnizaciones, feriado proporcional y demas conceptos legales.",
            },
          ]}
        />
      </div>

      {/* Comparison Table */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              CuentaX vs BUK Starter
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Mas funcionalidades, mejor precio. Compara y decide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mx-auto mt-12 max-w-3xl"
          >
            <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="px-6 py-4 font-semibold text-gray-900">
                      Funcionalidad
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-emerald-600">
                      CuentaX
                    </th>
                    <th className="px-6 py-4 text-center font-semibold text-gray-500">
                      BUK Starter
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: "Liquidaciones de sueldo", cuentax: true, buk: true },
                    { feature: "Calculo imposiciones", cuentax: true, buk: true },
                    { feature: "Previred integrado", cuentax: true, buk: true },
                    { feature: "Libro remuneraciones", cuentax: true, buk: true },
                    { feature: "Contabilidad integrada", cuentax: true, buk: false },
                    { feature: "Facturacion electronica", cuentax: true, buk: false },
                    { feature: "Declaraciones SII (F29)", cuentax: true, buk: false },
                    { feature: "Reportes financieros", cuentax: true, buk: false },
                    { feature: "Multi-empresa", cuentax: true, buk: false },
                  ].map((row) => (
                    <tr key={row.feature} className="hover:bg-gray-50/50">
                      <td className="px-6 py-3.5 text-gray-700">
                        {row.feature}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {row.cuentax ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-emerald-500" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </td>
                      <td className="px-6 py-3.5 text-center">
                        {row.buk ? (
                          <CheckCircle2 className="mx-auto h-5 w-5 text-gray-400" />
                        ) : (
                          <X className="mx-auto h-5 w-5 text-gray-300" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-center text-xs text-gray-400">
              Comparacion basada en planes equivalentes al cierre de 2024.
            </p>
          </motion.div>
        </div>
      </section>

      <CtaSection
        headline="Paga sueldos sin dolores de cabeza"
        subheadline="Liquidaciones en 3 clicks, imposiciones calculadas y Previred listo. Asi de facil es con CuentaX."
      />
    </main>
  );
}
