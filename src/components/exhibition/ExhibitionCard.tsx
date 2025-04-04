
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Eye } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExhibitionItem } from '@/types/exhibition';

interface ExhibitionCardProps {
  exhibition: ExhibitionItem;
  onClick: () => void;
}

const ExhibitionCard = ({ exhibition, onClick }: ExhibitionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <Card className="overflow-hidden group h-full border-0 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer" onClick={onClick}>
        <div className="relative h-60 md:h-72">
          <img 
            src={exhibition.image} 
            alt={exhibition.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 text-black text-xs font-medium px-3 py-1 rounded-full">
              {exhibition.subtitle}
            </span>
          </div>
          
          {/* Live indicator for exhibitions with live events */}
          {exhibition.liveEvents && exhibition.liveEvents.length > 0 && (
            <div className="absolute top-4 right-4">
              <span className="flex items-center gap-1 bg-red-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Live Now
              </span>
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl md:text-2xl font-semibold mb-1">{exhibition.title}</h3>
            
            <div className="flex items-center text-white/90 text-sm mt-2">
              <Calendar size={14} className="mr-1" />
              <span className="mr-4">{exhibition.date}</span>
              <MapPin size={14} className="mr-1" />
              <span>{exhibition.location}</span>
            </div>
          </div>
        </div>
        
        <div className="p-4 flex justify-end">
          <Button 
            variant="artistic" 
            size="sm" 
            className="group-hover:bg-santaran-jade group-hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
          >
            <Eye size={16} className="mr-1" /> View Details
          </Button>
        </div>
      </Card>
    </motion.div>
  );
};

export default ExhibitionCard;
