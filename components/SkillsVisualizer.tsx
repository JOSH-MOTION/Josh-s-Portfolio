
'use client';

import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { SKILLS } from '../constants';

const SkillsVisualizer: React.FC = () => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'Frontend': return 'bg-blue-600';
      case 'Backend': return 'bg-indigo-600';
      case 'Design': return 'bg-rose-500';
      case 'Cloud': return 'bg-sky-500';
      default: return 'bg-blue-600';
    }
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="h-[450px] w-full obsidian-glass rounded-3xl p-8 relative overflow-hidden bg-white shadow-inner">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILLS}>
            <PolarGrid stroke="#F3F4F6" />
            <PolarAngleAxis dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 10, fontWeight: 700, fontFamily: 'JetBrains Mono' }} />
            <Radar
              name="Skill"
              dataKey="level"
              stroke="#2563EB"
              fill="#3B82F6"
              fillOpacity={0.15}
              strokeWidth={3}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-12">
        {['Frontend', 'Backend', 'Design', 'Cloud'].map(cat => {
          const catSkills = SKILLS.filter(s => s.category === cat);
          if (catSkills.length === 0) return null;
          return (
            <div key={cat}>
              <div className="mono text-[10px] text-gray-400 uppercase tracking-[0.4em] mb-6 font-bold">{cat} Systems</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                 {catSkills.map(skill => (
                   <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-2">
                         <span className="text-sm font-bold tracking-tight text-gray-900 group-hover:text-blue-600 transition-colors">{skill.name}</span>
                         <span className="mono text-[9px] text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
                         <div 
                          className={`h-full ${getCategoryColor(cat)} transition-all duration-1000 ease-out`} 
                          style={{ width: `${skill.level}%` }} 
                         />
                      </div>
                   </div>
                 ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillsVisualizer;
