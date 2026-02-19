
'use client';

import React from 'react';

interface ResumeViewProps {
  onBack: () => void;
}

const ResumeView: React.FC<ResumeViewProps> = ({ onBack }) => {
  return (
    <div className="min-h-screen bg-[#F9FAFB] pt-32 pb-24 px-6 md:px-12 lg:px-24 animate-in slide-in-from-bottom duration-700">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors mono text-[10px] uppercase tracking-widest"
        >
          <span>←</span> Back to main
        </button>

        <header className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-4 text-gray-900 uppercase leading-none">Doe Joshua.</h1>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center text-gray-500 font-medium">
             <span>Full Stack & Mobile Developer</span>
             <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-blue-600" />
             <span>Macedonia, Accra, Ghana</span>
          </div>
          <div className="flex flex-wrap gap-4 mt-8">
             <a href="mailto:joshuadoe168@gmail.com" className="mono text-[10px] text-blue-600 font-bold hover:underline">joshuadoe168@gmail.com</a>
             <span className="text-gray-300">|</span>
             <span className="mono text-[10px] text-gray-500 font-bold">0242403450 / 0531125952</span>
          </div>
        </header>

        <div className="space-y-24">
          {/* Professional Summary */}
          <section>
            <div className="flex items-center gap-4 mb-10">
               <span className="mono text-blue-600 text-xs font-bold uppercase tracking-[0.4em]">01 // Professional Summary</span>
               <div className="flex-1 h-px bg-gray-200" />
            </div>
            <p className="text-xl text-gray-600 leading-relaxed font-medium">
              I am a passionate and adaptive software developer with 4 years of hands-on experience in full-stack and mobile application development. I build user-friendly, visually appealing interfaces with React and Tailwind CSS, and develop scalable, robust backends using Node.js, Express, MongoDB, and Firebase. I am proficient in JavaScript, TypeScript, and React Native, delivering solutions that are both performant and maintainable.
            </p>
          </section>

          {/* Tech Proficiency */}
          <section>
            <div className="flex items-center gap-4 mb-10">
               <span className="mono text-blue-600 text-xs font-bold uppercase tracking-[0.4em]">02 // Tech Proficiency</span>
               <div className="flex-1 h-px bg-gray-200" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
               {[
                 { label: 'Languages', value: 'JavaScript (ES6+), TypeScript' },
                 { label: 'Web & Full-Stack', value: 'Next.js (App Router), React' },
                 { label: 'Styling', value: 'Tailwind CSS, HTML5, CSS3' },
                 { label: 'Mobile Development', value: 'React Native (Expo)' },
                 { label: 'Backend & APIs', value: 'Next.js API Routes, Node.js' },
                 { label: 'Database', value: 'MongoDB' },
                 { label: 'Authentication', value: 'NextAuth / JWT' },
                 { label: 'Tools', value: 'Git, GitHub, Postman, VS Code' },
               ].map((item, idx) => (
                 <div key={idx} className="flex flex-col gap-1">
                    <span className="mono text-[10px] text-gray-400 uppercase font-bold tracking-widest">{item.label}</span>
                    <span className="text-gray-900 font-bold text-lg">{item.value}</span>
                 </div>
               ))}
            </div>
          </section>

          {/* Job Experience */}
          <section>
            <div className="flex items-center gap-4 mb-10">
               <span className="mono text-blue-600 text-xs font-bold uppercase tracking-[0.4em]">03 // Job Experience</span>
               <div className="flex-1 h-px bg-gray-200" />
            </div>
            
            <div className="space-y-16">
              {[
                {
                  company: 'Codetrain',
                  role: 'Software Engineer Instructor',
                  period: 'JULY 2024 — PRESENT',
                  desc: 'Teaching both frontend and backend development, helping students go from basic syntax to deploying real projects. I guide students through real-world projects and mentor junior fellows.',
                  stack: 'React, Node.js, Express.js, MongoDB, Firebase, JavaScript, TypeScript'
                },
                {
                  company: 'WiseTV',
                  role: 'Full Stack Developer',
                  period: 'APRIL 2024 — PRESENT',
                  desc: 'Built and maintained a full-stack streaming platform, delivering both user-facing features and admin tools. Implemented secure authentication, media content display, and an admin dashboard.',
                  stack: 'JavaScript, React, Firebase (Auth, Firestore, Realtime DB), Cloudinary, GitHub'
                },
                {
                  company: 'Synerdoc',
                  role: 'Frontend Developer',
                  period: 'APRIL 2024 — JULY 2024',
                  desc: 'Built responsive user interfaces using React and Tailwind CSS. Worked closely with design and backend teams to integrate APIs and improve user experience. Contributed to performance optimization.',
                  stack: 'React, Tailwind CSS, JavaScript, Git, Postman'
                }
              ].map((job, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-3">
                    <div className="mono text-[10px] text-gray-400 mb-2 font-bold">{job.period}</div>
                    <div className="text-xl font-bold text-gray-900 leading-tight">{job.company}</div>
                  </div>
                  <div className="md:col-span-9">
                    <h3 className="text-2xl font-black tracking-tight mb-4 text-gray-900">{job.role}</h3>
                    <p className="text-gray-500 leading-relaxed font-medium mb-6">{job.desc}</p>
                    <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                       <span className="mono text-[10px] text-blue-600 font-bold uppercase tracking-widest block mb-2">Stack:</span>
                       <span className="mono text-[10px] text-gray-400 font-bold leading-relaxed">{job.stack}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education & Certs */}
          <section className="bg-white p-12 rounded-3xl border border-gray-100 shadow-sm">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div>
                   <h4 className="mono text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">Certifications</h4>
                   <ul className="space-y-3 font-bold text-gray-900 text-sm">
                      <li>• Certificate in Software Dev.</li>
                      <li>• Prof. Diploma in System Eng.</li>
                      <li>• MS Certified Solution Expert</li>
                      <li>• A+ & N+ Certification Course</li>
                   </ul>
                </div>
                <div>
                   <h4 className="mono text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">Education</h4>
                   <div className="space-y-6">
                      <div>
                        <div className="text-sm font-bold">Software Engineering</div>
                        <div className="text-[10px] mono text-gray-400 font-bold uppercase">Codetrain // 2022 — 2023</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">System Engineering</div>
                        <div className="text-[10px] mono text-gray-400 font-bold uppercase">IPMC // 2019 — 2021</div>
                      </div>
                      <div>
                        <div className="text-sm font-bold">General Science</div>
                        <div className="text-[10px] mono text-gray-400 font-bold uppercase">Anfoega SHS // 2015 — 2018</div>
                      </div>
                   </div>
                </div>
                <div>
                   <h4 className="mono text-blue-600 text-[10px] font-bold uppercase tracking-widest mb-6">Qualities</h4>
                   <ul className="space-y-3 text-sm font-medium text-gray-500">
                      <li>• Strong Interpersonal Skills</li>
                      <li>• Professional Problem Solver</li>
                      <li>• Eager to Learn New Tech</li>
                      <li>• Self-Motivated & Growth-Oriented</li>
                   </ul>
                </div>
             </div>
          </section>

          <footer className="text-center pb-12 flex flex-col items-center gap-6">
             <div className="mono text-[10px] text-gray-400 uppercase tracking-widest">Available for immediate hire</div>
             <div className="flex flex-col items-center gap-4">
               <a 
                 href="/Joshua_Doe_CV.pdf"
                 download
                 className="inline-flex items-center gap-4 px-12 py-6 bg-gray-900 text-white rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-blue-600 transition-all shadow-2xl hover:-translate-y-1 active:scale-95"
               >
                 Click to download PDF CV
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
               </a>
               <p className="text-[10px] text-gray-400 mono italic">Ensure file is in public folder</p>
             </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ResumeView;
