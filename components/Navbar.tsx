
'use client';

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ViewState } from '../App';

interface NavbarProps {
  onOpenChat: () => void;
  setView?: (view: ViewState) => void;
  currentView?: ViewState;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenChat, setView, currentView }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Safe hook handling to prevent "invariant" error
  let pathname = '/';
  let router: any = null;
  
  try {
    // These hooks throw if not inside a Next.js App Router
    const nextPathname = usePathname();
    const nextRouter = useRouter();
    pathname = nextPathname || '/';
    router = nextRouter;
  } catch (e) {
    // Fallback for SPA/index.html environment
    if (typeof window !== 'undefined') {
      pathname = window.location.pathname;
    }
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/' || currentView === 'home';
  const isDark = isHomePage && !scrolled;

  const navigate = (path: string, view: ViewState, e: React.MouseEvent) => {
    // If we're on the home page and clicking a hash link, just scroll
    if (path.startsWith('/#') && (pathname === '/' || !pathname)) {
      const id = path.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        if (setView) setView(view);
        return;
      }
    }

    if (setView) {
      setView(view);
    }

    // Use Next.js router if available, otherwise browser location
    if (router) {
      router.push(path);
    } else {
      // In SPA mode, we might want to just change state or use window.location
      if (path === '/') {
        if (setView) setView('home');
      } else {
        window.location.href = path;
      }
    }
  };

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-8 transition-all duration-500 ${!isDark ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={(e) => navigate('/', 'home', e)}
          className={`flex items-center gap-4 transition-colors text-left ${!isDark ? 'text-gray-900' : 'text-white'}`}
        >
          <div className="text-xl font-black italic tracking-tighter">DOE.JOSHUA</div>
          <div className={`hidden md:block w-8 h-px ${!isDark ? 'bg-gray-200' : 'bg-white/20'}`} />
          <div className={`hidden md:block mono text-[9px] uppercase tracking-[0.4em] ${!isDark ? 'text-gray-400' : 'text-white/40'}`}>ACCRA // GHANA</div>
        </button>
        
        <div className="flex items-center gap-10">
          <div className={`hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${!isDark ? 'text-gray-400' : 'text-white/40'}`}>
            <button 
              onClick={(e) => navigate('/', 'home', e)} 
              className={`hover:text-blue-600 transition-colors ${isActive('/') ? 'text-blue-600' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={(e) => navigate('/work', 'work-list', e)} 
              className={`hover:text-blue-600 transition-colors ${isActive('/work') ? 'text-blue-600' : ''}`}
            >
              Work
            </button>
            <button 
              onClick={(e) => navigate('/resume', 'resume', e)} 
              className={`hover:text-blue-600 transition-colors ${isActive('/resume') ? 'text-blue-600' : ''}`}
            >
              CV
            </button>
            <button 
              onClick={(e) => navigate('/#contact', 'contact', e)} 
              className={`hover:text-blue-600 transition-colors`}
            >
              Contact
            </button>
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
