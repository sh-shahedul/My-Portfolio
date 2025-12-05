import React from "react";
import { motion } from "framer-motion";
import { FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import {
  SiVercel,
  SiVite,
  SiNetlify,
  SiPostman,
  SiJira,
  SiCloudflare,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  { name: "Git", icon: <FaGitAlt size={40} /> },
  { name: "GitHub", icon: <FaGithub size={40} /> },
  { name: "Vercel", icon: <SiVercel size={40} /> },
  { name: "Vite", icon: <SiVite size={40} /> },
  { name: "Netlify", icon: <SiNetlify size={40} /> },
  { name: "Figma", icon: <FaFigma size={40} /> },
  { name: "Postman", icon: <SiPostman size={40} /> },
  { name: "VS Code", icon: <VscVscode size={40} /> },
  { name: "Jira", icon: <SiJira size={40} /> },
  { name: "Cloudflare", icon: <SiCloudflare size={40} /> },
];

const Tool = () => {
  return (
    <section
      id="tools"
      className="py-16 font-inter bg-[#05080E] text-gray-300 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
    >
      <div className="w-full max-w-screen-2xl">

        {/* Header Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
        >
          Tools and <span className="text-cyan-400">Technology</span>
        </motion.h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-cyan-500/20 bg-[#29b6f61a] backdrop-blur-md p-6 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/50 hover:border-cyan-400/50"
              
              initial={{ opacity: 0, scale: 0.6, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              
              whileHover={{
                scale: 1.12,
                y: -8,
                transition: { type: "spring", stiffness: 200 },
              }}
            >
              {/* Icon Floating Animation */}
              <motion.div
                className="text-cyan-400 group-hover:text-cyan-200 transition-colors"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {tool.icon}
              </motion.div>

              <h3 className="text-white text-base font-semibold group-hover:text-cyan-200 transition-colors">
                {tool.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tool;
