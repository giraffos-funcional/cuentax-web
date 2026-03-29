import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terminos de Servicio — CuentaX",
  description: "Terminos y condiciones de uso de la plataforma CuentaX.",
};

export default function TerminosPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
      <h1 className="text-3xl font-bold text-surface-900 mb-2">Terminos de Servicio</h1>
      <p className="text-sm text-surface-500 mb-10">Ultima actualizacion: Marzo 2026</p>

      <div className="prose prose-surface max-w-none space-y-8 text-surface-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">1. Aceptacion de los Terminos</h2>
          <p>Al acceder y utilizar la plataforma CuentaX (en adelante, &ldquo;el Servicio&rdquo;), proporcionada por Giraffos SpA, RUT 77.260.828-4, con domicilio en Santiago, Chile, usted acepta estar sujeto a estos Terminos de Servicio. Si no esta de acuerdo con estos terminos, no utilice el Servicio.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">2. Descripcion del Servicio</h2>
          <p>CuentaX es una plataforma SaaS de contabilidad, remuneraciones y facturacion electronica disenada para PYMEs chilenas. El Servicio incluye gestion contable, emision de documentos tributarios electronicos (DTE), calculo de remuneraciones y liquidaciones de sueldo, y declaraciones ante el Servicio de Impuestos Internos (SII).</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">3. Registro y Cuentas</h2>
          <p>Para utilizar el Servicio, debe crear una cuenta proporcionando informacion veraz y actualizada. Usted es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que ocurran bajo su cuenta.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">4. Planes y Facturacion</h2>
          <p>Los precios estan expresados en Unidades de Fomento (UF) mas IVA. La facturacion se realiza mensualmente o anualmente segun el plan seleccionado. Los cambios de plan se efectuan al inicio del siguiente periodo de facturacion. Puede cancelar su suscripcion en cualquier momento sin penalizacion.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">5. Uso Aceptable</h2>
          <p>Usted se compromete a utilizar el Servicio unicamente para fines legales y de acuerdo con la legislacion chilena vigente. Queda prohibido el uso del Servicio para actividades fraudulentas, evasion tributaria, o cualquier actividad que infrinja la ley.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">6. Proteccion de Datos</h2>
          <p>Los datos contables y de remuneraciones son almacenados en servidores ubicados en Chile. Giraffos SpA se compromete a proteger la informacion de acuerdo con la Ley 19.628 sobre Proteccion de la Vida Privada y la normativa vigente en materia de datos personales.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">7. Responsabilidad</h2>
          <p>CuentaX es una herramienta de gestion. La responsabilidad final sobre las declaraciones tributarias, liquidaciones de sueldo y cumplimiento normativo recae en el usuario y/o su contador. Giraffos SpA no sera responsable por errores en la informacion ingresada por el usuario.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">8. Contacto</h2>
          <p>Para consultas sobre estos Terminos, contactenos en <a href="mailto:legal@cuentax.cl" className="text-primary-600 hover:text-primary-700">legal@cuentax.cl</a>.</p>
        </section>
      </div>
    </div>
  );
}
