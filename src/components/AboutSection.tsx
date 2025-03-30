
import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-santaran-teal mb-4">About Santaran</h2>
          <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              <span className="font-bold text-santaran-terracotta text-xl">"Art for Dignifying Life"</span> is the vision of Santaran Art Organization. Santaran means swimming,
              it is Bengali words. As a group of artists Santaran has been continuing its journey since 1998.
            </p>
            
            <p className="text-lg leading-relaxed">
              In 2008 it got the registration under the Ministry of Social Welfare, People's Republic of Bangladesh
              as 'Santaran Art Organization', nonprofit multidisciplinary artist run organization.
            </p>
            
            <p className="text-lg leading-relaxed">
              Santaran Art Organization is continuing its journey from Chittagong, Bangladesh with the hope and mission to
              shape the artistic values regarding local reality, Indigenous knowledge, human ecology, art & culture, 
              mythology & spirituality of local people and environment in a more defined artistic way.
            </p>
            
            <p className="text-lg leading-relaxed">
              Santaran is trying to guide people to acquire art as the strongest medium for their better living.
            </p>
          </div>
          
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-santaran-cream p-8 rounded-lg border-2 border-santaran-teal/20">
                <h3 className="heading-md text-santaran-terracotta mb-6">Our Philosophy</h3>
                
                <p className="text-lg mb-6">
                  Santaran believes that through our activities our artistic philosophy will become the 
                  <span className="font-bold text-santaran-teal italic"> 'Yanbriksha' </span> 
                  (alike a Banyan tree of knowledge) which is rooted to the ground but spreading its branches all over the sky.
                </p>
                
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-santaran-teal/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-santaran-teal/20 flex items-center justify-center">
                      <div className="w-8 h-8 rounded-full bg-santaran-teal/30 flex items-center justify-center">
                        <div className="w-4 h-4 rounded-full bg-santaran-teal"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-santaran-gold/20 rounded-full -z-10"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-santaran-terracotta/10 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
