import ImageHero from "@/components/home/ImageHero";
import { MarqueeTestimonialsDemo } from "@/components/home/MarqueeTestimonialsDemo";
import { Button } from "@/components/ui/button";
import ProjectCarousel from "@/components/home/ProjectCarousel";
import heroImage from "@/assets/images/hero-image.jpg";

const HomePage = () => {
  return (
    <>
      <ImageHero
        imageSrc={heroImage}
        title="Transform Your Outdoor Space"
        subtitle="Award-winning landscape design and maintenance services in Vancouver, BC"
        buttonText="Get a Free Consultation"
        buttonLink="/contact"
      />

      {/* Services Section */}
      <section className="py-24 w-full relative overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-forest-100 rounded-full opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest-200 rounded-full opacity-30 translate-x-1/3 translate-y-1/3"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Section Header with accent */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="flex items-center justify-center mb-4">
              <div className="h-0.5 w-8 bg-forest-600"></div>
              <span className="mx-3 text-forest-600 font-medium text-sm uppercase tracking-wider">Professional & Reliable</span>
              <div className="h-0.5 w-8 bg-forest-600"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-forest-800 mb-6">
              Our Services
            </h2>
            <p className="font-body text-stone-600 text-lg max-w-2xl mx-auto">
              We offer a comprehensive range of landscaping services to transform your outdoor space into a beautiful, functional, and sustainable environment.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Service Card 1 - Lawn Mowing */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-96">
              {/* Image as background */}
              <img 
                src="https://images.unsplash.com/photo-1590553866730-aba9a6399eae?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Lawn Mowing" 
                className="w-full h-full object-cover absolute inset-0"
              />
              
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Content section with cream background - positioned at bottom */}
              <div className="absolute left-4 right-4 bottom-4 bg-[#f7f5e8] p-5 rounded-2xl shadow-md">
                <div className="flex items-center mb-3">
                  {/* Icon in circle */}
                  <div className="bg-forest-700 rounded-full p-2 mr-3 flex-shrink-0">
                    <img 
                      src="/src/assets/images/lawn-mower-icon.png" 
                      alt="Lawn Mowing Icon" 
                      className="w-6 h-6" 
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  
                  {/* Service name */}
                  <h3 className="text-xl font-bold text-gray-800 font-playfair">
                    Lawn-Mowing
                  </h3>
                </div>
                
                {/* Service description */}
                <p className="text-gray-700">
                  blah-blah-blah-blah-blah-blah-blah blah-blah-blah-blah-blah-blah-blah blah-blah-blah-blah-blah-blah-blah
                </p>
              </div>
            </div>

            {/* Service Card 2 - Garden Care */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-96">
              {/* Image as background */}
              <img 
                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Garden Care" 
                className="w-full h-full object-cover absolute inset-0"
              />
              
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Content section with cream background - positioned at bottom */}
              <div className="absolute left-4 right-4 bottom-4 bg-[#f7f5e8] p-5 rounded-2xl shadow-md">
                <div className="flex items-center mb-3">
                  {/* Icon in circle */}
                  <div className="bg-yellow-500 rounded-full p-2 mr-3 flex-shrink-0">
                    <img 
                      src="/src/assets/images/weeding-icon.png" 
                      alt="Garden Care Icon" 
                      className="w-6 h-6" 
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  
                  {/* Service name */}
                  <h3 className="text-xl font-bold text-gray-800 font-playfair">
                    Garden Care
                  </h3>
                </div>
                
                {/* Service description */}
                <p className="text-gray-700">
                  blah-blah-blah-blah-blah-blah-blah blah-blah-blah-blah-blah-blah-blah blah-blah-blah-blah-blah-blah-blah
                </p>
              </div>
            </div>

            {/* Service Card 3 - Hardscaping */}
            <div className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-96">
              {/* Image as background */}
              <img 
                src="https://images.unsplash.com/photo-1610478920392-95888fc956a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Hardscaping" 
                className="w-full h-full object-cover absolute inset-0"
              />
              
              {/* Semi-transparent overlay */}
              <div className="absolute inset-0 bg-black/20"></div>
              
              {/* Content section with cream background - positioned at bottom */}
              <div className="absolute left-4 right-4 bottom-4 bg-[#f7f5e8] p-5 rounded-2xl shadow-md">
                <div className="flex items-center mb-3">
                  {/* Icon in circle */}
                  <div className="bg-stone-700 rounded-full p-2 mr-3 flex-shrink-0">
                    <img 
                      src="/src/assets/images/pressure-washing-icon.png" 
                      alt="Hardscaping Icon" 
                      className="w-6 h-6" 
                      style={{ filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                  
                  {/* Service name */}
                  <h3 className="text-xl font-bold text-gray-800 font-playfair">
                    Hardscaping
                  </h3>
                </div>
                
                {/* Service description */}
                <p className="text-gray-700">
                  blah-blah-blah-blah-blah-blah-blah blah-blah-blah-blah-blah-blah-blah blah-blah-blah-blah-blah-blah-blah
                </p>
              </div>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-10">
            <Button
              asChild
              className="bg-forest-600 hover:bg-forest-500 text-white px-8 py-4 text-base shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 duration-300 rounded-lg"
            >
              <a href="/services">
                <span className="mr-2">View All Services</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gradient-to-b from-forest-900 to-forest-800 w-full relative overflow-hidden">
        {/* Decorative leaf patterns at bottom */}
        <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10">
          <svg viewBox="0 0 100 100" fill="white">
            <path d="M50,5 C70,20 80,40 90,60 C70,50 50,45 30,60 C40,40 45,20 50,5 Z" />
          </svg>
        </div>
        <div className="absolute bottom-0 right-0 w-40 h-40 opacity-10">
          <svg viewBox="0 0 100 100" fill="white">
            <path d="M50,5 C70,20 80,40 90,60 C70,50 50,45 30,60 C40,40 45,20 50,5 Z" />
          </svg>
        </div>
        
        <div className="container mx-auto px-6 relative">
          {/* Header with gold accent */}
          <div className="flex flex-col items-center justify-center mb-12">
            <div className="flex items-center mb-3">
              <span className="w-10 h-0.5 bg-yellow-400"></span>
              <span className="mx-2 text-yellow-400 text-sm font-light">Showcasing Our Finest Work</span>
              <span className="w-10 h-0.5 bg-yellow-400"></span>
            </div>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-4 text-center">
              Explore Our Recent Projects
            </h2>
          </div>

          {/* Projects Carousel */}
          <ProjectCarousel />
        </div>
      </section>

      {/* Testimonial Section */}
      <MarqueeTestimonialsDemo />

      {/* CTA Section */}
      <section className="py-24 bg-forest-800 text-white w-full">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-forest-100 mb-8 text-lg">
              Contact us today for a free consultation and let our experts bring your landscape vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-white text-forest-800 hover:bg-forest-100"
              >
                <a href="/contact">Schedule a Consultation</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-forest-700"
              >
                <a href="/projects">Browse Our Projects</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
