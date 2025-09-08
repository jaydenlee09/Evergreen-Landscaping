import { TestimonialCard } from "@/components/ui/testimonial-card";
import type { TestimonialAuthor } from "@/components/ui/testimonial-card";
import styles from './MarqueeTestimonials.module.css';

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
    <section className="py-24 bg-stone-100 w-full overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-forest-800 mb-6">
            {title}
          </h2>
          <p className="font-body text-xl text-stone-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="relative w-full overflow-hidden">
          {/* Fade edges */}
          <div className="absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-stone-100 to-transparent"></div>
          <div className="absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-stone-100 to-transparent"></div>
          
          {/* Marquee container */}
          <div className={styles.marqueeContainer}>
            {/* First set of testimonials */}
            <div className={styles.marqueeContent}>
              {testimonials.map((testimonial, index) => (
                <div key={`item-${index}`} className="flex-shrink-0 w-80">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
            
            {/* Duplicate set for seamless scrolling */}
            <div className={styles.marqueeContent}>
              {testimonials.map((testimonial, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 w-80">
                  <TestimonialCard {...testimonial} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
