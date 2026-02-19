
import React from 'react';

interface HeroProps {
  onOpenChat: () => void;
  onExplore: () => void;
  localTime: string;
}

const Hero: React.FC<HeroProps> = ({ onOpenChat, onExplore, localTime }) => {
  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 lg:px-24 overflow-hidden bg-[#0A0A0B] text-white font-sans">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
        
        {/* Subtle Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        
        <img 
          src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2000" 
          alt="Joshua's Workspace" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0B] via-[#0A0A0B]/80 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto w-full pt-20 flex flex-col lg:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 animate-in fade-in slide-in-from-left duration-1000">
          <div className="flex items-center gap-4 mb-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-black uppercase tracking-[0.2em] text-blue-400">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 animate-pulse" />
              Build Mode: Activated
            </span>
          </div>

          <h1 className="text-7xl md:text-[9rem] font-black tracking-[-0.05em] leading-[0.8] mb-8 uppercase">
            JOSHUA <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
              DOE.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-medium text-white/50 tracking-tight max-w-xl mb-12 leading-relaxed">
            Architecting <span className="text-white">high-performance</span> digital ecosystems. Based in Accra, crafting code that converts pixels into <span className="italic text-blue-400">experiences</span>.
          </p>

          <div className="flex flex-wrap gap-6 items-center">
            <button 
              onClick={onExplore}
              className="group relative px-12 py-6 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all overflow-hidden shadow-2xl shadow-white/5"
            >
              <span className="relative z-10">Explore My Work</span>
              <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            <button 
              onClick={onOpenChat}
              className="px-10 py-6 rounded-2xl border border-white/10 text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all backdrop-blur-sm group"
            >
              Consult AI Twin 
              <span className="ml-3 inline-block transition-transform group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>

        {/* Personalized "Joshua" Terminal Visual */}
        <div className="hidden lg:block flex-1 animate-in fade-in zoom-in duration-1000 delay-300">
          <div className="w-full max-w-lg bg-[#0F0F11] border border-white/10 rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.8)] overflow-hidden">
            {/* Terminal Header */}
            <div className="px-6 py-4 bg-white/5 border-b border-white/5 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.3)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.3)]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.3)]" />
              </div>
              <div className="mono text-[8px] text-white/30 uppercase tracking-[0.4em] font-bold">joshua-doe.vibe</div>
            </div>

            {/* Terminal Body */}
            <div className="p-8 mono text-xs leading-relaxed">
              <div className="space-y-6">
                <div className="flex gap-3">
                  <span className="text-blue-500">➜</span>
                  <span className="text-white/40">studio</span>
                  <span className="text-white font-bold">npx joshua-doe@latest --init</span>
                </div>
                
                <div className="pl-6 text-white/50 space-y-1">
                  <div><span className="text-green-500">✔</span> Loaded <span className="text-white">Senior_Engineer</span> profile</div>
                  <div><span className="text-green-500">✔</span> Initialized <span className="text-white">Accra_Node_Server</span></div>
                  <div><span className="text-green-500">✔</span> Fetched <span className="text-blue-400">4_Years_Excellence</span></div>
                </div>

                <div className="flex gap-3 pt-2">
                  <span className="text-blue-500">➜</span>
                  <span className="text-white/40">studio</span>
                  <span className="text-white font-bold">npm run manifest:future</span>
                </div>

                <div className="pl-6 space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-500 font-bold">BUILDING</span>
                    <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full w-4/5 bg-blue-500 rounded-full animate-pulse" />
                    </div>
                    <span className="text-[10px] text-white/30">80%</span>
                  </div>
                  <div className="text-[10px] text-indigo-400 font-bold italic">OPTIMIZING_PIXEL_PERFECTION...</div>
                </div>

                <div className="flex gap-3 pt-4">
                  <span className="text-blue-500">➜</span>
                  <span className="text-white/40">studio</span>
                  <span className="text-white font-bold animate-pulse">josh --ship excellence</span>
                </div>
                
                <div className="pl-6 pt-2">
                  <div className="inline-block px-4 py-2 bg-green-500/10 border border-green-500/20 text-green-400 rounded-lg font-black text-[10px] tracking-widest uppercase">
                    Shipment_Live :: Vibe_Checked 🚀
                  </div>
                </div>
              </div>
            </div>
            
            {/* Terminal Footer */}
            <div className="px-8 py-4 bg-white/[0.02] border-t border-white/5 flex items-center justify-between">
              <span className="text-[9px] text-white/20 mono uppercase">Port: 3000 // Lat: 5.6037</span>
              <span className="text-[9px] text-blue-500/50 mono animate-pulse font-black">STABLE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Decoration */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.02] pointer-events-none select-none">
        <div className="text-[20rem] font-black text-white leading-none rotate-90 translate-x-1/2">
          JOSHUA
        </div>
      </div>

      {/* Meta Indicators */}
      <div className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-16 z-20">
        <div className="group cursor-default">
          <div className="mono text-[8px] uppercase tracking-[0.4em] mb-2 font-black text-white/30 group-hover:text-blue-400 transition-colors">Local_Time</div>
          <div className="text-sm font-black tracking-tight text-white/70">{localTime} // GMT</div>
        </div>
        <div className="w-px h-10 bg-white/10" />
        <div className="group cursor-default">
          <div className="mono text-[8px] uppercase tracking-[0.4em] mb-2 font-black text-white/30 group-hover:text-green-400 transition-colors">Project_Status</div>
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
            <div className="text-sm font-black tracking-tight text-white/70">OPEN_FOR_COLLAB</div>
          </div>
        </div>
      </div>

      {/* Scroll Hint */}
      <div className="absolute bottom-12 right-6 md:right-12 lg:right-24 hidden md:flex items-center gap-6 group cursor-pointer" onClick={onExplore}>
        <span className="mono text-[9px] uppercase tracking-[0.4em] font-black text-white/30 group-hover:text-white transition-colors">Scroll_To_Explore</span>
        <div className="w-px h-16 bg-gradient-to-b from-blue-500/50 to-transparent group-hover:h-20 transition-all duration-500" />
      </div>
    </section>
  );
};

export default Hero;
