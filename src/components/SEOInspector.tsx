/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FileCode, Globe, Copy, Check, Terminal, ExternalLink, HelpCircle, Palette } from 'lucide-react';
import { SITEMAP_XML, ROBOTS_TXT, BRAND_INFO, SEO_METADATA } from '../data';

export default function SEOInspector() {
  const [activeTab, setActiveTab] = useState<'astro' | 'seo' | 'files' | 'identity'>('astro');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const astroTemplate = `---
// src/pages/index.astro
// Preparado para construir con Astro y componentes interactivos React de Mensajes.net
import Layout from '../layouts/Layout.astro';
import Header from '../components/Header.jsx';
import Hero from '../components/Hero.jsx';
import Features from '../components/Features.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServicesDetail from '../components/ServicesDetail.jsx';
import InsightsSection from '../components/InsightsSection.jsx';
import ContactSection from '../components/ContactSection.jsx';
import Footer from '../components/Footer.jsx';

const seoData = {
  title: "Mensajes.net | Inteligencia en Comunicación Estratégica",
  description: "Firma especializada en posicionamiento del poder, arquitectura de opinión pública e influencia."
};
---

<Layout title={seoData.title} description={seoData.description}>
  <!-- Encabezado corporativo React con hidratación reactiva -->
  <Header client:load />
  
  <main>
    <Hero client:visible />
    <Features client:visible />
    <AboutSection client:visible />
    <ServicesDetail client:visible />
    <InsightsSection client:visible />
    <ContactSection client:load />
  </main>
  
  <Footer />
</Layout>`;

  const ogTagsSnippet = `<!-- Pegar en el <head> de sus páginas HTML estáticas o layouts de Hugo/Eleventy -->
<title>${SEO_METADATA.default.title}</title>
<meta name="description" content="${SEO_METADATA.default.description}" />
<meta name="keywords" content="${SEO_METADATA.default.keywords.join(', ')}" />

<!-- Protocolo Open Graph de Percepción Facebook/LinkedIn -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://mensajesnet.com/" />
<meta property="og:title" content="${SEO_METADATA.default.title}" />
<meta property="og:description" content="${SEO_METADATA.default.description}" />
<meta property="og:image" content="https://mensajesnet.com/og-image-mensajes-net.png" />

<!-- Tarjetas X (anteriormente Twitter) de Red de Influencia -->
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="${SEO_METADATA.default.title}" />
<meta property="twitter:description" content="Diseño de matriz reputacional blindada." />`;

  return (
    <section 
      id="seo-integration-hub-dashboard"
      className="bg-transparent py-16 lg:py-24 border-t border-zinc-205 dark:border-zinc-950 transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Module Header block */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 border-b border-zinc-200 dark:border-zinc-900 pb-10">
          <div>
            <span className="font-mono text-[9px] tracking-widest text-cyan-600 dark:text-[#06b6d4] uppercase font-bold flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5" />
              Soporte de Desarrollo Técnico
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-zinc-950 dark:text-white mt-3">
              Módulo de Integración Estática y SEO
            </h2>
            <p className="text-zinc-600 dark:text-zinc-500 text-sm mt-1.5 font-sans leading-relaxed">
              Consulte y exporte los activos listos para su despliegue en ambientes de hosting compartido, Astro, Hugo o Eleventy.
            </p>
          </div>

          {/* Quick buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'astro', label: 'Integra en Astro', icon: FileCode },
              { id: 'seo', label: 'Meta Etiquetas SEO', icon: Globe },
              { id: 'files', label: 'Sitemap / Robots', icon: Terminal },
              { id: 'identity', label: 'Identidad de Marca', icon: Palette }
            ].map((btn) => {
              const TabIcon = btn.icon;
              return (
                <button
                  key={btn.id}
                  onClick={() => setActiveTab(btn.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded text-xs font-mono font-medium border cursor-pointer transition-all ${
                    activeTab === btn.id
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800/80 box-glow'
                      : 'bg-white dark:bg-zinc-950 border-zinc-200 dark:border-zinc-900 text-zinc-550 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  <TabIcon className="w-4 h-4 shrink-0" />
                  <span>{btn.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dashboard Display Case */}
        <div className="grid grid-cols-1 gap-8">
          
          {/* ASTRO TAB INTEGRATION */}
          {activeTab === 'astro' && (
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded p-6 sm:p-10 backdrop-blur-sm shadow-sm transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white">Esquema de Plantilla Astro (.astro)</h3>
                  <p className="text-xs text-zinc-550 dark:text-zinc-500 font-sans mt-1">Este código demuestra la integración modular directa de los componentes interactivos React.</p>
                </div>
                <button
                  onClick={() => handleCopy(astroTemplate, 'astro')}
                  className="w-fit flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1.5 px-3.5 rounded transition-all cursor-pointer"
                >
                  {copiedKey === 'astro' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'astro' ? 'Copiado' : 'Copiar Plantilla'}</span>
                </button>
              </div>

              <pre className="p-5 rounded bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-850 overflow-x-auto text-[11px] sm:text-xs font-mono text-cyan-705 dark:text-cyan-300 leading-relaxed max-h-[420px]">
                {astroTemplate}
              </pre>

              <div className="mt-6 flex gap-4 p-4 rounded border border-cyan-200 dark:border-cyan-950 bg-cyan-50/50 dark:bg-cyan-950/15 text-xs text-zinc-600 dark:text-zinc-400 font-sans leading-relaxed">
                <HelpCircle className="w-5 h-5 text-cyan-600 dark:text-cyan-500 shrink-0 mt-0.5" />
                <p>
                  <strong>Instrucción Técnica:</strong> Los componentes están diseñados en React 19 y Tailwind CSS v4. En un entorno de Astro, use la directiva <code className="text-cyan-600 dark:text-cyan-300 font-mono font-bold">client:load</code> para los encabezados interactivos y el formulario de contacto, y <code className="text-cyan-600 dark:text-cyan-300 font-mono font-bold">client:visible</code> para pautas de alta visibilidad diferida (mejorando la carga rápida de hosting compartido).
                </p>
              </div>
            </div>
          )}

          {/* SEO AND META TAGS TAB */}
          {activeTab === 'seo' && (
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded p-6 sm:p-10 backdrop-blur-sm shadow-sm transition-colors duration-500">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white">Etiquetas Header de Percepción</h3>
                  <p className="text-xs text-zinc-550 dark:text-zinc-500 font-sans mt-1">Metadatos estructurados para la indexación semántica en motores de búsqueda y consolas ejecutivas en la web.</p>
                </div>
                <button
                  onClick={() => handleCopy(ogTagsSnippet, 'seo')}
                  className="w-fit flex items-center gap-2 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white py-1.5 px-3.5 rounded transition-all cursor-pointer"
                >
                  {copiedKey === 'seo' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'seo' ? 'Copiado' : 'Copiar Encabezado'}</span>
                </button>
              </div>

              <pre className="p-5 rounded bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-850 overflow-x-auto text-[11px] sm:text-xs font-mono text-zinc-800 dark:text-white leading-relaxed max-h-[380px]">
                {ogTagsSnippet}
              </pre>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-zinc-50/50 dark:bg-zinc-900/40 rounded border border-zinc-200 dark:border-zinc-900 text-xs font-sans">
                  <h4 className="font-display font-bold text-zinc-900 dark:text-white mb-1.5">Estrategia semántica de indexación</h4>
                  <p className="text-zinc-550 dark:text-zinc-500 leading-normal">
                    Evitamos términos masivos competitivos y genéricos. Nos enfocamos exclusivamente en palabras de alta autoridad para captar el tráfico directivo e institucional que realmente promueve contratos comerciales y de estado.
                  </p>
                </div>
                <div className="p-4 bg-zinc-50/50 dark:bg-zinc-900/40 rounded border border-zinc-200 dark:border-zinc-900 text-xs font-sans">
                  <h4 className="font-display font-bold text-zinc-900 dark:text-white mb-1.5">Open Graph unificado</h4>
                  <p className="text-zinc-550 dark:text-zinc-500 leading-normal">
                    Preparamos los vectores de imagen OgImage para previsualizarse con excelente estatus visual al compartirse mediante redes como LinkedIn, iMessage o canales internos directivos.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SITEMAP & ROBOTS.TXT TAB */}
          {activeTab === 'files' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              
              {/* Sitemap.xml file card */}
              <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded p-6 backdrop-blur-sm shadow-sm transition-colors duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                    <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white font-mono">/sitemap.xml</h4>
                  </div>
                  <button
                    onClick={() => handleCopy(SITEMAP_XML, 'sitemap')}
                    className="text-zinc-500 hover:text-zinc-905 p-1.5 rounded cursor-pointer"
                    title="Copiar código sitemap"
                  >
                    {copiedKey === 'sitemap' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="p-4 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 rounded text-[11px] font-mono text-emerald-700 dark:text-emerald-400 overflow-x-auto h-[260px] leading-relaxed">
                  {SITEMAP_XML}
                </pre>
              </div>

              {/* Robots.txt file card */}
              <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded p-6 backdrop-blur-sm shadow-sm transition-colors duration-500">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                    <h4 className="font-display font-bold text-sm text-zinc-900 dark:text-white font-mono">/robots.txt</h4>
                  </div>
                  <button
                    onClick={() => handleCopy(ROBOTS_TXT, 'robots')}
                    className="text-zinc-500 hover:text-zinc-905 p-1.5 rounded cursor-pointer"
                    title="Copiar código Robots"
                  >
                    {copiedKey === 'robots' ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="p-4 bg-zinc-50 dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-900 rounded text-[11px] font-mono text-cyan-705 dark:text-cyan-300 overflow-x-auto h-[260px] leading-relaxed">
                  {ROBOTS_TXT}
                </pre>
              </div>

            </div>
          )}

          {/* BRAND IDENTITY DECALOGUE TAB */}
          {activeTab === 'identity' && (
            <div className="bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 rounded p-6 sm:p-10 backdrop-blur-sm shadow-sm transition-colors duration-500">
              <h3 className="font-display font-bold text-base text-zinc-900 dark:text-white mb-6">Guía de Identidad Digital Mensajes.net</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Palette specs */}
                <div className="p-4 rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <h4 className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                    Esquema Cromático
                  </h4>
                  <ul className="text-xs space-y-2 text-zinc-600 dark:text-zinc-400 font-mono">
                    <li className="flex justify-between"><span>Negro Profundo:</span> <span className="text-zinc-950 dark:text-white">#000000</span></li>
                    <li className="flex justify-between"><span>Fondo Oscuro:</span> <span className="text-zinc-950 dark:text-white">#040406</span></li>
                    <li className="flex justify-between"><span>Azul Petróleo:</span> <span className="text-zinc-950 dark:text-white">#012a4a</span></li>
                    <li className="flex justify-between"><span>Turquesa Técnico:</span> <span className="text-zinc-950 dark:text-white">#06b6d4</span></li>
                  </ul>
                </div>

                {/* Typography specs */}
                <div className="p-4 rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <h4 className="font-display font-bold text-sm text-zinc-800 dark:text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
                    Paquete Tipográfico
                  </h4>
                  <ul className="text-xs space-y-2 text-zinc-600 dark:text-zinc-400 font-mono">
                    <li className="flex justify-between"><span>Display/Títulos:</span> <span className="text-zinc-950 dark:text-white">Montserrat</span></li>
                    <li className="flex justify-between"><span>Párrafos/Text:</span> <span className="text-zinc-950 dark:text-white">Inter</span></li>
                    <li className="flex justify-between"><span>Metadatos/Códigos:</span> <span className="text-zinc-950 dark:text-white">JetBrains Mono</span></li>
                  </ul>
                </div>

                {/* Tone rules alignment */}
                <div className="p-4 rounded border border-zinc-200 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-900/30">
                  <h4 className="font-display font-bold text-sm text-zinc-805 dark:text-zinc-300 mb-3 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                    Reglas del Discurso
                  </h4>
                  <p className="text-[11px] text-zinc-550 dark:text-zinc-500 font-sans leading-relaxed">
                    Operamos bajo la premisa de ingeniería de la opinión pública. Queda prohibido el lenguaje entusiasta, clichés de ventas baratas o slogans vacíos. Priorizamos los enunciados científicos deterministas.
                  </p>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
