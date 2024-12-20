"use client";
import LandingPage from '@/sections/LandingPage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import ProjectSummary from '@/components/ProjectSummary';

export default function Home() {


  return (
    <main>
      <Header />
      <Heading />
      <LandingPage />
      <ProjectSummary />
      <Footer />
      
      {/* Future sections will go here */}
    </main>
  );
}