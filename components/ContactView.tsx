
'use client';

import React, { useState } from 'react';

interface ContactViewProps {
  onBack: () => void;
}

const ContactView: React.FC<ContactViewProps> = ({ onBack }) => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulated send to backend/nodemailer
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 md:px-12 lg:px-24 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-12 flex items-center gap-3 text-gray-400 hover:text-gray-900 transition-colors mono text-[10px] uppercase tracking-widest"
        >
          <span>←</span> Back to main
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <span className="mono text-blue-600 text-xs font-bold uppercase tracking-[0.4em] mb-8 block">04 // Contact</span>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12 text-gray-900 leading-none">
              Let&apos;s build <br />something <span className="text-blue-600/30">epic.</span>
            </h1>
            
            <div className="space-y-12">
               <div>
                  <div className="mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">Direct Lines</div>
                  <div className="space-y-4">
                    <a href="mailto:joshuadoe168@gmail.com" className="text-2xl font-bold hover:text-blue-600 transition-colors block">joshuadoe168@gmail.com</a>
                    <div className="text-xl font-medium text-gray-500">0242403450 / 0531125952</div>
                  </div>
               </div>
               
               <div>
                  <div className="mono text-[10px] text-gray-400 uppercase tracking-widest mb-4">Social Presence</div>
                  <div className="flex gap-8">
                     <a href="https://github.com/JOSH-MOTION" target="_blank" className="text-sm font-black uppercase tracking-widest hover:text-blue-600">GitHub</a>
                     <a href="https://linkedin.com" target="_blank" className="text-sm font-black uppercase tracking-widest hover:text-blue-600">LinkedIn</a>
                     <a href="https://x.com" target="_blank" className="text-sm font-black uppercase tracking-widest hover:text-blue-600">X</a>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm h-fit">
            {status === 'success' ? (
              <div className="text-center py-20 space-y-6">
                 <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                 </div>
                 <h3 className="text-3xl font-black tracking-tighter">Transmission Sent.</h3>
                 <p className="text-gray-500 font-medium">I&apos;ll get back to you in a heartbeat.</p>
                 <button onClick={() => setStatus('idle')} className="text-blue-600 font-bold uppercase text-[10px] tracking-widest pt-10">Send another message</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="mono text-[10px] uppercase font-bold text-gray-400 ml-2">Your Name</label>
                    <input required type="text" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium" />
                  </div>
                  <div className="space-y-2">
                    <label className="mono text-[10px] uppercase font-bold text-gray-400 ml-2">Email Address</label>
                    <input required type="email" className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="mono text-[10px] uppercase font-bold text-gray-400 ml-2">Message</label>
                  <textarea required rows={5} className="w-full bg-white border border-gray-200 rounded-xl px-6 py-4 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all text-gray-900 font-medium resize-none"></textarea>
                </div>
                
                <button 
                  disabled={status === 'sending'}
                  className="w-full py-6 bg-blue-600 text-white rounded-xl font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 disabled:opacity-50 flex items-center justify-center gap-4"
                >
                  {status === 'sending' ? 'Transmitting...' : 'Send Message'}
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
                </button>

                <p className="text-[10px] text-gray-400 mono text-center italic">
                  I typically respond within 12 business hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;
