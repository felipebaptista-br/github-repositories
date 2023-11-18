'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authLogin } from '@/utils/authentication/auth';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function RootLayout({
  children
}) {
  const router = useRouter();

  useEffect(() => {
    if (!authLogin()) {
      router.push('/');
    }
  }, []);

  if (authLogin()) {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    );
  }

  return null;
}
