import { motion } from "motion/react";

// Small crisp dots
const dots = [
  { size: 5, x: "12%", y: "22%", delay: 0, dur: 7 },
  { size: 3, x: "78%", y: "18%", delay: 1.4, dur: 6 },
  { size: 6, x: "62%", y: "72%", delay: 0.6, dur: 8 },
  { size: 4, x: "42%", y: "82%", delay: 2.2, dur: 9 },
  { size: 5, x: "88%", y: "55%", delay: 1.8, dur: 6.5 },
  { size: 3, x: "8%",  y: "65%", delay: 0.9, dur: 7.5 },
  { size: 4, x: "53%", y: "28%", delay: 3.1, dur: 5.5 },
  { size: 6, x: "28%", y: "48%", delay: 2.7, dur: 10 },
  { size: 3, x: "95%", y: "30%", delay: 0.3, dur: 8.5 },
  { size: 5, x: "20%", y: "88%", delay: 1.1, dur: 7 },
];

// Large soft glowing blobs for depth
const blobs = [
  { size: 180, x: "5%",  y: "10%", delay: 0,   dur: 14, opacity: 0.06 },
  { size: 240, x: "70%", y: "5%",  delay: 3,   dur: 18, opacity: 0.05 },
  { size: 160, x: "55%", y: "60%", delay: 1.5, dur: 12, opacity: 0.07 },
  { size: 200, x: "15%", y: "55%", delay: 5,   dur: 16, opacity: 0.04 },
  { size: 120, x: "82%", y: "70%", delay: 2.5, dur: 11, opacity: 0.06 },
];

export function FloatingParticles({ color = "bg-white/20" }: { color?: string }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Soft background blobs */}
      {blobs.map((b, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full bg-white blur-3xl"
          style={{
            width: b.size,
            height: b.size,
            left: b.x,
            top: b.y,
            opacity: b.opacity,
          }}
          animate={{
            y: [0, -30, 12, -20, 0],
            x: [0, 14, -8, 18, 0],
            scale: [1, 1.08, 0.96, 1.04, 1],
          }}
          transition={{
            duration: b.dur,
            delay: b.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Small crisp dots */}
      {dots.map((p, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute rounded-full ${color}`}
          style={{ width: p.size, height: p.size, left: p.x, top: p.y }}
          animate={{
            y: [0, -20, 8, -14, 0],
            opacity: [0.35, 0.85, 0.5, 0.9, 0.35],
            scale: [1, 1.4, 0.9, 1.2, 1],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
