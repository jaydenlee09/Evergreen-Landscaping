import { Button } from "@/components/ui/button";

interface ImageHeroProps {
  imageSrc: string;
}

const ImageHero = ({
  imageSrc
}: ImageHeroProps) => {
  return (
    <div className="relative w-full h-[90vh] sm:h-[100vh] overflow-hidden text-left">
      {/* Image background */}
      <img
        src={imageSrc}
        alt="Beautiful Landscaped Home"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Dark overlay with gradient - increased opacity for better text clarity */}
      <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col justify-center">
        <div className="container mx-auto px-5 sm:pl-6 md:pl-8 lg:pl-12">
          <div className="max-w-4xl">
            {/* Two-line heading with different styling per line */}
            <div className="mb-4 sm:mb-8">
              <h1 className="font-switzer text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight mb-0">
                LANDSCAPES
              </h1>
              <h1 className="font-switzer text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white leading-tight flex flex-wrap sm:flex-nowrap items-center">
                THAT <span className="italic ml-0 sm:ml-4 font-extrabold">INSPIRE</span>
              </h1>
            </div>
            
            {/* Left border with text description - exactly matching screenshot */}
            <div className="border-l-4 border-white pl-4 sm:pl-6 mb-6 sm:mb-10">
              <p className="font-switzer text-white text-sm sm:text-lg md:text-xl max-w-2xl">
                Crafting dream gardens with passion, creativity, and
                sustainability for over a decade with our experienced
                landscape artists and gardener teams.
              </p>
            </div>
            
            {/* Buttons - left-aligned and side by side on all devices */}
            <div className="flex flex-row gap-4 sm:gap-6">
              <Button 
                asChild
                className="bg-white hover:bg-gray-100 text-gray-800 font-switzer font-medium text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-6 h-auto rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex-1 sm:flex-none"
              >
                <a href="/contact" className="flex items-center justify-center">Contact Us</a>
              </Button>
              <Button 
                asChild
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/10 font-switzer font-medium text-sm sm:text-base md:text-lg px-6 sm:px-8 md:px-10 py-4 sm:py-4 md:py-6 h-auto rounded-full transition-all duration-300 flex-1 sm:flex-none"
              >
                <a href="/projects" className="flex items-center justify-center gap-2">
                  Explore Projects
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
