import { useState } from 'react';
import BeforeAfterSlider from "@/components/projects/BeforeAfterSlider";
import { Button } from "@/components/ui/button";

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
  
  // Sample projects data
  const projects: Project[] = [
    {
      id: 1,
      title: "Modern Backyard Transformation",
      description: "A complete redesign of a backyard in Kitsilano, featuring a custom patio, native plant garden, and water-efficient irrigation system.",
      category: "residential",
      location: "Kitsilano, Vancouver",
      beforeImage: "https://images.unsplash.com/photo-1621244047677-b0765d633118",
      afterImage: "https://images.unsplash.com/photo-1558960214-f4283a743867",
      tags: ["Patio Design", "Native Plants", "Irrigation"]
    },
    {
      id: 2,
      title: "Commercial Plaza Renovation",
      description: "Redesign of an office building plaza with drought-tolerant landscaping, outdoor seating areas, and improved accessibility.",
      category: "commercial",
      location: "Downtown Vancouver",
      beforeImage: "https://images.unsplash.com/photo-1527626825903-421398be6719",
      afterImage: "https://images.unsplash.com/photo-1568576550491-078d7f340a89",
      tags: ["Commercial", "Drought-Tolerant", "Urban Design"]
    },
    {
      id: 3,
      title: "Sustainable Garden Oasis",
      description: "A residential front yard transformed into a sustainable garden featuring rain gardens, permeable surfaces, and native plant species.",
      category: "sustainable",
      location: "West Vancouver",
      beforeImage: "https://images.unsplash.com/photo-1585513553538-14f215b32110",
      afterImage: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
      tags: ["Rain Gardens", "Sustainable", "Native Species"]
    },
    {
      id: 4,
      title: "Family-Friendly Backyard",
      description: "A backyard redesign focused on creating spaces for family activities while maintaining eco-friendly landscaping practices.",
      category: "residential",
      location: "North Vancouver",
      beforeImage: "https://images.unsplash.com/photo-1523730517788-a38562052f75",
      afterImage: "https://images.unsplash.com/photo-1600240644455-fd23d5952da9",
      tags: ["Family-Friendly", "Play Areas", "Low-Maintenance"]
    },
    {
      id: 5,
      title: "Restaurant Outdoor Patio",
      description: "Design and implementation of a vibrant outdoor dining space with planters, pergola, and ambient lighting for a local restaurant.",
      category: "commercial",
      location: "Gastown, Vancouver",
      beforeImage: "https://images.unsplash.com/photo-1600790093261-c799f9f70abd",
      afterImage: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      tags: ["Restaurant", "Outdoor Dining", "Urban Space"]
    },
    {
      id: 6,
      title: "Rooftop Garden Installation",
      description: "A sustainable rooftop garden for an apartment building, featuring container gardening, rainwater harvesting, and solar lighting.",
      category: "sustainable",
      location: "Yaletown, Vancouver",
      beforeImage: "https://images.unsplash.com/photo-1558642115-56f75db3c1dc",
      afterImage: "https://images.unsplash.com/photo-1598902108854-10e335adac99",
      tags: ["Rooftop", "Urban Gardening", "Rainwater Harvesting"]
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-forest-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in font-playfair">Our Projects</h1>
            <p className="text-xl text-forest-100 animate-fade-in-up">
              Browse through our landscape transformations in Vancouver and surrounding areas.
            </p>
          </div>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-10 bg-white border-b border-stone-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "residential", "commercial", "sustainable"].map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category 
                    ? "bg-forest-600 hover:bg-forest-700 text-white" 
                    : "text-forest-700 hover:bg-forest-50"
                }
                onClick={() => setActiveCategory(category as Category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <section className="py-16 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg">
                {/* Before/After Slider */}
                <BeforeAfterSlider
                  beforeImage={project.beforeImage}
                  afterImage={project.afterImage}
                  beforeAlt={`${project.title} before`}
                  afterAlt={`${project.title} after`}
                />
                
                {/* Project Details */}
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-forest-800 mb-2 font-playfair">{project.title}</h3>
                  <p className="text-forest-600 mb-4">{project.location}</p>
                  <p className="text-stone-600 mb-6">{project.description}</p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-stone-100 text-stone-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Button
                    variant="outline"
                    className="text-forest-700 border-forest-600 hover:bg-forest-50"
                  >
                    View Project Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-forest-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-playfair">Inspired by Our Work?</h2>
            <p className="text-lg text-forest-100 mb-8">
              Let us help you create your own landscape transformation.
            </p>
            <Button
              asChild
              className="bg-white text-forest-800 hover:bg-forest-100"
            >
              <a href="/contact">Request a Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsPage;
