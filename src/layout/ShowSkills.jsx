import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SubHead } from "./SubHead";

export function ShowSkills({ skills }) {
  return (
    <div className="container mx-auto py-8">
      <SubHead title="Skill :-" />
      <div className="relative flex flex-col h-full">
        {skills.map((item, idx) => (
          <SkillsScroll key={idx} {...item} />
        ))}
      </div>
    </div>
  );
}
function SkillsScroll({ link, text, details }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState("top");

  function handleMouseEnter(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const mouseY = e.clientY - rect.top;
    setMousePosition(mouseY < rect.height / 2 ? "top" : "bottom");
    setIsHovered(true);
  }

  function handleMouseLeave(e) {
    setIsHovered(false);
  }

  const slideVariants = {
    enter: (position) => ({
      y: position === "top" ? "-100%" : "100%",
      transition: { duration: 0, ease: "easeInOut" },
    }),
    center: {
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (position) => ({
      y: position === "top" ? "-100%" : "100%",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div
      className="flex-1 relative overflow-hidden text-center border-t border-midText"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        to={link}
        className="flex items-center justify-center h-full relative cursor-pointer uppercase no-underline font-semibold text-darktext text-base md:text-2xl font-subHead transition-colors duration-300 py-8"
      >
        {text}
      </Link>

      <AnimatePresence custom={mousePosition}>
        {isHovered && (
          <motion.div
            initial="enter"
            animate="center"
            exit="exit"
            variants={slideVariants}
            custom={mousePosition}
            className="absolute top-0 left-0 w-full h-full bg-paper"
          >
            <div className="h-full overflow-hidden flex items-center">
              <motion.div
                initial={{ x: "0%" }}
                animate={{ x: "-50%" }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 50,
                    ease: "linear",
                  },
                }}
                className="flex items-center"
              >
                {[...Array(8)].map((_, i) => (
                  <MarqueeContent key={i} details={details} />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MarqueeContent({ details }) {
  return (
    <div className="flex items-center gap-8">
      <ul className="flex items-center gap-4">
        {details.map((skill, index) => (
          <li
            key={index}
            className="py-2 px-8 rounded-full text-sm font-medium text-black whitespace-nowrap bg-midText/20"
          >
            {skill}
          </li>
        ))}
        <span className="font-extrabold text-4xl px-4">*</span>
      </ul>
    </div>
  );
}
