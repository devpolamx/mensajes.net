/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export default function BrandLogo({ className = '', size = 44, showText = true }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="mensajes-brand-logo">
      {/* Concentric Lines Circular Emblem */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-700 hover:rotate-185 cursor-pointer"
        aria-hidden="true"
      >
        <defs>
          {/* Gradients using Petrol Blue and Tech Turquoise */}
          <linearGradient id="turquoiseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06b6d4" /> {/* Teal/Cyan */}
            <stop offset="50%" stopColor="#00b4d8" /> {/* Turquoise */}
            <stop offset="100%" stopColor="#014f86" /> {/* Petrol Blue */}
          </linearGradient>
          <linearGradient id="petrolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#012a4a" /> {/* Deep Petrol */}
            <stop offset="100%" stopColor="#06b6d4" /> {/* Turquoise Glow */}
          </linearGradient>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
          </radialGradient>
          <filter id="glowEffect" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Glow Background */}
        <circle cx="50%" cy="50%" r="35" fill="url(#centerGlow)" />

        {/* Outer Ring - Communication Waves */}
        <circle
          cx="50%"
          cy="50%"
          r="42"
          stroke="url(#turquoiseGradient)"
          strokeWidth="1.5"
          strokeDasharray="4 8 20 6"
          opacity="0.85"
        />

        {/* Second Ring */}
        <circle
          cx="50%"
          cy="50%"
          r="32"
          stroke="url(#petrolGradient)"
          strokeWidth="2.5"
          strokeDasharray="45 15 30 10"
        />

        {/* Third Segmented Ring representing binary transmission */}
        <circle
          cx="50%"
          cy="50%"
          r="24"
          stroke="url(#turquoiseGradient)"
          strokeWidth="1.5"
          strokeDasharray="6 3 18 4"
          opacity="0.9"
        />

        {/* Inner Ring representing Precision Core */}
        <circle
          cx="50%"
          cy="50%"
          r="16"
          stroke="url(#petrolGradient)"
          strokeWidth="3"
        />

        {/* Solid Center Core of Influence */}
        <circle
          cx="50%"
          cy="50%"
          r="8"
          fill="url(#turquoiseGradient)"
          filter="url(#glowEffect)"
        />

        {/* Dynamic Vector Lines Axis */}
        <line x1="50%" y1="12" x2="50%" y2="20" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
        <line x1="50%" y1="80" x2="50%" y2="88" stroke="#014f86" strokeWidth="2" strokeLinecap="round" />
        <line x1="12" y1="50%" x2="20" y2="50%" stroke="#014f86" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="50%" x2="88" y2="50%" stroke="#06b6d4" strokeWidth="2" strokeLinecap="round" />
      </svg>

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
