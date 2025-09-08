import { useState, useEffect, useRef } from 'react';

interface ProjectCard {
  id: number;
  image: string;
  title: string;
  description: string;
}

const ProjectCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<number | null>(null);
  
  // Featured projects data
  const projectCards: ProjectCard[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1558960214-f4283a743867",
      title: "Garden Path",
      description: "Natural stone walkway"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1598509025928-8bfef290fe8e",
      title: "Water Features",
      description: "Tranquil pond design"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551076805-e1869033e561",
      title: "Zen Garden",
      description: "Peaceful retreat space"
    }
  ];
  
  // Auto-advance carousel
  useEffect(() => {
    if (!isPaused) {
      autoPlayRef.current = window.setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % projectCards.length);
      }, 3000);
    }
    
    return () => {
      if (autoPlayRef.current !== null) {
        window.clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, projectCards.length]);
  
  // Handle manual navigation
  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-black/10 backdrop-blur-sm rounded-xl w-full max-w-4xl mx-auto">
      {/* Clean modern carousel with no 3D effects */}
      <div 
        className="w-full relative px-6 mb-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Carousel container */}
        <div className="overflow-hidden relative rounded-xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {projectCards.map((card) => (
              <div 
                key={card.id} 
                className="min-w-full w-full flex-shrink-0 px-4 py-4"
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[350px] relative group">
                  {/* Image with gradient overlay */}
                  <div className="h-full w-full relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 z-10"></div>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 z-20 flex flex-col justify-between p-6 text-white">
                      {/* Top section - Title */}
                      <div>
                        <h3 className="text-2xl font-bold tracking-tight">{card.title}</h3>
                      </div>
                      
                      {/* Bottom section - Description */}
                      <div className="transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <p className="mb-3 font-medium text-white/90">{card.description}</p>
                        <a 
                          href={`/projects/${card.id}`}
                          className="inline-flex items-center text-sm font-bold text-white"
                        >
                          <span>View Details</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation dots */}
        <div className="flex justify-center mt-4 gap-2">
          {projectCards.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-green-500 w-8' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={() => setActiveIndex((prevIndex) => (prevIndex - 1 + projectCards.length) % projectCards.length)}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-r-lg p-2 ml-2 backdrop-blur-sm transition-all duration-200"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={() => setActiveIndex((prevIndex) => (prevIndex + 1) % projectCards.length)}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-l-lg p-2 mr-2 backdrop-blur-sm transition-all duration-200"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* View all projects button */}
      <a 
        href="/projects" 
        className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-md transition-colors duration-300 flex items-center gap-2 font-medium"
      >
        <span>View All Projects</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

export default ProjectCarousel;
