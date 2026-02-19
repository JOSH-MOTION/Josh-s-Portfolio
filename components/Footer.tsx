
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 px-6 md:px-12 lg:px-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-center md:text-left">
          <div className="text-2xl font-black tracking-tighter italic mb-4 text-gray-900">JOSHUA.</div>
          <div className="mono text-[10px] text-gray-400 uppercase tracking-[0.4em]">© 2025 Joshua Doe // ACCRA, GHANA</div>
        </div>
        
        <div className="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
          <a href="https://github.com/JOSH-MOTION" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/joshua-doe-560a7523b/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">LinkedIn</a>
          <a href="https://x.com/JoshuaD67516115" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">X / Twitter</a>
        </div>

        <div className="mono text-[10px] text-gray-300">
          Engineered with precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
