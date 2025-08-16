import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

const SideMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const btnTextRef = useRef<HTMLDivElement>(null);

// GSAP text swap animation
useEffect(() => {
  if (btnTextRef.current) {
    const [menuText, closeText] = btnTextRef.current.children as unknown as HTMLElement[];

    if (open) {
      gsap.to(menuText, { y: -20, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.fromTo(
        closeText,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, delay: 0.15, ease: "power2.inOut" }
      );
    } else {
      gsap.to(closeText, { y: 20, opacity: 0, duration: 0.3, ease: "power2.inOut" });
      gsap.fromTo(
        menuText,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, delay: 0.15, ease: "power2.inOut" }
      );
    }
  }
}, [open]);


  // Close menu after clicking a link
  const handleNavClick = () => setOpen(false);

  return (
    <div>
      {/* Button */}
      <motion.div
        className={`fixed top-4 right-4 w-[100px] h-[40px] rounded-full flex items-center justify-center cursor-pointer perspective-[600px] z-50 
                    transition-all duration-300 hover:scale-105 ${open ? '' : 'bg-gradient-to-r from-custom-red to-custom-red-light'}`}
        style={{
          background: open ? "#000" : undefined,
          boxShadow: open
            ? "0 0 30px rgba(0,0,0,0.7), 0 0 70px rgba(50,50,50,0.28)" 
            : "0 0 40px rgba(255,0,0,0.75), 0 0 90px rgba(255,100,100,0.45)", 
          transition: "background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
        }}
        onClick={() => setOpen(prev => !prev)}
        aria-expanded={open}
      >
        <div
          ref={btnTextRef}
          className="relative w-full h-full flex items-center justify-center 
                    bg-gradient-to-r from-custom-red to-custom-red-light"
          style={{
            transformStyle: "preserve-3d",
            background: open ? "transparent" : undefined, 
            borderRadius: "9999px",
          }}
        >
        <span
          className="absolute font-bold"
          style={{
            color: "#ffffffff",
            opacity: 1,
          }}
        >
          MENU
        </span>
        <span
          className="absolute font-bold"
          style={{
            color: "#fff",
            opacity: 0,
          }}
        >
          CLOSE
        </span>

        </div>
      </motion.div>

      {/* Expanding Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="panel"
            initial={{
              scaleX: 0.2,
              scaleY: 0.066,
              top: "1rem",
              right: "1rem",
              opacity: 0,
            }}
            animate={{
              scaleX: 1,
              scaleY: 1,
              top: "0.6rem",
              right: "0.6rem",
              opacity: 1,
              transition: {
                duration: 0.7,
                ease: [0.2, 0.9, 0.3, 1],
              },
            }}
            exit={{
              scaleX: 0.2,
              scaleY: 0.066,
              top: "1rem",
              right: "1rem",
              opacity: 0,
              transition: {
                duration: 0.6,
                ease: [0.2, 0.9, 0.3, 1],
              },
            }}
            className="fixed w-[400px] h-[350px] bg-gradient-to-r from-custom-red to-custom-red-light rounded-2xl overflow-hidden z-40 shadow-lg"
            style={{
              transformOrigin: "top right",
              boxShadow: "0 0 30px rgba(255, 0, 0, 0.6), 0 0 50px rgba(255, 100, 100, 0.4)"
            }}
            aria-hidden={!open}
          >
            {/* Content inside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              exit={{ opacity: 0 }}
              className="p-12 flex flex-col gap-3 font-bold text-4xl md:text-4xl text-white font-bricolage"
            >
              <a href="#hero" onClick={handleNavClick} className="hover:text-black">
                HOME
              </a>
              <a href="#about" onClick={handleNavClick} className="hover:text-black">
                ABOUT
              </a>
              <a href="#projects" onClick={handleNavClick} className="hover:text-black">
                PROJECTS
              </a>
              <a href="#resume" onClick={handleNavClick} className="hover:text-black">
                RESUME
              </a>
              <a href="#contact" onClick={handleNavClick} className="hover:text-black">
                CONTACT
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
