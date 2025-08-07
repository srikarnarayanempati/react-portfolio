import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { motion, Variants } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills: React.FC = () => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useLayoutEffect(() => {
    // Only run animations on desktop to avoid mobile performance issues
    if (isMobile) return;

    const ctx = gsap.context(() => {
      // Simple entrance animation without scroll triggers
      gsap.fromTo(containerRef.current, 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Simple title animation
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out", delay: 0.2 }
      );

      // Simple grid animation
      gsap.fromTo(gridRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out", delay: 0.4 }
      );

      // Individual card animations (simplified)
      const cards = gridRef.current?.querySelectorAll('.tech-card');
      if (cards) {
        gsap.fromTo(cards,
          { opacity: 0, y: 30, scale: 0.9 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
            delay: 0.6
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [isMobile]);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseEnter = (techName: string) => {
    if (!isMobile) {
      setHoveredTech(techName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredTech(null);
    }
  };

  const handleTouchStart = (techName: string) => {
    if (isMobile) {
      setHoveredTech(techName);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setTimeout(() => setHoveredTech(null), 2000); // Keep tooltip visible for 2 seconds on mobile
    }
  };

  const technologies = [
    {
      name: 'Python',
      icon: 'https://cdn.simpleicons.org/python/3776AB',
      color: '#3776AB',
      description: 'Programming Language'
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.simpleicons.org/javascript/F7DF1E',
      color: '#F7DF1E',
      description: 'Programming Language'
    },
    {
      name: 'TypeScript',
      icon: 'https://cdn.simpleicons.org/typescript/3178C6',
      color: '#3178C6',
      description: 'Type-Safe JavaScript'
    },
    {
      name: 'React',
      icon: 'https://cdn.simpleicons.org/react/61DAFB',
      color: '#61DAFB',
      description: 'Frontend Framework'
    },
    {
      name: 'Vite',
      icon: 'https://cdn.simpleicons.org/vite/646CFF',
      color: '#646CFF',
      description: 'Build Tool'
    },
    {
      name: 'HTML',
      icon: 'https://cdn.simpleicons.org/html5/E34F26',
      color: '#E34F26',
      description: 'Markup Language'
    },
    {
      name: 'CSS',
      icon: 'https://static.cdnlogo.com/logos/c/31/css_800.png',
      color: '#1572B6',
      description: 'Styling Language'
    },
    {
      name: 'Tailwind',
      icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
      color: '#06B6D4',
      description: 'CSS Framework'
    },
    {
      name: 'Bootstrap',
      icon: 'https://cdn.simpleicons.org/bootstrap/7952B3',
      color: '#7952B3',
      description: 'CSS Framework'
    },
    {
      name: 'SQL',
      icon: 'https://static.cdnlogo.com/logos/a/2/amazon-database.svg',
      color: '#FF9900',
      description: 'Database Language'
    },
    {
      name: 'MySQL',
      icon: 'https://cdn.simpleicons.org/mysql/4479A1',
      color: '#4479A1',
      description: 'Database Management'
    },
    {
      name: 'GSAP',
      icon: 'https://cdn.simpleicons.org/gsap/88CE02',
      color: '#88CE02',
      description: 'Animation Library'
    },
    {
      name: 'Framer Motion',
      icon: 'https://cdn.simpleicons.org/framer/0055FF',
      color: '#0055FF',
      description: 'Animation Library'
    },
    {
      name: 'Vercel',
      icon: 'https://cdn.simpleicons.org/vercel/000000',
      color: '#000000',
      description: 'Deployment Platform'
    },
    {
      name: 'ChatGPT',
      icon: 'https://cdn.simpleicons.org/openai/FFFFFF',
      color: '#412991',
      description: 'AI Assistant'
    },
    {
      name: 'DeepSeek',
      icon: 'https://static.cdnlogo.com/logos/d/9/deepseek-icon.svg',
      color: '#1F2937',
      description: 'AI Model'
    },
    {
      name: 'Git',
      icon: 'https://cdn.simpleicons.org/git/F05032',
      color: '#F05032',
      description: 'Version Control'
    },
    {
      name: 'GitHub',
      icon: 'https://cdn.simpleicons.org/github/181717',
      color: '#181717',
      description: 'Code Repository'
    },
    {
      name: 'VS Code',
      icon: 'https://static.cdnlogo.com/logos/v/82/visual-studio-code.svg',
      color: '#007ACC',
      description: 'Code Editor'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    hover: {
      scale: 1.1,
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div ref={containerRef} className="relative w-full min-h-[600px] md:h-[500px] overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute top-20 left-20 w-64 h-64 bg-custom-red/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-custom-blue-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-custom-orange/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center py-8">
        <motion.h2 
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 font-instrument-serif text-center"
        >
        </motion.h2>

        <motion.div 
          ref={gridRef}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-9 gap-3 md:gap-6 w-full px-2"
        >
          {technologies.map((tech) => (
            <motion.div
              key={tech.name}
              className="tech-card relative group"
              variants={cardVariants as Variants}
              whileHover={!isMobile ? "hover" : undefined}
              onHoverStart={() => handleMouseEnter(tech.name)}
              onHoverEnd={() => handleMouseLeave()}
              onTouchStart={() => handleTouchStart(tech.name)}
              onTouchEnd={() => handleTouchEnd()}
            >
              <div 
                className={`relative p-3 md:p-4 rounded-xl md:rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 
                         transition-all duration-300 cursor-pointer
                         flex flex-col items-center justify-center min-h-[80px] md:min-h-[120px]
                         ${!isMobile ? 'hover:border-custom-red/50' : ''}`}
                style={{
                  boxShadow: hoveredTech === tech.name && !isMobile
                    ? `0 0 30px ${tech.color}40` 
                    : '0 4px 20px rgba(0,0,0,0.1)'
                }}
              >
                {/* Glow effect - only on desktop */}
                {!isMobile && (
                  <div 
                    className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ 
                      background: `radial-gradient(circle, ${tech.color}20 0%, transparent 70%)`,
                      filter: 'blur(20px)'
                    }}
                  />
                )}
                
                {/* Icon */}
                <div className="relative z-10 mb-2 md:mb-3">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className={`w-8 h-8 md:w-12 md:h-12 transition-transform duration-300 ${!isMobile ? 'group-hover:scale-110' : ''}`}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div 
                    className="w-8 h-8 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-white font-bold text-sm md:text-lg hidden"
                    style={{ backgroundColor: tech.color }}
                  >
                    {tech.name.charAt(0)}
                  </div>
                </div>

                {/* Name */}
                <h3 className="text-white text-xs md:text-sm font-semibold text-center font-bricolage leading-tight">
                  {tech.name}
                </h3>

                {/* Description tooltip - only on desktop */}
                {!isMobile && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: hoveredTech === tech.name ? 1 : 0,
                      y: hoveredTech === tech.name ? 0 : -10
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-16 md:-top-12 left-1/2 transform -translate-x-1/2 
                             bg-black/90 text-white text-xs px-2 py-1 md:px-3 md:py-2 rounded-lg 
                             backdrop-blur-lg border border-white/20 whitespace-nowrap z-20
                             max-w-[120px] md:max-w-none"
                  >
                    {tech.description}
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black/90 rotate-45"></div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
