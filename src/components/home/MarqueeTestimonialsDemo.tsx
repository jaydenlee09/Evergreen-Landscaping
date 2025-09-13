//import { motion } from "framer-motion";
import MarqueeTestimonials from "./MarqueeTestimonials";

const testimonials = [
  {
    author: {
      name: "Emily Johnson",
      handle: "@emilyj",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Arbutus Landscaping transformed our backyard into an oasis! Their sustainable approach and attention to detail exceeded our expectations.",
  },
  {
    author: {
      name: "Michael Chen",
      handle: "@mikec",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Professional from start to finish. They designed a beautiful native plant garden that requires minimal maintenance and looks stunning year-round.",
  },
  {
    author: {
      name: "Sarah Williams",
      handle: "@sarahw",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "The team at Arbutus understood exactly what we wanted. Our garden is now the envy of the neighborhood and attracts so much wildlife!"
  },
  {
    author: {
      name: "Robert Taylor",
      handle: "@robtaylor",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Five stars! The hardscaping work they did on our patio and walkways is both beautiful and practical. Couldn't be happier with the results."
  },
  {
    author: {
      name: "Lisa Martinez",
      handle: "@lisamart",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face"
    },
    text: "We've been using their maintenance services for over two years. Our garden always looks perfect and they're so responsive to any questions."
  }
];

export function MarqueeTestimonialsDemo() {
  return (
    <MarqueeTestimonials
      title="What Our Clients Say"
      testimonials={testimonials}
    />
  );
}
