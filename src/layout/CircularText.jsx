import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

function getRotationTransition(duration, from, loop = true) {
  return {
    from: from,
    to: from + 360,
    ease: "linear",
    duration: duration,
    type: "tween",
    repeat: loop ? Infinity : 0,
  };
}

function getTransition(duration, from) {
  return {
    rotate: getRotationTransition(duration, from),
    scale: { type: "spring", damping: 20, stiffness: 300 },
  };
}

export default function CircularText({
  children,
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const [currentRotation, setCurrentRotation] = useState(0);

  useEffect(() => {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spinDuration, controls]);

  function handleHoverStart() {
    if (!onHover) return;
    switch (onHover) {
      case "slowDown":
        controls.start({
          rotate: currentRotation + 360,
          scale: 1,
          transition: getTransition(spinDuration * 2, currentRotation),
        });
        break;
      case "speedUp":
        controls.start({
          rotate: currentRotation + 360,
          scale: 1,
          transition: getTransition(spinDuration / 4, currentRotation),
        });
        break;
      case "pause":
        controls.stop();
        break;
      case "goBonkers":
        controls.start({
          rotate: currentRotation + 360,
          scale: 0.8,
          transition: getTransition(spinDuration / 20, currentRotation),
        });
        break;
      default:
        break;
    }
  }

  function handleHoverEnd() {
    controls.start({
      rotate: currentRotation + 360,
      scale: 1,
      transition: getTransition(spinDuration, currentRotation),
    });
  }

  return (
    <div className={`relative mx-auto w-16 h-16 md:w-24 md:h-24 ${className}`}>
      <motion.div
        initial={{ rotate: 0 }}
        animate={controls}
        className={`absolute inset-0 rounded-full text-mainlines text-center cursor-pointer`}
        onUpdate={(latest) => setCurrentRotation(Number(latest?.rotate ?? 0))}
        onMouseEnter={handleHoverStart}
        onMouseLeave={handleHoverEnd}
      >
        {letters.map((letter, i) => {
          const rotation = (360 / letters.length) * i;
          const factor = Number((Math.PI / letters.length).toFixed(0));
          const x = factor * i;
          const y = factor * i;
          const transform = `rotateZ(${rotation}deg) translate3d(${x}px,${y}px,0)`;
          return (
            <span
              key={i}
              className="absolute inline-block inset-0 text-sm transition-all duration-500 ease-[cubic-bezier(0,0,0,1)]"
              style={{ transform, WebkitTransform: transform }}
            >
              {letter}
            </span>
          );
        })}
      </motion.div>
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none w-full h-full">
        {children}
      </div>
    </div>
  );
}
