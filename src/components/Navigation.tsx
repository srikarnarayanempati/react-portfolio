import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, Briefcase, FileText, Mail } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-lg bg-custom-black/30' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Section with Lottie */}
<div className="flex items-start relative z-20 space-x-2">
  <div className="font-instrument-serif text-2xl font-bold text-white mt-2">
    Portfolio
  </div>

  {/* Lottie Animation aligned from top of navbar */}
  <div className="relative">
    <div className="absolute -top-4 -left-2 w-32 h-32 overflow-visible pointer-events-none">
      <DotLottieReact
        src="https://lottie.host/02386020-c825-449f-8fd8-6aac4d1c396c/v5RepFKTr4.lottie"
        loop
        autoplay
        speed={0.7}
        style={{
          background: 'transparent',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  </div>
</div>


          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: 'Home', icon: Home, id: 'hero' },
                { name: 'About', icon: User, id: 'about' },
                { name: 'Projects', icon: Briefcase, id: 'projects' },
                { name: 'Resume', icon: FileText, id: 'resume' },
                { name: 'Contact', icon: Mail, id: 'contact' },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-300 hover:text-custom-red px-3 py-2 rounded-md text-sm font-bricolage font-medium transition-colors duration-200 flex items-center space-x-1"
                >
                  <item.icon size={16} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-custom-dark inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-custom-navy focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-custom-black/50 backdrop-blur-lg">
            {[
              { name: 'Home', icon: Home, id: 'hero' },
              { name: 'About', icon: User, id: 'about' },
              { name: 'Projects', icon: Briefcase, id: 'projects' },
              { name: 'Resume', icon: FileText, id: 'resume' },
              { name: 'Contact', icon: Mail, id: 'contact' },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-custom-red block px-3 py-2 rounded-md text-base font-bricolage font-medium transition-colors duration-200 flex items-center space-x-2 w-full text-left"
              >
                <item.icon size={20} />
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
