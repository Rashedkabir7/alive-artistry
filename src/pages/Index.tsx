
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
import FeaturedProgramSection from '@/components/FeaturedProgramSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-santaran-cream">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeaturedProgramSection />
      <ProjectsSection />
      <SubprogramsSection />
      <YearlyOutcomeSection />
      <StorySection 
        title="Our Story"
        subtitle="The Journey of Santaran"
        content="Santaran has been a pioneer in fostering indigenous art forms and cultural preservation since 1998. Our organization has grown from a small collective to a recognized cultural institution that bridges traditional wisdom with contemporary expression."
        imageUrl="https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=2000"
        imagePosition="right"
      />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
