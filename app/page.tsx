
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

  const handleSetView = (view: string) => {
    if (view === 'resume') router.push('/resume');
    else if (view === 'work' || view === 'work-list') router.push('/work');
    else if (view === 'home') router.push('/');
  };

  const handleProjectClick = (id: string) => {
    router.push(`/work/${id}`);
  };

  return (
    <div className="min-h-screen">
      <Navbar 
        onOpenChat={() => setIsChatOpen(true)} 
        setView={handleSetView as any} 
        currentView="home" 
      />
      
      <main className="relative">
        <Hero 
          onOpenChat={() => setIsChatOpen(true)} 
          onExplore={() => handleSetView('work')}
          localTime={localTime} 
        />
        
        <section id="work" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col mb-20">
              <span className="mono text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                01 // Selected Projects
              </span>
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-gray-900">
                Solutions built <br /> with <span className="text-blue-600/40">precision.</span>
              </h2>
            </div>
            <ProjectsGrid onProjectClick={handleProjectClick} />
          </div>
        </section>

        <section id="skills" className="py-32 px-6 md:px-12 lg:px-24 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col mb-20 text-center items-center">
              <span className="mono text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-4">
                02 // Proficiency
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 text-gray-900">
                The Tech Stack
              </h2>
              <div className="w-12 h-0.5 bg-blue-600/20 mb-8" />
            </div>
            <SkillsVisualizer />
          </div>
        </section>

        <section id="about" className="py-32 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                <div className="relative group overflow-hidden rounded-2xl shadow-xl shadow-blue-500/10 transition-shadow hover:shadow-2xl">
                   <img 
                     src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200" 
                     alt="Dev Environment" 
                     className="w-full aspect-square object-cover transition-all duration-700 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                   <div className="absolute bottom-10 left-10 text-white">
                      <div className="mono text-[10px] text-blue-400 uppercase mb-2">Location</div>
                      <div className="text-2xl font-bold italic">Accra, Ghana</div>
                   </div>
                </div>
                <div>
                   <span className="mono text-blue-600 text-xs font-bold tracking-[0.3em] uppercase mb-6 block">03 // Background</span>
                   <h2 className="text-5xl font-extrabold tracking-tighter mb-8 leading-none text-gray-900 text-balance uppercase">Doe Joshua.</h2>
                   <p className="text-lg text-gray-600 font-medium leading-relaxed mb-8">
                     I&apos;m a senior software developer with 4 years of hands-on experience in full-stack and mobile application development. Based in Accra, I treat code as architecture, focusing on high-performance backends and pixel-perfect frontends.
                   </p>
                   <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-100">
                      <div>
                         <div className="text-3xl font-bold mb-1 text-gray-900">4+</div>
                         <div className="mono text-[10px] text-gray-400 uppercase tracking-widest">Years Experience</div>
                      </div>
                      <div>
                         <div className="text-3xl font-bold mb-1 text-gray-900">10+</div>
                         <div className="mono text-[10px] text-gray-400 uppercase tracking-widest">Core Technologies</div>
                      </div>
                   </div>
                   <button 
                     onClick={() => router.push('/resume')}
                     className="mt-12 group flex items-center gap-4 text-blue-600 font-black uppercase tracking-widest text-[10px] hover:gap-6 transition-all"
                   >
                     View Professional CV <span>→</span>
                   </button>
                </div>
             </div>
          </div>
        </section>

        <ContactSection onContactClick={() => router.push('/contact')} />
      </main>

      <Footer />

      <div className="fixed bottom-10 left-10 z-40 hidden lg:flex flex-col gap-6 items-center">
         <div className="w-px h-20 bg-gray-200" />
         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077B5] transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
         </a>
         <a href="https://github.com/JOSH-MOTION" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37(3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
         </a>
      </div>

      <button 
        onClick={() => setIsChatOpen(true)}
        className="fixed bottom-10 right-10 w-14 h-14 bg-blue-600 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all z-40 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      </button>

      {isChatOpen && <DigitalTwinChat onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
