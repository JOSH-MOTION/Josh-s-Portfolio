
'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import ProjectDetailView from '../../../components/ProjectDetailView';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenChat={() => {}} />
      <ProjectDetailView 
        projectId={id} 
        onBack={() => router.push('/work')} 
      />
      <Footer />
    </div>
  );
}
