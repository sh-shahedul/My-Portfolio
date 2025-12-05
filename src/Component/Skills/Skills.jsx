import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaDocker,
} from "react-icons/fa";

const skills = [
  { name: "HTML5", icon: <FaHtml5 size={40} /> },
  { name: "CSS3", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <FaJs size={40} /> },
  { name: "Python", icon: <FaPython size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "SQL", icon: <FaDatabase size={40} /> },
  { name: "Docker", icon: <FaDocker size={40} /> },
];

const Skills = () => {
  return (
    <section className="py-16 font-inter bg-[#05080E] text-gray-300 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            My Skills
          </h2>
          <p className="mt-2 text-gray-400 text-lg">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-cyan-500/20 bg-[#29b6f61a] backdrop-blur-md p-6 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/50 hover:border-cyan-400/50 hover:bg-[#29b6f633]"
            >
              <div className="text-cyan-400 group-hover:text-cyan-200 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-white text-base font-semibold group-hover:text-cyan-200 transition-colors">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
