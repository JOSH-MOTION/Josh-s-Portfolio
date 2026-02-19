
'use client';

import React from 'react';
import { PROJECTS } from '../constants';

interface ProjectsGridProps {
  onProjectClick: (id: string) => void;
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({ onProjectClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
      {PROJECTS.map((project, idx) => (
        <div 
          key={project.id}
          className="group relative flex flex-col gap-8 transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
          onClick={() => onProjectClick(project.id)}
        >
          <div className="aspect-[16/10] overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-blue-600/10 relative">
            <div className={`absolute top-0 left-0 right-0 h-1.5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
              idx % 3 === 0 ? 'bg-blue-600' : idx % 3 === 1 ? 'bg-indigo-600' : 'bg-rose-500'
            }`} />
            
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
            />
            
            <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
               <span className="bg-black/80 backdrop-blur-md text-white mono text-[8px] font-bold px-4 py-2 rounded-full uppercase tracking-widest border border-white/10">
                 {project.tech[0]} project
               </span>
            </div>
          </div>
          
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="mono text-[10px] text-blue-600 uppercase tracking-[0.3em] mb-2 font-black">
                PROJ_{idx + 1} // BUILT_WITH_{project.tech[0]}
              </div>
              <h3 className="text-3xl font-black tracking-tighter mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 font-medium max-w-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map(t => (
                  <span key={t} className="px-3 py-1.5 bg-blue-50 text-blue-600 text-[9px] mono uppercase font-black rounded-md border border-blue-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="w-16 h-16 rounded-full border-2 border-gray-100 flex items-center justify-center text-gray-900 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all flex-shrink-0 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsGrid;
