
import React from 'react';

interface HeroProps {
  onOpenChat: () => void;
  onExplore: () => void;
  localTime: string;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat, onExplore, localTime }) => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden bg-[#0A0A0B] text-white">
      {/* Background Image Layer - High Quality & Lively */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
          alt="Developer Workspace" 
          className="w-full h-full object-cover opacity-30 grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full pt-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-10 h-px bg-blue-500" />
            <div className="mono text-[10px] text-blue-400 uppercase tracking-[0.4em] font-bold">system.status :: high_performance</div>
          </div>

          <h1 className="text-6xl md:text-[8.5rem] font-extrabold tracking-[-0.04em] leading-[0.85] mb-6 drop-shadow-2xl">
            JOSHUA <br />
            <span className="text-blue-600/60">DOE</span>
          </h1>
          
          <div className="flex items-center gap-4 mb-12">
            <span className="text-xl md:text-3xl font-light text-white/60 tracking-[0.2em] uppercase">
              Full Stack & Mobile Developer
            </span>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)] animate-pulse" />
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={onExplore}
              className="px-12 py-5 rounded-full bg-blue-600 text-white text-[10px] font-black uppercase tracking-[0.2em] hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 hover:-translate-y-1 active:scale-95"
            >
              Explore My Projects
            </button>
            <button 
              onClick={onOpenChat}
              className="px-10 py-5 rounded-full border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all group"
            >
              Ask AI Twin 
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </button>
          </div>
        </div>

        {/* NPM Terminal Visual */}
        <div className="hidden lg:block flex-1 animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="w-full max-w-lg bg-[#161618]/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl p-8 mono text-xs">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
            </div>
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-blue-500">➜</span>
                <span className="text-white/40">~</span>
                <span className="text-white">git pull origin innovation</span>
              </div>
              <div className="text-green-500/80 pl-6">
                Updating 4 projects (Josh Pay, BudgetWise, brainworks...)
              </div>
              <div className="flex gap-3 pt-4">
                <span className="text-blue-500">➜</span>
                <span className="text-white/40">~</span>
                <span className="text-white">npm run live-vibe</span>
              </div>
              <div className="pl-6 text-white/40 italic">
                [SYSTEM] : Syncing with Accra/GMT+0...<br />
                [SYSTEM] : Deploying visual logic...<br />
                [SYSTEM] : <span className="text-blue-400">Joshua is ready for action.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-40 animate-bounce">
         <div className="w-px h-12 bg-gradient-to-b from-blue-500 to-transparent" />
      </div>

      {/* Hero Metadata Footer */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 hidden md:flex items-center gap-12 z-20 opacity-30">
        <div>
          <div className="mono text-[8px] uppercase tracking-[0.4em] mb-1 font-bold">Local Context</div>
          <div className="text-xs font-bold">ACCRA // {localTime}</div>
        </div>
        <div className="w-px h-8 bg-white/20" />
        <div>
          <div className="mono text-[8px] uppercase tracking-[0.4em] mb-1 font-bold">Availability</div>
          <div className="text-xs font-bold text-green-500 uppercase">Remote Friendly</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
