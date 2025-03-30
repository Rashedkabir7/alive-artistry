
import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
  const events = [
    {
      year: "1998",
      title: "Santaran Founded",
      description: "Established in Chittagong as an artist-led initiative to promote art as a medium for social change.",
      color: "terracotta"
    },
    {
      year: "2004",
      title: "First Environmental Art Camp",
      description: "Launched our flagship environmental art program connecting nature and artistic expression.",
      color: "teal"
    },
    {
      year: "2007",
      title: "Kalpapuri Children's Art Program",
      description: "Began working with children to nurture creativity and artistic expression from an early age.",
      color: "gold"
    },
    {
      year: "2012",
      title: "Karnaphuli Folk Triennial",
      description: "Initiated our triennial celebration of folk arts and crafts from the Chittagong region.",
      color: "brown"
    },
    {
      year: "2015",
      title: "Art Factory Launch",
      description: "Created a collaborative space for emerging artists to experiment with new media and approaches.",
      color: "olive"
    },
    {
      year: "2020",
      title: "Digital Transitions",
      description: "Expanded our reach through digital platforms while preserving our connection to traditional art forms.",
      color: "terracotta"
    },
    {
      year: "2023",
      title: "Global Collaborations",
      description: "Formed partnerships with international art organizations to share Indigenous knowledge globally.",
      color: "teal"
    }
  ];

  return (
    <div className="relative">
      {/* Central line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-santaran-teal/30"></div>
      
      <div className="relative space-y-12 md:space-y-24">
        {events.map((event, index) => (
          <motion.div 
            key={event.year}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            {/* Year circle */}
            <div className="flex-shrink-0 z-20">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-santaran-${event.color} text-white shadow-lg font-display text-xl`}>
                {event.year}
              </div>
            </div>
            
            {/* Event content */}
            <div className={`md:w-5/12 bg-white p-6 rounded-lg shadow-md mt-4 md:mt-0 ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
              <h3 className={`text-santaran-${event.color} text-xl font-semibold mb-2`}>{event.title}</h3>
              <p className="text-gray-600">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
