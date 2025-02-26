import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const projects = [
  {
    image: "/photos/projects/1.jpg",
    name: "Project Alpha",
    description: "A web app for task management.",
  },
  {
    image: "/photos/projects/2.jpg",
    name: "Project Beta",
    description: "An AI-powered chatbot.",
  },
  {
    image: "/photos/projects/3.jpg",
    name: "Project Gamma",
    description: "A mobile app for fitness tracking.",
  },
  {
    image: "/photos/projects/4.jpg",
    name: "Project Delta",
    description: "A finance management tool.",
  },
  {
    image: "/photos/projects/5.jpg",
    name: "Project Epsilon",
    description: "A social media analytics platform.",
  },
];

export default function Projects() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const xTransform = useTransform(scrollYProgress, [0, 1], ["0%", "-400vw"]);

  return (
    <div className="w-[98vw]">
      <header className="h-[70vh] flex justify-center items-center">
        <h2 className="text-5xl font-bold tracking-tight text-center">
          Featured Projects
        </h2>
      </header>
      <section ref={containerRef} className="relative h-[500vh]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.ul style={{ x: xTransform }} className="flex">
            {projects.map((project, index) => (
              <li
                key={index}
                className="flex flex-col items-center justify-center w-screen h-screen flex-none"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-72 h-96"
                />
                <h3 className="text-4xl font-bold relative bottom-4">
                  {project.name}
                </h3>
                <p className="text-lg text-gray-600 text-center w-3/4">
                  {project.description}
                </p>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>
      <footer className="h-[70vh] flex justify-center items-center">
        <p>Showcasing our latest projects</p>
      </footer>
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed left-0 right-0 bottom-12 h-1 bg-purple-600 origin-left"
      />
    </div>
  );
}
