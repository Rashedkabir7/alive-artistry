
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, MapPin } from 'lucide-react';
import { Card } from "@/components/ui/card";

interface ExhibitionTour {
  date: string;
  time: string;
  guide: string;
}

interface ExhibitionEvent {
  name: string;
  date: string;
  time: string;
}

interface ExhibitionItem {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  location: string;
  image: string;
  description: string;
  curator: string;
  artists: string[];
  additionalImages: string[];
  tags: string[];
  openingHours?: string;
  ticketPrice?: string;
  upcomingTours?: ExhibitionTour[];
  liveEvents?: ExhibitionEvent[];
}

interface ExhibitionCategory {
  category: string;
  items: ExhibitionItem[];
}

const exhibitions: ExhibitionCategory[] = [
  {
    category: "current",
    items: [
      {
        id: "ex1",
        title: "Echoes of the Land",
        subtitle: "Environmental Art Exhibition",
        date: "May 15 - July 30, 2023",
        location: "Santaran Gallery, Chittagong",
        image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?q=80&w=1200",
        description: "An immersive exhibition exploring humanity's relationship with nature through diverse media.",
        curator: "Dr. Rina Ahmed",
        artists: ["Zahid Hassan", "Mariam Khan", "Tanvir Rahman"],
        additionalImages: [
          "https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=1200",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200"
        ],
        tags: ["environmental", "multimedia", "contemporary"],
        openingHours: "10:00 AM - 6:00 PM, Tuesday - Sunday",
        ticketPrice: "৳300 (Free for students)",
        upcomingTours: [
          { date: "June 12, 2023", time: "3:00 PM", guide: "Curator's Tour" },
          { date: "June 25, 2023", time: "11:00 AM", guide: "Artist-led Tour" }
        ],
        liveEvents: [
          { name: "Artist Talk: Connecting with Nature", date: "June 15, 2023", time: "4:30 PM" },
          { name: "Workshop: Environmental Art Techniques", date: "June 22, 2023", time: "2:00 PM" }
        ]
      },
      {
        id: "ex2",
        title: "Folk Traditions Reimagined",
        subtitle: "Contemporary Folk Art",
        date: "June 5 - August 15, 2023",
        location: "Bengal Arts Foundation, Dhaka",
        image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?q=80&w=1200",
        description: "Contemporary artists reinterpret traditional folk art motifs in a celebration of cultural heritage.",
        curator: "Farhana Begum",
        artists: ["Iqbal Ahmed", "Nusrat Jahan", "Rokeya Sultana"],
        additionalImages: [
          "https://images.unsplash.com/photo-1578926288207-32bacb6ee3c6?q=80&w=1200",
          "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?q=80&w=1200"
        ],
        tags: ["folk art", "heritage", "traditional"],
        openingHours: "11:00 AM - 7:00 PM, Daily",
        ticketPrice: "৳250 (Free for members)",
        upcomingTours: [
          { date: "June 16, 2023", time: "2:00 PM", guide: "Folk Art History Tour" },
          { date: "July 8, 2023", time: "3:30 PM", guide: "Artist's Perspective Tour" }
        ],
        liveEvents: [
          { name: "Folk Music Performance", date: "June 20, 2023", time: "5:00 PM" },
          { name: "Traditional Craft Workshop", date: "July 5, 2023", time: "1:00 PM" }
        ]
      }
    ]
  },
  {
    category: "upcoming",
    items: [
      {
        id: "ex3",
        title: "Karnaphuli Folk Triennial",
        subtitle: "Celebrating Folk Arts & Crafts",
        date: "September 10 - December 15, 2023",
        location: "Multiple venues, Chittagong",
        image: "https://images.unsplash.com/photo-1473177104440-ffee2f376098?q=80&w=1200",
        description: "The flagship triennial event showcasing traditional folk arts and crafts from across Bangladesh.",
        curator: "Kabir Uddin",
        artists: ["Multiple artists from across Bangladesh"],
        additionalImages: [
          "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=1200", 
          "https://images.unsplash.com/photo-1588512285341-c481fb6de19d?q=80&w=1200"
        ],
        tags: ["triennial", "folk arts", "crafts"]
      },
      {
        id: "ex4",
        title: "Digital Narratives",
        subtitle: "New Media Art Exhibition",
        date: "October 5 - November 30, 2023",
        location: "Digital Art Space, Dhaka",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
        description: "Exploring the intersection of traditional storytelling and digital technologies.",
        curator: "Zaid Rahman",
        artists: ["Tanzia Ahmed", "Rafiq Islam", "Digital Art Collective"],
        additionalImages: [
          "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
          "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=1200"
        ],
        tags: ["digital", "new media", "interactive"]
      }
    ]
  },
  {
    category: "past",
    items: [
      {
        id: "ex5",
        title: "Children's Art Festival",
        subtitle: "Kalpapuri Annual Exhibition",
        date: "January 15 - February 28, 2023",
        location: "Santaran Art Center, Chittagong",
        image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?q=80&w=1200",
        description: "Celebrating the creativity and imagination of young artists from the Kalpapuri program.",
        curator: "Amina Khatun",
        artists: ["Young artists from Kalpapuri program"],
        additionalImages: [
          "https://images.unsplash.com/photo-1555009433-3039e19eb354?q=80&w=1200",
          "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1200"
        ],
        tags: ["children", "education", "community"]
      },
      {
        id: "ex6",
        title: "Indigenous Knowledge Systems",
        subtitle: "Research Exhibition",
        date: "November 10 - December 20, 2022",
        location: "National Museum, Dhaka",
        image: "https://images.unsplash.com/photo-1524230572899-a752b3835840?q=80&w=1200",
        description: "Documenting and preserving indigenous knowledge through artistic research and collaboration.",
        curator: "Dr. Jamal Hossain",
        artists: ["Collaborative research team"],
        additionalImages: [
          "https://images.unsplash.com/photo-1530512112057-7607c9865916?q=80&w=1200",
          "https://images.unsplash.com/photo-1566230724840-2e2729cdb08a?q=80&w=1200"
        ],
        tags: ["indigenous", "research", "documentation"]
      }
    ]
  }
];

const Exhibitions = () => {
  const [activeTab, setActiveTab] = useState<string>("current");

  const filteredExhibitions = exhibitions.find(category => category.category === activeTab)?.items || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section with Spiral Background */}
      <section 
        className="relative flex items-center justify-center py-16 md:py-28"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2000)', 
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="container mx-auto px-4 z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display text-white mb-4">Exhibitions</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
            Explore our curated exhibitions showcasing the intersection of 
            indigenous knowledge, ecology, and contemporary art practices.
          </p>
        </div>
      </section>
      
      {/* Exhibition Tabs */}
      <section className="py-12 px-4 container mx-auto">
        <Tabs defaultValue="current" value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="border border-gray-200 bg-transparent rounded-full overflow-hidden">
              <TabsTrigger 
                value="current" 
                className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-2 rounded-full"
              >
                Current
              </TabsTrigger>
              <TabsTrigger 
                value="upcoming"
                className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-2 rounded-full"
              >
                Upcoming
              </TabsTrigger>
              <TabsTrigger 
                value="past"
                className="data-[state=active]:bg-santaran-teal data-[state=active]:text-white px-8 py-2 rounded-full"
              >
                Past
              </TabsTrigger>
            </TabsList>
          </div>
          
          {/* Exhibition Cards */}
          <TabsContent value={activeTab} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredExhibitions.map((exhibition) => (
                <ExhibitionCard key={exhibition.id} exhibition={exhibition} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>
      
      <div className="flex-grow"></div>
      
      <Footer />
    </div>
  );
};

const ExhibitionCard = ({ exhibition }: { exhibition: ExhibitionItem }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden group h-full border-0 rounded-xl shadow-md">
        <div className="relative h-60 md:h-72">
          <img 
            src={exhibition.image} 
            alt={exhibition.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 text-black text-xs font-medium px-3 py-1 rounded-full">
              {exhibition.subtitle}
            </span>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <div className="text-xs mb-1">{exhibition.subtitle}</div>
            <h3 className="text-xl md:text-2xl font-semibold mb-1">{exhibition.title}</h3>
            
            <div className="flex items-center text-white/90 text-sm mt-2">
              <Calendar size={14} className="mr-1" />
              <span className="mr-4">{exhibition.date}</span>
              <MapPin size={14} className="mr-1" />
              <span>{exhibition.location}</span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Exhibitions;
