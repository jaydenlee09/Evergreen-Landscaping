import ImageHero from "@/components/home/ImageHero";
import { MarqueeTestimonialsDemo } from "@/components/home/MarqueeTestimonialsDemo";
import { Button } from "@/components/ui/button";
import ServicesSection from "@/components/home/ServicesSection";
import heroImage from "@/assets/images/hero-image.jpg";

const HomePage = () => {
  return (
    <>
      <ImageHero 
        imageSrc={heroImage} 
      />

      {/* Services Section */}
      <ServicesSection />

      {/* Testimonial Section */}
      <MarqueeTestimonialsDemo />

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-forest-800 text-white w-full">
        <div className="container mx-auto px-5 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-switzer text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Outdoor Space?
            </h2>
            <p className="text-forest-100 mb-8 text-base sm:text-lg px-2">
              Contact us today for a free consultation and let our experts bring your landscape vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="bg-white text-forest-800 hover:bg-forest-100 w-full sm:w-auto"
              >
                <a href="/contact">Schedule a Consultation</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white text-white hover:bg-forest-700 w-full sm:w-auto"
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
