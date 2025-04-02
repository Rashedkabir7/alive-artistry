
import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SubprogramsSection from '@/components/SubprogramsSection';
import YearlyOutcomeSection from '@/components/YearlyOutcomeSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import StorySection from '@/components/StorySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-santaran-cream">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SubprogramsSection />
      <YearlyOutcomeSection />
      <StorySection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
