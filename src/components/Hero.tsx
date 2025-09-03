import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import Plasma from '../ui/Plasma';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Background with gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-black via-custom-navy to-custom-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/20 via-transparent to-custom-blue-light/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,30,0.1),transparent)]"></div>
      </div>

      {/* Plasma Background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center z-[1]">
        <Plasma
          color="#ff0000"
          speed={1}
          direction="forward"
          scale={1.1}
          opacity={0.5}
          mouseInteractive={false}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-3xl px-6">
        <div className="animate-slide-in">
          <h2 className="text-custom-orange font-gochi text-xl md:text-2xl mb-4">Hello! I'm</h2>
          <h1 className="mb-6">
            <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg font-bricolage">
              Srikar Empati
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-custom-red to-custom-red-light bg-clip-text text-transparent font-bricolage font-medium">
              Frontend Developer & Data Enthusiast
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 font-bricolage">
            "I am your friendly neighbourhood coder — A front-end dev by day, and a video editor by night.
            I design with purpose, build with precision, and always stay curious (no radioactive spider needed)."
          </p>
        </div>

        {/* Buttons */}
        <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={scrollToContact}
            className="group relative px-8 py-4 bg-gradient-to-r from-custom-red to-custom-red-light rounded-lg font-bricolage font-semibold text-white shadow-lg hover:shadow-custom-red/25 transition-all duration-300 hover:scale-105 glow"
          >
            <span className="relative z-10 flex items-center justify-center">
              Hire Me
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>
          <button
            onClick={scrollToProjects}
            className="group px-8 py-4 border-2 border-custom-red rounded-lg font-bricolage font-semibold text-custom-red hover:bg-custom-red/10 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
          >
            <span className="flex items-center justify-center">
              View Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </span>
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 animate-fade-in">
          <a
            href="https://github.com/srikarnarayanempati"
            className="text-gray-400 hover:text-custom-red transition-colors duration-200 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/srikar-empati-32bb002ba"
            className="text-gray-400 hover:text-custom-red transition-colors duration-200 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/srikar.empati"
            className="text-gray-400 hover:text-custom-red transition-colors duration-200 hover:scale-110 transform"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
