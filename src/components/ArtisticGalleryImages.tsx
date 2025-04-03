
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
  // Define image collections by category
  const natureImages = [
    {
      src: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1200",
      alt: "Natural art installation in forest",
      caption: "Environmental art merging with natural surroundings"
    },
    {
      src: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?q=80&w=1200",
      alt: "Artistic nature conservation project",
      caption: "Harith program: Art for ecological awareness"
    },
    {
      src: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=1200",
      alt: "Eco-art installation",
      caption: "Sustainable materials transformed into artistic expression"
    }
  ];
  
  const folkImages = [
    {
      src: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1200",
      alt: "Traditional folk art",
      caption: "Preserving indigenous craft techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?q=80&w=1200",
      alt: "Folk art textile",
      caption: "Shikar program: Heritage preservation through craft"
    },
    {
      src: "https://images.unsplash.com/photo-1616235233797-772a0f3b6b76?q=80&w=1200",
      alt: "Cultural folk artifact",
      caption: "Traditional symbolism in contemporary context"
    }
  ];
  
  const childrenImages = [
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200",
      alt: "Children's art workshop",
      caption: "Kalpapuri program: Nurturing young artistic talent"
    },
    {
      src: "https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?q=80&w=1200",
      alt: "Creative education for children",
      caption: "Exploring creativity through guided art activities"
    },
    {
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200",
      alt: "Children's collaborative art project",
      caption: "Building community through creative expression"
    }
  ];
  
  const contemporaryImages = [
    {
      src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200",
      alt: "Contemporary art installation",
      caption: "Art Factory: Experimental contemporary expressions"
    },
    {
      src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200",
      alt: "Digital art projection",
      caption: "Digital Aesthetics program: Technology meets traditional art"
    },
    {
      src: "https://images.unsplash.com/photo-1608228088998-57828365d486?q=80&w=1200",
      alt: "International art collaboration",
      caption: "Art Bridge: Cross-cultural creative dialogue"
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
      // Combine all categories and select 5 random images
      const allImages = [...natureImages, ...folkImages, ...childrenImages, ...contemporaryImages];
      selectedImages = allImages.sort(() => Math.random() - 0.5).slice(0, 5);
      break;
  }
  
  return <ArtisticGallery images={selectedImages} autoPlay={autoPlay} interval={interval} className={className} />;
};

export default ArtisticGalleryImages;
