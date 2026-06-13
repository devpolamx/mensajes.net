/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, Phone, Mail, Landmark, MessageSquare, ClipboardCheck, Shield, Lock, BellRing } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    institution: '',
    role: '',
    email: '',
    phone: '',
    objective: 'reputacion-corporativa',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate high-security transmission delay
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1500);
  };

  const objectives = [
    { value: 'reputacion-corporativa', label: 'Gestión / Blindaje de Reputación Corporativa' },
    { value: 'marketing-politico', label: 'Estrategia Electoral / Campaña de Poder' },
    { value: 'comunicacion-de-crisis', label: 'Contención Táctica de Crisis Reputacional' },
    { value: 'pauta-inteligente', label: 'Pauta Programática Dirigida a Decisores' },
    { value: 'ecosistema-digital', label: 'Despliegue Técnico de Ecosistema Digital' },
    { value: 'audiencia-elite', label: 'Captación de Cuentas Estratégicas B2B' },
    { value: 'diagnostico-semiotico', label: 'Auditoría / Diagnóstico de Percepción' }
  ];

  return (
    <section
      id="contact-form-section-wrapper"
      className="bg-transparent py-20 lg:py-28 relative transition-colors duration-500"
    >
      {/* Background radial glow */}
      <div className="absolute bottom-1/4 left-1/2 -z-10 h-[400px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-950/10 blur-[130px] pointer-events-none select-none" />

      {/* FIXED WHATSAPP BUTTON */}
      <a
        href="https://wa.me/5215500000000?text=Hola%20Mensajes.net,%20deseo%20solicitar%20un%20diagnóstico%20estratégico%20de%20comunicación%20privado."
        target="_blank"
        rel="noopener noreferrer"
        id="fixed-whatsapp-widget"
        className="fixed bottom-6 right-6 z-50 group flex items-center gap-1.5 bg-[#128c7e] hover:bg-[#075e54] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-green-400"
        title="Establecer canal encriptado de WhatsApp"
        aria-label="Contactar por WhatsApp"
      >
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-xs font-semibold uppercase tracking-wider font-mono whitespace-nowrap pl-0 group-hover:pl-2">
          Consultor de Turno WA
        </span>
        <svg
          className="w-6 h-6 shrink-0 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Header Title Section */}
        <div className="max-w-3xl mb-16 border-b border-zinc-200/50 dark:border-zinc-900 pb-10">
          <span className="font-mono text-[10px] tracking-widest text-cyan-650 dark:text-cyan-400 uppercase font-semibold">
            Canal de acceso reservado
          </span>
          <h1
            id="contacto-headline"
            className="font-display font-medium text-3xl sm:text-4xl text-zinc-950 dark:text-white mt-4"
          >
            Agendar Reunión Estratégica
          </h1>
          <p className="text-zinc-650 dark:text-zinc-500 text-sm mt-3 font-sans transition-colors">
            Inicie una auditoría privada bajo el más estricto acuerdo de confidencialidad. Contáctenos para agendar un diagnóstico de percepción.
          </p>
        </div>

        {/* Binary Form / Info Grid */}
        <div id="contact-split-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Panel: High Security Indicators */}
          <div className="lg:col-span-4 space-y-8">

            <div className="space-y-4 text-xs font-mono">
              <span className="text-[9px] text-zinc-500 dark:text-zinc-600 tracking-wider uppercase font-bold block">
                COORDENADAS DE ACCESO
              </span>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-400 p-3 rounded bg-white/60 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-900/40 backdrop-blur-sm shadow-sm">
                <Phone className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span>+52 (55) 8000 9500 (Latam Central)</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-400 p-3 rounded bg-white/60 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-900/40 backdrop-blur-sm shadow-sm">
                <Mail className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span>gabinete@mensajes.net</span>
              </div>

              <div className="flex items-center gap-3 text-zinc-700 dark:text-zinc-400 p-3 rounded bg-white/60 dark:bg-zinc-950/40 border border-zinc-200/50 dark:border-zinc-900/40 backdrop-blur-sm shadow-sm">
                <Landmark className="w-4.5 h-4.5 text-cyan-500 shrink-0" />
                <span>Oficinas Ejecutivas, CDMX - Madrid - DC</span>
              </div>
            </div>
          </div>

          {/* Right Panel: The Interactive form */}
          <div className="lg:col-span-8 bg-white/75 dark:bg-zinc-950/90 border border-zinc-201 dark:border-zinc-900 rounded p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm shadow-sm transition-all duration-500">

            {/* Top border decor */}
            <div className="absolute top-0 right-0 w-32 h-1 bg-gradient-to-l from-cyan-500 to-blue-600" />

            {!formSubmitted ? (
              <form
                id="strategic-contact-form"
                onSubmit={handleFormSubmit}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Nombre completo */}
                  <div>
                    <label htmlFor="fullName" className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      required
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="Ej. Gral. Alfonso Duarte"
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-850 focus:border-cyan-500 rounded py-3 px-4 text-sm text-zinc-900 dark:text-white focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-colors"
                    />
                  </div>

                  {/* Empresa / institución */}
                  <div>
                    <label htmlFor="institution" className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                      Empresa / Institución *
                    </label>
                    <input
                      required
                      type="text"
                      id="institution"
                      name="institution"
                      value={formData.institution}
                      onChange={handleInputChange}
                      placeholder="Ej. Consorcio Energético Latam"
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-850 focus:border-cyan-500 rounded py-3 px-4 text-sm text-zinc-900 dark:text-white focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {/* Cargo */}
                  <div className="sm:col-span-1">
                    <label htmlFor="role" className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                      Cargo / Rango *
                    </label>
                    <input
                      required
                      type="text"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Ej. Director Corporativo"
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-850 focus:border-cyan-500 rounded py-3 px-4 text-sm text-zinc-900 dark:text-white focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-colors"
                    />
                  </div>

                  {/* Correo */}
                  <div className="sm:col-span-1">
                    <label htmlFor="email" className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                      Correo Institucional *
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="firma@institucional.org"
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-850 focus:border-cyan-500 rounded py-3 px-4 text-sm text-zinc-900 dark:text-white focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-colors"
                    />
                  </div>

                  {/* Teléfono */}
                  <div className="sm:col-span-1">
                    <label htmlFor="phone" className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                      Teléfono de Contacto *
                    </label>
                    <input
                      required
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+52 55 1234 5678"
                      className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-850 focus:border-cyan-500 rounded py-3 px-4 text-sm text-zinc-900 dark:text-white focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-colors"
                    />
                  </div>
                </div>

                {/* Objetivo del proyecto */}
                <div>
                  <label htmlFor="objective" className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                    Objetivo Primordial del Proyecto *
                  </label>
                  <select
                    id="objective"
                    name="objective"
                    value={formData.objective}
                    onChange={handleInputChange}
                    className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-850 focus:border-cyan-500 rounded py-3.5 px-4 text-sm text-zinc-900 dark:text-white focus:outline-none transition-colors cursor-pointer"
                  >
                    {objectives.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300 font-sans py-2"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mensaje */}
                <div>
                  <label htmlFor="message" className="block text-[11px] font-mono text-zinc-700 dark:text-zinc-400 uppercase tracking-wider font-semibold mb-2">
                    Detalles Adicionales del Requerimiento / Notas *
                  </label>
                  <textarea
                    required
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Describa brevemente el alcance de la percepción requerida o la urgencia de crisis operativa..."
                    className="w-full bg-zinc-50 dark:bg-black border border-zinc-200 dark:border-zinc-855 focus:border-cyan-500 rounded py-3 px-4 text-sm text-zinc-900 dark:text-white focus:outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-700 transition-colors resize-none"
                  />
                </div>

                {/* Submit strategic CTA */}
                <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-zinc-200 dark:border-zinc-900/60">
                  <div className="flex items-center gap-2">
                    <MessageSquare className="w-4.5 h-4.5 text-cyan-500" />
                    <span className="font-mono text-[10px] text-zinc-550 dark:text-zinc-500 tracking-wider">
                      Respuesta aproximada: 45 Minutos
                    </span>
                  </div>

                  <button
                    id="btn-submit-strategic-diagnostic"
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto relative cursor-pointer inline-flex items-center justify-center rounded bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow-lg focus:outline-none disabled:opacity-50 transition-all duration-300 hover:scale-[1.01]"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-white/25 border-t-white rounded-full animate-spin" />
                        <span>Encriptando datos...</span>
                      </div>
                    ) : (
                      <>
                        <span>Agendar Reunión Estratégica</span>
                        <Send className="ml-2.5 h-3.5 w-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            ) : (
              /* High status receipt page on submit */
              <div
                id="high-security-form-receipt"
                className="text-center py-12 animate-in fade-in zoom-in-95 duration-500"
              >
                <div className="mx-auto inline-flex p-4 rounded-full bg-cyan-950/30 border border-cyan-800/50 text-cyan-505 dark:text-cyan-400 mb-6 box-glow">
                  <ClipboardCheck className="w-12 h-12" />
                </div>

                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-900 dark:text-white">
                  Petición Recibida Bajo Reserva
                </h3>

                <h4 className="font-mono text-[9px] text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-widest mt-2">
                  PROTOCOLO ESTADO: ACTIVO / EXPEDIENTE_0092B
                </h4>

                <p className="mt-6 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed font-sans">
                  Estimado/a <span className="text-zinc-950 dark:text-white font-semibold">{formData.fullName}</span>, hemos cifrado y archivado su consulta de percepción estratégicamente para la institución <span className="text-zinc-[950] dark:text-white font-semibold">{formData.institution}</span>.
                </p>

                <p className="mt-4 text-xs text-zinc-550 dark:text-zinc-500 max-w-lg mx-auto font-sans leading-relaxed">
                  Un estructurador asignado a su sector validará las coordenadas de comunicación física/digital proporcionadas e iniciará contacto prioritario en un plazo no mayor a 45 minutos.
                </p>

                <div className="mt-10 p-4 rounded bg-zinc-50/50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-850/60 text-[10px] font-mono text-zinc-500 max-w-md mx-auto space-y-1.5 text-left">
                  <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-950 pb-1">
                    <span>TRANSMISIÓN METADATOS:</span>
                    <span className="text-cyan-600 dark:text-cyan-500">SSL_SECURED_TLSv1.3</span>
                  </div>
                  <div className="flex justify-between border-b border-zinc-200 dark:border-zinc-950 pb-1">
                    <span>DESTINATARIO:</span>
                    <span className="text-zinc-650 dark:text-zinc-400">gabinete_mensajes_net@secure.node</span>
                  </div>
                  <div className="flex justify-between font-bold">
                    <span>CUSTODIA NDA ACTIVADA:</span>
                    <span className="text-emerald-600 dark:text-emerald-500">VIGENTE 99 AÑOS</span>
                  </div>
                </div>

                <div className="mt-10">
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs font-mono text-cyan-600 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 underline"
                  >
                    Enviar una nueva petición de diagnóstico
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
