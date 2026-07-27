import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "fade";
  duration?: number;
}

export function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = "up",
  duration = 0.6 
}: ScrollRevealProps) {
  const directionOffset = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
    zoom: { scale: 0.8, x: 0, y: 0 },
    fade: { x: 0, y: 0 },
  };

  const initialState = direction === "zoom" 
    ? { opacity: 0, scale: 0.8 }
    : direction === "fade"
    ? { opacity: 0 }
    : { opacity: 0, ...directionOffset[direction] };

  const animateState = direction === "zoom"
    ? { opacity: 1, scale: 1 }
    : { opacity: 1, x: 0, y: 0 };

  return (
    <motion.div
      initial={initialState}
      whileInView={animateState}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
    >
      {children}
    </motion.div>
  );
}
