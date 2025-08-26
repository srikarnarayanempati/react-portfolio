import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DivideIcon as LucideIcon } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface TimelineEvent {
  id?: string;
  year: string;
  title: string;
  description: string;
  icon: typeof LucideIcon;
  color: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const eventsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the timeline line
      gsap.fromTo(lineRef.current,
        { height: 0 },
        {
          height: "100%",
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 70%",
            end: "bottom 30%",
            scrub: 1
          }
        }
      );

      // Animate each event
      eventsRef.current.forEach((event, index) => {
        if (event) {
          gsap.fromTo(event,
            { 
              opacity: 0, 
              x: index % 2 === 0 ? -50 : 50,
              scale: 0.8
            },
            {
              opacity: 1,
              x: 0,
              scale: 1,
              duration: 0.8,
              ease: "back.out(1.7)",
              scrollTrigger: {
                trigger: event,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
              }
            }
          );
        }
      });
    }, timelineRef);

    return () => ctx.revert();
  }, [events]);

  const addToEventRefs = (el: HTMLDivElement | null) => {
    if (el && !eventsRef.current.includes(el)) {
      eventsRef.current.push(el);
    }
  };

  return (
    <div ref={timelineRef} className="relative max-w-4xl mx-auto">
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-custom-dark h-full">
        <div 
          ref={lineRef}
          className="w-full bg-gradient-to-b from-custom-red via-custom-orange to-custom-red rounded-full"
          style={{ height: 0 }}
        ></div>
      </div>

      {/* Timeline Events */}
      <div className="space-y-12">
        {events.map((event, index) => (
          <div
            key={event.id || `${event.year}-${index}`}
            ref={addToEventRefs}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'justify-start' : 'justify-end'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${event.color} flex items-center justify-center border-4 border-custom-black shadow-lg`}>
                <event.icon className="text-white" size={24} />
              </div>
            </div>

            {/* Event Content */}
            <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
              <div className="p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 hover:border-custom-red/50 transition-all duration-300 hover:scale-105 group">
                <div className={`flex items-center mb-4 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                  <span className="text-custom-orange font-space-mono font-bold text-lg bg-custom-black/30 px-3 py-1 rounded-full">
                    {event.year}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 font-instrument-sans group-hover:text-custom-red transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-gray-300 font-bricolage leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;