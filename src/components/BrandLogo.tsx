/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import logoIcon from '../assets/logo-icon.svg';

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function BrandLogo({ className = '', size = 44, showText = true }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="mensajes-brand-logo">
      {/* Concentric Lines Circular Emblem */}
      <img
        src={logoIcon}
        alt="Mensajes.net - Inteligencia en Comunicación"
        width={size}
        height={size}
        className="transition-transform duration-700 hover:rotate-185 cursor-pointer"
      />

      {/* Brand Text Header */}
      {showText && (
        <div className="flex flex-col select-none">
          <span className="font-display font-extrabold text-xl tracking-tight text-zinc-950 dark:text-white leading-none">
            Mensajes<span className="text-cyan-400">.net</span>
          </span>
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase text-cyan-500 font-medium pb-0.5">
            Inteligencia en Comunicación
          </span>
        </div>
      )}
    </div>
  );
}
