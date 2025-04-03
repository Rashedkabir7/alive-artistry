
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
import ArtisticGalleryImages from '@/components/ArtisticGalleryImages';

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
      
      {/* Gallery showcase before the Story section */}
      <section className="py-16 bg-white/80">
        <div className="container mx-auto px-4">
          <h2 className="heading-md text-center mb-10 text-santaran-teal">Our Artistic Perspectives</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-santaran-amber to-santaran-teal mx-auto mb-12"></div>
          <ArtisticGalleryImages category="all" autoPlay={true} interval={4000} className="max-w-4xl mx-auto" />
        </div>
      </section>
      
      <StorySection 
        title="Our Story"
        subtitle="The Journey of Santaran"
        content="Santaran has been a pioneer in fostering indigenous art forms and cultural preservation since 1998. Our organization has grown from a small collective to a recognized cultural institution that bridges traditional wisdom with contemporary expression."
        imageUrl="https://images.unsplash.com/photo-1490971588422-52f6262a237a?q=80&w=2000"
        imagePosition="right"
        backgroundColor="bg-santaran-cream/70"
        id="our-story"
      />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
