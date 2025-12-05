import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import project1 from '../../assets/p1.png';
import project2 from '../../assets/p2.png';
import project3 from '../../assets/p3.png';
import project4 from '../../assets/p4.png';

const Project = () => {
  const projects = [
    { 
      title: 'Pet Frosty ',
       description: 'Winter Pet Care Platform',
        image: project1, 
        github: 'https://github.com/sh-shahedul/pet-care-winter', 
        liveDemo: 'https://pet-frosty.netlify.app/', 
        offset: '' 
      },
    {  
        title: 'Book Crafters - NEXT.js ',
        description: 'Digital Book Library & Management platform',
        image: project2,
        github: 'https://github.com/sh-shahedul/Book-Crafters-Client', 
        liveDemo: 'https://book-crafters-client.vercel.app/', 
        offset: 'lg:mt-16' 
      },
    { 
       title: 'Course Land',
       description: ' E-learning platform',
       image: project3,
       github: 'https://course-land-b6150.web.app/', 
       liveDemo: 'https://courselandplat.netlify.app/', 
       offset: '' 
      },
    { title: 'Mega App Store', 
      description: 'Mega App Store is a digital marketplace for apps.',
      image: project4,
      github: 'https://github.com/sh-shahedul/Mega-App-Store', 
      liveDemo: 'https://sh-mega-app-store.netlify.app/', 
      offset: 'lg:mt-16' 
      },
  ];

  // Duplicate the projects array to create a seamless infinite scroll
  const duplicatedProjects = [...projects, ...projects];

  return (
    <section id="project" className="bg-[#05080E] text-gray-300 font-inter flex flex-col items-center py-16">
      <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Latest</span> Projects
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Greetings, fellow digital explorers! I am a passionate and innovative developer.
          </p>
        </div>

        {/* Horizontal Marquee */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }} // move left by 50% of the duplicated array
            transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} // continuous linear motion
            whileHover={{}} // can stop on hover with "pause" logic if needed
          >
            {duplicatedProjects.map((project, idx) => (
              <div
                key={idx}
                className={`group relative flex-shrink-0 w-72 rounded-2xl shadow-lg border border-cyan-400/20 cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${project.offset}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full aspect-[3/4] object-cover rounded-2xl"
                />
                <div className="absolute bottom-0 left-0 w-full p-4 bg-[#29b6f61a] backdrop-blur-md border-t border-cyan-400/30 group-hover:bg-[#29b6f633] transition-colors duration-300 flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-cyan-400">{project.title}</h3>
                  <p className=" text-sm font-bold text-black">{project.description}</p>
                  <div className="flex gap-2 mt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-2 py-1 bg-cyan-400 text-[#05080E] rounded-lg font-semibold text-xs hover:bg-cyan-500 flex items-center justify-center gap-1"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-2 py-1 bg-cyan-400 text-[#05080E] rounded-lg font-semibold text-xs hover:bg-cyan-500 flex items-center justify-center gap-1"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Project;
