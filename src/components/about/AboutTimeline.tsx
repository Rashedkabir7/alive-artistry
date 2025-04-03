
import React from 'react';
import { motion } from 'framer-motion';
import { Palette, BookOpen, Image, MapPin, Award, Star, Brush, Leaf } from 'lucide-react';
import AnimatedHeading from '../AnimatedHeading';
import { Card, CardContent } from '@/components/ui/card';

const AboutTimeline: React.FC = () => {
  const milestones = [
    { 
      year: "1998", 
      title: "Formation", 
      description: "Santaran begins as a small collective of artists in Chittagong",
      icon: <Palette className="text-santaran-vermilion" size={20} />,
      image: "https://images.unsplash.com/photo-1572635148818-ef6fd45eb394?q=80&w=800"
    },
    { 
      year: "2001", 
      title: "First Exhibition", 
      description: "Hosted first collaborative show focusing on folk traditions",
      icon: <Image className="text-santaran-jade" size={20} />,
      image: "https://images.unsplash.com/photo-1577083330179-0d0ff7134303?q=80&w=800"
    },
    { 
      year: "2008", 
      title: "Official Registration", 
      description: "Registered under Ministry of Social Welfare, Bangladesh",
      icon: <BookOpen className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1578926288207-ad2a2e19fa05?q=80&w=800"
    },
    { 
      year: "2010", 
      title: "Harith Launch", 
      description: "Started environmental art initiative across rural Bangladesh",
      icon: <Leaf className="text-santaran-jade" size={20} />,
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=800"
    },
    { 
      year: "2014", 
      title: "Folk Arts Revival", 
      description: "Launched Shikar to document and preserve traditional crafts",
      icon: <Brush className="text-santaran-terracotta" size={20} />,
      image: "https://images.unsplash.com/photo-1582691740708-9d5f1a1c4120?q=80&w=800"
    },
    { 
      year: "2018", 
      title: "20 Year Anniversary", 
      description: "Celebrated two decades with nationwide exhibitions",
      icon: <Award className="text-santaran-gold" size={20} />,
      image: "https://images.unsplash.com/photo-1605773527852-c546a8584ea3?q=80&w=800"
    },
    { 
      year: "2021", 
      title: "Children's Initiative", 
      description: "Began Kalpapuri program focused on young artists",
      icon: <Star className="text-santaran-amber" size={20} />,
      image: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=800"
    }
  ];

  return (
    <div className="mt-24">
      <AnimatedHeading
        text="Our Artistic Journey"
        tag="h3"
        className="heading-md mb-12 text-center"
        color="text-santaran-teal"
        animation="wave"
      />
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-santaran-vermilion via-santaran-amber to-santaran-jade"></div>
        
        <div className="space-y-24">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={milestone.year}
              className={`relative flex ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Year bubble */}
              <motion.div 
                className="absolute left-1/2 transform -translate-x-1/2 z-10 bg-white border-4 border-santaran-amber rounded-full w-16 h-16 flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-santaran-teal font-bold">{milestone.year}</span>
              </motion.div>
              
              {/* Content card with image */}
              <Card className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'} overflow-hidden hover:shadow-lg transition-shadow duration-300 group`}>
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="flex items-center gap-2 mb-1">
                        {milestone.icon}
                        <h4 className="font-bold text-lg">{milestone.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-gray-600">{milestone.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Final statement */}
      <motion.div 
        className="max-w-2xl mx-auto mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-santaran-teal/5 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-santaran-teal/10 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-santaran-teal/15 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-santaran-teal/20 flex items-center justify-center">
                  <MapPin className="text-santaran-teal" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="italic text-xl text-gray-600">
          "Today, Santaran continues to evolve, bringing the transformative power of art to communities 
          across Bangladesh and beyond, while honoring our rich cultural heritage."
        </p>
      </motion.div>
    </div>
  );
};

export default AboutTimeline;
