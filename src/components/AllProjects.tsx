import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Github, ArrowLeft } from 'lucide-react';
import allProjectsData,{Project} from './projectsData';
import SpotlightCard from './SpotlightCard';
import { gsap } from 'gsap';

const AllProjects: React.FC = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Page entrance animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-custom-navy via-custom-black to-custom-dark min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={() => navigate('/#projects')}
          className="flex items-center mb-8 text-white hover:text-custom-red transition duration-300"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Projects
        </button>

        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12 font-instrument-sans">
          All <span className="text-custom-red">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allProjectsData.map((project:Project) => (
            <SpotlightCard
              key={project.title}
              spotlightColor="rgba(255, 0, 0, 0.7)"
              className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-custom-red/10"
            >
              <div>
                <div
                  className={`mb-2 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} inline-block`}
                >
                  {project.category}
                </div>

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />

                <h3 className="text-xl font-bold text-white mb-2 font-instrument-sans">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4 font-bricolage">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech:string) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-custom-black/30 text-custom-red rounded-full text-xs font-space-mono border border-custom-red/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center px-4 py-2 bg-custom-red hover:bg-custom-red-light rounded-lg text-white font-semibold transition-all duration-200 hover:scale-105"
                  >
                    <ExternalLink size={16} className=" mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 border border-custom-red text-custom-red rounded-lg hover:bg-custom-red/10 transition duration-300"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;
