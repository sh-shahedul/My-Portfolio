import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer, FaCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and modern React interfaces with pixel-perfect designs.',
    color: 'from-cyan-400 to-blue-500',
    shadowColor: 'shadow-cyan-500/30',
  },
  {
    icon: <FaNodeJs />,
    title: 'Backend Development',
    description: 'Creating scalable Node.js servers, RESTful APIs, and robust server-side logic.',
    color: 'from-green-400 to-green-600',
    shadowColor: 'shadow-green-500/30',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Management',
    description: 'Designing efficient MongoDB databases with optimal schemas and queries.',
    color: 'from-emerald-400 to-teal-600',
    shadowColor: 'shadow-emerald-500/30',
  },
  {
    icon: <FaServer />,
    title: 'Fullstack Integration',
    description: 'Seamlessly connecting frontend and backend in complete MERN applications.',
    color: 'from-purple-400 to-indigo-600',
    shadowColor: 'shadow-purple-500/30',
  },
  {
    icon: <FaCode />,
    title: 'API Development',
    description: 'Developing secure and efficient RESTful APIs with proper authentication and authorization.',
    color: 'from-orange-400 to-red-500',
    shadowColor: 'shadow-orange-500/30',
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

const Service = () => {
  return (
    <section 
      id="service" 
      className="relative font-inter bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] text-gray-300 overflow-hidden py-20"
    >
      {/* Background Effects */}
      <FloatingParticles />
      
      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
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
        className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
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
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
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
        
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              My Services
            </motion.span>
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
            I offer comprehensive full-stack development services, transforming ideas into powerful digital solutions with modern technologies and best practices.
          </motion.p>
        </motion.div>

        {/* Services Grid with Flex Wrap */}
        <motion.div 
          className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card relative group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]"
              initial={{ opacity: 0, y: 50, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              {/* Hover Glow Effect */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 rounded-2xl blur-xl transition-opacity duration-500`}
              />

              {/* Card Container */}
              <motion.div 
                className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/50 shadow-lg transition-all duration-300 h-full flex flex-col"
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                }}
              >
                {/* Icon Container */}
                <motion.div
                  className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${service.color} ${service.shadowColor} shadow-2xl flex items-center justify-center`}
                  whileHover={{ 
                    rotate: [0, -10, 10, -10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white text-4xl">
                    {service.icon}
                  </span>
                  
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
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed text-center flex-grow">
                  {service.description}
                </p>

                {/* Bottom Accent Line */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} rounded-b-2xl`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                />

                {/* Corner Decorations */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16 opacity-10"
                  style={{
                    background: `linear-gradient(135deg, transparent 50%, currentColor 50%)`,
                  }}
                  animate={{
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              </motion.div>

              {/* Card Number Badge */}
              <motion.div
                className="absolute -top-3 -left-3 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold shadow-lg"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.4, type: "spring" }}
              >
                {index + 1}
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
          <motion.a 
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-10 py-5 rounded-full overflow-hidden font-bold text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated Background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            />
            
            {/* Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-full"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                  "0 0 40px rgba(147, 51, 234, 0.8)",
                  "0 0 20px rgba(6, 182, 212, 0.5)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />

            <span className="relative z-10 text-[#05080E] flex items-center gap-2">
              Let's Work Together
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>

            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};

export default Service;