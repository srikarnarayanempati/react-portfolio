import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SideMenu: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const goTo = (hash: string) => {
    setOpen(false);
    setTimeout(() => {
      navigate(`/${hash}`);
    }, 150);
  };

  const textVariants: Variants = {
    hiddenUp: { y: -10, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    hiddenDown: { y: 10, opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
    visible: { y: 0, opacity: 1, transition: { duration: 0.3, ease: "easeInOut" } },
  };

  return (
    <div>
      <motion.div
        className={`fixed top-4 right-4 w-[100px] h-[40px] rounded-full flex items-center justify-center cursor-pointer z-50 
                    transition-all duration-300 hover:scale-105 ${open ? "" : "bg-gradient-to-r from-custom-red to-custom-red-light"}`}
        style={{
          background: open ? "#000" : undefined,
          boxShadow: open
            ? "0 0 30px rgba(0,0,0,0.7), 0 0 70px rgba(50,50,50,0.28)"
            : "0 0 40px rgba(255,0,0,0.75), 0 0 90px rgba(255,100,100,0.45)",
          transition: "background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
        }}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <div
          className="relative w-full h-full flex items-center justify-center 
                    bg-gradient-to-r from-custom-red to-custom-red-light"
          style={{
            background: open ? "transparent" : undefined,
            borderRadius: "9999px",
          }}
        >
          <AnimatePresence mode="wait">
            {!open && (
              <motion.span
                key="menu"
                variants={textVariants}
                initial="hiddenUp"
                animate="visible"
                exit="hiddenDown"
                className="absolute font-bold text-white"
              >
                MENU
              </motion.span>
            )}
            {open && (
              <motion.span
                key="close"
                variants={textVariants}
                initial="hiddenDown"
                animate="visible"
                exit="hiddenUp"
                className="absolute font-bold text-white"
              >
                CLOSE
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

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
              boxShadow: "0 0 30px rgba(255, 0, 0, 0.6), 0 0 50px rgba(255, 100, 100, 0.4)",
            }}
            aria-hidden={!open}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.4 } }}
              exit={{ opacity: 0 }}
              className="p-12 flex flex-col gap-3 font-bold text-4xl md:text-4xl text-white font-bricolage"
            >
              <button onClick={() => goTo("#hero")} className="hover:text-black text-left">
                HOME
              </button>
              <button onClick={() => goTo("#about")} className="hover:text-black text-left">
                ABOUT
              </button>
              <button onClick={() => goTo("#projects")} className="hover:text-black text-left">
                PROJECTS
              </button>
              <button onClick={() => goTo("#resume")} className="hover:text-black text-left">
                RESUME
              </button>
              <button onClick={() => goTo("#contact")} className="hover:text-black text-left">
                CONTACT
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideMenu;
