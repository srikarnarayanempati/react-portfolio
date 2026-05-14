import React, { useRef, useState } from 'react';
import { Download, Award, ChevronLeft, ChevronRight, X } from 'lucide-react';
import resumePDF from '../assets/Srikar-Resume.pdf';
import SpotlightCard from '../ui/SpotlightCard';
import fullstackImg from '../assets/certificates/development.jpg';
import pythonImg from '../assets/certificates/Python.jpg';
import sqlImg from '../assets/certificates/SQL.jpg';
import hrPythonImg from '../assets/certificates/python-hr.jpg';
import nxtwaveImg from '../assets/certificates/NxtWave.jpg';

const Resume: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  const certifications = [
    {
      title: 'Full-Stack Development',
      issuer: 'Apna College',
      date: '2025',
      icon: '🖥️',
      color: 'from-custom-blue to-custom-blue-accent',
      image: fullstackImg,
    },
    {
      title: 'Python Programming',
      issuer: 'GeeksforGeeks',
      date: '2024',
      icon: '🐍',
      color: 'from-custom-blue-light to-custom-blue-accent',
      image: pythonImg,
    },
    {
      title: 'SQL & Relational Databases',
      issuer: 'IBM',
      date: '2025',
      icon: '🗃️',
      color: 'from-custom-red to-custom-red-light',
      image: sqlImg,
    },
    {
      title: 'Python HackerRank',
      issuer: 'HackerRank',
      date: '2025',
      icon: '🏅',
      color: 'from-custom-green to-custom-green-light',
      image: hrPythonImg,
    },
    {
      title: 'Generative AI (NxtWave)',
      issuer: 'NxtWave',
      date: '2025',
      icon: '🤖',
      color: 'from-custom-orange to-custom-red',
      image: nxtwaveImg,
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="resume" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-dark via-custom-black to-custom-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,30,30,0.1),transparent)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Resume */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-instrument-sans">
            Resume & <span className="text-custom-red">Certifications</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-bricolage">
            View my resume and explore my certifications that showcase my commitment to continuous learning.
          </p>
        </div>

        {/* Resume Card */}
<div className="text-center mb-16">
  <SpotlightCard
      spotlightColor="rgba(255, 0, 0, 0.7)"
    className="max-w-md mx-auto p-8 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105"
  >
    <div className="w-16 h-16 bg-gradient-to-r from-custom-red to-custom-red-light rounded-full flex items-center justify-center mx-auto mb-6">
      <Download className="text-white" size={32} />
    </div>
    <h3 className="text-2xl font-bold text-white mb-4 font-instrument-serif">
      My Resume
    </h3>
    <p className="text-gray-300 mb-6 font-bricolage">
      Get a detailed overview of my skills, projects, and educational background.
    </p>
    <a
      href={resumePDF}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-block px-8 py-4 bg-gradient-to-r from-custom-red to-custom-red-light rounded-lg font-bricolage font-semibold text-white shadow-lg hover:shadow-custom-red/25 transition-all duration-300 hover:scale-105 glow"
    >
      <span className="relative z-10 flex items-center justify-center">
        <Download className="mr-2 group-hover:translate-y-1 transition-transform" size={20} />
        View My Resume
      </span>
    </a>
  </SpotlightCard>
</div>
        {/* Certifications */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-3xl font-bold text-white font-instrument-sans">
              My Certifications
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 h-10 bg-custom-red/80 hover:bg-custom-red rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 h-10 bg-custom-red/80 hover:bg-custom-red rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4 scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certifications.map((cert, index) => (
  <div
    key={cert.title}
    className="flex-shrink-0 w-72 animate-fade-in"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <SpotlightCard
      spotlightColor="rgba(255, 0, 0, 0.7)"
      className="relative h-72 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300"
    >
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${cert.color} flex items-center justify-center mb-4 text-2xl`}>
            {cert.icon}
          </div>
          <h4 className="text-lg font-bold text-white mb-2 font-instrument-sans">{cert.title}</h4>
          <p className="text-custom-red font-semibold mb-2 font-bricolage">{cert.issuer}</p>
          <p className="text-gray-400 text-sm font-space-mono">{cert.date}</p>
        </div>

        <div className="pt-4 border-t border-white/10 mt-auto">
          <button
            className="flex items-center text-custom-red hover:text-custom-red-light transition-colors font-bricolage text-sm"
            onClick={() => setModalImage(cert.image)}
          >
            <Award size={16} className="mr-1" />
            View Certificate
          </button>
        </div>
      </div>
    </SpotlightCard>
  </div>
))}


          </div>
        </div>
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setModalImage(null)}
        >
          <div className="relative max-w-3xl w-full px-4">
            <button
              onClick={() => setModalImage(null)}
              className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 p-2 rounded-full"
            >
              <X size={24} />
            </button>
            <img
              src={modalImage}
              alt="Certificate"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Resume;
