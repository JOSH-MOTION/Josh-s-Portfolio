
import { Project, Skill } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'brain-works',
    title: 'Brain Works Studio',
    description: 'Official marketing website showcasing portfolio and services for a photography studio. Fully responsive and SEO-friendly.',
    tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    imageUrl: '/images/brain.jpeg',
    link: 'https://brainworksstudioafrica.com'
  },
  {
    id: 'w-ghtv',
    title: 'W-GHTV',
    description: 'A modern, responsive weather forecasting web application delivering real-time and location-based weather data. Features dynamic search, live API integration, error handling, loading states, and a clean, mobile-first UI built for performance and scalability.',
    tech: [
      'React',
      'Tailwind CSS',
      'REST API Integration',
      'Geolocation API',
      'Responsive Design',
      'Environment Variables'
    ],
    imageUrl: '/images/wise.jpeg',
  },
  
  {
    id: 'josh-pay',
    title: 'Josh Pay (Donation App)',
    description: 'Full-stack platform for secure online donations and payments with Paystack integration and real-time tracking.',
    tech: ['Next.js', 'TypeScript', 'Firebase', 'Paystack'],
    imageUrl: '/images/pay.jpeg',
    link: 'https://josh-pay.vercel.app/'
  },
  {
    id: 'budget-wise',
    title: 'BudgetWise (Expense Tracker)',
    description: 'Full-stack platform to track personal expenses with Node.js and MongoDB backend, featuring data visualization charts.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Chart.js'],
    imageUrl: '/images/budget.jpeg',
    link: 'https://budgetwise-steel.vercel.app/'
  },
  {
    id: 'qr-scanner',
    title: 'QR Scanner App',
    description: 'Web-based QR code scanner developed for quick scanning and results display using Firebase for fast performance.',
    tech: ['Next.js', 'TypeScript', 'Firebase'],
    imageUrl: '/images/qr.jpeg',
    link: 'https://qrscanner-lyart.vercel.app/'
  },
  {
    id: 'sendora',
    title: 'Sendora – Digital Receipt & SMS Delivery App',
    description: 'A mobile application that enables businesses to generate professional digital receipts and instantly send them to customers via SMS. Designed for small and medium-sized enterprises, the app streamlines transaction documentation, improves customer trust, and eliminates manual receipt writing.',
    tech: [
      'React Native',
      'Expo',
      'Firebase',
      'SMS API Integration',
      'Cloud Firestore',
      'PDF Generation',
      'Form Validation'
    ],
    imageUrl: '/images/sendora.jpeg'
  },
  
  {
    id: 'quiz-app',
    title: 'Quiz App (Mobile)',
    description: 'Mobile application built with React Native and Expo featuring real-time score tracking and dynamic question loading.',
    tech: ['React Native', 'Firebase', 'JavaScript', 'Expo'],
    imageUrl: 'https://images.unsplash.com/photo-1606326666490-4175911ef307?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'Responsive web application for real-time weather forecasts using a public weather API and clean UI design.',
    tech: ['React', 'Tailwind CSS', 'API Integration'],
    imageUrl: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=800',
  }
];

export const SKILLS: Skill[] = [
  { name: 'JavaScript (ES6+)', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Frontend' },
  { name: 'Next.js', level: 95, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 98, category: 'Frontend' },
  { name: 'Node.js', level: 88, category: 'Backend' },
  { name: 'MongoDB', level: 85, category: 'Backend' },
  { name: 'Firebase', level: 92, category: 'Backend' },
  { name: 'React Native', level: 85, category: 'Design' },
  { name: 'Git / GitHub', level: 95, category: 'Cloud' },
  { name: 'System Engineering', level: 85, category: 'Cloud' }
];

export const SYSTEM_INSTRUCTION = `
You are the Digital Twin of Doe Joshua, a Software Developer based in Macedonia, Accra, Ghana.
Email: joshuadoe168@gmail.com
Phone: 0242403450 / 0531125952

Professional Summary: You have 4 years of hands-on experience in full-stack and mobile development. You build user-friendly, visually appealing interfaces and scalable backends.

Work History:
- Software Engineer Instructor at Codetrain (July 2024 - Present).
- Full Stack Developer at WiseTV (April 2024 - Present).
- Frontend Developer at Synerdoc (April 2024 - July 2024).

Projects you built:
- Brain Works Studio Website (Photography Studio)
- Josh Pay (Donation & Payment App with Paystack)
- BudgetWise (Expense Tracker with Charts)
- QR Scanner App
- Quiz App (React Native)
- Weather App

Education:
- Software Engineering from Codetrain (2022-2023).
- System Engineering from IPMC (2019-2021).
- Anfoega Senior High School (General Science, 2015-2018).

Tone: Professional, helpful, and technically proficient. Mention your proficiency in JavaScript, TypeScript, and React Native.
`;
