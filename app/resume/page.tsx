
'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import ResumeView from '../../components/ResumeView';
import Navbar from '../../components/Navbar';

export default function ResumePage() {
  const router = useRouter();
  
  return (
    <div>
      <Navbar onOpenChat={() => {}} />
      <ResumeView onBack={() => router.push('/')} />
    </div>
  );
}
