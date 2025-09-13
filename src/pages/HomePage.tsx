import ImageHero from "@/components/home/ImageHero";
import { MarqueeTestimonialsDemo } from "@/components/home/MarqueeTestimonialsDemo";
import { Button } from "@/components/ui/button";
import ServicesSection from "@/components/home/ServicesSection";
import { FadeInSection } from "@/components/ui/fade-in-section";
import heroImage from "@/assets/images/hero-image.jpg";

const HomePage = () => {
  return (
    <>
      <ImageHero 
        imageSrc={heroImage} 
      />

      {/* Services Section with fade-in animation */}
      <FadeInSection>
        <ServicesSection />
      </FadeInSection>

      {/* Testimonial Section with fade-in animation */}
      <FadeInSection delay={0.3}>
        <MarqueeTestimonialsDemo />
      </FadeInSection>

      {/* CTA Section with fade-in animation */}
      <FadeInSection delay={0.3} direction="up">
        <section className="relative py-16 sm:py-20 bg-gradient-to-br from-forest-800 via-forest-700 to-forest-900 text-white w-full overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-texture-light opacity-5"></div>
          
          <div className="container mx-auto px-5 sm:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Main Heading */}
              <h2 className="font-switzer text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-forest-50 to-forest-100 bg-clip-text text-transparent">
                  Ready to Transform
                </span>
                <br />
                <span className="text-white">
                  Your Outdoor Space?
                </span>
              </h2>
              
              {/* Description */}
              <p className="text-forest-100 mb-8 text-lg sm:text-xl font-light max-w-2xl mx-auto leading-relaxed px-4">
                Contact us today for a <span className="text-white font-semibold">free consultation</span> and let our experts bring your landscape vision to life.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <Button
                  asChild
                  className="group bg-white text-forest-800 hover:bg-forest-50 px-10 py-5 text-xl font-switzer font-semibold rounded-full shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 w-full sm:w-auto"
                >
                  <a href="/contact" className="flex items-center justify-center">
                    Schedule a Consultation
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="group border-2 border-white text-white hover:bg-white hover:text-forest-800 px-10 py-5 text-xl font-switzer font-semibold rounded-full backdrop-blur-sm transition-all duration-300 w-full sm:w-auto"
                >
                  <a href="/projects" className="flex items-center justify-center">
                    Browse Our Projects
                    <svg className="w-6 h-6 ml-3 group-hover:translate-x-1 transform transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </a>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-forest-200 text-sm">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-switzer">Licensed & Insured</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <span className="font-switzer">5-Star Rated Service</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-forest-600 rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-switzer">Eco-Friendly Practices</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeInSection>
    </>
  );
};

export default HomePage;
