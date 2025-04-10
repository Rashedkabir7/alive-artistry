
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
  // Define image collections by category with updated high-quality images
  const natureImages = [
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=1200",
      alt: "Natural art installation in forest",
      caption: "Environmental art merging with natural surroundings - Harith program"
    },
    {
      src: "https://images.unsplash.com/photo-1520962880247-cfaf541c8724?q=80&w=1200",
      alt: "Environmental art installation",
      caption: "Harith program: Art for ecological awareness"
    },
    {
      src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1200",
      alt: "Eco-art installation",
      caption: "Environmental Art Camp: Sustainable materials transformed into artistic expression"
    },
    {
      src: "https://images.unsplash.com/photo-1506259091721-347e791bab0f?q=80&w=1200",
      alt: "Nature-inspired art",
      caption: "Dharitri eco-tourism project: Ecological patterns in artistic design"
    },
    {
      src: "https://images.unsplash.com/photo-1517928260182-5687aefbd068?q=80&w=1200",
      alt: "Forest art space",
      caption: "Srijan Prangon Residency: Natural canvases for artistic expression"
    }
  ];
  
  const folkImages = [
    {
      src: "https://images.unsplash.com/photo-1635048424329-a9bfb146d7aa?q=80&w=1200",
      alt: "Traditional folk art",
      caption: "Karnaphuli Folk Triennial: Preserving indigenous craft techniques"
    },
    {
      src: "https://images.unsplash.com/photo-1560421741-50d22e539de5?q=80&w=1200",
      alt: "Folk art textile",
      caption: "Shikar program: Heritage preservation through craft"
    },
    {
      src: "https://images.unsplash.com/photo-1569091791842-7cfb64e04797?q=80&w=1200",
      alt: "Cultural folk artifact",
      caption: "Kandrabindu: Traditional symbolism in contemporary context"
    },
    {
      src: "https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?q=80&w=1200",
      alt: "Indigenous craftsmanship",
      caption: "Shikar program: Preserving artistic heritage through generations"
    },
    {
      src: "https://images.unsplash.com/photo-1540360659536-a3f3ca9f7a78?q=80&w=1200", 
      alt: "Traditional art motifs",
      caption: "Karnaphuli Folk Triennial: Elements of cultural identity in design"
    }
  ];
  
  const childrenImages = [
    {
      src: "https://images.unsplash.com/photo-1607453998774-d533f65dac99?q=80&w=1200",
      alt: "Children's art workshop",
      caption: "Kalpapuri program: Nurturing young artistic talent"
    },
    {
      src: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1200",
      alt: "Creative education for children",
      caption: "Kalpapuri School of Arts & Crafts: Exploring creativity through guided art activities"
    },
    {
      src: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=1200",
      alt: "Children's collaborative art project",
      caption: "Kalpaloker Citra: Building community through creative expression"
    },
    {
      src: "https://images.unsplash.com/photo-1560421683-6856ea585c78?q=80&w=1200",
      alt: "Childhood creativity",
      caption: "Kalpapuri School of Arts & Crafts: Fostering artistic development in early years"
    },
    {
      src: "https://images.unsplash.com/photo-1529066516367-36973222c957?q=80&w=1200",
      alt: "Children learning art",
      caption: "Kalpaloker Citra: Developing creative skills through guided exploration"
    }
  ];
  
  const contemporaryImages = [
    {
      src: "https://images.unsplash.com/photo-1541512416146-3e9ccaa35a9b?q=80&w=1200",
      alt: "Contemporary art installation",
      caption: "Art Factory: Experimental contemporary expressions"
    },
    {
      src: "https://images.unsplash.com/photo-1576773689115-5cd2b0223523?q=80&w=1200",
      alt: "Digital art projection",
      caption: "Young Art exhibition: Technology meets traditional art"
    },
    {
      src: "https://images.unsplash.com/photo-1567098228577-b7e7a3d98e28?q=80&w=1200",
      alt: "International art collaboration",
      caption: "Art Exchange: Cross-cultural creative dialogue"
    },
    {
      src: "https://images.unsplash.com/photo-1547119957-637f8679db1e?q=80&w=1200",
      alt: "Modern artistic expression",
      caption: "Art Factory: Breaking boundaries in contemporary aesthetics"
    },
    {
      src: "https://images.unsplash.com/photo-1532453288509-177d8062a8ee?q=80&w=1200",
      alt: "Conceptual art installation",
      caption: "Multidisciplinary Art Show: Exploring abstract concepts through visual media"
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
