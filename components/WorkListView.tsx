
'use client';

import React from 'react';
import ProjectsGrid from './ProjectsGrid';

interface WorkListViewProps {
  onProjectClick: (id: string) => void;
  onBack: () => void;
}

const WorkListView: React.FC<WorkListViewProps> = ({ onProjectClick, onBack }) => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors mono text-[10px] uppercase tracking-widest"
        >
          <span>←</span> Back to main
        </button>

        <header className="mb-24">
          <span className="mono text-blue-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Selected Works</span>
          <h1 className="text-7xl md:text-[10rem] font-black tracking-tighter mb-8 leading-none text-gray-900">
            PORTFOLIO.
          </h1>
          <p className="text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed">
            A comprehensive list of products and solutions I&apos;ve architected, ranging from fintech platforms to high-end digital experiences.
          </p>
        </header>

        <div className="pb-32">
          <ProjectsGrid onProjectClick={onProjectClick} />
        </div>

        <section className="py-24 bg-gray-50 rounded-3xl border border-gray-100 px-6 md:px-12 flex flex-col items-center text-center">
           <span className="mono text-gray-400 text-[10px] uppercase tracking-widest mb-8">What&apos;s next?</span>
           <h2 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter mb-12">
             Have a project in mind?
           </h2>
           <button 
             onClick={onBack} // Ideally this would navigate to 'contact' in a real scenario
             className="px-12 py-6 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-xl"
           >
             Get in touch <span>→</span>
           </button>
        </section>
      </div>
    </div>
  );
};

export default WorkListView;
