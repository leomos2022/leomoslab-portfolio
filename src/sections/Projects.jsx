
import React, { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../components/constants";
import { motion, useMotionValue, useSpring } from "framer-motion";


const Projects = () => {
  const [preview, setPreview] = useState(null);
  const [isHovering, setIsHovering] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });

  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };

  return (
    <section
      id="projects"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="relative c-space section-spacing scroll-mt-24"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full "></div>
      {myProjects.map((project) => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          subDescription={project.subDescription}
          href={project.href}
          image={project.image}
          tags={project.tags}
          setPreview={setPreview}
        />
      ))}
      {/* Rectángulo que sigue el cursor solo si está sobre la sección */}
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 z-50 pointer-events-none w-32 h-20 bg-indigo-400/40 rounded-lg border border-indigo-500 shadow-lg"
          style={{ x: springX, y: springY }}
        />
      )}
      {/* Imagen de preview que sigue el cursor solo si está sobre la sección */}
      {isHovering && preview && (
        <motion.img
          src={preview}
          alt="Preview"
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
}

export default Projects
