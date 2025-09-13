import { useState } from 'react';
import BeforeAfterSlider from "@/components/projects/BeforeAfterSlider";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { motion } from 'framer-motion';
import heroImage from "@/assets/images/hero-image.jpg";

// Project category types
type Category = 'all' | 'residential' | 'commercial' | 'sustainable';

// Project interface
interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  location: string;
  beforeImage: string;
  afterImage: string;
  tags: string[];
}

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  
  // Sample projects data using actual images from assets
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Backyard Transformation",
      description: "A complete redesign of a backyard in Kitsilano, featuring a custom patio, native plant garden, and water-efficient irrigation system.",
      category: "residential",
      location: "Kitsilano, Vancouver",
      beforeImage: new URL('../../assets/images/services/yard-cleanup.jpg', import.meta.url).href,
      afterImage: new URL('../../assets/images/services/mowing-lawn.jpg', import.meta.url).href,
      tags: ["Patio Design", "Native Plants", "Irrigation"]
    },
    {
      id: 2,
      title: "Commercial Plaza Renovation",
      description: "Redesign of an office building plaza with drought-tolerant landscaping, outdoor seating areas, and improved accessibility.",
      category: "commercial",
      location: "Downtown Vancouver",
      beforeImage: new URL('../../assets/images/services/pressure-washing.jpg', import.meta.url).href,
      afterImage: new URL('../../assets/images/services/mowing-lawn.jpg', import.meta.url).href,
      tags: ["Commercial", "Drought-Tolerant", "Urban Design"]
    },
    {
      id: 3,
      title: "Sustainable Garden Oasis",
      description: "A residential front yard transformed into a sustainable garden featuring rain gardens, permeable surfaces, and native plant species.",
      category: "sustainable",
      location: "West Vancouver",
      beforeImage: new URL('../../assets/images/services/yard-cleanup.jpg', import.meta.url).href,
      afterImage: new URL('../../assets/images/services/hand-weeding.webp', import.meta.url).href,
      tags: ["Rain Gardens", "Sustainable", "Native Species"]
    },
    {
      id: 4,
      title: "Family-Friendly Backyard",
      description: "A backyard redesign focused on creating spaces for family activities while maintaining eco-friendly landscaping practices.",
      category: "residential",
      location: "North Vancouver",
      beforeImage: new URL('../../assets/images/services/leaf-removal.webp', import.meta.url).href,
      afterImage: new URL('../../assets/images/services/mowing-lawn.jpg', import.meta.url).href,
      tags: ["Family-Friendly", "Play Areas", "Low-Maintenance"]
    },
    {
      id: 5,
      title: "Restaurant Outdoor Patio",
      description: "Design and implementation of a vibrant outdoor dining space with planters, pergola, and ambient lighting for a local restaurant.",
      category: "commercial",
      location: "Gastown, Vancouver",
      beforeImage: new URL('../../assets/images/services/pressure-washing.jpg', import.meta.url).href,
      afterImage: new URL('../../assets/images/services/hand-weeding.webp', import.meta.url).href,
      tags: ["Restaurant", "Outdoor Dining", "Urban Space"]
    },
    {
      id: 6,
      title: "Rooftop Garden Installation",
      description: "A sustainable rooftop garden for an apartment building, featuring container gardening, rainwater harvesting, and solar lighting.",
      category: "sustainable",
      location: "Yaletown, Vancouver",
      beforeImage: new URL('../../assets/images/services/leaf-removal.webp', import.meta.url).href,
      afterImage: new URL('../../assets/images/services/hand-weeding.webp', import.meta.url).href,
      tags: ["Rooftop", "Urban Gardening", "Rainwater Harvesting"]
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Header Section with Image Background */}
      <section 
        className="relative h-[50vh] min-h-[400px] w-full flex items-end overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${heroImage})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="w-full relative z-10 pb-12">
          <div className="container mx-auto">
            <div className="flex flex-col items-start px-6">
              <div className="text-sm md:text-base text-white/80 font-medium tracking-wide mb-2 text-left font-switzer">
                <span>Home</span>
                <span className="mx-2">/</span>
                <span>Projects</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white text-left font-switzer">
                PROJECTS
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Content Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <FadeInSection>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-switzer">
                Transforming Landscapes Across Vancouver
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Discover our portfolio of stunning landscape transformations. From residential gardens to commercial spaces, 
                each project showcases our commitment to sustainable design and exceptional craftsmanship.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span>300+ Projects Completed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span>15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                  <span>98% Client Satisfaction</span>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeInSection delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 font-switzer">Filter by Category</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {[
                  { key: "all", label: "All Projects", icon: "🏡" },
                  { key: "residential", label: "Residential", icon: "🏠" },
                  { key: "commercial", label: "Commercial", icon: "🏢" },
                  { key: "sustainable", label: "Sustainable", icon: "🌱" }
                ].map((category) => (
                  <motion.button
                    key={category.key}
                    className={`
                      relative px-6 py-3 rounded-full font-medium transition-all duration-300 
                      ${activeCategory === category.key
                        ? "bg-green-600 text-white shadow-lg shadow-green-600/25" 
                        : "bg-gray-100 text-gray-700 hover:bg-green-50 hover:text-green-700"
                      }
                    `}
                    onClick={() => setActiveCategory(category.key as Category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.label}
                    {activeCategory === category.key && (
                      <motion.div
                        layoutId="activeCategory"
                        className="absolute inset-0 bg-green-600 rounded-full -z-10"
                        initial={false}
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <FadeInSection delay={0.3}>
            <motion.div 
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, staggerChildren: 0.1 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Before/After Slider with overlay */}
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={project.afterImage}
                      beforeAlt={`${project.title} before`}
                      afterAlt={`${project.title} after`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  {/* Project Details */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </div>
                      <div className="text-sm text-gray-500">📍 {project.location}</div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-switzer group-hover:text-green-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Modern Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex} 
                          className="inline-flex items-center px-3 py-1.5 bg-green-50 text-green-700 rounded-lg text-sm font-medium border border-green-200/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action Button */}
                    <motion.button
                      className="group/btn relative w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-medium overflow-hidden transition-all duration-300 hover:bg-green-600"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        View Project Details
                        <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-500 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300" />
                    </motion.button>
                  </div>
                  
                  {/* Decorative element */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                             radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeInSection delay={0.4}>
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl md:text-5xl font-bold mb-6 font-switzer">
                  Ready to Transform Your Space?
                </h2>
                <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                  Join hundreds of satisfied clients who have turned their landscape dreams into reality. 
                  Let our award-winning team create something extraordinary for your property.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">300+</div>
                    <div className="text-sm text-gray-400">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">15+</div>
                    <div className="text-sm text-gray-400">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
                    <div className="text-sm text-gray-400">Client Satisfaction</div>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <motion.a
                    href="/contact"
                    className="group relative inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:bg-green-500"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      Get Free Consultation
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </motion.a>
                  
                  <motion.a
                    href="tel:+1234567890"
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white/20 text-white rounded-xl font-semibold hover:border-white/40 hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call Now
                    </span>
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
