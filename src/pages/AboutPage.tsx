import { Button } from "@/components/ui/button";
import TeamSection from "@/components/about/TeamSection";

const AboutPage = () => {

  // Core values
  const coreValues = [
    {
      title: "Sustainability",
      description: "We prioritize eco-friendly practices, native plants, and water-wise designs to create landscapes that are beautiful and environmentally responsible.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Quality",
      description: "We never compromise on quality, from the materials we select to the plants we use and the craftsmanship in every project we complete.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We stay at the forefront of landscape design by incorporating new technologies, materials, and methods that improve both aesthetics and functionality.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    {
      title: "Customer Focus",
      description: "We listen to our clients' needs and vision, working collaboratively to bring their dream landscapes to life while providing exceptional service.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    }
  ];

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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-6 font-switzer">Our Story</h2>
              <div className="space-y-4 text-stone-700 font-switzer">
                <p>
                  EverGreen Landscaping was founded in 2010 by David Johnson, a passionate landscape architect with a vision to create outdoor spaces that harmonize with nature while meeting the unique needs of Vancouver residents.
                </p>
                <p>
                  Named to represent our commitment to sustainable, evergreen solutions, our company began as a small team dedicated to eco-friendly landscaping practices. As word spread about our commitment to quality and environmental stewardship, we quickly grew to become one of Vancouver's most trusted landscaping companies.
                </p>
                <p>
                  Today, our team of dedicated professionals continues to transform outdoor spaces throughout Vancouver and the Lower Mainland, creating beautiful, functional, and sustainable landscapes that enhance property values and improve quality of life.
                </p>
                <p>
                  We take pride in our deep understanding of the local climate, soil conditions, and native plants, allowing us to create landscapes that thrive in our unique Pacific Northwest environment while requiring minimal maintenance and resources.
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-forest-200 rounded-lg transform rotate-3"></div>
                <img
                  src={new URL('../assets/images/team-photo.jpeg', import.meta.url).href}
                  alt="Landscaping team at work"
                  className="relative rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-800 mb-6 font-switzer">Our Core Values</h2>
            <p className="text-stone-600 font-switzer">
              These principles guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="mb-6 text-forest-600">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-semibold text-forest-800 mb-4 font-switzer">{value.title}</h3>
                <p className="text-stone-600 font-switzer">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
