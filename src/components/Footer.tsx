/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Mail, Phone, Lock, Terminal } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      id="executive-footer-panel"
      className="bg-white dark:bg-black border-t border-zinc-205 dark:border-zinc-900 py-16 text-zinc-650 dark:text-zinc-400 font-sans transition-colors duration-500"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        
        {/* Main upper split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-zinc-205 dark:border-zinc-900">
          
          {/* Brand block left */}
          <div className="md:col-span-5 space-y-4">
            <BrandLogo size={38} showText={true} />
            <p className="text-xs text-zinc-600 dark:text-zinc-500 leading-relaxed max-w-sm mt-3">
              Firma reservada de inteligencia comunicativa corporativa, blindaje reputacional, marketing político de poder e ingeniería algorítmica de precisión.
            </p>
            <div className="flex items-center gap-1.5 text-[10px] font-mono mt-4 text-emerald-600 dark:text-emerald-500 bg-emerald-58/50 dark:bg-emerald-950/20 border border-emerald-250 dark:border-emerald-900/30 px-3 py-1 rounded w-fit select-none">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-500" />
              <span>Conexión de canal auditada</span>
            </div>
          </div>

          {/* Quick links middle */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest text-cyan-650 dark:text-cyan-400 uppercase font-semibold">
              Mapa de Navegación
            </h4>
            <div className="flex flex-col gap-2 text-xs">
              {[
                { id: 'inicio', label: 'Inicio' },
                { id: 'nosotros', label: 'Nosotros' },
                { id: 'servicios', label: 'Servicios de Influencia' },
                { id: 'insights', label: 'Insights Tácticos' },
                { id: 'contacto', label: 'Auditoría Privada' }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-left text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Legal references right */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest text-zinc-500 dark:text-zinc-600 uppercase font-semibold flex items-center gap-1.5">
              <Lock className="w-3.5 h-3.5" />
              Disclaimer y Reserva
            </h4>
            <p className="text-[11px] text-zinc-500 dark:text-zinc-600 leading-relaxed text-justify">
              Mensajes.net es una firma reservada de consultoría estratégica corporativa y gubernamental. Todos los diagnósticos iniciales, datos compartidos o análisis de tendencias realizados mediante este portal están amparados bajo convenios herméticos simétricos de no divulgación industrial y estatal de conformidad con los marcos legales aplicables.
            </p>
          </div>

        </div>

        {/* Lower copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-zinc-500 dark:text-zinc-600">
          <div className="flex items-center gap-4 flex-wrap">
            <span>&copy; {currentYear} mensajes.net. Todos los derechos reservados.</span>
            <span className="hidden sm:inline border-r border-zinc-200 dark:border-zinc-800 h-3.5" />
            <span className="flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-500/80" />
              SSL-v3_256bit
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-800 dark:hover:text-zinc-400 cursor-pointer">Protocolo de Confidencialidad</span>
            <span>-</span>
            <span className="hover:text-zinc-800 dark:hover:text-zinc-400 cursor-pointer">Seguridad de Datos</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
