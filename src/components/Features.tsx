/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';
import { SERVICES, BRAND_INFO } from '../data';

interface FeaturesProps {
  onSelectService: (serviceId: string) => void;
}

export default function Features({ onSelectService }: FeaturesProps) {
  // Safe dynamic lucide-react icon rendering helper
  const renderIcon = (iconName: string, className = "w-6 h-6") => {
    const LucideIcon = (Icons as any)[iconName];
    if (LucideIcon) {
      return <LucideIcon className={className} />;
    }
    // Fallback icon
    return <Icons.Activity className={className} />;
  };

  return (
    <section 
      id="no-traditional-agency-marketing-section"
      className="bg-transparent py-20 lg:py-28 relative transition-colors duration-500"
    >
      {/* Subtle Petroleum mesh back light shadow */}
      <div className="absolute top-1/2 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-[#013a63]/5 blur-[150px] pointer-events-none select-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Differentiation Block Header */}
        <div 
          id="differentiator-header-box"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-zinc-200/50 dark:border-zinc-900 pb-16"
        >
          <div className="lg:col-span-5">
            <span className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
              El Manifiesto de Mensajes.net
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-950 dark:text-white mt-3 lg:mt-4 leading-tight">
              {BRAND_INFO.differentiator.title}
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-zinc-650 dark:text-zinc-400 font-sans text-base sm:text-lg leading-relaxed border-l-2 border-cyan-500/60 pl-6 lg:pl-10">
              {BRAND_INFO.differentiator.description}
            </p>
          </div>
        </div>

        {/* 7 Services Section Title */}
        <div id="services-grid-header" className="mt-20 text-center">
          <span className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
            Portafolio Operativo
          </span>
          <h2 className="font-display font-medium tracking-tight text-zinc-950 dark:text-white text-3xl sm:text-4xl mt-3">
            Nuestros Módulos de Influencia Táctica
          </h2>
          <p className="text-zinc-550 dark:text-zinc-500 text-sm mt-3 max-w-xl mx-auto">
            Soluciones estructuradas científicamente para liderar percepciones públicas de alto valor.
          </p>
        </div>

        {/* Dynamic Bento Grid - 7 Modules of Communication */}
        <div 
          id="services-concentric-grid"
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((srv, index) => {
            // Give specific bento sizing and visual cues based on index to look exceptional
            const isLargeCell = index === 0 || index === 3;
            
            return (
              <div
                key={srv.id}
                id={`card-pivotal-service-${srv.id}`}
                onClick={() => onSelectService(srv.id)}
                className={`group relative overflow-hidden rounded bg-white/70 dark:bg-zinc-950/80 p-8 border border-zinc-200 dark:border-zinc-900 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col justify-between backdrop-blur-sm ${
                  isLargeCell ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Subtle digital numbering on corners */}
                <span className="absolute top-4 right-6 font-mono text-[10px] text-zinc-400 dark:text-zinc-700 tracking-wider font-semibold">
                  MÓD_0{index + 1}
                </span>

                <div>
                  {/* Glowing Icon Hub */}
                  <div className="inline-flex p-3 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 group-hover:border-cyan-500/20 group-hover:box-glow transition-all duration-300 mb-6">
                    {renderIcon(srv.iconName, "w-6 h-6")}
                  </div>

                  <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-white group-hover:text-cyan-650 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {srv.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans">
                    {srv.shortDescription}
                  </p>
                </div>

                {/* Micro indicator footer */}
                <div className="mt-8 pt-4 border-t border-zinc-200 dark:border-zinc-900/40 flex items-center justify-between text-xs font-mono text-zinc-500 dark:text-zinc-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                  <span className="uppercase tracking-wider">Ver Ingeniería</span>
                  <Icons.ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Operating Process Banner Info */}
        <div 
          id="how-we-operate-banner"
          className="mt-20 border border-zinc-200 dark:border-zinc-900 bg-gradient-to-r from-zinc-50/50 via-white/80 to-zinc-50/50 dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 rounded p-8 sm:p-12 relative overflow-hidden backdrop-blur-sm transition-all duration-500"
        >
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4">
              <span className="font-mono text-[9px] tracking-widest text-cyan-650 dark:text-cyan-500 uppercase font-bold">
                Metodología Científica
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-zinc-950 dark:text-white mt-1.5 leading-tight">
                Cómo operamos en Mensajes.net
              </h2>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Op Step 1 */}
              <div>
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-extrabold text-lg">01.</span>
                <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white mt-1">Auditoría y Mapeo</h4>
                <p className="text-[11px] sm:text-xs text-zinc-650 dark:text-zinc-400 mt-2 font-sans leading-relaxed">
                  Extracción masiva de datos y modelado probabilístico de percepciones preexistentes para revelar vulnerabilidades.
                </p>
              </div>

              {/* Op Step 2 */}
              <div>
                <span className="font-mono text-teal-600 dark:text-teal-400 font-extrabold text-lg">02.</span>
                <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white mt-1">Ingeniería Narrativa</h4>
                <p className="text-[11px] sm:text-xs text-zinc-650 dark:text-zinc-400 mt-2 font-sans leading-relaxed">
                  Desarrollo de mensajes herméticos blindados frente a sesgos colectivos y con base psicográfica de precisión.
                </p>
              </div>

              {/* Op Step 3 */}
              <div>
                <span className="font-mono text-blue-600 dark:text-blue-400 font-extrabold text-lg">03.</span>
                <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white mt-1">Intervención de Pauta</h4>
                <p className="text-[11px] sm:text-xs text-zinc-655 dark:text-zinc-400 mt-2 font-sans leading-relaxed">
                  Distribución algorítmica invisible para encauzar la pauta directamente sobre el feudo de opinión de decisores clave.
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
