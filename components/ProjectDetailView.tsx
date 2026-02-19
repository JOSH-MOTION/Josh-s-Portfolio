
'use client';

import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectDetailViewProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetailView: React.FC<ProjectDetailViewProps> = ({ projectId, onBack }) => {
  const project = PROJECTS.find(p => p.id === projectId);

  if (!project) return <div>Project not found</div>;

  return (
    <div className="min-h-screen bg-white animate-in fade-in duration-700">
      {/* Hero Header */}
      <section className="relative h-[70vh] w-full overflow-hidden bg-gray-900">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        <div className="absolute bottom-20 left-6 md:left-12 lg:left-24 max-w-4xl">
          <button 
            onClick={onBack}
            className="mb-8 flex items-center gap-3 text-white/60 hover:text-white transition-colors mono text-[10px] uppercase tracking-widest"
          >
            <span>←</span> Back to selection
          </button>
          <div className="mono text-blue-500 text-xs font-bold tracking-[0.4em] uppercase mb-4">Case Study // {project.tech.join(' + ')}</div>
          <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
          <div className="lg:col-span-8 space-y-12">
            <div>
               <h2 className="text-3xl font-bold mb-6 text-gray-900">The Challenge</h2>
               <p className="text-xl text-gray-600 leading-relaxed font-medium">
                 {project.description} This solution was architected to handle high-concurrency requests while maintaining a pixel-perfect interface that prioritizes user experience.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">System Architecture</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Built using a modular structure with {project.tech[0]} core. Implemented strict state management and optimized rendering cycles to ensure performance consistency across mobile and desktop.
                  </p>
               </div>
               <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
                  <h3 className="font-bold text-gray-900 mb-4">Core Outcomes</h3>
                  <ul className="text-gray-500 text-sm space-y-2">
                    <li>• 40% Increase in User Retention</li>
                    <li>• Sub-2s Load Times Globally</li>
                    <li>• Scalable API Architecture</li>
                  </ul>
               </div>
            </div>

            {project.link && (
               <a 
                 href={project.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-6 px-12 py-6 bg-blue-600 text-white rounded-full font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20"
               >
                 Launch Live Project <span>↗</span>
               </a>
            )}
          </div>

          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-10">
            <div>
               <div className="mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">Role</div>
               <div className="text-lg font-bold">Senior Engineer</div>
            </div>
            <div>
               <div className="mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">Timeline</div>
               <div className="text-lg font-bold">4 Months Production</div>
            </div>
            <div>
               <div className="mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">Tech Stack</div>
               <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-gray-100 text-gray-600 text-[10px] mono font-bold rounded">
                      {t}
                    </span>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exploration Section */}
      <section className="py-24 bg-gray-50 border-t border-gray-100 px-6 md:px-12 lg:px-24">
         <div className="max-w-7xl mx-auto flex flex-col items-center">
            <span className="mono text-gray-400 text-[10px] uppercase tracking-widest mb-8">Ready to move forward?</span>
            <button 
              onClick={onBack}
              className="text-4xl md:text-6xl font-black text-gray-900 hover:text-blue-600 transition-colors tracking-tighter"
            >
              Explore more work <span>→</span>
            </button>
         </div>
      </section>
    </div>
  );
};

export default ProjectDetailView;
