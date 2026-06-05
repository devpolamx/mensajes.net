/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import TechBackground from './components/TechBackground';
import Hero from './components/Hero';
import Features from './components/Features';
import AboutSection from './components/AboutSection';
import ServicesDetail from './components/ServicesDetail';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';
import SEOInspector from './components/SEOInspector';
import Footer from './components/Footer';
import { Terminal, Shield, Eye, FileCode, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [preselectedServiceId, setPreselectedServiceId] = useState<string>('inteligencia-estrategica');
  const [showDevConsole, setShowDevConsole] = useState<boolean>(true);
  
  // Theme selection: default dark true, persisted to localStorage
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('mensajes-theme');
      return stored !== null ? stored === 'dark' : true;
    }
    return true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('mensajes-theme', 'dark');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      localStorage.setItem('mensajes-theme', 'light');
    }
  }, [isDark]);

  // Handles clicking a service on the homepage grid
  const handleSelectServiceFromGrid = (serviceId: string) => {
    setPreselectedServiceId(serviceId);
    setActiveTab('servicios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLearnMoreServices = () => {
    setActiveTab('servicios');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleRequestDiagnostic = () => {
    setActiveTab('contacto');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-transparent text-zinc-900 dark:text-gray-150 flex flex-col justify-between font-sans selection:bg-cyan-500 selection:text-black transition-colors duration-500">
      <TechBackground />
      
      {/* 1. Header Navigation Component */}
      <Header 
        activeSection={activeTab} 
        setActiveSection={handleNavigate} 
        isDark={isDark} 
        onToggleTheme={() => setIsDark(!isDark)} 
      />

      {/* 2. Primary Layout Switching Engine */}
      <main id="primary-render-viewport" className="flex-grow">
        
        {activeTab === 'inicio' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Banner Component */}
            <Hero 
              onLearnMoreServices={handleLearnMoreServices} 
              onRequestDiagnostic={handleRequestDiagnostic} 
            />
            {/* Services bento grid and process sections */}
            <Features onSelectService={handleSelectServiceFromGrid} />

            {/* In-Between executive promotion callout */}
            <section className="bg-transparent py-16 border-t border-zinc-200/50 dark:border-zinc-900/60">
              <div className="mx-auto max-w-7xl px-6 sm:px-8">
                <div className="rounded border border-zinc-200 dark:border-zinc-900 bg-white/70 dark:bg-zinc-950/40 p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-sm transition-colors duration-500">
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-widest text-cyan-650 dark:text-cyan-400 uppercase font-semibold">
                      Pragmatismo Sólido
                    </span>
                    <h3 className="font-display font-bold text-xl sm:text-2xl text-zinc-950 dark:text-white">
                      ¿Listo para mapear sus coordenadas de influencia?
                    </h3>
                    <p className="text-zinc-650 dark:text-zinc-400 text-xs sm:text-sm font-sans max-w-xl">
                      Acceda de inmediato a un análisis inicial de vulnerabilidades reputacionales y matrices algorítmicas de su proyecto institucional o gubernamental.
                    </p>
                  </div>
                  
                  <button
                    onClick={() => handleNavigate('contacto')}
                    className="w-full md:w-auto cursor-pointer text-center relative inline-flex items-center justify-center rounded bg-zinc-100 dark:bg-zinc-900 border border-zinc-250 dark:border-zinc-800 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-cyan-650 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 hover:bg-zinc-200 dark:hover:bg-zinc-950 hover:border-cyan-500/30 transition-all duration-300 shadow"
                  >
                    Iniciar Diagnóstico Ahora
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'nosotros' && (
          <div className="animate-in fade-in duration-500">
            <AboutSection />
          </div>
        )}

        {activeTab === 'servicios' && (
          <div className="animate-in fade-in duration-500">
            <ServicesDetail 
              initialServiceId={preselectedServiceId} 
              onContactStrategic={handleRequestDiagnostic}
            />
          </div>
        )}

        {activeTab === 'insights' && (
          <div className="animate-in fade-in duration-500">
            <InsightsSection />
          </div>
        )}

        {activeTab === 'contacto' && (
          <div className="animate-in fade-in duration-500">
            <ContactSection />
          </div>
        )}

      </main>

      {/* 3. COLLAPSIBLE STATIC ASTRO / SEO INTEGRATION BAR */}
      <section 
        id="developer-integration-helper-dock"
        className="bg-zinc-950 border-t border-zinc-900 py-4 px-6 sm:px-8 select-none"
      >
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-cyan-950/40 text-cyan-400 border border-cyan-900/40 shrink-0">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                Consola de Integración Estática (Astro / SEO / Hugo Emulación)
                <span className="text-[9px] bg-cyan-950 text-cyan-400 px-1.5 py-0.5 rounded border border-cyan-900/30 font-mono">
                  COMPATIBLE HOSTING COMPARTIDO
                </span>
              </p>
              <p className="text-[10px] text-zinc-500 font-sans mt-0.5">
                Haga clic para expandir o contraer plantillas estáticas de sitemap.xml, robots.txt y encabezados Open Graph.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowDevConsole(!showDevConsole)}
            className="w-full sm:w-auto relative cursor-pointer inline-flex items-center justify-center rounded border border-zinc-800 bg-zinc-900 px-4 py-2 text-[10px] font-mono tracking-wider uppercase text-zinc-300 hover:bg-zinc-950 focus:outline-none"
          >
            {showDevConsole ? "Ocultar Consola Técnica" : "Ver Consola y Sitemap"}
          </button>
        </div>
      </section>

      {/* Show SEO/Astro inspector if enabled by developer bar */}
      {showDevConsole && (
        <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
          <SEOInspector />
        </div>
      )}

      {/* 4. Executive Footer Panel */}
      <Footer onNavigate={handleNavigate} />

    </div>
  );
}
