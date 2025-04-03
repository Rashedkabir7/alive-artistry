
import React from 'react';
import ArtisticGallery from './ArtisticGallery';

interface ArtisticGalleryImagesProps {
  category?: 'nature' | 'folk' | 'children' | 'contemporary' | 'all';
  className?: string;
  autoPlay?: boolean;
  interval?: number;
}

const ArtisticGalleryImages: React.FC<ArtisticGalleryImagesProps> = ({ 
  category = 'all',
  className = '',
  autoPlay = true,
  interval = 5000
}) => {
  // Define image collections by category with updated images
  const natureImages = [
    {
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1200",
      alt: "Natural art installation in forest",
      caption: "Environmental art merging with natural surroundings"
    },
    {
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
      alt: "Artistic nature conservation project",
      caption: "Harith program: Art for ecological awareness"
    },
    {
      src: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200",
      alt: "Eco-art installation",
      caption: "Sustainable materials transformed into artistic expression"
    },
    {
      src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1200",
      alt: "Nature-inspired art",
      caption: "Ecological patterns in artistic design"
    },
    {
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200",
      alt: "Forest art space",
      caption: "Natural canvases for artistic expression"
    }
  ];
  
  const folkImages = [
    {
      src: "https://images.unsplash.com/photo-1578926318661-3af11b5b05d7?q=80&w=1200",
      alt: "Traditional folk art",
      caption: "Preserving indigenous craft techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1577083287809-1c774a469596?q=80&w=1200",
      alt: "Folk art textile",
      caption: "Shikar program: Heritage preservation through craft"
    },
    {
      src: "https://images.unsplash.com/photo-1530512112057-7607c9865916?q=80&w=1200",
      alt: "Cultural folk artifact",
      caption: "Traditional symbolism in contemporary context"
    },
    {
      src: "https://images.unsplash.com/photo-1566230724840-2e2729cdb08a?q=80&w=1200",
      alt: "Indigenous craftsmanship",
      caption: "Preserving artistic heritage through generations"
    },
    {
      src: "https://images.unsplash.com/photo-1588512285341-c481fb6de19d?q=80&w=1200", 
      alt: "Traditional art motifs",
      caption: "Elements of cultural identity in design"
    }
  ];
  
  const childrenImages = [
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200",
      alt: "Children's art workshop",
      caption: "Kalpapuri program: Nurturing young artistic talent"
    },
    {
      src: "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?q=80&w=1200",
      alt: "Creative education for children",
      caption: "Exploring creativity through guided art activities"
    },
    {
      src: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1200",
      alt: "Children's collaborative art project",
      caption: "Building community through creative expression"
    },
    {
      src: "https://images.unsplash.com/photo-1555009443-3039e19eb354?q=80&w=1200",
      alt: "Childhood creativity",
      caption: "Fostering artistic development in early years"
    },
    {
      src: "https://images.unsplash.com/photo-1571210059434-eaf5b7a25191?q=80&w=1200",
      alt: "Children learning art",
      caption: "Developing creative skills through guided exploration"
    }
  ];
  
  const contemporaryImages = [
    {
      src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200",
      alt: "Contemporary art installation",
      caption: "Art Factory: Experimental contemporary expressions"
    },
    {
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
      alt: "Digital art projection",
      caption: "Digital Aesthetics program: Technology meets traditional art"
    },
    {
      src: "https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=1200",
      alt: "International art collaboration",
      caption: "Art Bridge: Cross-cultural creative dialogue"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200",
      alt: "Modern artistic expression",
      caption: "Breaking boundaries in contemporary aesthetics"
    },
    {
      src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
      alt: "Conceptual art installation",
      caption: "Exploring abstract concepts through visual media"
    }
  ];
  
  // Select images based on category
  let selectedImages;
  switch (category) {
    case 'nature':
      selectedImages = natureImages;
      break;
    case 'folk':
      selectedImages = folkImages;
      break;
    case 'children':
      selectedImages = childrenImages;
      break;
    case 'contemporary':
      selectedImages = contemporaryImages;
      break;
    case 'all':
    default:
      // Combine all categories and select random images
      const allImages = [...natureImages, ...folkImages, ...childrenImages, ...contemporaryImages];
      selectedImages = allImages.sort(() => Math.random() - 0.5).slice(0, 6);
      break;
  }
  
  return <ArtisticGallery images={selectedImages} autoPlay={autoPlay} interval={interval} className={className} />;
};

export default ArtisticGalleryImages;
