"use client";

import {
  FileText,
  ClipboardList,
  FileCheck,
  Clock,
  CalendarDays,
  UserCircle,
  Shield,
  Smartphone,
  KeyRound,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function PortalDelTrabajadorPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="Portal del Trabajador: autoservicio para tus empleados"
        subtitle="Tus trabajadores acceden a liquidaciones, contratos, documentos laborales y mas desde cualquier dispositivo. Sin llamar a RRHH."
        badge="Portal del Trabajador"
        ctaText="Prueba gratis por 14 dias"
        ctaHref="https://cuentax.giraffos.com"
      />

      <FeatureSection
        title="Liquidaciones de sueldo al instante"
        description="Cada empleado consulta y descarga sus liquidaciones de sueldo en PDF con detalle completo de haberes, descuentos e imposiciones."
        icon={FileText}
        accentColor="cyan"
        imagePosition="right"
        features={[
          {
            title: "Historico completo",
            description:
              "Todas las liquidaciones disponibles mes a mes, sin limite de antiguedad.",
          },
          {
            title: "Descarga en PDF",
            description:
              "Formato oficial con desglose de sueldo base, bonos, AFP, salud y descuentos.",
          },
          {
            title: "Acceso inmediato",
            description:
              "Disponibles apenas el empleador confirma el proceso de remuneraciones.",
          },
        ]}
      />

      <FeatureSection
        title="Contrato vigente y descargable"
        description="El trabajador visualiza su contrato actual con cargo, sueldo base, tipo de jornada y fechas. Descargable en PDF."
        icon={ClipboardList}
        accentColor="emerald"
        imagePosition="left"
        features={[
          {
            title: "Datos del contrato",
            description:
              "Cargo, departamento, sueldo base, tipo de contrato y fecha de inicio en un vistazo.",
          },
          {
            title: "PDF descargable",
            description:
              "El trabajador descarga su contrato en formato PDF cuando lo necesite.",
          },
          {
            title: "Siempre actualizado",
            description:
              "Refleja automaticamente anexos y modificaciones contractuales.",
          },
        ]}
      />

      <FeatureSection
        title="Documentos laborales al instante"
        description="Genera Certificado Laboral, Certificado de Antiguedad y Constancia de Empleo sin depender de RRHH. Todo en PDF, listo para imprimir."
        icon={FileCheck}
        accentColor="violet"
        imagePosition="right"
        features={[
          {
            title: "Certificado Laboral",
            description:
              "Documento oficial que acredita la relacion laboral vigente con la empresa.",
          },
          {
            title: "Certificado de Antiguedad",
            description:
              "Detalla los anos y meses de servicio del trabajador en la organizacion.",
          },
          {
            title: "Constancia de Empleo",
            description:
              "Carta de verificacion de empleo para tramites bancarios, arriendos y mas.",
          },
        ]}
      />

      <FeatureSection
        title="Registro de asistencia"
        description="Cada trabajador revisa su asistencia mensual con dias trabajados, horas totales y estado de cada jornada."
        icon={Clock}
        accentColor="amber"
        imagePosition="left"
        features={[
          {
            title: "Vista mensual",
            description:
              "Calendario con estado diario: presente, ausente, dia libre o feriado.",
          },
          {
            title: "Horas totales",
            description:
              "Resumen de horas trabajadas en el periodo para control personal.",
          },
          {
            title: "Transparencia total",
            description:
              "El trabajador verifica su registro antes del cierre de remuneraciones.",
          },
        ]}
      />

      <FeatureSection
        title="Ausencias y vacaciones"
        description="Consulta solicitudes de ausencia, vacaciones pendientes y licencias medicas desde el portal."
        icon={CalendarDays}
        accentColor="rose"
        imagePosition="right"
        features={[
          {
            title: "Vacaciones disponibles",
            description:
              "Dias pendientes, progresivos y tomados en el periodo actual.",
          },
          {
            title: "Historial de ausencias",
            description:
              "Registro completo de licencias, permisos y dias administrativos.",
          },
          {
            title: "Estado de solicitudes",
            description:
              "Seguimiento en tiempo real de cada solicitud enviada al empleador.",
          },
        ]}
      />

      <FeatureSection
        title="Mi Perfil: datos siempre accesibles"
        description="El trabajador accede a sus datos personales, informacion de contacto, contrato vigente y datos de prevision en un solo lugar."
        icon={UserCircle}
        accentColor="blue"
        imagePosition="left"
        features={[
          {
            title: "Datos personales",
            description:
              "RUT, nombre, fecha de nacimiento, nacionalidad y estado civil.",
          },
          {
            title: "Informacion de contacto",
            description:
              "Email, telefono y direccion siempre actualizados.",
          },
          {
            title: "Prevision",
            description:
              "AFP, sistema de salud e Isapre/Fonasa asignados visibles en todo momento.",
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
              El Portal del Trabajador reduce la carga operativa de RRHH y
              mejora la experiencia de tus empleados.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
            {[
              {
                icon: Smartphone,
                title: "Acceso desde cualquier dispositivo",
                description:
                  "Responsive y optimizado para celular, tablet y escritorio. Sin instalar nada.",
              },
              {
                icon: KeyRound,
                title: "Login seguro con PIN",
                description:
                  "Cada trabajador accede con su RUT y PIN personal. Sin necesidad de email corporativo.",
              },
              {
                icon: Shield,
                title: "Menos consultas a RRHH",
                description:
                  "Tus empleados resuelven sus dudas solos. Liquidaciones, contratos y documentos siempre disponibles.",
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="relative rounded-2xl border border-gray-200 bg-white p-7 text-center shadow-sm"
              >
                <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
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
        headline="Dale autonomia a tus trabajadores"
        subheadline="Activa el Portal del Trabajador y reduce hasta un 80% las consultas repetitivas a RRHH. Incluido en todos los planes de CuentaX."
        ctaText="Comenzar gratis"
        ctaHref="https://cuentax.giraffos.com"
      />
    </main>
  );
}
