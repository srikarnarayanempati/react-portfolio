import React, { useState, useEffect } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import SideMenu from '../ui/SideMenu';

const Navigation: React.FC = () => {
  const [, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToHero = () => {
    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative z-20">
          {/* Brand Section */}
          <div className="flex items-start space-x-2">
            <div
              className="group flex items-center space-x-2 cursor-pointer 
                        backdrop-blur-md bg-white/10 rounded-full px-4 py-2 shadow-lg mt-4"
              onClick={scrollToHero}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="w-10 h-10 object-contain transform transition-transform duration-300 group-hover:-rotate-[20deg]"
              />
              <div className="font-instrument-serif text-2xl font-bold text-white hidden sm:block">
                Portfolio
              </div>
            </div>

            {/* Lottie Animation */}
            <div className="relative">
              <div className="absolute -top-4 -left-2 w-32 h-32 overflow-visible pointer-events-none">
                <DotLottieReact
                  src="https://lottie.host/02386020-c825-449f-8fd8-6aac4d1c396c/v5RepFKTr4.lottie"
                  loop
                  autoplay
                  speed={0.7}
                  style={{ background: 'transparent', width: '100%', height: '100%' }}
                />
              </div>
            </div>
          </div>

          <div className="flex items-center mt-2">
            <SideMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
