// @ts-ignore
import "../../../../styles/splashscreen.css";

import logoImage from "figma:asset/YU4C.png";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({
  onComplete,
}: SplashScreenProps) {

  const splashRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);


  useEffect(() => {

  const tl = gsap.timeline({
  onComplete: onComplete,
});


    // Initial state
    gsap.set(logoRef.current, {
      scale: 0.15,
      opacity: 0,
    });

    gsap.set(glowRef.current, {
      scale: 0,
      opacity: 0,
    });


    // Logo appears
    tl.to(logoRef.current, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: "power4.out",
    });


    // Glow appears
    tl.to(glowRef.current, {
      scale: 2,
      opacity: 0.35,
      duration: 1.2,
      ease: "power2.out",
    }, "-=1");


    // Gentle breathing effect
    tl.to(logoRef.current, {
      scale: 1.08,
      duration: 1,
      ease: "sine.inOut",
    });


    tl.to(logoRef.current, {
      scale: 1,
      duration: 1,
      ease: "sine.inOut",
    });


    // Final explosion transition
    tl.to(logoRef.current, {
      scale: 30,
      duration: 3,
      ease: "expo.inOut",
    });


    // Fade everything
    tl.to(
      splashRef.current,
      {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=1"
    );


  }, [onComplete]);


  return (
    <div ref={splashRef} className="splash">

      <div ref={glowRef} className="glow"></div>

      <img
        ref={logoRef}
        src={logoImage}
        alt="YU4C"
        className="logo"
      />

    </div>
  );
}