
'use client';

import React from 'react';

interface ContactSectionProps {
  onContactClick?: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ onContactClick }) => {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="mono text-blue-600 text-xs font-bold tracking-[0.4em] uppercase mb-10">04 // Contact</span>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12 text-gray-900">
          Start a <br /><span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">conversation.</span>
        </h2>
        
        <p className="max-w-xl text-lg text-gray-500 mb-16 leading-relaxed font-medium">
          Based in Accra, Ghana. Working everywhere. <br />
          Open for engineering roles, technical partnerships, and consultations.
        </p>

        <button 
          onClick={onContactClick}
          className="group relative px-10 md:px-20 py-8 text-xl md:text-3xl font-black tracking-tighter border-b-2 border-gray-200 hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-6"
        >
          Open Contact Form
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-4 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </button>

        <div className="mt-12 flex gap-8 items-center justify-center">
           <a href="mailto:joshuadoe168@gmail.com" className="mono text-[10px] text-gray-400 uppercase tracking-widest hover:text-blue-600 transition-colors font-bold underline decoration-blue-600/20 underline-offset-4">Or email directly</a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
