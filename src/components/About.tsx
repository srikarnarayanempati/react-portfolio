import React from 'react';
import { Code, Database, Brain, Wrench } from 'lucide-react';
import me from '../assets/me.jpg'; 
import TiltedCard from './TiltedCard';
import ScrambledText from './ScrambledText';
import ScrollVelocity from './ScrollVelocity';
import SpotlightCard from './SpotlightCard';

const About: React.FC = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Bootstrap'],
      color: 'from-custom-blue to-custom-blue-accent'
    },
    {
      category: 'Language & Data',
      icon: Database,
      skills: ['Java', 'Python', 'SQL', 'MySQL'],
      color: 'from-custom-blue-light to-custom-blue-accent'
    },
    {
      category: 'Tools & Technologies',
      icon: Wrench,
      skills: ['Git', 'GitHub', 'VS Code', 'ChatGPT', 'Deepseek'],
      color: 'from-custom-orange to-custom-red'
    },
    {
      category: 'Currently Learning',
      icon: Brain,
      skills: ['Advanced SQL', 'DSA', 'Pandas','Numpy', 'Data Visualization'],
      color: 'from-custom-red-light to-custom-orange'
    },

  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-black via-custom-dark to-custom-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,30,30,0.1),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-instrument-sans">
            About <span className="text-custom-red">Me</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto font-bricolage">
            "I am your friendly neighbourhood coder — A front-end dev by day, and an video editor by night. I design with purpose, build with precision, and always stay curious (no radioactive spider needed)."
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* TiltedCard Profile*/}
          <div className="flex justify-center lg:justify-start">  
            <TiltedCard
              imageSrc={me}
              altText="Profile Picture"
              captionText="Hi, I'm Srikar Empati"
              containerHeight="auto"
              containerWidth="100%"
              imageHeight="300px"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="px-4 py-1 rounded-full bg-[#2C2C2C]/80 text-white text-sm font-semibold shadow-md">
                  Srikar Empati
                </div>
              }
            />
          </div>


          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
            <SpotlightCard
              key={skillGroup.category}
              spotlightColor="rgba(255, 0, 0, 0.7)"
              className={`group relative p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105 animate-fade-in`}
              // @ts-ignore
              style={{ '--tw-animation-delay': `${index * 0.1}s` } as React.CSSProperties}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${skillGroup.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skillGroup.icon className="text-white" size={24} />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 font-instrument-sans">
                {skillGroup.category}
              </h3>

              <div className="space-y-2">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="text-gray-300 font-space-mono text-sm bg-custom-black/20 px-3 py-1 rounded-full backdrop-blur-sm"
                    style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </SpotlightCard>
            ))}
          </div>
        </div>

        <div className="text-center">
          <div className="max-w-4xl mx-auto p-8 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-instrument-sans">
            My<span className="text-custom-red"> Journey</span>
            </h2>
            <ScrambledText
              className="text-gray-300 text-lg leading-relaxed !m-0 !p-0"
              duration={1.4}
              speed={0.6}
              scrambleChars=".:"
            >
              While I'm still building my professional experience, I'm deeply committed to mastering both 
              frontend development and data analytics. I believe the combination of beautiful UI/UX design 
              and data-driven insights creates powerful digital experiences. I'm actively working on 
              projects that showcase these skills and always eager to learn new technologies.
            </ScrambledText>
          </div>
        </div>
      </div>
      <hr className='my-8'></hr>
      <div className='w-screen overflow-hidden !m-0 !p-0'>
          <ScrollVelocity
            texts={['Eat Sleep Code Repeat', 'Frontend Developer']}
            velocity={100}
            className="text-white custom-scroll-text"
          />
      </div>
    </section>
  );
};

export default About;