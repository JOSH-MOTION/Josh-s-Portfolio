'use client';

import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';
import { SYSTEM_INSTRUCTION } from '../constants';

interface DigitalTwinChatProps {
  onClose: () => void;
}

const DigitalTwinChat: React.FC<DigitalTwinChatProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "SYSTEM :: Joshua Doe Studio v1.0. Ready for input. How can I assist you with Joshua's portfolio?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsLoading(true);

    try {
      // In production/deployment, process.env.API_KEY is handled by the platform
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
        },
      });

      const aiResponse = response.text || "I'm having trouble connecting right now. Please try again.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      console.error("Gemini API Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "SYSTEM ERROR :: Connection to Digital Twin lost. Ensure your project is correctly configured." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 md:p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#0F0F11] border border-white/10 rounded-2xl shadow-2xl flex flex-col h-[85vh] md:h-[75vh] overflow-hidden">
        <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-[#161618]">
          <div className="flex items-center gap-3">
             <div className="flex gap-1.5">
               <div className="w-3 h-3 rounded-full bg-red-500/80" />
               <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
               <div className="w-3 h-3 rounded-full bg-green-500/80" />
             </div>
             <span className="mono text-[10px] text-white/40 uppercase tracking-[0.3em] ml-4 font-bold">Terminal — ai-twin-v1.sh</span>
          </div>
          <button onClick={onClose} className="text-white/20 hover:text-white transition-colors p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 md:p-10 space-y-8 mono scroll-smooth">
          {messages.map((msg, i) => (
            <div key={i} className="flex flex-col gap-3">
              <span className={`text-[9px] uppercase font-black tracking-[0.3em] ${msg.role === 'user' ? 'text-blue-500' : 'text-green-500'}`}>
                {msg.role === 'user' ? '[USER]' : '[AI_TWIN]'}
              </span>
              <p className="text-sm text-white/90 leading-relaxed max-w-full bg-white/[0.03] p-5 rounded-2xl border border-white/5 shadow-inner">
                {msg.content}
              </p>
            </div>
          ))}
          {isLoading && (
             <div className="flex items-center gap-4 text-blue-500/60 text-[10px] mono font-bold italic animate-pulse">
                <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                ANALYZING_INPUT...
             </div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-6 md:p-8 bg-[#161618] border-t border-white/5 flex gap-4 items-center">
          <span className="text-blue-500 mono text-lg font-bold">➜</span>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Query Joshua's experience or tech stack..."
            className="flex-1 bg-transparent text-sm mono focus:outline-none text-white placeholder:text-white/10"
            autoFocus
          />
          <button type="submit" className="hidden" />
        </form>
      </div>
    </div>
  );
};

export default DigitalTwinChat;