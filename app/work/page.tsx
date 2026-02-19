
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '../../components/Navbar';
import ProjectsGrid from '../../components/ProjectsGrid';
import Footer from '../../components/Footer';

export default function WorkPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenChat={() => {}} />
      <main className="pt-48 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto mb-20">
          <span className="mono text-blue-600 text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Archive</span>
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">WORK.</h1>
          <p className="text-2xl text-gray-500 font-medium max-w-2xl leading-relaxed">
            A comprehensive list of products and solutions I've architected over the last 4 years.
          </p>
        </div>
        <div className="max-w-7xl mx-auto pb-32">
          <ProjectsGrid onProjectClick={(id) => router.push(`/work/${id}`)} />
        </div>
      </main>
      <Footer />
    </div>
  );
}
