// import React from 'react';
// import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
// import { motion } from 'framer-motion';
// import project1 from '../../assets/p1.png';
// import project2 from '../../assets/p2.png';
// import project3 from '../../assets/p3.png';
// import project4 from '../../assets/p4.png';

// const Project = () => {
  // const projects = [
  //   { 
  //     title: 'Pet Frosty ',
  //      description: 'Winter Pet Care Platform',
  //       image: project1, 
  //       github: 'https://github.com/sh-shahedul/pet-care-winter', 
  //       liveDemo: 'https://pet-frosty.netlify.app/', 
  //       offset: '' 
  //     },
  //   {  
  //       title: 'Book Crafters - NEXT.js ',
  //       description: 'Digital Book Library & Management platform',
  //       image: project2,
  //       github: 'https://github.com/sh-shahedul/Book-Crafters-Client', 
  //       liveDemo: 'https://book-crafters-client.vercel.app/', 
  //       offset: 'lg:mt-16' 
  //     },
  //   { 
  //      title: 'Course Land',
  //      description: ' E-learning platform',
  //      image: project3,
  //      github: 'https://course-land-b6150.web.app/', 
  //      liveDemo: 'https://courselandplat.netlify.app/', 
  //      offset: '' 
  //     },
  //   { title: 'Mega App Store', 
  //     description: 'Mega App Store is a digital marketplace for apps.',
  //     image: project4,
  //     github: 'https://github.com/sh-shahedul/Mega-App-Store', 
  //     liveDemo: 'https://sh-mega-app-store.netlify.app/', 
  //     offset: 'lg:mt-16' 
  //     },
  // ];

//   // Duplicate the projects array to create a seamless infinite scroll
//   const duplicatedProjects = [...projects, ...projects];

//   return (
//     <section id="project" className="bg-[#05080E] text-gray-300 font-inter flex flex-col items-center py-16">
//       <div className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
//             My <span className="text-cyan-400">Latest</span> Projects
//           </h1>
//           <p className="text-gray-400 text-base sm:text-lg">
//             Greetings, fellow digital explorers! I am a passionate and innovative developer.
//           </p>
//         </div>

//         {/* Horizontal Marquee */}
//         <div className="overflow-hidden relative">
//           <motion.div
//             className="flex gap-6"
//             animate={{ x: ['0%', '-50%'] }} // move left by 50% of the duplicated array
//             transition={{ repeat: Infinity, duration: 25, ease: 'linear' }} // continuous linear motion
//             whileHover={{}} // can stop on hover with "pause" logic if needed
//           >
//             {duplicatedProjects.map((project, idx) => (
//               <div
//                 key={idx}
//                 className={`group relative flex-shrink-0 w-72 rounded-2xl shadow-lg border border-cyan-400/20 cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${project.offset}`}
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full aspect-[3/4] object-cover rounded-2xl"
//                 />
//                 <div className="absolute bottom-0 left-0 w-full p-4 bg-[#29b6f61a] backdrop-blur-md border-t border-cyan-400/30 group-hover:bg-[#29b6f633] transition-colors duration-300 flex flex-col gap-2">
//                   <h3 className="text-lg font-bold text-cyan-400">{project.title}</h3>
//                   <p className=" text-sm font-bold text-black">{project.description}</p>
//                   <div className="flex gap-2 mt-2">
//                     <a
//                       href={project.github}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center px-2 py-1 bg-cyan-400 text-[#05080E] rounded-lg font-semibold text-xs hover:bg-cyan-500 flex items-center justify-center gap-1"
//                     >
//                       <FaGithub /> GitHub
//                     </a>
//                     <a
//                       href={project.liveDemo}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex-1 text-center px-2 py-1 bg-cyan-400 text-[#05080E] rounded-lg font-semibold text-xs hover:bg-cyan-500 flex items-center justify-center gap-1"
//                     >
//                       <FaExternalLinkAlt /> Live Demo
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Project;
import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNodeJs, FaDatabase, FaCss3Alt, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiMongodb, SiExpress, SiFirebase } from 'react-icons/si';
import { motion } from 'framer-motion';
import project1 from '../../assets/p1.png';
import project2 from '../../assets/p2.png';
import project3 from '../../assets/p3.png';
import project4 from '../../assets/p4.png';
import project5 from '../../assets/p5.png';

const Project = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const projects = [
    { 
      title: 'Spark decore',
     
      description: 'SparkDecore is a modern appointment management system for decoration companies offering  services.',
      image: project5,
      github: 'https://github.com/sh-shahedul/Spark-Decore-Client', 
      liveDemo: 'https://spark-decore.netlify.app/', 
      techStack: [
        { name: 'React.js', icon: <FaReact />, color: 'bg-blue-500/20 text-blue-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-cyan-500/20 text-cyan-400' },
        { name: 'JavaScript', icon: <div className="w-5 h-5 flex items-center justify-center">JS</div>, color: 'bg-yellow-500/20 text-yellow-400' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-500/20 text-green-400' },
         { name: 'Express.js', icon: <SiExpress />, color: 'bg-cyan-500/20 text-cyan-400' }
      ],
      features: ['App Discovery', 'User Ratings', 'Category Filtering', 'Trending Apps']
    },
    { 
      
       title: 'Pet Frosty ',
       description: ' Pet Frosty  is a Winter Pet Care Platform. React-based web app where users can explore different Sevice.',
      longDescription: 'A fully responsive e-commerce platform for toy enthusiasts with user authentication, product filtering, and secure payment integration.',
      image: project1, 
      github: 'https://github.com/sh-shahedul/pet-care-winter', 
      liveDemo: 'https://pet-frosty.netlify.app/', 
      techStack: [
        { name: 'React.js', icon: <FaReact />, color: 'bg-blue-500/20 text-blue-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-cyan-500/20 text-cyan-400' },
        { name: 'Swiper', icon: <div className="w-5 h-5 flex items-center justify-center">S</div>, color: 'bg-green-500/20 text-green-400' },
         { name: 'JavaScript', icon: <div className="w-5 h-5 flex items-center justify-center">JS</div>, color: 'bg-yellow-500/20 text-yellow-400' },
        { name: 'Axios', icon: <div className="w-5 h-5 flex items-center justify-center">A</div>, color: 'bg-purple-500/20 text-purple-400' }
      ],
      features: ['User Authentication', 'Product Filtering', 'Secure Payments', 'Responsive Design']
    },
    {  
      title: 'Book Crafters',
      description: 'Book Crafters is a modern book discovery web application with clean and user-friendly interface.',
      image: project2,
      github: 'https://github.com/sh-shahedul/Book-Crafters-Client', 
      liveDemo: 'https://book-crafters-client.vercel.app/', 
      techStack: [
        // { name: 'React.js', icon: <FaReact />, color: 'bg-blue-500/20 text-blue-400' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: 'bg-gray-500/20 text-gray-300' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-cyan-500/20 text-cyan-400' },
        { name: 'JavaScript', icon: <div className="w-5 h-5 flex items-center justify-center">JS</div>, color: 'bg-yellow-500/20 text-yellow-400' },
        { name: 'Recharts', icon: <div className="w-5 h-5 flex items-center justify-center">R</div>, color: 'bg-pink-500/20 text-pink-400' },
         { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-500/20 text-green-400' },
          { name: 'Express.js', icon: <SiExpress />, color: 'bg-cyan-500/20 text-cyan-400' }
      ],
      features: ['Book Search', 'User Reviews', 'Reading Progress', 'Book Recommendations']
    },
    { 
      title: 'Course Land',
     
      description: 'Course Land is a full-stack MERN learning platform where users can explore, enroll in, and manage online courses',
      image: project3,
      github: 'https://github.com/sh-shahedul/Course-Land', 
      liveDemo: 'https://courselandplat.netlify.app/', 
      techStack: [
        { name: 'React.js', icon: <FaReact />, color: 'bg-blue-500/20 text-blue-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-cyan-500/20 text-cyan-400' },
        { name: 'JavaScript', icon: <div className="w-5 h-5 flex items-center justify-center">JS</div>, color: 'bg-yellow-500/20 text-yellow-400' },
        { name: 'Axios', icon: <div className="w-5 h-5 flex items-center justify-center">A</div>, color: 'bg-purple-500/20 text-purple-400' },
         { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-500/20 text-green-400' },
          { name: 'Express.js', icon: <SiExpress />, color: 'bg-cyan-500/20 text-cyan-400' }
      ],
      features: ['App Discovery', 'User Ratings', 'Category Filtering', 'Trending Apps']
    },
    { 
      title: 'Mega App Store',
      description: 'Mega App Store is a digital marketplace for apps.',
     
      image: project4,
      github: 'https://github.com/sh-shahedul/Mega-App-Store', 
      liveDemo: 'https://sh-mega-app-store.netlify.app/', 
      techStack: [
        { name: 'React.js', icon: <FaReact />, color: 'bg-blue-500/20 text-blue-400' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'bg-cyan-500/20 text-cyan-400' },
        { name: 'Firebase', icon: <SiFirebase />, color: 'bg-orange-500/20 text-orange-400' },
        { name: 'MongoDB', icon: <SiMongodb />, color: 'bg-green-500/20 text-green-400' },
         { name: 'Express.js', icon: <SiExpress />, color: 'bg-cyan-500/20 text-cyan-400' }
      ],
      features: ['Appointment System', 'Health Tracking', 'Emergency Services', 'Pet Profiles']
    }
  ];

  // Calculate total pages
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  
  // Get current page projects
  const startIndex = currentPage * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  return (
    <section id="project" className="relative bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
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
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore my recent web development projects showcasing modern technologies and clean designs
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {currentProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative rounded-2xl overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-sm"
            >
              {/* Image Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050b18] via-transparent to-transparent" />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  </div>
                  <span className="px-3 py-1 text-xs font-bold bg-cyan-400/20 text-cyan-400 rounded-full">
                    Featured
                  </span>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className={`px-3 py-1.5 rounded-lg flex items-center gap-2 ${tech.color} backdrop-blur-sm`}
                      >
                        <span className="text-sm">{tech.icon}</span>
                        <span className="text-xs font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </div>



                {/* Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1"
                  >
                    <div className="relative px-4 py-3 rounded-lg bg-gradient-to-r from-cyan-400 to-blue-500 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 text-[#05080E] font-semibold flex items-center justify-center gap-2">
                        <FaExternalLinkAlt /> View Live
                      </span>
                    </div>
                  </a>
                  
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn flex-1"
                  >
                    <div className="relative px-4 py-3 rounded-lg border border-cyan-400/50 overflow-hidden">
                      <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                      <span className="relative z-10 text-white font-semibold flex items-center justify-center gap-2">
                        <FaGithub /> View Code
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Corner Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-3xl -translate-y-16 translate-x-16" />
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex flex-col items-center gap-8">
          {/* Page Dots */}
          <div className="flex items-center gap-4">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  currentPage === index
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-[#05080E] font-bold scale-110'
                    : 'bg-white/10 text-gray-400 hover:bg-white/20'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-6">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentPage === 0
                  ? 'opacity-50 cursor-not-allowed bg-white/5 text-gray-500'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              <FaArrowLeft /> Previous
            </button>

            <div className="text-gray-400 font-medium">
              Page <span className="text-cyan-400 font-bold">{currentPage + 1}</span> of <span className="text-cyan-400 font-bold">{totalPages}</span>
            </div>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages - 1}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                currentPage === totalPages - 1
                  ? 'opacity-50 cursor-not-allowed bg-white/5 text-gray-500'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Next <FaArrowRight />
            </button>
          </div>

          {/* Project Count */}
          <div className="text-center text-gray-400">
            Showing <span className="text-cyan-400 font-bold">{startIndex + 1}-{Math.min(endIndex, projects.length)}</span> of <span className="text-cyan-400 font-bold">{projects.length}</span> projects
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/sh-shahedul"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-white font-semibold hover:from-cyan-400/30 hover:to-blue-500/30 transition-all duration-300 group"
          >
            View All Projects on GitHub
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;