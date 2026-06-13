/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Database, Landmark, Briefcase, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
//import heroDeaner from '../assets/images/hero-deaner.jpg';
import heroStudioMeeting from '../assets/images/hero-studio-meeting.jpg';
//import herovitality from '../assets/images/hero-vitaly-gariev.jpg';
import herobusinessintelligence from '../assets/images/hero-business-intellisense.jpg';
interface HeroProps {
  onLearnMoreServices: () => void;
  onRequestDiagnostic: () => void;
}

function AnimatedNumber({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / 1500, 1); // 1.5s
      setCurrent(progress * value);
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [value]);
  return <span>{current.toFixed(decimals)}</span>;
}

export default function Hero({ onLearnMoreServices, onRequestDiagnostic }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section
      id="hero-executive-section"
      className="relative overflow-hidden py-20 lg:py-32 border-b border-zinc-200/50 dark:border-zinc-900 transition-colors duration-2000 min-h-[75vh] flex items-center bg-transparent"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Slide 1 */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${currentSlide === 0 ? 'opacity-20 dark:opacity-25 scale-100' : 'opacity-0 scale-105'
            }`}
          style={{ backgroundImage: `url(${heroStudioMeeting})` }}
        />
        {/* Slide 2 */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-in-out ${currentSlide === 1 ? 'opacity- 20 dark:opacity-25 scale-100' : 'opacity-0 scale-105'
            }`}
          style={{ backgroundImage: `url(${herobusinessintelligence})` }}
        />

        {/* Vignette Gradients & Blur Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/80 dark:from-[#030303]/85 dark:via-black/65 dark:to-[#030303]/85 transition-colors duration-500" />
      </div>

      <div className="mx-auto max-w-7xl px-6 sm:px-8 relative z-10 w-full">

        {/* Confidenciality Header Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/20 px-4 py-1.5 font-mono text-[10px] tracking-widest text-[#0ea5e9] dark:text-cyan-400 uppercase select-none">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Firma de Posicionamiento de Alta Jerarquía</span>
          </div>
        </div>

        {/* Content Main Headline */}
        <div className="max-w-4xl mx-auto text-center">
          <h1
            id="hero-main-title"
            className="font-display text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] sm:leading-none"
          >
            Inteligencia estratégica <br />
            <span className="bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-600 dark:from-cyan-400 dark:via-teal-300 dark:to-blue-500 bg-clip-text text-transparent">
              para construir influencia.
            </span>
          </h1>

          <p
            id="hero-subtitle"
            className="mt-8 text-base sm:text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-sans max-w-2xl mx-auto leading-relaxed transition-colors duration-500"
          >
            Diseñamos sistemas avanzados de posicionamiento, percepción del poder y comunicación estratégica de alta precisión para corporaciones, gobiernos y campañas políticas de alta incidencia.
          </p>

          {/* Premium Call Actions Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="hero-cta-primary"
              onClick={onRequestDiagnostic}
              className="w-full sm:w-auto relative cursor-pointer inline-flex items-center justify-center rounded bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <span>Solicitar Diagnóstico Estratégico</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>

            <button
              id="hero-cta-secondary"
              onClick={onLearnMoreServices}
              className="w-full sm:w-auto cursor-pointer inline-flex items-center justify-center rounded border border-zinc-300 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-950 px-8 py-4 text-xs font-semibold uppercase tracking-widest text-zinc-650 dark:text-zinc-300 transition-all hover:bg-zinc-200 dark:hover:bg-zinc-900 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-zinc-700"
            >
              <span>Conocer Servicios</span>
            </button>
          </div>
        </div>

        {/* Strategic Target Sectors Grid Indicators */}
        <div
          id="hero-target-sectors"
          className="mt-20 lg:mt-28 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Sector 1 */}
          <div className="relative group overflow-hidden rounded bg-white/70 dark:bg-zinc-950/60 p-6 border border-zinc-200 dark:border-zinc-900 transition-all hover:bg-[#fafafa]/90 dark:hover:bg-zinc-950 hover:border-cyan-500/20 dark:hover:border-cyan-500/20 backdrop-blur-sm shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-0 bg-cyan-500 transition-all group-hover:h-full duration-300" />
            <div className="mb-4 text-cyan-600 dark:text-cyan-400">
              <Briefcase className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="font-display font-bold text-lg text-zinc-905 dark:text-white mb-2">Entorno Corporativo</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Consolidación de reputación ante inversores institucionales, blindaje frente a auditorías externas y estructuración de legitimidad social B2B.
            </p>
          </div>

          {/* Sector 2 */}
          <div className="relative group overflow-hidden rounded bg-white/70 dark:bg-zinc-950/60 p-6 border border-zinc-200 dark:border-zinc-900 transition-all hover:bg-[#fafafa]/90 dark:hover:bg-zinc-950 hover:border-teal-500/20 dark:hover:border-teal-500/20 backdrop-blur-sm shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-0 bg-teal-500 transition-all group-hover:h-full duration-300" />
            <div className="mb-4 text-teal-600 dark:text-teal-400">
              <Landmark className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="font-display font-bold text-lg text-zinc-905 dark:text-white mb-2">Gobernanza y Sectores Clave</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Planificación de narrativa de estado, alineación con marcos regulatorios soberanos y legitimación de políticas de bienestar estratégico.
            </p>
          </div>

          {/* Sector 3 */}
          <div className="relative group overflow-hidden rounded bg-white/70 dark:bg-zinc-950/60 p-6 border border-zinc-200 dark:border-zinc-900 transition-all hover:bg-[#fafafa]/90 dark:hover:bg-zinc-950 hover:border-blue-500/20 dark:hover:border-blue-500/20 backdrop-blur-sm shadow-sm">
            <div className="absolute top-0 left-0 w-2 h-0 bg-blue-500 transition-all group-hover:h-full duration-300" />
            <div className="mb-4 text-blue-600 dark:text-blue-400">
              <Database className="w-8 h-8 opacity-80" />
            </div>
            <h3 className="font-display font-bold text-lg text-zinc-905 dark:text-white mb-2">Ingeniería Colectiva</h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Modelado psicográfico a gran escala, contención sistémica ante desinformación armada y persuasión quirúrgica en pauta pautada.
            </p>
          </div>
        </div>

        {/* Sophisticated Performance Stats Panel */}
        <div
          id="hero-stats-panel"
          className="mt-16 rounded border border-zinc-200 dark:border-zinc-900 bg-white/60 dark:bg-black/50 p-8 sm:p-10 select-none relative overflow-hidden backdrop-blur-sm shadow-sm transition-all duration-500 ease-out hover:scale-[1.01] hover:border-cyan-500/20 hover:shadow-[0_10px_40px_-15px_rgba(6,182,212,0.15)] group/panel"
        >
          {/* Subtle light pulse line inside */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent group-hover/panel:via-cyan-500 transition-all duration-500" />

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-zinc-200 dark:divide-zinc-900">
            <div className="pt-4 lg:pt-0 group/stat">
              <p className="font-mono text-cyan-600 dark:text-cyan-400 font-medium text-xs tracking-widest uppercase mb-1 flex items-center justify-center gap-1 transition-colors duration-300 group-hover/stat:text-cyan-500">
                <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block animate-pulse" />
                Precisión Operativa
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-950 dark:text-white transition-all duration-300 group-hover/stat:scale-105 group-hover/stat:text-glow">
                <AnimatedNumber value={99.4} decimals={1} />%
              </h2>
              <p className="text-xs text-zinc-550 dark:text-zinc-500 mt-2 font-sans">Alineación en matrices de opinión</p>
            </div>

            <div className="pt-4 lg:pt-0 lg:pl-4 group/stat">
              <p className="font-mono text-teal-600 dark:text-teal-400 font-medium text-xs tracking-widest uppercase mb-1 transition-colors duration-300 group-hover/stat:text-teal-500">
                Pauta Dirigida
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-950 dark:text-white transition-all duration-300 group-hover/stat:scale-105 group-hover/stat:text-glow">
                <AnimatedNumber value={84} />%
              </h2>
              <p className="text-xs text-zinc-550 dark:text-zinc-500 mt-2 font-sans">Eficiencia en impacto a decisores</p>
            </div>

            <div className="pt-6 lg:pt-0 lg:pl-4 group/stat">
              <p className="font-mono text-blue-600 dark:text-blue-400 font-medium text-xs tracking-widest uppercase mb-1 transition-colors duration-300 group-hover/stat:text-blue-500">
                War Rooms Liderados
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-950 dark:text-white transition-all duration-300 group-hover/stat:scale-105 group-hover/stat:text-glow">
                <AnimatedNumber value={42} />+
              </h2>
              <p className="text-xs text-zinc-550 dark:text-zinc-500 mt-2 font-sans">Contenciones de crisis de alto impacto</p>
            </div>

            <div className="pt-6 lg:pt-0 lg:pl-4 group/stat">
              <p className="font-mono text-purple-600 dark:text-purple-400 font-medium text-xs tracking-widest uppercase mb-1 transition-colors duration-300 group-hover/stat:text-purple-500">
                Influencia Blindada
              </p>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-zinc-950 dark:text-white transition-all duration-300 group-hover/stat:scale-105 group-hover/stat:text-glow">
                <AnimatedNumber value={100} />%
              </h2>
              <p className="text-xs text-zinc-550 dark:text-zinc-500 mt-2 font-sans">Garantía de confidencialidad institucional</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
