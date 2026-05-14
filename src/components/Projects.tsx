import React from 'react';
import {ExternalLink, Github,Code } from 'lucide-react';
import SpotlightCard from '../ui/SpotlightCard';
import allProjectsData,{Project} from './projectsData';
import { useNavigate } from 'react-router-dom';
const Projects: React.FC = () => {
  const navigate = useNavigate();


  return (
    <section id="projects" className="py-20 relative overflow-hidden">
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

        <div className="relative px-4 md:px-8 lg:px-12 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjectsData.slice(0, 3).map((project: Project) => (
              <div key={project.title} className="group relative">
                <SpotlightCard
                  spotlightColor="rgba(255, 0, 0, 0.7)"
                  className="transition-transform duration-300 transform group-hover:scale-105 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 shadow-md"
                >
                  <div>
                    {/* Category */}
                    <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${project.color} font-space-mono`}>
                      {project.category}
                    </div>

                    {/* Image */}
                    <div className="relative mb-6 rounded-lg overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-custom-black/60 to-transparent"></div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 font-instrument-sans">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300 text-sm mb-4 font-bricolage">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech: string) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-custom-black/30 text-custom-red rounded-full text-xs border border-custom-red/20 font-space-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
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
              </div>
            ))}
          </div>
        </div>


            <div className="mt-8 flex justify-center">
              <button
                onClick={() => navigate('/all-projects')}
                className="group relative px-8 py-4 bg-gradient-to-r from-custom-red to-custom-red-light rounded-lg font-bricolage font-semibold text-white shadow-lg hover:shadow-custom-red/25 transition-all duration-300 hover:scale-105 glow"
              >
                <span className="relative z-10 flex items-center justify-center">
                  View all Projects
                  <Code className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
                </span>
              </button>
            </div>
      </div>
    </section>
  );
};

export default Projects;
