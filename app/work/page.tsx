'use client';
import React from 'react';
import Navbar from '../../components/Navbar';
import ProjectsGrid from '../../components/ProjectsGrid';
import Footer from '../../components/Footer';

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Fixed: Changed currentView from "work" to "work-list" to satisfy ViewState type */}
      <Navbar onOpenChat={() => {}} setView={() => {}} currentView="work-list" />
      <main className="pt-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto mb-20">
          <h1 className="text-7xl font-black tracking-tighter mb-8">WORK.</h1>
          <p className="text-xl text-gray-500 font-medium max-w-2xl">
            A comprehensive list of products and solutions I've architected over the last decade.
          </p>
        </div>
        <div className="max-w-7xl mx-auto pb-32">
          <ProjectsGrid onProjectClick={(id) => window.location.href = `/work/${id}`} />
        </div>
      </main>
      <Footer />
    </div>
  );
}