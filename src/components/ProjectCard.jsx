import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

export function ProjectCard({
  i,
  img,
  title,
  description,
  url,
  range,
  progress,
  targetScale,
  repo,
  skill,
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  // const scale = useTransform(progress, range, [1, targetScale]);
  const scale = useTransform(progress, range, [1, 1]);

  return (
    <div
      ref={container}
      className="h-screen w-full flex justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh+${i * 25}px)` }}
        className="flex flex-col h-[85%] md:h-[95%] w-full border items-start bg-paper"
      >
        <div className="relative w-full h-full overflow-hidden ">
          <motion.div className="w-full h-full" style={{ scale: imageScale }}>
            <div className="border-b border-lightText grayscale-100">
              <img src={img} alt={title} />
            </div>
          </motion.div>
        </div>
        <div className="md:columns-2 gap-10 px-4 py-8">
          <h2 className="font-subHead text-4xl pb-4">{title}</h2>
          <p>{description}</p>
          <div>
            <h4 className="font-semibold mb-2">Skills:</h4>
            <ul className="flex flex-wrap gap-2">
              {skill.map((skill, i) => (
                <li key={i} className="skill text-sm rounded-full bg-midText">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-4 py-8">
            <button className="slideUp border rounded-full py-1 px-4 cursor-pointer">
              <Link to={url}>Demo</Link>
            </button>
            <button className="slideUp border rounded-full py-1 px-4 cursor-pointer">
              <Link to={repo}>Repo</Link>
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
