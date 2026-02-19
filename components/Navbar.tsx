
'use client';

import React, { useState, useEffect } from 'react';
import { ViewState } from '../App';

interface NavbarProps {
  onOpenChat: () => void;
  setView: (view: ViewState) => void;
  currentView: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenChat, setView, currentView }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = currentView === 'home' && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-8 transition-all duration-300 ${!isDark ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm border-b border-gray-100' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={() => setView('home')}
          className={`flex items-center gap-4 transition-colors ${!isDark ? 'text-gray-900' : 'text-white'}`}
        >
          <div className="text-xl font-black italic tracking-tighter">DOE.JOSHUA</div>
          <div className={`hidden md:block w-8 h-px ${!isDark ? 'bg-gray-200' : 'bg-white/20'}`} />
          <div className={`hidden md:block mono text-[9px] uppercase tracking-[0.4em] ${!isDark ? 'text-gray-400' : 'text-white/40'}`}>ACCRA // GHANA</div>
        </button>
        
        <div className="flex items-center gap-10">
          <div className={`hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${!isDark ? 'text-gray-400' : 'text-white/40'}`}>
            <button onClick={() => setView('home')} className={`hover:text-blue-600 transition-colors ${currentView === 'home' ? 'text-blue-600' : ''}`}>Home</button>
            <button onClick={() => setView('work-list')} className={`hover:text-blue-600 transition-colors ${currentView === 'work-list' ? 'text-blue-600' : ''}`}>Work</button>
            <button onClick={() => setView('resume')} className={`hover:text-blue-600 transition-colors ${currentView === 'resume' ? 'text-blue-600' : ''}`}>CV</button>
            <button onClick={() => setView('contact')} className={`hover:text-blue-600 transition-colors ${currentView === 'contact' ? 'text-blue-600' : ''}`}>Contact</button>
          </div>
          <button 
            onClick={onOpenChat}
            className={`px-6 py-2 rounded-full border text-[10px] font-bold uppercase tracking-widest transition-all ${!isDark ? 'border-gray-200 text-gray-900 hover:bg-gray-900 hover:text-white' : 'border-white/20 text-white hover:bg-white hover:text-black'}`}
          >
            AI Assistant
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
