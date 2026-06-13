/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ShieldCheck, Mail, Phone, Lock, Terminal, Linkedin, Instagram, Facebook } from 'lucide-react';
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

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/mensajes-net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/mensajes.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/mensajes.net"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-500 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-500/50 transition-colors duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
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
          </div>

          <div className="flex items-center gap-4">
            {/* TODO: Add link to privacy policy */}
            <a
              href="/aviso-de-privacidad.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
            >
              Aviso de Privacidad
            </a>
            {/* Designed by */}
            <span className="text-zinc-500 dark:text-zinc-600">Designed by</span>
            <a href="https://www.iosoluciones.com.mx" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
              IOSoluciones
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
