/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Shield, Sun, Moon } from 'lucide-react';
import BrandLogo from './BrandLogo';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (sectionId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export default function Header({ activeSection, setActiveSection, isDark, onToggleTheme }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigationItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'insights', label: 'Insights Tácticos' },
    { id: 'contacto', label: 'Contacto' }
  ];

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    // Smooth scroll to top of page when changing dynamic sections
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      id="main-navigation-header"
      className="sticky top-0 z-50 w-full border-b border-zinc-250/60 dark:border-zinc-900 bg-white/75 dark:bg-[#030303]/80 backdrop-blur-md transition-colors duration-500"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-8">
        
        {/* Brand Identity Branding */}
        <div onClick={() => handleNavClick('inicio')} className="cursor-pointer">
          <BrandLogo size={42} showText={true} />
        </div>

        {/* Desktop Sophisticated Navigation links */}
        <nav className="hidden md:flex items-center gap-1.5 font-sans" aria-label="Navegación principal">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 relative rounded-md ${
                  isActive 
                    ? 'text-cyan-600 dark:text-cyan-400 font-semibold' 
                    : 'text-zinc-650 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-150/80 dark:hover:bg-zinc-900/50'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* CTA Elite Button & Theme Selection Controls */}
        <div className="hidden md:flex items-center gap-4">
          {/* Subtle elegant theme selector */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 bg-zinc-50 dark:bg-zinc-900/30 hover:bg-zinc-150/80 dark:hover:bg-zinc-900/80 transition-all duration-300 relative group cursor-pointer"
            title={isDark ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}
            aria-label="Alternar tema visual"
          >
            {isDark ? (
              <Sun className="w-4.5 h-4.5 transition-transform group-hover:rotate-45" />
            ) : (
              <Moon className="w-4.5 h-4.5 transition-transform group-hover:-rotate-12" />
            )}
          </button>

          <span className="hidden lg:flex items-center gap-1.5 font-mono text-[10px] tracking-wider text-zinc-500 dark:text-zinc-400 uppercase bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded border border-zinc-200 dark:border-zinc-800">
            <Shield className="w-3.5 h-3.5 text-cyan-500" />
            Canal Encriptado SSL
          </span>
          
          <button
            id="header-cta-diagnostic"
            onClick={() => handleNavClick('contacto')}
            className="group relative inline-flex items-center justify-center overflow-hidden rounded bg-cyan-50 dark:bg-cyan-900/40 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-800/80 transition-all hover:bg-cyan-100 dark:hover:bg-cyan-950 hover:text-cyan-700 dark:hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 cursor-pointer duration-300"
          >
            <span>Solicitar Diagnóstico</span>
            <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile controls & toggle button */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={onToggleTheme}
            className="p-2 rounded border border-zinc-200 dark:border-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-cyan-600 dark:hover:text-cyan-400 bg-zinc-100/50 dark:bg-zinc-950 cursor-pointer"
            aria-label="Alternar tema visual"
            title={isDark ? "Modo Claro" : "Modo Oscuro"}
          >
            {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white focus:outline-none p-2 rounded bg-zinc-100 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-900"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            id="mobile-nav-toggle"
          >
            {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Slide-Down */}
      {mobileMenuOpen && (
        <div 
          id="mobile-drawer-container"
          className="md:hidden border-b border-zinc-250 dark:border-zinc-900 bg-white/95 dark:bg-black/95 px-6 py-6 transition-all duration-300 animate-in fade-in slide-in-from-top-4"
        >
          <div className="flex flex-col gap-4">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-link-mobile-${item.id}`}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left py-3 px-4 text-base font-medium rounded transition-all duration-200 ${
                    isActive 
                      ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-600 dark:text-cyan-300 border-l-2 border-cyan-500 pl-4' 
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            
            <hr className="border-zinc-200 dark:border-zinc-900 my-2" />

            <div className="flex flex-col gap-3 py-2">
              <div className="flex items-center gap-1.5 font-mono text-[9px] tracking-wider text-zinc-500 uppercase px-4">
                <Shield className="w-3.5 h-3.5 text-cyan-500" />
                Certificado de confidencialidad activa
              </div>
              <button
                onClick={() => handleNavClick('contacto')}
                className="w-full justify-center inline-flex items-center rounded bg-gradient-to-r from-cyan-600 to-blue-700 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:from-cyan-500 hover:to-blue-600 cursor-pointer"
                id="mobile-cta-diagnostic"
              >
                <span>Solicitar Diagnóstico Estratégico</span>
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
