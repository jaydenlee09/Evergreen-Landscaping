import { Button } from "@/components/ui/button";
import TeamSection from "@/components/about/TeamSection";
import OurStory from "@/components/about/OurStory";

const AboutPage = () => {

  // Core values have been moved to OurStory.tsx component

  // Import the about cover image
  const aboutCoverImage = new URL('../assets/images/about-cover.webp', import.meta.url).href;
  
  return (
    <>
      {/* Header Section with Image Background */}
      <section 
        className="relative h-[50vh] min-h-[400px] w-full flex items-end overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url(${aboutCoverImage})`,
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
                <span>About</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white text-left font-switzer">
                ABOUT US
              </h1>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Content Section */}
      <section className="pt-20 pb-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">

          </div>
        </div>
      </section>

      {/* Our Story */}
      <OurStory />

      {/* The Core Values section has been removed as it's now included in the OurStory component */}

      {/* Team Section */}
      <TeamSection />

      {/* CTA Section */}
      <section className="py-16 bg-forest-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-switzer">Ready to Transform Your Outdoor Space?</h2>
            <p className="text-lg text-forest-100 mb-8 font-switzer">
              Let our experienced team help you create the landscape of your dreams.
            </p>
            <Button
              asChild
              className="bg-white text-forest-800 hover:bg-forest-100 font-switzer"
            >
              <a href="/contact">Schedule a Consultation</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
