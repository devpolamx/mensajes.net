/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { INSIGHTS } from '../data';
import { InsightArticle } from '../types';
import { Calendar, User, Clock, ArrowLeft, ArrowUpRight, Share2, AlertCircle, Copy, Check } from 'lucide-react';
import insightsImg from '../assets/images/insights.jpg';

export default function InsightsSection() {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const parallaxRef1 = useRef<HTMLDivElement>(null);
  const parallaxRef2 = useRef<HTMLDivElement>(null);
  const parallaxRef3 = useRef<HTMLDivElement>(null);
  const parallaxRef4 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (parallaxRef1.current) {
        parallaxRef1.current.style.transform = `translateY(${scrolled * 0.12}px)`;
      }
      if (parallaxRef2.current) {
        parallaxRef2.current.style.transform = `translateY(${scrolled * 0.22}px)`;
      }
      if (parallaxRef3.current) {
        parallaxRef3.current.style.transform = `translateY(${scrolled * 0.06}px)`;
      }
      if (parallaxRef4.current) {
        parallaxRef4.current.style.transform = `translateY(${scrolled * 0.08}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedArticle]);

  const handleCopyLink = (slug: string) => {
    navigator.clipboard.writeText(`https://mensajesnet.com/insights/${slug}`);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  if (selectedArticle) {
    return (
      <section
        id="essay-full-reader-module"
        className="bg-transparent py-16 lg:py-24 relative overflow-hidden transition-colors duration-500"
      >
        {/* Parallax Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
          {/* Parallax Background Image */}
          <div
            ref={parallaxRef4}
            className="absolute inset-0 -z-20 opacity-[0.04] dark:opacity-[0.07] bg-cover bg-center bg-no-repeat pointer-events-none select-none transition-opacity duration-500 will-change-transform scale-105"
            style={{
              backgroundImage: `url(${insightsImg})`,
              filter: 'grayscale(100%) contrast(120%)',
              maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 30%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 30%, transparent 100%)'
            }}
          />
          {/* Parallax Orb 1 */}
          <div
            ref={parallaxRef1}
            className="absolute -top-20 left-[10%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 dark:bg-cyan-900/5 blur-[120px] will-change-transform"
          />
          {/* Parallax Orb 2 */}
          <div
            ref={parallaxRef2}
            className="absolute top-[40%] right-[5%] h-[400px] w-[400px] rounded-full bg-blue-600/10 dark:bg-indigo-950/10 blur-[140px] will-change-transform"
          />
          {/* Parallax Grid Pattern */}
          <div
            ref={parallaxRef3}
            className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#00bcd433_1px,transparent_1px)] bg-[size:3rem_3rem] will-change-transform"
            style={{
              maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, ñtransparent 100%)'
            }}
          />
        </div>
        <div className="mx-auto max-w-4xl px-6 sm:px-8">

          {/* Back button */}
          <button
            id="btn-back-to-insights-grid"
            onClick={() => setSelectedArticle(null)}
            className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 mb-10 transition-colors"
          >
            <ArrowLeft className="w-4.5 h-4.5 transition-transform group-hover:-translate-x-1" />
            <span>Volver a Insights Estratégicos</span>
          </button>

          {/* Full Article Content Frame */}
          <article className="prose prose-zinc dark:prose-invert max-w-none text-zinc-700 dark:text-zinc-300 transition-colors">

            {/* Header elements */}
            <header className="border-b border-zinc-200/50 dark:border-zinc-900 pb-8 mb-10">
              <span className="font-mono text-[9px] tracking-widest text-cyan-650 dark:text-cyan-500 uppercase font-bold bg-cyan-50/50 dark:bg-cyan-950/20 px-2.5 py-1 rounded border border-cyan-200 dark:border-cyan-800/25">
                {selectedArticle.category}
              </span>

              <h1
                id={`article-reader-headline-${selectedArticle.id}`}
                className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl text-zinc-950 dark:text-white mt-6 tracking-tight leading-tight"
              >
                {selectedArticle.title}
              </h1>

              {/* Authoring & Metadata */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-6 text-xs text-zinc-550 dark:text-zinc-500 font-mono">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-cyan-500/80" />
                  <span>{selectedArticle.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-cyan-500/80" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-cyan-500/80" />
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>
            </header>

            {/* Dynamic visual placeholder of logo for premium atmosphere */}
            <div className="mb-10 p-6 rounded bg-zinc-55/50 dark:bg-zinc-950 border border-zinc-201 dark:border-zinc-900 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-cyan-500 shrink-0" />
                <span className="text-[11px] sm:text-xs text-zinc-550 dark:text-zinc-400 font-mono tracking-wider uppercase leading-none">
                  Contenido estratégico confidencial. Distribución autorizada Mensajes.net
                </span>
              </div>
              <button
                onClick={() => handleCopyLink(selectedArticle.slug)}
                className="text-zinc-550 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white p-1.5 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900"
                title="Copiar URL para SEO"
              >
                {copiedLink ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Content paragraph segments */}
            <div className="space-y-6 text-zinc-700 dark:text-zinc-300 font-sans text-sm sm:text-base leading-relaxed text-justify">
              {selectedArticle.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('### ')) {
                  return (
                    <h3 key={index} className="font-display font-bold text-lg sm:text-xl text-zinc-900 dark:text-white pt-4 pb-2 border-b border-zinc-200 dark:border-zinc-900">
                      {paragraph.replace('### ', '')}
                    </h3>
                  );
                }
                if (paragraph.startsWith('* ')) {
                  return (
                    <ul key={index} className="list-disc pl-6 space-y-2 text-zinc-650 dark:text-zinc-450">
                      {paragraph.split('\n').map((line, lIdx) => (
                        <li key={lIdx} className="text-xs sm:text-sm">
                          {line.replace('* ', '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                return (
                  <p key={index}>
                    {paragraph}
                  </p>
                );
              })}
            </div>

            {/* SEO Keyword mapping visualization at the bottom */}
            <div className="mt-12 pt-8 border-t border-zinc-201 dark:border-zinc-900">
              <span className="font-mono text-[9px] text-zinc-500 dark:text-zinc-600 uppercase font-bold tracking-widest block mb-3">
                INDEXACIÓN SEMÁNTICA (METATAG KEYWORDS):
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedArticle.seoKeywords.map((kw, index) => (
                  <span
                    key={index}
                    className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 bg-zinc-50/50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900 px-2 py-1 rounded"
                  >
                    #{kw.toLowerCase().replace(/\s+/g, '-')}
                  </span>
                ))}
              </div>
            </div>

          </article>
        </div>
      </section>
    );
  }

  return (
    <section
      id="insights-tactic-index-module"
      className="bg-transparent py-20 lg:py-28 relative overflow-hidden transition-colors duration-500"
    >
      {/* Parallax Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none select-none">
        {/* Parallax Background Image */}
        <div
          ref={parallaxRef4}
          className="absolute inset-0 -z-20 opacity-[0.04] dark:opacity-[0.07] bg-cover bg-center bg-no-repeat pointer-events-none select-none transition-opacity duration-500 will-change-transform scale-105"
          style={{
            backgroundImage: `url(${insightsImg})`,
            filter: 'grayscale(100%) contrast(120%)',
            maskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 30%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 75% 75% at 50% 50%, #000 30%, transparent 100%)'
          }}
        />
        {/* Parallax Orb 1 */}
        <div
          ref={parallaxRef1}
          className="absolute -top-20 left-[10%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 dark:bg-cyan-900/5 blur-[120px] will-change-transform"
        />
        {/* Parallax Orb 2 */}
        <div
          ref={parallaxRef2}
          className="absolute top-[40%] right-[5%] h-[400px] w-[400px] rounded-full bg-blue-600/10 dark:bg-indigo-950/10 blur-[140px] will-change-transform"
        />
        {/* Parallax Grid Pattern */}
        <div
          ref={parallaxRef3}
          className="absolute inset-0 opacity-10 dark:opacity-20 bg-[radial-gradient(#00bcd433_1px,transparent_1px)] bg-[size:3rem_3rem] will-change-transform"
          style={{
            maskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 60% at 50% 50%, #000 60%, transparent 100%)'
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">

        {/* Header Block Title */}
        <div className="max-w-3xl mb-16 border-b border-zinc-200/50 dark:border-zinc-900 pb-10">
          <span className="font-mono text-[10px] tracking-widest text-cyan-650 dark:text-cyan-400 uppercase font-semibold">
            Visión Geopolítica e Opinión Pública
          </span>
          <h1
            id="insights-headline"
            className="font-display font-medium text-3xl sm:text-4xl text-zinc-950 dark:text-white mt-4"
          >
            Insights Estratégicos
          </h1>
          <p className="text-zinc-600 dark:text-zinc-500 text-sm mt-3 font-sans transition-colors">
            Análisis, tendencias y visión científica de las dinámicas de comunicación, posicionamiento institucional de poder y de-escalonamiento de crisis internacionales.
          </p>
        </div>

        {/* Essay Grid Cards */}
        <div id="insights-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INSIGHTS.map((essay) => (
            <div
              key={essay.id}
              id={`essay-card-${essay.id}`}
              onClick={() => setSelectedArticle(essay)}
              className="group cursor-pointer rounded bg-white/70 dark:bg-zinc-950/60 p-6 sm:p-8 border border-zinc-200 dark:border-zinc-900/80 hover:border-cyan-500/30 dark:hover:border-cyan-500/20 hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-all duration-300 flex flex-col justify-between h-[360px] backdrop-blur-sm shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] font-mono mb-4">
                  <span className="text-cyan-600 dark:text-cyan-400 uppercase tracking-widest pr-2 border-r border-zinc-200 dark:border-zinc-800">
                    {essay.category}
                  </span>
                  <span className="text-zinc-500">
                    {essay.readTime}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-zinc-900 dark:text-white group-hover:text-cyan-650 dark:group-hover:text-cyan-400 transition-colors duration-300 leading-snug">
                  {essay.title}
                </h3>

                <p className="mt-4 text-xs sm:text-sm text-zinc-650 dark:text-zinc-400/90 leading-relaxed font-sans line-clamp-4">
                  {essay.summary}
                </p>
              </div>

              {/* Action indicators */}
              <div className="pt-4 border-t border-zinc-150 dark:border-zinc-900 flex items-center justify-between text-[11px] font-mono text-zinc-500 dark:text-zinc-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                <span>LEER INFORME TÉCNICO</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
