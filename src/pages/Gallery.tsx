
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Filter, Search, X } from 'lucide-react';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  artist: string;
  year: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Environmental Harmony",
    category: "Painting",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600",
    artist: "Rahima Khan",
    year: 2022
  },
  {
    id: 2,
    title: "Indigenous Patterns",
    category: "Folk Art",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=600",
    artist: "Mohammad Ali",
    year: 2021
  },
  {
    id: 3,
    title: "Nature's Calling",
    category: "Sculpture",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=600",
    artist: "Nusrat Jahan",
    year: 2023
  },
  {
    id: 4,
    title: "Cultural Roots",
    category: "Textile Art",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=600",
    artist: "Kamal Ahmed",
    year: 2020
  },
  {
    id: 5,
    title: "Urban Ecology",
    category: "Painting",
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?q=80&w=600",
    artist: "Salma Begum",
    year: 2022
  },
  {
    id: 6,
    title: "Child's Imagination",
    category: "Children's Art",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=600",
    artist: "Youth Program",
    year: 2023
  },
  {
    id: 7,
    title: "Festival Celebrations",
    category: "Folk Art",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?q=80&w=600",
    artist: "Community Artists",
    year: 2021
  },
  {
    id: 8,
    title: "Traditions Reimagined",
    category: "Mixed Media",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=600",
    artist: "Faisal Rahman",
    year: 2023
  },
  {
    id: 9,
    title: "River Spirit",
    category: "Sculpture",
    image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=600",
    artist: "Tania Islam",
    year: 2022
  },
];

const categories = ["All", "Painting", "Sculpture", "Folk Art", "Textile Art", "Mixed Media", "Children's Art"];

const Gallery = () => {
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = filter === "All" || item.category === filter;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        item.artist.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="heading-lg text-santaran-teal mb-4">Art Gallery</h1>
            <div className="w-24 h-1 bg-santaran-terracotta mx-auto"></div>
            <p className="mt-6 text-lg max-w-2xl mx-auto">
              Explore the artistic expressions from our programs and projects, showcasing the rich 
              cultural heritage and creative innovations of our community.
            </p>
          </div>
          
          {/* Search and Filter Bar */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-between gap-4">
              <div className="relative w-full md:w-1/3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search artworks or artists"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-santaran-teal"
                />
                {searchTerm && (
                  <button 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    onClick={() => setSearchTerm("")}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
              
              <div className="flex gap-2">
                <button 
                  className="md:hidden px-4 py-3 border border-gray-300 rounded-md flex items-center gap-2 bg-white"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={18} />
                  Filters
                </button>
                
                {/* Desktop Category Filters */}
                <div className="hidden md:flex gap-2 overflow-x-auto pb-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setFilter(category)}
                      className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                        filter === category 
                          ? 'bg-santaran-teal text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Mobile Category Filters */}
            {showFilters && (
              <div className="md:hidden flex gap-2 overflow-x-auto py-4">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full transition-colors whitespace-nowrap ${
                      filter === category 
                        ? 'bg-santaran-teal text-white' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Gallery Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map(item => (
                <div 
                  key={item.id} 
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="relative overflow-hidden aspect-square">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-4 w-full">
                        <span className="inline-block px-2 py-1 bg-santaran-terracotta/90 text-white text-xs rounded mb-2">
                          {item.category}
                        </span>
                        <h3 className="text-white font-display text-xl">{item.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h3 className="font-display text-lg font-semibold text-santaran-teal">{item.title}</h3>
                    <div className="flex justify-between mt-2 text-sm text-gray-600">
                      <span>{item.artist}</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="heading-sm text-gray-600 mb-2">No artworks found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
