
'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onOpenChat: () => void;
  onExplore: () => void;
  localTime: string;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat, onExplore, localTime }) => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden bg-[#050505] text-white selection:bg-blue-500 selection:text-white">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[160px] animate-pulse opacity-50" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px] opacity-40" />
        
        {/* Animated Scanline Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.01)_50%,transparent_100%)] bg-[length:100%_4px] animate-[scanline_10s_linear_infinite]" />
        
        {/* Fine Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
          style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full pt-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-black uppercase tracking-[0.3em] text-blue-400 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2 animate-ping" />
              Available for New Projects
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-7xl md:text-[10rem] font-black tracking-[-0.06em] leading-[0.75] mb-8 uppercase"
          >
            JOSHUA <br />
            <span className="bg-gradient-to-r from-blue-500 via-indigo-300 to-white bg-clip-text text-transparent italic drop-shadow-2xl">
              DOE.
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl font-medium text-white/40 tracking-tight max-w-xl mb-12 leading-relaxed"
          >
            Turning <span className="text-white">complex logic</span> into effortless <span className="text-white">human experiences</span>. Senior Software Engineer based in <span className="text-blue-400 underline decoration-blue-500/30 underline-offset-8">Accra</span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-6 items-center"
          >
            <button 
              onClick={onExplore}
              className="group relative px-12 py-6 rounded-full bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-blue-600/40"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Anthology
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </button>
            <button 
              onClick={onOpenChat}
              className="px-10 py-6 rounded-full border border-white/10 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all backdrop-blur-sm group hover:border-white/30"
            >
              Consult Digital Twin 
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-2 text-blue-400">→</span>
            </button>
          </motion.div>
        </div>

        {/* Catchy "Joshua Doe" Interactive Terminal */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden lg:block flex-1 max-w-lg"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative w-full bg-[#0A0A0B]/90 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
              {/* Terminal Title Bar */}
              <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="mono text-[8px] text-white/30 uppercase tracking-[0.4em] font-bold">joshua-doe.manifesto</div>
              </div>

              {/* Catchy Content */}
              <div className="p-8 mono text-[11px] leading-relaxed">
                <div className="space-y-5">
                  <div className="flex gap-3">
                    <span className="text-blue-500">➜</span>
                    <span className="text-white/40">~</span>
                    <span className="text-white font-bold">npm install @josh/aura --force</span>
                  </div>
                  
                  <div className="pl-6 space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-white/60 text-[10px]">Pixel_Perfection v4.0.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-400">✓</span>
                      <span className="text-white/60 text-[10px]">Scalable_Architecture installed</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">ℹ</span>
                      <span className="text-white/40 text-[10px]">Accra_Vibe.engine synced (Latency: 12ms)</span>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <span className="text-blue-500">➜</span>
                    <span className="text-white/40">~</span>
                    <span className="text-white font-bold">josh --stats --vibe</span>
                  </div>

                  <div className="pl-6 space-y-3">
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[9px] text-white/30 uppercase font-black">
                        <span>Creative_Aura</span>
                        <span>98%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "98%" }}
                          transition={{ duration: 2, delay: 1 }}
                          className="h-full bg-blue-500" 
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex justify-between text-[9px] text-white/30 uppercase font-black">
                        <span>Logic_Stability</span>
                        <span>100%</span>
                      </div>
                      <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: 1.2 }}
                          className="h-full bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <span className="text-blue-500">➜</span>
                    <span className="text-white/40">~</span>
                    <span className="text-white font-bold animate-pulse">npm run build:future</span>
                  </div>
                  
                  <div className="pl-6 pt-2">
                    <div className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg font-black text-[10px] tracking-widest uppercase terminal-glow">
                      READY TO ENGINEER SUCCESS _
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
                <span className="text-[9px] text-white/20 mono uppercase font-bold tracking-widest">Local_Node: Accra_HQ</span>
                <span className="text-[9px] text-green-500/50 mono font-black">UPTIME: 99.9%</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Meta */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-12 z-20">
        <div className="group cursor-default">
          <div className="mono text-[8px] uppercase tracking-[0.5em] mb-2 font-black text-white/20 group-hover:text-blue-400 transition-colors">Clock // Accra</div>
          <div className="text-sm font-black tracking-tight text-white/60">{localTime}</div>
        </div>
        <div className="w-px h-8 bg-white/10" />
        <div className="group cursor-default">
          <div className="mono text-[8px] uppercase tracking-[0.5em] mb-2 font-black text-white/20 group-hover:text-green-400 transition-colors">Network // Status</div>
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            <div className="text-sm font-black tracking-tight text-white/60 uppercase">Operational</div>
          </div>
        </div>
      </div>

      {/* Big Background Text */}
      <div className="absolute top-1/2 right-[-5%] -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <div className="text-[25rem] font-black text-white leading-none rotate-90 translate-x-1/2 select-none">
          DOE.J
        </div>
      </div>
    </section>
  );
};

export default Hero;
