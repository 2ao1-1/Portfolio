import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { ProjectCard } from "./../components/ProjectCard";

export function ProjectPresentation({ projects }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <ProjectCard
            Key={i}
            i={i}
            range={[i * 0.25, 1]}
            progress={scrollYProgress}
            targetScale={targetScale}
            src={project.img}
            {...project}
          />
        );
      })}
    </>
  );
}
