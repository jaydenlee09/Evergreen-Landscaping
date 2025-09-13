import { FadeInSection } from "@/components/ui/fade-in-section";
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const OurStory = () => {
  // Import the team photo
  const teamPhotoUrl = new URL('../../assets/images/staff/team-photo.jpeg', import.meta.url).href;
  
  // Animation variants for timeline items
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5
      }
    })
  };

  // Story milestones for the timeline
  const milestones = [
    {
      year: "2010",
      title: "Founded",
      description: "EverGreen Landscaping was founded by David Johnson with a vision to create harmonious outdoor spaces."
    },
    {
      year: "2014",
      title: "Growth",
      description: "Expanded services to include sustainable landscaping solutions across Vancouver."
    },
    {
      year: "2018",
      title: "Recognition",
      description: "Became one of Vancouver's most trusted landscaping companies with award-winning designs."
    },
    {
      year: "2023",
      title: "Innovation",
      description: "Pioneered new eco-friendly techniques and expanded to the Lower Mainland."
    }
  ];

  // Image no longer has parallax scrolling effect

  return (
    <section className="py-24 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <FadeInSection direction="left" delay={0.2} className="order-2 md:order-1">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-switzer font-bold tracking-tight mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-900 to-green-700">Our Story</span>
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                EverGreen Landscaping was founded in 2010 by David Johnson, a passionate landscape architect
                with a vision to create outdoor spaces that harmonize with nature while meeting the unique needs of
                Vancouver residents.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Named to represent our commitment to sustainable, evergreen solutions, our company began as a
                small team dedicated to eco-friendly landscaping practices. As word spread about our commitment to
                quality and environmental stewardship, we quickly grew to become one of Vancouver's most trusted
                landscaping companies.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Today, our team of dedicated professionals continues to transform outdoor spaces throughout
                Vancouver and the Lower Mainland, creating beautiful, functional, and sustainable landscapes that
                enhance property values and improve quality of life.
              </p>
              <div className="pt-4">

              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={0.3} className="order-1 md:order-2">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-blue-600/20 mix-blend-overlay z-10 rounded-2xl"></div>
              <div>
                <img 
                  src={teamPhotoUrl} 
                  alt="Evergreen Landscaping Team" 
                  className="w-full object-cover object-center"
                />
              </div>
            </div>
          </FadeInSection>
        </div>

        {/* Timeline section */}
        <div className="mt-24 max-w-4xl mx-auto">
          <FadeInSection>
            <h3 className="text-3xl font-bold text-center mb-16 text-gray-800">Our Journey</h3>
          </FadeInSection>
          
          <div className="relative">
            {/* Timeline center line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200 z-0"></div>
            
            {/* Timeline items */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div 
                  key={milestone.year}
                  className={cn(
                    "relative z-10 flex items-center", 
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  )}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  variants={timelineVariants}
                >
                  <div className={cn(
                    "flex items-center",
                    index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                  )}>
                    <div className={cn(
                      "bg-white shadow-xl p-6 rounded-lg max-w-sm border-l-4 border-green-600",
                      index % 2 === 0 ? "mr-8" : "ml-8"
                    )}>
                      <div className="bg-green-50 text-green-800 text-sm font-semibold px-2 py-1 rounded inline-block mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold mb-2 text-gray-800">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>

                    {/* Timeline node */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                      <div className="h-8 w-8 rounded-full border-4 border-green-600 bg-white"></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Values section with minimalist UI */}
        <div className="mt-32 relative">
          {/* Plain background */}
          <div className="absolute inset-0 bg-green-50/30 -z-10"></div>
          
          <FadeInSection delay={0.4} className="py-20">
          <div className="container mx-auto px-4">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-800">
                Our Core Values
              </h3>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-sm">
                These principles guide every decision we make and every project we undertake.
              </p>              {/* Values cards with hover animations and visual elements */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {/* Sustainability Value Card */}
                <motion.div 
                  className="relative rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    delay: 0.1
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src={new URL('../../assets/images/services/hand-weeding.webp', import.meta.url).href} 
                      alt="Sustainability" 
                      className="w-full h-full object-cover object-center brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply"></div>
                  </div>
                  <div className="relative bg-green-50/90 backdrop-blur-sm p-8 h-56 flex flex-col">
                    <div className="absolute -top-10 left-6 bg-green-500 rounded-full p-3 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mt-6 mb-3 text-gray-800">Sustainability</h4>
                    <p className="text-gray-600 text-sm flex-grow">We prioritize eco-friendly practices and native plants to create landscapes that thrive in our unique Pacific Northwest environment.</p>
                    <div className="w-12 h-1 bg-green-500 rounded-full mt-4"></div>
                  </div>
                </motion.div>

                {/* Quality Value Card */}
                <motion.div 
                  className="relative rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    delay: 0.2
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src={new URL('../../assets/images/services/mowing-lawn.jpg', import.meta.url).href} 
                      alt="Quality" 
                      className="w-full h-full object-cover object-center brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply"></div>
                  </div>
                  <div className="relative bg-green-50/90 backdrop-blur-sm p-8 h-56 flex flex-col">
                    <div className="absolute -top-10 left-6 bg-green-500 rounded-full p-3 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mt-6 mb-3 text-gray-800">Quality</h4>
                    <p className="text-gray-600 text-sm flex-grow">We never compromise on quality, from the materials we select to the craftsmanship in every project we complete.</p>
                    <div className="w-12 h-1 bg-green-500 rounded-full mt-4"></div>
                  </div>
                </motion.div>

                {/* Customer Focus Value Card */}
                <motion.div 
                  className="relative rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    delay: 0.3
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src={new URL('../../assets/images/services/yard-cleanup.jpg', import.meta.url).href} 
                      alt="Customer Focus" 
                      className="w-full h-full object-cover object-center brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply"></div>
                  </div>
                  <div className="relative bg-green-50/90 backdrop-blur-sm p-8 h-56 flex flex-col">
                    <div className="absolute -top-10 left-6 bg-green-500 rounded-full p-3 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mt-6 mb-3 text-gray-800">Customer Focus</h4>
                    <p className="text-gray-600 text-sm flex-grow">We listen carefully to our clients' needs and vision, working collaboratively to bring their dream landscapes to life.</p>
                    <div className="w-12 h-1 bg-green-500 rounded-full mt-4"></div>
                  </div>
                </motion.div>

                {/* Innovation Value Card */}
                <motion.div 
                  className="relative rounded-xl overflow-hidden group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300,
                    delay: 0.4
                  }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -10, 
                    boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" 
                  }}
                >
                  <div className="h-44 relative overflow-hidden">
                    <img 
                      src={new URL('../../assets/images/services/pressure-washing.jpg', import.meta.url).href} 
                      alt="Innovation" 
                      className="w-full h-full object-cover object-center brightness-[0.85]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent mix-blend-multiply"></div>
                  </div>
                  <div className="relative bg-green-50/90 backdrop-blur-sm p-8 h-56 flex flex-col">
                    <div className="absolute -top-10 left-6 bg-green-500 rounded-full p-3 shadow-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold mt-6 mb-3 text-gray-800">Innovation</h4>
                    <p className="text-gray-600 text-sm flex-grow">We stay at the forefront of landscape design, incorporating new technologies and methods that improve both aesthetics and functionality.</p>
                    <div className="w-12 h-1 bg-green-500 rounded-full mt-4"></div>
                  </div>
                </motion.div>
              </div>
              
              {/* Clean, modern metrics section */}
              <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10">
                <motion.div 
                  className="bg-white rounded-xl border border-green-100 p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" 
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                      <img 
                        src={new URL('../../assets/images/icons/lawn-mower-icon.png', import.meta.url).href} 
                        alt="Projects" 
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-800 mb-3"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.2,
                        duration: 1
                      }}
                      viewport={{ once: true }}
                    >
                      300
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.2, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="text-green-600"
                    >
                      +
                    </motion.span>
                  </motion.div>
                  <p className="text-gray-600 font-medium">Projects Completed</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl border border-green-100 p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" 
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                      <img 
                        src={new URL('../../assets/images/icons/weeding-icon.png', import.meta.url).href} 
                        alt="Experience" 
                        className="h-10 w-10 object-contain" 
                      />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-800 mb-3"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.3,
                        duration: 1
                      }}
                      viewport={{ once: true }}
                    >
                      15
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.3, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="text-green-600"
                    >
                      +
                    </motion.span>
                  </motion.div>
                  <p className="text-gray-600 font-medium">Years of Experience</p>
                </motion.div>
                
                <motion.div 
                  className="bg-white rounded-xl border border-green-100 p-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true, amount: 0.3 }}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.05)" 
                  }}
                >
                  <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 bg-green-500 rounded-full flex items-center justify-center">
                      <img 
                        src={new URL('../../assets/images/icons/pressure-washing-icon.png', import.meta.url).href} 
                        alt="Clients" 
                        className="h-10 w-10 object-contain" 
                      />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-gray-800 mb-3"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{
                        type: "spring",
                        delay: 0.4,
                        duration: 1
                      }}
                      viewport={{ once: true }}
                    >
                      98
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.3 }}
                      viewport={{ once: true }}
                      className="text-green-600"
                    >
                      %
                    </motion.span>
                  </motion.div>
                  <p className="text-gray-600 font-medium">Client Satisfaction</p>
                </motion.div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
