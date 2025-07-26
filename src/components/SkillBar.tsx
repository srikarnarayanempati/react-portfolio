import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, level, color, delay = 0 }) => {
  const barRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      gsap.set(fillRef.current, { width: 0 });
      gsap.set(percentRef.current, { textContent: "0%" });

      // Animation on scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: barRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      tl.to(fillRef.current, {
        width: `${level}%`,
        duration: 1.5,
        ease: "power2.out",
        delay: delay
      })
      .to(percentRef.current, {
        textContent: `${level}%`,
        duration: 1.5,
        ease: "power2.out",
        snap: { textContent: 1 }
      }, "<");

      // Hover effect
      const handleMouseEnter = () => {
        gsap.to(fillRef.current, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(fillRef.current, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      };

      const element = barRef.current;
      if (element) {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, barRef);

    return () => ctx.revert();
  }, [level, delay]);

  return (
    <div ref={barRef} className="group cursor-pointer">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-white font-instrument-sans group-hover:text-custom-red transition-colors">
          {name}
        </h3>
        <span 
          ref={percentRef}
          className="text-custom-red font-space-mono font-bold"
        >
          0%
        </span>
      </div>
      
      <div className="relative h-3 bg-custom-dark rounded-full overflow-hidden backdrop-blur-sm border border-white/10">
        <div
          ref={fillRef}
          className={`absolute left-0 top-0 h-full bg-gradient-to-r ${color} rounded-full shadow-lg`}
          style={{ width: '0%' }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="h-1 bg-gradient-to-r from-transparent via-custom-red/50 to-transparent rounded-full"></div>
      </div>
    </div>
  );
};

export default SkillBar;