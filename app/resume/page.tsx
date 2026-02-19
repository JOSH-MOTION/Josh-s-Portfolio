
'use client';
import React from 'react';
import ResumeView from '../../components/ResumeView';
import Navbar from '../../components/Navbar';

export default function ResumePage() {
  return (
    <div>
      <Navbar onOpenChat={() => {}} setView={() => {}} currentView="resume" />
      <ResumeView onBack={() => window.location.href = '/'} />
    </div>
  );
}
