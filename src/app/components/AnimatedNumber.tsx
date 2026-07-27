import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef } from "react";

interface AnimatedNumberProps {
  value: string;
  className?: string;
}

export function AnimatedNumber({ value, className = "" }: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const numericMatch = value.match(/\d+/);
  const numeric = numericMatch ? parseInt(numericMatch[0]) : 0;
  const suffix = value.replace(/\d+/, "");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString() + suffix);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, numeric, {
      duration: 1.8,
      ease: "easeOut",
    });
    return controls.stop;
  }, [inView, numeric, count]);

  return (
    <span ref={ref} className={className}>
      {inView ? <motion.span>{rounded}</motion.span> : "0" + suffix}
    </span>
  );
}
