
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
      src: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Natural art installation in forest",
      caption: "Environmental art merging with natural surroundings - Harith program"
    },
    {
      src: "https://images.pexels.com/photos/266583/pexels-photo-266583.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Environmental art installation",
      caption: "Harith program: Art for ecological awareness"
    },
    {
      src: "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Eco-art installation",
      caption: "Environmental Art Camp: Sustainable materials transformed into artistic expression"
    },
    {
      src: "https://images.pexels.com/photos/3225529/pexels-photo-3225529.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Nature-inspired art",
      caption: "Dharitri eco-tourism project: Ecological patterns in artistic design"
    },
    {
      src: "https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Forest art space",
      caption: "Srijan Prangon Residency: Natural canvases for artistic expression"
    }
  ];
  
  const folkImages = [
    {
      src: "https://images.pexels.com/photos/7605913/pexels-photo-7605913.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Traditional folk art",
      caption: "Karnaphuli Folk Triennial: Preserving indigenous craft techniques"
    },
    {
      src: "https://images.pexels.com/photos/1536622/pexels-photo-1536622.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Folk art textile",
      caption: "Shikar program: Heritage preservation through craft"
    },
    {
      src: "https://images.pexels.com/photos/2183577/pexels-photo-2183577.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Cultural folk artifact",
      caption: "Kandrabindu: Traditional symbolism in contemporary context"
    },
    {
      src: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Indigenous craftsmanship",
      caption: "Shikar program: Preserving artistic heritage through generations"
    },
    {
      src: "https://images.pexels.com/photos/7676524/pexels-photo-7676524.jpeg?auto=compress&cs=tinysrgb&w=1800", 
      alt: "Traditional art motifs",
      caption: "Karnaphuli Folk Triennial: Elements of cultural identity in design"
    }
  ];
  
  const childrenImages = [
    {
      src: "https://images.pexels.com/photos/3933871/pexels-photo-3933871.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Children's art workshop",
      caption: "Kalpapuri program: Nurturing young artistic talent"
    },
    {
      src: "https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Creative education for children",
      caption: "Kalpapuri School of Arts & Crafts: Exploring creativity through guided art activities"
    },
    {
      src: "https://images.pexels.com/photos/8473558/pexels-photo-8473558.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Children's collaborative art project",
      caption: "Kalpaloker Citra: Building community through creative expression"
    },
    {
      src: "https://images.pexels.com/photos/8473893/pexels-photo-8473893.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Childhood creativity",
      caption: "Kalpapuri School of Arts & Crafts: Fostering artistic development in early years"
    },
    {
      src: "https://images.pexels.com/photos/8474495/pexels-photo-8474495.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Children learning art",
      caption: "Kalpaloker Citra: Developing creative skills through guided exploration"
    }
  ];
  
  const contemporaryImages = [
    {
      src: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Contemporary art installation",
      caption: "Art Factory: Experimental contemporary expressions"
    },
    {
      src: "https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Digital art projection",
      caption: "Young Art exhibition: Technology meets traditional art"
    },
    {
      src: "https://images.pexels.com/photos/3471028/pexels-photo-3471028.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "International art collaboration",
      caption: "Art Exchange: Cross-cultural creative dialogue"
    },
    {
      src: "https://images.pexels.com/photos/2570059/pexels-photo-2570059.jpeg?auto=compress&cs=tinysrgb&w=1800",
      alt: "Modern artistic expression",
      caption: "Art Factory: Breaking boundaries in contemporary aesthetics"
    },
    {
      src: "https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=1800",
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
