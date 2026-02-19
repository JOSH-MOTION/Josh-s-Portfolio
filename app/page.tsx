
'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ProjectsGrid from '../components/ProjectsGrid';
import SkillsVisualizer from '../components/SkillsVisualizer';
import DigitalTwinChat from '../components/DigitalTwinChat';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Africa/Accra', 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      };
      setLocalTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleNavigateToWork = () => {
    // Scroll to work section or navigate to work page
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectClick = (id: string) => {
    router.push(`/work/${id}`);
  };

  const handleSetView = (view: string) => {
    if (view === 'resume') router.push('/resume');
    else if (view === 'work-list' || view === 'work') router.push('/work');
    else if (view === 'home') router.push('/');
    else if (view === 'contact') {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar 
        onOpenChat={() => setIsChatOpen(true)} 
        setView={handleSetView as any} 
        currentView="home" 
      />
      
      <main className="relative">
        <Hero 
          onOpenChat={() => setIsChatOpen(true)} 
          onExplore={handleNavigateToWork}
          localTime={localTime} 
        />
        
        <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col mb-20">
              <span className="mono text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-4 text-glow">
                01 // Curated Projects
              </span>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                <h2 className="text-4xl md:text-7xl font-black tracking-tighter text-white uppercase leading-none text-balance">
                  Crafting <br />Digital <span className="text-blue-500/40 italic">Aura.</span>
                </h2>
                <button 
                  onClick={() => router.push('/work')}
                  className="group flex items-center gap-4 text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] hover:gap-6 transition-all"
                >
                  Full Archive <span>→</span>
                </button>
              </div>
            </div>
            <ProjectsGrid onProjectClick={handleProjectClick} />
          </div>
        </section>

        <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 border-y border-white/5 bg-[#080809]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col mb-20">
              <span className="mono text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">
                02 // Tech Arsenal
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white uppercase">
                System Proficiency
              </h2>
            </div>
            <SkillsVisualizer />
          </div>
        </section>

        <section id="about" className="py-40 px-6 md:px-12 lg:px-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative group">
                   <div className="absolute -inset-4 bg-blue-600/20 rounded-[2rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>
                   <div className="relative rounded-[2rem] overflow-hidden aspect-square border border-white/10 shadow-2xl">
                      <img 
                        src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" 
                        alt="Joshua Doe" 
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-60" />
                   </div>
                   <div className="absolute -bottom-10 -right-10 bg-blue-600 p-8 rounded-3xl hidden md:block shadow-2xl">
                      <div className="text-4xl font-black">4+</div>
                      <div className="mono text-[8px] uppercase tracking-widest font-bold opacity-80">Years Exp</div>
                   </div>
                </div>
                <div>
                   <span className="mono text-blue-500 text-[10px] font-black tracking-[0.4em] uppercase mb-8 block">03 // Identity</span>
                   <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-10 leading-[0.85] text-white uppercase">
                     DOE. <br />JOSHUA.
                   </h2>
                   <p className="text-xl text-white/50 font-medium leading-relaxed mb-12">
                     A Senior Engineer focused on building <span className="text-white italic">high-performance</span> digital systems. I bridge the gap between complex engineering and aesthetic minimalism. Based in Accra, operating globally.
                   </p>
                   
                   <div className="space-y-6 mb-12">
                      <div className="flex items-center gap-6">
                         <div className="w-12 h-px bg-blue-500/30" />
                         <span className="text-sm font-bold tracking-wide">Software Engineering Instructor @ Codetrain</span>
                      </div>
                      <div className="flex items-center gap-6">
                         <div className="w-12 h-px bg-blue-500/30" />
                         <span className="text-sm font-bold tracking-wide">Full Stack Developer @ WiseTV</span>
                      </div>
                   </div>

                   <button 
                     onClick={() => router.push('/resume')}
                     className="group flex items-center gap-6 text-white font-black uppercase tracking-[0.2em] text-[10px] hover:text-blue-500 transition-all"
                   >
                     Comprehensive Resume <span className="group-hover:translate-x-3 transition-transform">→</span>
                   </button>
                </div>
             </div>
          </div>
        </section>

        <ContactSection onContactClick={() => router.push('/contact')} />
      </main>

      <Footer />

      {/* Persistent Social Bar */}
      <div className="fixed bottom-12 left-10 z-[60] hidden xl:flex flex-col gap-8 items-center">
         <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-white/10" />
         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-blue-500 transition-all hover:-translate-y-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
         </a>
         <a href="https://github.com/JOSH-MOTION" target="_blank" rel="noopener noreferrer" className="text-white/20 hover:text-white transition-all hover:-translate-y-1">
           <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
         </a>
      </div>

      {/* Floating Action Button */}
      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-12 right-12 w-16 h-16 bg-blue-600 text-white rounded-2xl shadow-[0_20px_50px_rgba(37,99,235,0.3)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-[60] group border border-white/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#050505] animate-pulse" />
      </button>

      {isChatOpen && <DigitalTwinChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
