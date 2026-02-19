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
      // Corrected: Use direct process.env.API_KEY for initialization as per guidelines
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: SYSTEM_INSTRUCTION + "\nYou are a technical assistant. Keep responses professional, efficient, and slightly minimalist.",
        },
      });

      // Corrected: Access .text property directly (not as a method)
      const aiResponse = response.text || "ERR :: TIMEOUT. Please re-enter command.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', content: "ERR :: NETWORK_FAILURE. Manual override required." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#0F0F11] border border-white/10 rounded-xl shadow-2xl flex flex-col h-[70vh] overflow-hidden">
        <div className="px-8 py-5 border-b border-white/5 flex items-center justify-between bg-[#161618]">
          <div className="flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-red-500/50" />
             <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
             <div className="w-3 h-3 rounded-full bg-green-500/50" />
             <span className="mono text-[10px] text-white/40 uppercase tracking-[0.2em] ml-4">Terminal — AI.Twin.sh</span>
          </div>
          <button onClick={onClose} className="text-white/20 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 mono">
          {messages.map((msg, i) => (
            <div key={i} className="flex gap-4">
              <span className={`text-[10px] uppercase font-bold ${msg.role === 'user' ? 'text-blue-500' : 'text-green-500'}`}>
                {msg.role === 'user' ? '[USER]' : '[AI]'}
              </span>
              <p className="text-sm text-white/80 leading-relaxed max-w-[90%]">
                {msg.content}
              </p>
            </div>
          ))}
          {isLoading && (
             <div className="text-white/20 text-xs animate-pulse">Processing request...</div>
          )}
        </div>

        <form onSubmit={handleSendMessage} className="p-6 bg-[#161618] border-t border-white/5 flex gap-4">
          <span className="text-green-500 mono text-sm">$</span>
          <input 
            type="text" 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your command..."
            className="flex-1 bg-transparent text-sm mono focus:outline-none text-white"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default DigitalTwinChat;