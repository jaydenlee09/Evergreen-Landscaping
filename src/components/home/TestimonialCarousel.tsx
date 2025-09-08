import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

// Define a testimonial interface
interface Testimonial {
  id: number;
  name: string;
  role: string;
  image?: string;
  text: string;
  rating: number;
}

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner in Kitsilano",
    image: "/src/assets/images/testimonial-1.jpg", // Will be replaced with actual images
    text: "Arbutus Landscaping transformed our backyard into a gorgeous outdoor living space. Their attention to detail and commitment to sustainable practices exceeded our expectations.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Wong",
    role: "Property Manager",
    image: "/src/assets/images/testimonial-2.jpg",
    text: "We've been working with Arbutus for over 5 years on multiple properties. Their team is professional, responsive, and delivers exceptional results every time.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Richards",
    role: "Homeowner in Point Grey",
    image: "/src/assets/images/testimonial-3.jpg",
    text: "From the initial design consultation to the final walkthrough, working with Arbutus was a pleasure. They created a sustainable garden that requires minimal water yet looks stunning all year round.",
    rating: 5,
  },
  {
    id: 4,
    name: "David Chen",
    role: "Restaurant Owner",
    image: "/src/assets/images/testimonial-4.jpg",
    text: "The outdoor dining area Arbutus designed for our restaurant has been a game-changer for our business. Customers love the greenery and atmosphere they created.",
    rating: 5,
  },
];

const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    
    emblaApi.on('select', onSelect);
    
    // Auto-scroll every 5 seconds
    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);
    
    return () => {
      emblaApi.off('select', onSelect);
      clearInterval(intervalId);
    };
  }, [emblaApi, onSelect]);

  // Generate star rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <svg 
        key={index}
        className={`w-5 h-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 24 24" 
        fill="currentColor"
      >
        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clipRule="evenodd" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            We take pride in creating beautiful, sustainable landscapes that exceed our clients' expectations.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 pl-4 md:pl-8">
                  <div className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col md:flex-row gap-6 h-full">
                    {/* Image - placeholder for now */}
                    <div className="flex-shrink-0 w-24 h-24 mx-auto md:mx-0">
                      <div className="w-24 h-24 rounded-full bg-forest-200 flex items-center justify-center">
                        {testimonial.image ? (
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name} 
                            className="w-full h-full object-cover rounded-full"
                          />
                        ) : (
                          <span className="text-2xl font-semibold text-forest-700">
                            {testimonial.name.charAt(0)}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      
                      <p className="text-stone-700 italic mb-6">
                        "{testimonial.text}"
                      </p>
                      
                      <div>
                        <h4 className="font-semibold text-forest-800">{testimonial.name}</h4>
                        <p className="text-stone-500 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  index === selectedIndex ? 'bg-forest-600' : 'bg-stone-300'
                } transition-colors duration-300`}
                onClick={() => emblaApi?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
