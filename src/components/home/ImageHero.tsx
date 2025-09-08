import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ImageHeroProps {
  imageSrc: string;
  title: string;
  subtitle: string;
  buttonText?: string;
  buttonLink?: string;
}

const ImageHero = ({
  imageSrc,
  title,
  subtitle,
  buttonText = "Get Started",
  buttonLink = "#",
}: ImageHeroProps) => {
  const [scrolled, setScrolled] = useState(false);

  // Add scroll effect for hero animations
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      {/* Image background */}
      <img
        src={imageSrc}
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl transition-all duration-700 ease-in-out transform">
          <h1 
            className={`font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8 transition-all duration-700 tracking-wide ${
              scrolled ? "opacity-80 translate-y-2" : "opacity-100"
            }`}
          >
            {title}
          </h1>
          <p 
            className={`font-body text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto transition-all duration-700 ${
              scrolled ? "opacity-70 translate-y-1" : "opacity-100"
            }`}
          >
            {subtitle}
          </p>
          <Button 
            asChild
            className="bg-green-600 hover:bg-green-500 text-white text-lg px-8 py-7 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            size="lg"
          >
            <a href={buttonLink}>{buttonText}</a>
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <span className="text-white/80 text-sm mb-2">Scroll Down</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white/80" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
