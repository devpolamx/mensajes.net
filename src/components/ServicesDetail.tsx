/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesDetailProps {
  initialServiceId?: string;
  onContactStrategic: () => void;
}

export default function ServicesDetail({ initialServiceId = 'inteligencia-estrategica', onContactStrategic }: ServicesDetailProps) {
  const [selectedId, setSelectedId] = useState(initialServiceId);

  // Sync state if initialServiceId changes externally (e.g., from home clicks)
  useEffect(() => {
    if (initialServiceId) {
      setSelectedId(initialServiceId);
    }
  }, [initialServiceId]);

  const activeService = SERVICES.find(s => s.id === selectedId) || SERVICES[0];

  const renderIcon = (iconName: string, className = "w-5 h-5") => {
    const LucideIcon = (Icons as any)[iconName];
    if (LucideIcon) {
      return <LucideIcon className={className} />;
    }
    return <Icons.Activity className={className} />;
  };

  return (
    <section 
      id="services-cockpit-interactive-module"
      className="bg-transparent py-20 lg:py-28 relative transition-colors duration-500"
    >
      {/* Background soft glows */}
      <div className="absolute top-10 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-cyan-950/10 blur-[130px] pointer-events-none select-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-16 border-b border-zinc-200/50 dark:border-zinc-900 pb-10">
          <span className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
            Ingeniería de percepción aplicada
          </span>
          <h2 className="font-display font-medium text-3xl sm:text-4xl text-zinc-950 dark:text-white mt-4">
            Nuestros Sistemas Corporativos y de Estado
          </h2>
          <p className="text-zinc-650 dark:text-zinc-500 text-sm mt-3 font-sans transition-colors">
            Módulos técnicos estandarizados diseñados para aislar vulnerabilidades, controlar la pauta publicitaria y consolidar de manera irrefutable su influencia estratégica.
          </p>
        </div>

        {/* Cockpit Interactivo Layout */}
        <div id="services-grid-cockpit" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Panel Sidebar Navigation */}
          <div className="lg:col-span-4 space-y-2 lg:sticky lg:top-24">
            <span className="font-mono text-[9px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase font-bold block mb-4 px-3">
              Seleccionar Línea Operativa
            </span>

            {SERVICES.map((srv) => {
              const isSelected = srv.id === selectedId;
              return (
                <button
                  key={srv.id}
                  id={`btn-service-tab-${srv.id}`}
                  onClick={() => setSelectedId(srv.id)}
                  className={`w-full text-left py-3 px-4 rounded text-xs sm:text-sm font-medium transition-all duration-300 flex items-center justify-between border ${
                    isSelected 
                      ? 'bg-cyan-50/50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-300 border-cyan-250 dark:border-cyan-800/80 box-glow pl-6 font-semibold' 
                      : 'text-zinc-600 dark:text-zinc-400 bg-white/70 dark:bg-zinc-950/40 border-zinc-200 dark:border-zinc-900/60 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-50 dark:hover:bg-zinc-900/30 hover:border-zinc-300 dark:hover:border-zinc-800'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isSelected ? 'text-cyan-600 dark:text-cyan-400' : 'text-zinc-500 dark:text-zinc-600'}>
                      {renderIcon(srv.iconName, "w-4 h-4 sm:w-4.5 sm:h-4.5")}
                    </span>
                    <span>{srv.title}</span>
                  </div>
                  <Icons.ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-cyan-600 dark:text-cyan-400' : 'text-zinc-400'}`} />
                </button>
              );
            })}
          </div>

          {/* Right Panel Main Details Card */}
          <div 
            id="service-detail-display-panel"
            className="lg:col-span-8 bg-white/75 dark:bg-zinc-950/80 border border-zinc-205 dark:border-zinc-900 rounded p-8 sm:p-12 relative overflow-hidden transition-all duration-500 animate-in fade-in backdrop-blur-sm shadow-sm"
            key={activeService.id} // Forces re-render with animation when selection changes
          >
            {/* Subtle top edge lines */}
            <div className="absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-600" />
            
            {/* Static identifier index */}
            <span className="absolute top-6 right-8 font-mono text-[10px] text-zinc-550 dark:text-zinc-500 font-bold uppercase tracking-wider bg-zinc-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-zinc-250 dark:border-zinc-800">
              MÓDULO DE SERVICIO
            </span>

            {/* Title & Short Description */}
            <div className="mb-8 mt-4">
              <div className="inline-flex p-4 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-cyan-600 dark:text-cyan-400 mb-6 box-glow">
                {renderIcon(activeService.iconName, "w-8 h-8")}
              </div>
              <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white leading-tight">
                {activeService.title}
              </h3>
              <p className="mt-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans font-medium">
                {activeService.shortDescription}
              </p>
            </div>

            <hr className="border-zinc-205 dark:border-zinc-900 my-8" />

            {/* Depth analysis */}
            <div className="space-y-8">
              
              {/* Core Description */}
              <div>
                <h4 className="font-mono text-[9px] tracking-widest text-cyan-600 dark:text-cyan-500 uppercase font-semibold">
                  Explicación Técnica
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-zinc-750 dark:text-zinc-300 leading-relaxed font-sans">
                  {activeService.fullDescription}
                </p>
              </div>

              {/* Problem Solved */}
              <div className="bg-red-50/50 dark:bg-red-955/20 border border-red-150 dark:border-red-950/25 rounded p-6">
                <div className="flex items-center gap-2 text-red-650 dark:text-red-400 mb-2 font-mono text-[10px] font-bold uppercase tracking-wider">
                  <Icons.AlertOctagon className="w-4 h-4" />
                  <span>Problema Semi-Crítico que Resuelve</span>
                </div>
                <p className="text-xs sm:text-sm text-red-800 dark:text-red-205/90 leading-relaxed font-sans font-medium">
                  {activeService.problem}
                </p>
              </div>

              {/* Structural Benefits list */}
              <div>
                <h4 className="font-mono text-[9px] tracking-widest text-[#00b4d8] dark:text-teal-400 uppercase font-semibold mb-4 text-cyan-600 dark:text-teal-400">
                  Beneficios e Impacto Agregado
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeService.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-3 text-xs text-zinc-650 dark:text-zinc-400 leading-normal items-start font-sans">
                      <Icons.CheckCircle2 className="w-4.5 h-4.5 text-cyan-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <hr className="border-zinc-205 dark:border-zinc-900 my-10" />

            {/* Form actions cta */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <Icons.Lock className="w-4 h-4 text-zinc-400 dark:text-zinc-600" />
                <span className="font-mono text-[10px] text-zinc-550 dark:text-zinc-500 tracking-wider uppercase">
                  Auditoría preliminar asegurada bajo NDA
                </span>
              </div>
              
              <button
                id="btn-service-cta-speak"
                onClick={onContactStrategic}
                className="w-full sm:w-auto relative cursor-pointer inline-flex items-center justify-center rounded bg-gradient-to-r from-cyan-600 to-blue-700 px-6 py-3.5 text-xs font-semibold uppercase tracking-widest text-white shadow hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
              >
                <span>Hablar con un estratega</span>
                <Icons.ArrowRight className="ml-2 h-3.5 w-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
