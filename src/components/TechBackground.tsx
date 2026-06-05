/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

export default function TechBackground() {
  return (
    <div className="absolute inset-0 -z-30 overflow-hidden pointer-events-none select-none transition-colors duration-500 bg-zinc-50 dark:bg-[#030303]">
      
      {/* Dynamic Digital Subtle Grid Overlay with grid intersection points */}
      <div 
        className="absolute inset-0 opacity-20 dark:opacity-30 bg-[linear-gradient(to_right,#00bcd41a_1px,transparent_1px),linear-gradient(to_bottom,#00bcd41a_1px,transparent_1px)] bg-[size:5rem_5rem]" 
        style={{ 
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 70%, transparent 100%)', 
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, #000 70%, transparent 100%)' 
        }}
      />

      {/* Cyber Shifting Glow Gradients - Petroleum & Turquoise Orbs (Micro-Animated with Motion) */}
      <div className="absolute inset-0">
        
        {/* Orb 1: Deep Turquoise/Cyan - Shifts ambiently */}
        <motion.div
          animate={{
            x: [0, 60, -30, 0],
            y: [0, -80, 50, 0],
            scale: [1, 1.15, 0.9, 1],
            opacity: [0.18, 0.25, 0.15, 0.18]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[20%] left-[25%] -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] sm:h-[500px] sm:w-[500px] rounded-full bg-cyan-500/20 dark:bg-cyan-700/10 blur-[130px]"
        />

        {/* Orb 2: Teal/Petroleum - Shifts ambiently in opposition */}
        <motion.div
          animate={{
            x: [0, -50, 40, 0],
            y: [0, 60, -40, 0],
            scale: [1, 0.9, 1.1, 1],
            opacity: [0.12, 0.18, 0.1, 0.12]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-[20%] right-[25%] translate-x-1/2 translate-y-1/2 h-[300px] w-[300px] sm:h-[450px] sm:w-[450px] rounded-full bg-teal-500/15 dark:bg-teal-900/10 blur-[110px]"
        />

        {/* Orb 3: Subtle Cobalt Blue Accent */}
        <motion.div
          animate={{
            x: [0, 40, -40, 0],
            y: [0, 40, -40, 0],
            opacity: [0.08, 0.14, 0.08, 0.08]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 h-[250px] w-[250px] sm:h-[400px] sm:w-[400px] rounded-full bg-blue-600/10 dark:bg-blue-900/5 blur-[120px]"
        />
      </div>

      {/* Cyber subtle technical digital scanning lines */}
      <div 
        className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-3 dark:opacity-[0.06] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,3px_100%]"
      />
      
    </div>
  );
}
