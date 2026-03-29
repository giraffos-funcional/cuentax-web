import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politica de Privacidad — CuentaX",
  description: "Como CuentaX protege y maneja tus datos personales y empresariales.",
};

export default function PrivacidadPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-32 lg:px-8">
      <h1 className="text-3xl font-bold text-surface-900 mb-2">Politica de Privacidad</h1>
      <p className="text-sm text-surface-500 mb-10">Ultima actualizacion: Marzo 2026</p>

      <div className="prose prose-surface max-w-none space-y-8 text-surface-700 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">1. Responsable del Tratamiento</h2>
          <p>Giraffos SpA, RUT 77.260.828-4, con domicilio en Santiago, Chile, es responsable del tratamiento de los datos personales recopilados a traves de la plataforma CuentaX.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">2. Datos que Recopilamos</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Datos de registro: nombre, email, telefono, RUT de la empresa</li>
            <li>Datos contables: transacciones, facturas, libros contables</li>
            <li>Datos de remuneraciones: empleados, sueldos, imposiciones, contratos</li>
            <li>Certificados digitales: almacenados de forma encriptada para emision de DTE</li>
            <li>Datos de uso: paginas visitadas, funcionalidades utilizadas, errores</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">3. Finalidad del Tratamiento</h2>
          <p>Utilizamos sus datos exclusivamente para:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Proveer el servicio de contabilidad, remuneraciones y facturacion</li>
            <li>Comunicarnos con usted sobre su cuenta y el servicio</li>
            <li>Cumplir con obligaciones legales y tributarias</li>
            <li>Mejorar la plataforma mediante analisis anonimizado de uso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">4. Almacenamiento y Seguridad</h2>
          <p>Sus datos son almacenados en servidores ubicados en Chile, protegidos con encriptacion en transito (TLS 1.3) y en reposo. Los certificados digitales se almacenan con encriptacion adicional. Realizamos respaldos diarios y mantenemos logs de acceso.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">5. Comparticion de Datos</h2>
          <p>No vendemos ni compartimos sus datos con terceros, salvo:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Con el SII para la emision de documentos tributarios electronicos</li>
            <li>Con instituciones previsionales (AFP, Isapre) para el pago de cotizaciones</li>
            <li>Cuando sea requerido por ley o autoridad competente</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">6. Derechos del Titular</h2>
          <p>De acuerdo con la Ley 19.628, usted tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales. Para ejercer estos derechos, contactenos en <a href="mailto:privacidad@cuentax.cl" className="text-primary-600 hover:text-primary-700">privacidad@cuentax.cl</a>.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">7. Retencion de Datos</h2>
          <p>Conservamos sus datos mientras su cuenta este activa. Al cancelar, sus datos contables se mantienen por 6 anos conforme a la legislacion tributaria chilena. Puede solicitar la eliminacion de datos no tributarios en cualquier momento.</p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-surface-900 mb-3">8. Contacto</h2>
          <p>Para consultas sobre privacidad: <a href="mailto:privacidad@cuentax.cl" className="text-primary-600 hover:text-primary-700">privacidad@cuentax.cl</a></p>
        </section>
      </div>
    </div>
  );
}
