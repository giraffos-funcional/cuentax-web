"use client";

import {
  FileCheck,
  Calculator,
  CalendarCheck,
  FileSpreadsheet,
  BookOpen,
  RefreshCw,
} from "lucide-react";
import { FeatureHero } from "@/components/feature-hero";
import { FeatureSection } from "@/components/feature-section";
import { CtaSection } from "@/components/cta-section";

export default function DeclaracionesSiiPage() {
  return (
    <main className="min-h-screen bg-white">
      <FeatureHero
        title="F29, IVA, y declaraciones. Sin estres."
        subtitle="Genera tu F29 mensual automaticamente, prepara tu Operacion Renta y mantente al dia con todas tus obligaciones tributarias ante el SII."
        badge="Modulo Declaraciones"
      />

      <FeatureSection
        title="F29 mensual automatico"
        description="El formulario 29 se genera automaticamente a partir de tu facturacion y libros de compra y venta. Solo revisas y envias."
        icon={FileCheck}
        accentColor="amber"
        imagePosition="right"
        features={[
          {
            title: "Calculo automatico de IVA",
            description:
              "Debito y credito fiscal calculados desde tus documentos tributarios.",
          },
          {
            title: "PPM incluido",
            description:
              "Pagos provisionales mensuales calculados segun la tasa vigente.",
          },
          {
            title: "Retencion de honorarios",
            description:
              "Boletas de honorarios recibidas con su retencion correspondiente.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Propuesta F29 prellenada"
          description="CuentaX genera una propuesta prellenada del F29 que puedes revisar, ajustar y enviar directamente al SII desde la plataforma."
          icon={Calculator}
          accentColor="blue"
          imagePosition="left"
          features={[
            {
              title: "Propuesta inteligente",
              description:
                "Prellenada con datos de tus libros de compra y venta del periodo.",
            },
            {
              title: "Ajustes manuales",
              description:
                "Modifica cualquier campo antes de enviar si necesitas correcciones.",
            },
            {
              title: "Historico de declaraciones",
              description:
                "Consulta todas tus declaraciones anteriores con su detalle.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Operacion Renta"
        description="Prepara tu declaracion de renta anual con toda la informacion consolidada del ano tributario. Sin sorpresas en abril."
        icon={CalendarCheck}
        accentColor="emerald"
        imagePosition="right"
        features={[
          {
            title: "Consolidacion anual",
            description:
              "Todos los ingresos, gastos y retenciones del ano en un solo reporte.",
          },
          {
            title: "Preparacion anticipada",
            description:
              "Revisa tu situacion tributaria antes de que llegue la fecha limite.",
          },
          {
            title: "Base imponible clara",
            description:
              "Visualiza como se determina tu base imponible de primera categoria.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Declaracion Jurada 1887"
          description="Genera la DJ 1887 de honorarios automaticamente a partir de las boletas de honorarios recibidas durante el ano."
          icon={FileSpreadsheet}
          accentColor="violet"
          imagePosition="left"
          features={[
            {
              title: "Generacion automatica",
              description:
                "Se construye a partir de todas las boletas de honorarios registradas.",
            },
            {
              title: "Validacion de datos",
              description:
                "Verifica RUTs, montos y retenciones antes de generar la declaracion.",
            },
            {
              title: "Formato SII",
              description:
                "Archivo listo para subir directamente al portal del SII.",
            },
          ]}
        />
      </div>

      <FeatureSection
        title="Libros electronicos"
        description="Libros de compra, venta y honorarios en formato electronico. Generados automaticamente y listos para enviar al SII."
        icon={BookOpen}
        accentColor="rose"
        imagePosition="right"
        features={[
          {
            title: "Libro de compras electronico",
            description:
              "Todas las facturas recibidas en el formato exigido por el SII.",
          },
          {
            title: "Libro de ventas electronico",
            description:
              "Documentos emitidos consolidados por periodo tributario.",
          },
          {
            title: "Libro de honorarios",
            description:
              "Boletas de honorarios emitidas y recibidas con detalle de retenciones.",
          },
        ]}
      />

      <div className="border-t border-gray-100 bg-gray-50/50">
        <FeatureSection
          title="Sincronizacion automatica con SII"
          description="CuentaX se conecta directamente con el SII para enviar documentos, descargar informacion de terceros y validar estados."
          icon={RefreshCw}
          accentColor="cyan"
          imagePosition="left"
          features={[
            {
              title: "Conexion directa",
              description:
                "Comunicacion segura con los servicios web del SII.",
            },
            {
              title: "Descarga de DTEs recibidos",
              description:
                "Importa automaticamente las facturas que tus proveedores te emitieron.",
            },
            {
              title: "Estado en tiempo real",
              description:
                "Verifica si tus documentos fueron aceptados o rechazados por el SII.",
            },
          ]}
        />
      </div>

      <CtaSection
        headline="Declaraciones al dia, sin estres"
        subheadline="El F29 se genera solo, la Operacion Renta se prepara automaticamente y los libros electronicos estan siempre listos. Tu solo revisas y envias."
      />
    </main>
  );
}
