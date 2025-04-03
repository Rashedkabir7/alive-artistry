
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
      src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
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
      src: "https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200",
      alt: "Nature-inspired art",
      caption: "Ecological patterns in artistic design"
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1200",
      alt: "Forest art space",
      caption: "Natural canvases for artistic expression"
    }
  ];
  
  const folkImages = [
    {
      src: "https://images.unsplash.com/photo-1582210449638-91b2e7825b02?q=80&w=1200",
      alt: "Traditional folk art",
      caption: "Preserving indigenous craft techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1577083287809-1c774a469596?q=80&w=1200",
      alt: "Folk art textile",
      caption: "Shikar program: Heritage preservation through craft"
    },
    {
      src: "https://images.unsplash.com/photo-1563380451434-9e326bb820bb?q=80&w=1200",
      alt: "Cultural folk artifact",
      caption: "Traditional symbolism in contemporary context"
    },
    {
      src: "https://images.unsplash.com/photo-1567361672830-f7aa558027a2?q=80&w=1200",
      alt: "Indigenous craftsmanship",
      caption: "Preserving artistic heritage through generations"
    },
    {
      src: "https://images.unsplash.com/photo-1558651563-5b77e7c0fe98?q=80&w=1200", 
      alt: "Traditional art motifs",
      caption: "Elements of cultural identity in design"
    }
  ];
  
  const childrenImages = [
    {
      src: "https://images.unsplash.com/photo-1611559410629-f9602e91c236?q=80&w=1200",
      alt: "Children's art workshop",
      caption: "Kalpapuri program: Nurturing young artistic talent"
    },
    {
      src: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200",
      alt: "Creative education for children",
      caption: "Exploring creativity through guided art activities"
    },
    {
      src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200",
      alt: "Children's collaborative art project",
      caption: "Building community through creative expression"
    },
    {
      src: "https://images.unsplash.com/photo-1602975256463-2b8557d13e77?q=80&w=1200",
      alt: "Childhood creativity",
      caption: "Fostering artistic development in early years"
    },
    {
      src: "https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=1200",
      alt: "Children learning art",
      caption: "Developing creative skills through guided exploration"
    }
  ];
  
  const contemporaryImages = [
    {
      src: "https://images.unsplash.com/photo-1543857778-c4a1a9e0615f?q=80&w=1200",
      alt: "Contemporary art installation",
      caption: "Art Factory: Experimental contemporary expressions"
    },
    {
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",
      alt: "Digital art projection",
      caption: "Digital Aesthetics program: Technology meets traditional art"
    },
    {
      src: "https://images.unsplash.com/photo-1582640317571-8e5e21839aae?q=80&w=1200",
      alt: "International art collaboration",
      caption: "Art Bridge: Cross-cultural creative dialogue"
    },
    {
      src: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200",
      alt: "Modern artistic expression",
      caption: "Breaking boundaries in contemporary aesthetics"
    },
    {
      src: "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=1200",
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
