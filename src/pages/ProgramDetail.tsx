
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedHeading from '@/components/AnimatedHeading';
import ArtisticArrow from '@/components/ArtisticArrow';
import { Button } from '@/components/ui/button';
import { Paintbrush, Palette, Frame, Users, Clock, MapPin } from 'lucide-react';

interface ProgramDetail {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: string;
  category: string;
  year: string;
  image: string;
  gallery: string[];
  location: string;
  team: string[];
  objectives: string[];
}

const programsData: Record<string, ProgramDetail> = {
  "harith": {
    id: "harith",
    title: "Harith",
    description: "Art of environmental development focusing on ecological awareness and sustainability.",
    fullDescription: "Harith is our flagship environmental art program that explores the intersection of art and ecology. Through this initiative, we engage artists, communities, and environmental activists in creating artistic interventions that raise awareness about pressing ecological issues. The program includes installations in natural settings, workshops on sustainable art practices, and community projects that transform waste materials into compelling artworks. By using art as a medium for environmental advocacy, Harith creates emotional connections to nature that inspire meaningful action.",
    icon: "🌿",
    category: "Environmental Art",
    year: "2023-Present",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200",
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?q=80&w=1200",
      "https://images.unsplash.com/photo-1501542089326-c6030e7d9384?q=80&w=1200"
    ],
    location: "Various locations across Bangladesh",
    team: ["Rehana Zaman", "Kamal Ahmed", "Nasreen Khan", "Environmental Artists Collective"],
    objectives: [
      "Create environmental awareness through artistic interventions",
      "Establish sustainable art practices in local communities",
      "Document ecological changes through visual narratives",
      "Foster connections between artists and environmental scientists"
    ]
  },
  "kalpapuri": {
    id: "kalpapuri",
    title: "Kalpapuri",
    description: "Related with children art and psychology, nurturing young minds through artistic exploration.",
    fullDescription: "Kalpapuri is our dedicated program for children's artistic development, focusing on the relationship between creative expression and psychological well-being. This initiative provides safe spaces for children, especially those from marginalized communities, to explore their creativity without judgment. Through age-appropriate workshops, mentorship, and exhibition opportunities, we help young artists develop technical skills while expressing their unique perspectives. Our team of artists and child psychologists collaboratively design activities that promote emotional intelligence, boost confidence, and nurture imagination.",
    icon: "👧",
    category: "Children's Art",
    year: "2021-Present",
    image: "https://images.unsplash.com/photo-1611559410629-f9602e91c236?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200",
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=1200",
      "https://images.unsplash.com/photo-1602975256463-2b8557d13e77?q=80&w=1200"
    ],
    location: "Chittagong & Dhaka",
    team: ["Fahmida Rahman", "Saiful Islam", "Child Psychology Unit", "Volunteer Artist Network"],
    objectives: [
      "Provide artistic outlet for children to express emotions",
      "Develop fine motor skills through creative activities",
      "Build confidence through exhibition of children's artwork",
      "Create intergenerational dialogue through collaborative projects"
    ]
  },
  "shikar": {
    id: "shikar",
    title: "Shikar",
    description: "Development and persistence of folk arts & Crafts to preserve cultural heritage and traditional art forms.",
    fullDescription: "Shikar is our cultural heritage preservation program focused on documenting and revitalizing traditional folk arts and crafts of Bangladesh. Through partnerships with master artisans, we create apprenticeship opportunities that facilitate knowledge transfer to younger generations. The program includes detailed documentation of endangered techniques, creation of contemporary applications for traditional skills, and development of sustainable economic models for artisans. By celebrating indigenous knowledge systems and creative practices, Shikar helps maintain the rich cultural diversity that defines Bangladeshi artistic identity.",
    icon: "🧶",
    category: "Folk Arts & Crafts",
    year: "2019-Present",
    image: "https://images.unsplash.com/photo-1582210449638-91b2e7825b02?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1577083287809-1c774a469596?q=80&w=1200",
      "https://images.unsplash.com/photo-1563380451434-9e326bb820bb?q=80&w=1200",
      "https://images.unsplash.com/photo-1567361672830-f7aa558027a2?q=80&w=1200"
    ],
    location: "Rural regions of Bangladesh",
    team: ["Abdul Karim", "Nusrat Jahan", "Regional Artisan Collectives", "Cultural Documentation Team"],
    objectives: [
      "Document and archive traditional art techniques",
      "Create economic opportunities for traditional artisans",
      "Innovate contemporary applications for traditional skills",
      "Facilitate intergenerational knowledge transfer"
    ]
  },
  "artfactory": {
    id: "artfactory",
    title: "Art Factory",
    description: "Project for young artists to collaborate, experiment, and showcase innovative artistic approaches.",
    fullDescription: "Art Factory is our experimental contemporary art incubator, designed to push the boundaries of artistic expression through innovative collaborations. This program provides studio space, materials, mentorship, and exhibition opportunities for emerging artists who are exploring new media, interdisciplinary approaches, and experimental techniques. Participants engage in intensive residencies, collaborative projects, and public interventions that challenge conventional artistic practices. The Art Factory serves as a laboratory for artistic innovation, encouraging risk-taking and critical dialogue about the role of contemporary art in society.",
    icon: "🎨",
    category: "Contemporary Art",
    year: "2022-Present",
    image: "https://images.unsplash.com/photo-1543857778-c4a1a9e0615f?q=80&w=1200",
    gallery: [
      "https://images.unsplash.com/photo-1582640317571-8e5e21839aae?q=80&w=1200",
      "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=1200",
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?q=80&w=1200"
    ],
    location: "Dhaka Art District",
    team: ["Tahmina Begum", "Rajon Ali", "Media Art Specialists", "International Artist Network"],
    objectives: [
      "Create opportunities for experimental artistic practices",
      "Establish cross-disciplinary collaborations",
      "Develop critical dialogue about contemporary art",
      "Provide professional development for emerging artists"
    ]
  }
};

const ProgramDetail: React.FC = () => {
  const { programId } = useParams<{ programId: string }>();
  const [program, setProgram] = useState<ProgramDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      if (programId && programsData[programId]) {
        setProgram(programsData[programId]);
      }
      setLoading(false);
    }, 500);
  }, [programId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-santaran-cream">
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, repeatType: "reverse" }
          }}
          className="w-16 h-16 border-4 border-t-santaran-vermilion border-santaran-amber rounded-full"
        />
      </div>
    );
  }

  if (!program) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-santaran-cream">
        <h1 className="text-3xl font-display">Program not found</h1>
        <p className="mt-4">The program you're looking for doesn't exist or has been moved.</p>
        <Button className="mt-6" onClick={() => window.history.back()}>
          Go Back
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-santaran-cream min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-santaran-jade/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-santaran-vermilion/10 blur-3xl"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <motion.span 
                className="inline-block py-1 px-4 rounded-full bg-santaran-vermilion/10 text-santaran-vermilion text-sm font-medium mb-3"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                {program.category} • {program.year}
              </motion.span>
              
              <AnimatedHeading 
                text={program.title}
                tag="h1"
                className="heading-xl mb-4"
                color="text-santaran-teal"
                animation="wave"
              />
              
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-santaran-vermilion to-santaran-amber mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
              />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <p className="text-xl mb-6">
                  {program.description}
                </p>
                
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center text-santaran-jade">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>{program.year}</span>
                  </div>
                  <div className="flex items-center text-santaran-vermilion">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{program.location}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button>
                    Join Program
                    <Palette className="ml-2 w-4 h-4" />
                  </Button>
                  <Button variant="outline">
                    Program Gallery
                    <Frame className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <motion.div 
                className="relative aspect-square"
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="artistic-card fancy-border canvas-texture h-full">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white px-6 py-3 rounded-lg shadow-lg border-2 border-santaran-jade/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-5xl">{program.icon}</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-white relative">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <AnimatedHeading 
                  text="About the Program"
                  tag="h2"
                  className="heading-md mb-6"
                  color="text-santaran-vermilion"
                  animation="typewriter"
                />

                <div className="prose prose-lg max-w-none">
                  <p className="mb-6 text-lg">
                    {program.fullDescription}
                  </p>

                  <div className="mt-8">
                    <h3 className="text-xl font-display font-medium text-santaran-teal mb-4">Program Objectives</h3>
                    <ul className="space-y-3">
                      {program.objectives.map((objective, index) => (
                        <motion.li 
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="bg-santaran-vermilion/10 text-santaran-vermilion p-2 rounded-full mr-3 mt-0.5">
                            <Paintbrush className="w-4 h-4" />
                          </div>
                          <span>{objective}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>

            <div>
              <motion.div
                className="bg-santaran-cream/50 p-6 rounded-xl border border-santaran-jade/20"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-display font-medium text-santaran-teal mb-4">Program Team</h3>
                <div className="space-y-3">
                  {program.team.map((member, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-3"
                    >
                      <div className="bg-santaran-amber/10 text-santaran-amber p-2 rounded-full">
                        <Users className="w-4 h-4" />
                      </div>
                      <span>{member}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-santaran-jade/10">
                  <h3 className="text-xl font-display font-medium text-santaran-teal mb-4">Contact</h3>
                  <p className="mb-4">Interested in this program? Get in touch with our team to learn more about participation opportunities.</p>
                  <Button className="w-full">
                    Contact Program Coordinator
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-santaran-cream/50">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading 
            text="Program Gallery"
            tag="h2"
            className="heading-md text-center mb-10"
            color="text-santaran-teal"
            animation="rotate"
          />

          <div className="relative">
            <div className="overflow-hidden rounded-xl aspect-[16/9] mb-4">
              <motion.img
                key={activeImageIndex}
                src={program.gallery[activeImageIndex]}
                alt={`${program.title} gallery image ${activeImageIndex + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </div>

            <div className="flex justify-center gap-4 mt-4">
              <button 
                className="p-2 rounded-full bg-white border border-santaran-jade/20 shadow-md hover:shadow-lg transition-all"
                onClick={() => setActiveImageIndex((prev) => (prev === 0 ? program.gallery.length - 1 : prev - 1))}
              >
                <ArtisticArrow direction="left" size="sm" />
              </button>
              
              <div className="flex gap-2">
                {program.gallery.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === activeImageIndex ? 'bg-santaran-vermilion scale-150' : 'bg-santaran-jade/40'
                    }`}
                    onClick={() => setActiveImageIndex(index)}
                  />
                ))}
              </div>
              
              <button 
                className="p-2 rounded-full bg-white border border-santaran-jade/20 shadow-md hover:shadow-lg transition-all"
                onClick={() => setActiveImageIndex((prev) => (prev === program.gallery.length - 1 ? 0 : prev + 1))}
              >
                <ArtisticArrow direction="right" size="sm" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Programs */}
      <section className="py-16 px-4 md:px-8 lg:px-12 bg-white">
        <div className="container mx-auto max-w-6xl">
          <AnimatedHeading 
            text="Explore Other Programs"
            tag="h2"
            className="heading-md text-center mb-10"
            color="text-santaran-teal"
            animation="wave"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.values(programsData)
              .filter(p => p.id !== program.id)
              .slice(0, 3)
              .map(p => (
                <Link to={`/programs/${p.id}`} key={p.id}>
                  <motion.div 
                    className="relative overflow-hidden rounded-xl group cursor-pointer"
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img 
                        src={p.image} 
                        alt={p.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-xs font-medium py-1 px-2 rounded-full bg-santaran-jade text-white">
                        {p.category}
                      </span>
                      <h3 className="text-white text-xl font-display mt-2">{p.title}</h3>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>

          <div className="text-center mt-10">
            <Button onClick={() => window.location.href = "/programs"}>
              View All Programs
              <motion.div
                className="ml-2"
                animate={{ 
                  x: [0, 5, 0],
                  rotate: [-5, 5, -5, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  times: [0, 0.2, 1]
                }}
              >
                <Paintbrush className="w-4 h-4 text-white" />
              </motion.div>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProgramDetail;
