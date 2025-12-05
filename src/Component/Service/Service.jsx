import React from 'react';
import { FaReact, FaNodeJs, FaDatabase, FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  {
    icon: <FaReact />,
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and modern React interfaces.',
  },
  {
    icon: <FaNodeJs />,
    title: 'Backend Development',
    description: 'Creating scalable Node.js servers and RESTful APIs.',
  },
  {
    icon: <FaDatabase />,
    title: 'Database Management',
    description: 'Designing and managing efficient MongoDB databases.',
  },
  {
    icon: <FaServer />,
    title: 'Fullstack Integration',
    description: 'Seamlessly connecting frontend and backend in MERN projects.',
  },
];

const Service = () => {
  return (
    <section id="service" className="font-inter bg-[#05080E] text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left flex flex-col justify-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl font-bold text-white"
            >
              My <span className="text-cyan-400">Services</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              I am a dedicated MERN Stack Developer passionate about crafting high-quality, responsive, and dynamic web applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-gray-400 max-w-xl mx-auto lg:mx-0"
            >
              Every project I work on is an opportunity to innovate and solve real problems. I put my heart into writing clean, efficient code while ensuring smooth functionality and seamless user interactions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex justify-center lg:justify-start mt-4"
            >
              <a 
                href="#"
                className="inline-block bg-cyan-400 text-[#05080E] font-bold py-3 px-8 rounded-full shadow-lg shadow-cyan-400/30 hover:opacity-90 transition-opacity duration-300"
              >
                Read More
              </a>
            </motion.div>
          </div>

          {/* Right Grid of Services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card relative p-6 rounded-2xl bg-[#29b6f61a] backdrop-blur-md border border-[#29b6f633] shadow-lg shadow-cyan-500/20 flex flex-col items-center text-center"
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)' }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <span className="text-cyan-400 text-5xl mb-4">
                  {service.icon}
                </span>
                <h3 className="text-xl font-bold text-cyan-400">{service.title}</h3>
                <p className="text-gray-200 mt-2">{service.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
