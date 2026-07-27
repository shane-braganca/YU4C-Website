import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { ReactNode, useRef } from "react";

interface ParallaxHeroProps {
  src: string;
  alt: string;
  overlay?: string;
  children: ReactNode;
  className?: string;
  speed?: number;
}

export function ParallaxHero({
  src,
  alt,
  overlay = "bg-blue-950/80",
  children,
  className = "",
  speed = 0.4,
}: ParallaxHeroProps) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Smooth spring on raw scroll for buttery feel
  const smooth = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.0001 });

  // Image drifts up slower than scroll (true parallax depth)
  const imageY = useTransform(smooth, [0, 1], ["0%", `${speed * 100}%`]);

  // Subtle zoom-in as you scroll — makes it feel "alive"
  const imageScale = useTransform(smooth, [0, 1], [1.06, 1.22]);

  // Grain/overlay layer drifts slightly differently for layered depth
  const grainY = useTransform(smooth, [0, 1], ["0%", `${speed * 45}%`]);

  // Content fades and lifts as you scroll past
  const contentY = useTransform(smooth, [0, 0.6], ["0%", "-18%"]);
  const contentOpacity = useTransform(smooth, [0, 0.55], [1, 0]);

  // Vignette intensifies slightly as you scroll
  const vignetteOpacity = useTransform(smooth, [0, 0.5], [0.55, 0.85]);

  return (
    <section ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Background image — slowest layer */}
      <motion.div
        className="absolute inset-0 w-full h-full will-change-transform"
        style={{ y: imageY, scale: imageScale, transformOrigin: "center center" }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </motion.div>

      {/* Deep vignette — darkens edges for cinematic look */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: vignetteOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at center, transparent 20%, rgba(15,12,41,0.7) 100%)",
          }}
        />
      </motion.div>

      {/* Main overlay — color grade */}
      <div className={`absolute inset-0 ${overlay}`} />

      {/* Grain texture layer — mid layer for depth */}
      <motion.div
        className="absolute inset-0 pointer-events-none opacity-[0.035] mix-blend-overlay"
        style={{ y: grainY }}
        aria-hidden
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>
      </motion.div>

      {/* Subtle bottom-to-top gradient for text legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to top, rgba(15,12,41,0.85) 0%, transparent 55%, rgba(15,12,41,0.25) 100%)",
        }}
      />

      {/* Content — floats up and fades as you scroll */}
      <motion.div
        className="relative z-10 will-change-transform"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {children}
      </motion.div>
    </section>
  );
}

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  speed?: number;
}

export function ParallaxImage({ src, alt, className = "", speed = 0.25 }: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 22, restDelta: 0.0001 });

  // More pronounced range for inline images
  const y = useTransform(smooth, [0, 1], [`-${speed * 100}%`, `${speed * 100}%`]);
  const scale = useTransform(smooth, [0, 0.5, 1], [1.12, 1.05, 1.12]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full will-change-transform"
        style={{ y, scale }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          decoding="async"
        />
      </motion.div>
    </div>
  );
}
