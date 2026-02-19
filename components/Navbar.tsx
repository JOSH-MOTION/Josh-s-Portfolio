
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
  const [path, setPath] = useState('/');
  
  // Safe hook access: Next.js hooks must be wrapped to avoid crashing in non-Next environments
  let router: any = null;
  let nextPathname: string | null = null;

  try {
    // These only work inside Next.js App Router
    nextPathname = usePathname();
    router = useRouter();
  } catch (e) {
    // Not in Next.js environment
  }

  useEffect(() => {
    if (nextPathname) setPath(nextPathname);
    else if (typeof window !== 'undefined') setPath(window.location.pathname);

    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [nextPathname]);

  const isOverDarkHero = (path === '/' || currentView === 'home') && !scrolled;
  const isDark = isOverDarkHero;

  const navigate = (newPath: string, view: ViewState, e: React.MouseEvent) => {
    if (newPath.startsWith('/#') && (path === '/' || path === '' || path === '/index.html')) {
      const id = newPath.split('#')[1];
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        if (setView) setView(view);
        return;
      }
    }

    if (router) {
      try {
        router.push(newPath);
      } catch (e) {
        window.history.pushState({}, '', newPath);
        window.dispatchEvent(new PopStateEvent('popstate'));
      }
    } else {
      window.history.pushState({}, '', newPath);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }

    if (setView) setView(view);
  };

  const isActive = (targetPath: string) => {
    if (targetPath === '/' && path === '/') return true;
    if (targetPath !== '/' && path?.startsWith(targetPath)) return true;
    return false;
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] px-6 md:px-12 py-8 transition-all duration-500 ${!isDark ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <button 
          onClick={(e) => navigate('/', 'home', e)}
          className={`flex items-center gap-4 transition-colors text-left ${!isDark ? 'text-gray-900' : 'text-white'}`}
        >
          <div className="text-xl font-black italic tracking-tighter">DOE.JOSHUA</div>
          <div className={`hidden md:block w-8 h-px ${!isDark ? 'bg-gray-200/50' : 'bg-white/20'}`} />
          <div className={`hidden md:block mono text-[9px] uppercase tracking-[0.4em] ${!isDark ? 'text-gray-400' : 'text-white/40'}`}>ACCRA // GHANA</div>
        </button>
        
        <div className="flex items-center gap-10">
          <div className={`hidden lg:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] transition-colors ${!isDark ? 'text-gray-400' : 'text-white/40'}`}>
            <button 
              onClick={(e) => navigate('/', 'home', e)} 
              className={`hover:text-blue-600 transition-colors ${isActive('/') && !isDark ? 'text-blue-600' : ''}`}
            >
              Home
            </button>
            <button 
              onClick={(e) => navigate('/work', 'work-list', e)} 
              className={`hover:text-blue-600 transition-colors ${isActive('/work') && !isDark ? 'text-blue-600' : ''}`}
            >
              Work
            </button>
            <button 
              onClick={(e) => navigate('/resume', 'resume', e)} 
              className={`hover:text-blue-600 transition-colors ${isActive('/resume') && !isDark ? 'text-blue-600' : ''}`}
            >
              CV
            </button>
            <button 
              onClick={(e) => navigate('/contact', 'contact', e)} 
              className={`hover:text-blue-600 transition-colors ${isActive('/contact') && !isDark ? 'text-blue-600' : ''}`}
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
