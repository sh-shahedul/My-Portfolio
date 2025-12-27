// import React from "react";
// import { FaSchool, FaRegStar, FaUniversity } from "react-icons/fa";
// import { motion } from "framer-motion";

// const iconMap = {
//   school: <FaSchool className="w-6 h-6" />,
//   star: <FaRegStar className="w-6 h-6" />,
//   university: <FaUniversity className="w-6 h-6" />,
// };

// const timeline = [
//   {
//     title: "Bachelor Of Science",
//     institution: "Northern University Bangladesh, Ashkona Dhaka",
//     period: "March 2023 - January 2027",
//     icon: "university",
//     items: [
//       "NUB in Computer Science & Engineering",
//       "Built several Mern-stack projects",
//     ],
//   },
//   {
//     title: "Higher Secondary Certificate",
//     institution: "National College of Education, Narsingdi, Bangladesh",
//     period: "Jul 2018 - Jan 2020",
//     icon: "school",
//     items: ["Completed HSC in science branch"],
//   },
//   {
//     title: "Secondary School Certificate",
//     institution: "Seraj Nagar M.A. pilot model high School, Raipura, Bangladesh",
//     period: "Jan 2010 - Jun 2018",
//     icon: "star",
//     items: ["Completed schooling", "Graduated in 2018"],
//   },
// ];

// const cardVariant = (reverse) => ({
//   hidden: { opacity: 0, x: reverse ? 80 : -80, rotate: -3 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     rotate: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// });

// const Education = () => {
//   return (
//     <section id="education" className="bg-[#05080E] font-inter text-gray-300 py-20">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">

//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <p className="text-sm uppercase tracking-widest text-gray-500">
//             WHAT I HAVE DONE
//           </p>
//           <motion.h2
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 1 }}
//             className="text-4xl sm:text-5xl font-bold text-white mt-2"
//           >
//             Education
//           </motion.h2>
//         </div>

//         {/* Timeline */}
//         <div className="relative max-w-5xl mx-auto">

//           {/* Center line animation */}
//           <motion.div
//             initial={{ height: 0 }}
//             whileInView={{ height: "100%" }}
//             transition={{ duration: 1.5, ease: "easeInOut" }}
//             viewport={{ once: true }}
//             className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b 
//                        from-cyan-500/70 via-cyan-500/30 to-cyan-500/70 rounded-full"
//           ></motion.div>

//           <div className="space-y-12 md:space-y-20">
//             {timeline.map((item, index) => {
//               const reverse = index % 2 !== 0;

//               return (
//                 <motion.div
//                   key={index}
//                   variants={cardVariant(reverse)}
//                   initial="hidden"
//                   whileInView="visible"
//                   viewport={{ once: false, amount: 0.3 }}
//                   className={`relative flex flex-col md:flex-row items-start md:items-center 
//                     ${reverse ? "md:flex-row-reverse" : ""}`}
//                 >

//                   {/* Icon + Period */}
//                   <motion.div
//                     initial={{ scale: 0.5, opacity: 0 }}
//                     whileInView={{ scale: 1, opacity: 1 }}
//                     transition={{ duration: 0.5 }}
//                     className="flex flex-col items-center md:items-start md:w-1/2"
//                   >
//                     <div className="flex items-center space-x-2 mb-4 md:mb-0">
//                       <motion.div
//                         animate={{ scale: [1, 1.1, 1] }}
//                         transition={{ duration: 2, repeat: Infinity }}
//                         className="relative p-4 rounded-full bg-cyan-900/20 border border-cyan-400/40 
//                                    shadow-lg shadow-cyan-500/40"
//                       >
//                         <div className="absolute inset-0 rounded-full bg-cyan-400 blur-xl opacity-30"></div>
//                         <div className="relative">{iconMap[item.icon]}</div>
//                       </motion.div>

//                       <span className="text-sm font-medium bg-cyan-900/30 px-3 py-1 
//                                        rounded-full backdrop-blur-sm border border-cyan-400/30 
//                                        text-cyan-100 shadow-sm">
//                         {item.period}
//                       </span>
//                     </div>
//                   </motion.div>

//                   {/* Card */}
//                   <motion.div
//                     whileHover={{ scale: 1.05, y: -5 }}
//                     transition={{ type: "spring", stiffness: 150 }}
//                     className={`md:w-1/2 w-full bg-[#29b6f61a] backdrop-blur-md border border-[#29b6f633] 
//                                rounded-3xl p-6 shadow-lg text-white hover:shadow-cyan-500/50
//                                ${reverse ? "md:mr-8" : "md:ml-8"}`}
//                   >
//                     <h3 className="text-2xl font-bold text-cyan-400">{item.title}</h3>
//                     <p className="text-sm text-cyan-300 mt-1">{item.institution}</p>

//                     <ul className="mt-4 list-disc list-inside text-gray-200 space-y-1">
//                       {item.items.map((listItem, i) => (
//                         <motion.li
//                           key={i}
//                           initial={{ opacity: 0, x: -10 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           transition={{ delay: i * 0.15 }}
//                         >
//                           {listItem}
//                         </motion.li>
//                       ))}
//                     </ul>
//                   </motion.div>

//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Education;
import React from "react";
import { FaSchool, FaRegStar, FaUniversity, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";

const iconMap = {
  school: <FaSchool className="w-6 h-6" />,
  star: <FaRegStar className="w-6 h-6" />,
  university: <FaUniversity className="w-6 h-6" />,
};

const timeline = [
  {
    title: "Bachelor Of Science",
    institution: "Northern University Bangladesh, Ashkona Dhaka",
    period: "March 2023 - January 2027",
    icon: "university",
    items: [
      "NUB in Computer Science & Engineering",
      "Built several MERN-stack projects",
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    title: "Higher Secondary Certificate",
    institution: "National College of Education, Narsingdi, Bangladesh",
    period: "Jul 2018 - Jan 2020",
    icon: "school",
    items: ["Completed HSC in science branch"],
    color: "from-green-400 to-emerald-500",
  },
  {
    title: "Secondary School Certificate",
    institution: "Seraj Nagar M.A. pilot model high School, Raipura, Bangladesh",
    period: "Jan 2010 - Jun 2018",
    icon: "star",
    items: ["Completed schooling", "Graduated in 2018"],
    color: "from-purple-400 to-pink-500",
  },
];

/* ================= Floating Particles ================= */
const FloatingParticles = () => {
  const particles = Array.from({ length: 40 });
  
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

const Education = () => {
  return (
    <section 
      id="education" 
      className="relative bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] font-inter text-gray-300 py-20 overflow-hidden"
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
            WHAT I HAVE DONE
          </motion.p>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Education
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
            My academic journey and educational milestones that shaped my career in technology.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">

          {/* Center line animation */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b 
                       from-cyan-500/70 via-blue-500/50 to-purple-500/70 rounded-full shadow-lg shadow-cyan-400/50"
          >
            {/* Animated Dots on Timeline */}
            {timeline.map((_, index) => (
              <motion.div
                key={index}
                className="absolute w-4 h-4 bg-cyan-400 rounded-full -left-1.5 shadow-lg shadow-cyan-400/50"
                style={{ top: `${(index / (timeline.length - 1)) * 100}%` }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                viewport={{ once: true }}
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>

          <div className="space-y-12 md:space-y-20">
            {timeline.map((item, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6
                    ${reverse ? "md:flex-row-reverse" : ""}`}
                >

                  {/* Icon + Period Side */}
                  <div className={`flex flex-col md:w-1/2 ${reverse ? "md:items-end" : "md:items-start"}`}>
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0, rotate: -180 }}
                      whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
                      transition={{ duration: 0.6, type: "spring" }}
                      viewport={{ once: true }}
                      className="flex flex-col items-center gap-3"
                    >
                      {/* Icon with Gradient */}
                      <motion.div
                        className={`relative p-5 rounded-2xl bg-gradient-to-br ${item.color} shadow-2xl`}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: [0, -5, 5, -5, 0],
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-white relative z-10">{iconMap[item.icon]}</div>
                        
                        {/* Pulse Effect */}
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

                        {/* Glow */}
                        <motion.div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.color} blur-xl opacity-50`}
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                          }}
                        />
                      </motion.div>

                      {/* Period Badge */}
                      <motion.span 
                        className={`text-sm font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent px-4 py-2 
                                   rounded-full backdrop-blur-sm border border-cyan-400/30 bg-white/5 shadow-lg whitespace-nowrap`}
                        initial={{ opacity: 0, x: reverse ? 20 : -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {item.period}
                      </motion.span>
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, x: reverse ? -50 : 50, rotateY: reverse ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="md:w-1/2 w-full group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative bg-white/5 backdrop-blur-md border border-cyan-400/20 hover:border-cyan-400/50 
                               rounded-2xl p-8 shadow-lg transition-all duration-300 overflow-hidden"
                    >
                      {/* Hover Glow Effect */}
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                      />

                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {item.title}
                          </h3>
                          <motion.div
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          >
                            <FaGraduationCap className="text-cyan-400 text-2xl opacity-50" />
                          </motion.div>
                        </div>
                        
                        <p className="text-sm text-cyan-300 mb-4 leading-relaxed">
                          {item.institution}
                        </p>

                        <ul className="space-y-2">
                          {item.items.map((listItem, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 + i * 0.1 }}
                              viewport={{ once: true }}
                              className="flex items-start gap-2 text-gray-300"
                            >
                              <motion.span
                                className="text-cyan-400 mt-1.5 flex-shrink-0"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                              >
                                •
                              </motion.span>
                              <span>{listItem}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Bottom Accent Line */}
                      <motion.div
                        className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.color}`}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                      />

                      {/* Corner Decoration */}
                      <motion.div
                        className="absolute top-0 right-0 w-20 h-20 opacity-5"
                        style={{
                          background: `linear-gradient(135deg, transparent 50%, currentColor 50%)`,
                        }}
                        animate={{
                          opacity: [0.05, 0.15, 0.05],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                        }}
                      />

                      {/* Shimmer Effect */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      />
                    </motion.div>
                  </motion.div>

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;