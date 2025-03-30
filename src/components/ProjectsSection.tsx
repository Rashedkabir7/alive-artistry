
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
}

const projects: Project[] = [
  {
    id: "env-art-camp",
    title: "Environmental Art Camp",
    description: "Immersive outdoor experiences combining art and nature conservation.",
    category: "Harith",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=500"
  },
  {
    id: "dharitri",
    title: "Dharitri",
    description: "Eco-tourism project promoting sustainable travel and environmental awareness.",
    category: "Harith",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500"
  },
  {
    id: "kalpaloker",
    title: "Kalpaloker Citra",
    description: "Workshop projects for children to explore creativity and artistic expression.",
    category: "Kalpapuri",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=500"
  },
  {
    id: "kalpapuri-school",
    title: "Kalpapuri School of Arts & Crafts",
    description: "Creative education project training the next generation of artists.",
    category: "Kalpapuri",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=500"
  },
  {
    id: "folk-triennial",
    title: "Karnaphuli Folk Triennial",
    description: "Celebration of traditional folk arts and crafts held every three years.",
    category: "Shikar",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=500"
  },
  {
    id: "kandrabindu",
    title: "Kandrabindu",
    description: "Project of product design, development & marketing of traditional crafts.",
    category: "Shikar",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=500"
  },
  {
    id: "residency",
    title: "Artist Residency Program",
    description: "Hosting artists from around the world for cultural exchange and collaboration.",
    category: "Art Factory",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=500"
  },
  {
    id: "young-exhibition",
    title: "Young Art Exhibition",
    description: "Showcasing works by emerging talent and supporting their artistic growth.",
    category: "Art Factory",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=500"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-lg text-santaran-teal mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Explore the diverse range of projects under our programs, each contributing to our mission
            of dignifying life through art and cultural preservation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent z-10"></div>
              
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block px-2 py-1 bg-santaran-terracotta/90 text-white text-xs rounded mb-2">
                  {project.category}
                </span>
                <h3 className="text-white font-display text-xl mb-1">{project.title}</h3>
                <p className="text-white/80 text-sm mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.description}
                </p>
                <a 
                  href={`#project-${project.id}`} 
                  className="inline-flex items-center text-santaran-cream hover:text-santaran-gold transition-colors text-sm font-medium"
                >
                  Learn more <ArrowRight size={14} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="#all-projects"
            className="inline-flex items-center px-6 py-3 bg-santaran-teal hover:bg-santaran-teal/90 text-white rounded-full transition-colors"
          >
            View All Projects
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
