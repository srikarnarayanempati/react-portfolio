import React, { useEffect, useLayoutEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  ArrowLeft, 
  Code, 
  Database, 
  Palette, 
  Brain,
  Video, 
  Target, 
  Heart,
  Lightbulb
} from 'lucide-react';
import { LogoLoop } from '../ui/LogoLoop';
import Timeline from '../ui/Timeline';
import MagicBento from '../ui/MagicBento';
import CodeBlock from "../ui/CodeBlock";

gsap.registerPlugin(ScrollTrigger);

const AboutDetails: React.FC = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);
  const heroRef = useRef<HTMLDivElement>(null);
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(heroRef.current, 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      const isMobile = window.innerWidth <= 768;

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          if (isMobile) {
            gsap.fromTo(section,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                delay: index * 0.1,
                scrollTrigger: {
                  trigger: section,
                  start: "top 90%",
                  end: "bottom 10%",
                  toggleActions: "play none none reverse",
                  once: true
                }
              }
            );
          } else {
            gsap.fromTo(section,
              { opacity: 0, y: 60 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: section,
                  start: "top 80%",
                  end: "bottom 20%",
                  toggleActions: "play none none reverse"
                }
              }
            );
          }
        }
      });

      if (!isMobile) {
        gsap.to(".parallax-bg", {
          yPercent: -50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true
          }
        });
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };
const techLogos = [
  {
    src: "https://static.cdnlogo.com/logos/p/3/python.svg",
    title: "Python – Programming Language",
    href: "https://www.python.org",
  },
  {
    src: "https://cdn.simpleicons.org/javascript/F7DF1E",
    title: "JavaScript – Programming Language",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "https://cdn.simpleicons.org/typescript/3178C6",
    title: "TypeScript – Type-Safe JavaScript",
    href: "https://www.typescriptlang.org",
  },
  {
    src: "https://cdn.simpleicons.org/react/61DAFB",
    title: "React – Frontend Framework",
    href: "https://react.dev",
  },
  {
    src: "https://i.postimg.cc/5y0cwFSG/Vitejs-logo-svg.png",
    title: "Vite – Build Tool",
    href: "https://vitejs.dev",
  },
  {
    src: "https://static.cdnlogo.com/logos/h/84/html.svg",
    title: "HTML – Markup Language",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: "https://static.cdnlogo.com/logos/c/31/css_800.png",
    title: "CSS – Styling Language",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    src: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    title: "Tailwind CSS – CSS Framework",
    href: "https://tailwindcss.com",
  },
  {
    src: "https://cdn.simpleicons.org/bootstrap/7952B3",
    title: "Bootstrap – CSS Framework",
    href: "https://getbootstrap.com",
  },
  {
    src: "https://i.postimg.cc/jqQQfFDG/pngwing-com.png",
    title: "SQL – Database Language",
    href: "https://en.wikipedia.org/wiki/SQL",
  },
  {
    src: "https://cdn.simpleicons.org/mysql/4479A1",
    title: "MySQL – Database Management",
    href: "https://www.mysql.com",
  },
  {
    src: "https://cdn.simpleicons.org/gsap/88CE02",
    title: "GSAP – Animation Library",
    href: "https://gsap.com",
  },
  {
    src: "https://cdn.simpleicons.org/framer/0055FF",
    title: "Framer Motion – Animation Library",
    href: "https://www.framer.com/motion/",
  },
  {
    src: "https://cdn.simpleicons.org/vercel/000000",
    title: "Vercel – Deployment Platform",
    href: "https://vercel.com",
  },
  {
    src: "https://cdn.simpleicons.org/openai/FFFFFF",
    title: "ChatGPT – AI Assistant",
    href: "https://chat.openai.com",
  },
  {
    src: "https://static.cdnlogo.com/logos/d/9/deepseek-icon.svg",
    title: "DeepSeek – AI Model",
    href: "https://www.deepseek.com",
  },
  {
    src: "https://cdn.simpleicons.org/git/F05032",
    title: "Git – Version Control",
    href: "https://git-scm.com",
  },
  {
    src: "https://i.postimg.cc/c1T5QHj7/github-white-icon.png",
    title: "GitHub – Code Repository",
    href: "https://github.com",
  },
  {
    src: "https://static.cdnlogo.com/logos/v/82/visual-studio-code.svg",
    title: "VS Code – Code Editor",
    href: "https://code.visualstudio.com",
  },
];



  const timelineEvents = [
    {
      id: 'frontend-2023',
      year: '2023',
      title: 'Frontend Development Start',
      description: 'Began my journey in web development with HTML, CSS, and JavaScript.',
      icon: Brain,
      color: 'from-custom-blue-light to-custom-blue-accent'
    },
    {
      id: 'react-2024',
      year: '2024',
      title: 'React Development',
      description: 'Mastered React hooks, state management, and modern development practices.',
      icon: Code,
      color: 'from-custom-red to-custom-red-light'
    },
    {
      id: 'data-analysis-2024',
      year: '2024',
      title: 'Started Data Analysis Journey',
      description: 'Began exploring Python, SQL, and data analysis to complement my frontend skills.',
      icon: Database,
      color: 'from-custom-blue to-custom-blue-accent'
    },
    {
      id: 'dsa-2025',
      year: '2025',
      title: 'DSA Skills Focus',
      description: 'Developing strong problem-solving skills with a focus on data structures and algorithms.',
      icon: Palette,
      color: 'from-custom-orange to-custom-red'
    }
  ];

  const interests = [
    { name: 'Video Editing', icon: Video },
    { name: 'Open Source Contribution', icon: Heart },
    { name: 'Prompt Engineering', icon: Target },
    { name: 'Design Systems', icon: Palette },
    { name: 'Tech Innovation', icon: Lightbulb },
    { name: 'Data Visualization', icon: Database },

  ];

  return (
    <div ref={containerRef} className="min-h-screen relative overflow-hidden">      
      <div className="absolute inset-0 bg-gradient-to-b from-custom-navy via-custom-black to-custom-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,30,0.1),transparent)]"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute top-20 left-20 w-64 h-64 bg-custom-red/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-96 h-96 bg-custom-blue-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-custom-orange/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="pt-24 pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="group flex items-center text-custom-red hover:text-custom-red-light transition-colors mb-8 font-bricolage"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Back to Portfolio
          </button>
          
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-instrument-sans">
              So you really want to know about <span className="text-transparent bg-clip-text bg-gradient-to-r from-custom-red via-custom-red-light to-custom-orange">Me</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-bricolage">
              Okay back to friendly neighbourhood coder !!
            </p>
          </div>
        </div>
      </section>

      {/* Professional Background */}
      <section ref={addToRefs} className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6 font-instrument-serif">
                Professional Background
              </h2>

              <div className="max-w-3xl mx-auto w-full">
                <CodeBlock />
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 overflow-hidden">
                <img
                  src="/srikar.jpg"
                  alt="Srikar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 relative z-10 skills-section bg-transparent">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-instrument-serif">
            Skills & Technologies I Know
          </h2>
        </div>

        <div className="w-full">
          <div style={{ height: "120px", position: "relative", overflow: "hidden" }}>
            <LogoLoop
              logos={techLogos}
              speed={60}
              direction="left"
              logoHeight={100}
              gap={60}
              pauseOnHover
              scaleOnHover
              fadeOut
              fadeOutColor="transparent"
              ariaLabel="Skills scrolling left"
            />
          </div>
        </div>
      </section>



      {/* Timeline Section */}
      <section ref={addToRefs} className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-instrument-serif">
            This is How I Started
          </h2>
          <Timeline events={timelineEvents} />
        </div>
      </section>

      {/* Education & Certifications */}
      <section ref={addToRefs} className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-instrument-serif">
            This is where I Learn and Cook          
          </h2>
          <div className="flex justify-center">
            <MagicBento 
              textAutoHide={true}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={12}
              glowColor="220, 38, 38"
            />
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={addToRefs} className="py-16 relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-instrument-serif">
            My Philosophy
          </h2>
          <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
            <blockquote className="text-2xl text-gray-300 font-gochi italic mb-6">
              "Great design is not just about how it looks, but how it works and how it makes people feel."
            </blockquote>
            <p className="text-lg text-gray-300 font-bricolage leading-relaxed">
              I believe in creating digital experiences that are not only visually stunning but also 
              intuitive, accessible, and meaningful. Every line of code should serve a purpose, 
              every design decision should enhance the user's journey, and every project should 
              leave a positive impact.
            </p>
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section ref={addToRefs} className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-instrument-serif">
            Interests & Passions
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {interests.map((interest) => (
              <div
                key={interest.name}
                className="group p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-custom-blue to-custom-red rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <interest.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white font-bricolage font-semibold">
                  {interest.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Focus */}
      <section ref={addToRefs} className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center font-instrument-serif">
            Current Focus
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-custom-red to-custom-orange rounded-lg flex items-center justify-center mr-4">
                  <Code size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-instrument-sans">
                  Frontend Mastery
                </h3>
              </div>
              <p className="text-gray-300 font-bricolage">
                Deepening my expertise in React ecosystem, exploring Next.js, and mastering 
                advanced animation techniques with GSAP and Framer Motion.
              </p>
            </div>
            
            <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-custom-blue to-custom-blue-accent rounded-lg flex items-center justify-center mr-4">
                  <Database size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white font-instrument-sans">
                  Data Analysis
                </h3>
              </div>
              <p className="text-gray-300 font-bricolage">
                Learning Python for data analysis, exploring machine learning concepts, 
                and building data visualization dashboards to complement my frontend skills.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutDetails;