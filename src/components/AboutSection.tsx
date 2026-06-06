/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import * as Icons from 'lucide-react';
import { VALUES } from '../data';
import businessImg from '../assets/images/business.jpg';

export default function AboutSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const renderIcon = (iconName: string, className = "w-6 h-6 text-cyan-400") => {
    const LucideIcon = (Icons as any)[iconName];
    if (LucideIcon) {
      return <LucideIcon className={className} />;
    }
    return <Icons.ShieldCheck className={className} />;
  };

  return (
    <section 
      id="about-institutional-section"
      className="bg-transparent py-20 lg:py-28 relative overflow-hidden transition-colors duration-500"
    >
      {/* Glow ambient background meshes */}
      <div className="absolute bottom-0 right-0 -z-10 h-[400px] w-[400px] rounded-full bg-cyan-900/5 blur-[120px] pointer-events-none select-none" />
      <div className="absolute top-1/4 left-1/4 -z-10 h-[300px] w-[300px] rounded-full bg-blue-900/10 blur-[100px] pointer-events-none select-none" />

      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Title Block Section split grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-zinc-200/50 dark:border-zinc-900 pb-12 mb-16">
          <div className="lg:col-span-7">
            <span className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold">
              Confidencialidad y Estructura
            </span>
            <h1 
              id="about-main-title"
              className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-white mt-4 tracking-tight leading-tight"
            >
              Construimos percepción estratégica de alto calibre.
            </h1>
            <p className="font-sans text-zinc-650 dark:text-zinc-400 text-sm sm:text-base mt-4 leading-relaxed max-w-xl transition-colors">
              Socio estratégico indispensable para juntas de gobierno corporativo, secretarios de Estado, comités presidenciales e inversionistas globales de alta jerarquía.
            </p>
          </div>
          <div className="lg:col-span-5 relative select-none w-full h-full flex items-center justify-end">
            <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src={businessImg} 
                alt="Perspectiva de Negocios Corporativos" 
                className="w-full h-full object-cover object-center opacity-70 dark:opacity-80 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent dark:from-[#030303] dark:via-[#030303]/25 dark:to-transparent transition-colors duration-500" />
            </div>
          </div>
        </div>

        {/* Narrative Split Block */}
        <div id="about-narrative-split" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950 dark:text-white">
              Sistemas de legitimación en la era de la saturación informativa.
            </h3>
            
            <p className="font-sans text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed text-justify transition-colors">
              Mensajes.net nace en respuesta al colapso de los modelos de publicidad tradicional. Hoy en día, la visibilidad por sí sola no otorga influencia. De hecho, un exceso de exposición descontrolada degrada instantáneamente la autoridad técnica u operacional de las firmas e instituciones públicas ante contingencias regulatorias o de mercado.
            </p>

            <p className="font-sans text-zinc-650 dark:text-zinc-400 text-sm leading-relaxed text-justify transition-colors">
              Operamos en la intersección de la ciencia de datos cuantitativa, el modelado psicográfico y la persuasión heurística. No somos redactores de boletines de prensa; somos arquitectos de la percepción de largo plazo. Analizamos los sesgos cognitivos preexistentes en los tomadores de decisión críticos, blindamos las narraciones corporativas y orientamos los mecanismos algorítmicos para asegurar hegemonía relacional.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white/70 dark:bg-zinc-950/80 border border-zinc-200 dark:border-zinc-900 rounded p-8 sm:p-10 backdrop-blur-sm shadow-sm transition-all duration-350">
            <h4 className="font-mono text-[10px] tracking-widest text-cyan-600 dark:text-cyan-400 uppercase font-semibold mb-6 flex items-center gap-2">
              <Icons.Lock className="w-4 h-4 text-cyan-500" />
              Estructura Rigurosa Corporativa
            </h4>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm">A.</div>
                <div>
                  <h5 className="font-display font-bold text-sm text-zinc-900 dark:text-white">Análisis Científico de Actores</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1 font-sans">Mapeamos y estructuramos las matrices relacionales que gobiernan el debate de políticas públicas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm">B.</div>
                <div>
                  <h5 className="font-display font-bold text-sm text-zinc-900 dark:text-white">Inmunización de Mensaje</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1 font-sans">Protegemos la legitimación de activos mediante la integración previa de auditorías semióticas blindadas.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-cyan-600 dark:text-cyan-400 font-mono font-bold text-sm">C.</div>
                <div>
                  <h5 className="font-display font-bold text-sm text-zinc-900 dark:text-white">Secretismo Operacional Privado</h5>
                  <p className="text-xs text-zinc-500 dark:text-zinc-500 mt-1 font-sans">Todos nuestros diagnósticos iniciales y despliegues se ejecutan bajo convenios rígidos de no divulgación (NDA).</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Foundational Values Grid */}
        <div id="values-grid-wrapper" className="mt-24">
          <div className="text-center mb-16">
            <span className="font-mono text-[9px] tracking-widest text-[#00b4d8] dark:text-cyan-500 uppercase font-bold text-cyan-600 dark:text-cyan-500">
              Postulados Rectores
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-zinc-950 dark:text-white mt-1">
              Pilares Operativos Invariables
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((val, index) => (
              <div 
                key={val.id}
                id={`card-value-${val.id}`}
                style={{ transitionDelay: `${index * 150}ms` }}
                className={`group relative overflow-hidden p-6 rounded border transition-all duration-500 ease-out transform shadow-sm ${
                  mounted 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                } bg-white/70 dark:bg-zinc-950/60 border-zinc-200 dark:border-zinc-900 hover:border-cyan-500/40 dark:hover:border-cyan-500/30 hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.18)] dark:hover:shadow-[0_10px_35px_-10px_rgba(6,182,212,0.12)] hover:-translate-y-1 hover:scale-[1.03] hover:bg-[#fafafa]/90 dark:hover:bg-zinc-950/80 backdrop-blur-sm`}
              >
                {/* Background glow hover effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded" />

                <div className="relative z-10 mb-4 inline-flex p-2.5 rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-300 group-hover:border-cyan-500/35 group-hover:box-glow transition-all duration-500">
                  {renderIcon(val.iconName, "w-5 h-5 transition-transform duration-500 group-hover:scale-110")}
                </div>
                
                <div className="relative z-10">
                  <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white group-hover:text-cyan-650 dark:group-hover:text-cyan-400 transition-colors duration-300">
                    {val.title}
                  </h3>
                  
                  <p className="mt-3 text-[11px] sm:text-xs text-zinc-650 dark:text-zinc-400 leading-relaxed font-sans">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
