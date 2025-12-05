import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs,SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={40} />},
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "Next.js", icon: <SiNextdotjs size={40} /> },
 
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 font-inter bg-[#05080E] text-gray-300 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
    >
      <div className="w-full max-w-screen-2xl">
        {/* Header Animation */}
        <motion.div
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Skills
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-cyan-500/20 bg-[#29b6f61a] backdrop-blur-md p-6 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/50 hover:border-cyan-400/50 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: idx * 0.1,
              }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{
                scale: 1.12,
                y: -8,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              {/* Icon Animation */}
              <motion.div
                className="text-cyan-400 group-hover:text-cyan-200 transition-colors"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {skill.icon}
              </motion.div>

              <h3 className="text-white text-base font-semibold group-hover:text-cyan-200 transition-colors">
                {skill.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
