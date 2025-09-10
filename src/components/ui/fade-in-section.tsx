import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  once?: boolean;
  amount?: number;
}

export const FadeInSection = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  distance = 30,
  once = true,
  amount = 0.1
}: FadeInSectionProps) => {
  // Calculate variants based on direction
  let initialX = 0;
  let initialY = 0;
  
  if (direction === 'up') initialY = distance;
  if (direction === 'down') initialY = -distance;
  if (direction === 'left') initialX = distance;
  if (direction === 'right') initialX = -distance;

  return (
    <motion.div
      className={cn(className)}
      initial={{ 
        opacity: 0,
        x: initialX,
        y: initialY 
      }}
      whileInView={{ 
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          duration: 0.8,
          ease: [0.22, 0.03, 0.26, 1], // Moderately slow easing
          delay
        }
      }}
      viewport={{ 
        once, 
        amount 
      }}
    >
      {children}
    </motion.div>
  );
};
