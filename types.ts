
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Frontend' | 'Backend' | 'Cloud' | 'Design';
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
