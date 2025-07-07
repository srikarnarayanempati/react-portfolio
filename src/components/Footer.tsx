import React from 'react';
import { Code } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpider } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="relative py-12 bg-custom-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-gray-300 font-bricolage">Made with</span>

            <FontAwesomeIcon
              icon={faSpider}
              className="text-custom-red animate-pulse w-5 h-5"
            />

            <span className="text-gray-300 font-bricolage">and</span>

            <Code className="text-custom-blue-accent" size={20} />

            <span className="text-gray-300 font-bricolage">by</span>

            <span className="text-white font-instrument-serif font-bold">Srikar</span>
          </div>

          <p className="text-gray-400 text-sm font-space-mono">
            © 2025 Srikar Empati . All rights reserved.
          </p>

          <div className="mt-4">
            <p className="text-gray-500 text-xs font-gochi">
              "Keep coding, keep creating, keep dreaming! ✨"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
