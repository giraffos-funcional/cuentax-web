"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Send,
  Clock,
  Globe,
  ExternalLink,
} from "lucide-react";
import { ScrollReveal } from "@/components/scroll-reveal";

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for form submission logic
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e3a5f] to-[#1e40af] pt-32 pb-20 sm:pt-40 sm:pb-24">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
          <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[100px]" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Hablemos
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-blue-100/70"
            >
              Tienes preguntas? Queremos ayudarte. Escribenos y te respondemos en menos de 24 horas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                {submitted ? (
                  <div className="rounded-2xl border border-accent-200 bg-accent-50 p-12 text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent-100 text-accent-600">
                      <Send className="h-8 w-8" />
                    </div>
                    <h2 className="mt-6 text-2xl font-bold text-surface-900">Mensaje enviado</h2>
                    <p className="mt-3 text-surface-500">
                      Gracias por contactarnos. Te respondemos en menos de 24 horas habiles.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-medium text-surface-700">
                          Nombre completo
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          required
                          value={formState.nombre}
                          onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="Juan Perez"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-surface-700">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="juan@empresa.cl"
                        />
                      </div>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-medium text-surface-700">
                          Empresa
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          value={formState.empresa}
                          onChange={(e) => setFormState({ ...formState, empresa: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="Mi Empresa SpA"
                        />
                      </div>
                      <div>
                        <label htmlFor="telefono" className="block text-sm font-medium text-surface-700">
                          Telefono
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          value={formState.telefono}
                          onChange={(e) => setFormState({ ...formState, telefono: e.target.value })}
                          className="mt-2 block w-full rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-medium text-surface-700">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        required
                        rows={5}
                        value={formState.mensaje}
                        onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                        className="mt-2 block w-full resize-none rounded-xl border border-surface-200 bg-white px-4 py-3 text-sm text-surface-900 shadow-sm transition-colors focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500/20"
                        placeholder="Cuentanos como podemos ayudarte..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="magnetic inline-flex items-center gap-2 rounded-xl bg-accent-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-accent-600/25 transition-all hover:bg-accent-500 hover:shadow-accent-500/30"
                    >
                      Enviar mensaje
                      <Send className="h-4 w-4" />
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-2">
              <ScrollReveal delay={0.1}>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/56912345678?text=Hola%2C%20me%20interesa%20CuentaX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-2xl border border-green-200 bg-green-50 p-6 transition-all duration-300 hover:shadow-lg hover:border-green-300"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-600">
                      <MessageCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-surface-900">WhatsApp</h3>
                      <p className="text-sm text-surface-500">Respuesta inmediata en horario laboral</p>
                    </div>
                  </a>

                  {/* Contact Info */}
                  <div className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-surface-900">Informacion de contacto</h3>
                    <ul className="mt-4 space-y-4">
                      <li className="flex items-start gap-3">
                        <Mail className="mt-0.5 h-5 w-5 text-primary-500" />
                        <div>
                          <p className="text-sm font-medium text-surface-700">Email</p>
                          <a href="mailto:hola@cuentax.cl" className="text-sm text-primary-600 hover:text-primary-500">
                            hola@cuentax.cl
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Phone className="mt-0.5 h-5 w-5 text-primary-500" />
                        <div>
                          <p className="text-sm font-medium text-surface-700">Telefono</p>
                          <a href="tel:+56212345678" className="text-sm text-primary-600 hover:text-primary-500">
                            +56 2 1234 5678
                          </a>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <MapPin className="mt-0.5 h-5 w-5 text-primary-500" />
                        <div>
                          <p className="text-sm font-medium text-surface-700">Oficina</p>
                          <p className="text-sm text-surface-500">Santiago, Chile</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Clock className="mt-0.5 h-5 w-5 text-primary-500" />
                        <div>
                          <p className="text-sm font-medium text-surface-700">Horario</p>
                          <p className="text-sm text-surface-500">Lun - Vie, 9:00 - 18:00 CLT</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Social */}
                  <div className="rounded-2xl border border-surface-200 bg-white p-6 shadow-sm">
                    <h3 className="font-bold text-surface-900">Siguenos</h3>
                    <div className="mt-4 flex gap-3">
                      <a
                        href="https://linkedin.com/company/cuentax"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-colors hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200"
                        aria-label="LinkedIn"
                      >
                        <Globe className="h-5 w-5" />
                      </a>
                      <a
                        href="https://instagram.com/cuentax_cl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-200 text-surface-500 transition-colors hover:bg-primary-50 hover:text-primary-600 hover:border-primary-200"
                        aria-label="Instagram"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>

                  {/* Map placeholder */}
                  <div className="overflow-hidden rounded-2xl border border-surface-200 bg-surface-100 shadow-sm">
                    <div className="flex h-48 items-center justify-center text-surface-400">
                      <div className="text-center">
                        <MapPin className="mx-auto h-8 w-8" />
                        <p className="mt-2 text-sm">Santiago, Chile</p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
