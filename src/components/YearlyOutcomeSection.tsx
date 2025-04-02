
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, ImageIcon } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import AnimatedHeading from '@/components/AnimatedHeading';
import ArtisticArrow from '@/components/ArtisticArrow';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Exhibition {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  venue: string;
  location: string;
  image?: string;
  description?: string;
}

const exhibitions: Exhibition[] = [
  {
    id: "santaran-1999",
    title: "Santaran",
    subtitle: "The Swim",
    year: "1999",
    venue: "Allians Frances",
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1544585237-0265531863fc?q=80&w=600",
    description: "The inaugural exhibition that marked the beginning of Santaran's artistic journey."
  },
  {
    id: "sahassrabder-chabi-2000",
    title: "Sahassrabder Chabi",
    subtitle: "Images of the Millennium",
    year: "2000",
    venue: "Allians Frances",
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1578926288207-32bacb6ee3c6?q=80&w=600",
    description: "Explored artistic perspectives on the dawn of the new millennium."
  },
  {
    id: "pahela-baishakh-2002",
    title: "Pahela Baishakh",
    subtitle: "The First Day of Bengali Year",
    year: "2002",
    venue: "Chittagong Club",
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1582561833407-fd89b1e07e08?q=80&w=600",
    description: "A celebration of Bengali cultural heritage through artistic expression."
  },
  {
    id: "ekush-moder-garab-2003",
    title: "Ekush Moder Garab",
    subtitle: "We are Proud of the 21st February",
    year: "2003",
    venue: "Shilpakala Academy",
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=600",
    description: "Commemorating Language Movement Day through diverse artistic expressions."
  },
  {
    id: "cultural-heritage-2003",
    title: "Cultural Heritage of Chittagong",
    subtitle: "",
    year: "2003",
    venue: "Indian Cultural Centre",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1563170423-4a8jsft39ad?q=80&w=600",
    description: "Exploring the rich cultural traditions of Chittagong through visual arts."
  },
  {
    id: "bhanumatir-khel-2003",
    title: "Bhanumatir Khel",
    subtitle: "The Tricky Magical Game",
    year: "2003",
    venue: "Shilpakala Academy",
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=600",
    description: "An experimental exhibition exploring illusions and perception in art."
  },
  {
    id: "first-multidisciplinary-2005",
    title: "First Multidisciplinary Art Exhibition",
    subtitle: "",
    year: "2005",
    venue: "Nalinkanta Bhattashali Art Gallery, National Museum",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1540294583086-eab833618c0f?q=80&w=600",
    description: "Santaran's first major exhibition integrating multiple artistic disciplines."
  },
  {
    id: "unity-in-diversity-2007",
    title: "Unity in Diversity",
    subtitle: "",
    year: "2007",
    venue: "Nepal Art Council Gallery",
    location: "Kathmandu, Nepal",
    image: "https://images.unsplash.com/photo-1534765748375-ed461b529dd4?q=80&w=600",
    description: "International exhibition celebrating diverse artistic traditions across borders."
  },
  {
    id: "introspection-2009",
    title: "Introspection",
    subtitle: "",
    year: "2009",
    venue: "Nalinkanta Bhattashali Art Gallery, National Museum",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&w=600",
    description: "Artists reflecting on personal journeys through their creative expressions."
  },
  {
    id: "time-art-space-2011",
    title: "Time Art and Space",
    subtitle: "1st Multidisciplinary Art Show",
    year: "2011",
    venue: "Artist Rashid Chowdhury Art Gallery",
    location: "Chittagong",
    image: "https://images.unsplash.com/photo-1577307890698-b99c27ddc813?q=80&w=600",
    description: "Marking Santaran's 12th anniversary with an exploration of temporal and spatial dimensions in art."
  },
  {
    id: "karnaphuli-2012",
    title: "From the Karnaphuli",
    subtitle: "2nd Multidisciplinary Art Show",
    year: "2012",
    venue: "Residence of Italian Ambassador",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1514575110897-1253ff7b2ccb?q=80&w=600",
    description: "Exhibition named after the Karnaphuli river, focusing on Bangladesh's riverine heritage."
  },
  {
    id: "equation-2013",
    title: "Equation of Time and Art",
    subtitle: "",
    year: "2013",
    venue: "Bengal Art Lounge",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1571875257727-56c915c3d9f7?q=80&w=600",
    description: "Exploring the relationship between temporal experience and artistic creation."
  },
  {
    id: "perspective-2014",
    title: "Perspective of Art & Space",
    subtitle: "",
    year: "2014",
    venue: "Gallery Charja",
    location: "Dhaka",
    image: "https://images.unsplash.com/photo-1492037766660-2a56f9eb3fcb?q=80&w=600",
    description: "Examination of spatial relationships in contemporary Bangladeshi art."
  },
  {
    id: "politicomania-2016",
    title: "Politicomania",
    subtitle: "",
    year: "2016",
    venue: "Nandan Museum, Shantiniketan",
    location: "India",
    image: "https://images.unsplash.com/photo-1509459333449-83f23fd27388?q=80&w=600",
    description: "Critical artistic perspectives on political realities of our time."
  }
];

const YearlyOutcomeSection: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })]);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        stiffness: 50,
        damping: 20
      }
    })
  };

  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const timelineItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-santaran-vermilion/5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-santaran-jade/5 blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <AnimatedHeading 
              text="Yearly Outcomes & Exhibitions"
              tag="h2"
              className="heading-lg mb-4 bg-gradient-to-r from-santaran-vermilion via-santaran-amber to-santaran-jade bg-clip-text text-transparent"
              color=""
              animation="typewriter"
            />
            <motion.div 
              className="w-32 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mx-auto"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            ></motion.div>
          </motion.div>
          <motion.p 
            className="mt-6 text-lg max-w-3xl mx-auto text-gray-600"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Since 1999, Santaran has organized over fifteen major exhibitions across Bangladesh and internationally,
            showcasing members' research-based projects and innovative artistic expressions.
          </motion.p>
        </div>

        {/* Featured Exhibitions Carousel */}
        <div className="mb-20">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {exhibitions.slice(0, 8).map((exhibition, index) => (
                <div key={exhibition.id} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                  <motion.div 
                    className="bg-white rounded-xl overflow-hidden shadow-lg h-full"
                    variants={cardVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    custom={index}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="relative h-48 overflow-hidden">
                      {exhibition.image ? (
                        <img 
                          src={exhibition.image} 
                          alt={exhibition.title} 
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                          <ImageIcon className="h-12 w-12 text-gray-300" />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="inline-block px-2 py-1 bg-santaran-jade/90 text-white text-xs rounded-full">
                          {exhibition.year}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-lg font-semibold mb-1">{exhibition.title}</h3>
                      {exhibition.subtitle && (
                        <p className="text-gray-500 text-sm italic mb-3">"{exhibition.subtitle}"</p>
                      )}
                      
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exhibition.venue}, {exhibition.location}</span>
                      </div>
                      
                      {exhibition.description && (
                        <p className="text-gray-600 text-sm">
                          {exhibition.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => emblaApi?.scrollPrev()} 
              className="mx-2 p-3 rounded-full border border-gray-200 hover:bg-santaran-jade/10 transition-colors"
            >
              <ArtisticArrow direction="left" size="sm" />
            </button>
            <button 
              onClick={() => emblaApi?.scrollNext()} 
              className="mx-2 p-3 rounded-full border border-gray-200 hover:bg-santaran-jade/10 transition-colors"
            >
              <ArtisticArrow direction="right" size="sm" />
            </button>
          </div>
        </div>

        {/* Exhibition Timeline */}
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={timelineVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-santaran-teal">Exhibition Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-santaran-vermilion via-santaran-amber to-santaran-jade"></div>
            
            {exhibitions.map((exhibition, index) => (
              <motion.div 
                key={exhibition.id}
                className={`flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
                variants={timelineItemVariants}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <h4 className="font-bold text-lg">{exhibition.title}</h4>
                  {exhibition.subtitle && (
                    <p className="text-gray-500 italic text-sm">"{exhibition.subtitle}"</p>
                  )}
                  <div className="flex items-center text-gray-500 text-sm mt-2 gap-2 justify-end">
                    <Calendar className="h-3 w-3" />
                    <span>{exhibition.year}</span>
                    <MapPin className="h-3 w-3 ml-2" />
                    <span>{exhibition.location}</span>
                  </div>
                </div>
                
                <div className="relative flex items-center justify-center z-10">
                  <motion.div 
                    className={`w-6 h-6 rounded-full bg-white border-2 border-santaran-${
                      index % 3 === 0 ? 'jade' : index % 3 === 1 ? 'amber' : 'vermilion'
                    }`}
                    whileHover={{ scale: 1.5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  />
                </div>
                
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YearlyOutcomeSection;
