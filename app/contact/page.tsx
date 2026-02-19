
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import ContactView from '../../components/ContactView';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white">
      <Navbar onOpenChat={() => {}} />
      <div className="pt-20">
        <ContactView onBack={() => router.push('/')} />
      </div>
      <Footer />
    </div>
  );
}
