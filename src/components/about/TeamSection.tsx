

type TeamMember = {
  name: string;
  role: string;
  description: string;
  image: string;
};

export const TeamSection = () => {
  
  // Import images properly
  const abdullahImage = new URL('../../assets/images/staff/abdullah-bediway.jpeg', import.meta.url).href;
  const oliverImage = new URL('../../assets/images/staff/oliver-sun.jpeg', import.meta.url).href;
  const riverImage = new URL('../../assets/images/staff/river-ho.jpg', import.meta.url).href;

  // Team member data with local image paths and full descriptions
  const teamMembers: TeamMember[] = [
    {
      name: "Abdullah Bediway",
      role: "Co-Founder",
      description: "Abdullah brings over 8 years of landscaping expertise to Evergreen. With a degree in Horticulture and Landscape Design, he leads our creative vision and ensures every project exceeds client expectations.",
      image: abdullahImage
    },
    {
      name: "Oliver Sun",
      role: "Lead Designer",
      description: "Oliver specializes in sustainable landscape design with 6 years of experience creating eco-friendly outdoor spaces. His innovative approach combines aesthetics with environmental responsibility.",
      image: oliverImage
    },
    {
      name: "River Ho",
      role: "Project Manager",
      description: "River oversees all project executions with meticulous attention to detail. With a background in construction management, he ensures every project is completed on time and within budget.",
      image: riverImage
    }
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-5xl md:text-6xl font-switzer font-bold tracking-tight">
            <span className="text-gray-500">OUR TEAM</span><br />
            <span className="text-gray-900">OF DEDICATION</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="rounded-2xl overflow-hidden shadow-lg relative group aspect-[3/4]
                         transition-all duration-500 ease-out transform hover:scale-[1.03] hover:shadow-2xl"
              style={{
                willChange: 'transform',
                perspective: '1000px',
              }}
            >
              {/* Background image with overlay */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover object-center"
                />
                {/* Dark overlay gradient that gets lighter on hover */}
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20 
                             group-hover:from-black/60 group-hover:via-black/30 group-hover:to-black/10
                             transition-all duration-300"
                ></div>
              </div>
              
              {/* Text content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
                <div className="transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="font-switzer font-bold text-3xl mb-1">{member.name}</h3>
                  <p className="text-white/90 text-xl font-medium mb-3">{member.role}</p>
                  
                  {/* Full width divider line */}
                  <div className="w-full h-[2px] bg-white/70 mb-3"></div>
                  
                  {/* Description that shows on hover with animation */}
                  <p className="text-white/80 text-base max-h-0 opacity-0 overflow-hidden 
                                group-hover:opacity-100 group-hover:max-h-40
                                transition-all duration-500 ease-out">
                    {member.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
