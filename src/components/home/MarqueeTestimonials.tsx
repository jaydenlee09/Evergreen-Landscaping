import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { TestimonialAuthor } from "@/components/ui/testimonial-card";
import styles from './MarqueeTestimonials.module.css';
import { motion } from "framer-motion";

interface MarqueeTestimonialsProps {
  title: string;
  description: string;
  testimonials: Array<{
    author: TestimonialAuthor;
    text: string;
    href?: string;
  }>;
}

export default function MarqueeTestimonials({
  title,
  description,
  testimonials,
}: MarqueeTestimonialsProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-stone-50 w-full overflow-hidden">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16">
          <motion.h2 
            className="font-sans text-2xl sm:text-3xl md:text-5xl font-bold text-forest-800 mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {title}
          </motion.h2>
          <motion.p 
            className="font-sans text-base sm:text-lg md:text-xl text-stone-600 max-w-3xl mx-auto px-2"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
          >
            {description}
          </motion.p>
        </div>
        
        <motion.div 
          className="relative w-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-r from-stone-50 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-24 md:w-32 z-10 bg-gradient-to-l from-stone-50 to-transparent"></div>
          
          {/* Marquee container */}
          <div className={styles.marqueeContainer}>
            {/* Multiple sets of testimonials for smoother infinite looping */}
            {[...Array(4)].map((_, setIndex) => (
              <div key={`set-${setIndex}`} className={styles.marqueeContent}>
                {testimonials.map((testimonial, index) => (
                  <motion.div 
                    key={`item-${setIndex}-${index}`} 
                    className="flex-shrink-0 w-64 sm:w-72 md:w-80"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.8, 
                      delay: 0.7 + (index * 0.15) % testimonials.length,
                      ease: "easeOut" 
                    }}
                  >
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
