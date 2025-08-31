import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Code } from 'lucide-react';
import me from '../assets/me.png'; 
import TiltedCard from '../ui/TiltedCard';
import ScrollVelocity from '../ui/ScrollVelocity';
import { cn } from "../lib/utils";


const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-custom-black via-custom-dark to-custom-navy">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,30,30,0.1),transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-instrument-sans">
            Quick View of <span className="text-custom-red">Me</span>
          </h2>
        </div>

        {/* Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="flex flex-col gap-6 lg:col-span-1">
            {/* Image Card */}
            <div className="h-[250px] w-full">
              <TiltedCard
                imageSrc={me}
                altText="Profile Picture"
                captionText="Yeah! That's me"
                containerHeight="100%"
                containerWidth="100%"
                imageHeight="100%"
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

            {/* Lower Card under Image */}
            <div className="h-[250px] w-full">
              <div
                className={cn(
                  "group w-full h-full relative cursor-pointer overflow-hidden rounded-2xl p-6 border border-transparent dark:border-neutral-800 transition-all duration-500",
                  "bg-[url(https://i.postimg.cc/4xmsgf2B/IMG-20250807-035613.png)] bg-cover bg-center bg-no-repeat",
                  "before:bg-[url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif')] before:absolute before:inset-0 before:opacity-0 before:z-[-1]",
                  "hover:bg-[url('https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif')]",
                  "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                  "flex flex-col justify-end"
                )}
              >
                <div className="text relative z-50">
                  <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                    Alter Ego
                  </h1>
                  <p className="font-normal text-base text-gray-50 relative my-4">
                    Do not Hover on me !!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Large card */}
          <div className="flex items-stretch lg:col-span-2">
            <div className="flex flex-col justify-center w-full h-full p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 transition-all duration-300 animate-fade-in">
              <div className="text-white text-lg font-bricolage leading-relaxed">
                <p className="mb-4">Not your average pick-me guy.</p>
                <p className="mb-4">
                  I'm a <span className="text-custom-red font-semibold">Frontend Developer</span>, designer, and tech enthusiast with a passion for building
                  interfaces that feel just right. I focus on clean code, pixel-perfect design, and user-first thinking.
                </p>
                <p className="mb-4">
                  Lately, I've been diving into the data world—learning Python, SQL, and the magic of MySQL. Always exploring, whether it’s CSS animations, system design, or debugging quirky bugs.
                </p>
                <p>
                  And yes, The first rule of Fight club is: We don't talk about Fight club.
                </p>

                {/* Spotify Embed */}
                <div className="mt-6">
                  <iframe
                    style={{ borderRadius: "12px" }}
                    src="https://open.spotify.com/embed/track/5QEKnfILeCPQiwEJMRGazu?utm_source=generator"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => navigate('/about-details')}
            className="group relative px-8 py-4 bg-gradient-to-r from-custom-red to-custom-red-light rounded-lg font-bricolage font-semibold text-white shadow-lg hover:shadow-custom-red/25 transition-all duration-300 hover:scale-105 animate-glow"
          >
            <span className="relative z-10 flex items-center justify-center">
              Want More About Me
              <Code className="ml-2 group-hover:rotate-12 transition-transform" size={20} />
            </span>
          </button>
        </div>
      </div>

      <hr className="my-8" />

      {/* Scroll Text Animation */}
      <div className="w-screen overflow-hidden !m-0 !p-0">
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
