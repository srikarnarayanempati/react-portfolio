import React from 'react';
import { Code } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative h-[250px] bg-custom-black border-t border-white/10 overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center items-end pr-6 sm:pr-12 text-right">
        <div className="flex items-center justify-end space-x-2 mb-2">
          <span className="text-gray-300 font-bricolage">Made with</span>
          <FontAwesomeIcon icon={faSpider} className="text-custom-red animate-pulse w-5 h-5" />
          <span className="text-gray-300 font-bricolage">and</span>
          <Code className="text-custom-blue-accent" size={20} />
          <span className="text-gray-300 font-bricolage">by</span>
          <a 
            href="https://github.com/srikarnarayanempati" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white font-instrument-serif font-bold cursor-pointer hover:underline"
          >
            Srikar
          </a>
        </div>

        <p className="text-gray-400 text-sm font-space-mono">
          © 2025 Srikar Empati. All rights reserved.
        </p>


      </div>

      <div className="absolute bottom-[-30px] sm:bottom-[-40px] md:bottom-[-60px] left-0 z-0 w-full overflow-hidden">
        <h1
          className="text-[8.5rem] sm:text-[10rem] md:text-[14rem] lg:text-[21rem] font-bricolage font-extrabold text-white/5 tracking-tighter 
                     transition-all duration-500 hover:text-white/10 select-none leading-none pl-0"
          style={{
            lineHeight: '0.8',
          }}
        >
          SRIKAR
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
