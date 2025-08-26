import React from 'react';
import { ArrowRight, Github, Linkedin, Instagram } from 'lucide-react';
import RippleGrid from '../ui/RippleGrid';
import '@dotlottie/player-component'; 


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
    <section id="hero" className="min-h-screen relative overflow-hidden">
      {/* Background with custom gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-black via-custom-navy to-custom-dark">
        <div className="absolute inset-0 bg-gradient-to-r from-custom-blue/20 via-transparent to-custom-blue-light/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,30,30,0.1),transparent)]"></div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-custom-red/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-32 right-32 w-96 h-96 bg-custom-blue-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '1s' }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-48 h-48 bg-custom-orange/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      {/* Ripple Grid Overlay */}
      <div className="absolute inset-0 z-[1] translate-x-20">
        <RippleGrid
          enableRainbow={false}
          gridColor="#7B1E1E"
          rippleIntensity={0.05}
          gridSize={15}
          gridThickness={15}
          mouseInteraction={true}
          mouseInteractionRadius={1.2}
          opacity={0.4}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center min-h-screen">
        <div className="w-full">
          <div className="text-center lg:text-left">
            <div className="animate-slide-in">
              <h2 className="text-custom-orange font-gochi text-xl md:text-2xl mb-4">Hello! I'm</h2>
              <h1 className="mb-6">
                <span className="block text-4xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-lg font-bricolage">
                  Srikar Empati
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl bg-gradient-to-r from-red-500 via-red-400 to-orange-400 bg-clip-text text-transparent font-bricolage font-medium">
                  Frontend Developer & Data Enthusiast
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto lg:mx-0 font-bricolage">
                "I am your friendly neighbourhood coder — A front-end dev by day, and a video editor by night. I design
                with purpose, build with precision, and always stay curious (no radioactive spider needed)."
              </p>
            </div>

            <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-custom-red to-custom-red-light rounded-lg font-bricolage font-semibold text-white shadow-lg hover:shadow-custom-red/25 transition-all duration-300 hover:scale-105 animate-glow"
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

            <div className="flex justify-center lg:justify-start space-x-6 animate-fade-in">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
