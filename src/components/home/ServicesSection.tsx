import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import lawnMowerIcon from '@/assets/images/icons/lawn-mower-icon.png';
import weedingIcon from '@/assets/images/icons/weeding-icon.png';
import pressureWashingIcon from '@/assets/images/icons/pressure-washing-icon.png';

// Import service images
import mowingLawnImage from '@/assets/images/services/mowing-lawn.jpg';
import handWeedingImage from '@/assets/images/services/hand-weeding.webp';
import pressureWashingImage from '@/assets/images/services/pressure-washing.jpg';
import yardCleanupImage from '@/assets/images/services/yard-cleanup.jpg';
import leafRemovalImage from '@/assets/images/services/leaf-removal.webp';

// Service type definition for type safety
type Service = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
};

const ServicesSection = () => {
  // Define the services - five services for the carousel
  const services: Service[] = [
    {
      id: 1,
      title: "Lawn Mowing",
      description: "Professional precision cutting and edging for a perfectly manicured lawn that enhances your property's curb appeal.",
      imageUrl: mowingLawnImage,
      icon: lawnMowerIcon
    },
    {
      id: 2,
      title: "Hand Weeding",
      description: "Meticulous garden bed maintenance with careful hand weeding to preserve your valuable plants while removing unwanted growth.",
      imageUrl: handWeedingImage,
      icon: weedingIcon
    },
    {
      id: 3,
      title: "Pressure Washing",
      description: "Restore surfaces to like-new condition with our professional pressure washing for driveways, decks, and patios.",
      imageUrl: pressureWashingImage,
      icon: pressureWashingIcon
    },
    {
      id: 4,
      title: "Yard Cleanup",
      description: "Comprehensive cleanup services that transform overgrown or neglected areas into beautiful, usable outdoor spaces.",
      imageUrl: yardCleanupImage,
      icon: weedingIcon // Using weeding icon for yard cleanup as it's related to garden maintenance
    },
    {
      id: 5,
      title: "Leaf Removal",
      description: "Efficient seasonal leaf removal that keeps your lawn healthy and your property looking pristine throughout fall and winter.",
      imageUrl: leafRemovalImage,
      icon: lawnMowerIcon // Using lawn mower icon for leaf removal as it's related to lawn care
    }
  ];
  
  // Modern professional carousel implementation
  const [activeIndex, setActiveIndex] = useState(2); // Start with middle card active
  const [direction, setDirection] = useState(0); // Track animation direction
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchThreshold = 50; // Minimum swipe distance
  
  // Smooth auto-advancing carousel with pause on hover/interaction
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused && !isAnimating) {
        handleNext();
      }
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, isAnimating]);
  
  // Navigation functions with direction tracking
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(-1);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? services.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsAnimating(false), 700); // Match animation duration
  };
  
  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(1);
    setActiveIndex((prevIndex) => 
      prevIndex === services.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsAnimating(false), 700); // Match animation duration
  };
  
  const handleDotClick = (index: number) => {
    if (isAnimating || index === activeIndex) return;
    setIsAnimating(true);
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };
  
  // Touch and mouse interaction handlers
  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (isAnimating) return;
    setIsDragging(true);
    setIsPaused(true);
    
    // Get pageX from either mouse or touch event
    const pageX = 'touches' in e 
      ? (e as React.TouchEvent).touches[0].pageX
      : (e as React.MouseEvent).pageX;
      
    setStartX(pageX);
    setCurrentX(pageX);
  };
  
  const handleDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDragging) return;
    
    // Get pageX from either mouse or touch event
    const pageX = 'touches' in e 
      ? (e as React.TouchEvent).touches[0].pageX
      : (e as React.MouseEvent).pageX;
      
    setCurrentX(pageX);
    
    // Optional: Add visual feedback during drag
    const dragOffset = pageX - startX;
    if (carouselRef.current) {
      // Apply subtle visual feedback during drag
      // This is just visual and doesn't affect the actual carousel state
      carouselRef.current.style.transform = `translateX(${dragOffset * 0.05}px)`;
    }
  };
  
  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    
    // Reset visual feedback
    if (carouselRef.current) {
      carouselRef.current.style.transform = '';
    }
    
    const dragDistance = currentX - startX;
    
    if (Math.abs(dragDistance) > touchThreshold) {
      if (dragDistance > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    
    // Resume auto-advance after a short delay
    setTimeout(() => setIsPaused(false), 2000);
  };

  // Calculate positions for the professional 3D carousel effect
  const getCardStyle = (index: number) => {
    const totalCards = services.length;
    const normalizedIndex = (index - activeIndex + totalCards) % totalCards;
    
    // Calculate visible cards (2 on each side of active card)
    const visibleCards = Math.min(5, totalCards);
    const visibleRange = Math.floor(visibleCards / 2);
    
    // Convert the index to a position within the visible range (-2, -1, 0, 1, 2)
    let position;
    if (normalizedIndex <= visibleRange) {
      position = normalizedIndex;
    } else if (normalizedIndex >= totalCards - visibleRange) {
      position = normalizedIndex - totalCards;
    } else {
      // Cards that should be hidden
      return {
        zIndex: -10,
        opacity: 0,
        scale: 0.4,
        x: 0,
        y: 0,
        rotateY: 0,
        filter: 'brightness(0)',
        boxShadow: 'none'
      };
    }
    
    // Define type for position styles
    type PositionStyle = {
      zIndex: number;
      opacity: number;
      scale: number;
      x: string;
      y: string;
      rotateY: number;
      filter: string;
      boxShadow: string;
    };
    
    // Apply styles based on position
    const positionStyles: Record<string, PositionStyle> = {
      // Center (active) card
      '0': {
        zIndex: 50,
        opacity: 1,
        scale: 1,
        x: '0%',
        y: '0%',
        rotateY: 0,
        filter: 'brightness(1)',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)'
      },
      // Adjacent cards
      '1': {
        zIndex: 40,
        opacity: 0.8,
        scale: 0.85,
        x: '90%',
        y: '0%',
        rotateY: -15,
        filter: 'brightness(0.9)',
        boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.5)'
      },
      '-1': {
        zIndex: 40,
        opacity: 0.8,
        scale: 0.85,
        x: '-90%',
        y: '0%',
        rotateY: 15,
        filter: 'brightness(0.9)',
        boxShadow: '0 15px 30px -10px rgba(0, 0, 0, 0.5)'
      },
      // Outer cards
      '2': {
        zIndex: 30,
        opacity: 0.6,
        scale: 0.7,
        x: '170%',
        y: '0%',
        rotateY: -25,
        filter: 'brightness(0.8)',
        boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.3)'
      },
      '-2': {
        zIndex: 30,
        opacity: 0.6,
        scale: 0.7,
        x: '-170%',
        y: '0%',
        rotateY: 25,
        filter: 'brightness(0.8)',
        boxShadow: '0 10px 20px -8px rgba(0, 0, 0, 0.3)'
      }
    };
    
    return positionStyles[position.toString() as keyof typeof positionStyles] || positionStyles['0'];
  };

  return (
    <section className="py-12 sm:py-16 w-full bg-[#fdfaf3] overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <motion.div 
            className="flex items-center justify-center mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="h-[1px] w-8 sm:w-12 bg-forest-600"></div>
            <span className="mx-3 sm:mx-4 text-forest-600 font-medium text-xs sm:text-sm uppercase tracking-wider">Our Services</span>
            <div className="h-[1px] w-8 sm:w-12 bg-forest-600"></div>
          </motion.div>
          <motion.h2 
            className="font-switzer text-2xl sm:text-3xl md:text-4xl font-bold text-forest-800 mt-3 px-4"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            Custom Landscaping for <br className="hidden sm:block" />
            <span className="text-forest-700">Every Home and Lifestyle</span>
          </motion.h2>
        </div>

        {/* Professional 3D Card Carousel - Hidden on mobile, visible on tablet+ */}
        <div 
          className="relative h-[500px] max-w-6xl mx-auto mt-6 sm:mt-10 px-2 sm:px-4 select-none hidden md:block"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="relative h-full flex items-center justify-center"
            onTouchStart={handleDragStart}
            onTouchMove={handleDragMove}
            onTouchEnd={handleDragEnd}
            onMouseDown={handleDragStart}
            onMouseMove={handleDragMove}
            onMouseUp={handleDragEnd}
            onMouseLeave={handleDragEnd}
            style={{ perspective: '1500px' }}
          >
            {/* All Service Cards */}
            <AnimatePresence initial={false} mode="popLayout">
              {services.map((service, index) => {
                const style = getCardStyle(index);
                
                return (
                  <motion.div
                    key={service.id}
                    className="absolute w-[280px] sm:w-[320px] md:w-[350px] h-[420px] rounded-xl 
                              overflow-hidden will-change-transform cursor-pointer"
                    initial={false}
                    animate={{
                      zIndex: style.zIndex,
                      opacity: style.opacity,
                      scale: style.scale,
                      x: style.x,
                      y: style.y || 0,
                      rotateY: style.rotateY,
                      filter: style.filter,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 35,
                      mass: 1
                    }}
                    onClick={() => {
                      if (index !== activeIndex) {
                        handleDotClick(index);
                      }
                    }}
                    style={{
                      transformStyle: 'preserve-3d',
                      boxShadow: style.boxShadow || "0px 5px 20px -5px rgba(0, 0, 0, 0.3)",
                    }}
                  >
                    {/* Service Image */}
                    <div className="absolute inset-0 w-full h-full">
                      <img 
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        draggable="false"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>
                    </div>

                    {/* Service Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                      <div className="flex justify-center">
                        {/* Service Icon in Circle */}
                        <motion.div 
                          className="bg-white/10 p-4 rounded-full backdrop-blur-md border border-white/20"
                          initial={false}
                          animate={index === activeIndex ? { 
                            scale: [0.9, 1.1, 1],
                            y: [0, -5, 0]
                          } : {}}
                          transition={{ 
                            duration: 0.6,
                            ease: "easeOut",
                            delay: 0.1
                          }}
                          style={{
                            boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.3)",
                          }}
                        >
                          <img 
                            src={service.icon} 
                            alt={`${service.title} icon`} 
                            className="w-10 h-10"
                            style={{ filter: "brightness(0) invert(1)" }}
                            draggable="false"
                          />
                        </motion.div>
                      </div>
                      
                      <div className="text-center mt-auto">
                        {/* Service Title */}
                        <h3 className="text-3xl font-bold mb-2 drop-shadow-lg tracking-tight">
                          {service.title}
                        </h3>
                        
                        {/* Service Description - Only visible on active card */}
                        {index === activeIndex && (
                          <motion.p 
                            className="text-sm font-medium text-white/90 mb-4 max-w-[90%] mx-auto"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                          >
                            {service.description}
                          </motion.p>
                        )}
                        
                        {/* Learn More Button - Only visible on active card */}
                        {index === activeIndex && (
                          <motion.button 
                            className="mt-2 px-5 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-md 
                                     rounded-full text-white font-medium text-sm border border-white/30"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                            whileHover={{ scale: 1.05, boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)" }}
                            whileTap={{ scale: 0.98 }}
                          >
                            Learn More
                          </motion.button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {/* Carousel Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-6 z-40
                        bg-white/10 backdrop-blur-md text-white hover:bg-white/20 rounded-full p-3
                        transition-all duration-300 border border-white/30"
              aria-label="Previous service"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5"></path>
                <path d="M12 19l-7-7 7-7"></path>
              </svg>
            </button>
            
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-6 z-40
                        bg-white/10 backdrop-blur-md text-white hover:bg-white/20 rounded-full p-3
                        transition-all duration-300 border border-white/30"
              aria-label="Next service"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
          
          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 gap-3">
            {services.map((service, index) => (
              <button
                key={`dot-${service.id}`}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex 
                    ? 'bg-forest-600 w-8' 
                    : 'bg-forest-300 hover:bg-forest-400'
                }`}
                aria-label={`Go to service ${service.title}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>

        {/* Mobile Version - Simple carousel for touch devices */}
        <div className="block md:hidden relative mt-10">
          <div className="relative h-[400px] overflow-hidden rounded-xl">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={`mobile-${activeIndex}`}
                className="absolute inset-0 w-full h-full"
                initial={{ opacity: 0, x: direction > 0 ? 300 : -300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -300 : 300 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden shadow-xl">
                  {/* Service Image */}
                  <img 
                    src={services[activeIndex].imageUrl}
                    alt={services[activeIndex].title}
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70"></div>
                  
                  {/* Service Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white">
                    <div className="flex justify-center">
                      {/* Service Icon */}
                      <motion.div 
                        className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30 shadow-lg"
                        initial={{ scale: 0.9, y: 15 }}
                        animate={{ scale: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                      >
                        <img 
                          src={services[activeIndex].icon} 
                          alt={`${services[activeIndex].title} icon`} 
                          className="w-12 h-12"
                          style={{ filter: "brightness(0) invert(1)" }}
                        />
                      </motion.div>
                    </div>
                    
                    <div className="text-center mt-auto">
                      {/* Service Title */}
                      <motion.h3 
                        className="text-3xl font-bold mb-3 drop-shadow-lg tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                      >
                        {services[activeIndex].title}
                      </motion.h3>
                      
                      {/* Service Description */}
                      <motion.p 
                        className="text-sm font-medium text-white/95 mb-5 max-w-[90%] mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                      >
                        {services[activeIndex].description}
                      </motion.p>
                      
                      {/* Learn More Button */}
                      <motion.button 
                        className="mt-3 px-6 py-2.5 bg-white hover:bg-gray-100 text-forest-800
                                 rounded-full font-medium text-sm shadow-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Mobile Navigation */}
            <div className="absolute inset-y-0 left-2 right-2 flex justify-between items-center z-20">
              <button
                onClick={handlePrev}
                className="bg-white/20 backdrop-blur-md text-white rounded-full p-2.5
                          transition-colors duration-300 shadow-lg"
                aria-label="Previous service"
                disabled={isAnimating}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5"></path>
                  <path d="M12 19l-7-7 7-7"></path>
                </svg>
              </button>
              
              <button
                onClick={handleNext}
                className="bg-white/20 backdrop-blur-md text-white rounded-full p-2.5
                          transition-colors duration-300 shadow-lg"
                aria-label="Next service"
                disabled={isAnimating}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Indicators */}
          <div className="flex justify-center mt-5 gap-2">
            {services.map((service, index) => (
              <button
                key={`mobile-dot-${service.id}`}
                onClick={() => handleDotClick(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-forest-600 w-6' : 'bg-forest-300'
                }`}
                aria-label={`Go to service ${service.title}`}
                disabled={isAnimating}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};

export default ServicesSection;
