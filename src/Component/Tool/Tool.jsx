// import React from "react";
// import { motion } from "framer-motion";
// import { FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
// import {
//   SiVercel,
//   SiVite,
//   SiNetlify,
//   SiPostman,
//   SiJira,
//   SiCloudflare,
//   SiFirebase,
// } from "react-icons/si";
// import { VscVscode } from "react-icons/vsc";

// const tools = [
//   { name: "Git", icon: <FaGitAlt size={40} /> },
//   { name: "GitHub", icon: <FaGithub size={40} /> },
//   { name: "Vercel", icon: <SiVercel size={40} /> },
//   { name: "Vite", icon: <SiVite size={40} /> },
//   { name: "Netlify", icon: <SiNetlify size={40} /> },
//   { name: "Figma", icon: <FaFigma size={40} /> },
//   { name: "Postman", icon: <SiPostman size={40} /> },
//   { name: "VS Code", icon: <VscVscode size={40} /> },
//   { name: "Firebase", icon: <SiFirebase size={40} /> },
//   { name: "Cloudflare", icon: <SiCloudflare size={40} /> },
// ];

// const Tool = () => {
//   return (
//     <section
//       id="tools"
//       className="py-16 font-inter bg-[#05080E] text-gray-300 flex flex-col items-center justify-center p-4 sm:p-6 md:p-8"
//     >
//       <div className="w-full max-w-screen-2xl">

//         {/* Header Animation */}
//         <motion.h2
//           initial={{ opacity: 0, y: -40, scale: 0.95 }}
//           whileInView={{ opacity: 1, y: 0, scale: 1 }}
//           transition={{ duration: 0.6, ease: "easeOut" }}
//           viewport={{ once: false, amount: 0.2 }}
//           className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
//         >
//           Tools and <span className="text-cyan-400">Technology</span>
//         </motion.h2>

//         {/* Tools Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
//           {tools.map((tool, idx) => (
//             <motion.div
//               key={idx}
//               className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-cyan-500/20 bg-[#29b6f61a] backdrop-blur-md p-6 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/50 hover:border-cyan-400/50"
              
//               initial={{ opacity: 0, scale: 0.6, y: 40 }}
//               whileInView={{ opacity: 1, scale: 1, y: 0 }}
//               transition={{ duration: 0.6, ease: "easeOut", delay: idx * 0.1 }}
//               viewport={{ once: false, amount: 0.2 }}
              
//               whileHover={{
//                 scale: 1.12,
//                 y: -8,
//                 transition: { type: "spring", stiffness: 200 },
//               }}
//             >
//               {/* Icon Floating Animation */}
//               <motion.div
//                 className="text-cyan-400 group-hover:text-cyan-200 transition-colors"
//                 animate={{ rotate: [0, 10, -10, 0] }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   ease: "easeInOut",
//                 }}
//               >
//                 {tool.icon}
//               </motion.div>

//               <h3 className="text-white text-base font-semibold group-hover:text-cyan-200 transition-colors">
//                 {tool.name}
//               </h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Tool;
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
  SiFirebase,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const tools = [
  { 
    name: "Git", 
    icon: <FaGitAlt size={50} />,
    color: "from-orange-500 to-red-600",
    shadowColor: "shadow-orange-500/30"
  },
  { 
    name: "GitHub", 
    icon: <FaGithub size={50} />,
    color: "from-gray-400 to-gray-700",
    shadowColor: "shadow-gray-500/30"
  },
  { 
    name: "Vercel", 
    icon: <SiVercel size={50} />,
    color: "from-white to-gray-400",
    shadowColor: "shadow-gray-500/30"
  },
  { 
    name: "Vite", 
    icon: <SiVite size={50} />,
    color: "from-purple-400 to-blue-500",
    shadowColor: "shadow-purple-500/30"
  },
  { 
    name: "Netlify", 
    icon: <SiNetlify size={50} />,
    color: "from-teal-400 to-cyan-500",
    shadowColor: "shadow-teal-500/30"
  },
  { 
    name: "Figma", 
    icon: <FaFigma size={50} />,
    color: "from-pink-400 to-purple-500",
    shadowColor: "shadow-pink-500/30"
  },
  { 
    name: "Postman", 
    icon: <SiPostman size={50} />,
    color: "from-orange-400 to-orange-600",
    shadowColor: "shadow-orange-500/30"
  },
  { 
    name: "VS Code", 
    icon: <VscVscode size={50} />,
    color: "from-blue-400 to-blue-600",
    shadowColor: "shadow-blue-500/30"
  },
  { 
    name: "Firebase", 
    icon: <SiFirebase size={50} />,
    color: "from-yellow-400 to-orange-500",
    shadowColor: "shadow-yellow-500/30"
  },
  { 
    name: "Cloudflare", 
    icon: <SiCloudflare size={50} />,
    color: "from-orange-400 to-red-500",
    shadowColor: "shadow-orange-500/30"
  },
];

/* ================= Floating Particles ================= */
const FloatingParticles = () => {
  const particles = Array.from({ length: 50 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
          }}
          animate={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const Tool = () => {
  return (
    <section
      id="tools"
      className="relative py-20 font-inter bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] text-gray-300 overflow-hidden"
    >
      {/* Background Effects */}
      <FloatingParticles />
      
      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.4, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-sm uppercase tracking-widest text-gray-500 mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            WHAT I USE
          </motion.p>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <span className="text-white">Tools & </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Technology
            </span>
          </motion.h2>
          
          {/* Animated Underline */}
          <motion.div
            className="h-1 w-32 mx-auto bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mt-6 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Essential development tools and platforms I rely on to streamline workflow and deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Tools Grid */}
        <motion.div 
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              className="tool-card relative group"
              initial={{ opacity: 0, scale: 0.5, y: 50 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: idx * 0.08,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
              />

              {/* Card */}
              <motion.div
                className="relative flex flex-col items-center justify-center gap-4 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur-md p-6 shadow-lg transition-all duration-300 h-full"
                whileHover={{
                  scale: 1.08,
                  y: -10,
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Icon Container */}
                <motion.div
                  className={`relative p-4 rounded-2xl bg-gradient-to-br ${tool.color} ${tool.shadowColor} shadow-2xl`}
                  whileHover={{
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-white relative z-10">
                    {tool.icon}
                  </div>

                  {/* Pulse Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/50"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />

                  {/* Rotating Ring */}
                  <motion.div
                    className="absolute inset-0 -m-1"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className={`w-full h-full rounded-2xl border-2 border-dashed ${tool.color.includes('white') ? 'border-gray-400/30' : 'border-white/20'}`} />
                  </motion.div>
                </motion.div>

                {/* Tool Name */}
                <h3 className="text-white text-base font-bold text-center group-hover:text-cyan-400 transition-colors">
                  {tool.name}
                </h3>

                {/* Progress Indicator */}
                <motion.div
                  className={`w-full h-1 bg-gradient-to-r ${tool.color} rounded-full mt-2`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 + 0.3, duration: 0.8 }}
                />
                {/* Sparkle Effect */}
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.5 + idx * 0.1,
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
        
          
          
        </motion.div>
      </div>
    </section>
  );
};

export default Tool;