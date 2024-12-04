"use client";
import DeveloperToolbox from '@/components/Developer';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

export default function Home() {


  return (
    <main>
      <Header />
      <About />
      <DeveloperToolbox />
      <Footer />
      {/* Future sections will go here */}
    </main>
  );
}