import React, { useRef } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import atsImg from '../assets/ats preview.png';
import calorieImg from '../assets/calorie preview.png';
import weatherImg from '../assets/weather preview.png';
import truthseekersImg from '../assets/truthseekers preview.png';
import spotifyImg from '../assets/spotify preview.png';
import SpotlightCard from './SpotlightCard'; // ✅ ADD THIS LINE

const Projects: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: 'ATS Score Generator',
      description: 'A frontend tool to check the ATS Score of user resumes against job descriptions.',
      image: atsImg,
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Frontend',
      color: 'from-custom-red to-custom-red-light',
      link: 'https://ats-score-generator.vercel.app/',
      github: 'https://github.com/srikarnarayanempati/ATS-Score-Generator'
    },
    {
      title: 'Calorie Calculator',
      description: 'A smart web app to calculate daily calorie needs and suggest foods accordingly.',
      image: calorieImg,
      tech: ['JavaScript', 'HTML', 'CSS'],
      category: 'Frontend',
      color: 'from-custom-green to-custom-green-light',
      link: 'https://self-calorie-calculator.vercel.app/',
      github: 'https://github.com/srikarnarayanempati/Calorie-Calculator'
    },
    {
      title: 'Weather App',
      description: 'A React-based weather app that fetches real-time, location-specific weather data.',
      image: weatherImg,
      tech: ['React', 'OpenWeather API', 'CSS'],
      category: 'Frontend',
      color: 'from-custom-blue to-custom-blue-accent',
      link: 'https://srikarnarayanempati.github.io/My-Weather-App/',
      github: 'https://github.com/srikarnarayanempati/My-Weather-App'
    },
    {
      title: 'Truth Seekers',
      description: 'A frontend platform where women share their stories. Made with Readdy.ai.',
      image: truthseekersImg,
      tech: ['HTML', 'CSS', 'JavaScript', 'Readdy.ai'],
      category: 'Frontend',
      color: 'from-custom-pink to-custom-purple',
      link: 'https://truthseekers.vercel.app/',
      github: 'https://github.com/srikarnarayanempati/TruthSeekers'
    },
    {
      title: 'Spotify Clone',
      description: 'A music player UI closely resembling the Spotify interface design.',
      image: spotifyImg,
      tech: ['HTML', 'CSS', 'JavaScript'],
      category: 'Frontend',
      color: 'from-custom-orange to-custom-red',
      link: 'https://spotify-homepage-zeta.vercel.app/',
      github: 'https://github.com/srikarnarayanempati/Spotify-Homepage'
    }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-navy via-custom-black to-custom-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,30,30,0.1),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-instrument-sans">
            Featured <span className="text-custom-red">Projects</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-bricolage">
            Here are some of my recent projects that showcase my skills in frontend development, 
            full-stack applications, and data visualization.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-custom-red/80 hover:bg-custom-red rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-custom-red/80 hover:bg-custom-red rounded-full flex items-center justify-center text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={20} />
          </button>

          {/* Projects Carousel */}
          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide py-8 scroll-smooth overflow-visible"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {projects.map((project, index) => (
              <SpotlightCard
                key={project.title}
              spotlightColor="rgba(255, 0, 0, 0.7)"
                className="flex-shrink-0 w-80 md:w-96 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-custom-red/10 animate-fade-in"
              >
                <div style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Category Badge */}
                  <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} font-space-mono`}>
                    {project.category}
                  </div>

                  {/* Project Image */}
                  <div className="relative mb-6 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-custom-black/60 to-transparent"></div>
                  </div>

                  {/* Project Info */}
                  <h3 className="text-xl font-bold text-white mb-3 font-instrument-sans">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 font-bricolage leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-custom-black/30 text-custom-red rounded-full text-xs font-space-mono border border-custom-red/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-custom-red hover:bg-custom-red-light rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2 border border-custom-red text-custom-red hover:bg-custom-red/10 rounded-lg transition-all duration-200 hover:scale-105"
                    >
                      <Github size={16} />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
