// // import React from "react";
// // import { motion } from "framer-motion";
// // import aboutImg from "../../assets/port.png";
// // import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

// // /* ================= Floating Particles ================= */
// // const FloatingParticles = () => {
// //   const particles = Array.from({ length: 30 });
  
// //   return (
// //     <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //       {particles.map((_, i) => (
// //         <motion.div
// //           key={i}
// //           className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
// //           initial={{
// //             x: Math.random() * 100 + "%",
// //             y: Math.random() * 100 + "%",
// //           }}
// //           animate={{
// //             x: Math.random() * 100 + "%",
// //             y: Math.random() * 100 + "%",
// //             opacity: [0.2, 0.5, 0.2],
// //           }}
// //           transition={{
// //             duration: Math.random() * 15 + 10,
// //             repeat: Infinity,
// //             ease: "linear",
// //           }}
// //         />
// //       ))}
// //     </div>
// //   );
// // };

// // /* ================= Animated Counter ================= */
// // const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
// //   const [count, setCount] = React.useState(0);

// //   React.useEffect(() => {
// //     let start = 0;
// //     const increment = end / (duration * 60);
// //     const timer = setInterval(() => {
// //       start += increment;
// //       if (start >= end) {
// //         setCount(end);
// //         clearInterval(timer);
// //       } else {
// //         setCount(Math.floor(start));
// //       }
// //     }, 1000 / 60);

// //     return () => clearInterval(timer);
// //   }, [end, duration]);

// //   return (
// //     <span>
// //       {count}
// //       <span className="text-cyan-400">{suffix}</span>
// //     </span>
// //   );
// // };

// // const AboutMe = () => {
// //   return (
// //     <section
// //       id="about"
// //       className="relative py-20 bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] overflow-hidden"
// //     >
// //       {/* Background Elements */}
// //       <FloatingParticles />
      
// //       {/* Glowing Orbs */}
// //       <motion.div
// //         className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
// //         animate={{
// //           scale: [1, 1.3, 1],
// //           x: [0, -50, 0],
// //           y: [0, 50, 0],
// //         }}
// //         transition={{
// //           duration: 10,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       />
      
// //       <motion.div
// //         className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
// //         animate={{
// //           scale: [1, 1.2, 1],
// //           x: [0, 40, 0],
// //           y: [0, -40, 0],
// //         }}
// //         transition={{
// //           duration: 12,
// //           repeat: Infinity,
// //           ease: "easeInOut",
// //         }}
// //       />

// //       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

// //         {/* ================= LEFT IMAGE ================= */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -80, rotateY: -30 }}
// //           whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
// //           transition={{ duration: 1, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //           className="flex justify-center lg:justify-start"
// //         >
// //           <div className="relative">
// //             {/* Animated Rings */}
// //             <motion.div
// //               className="absolute inset-0 -m-8"
// //               animate={{ rotate: 360 }}
// //               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
// //             >
// //               <div className="w-full h-full rounded-2xl border-2 border-dashed border-cyan-400/30" />
// //             </motion.div>

// //             <motion.div
// //               className="absolute inset-0 -m-12"
// //               animate={{ rotate: -360 }}
// //               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
// //             >
// //               <div className="w-full h-full rounded-2xl border-2 border-dotted border-purple-400/20" />
// //             </motion.div>

// //             {/* Glow Effects */}
// //             <motion.div
// //               className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-2xl"
// //               animate={{
// //                 scale: [1, 1.1, 1],
// //                 opacity: [0.2, 0.4, 0.2],
// //               }}
// //               transition={{ duration: 4, repeat: Infinity }}
// //             />

// //             {/* Image Container */}
// //             <motion.div
// //               className="relative p-2 rounded-2xl border-4 border-cyan-400 overflow-hidden bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-sm"
// //               whileHover={{ scale: 1.05, rotate: 2 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //               style={{
// //                 boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
// //               }}
// //             >
// //               <img
// //                 src={aboutImg}
// //                 alt="About Me"
// //                 className="relative z-10 w-[300px] sm:w-[360px] rounded-xl object-cover"
// //               />

// //               {/* Sparkle Effects */}
// //               {[...Array(5)].map((_, i) => (
// //                 <motion.div
// //                   key={i}
// //                   className="absolute w-2 h-2 bg-white rounded-full"
// //                   style={{
// //                     top: `${Math.random() * 100}%`,
// //                     left: `${Math.random() * 100}%`,
// //                   }}
// //                   animate={{
// //                     scale: [0, 1, 0],
// //                     opacity: [0, 1, 0],
// //                   }}
// //                   transition={{
// //                     duration: 2,
// //                     repeat: Infinity,
// //                     delay: i * 0.4,
// //                   }}
// //                 />
// //               ))}

// //               {/* Shimmer Effect */}
// //               <motion.div
// //                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
// //                 animate={{
// //                   x: ["-100%", "100%"],
// //                 }}
// //                 transition={{
// //                   duration: 3,
// //                   repeat: Infinity,
// //                   repeatDelay: 2,
// //                 }}
// //               />
// //             </motion.div>

// //             {/* Floating Tech Icons */}
// //             <motion.div
// //               className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-2xl shadow-2xl"
// //               animate={{
// //                 y: [0, -15, 0],
// //                 rotate: [0, 5, 0],
// //               }}
// //               transition={{ duration: 3, repeat: Infinity }}
// //             >
// //               <FaCode className="text-3xl text-white" />
// //             </motion.div>

// //             <motion.div
// //               className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-2xl"
// //               animate={{
// //                 y: [0, 15, 0],
// //                 rotate: [0, -5, 0],
// //               }}
// //               transition={{ duration: 3.5, repeat: Infinity }}
// //             >
// //               <FaLaptopCode className="text-3xl text-white" />
// //             </motion.div>

// //             <motion.div
// //               className="absolute top-1/2 -right-8 bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-2xl"
// //               animate={{
// //                 x: [0, 10, 0],
// //                 scale: [1, 1.1, 1],
// //               }}
// //               transition={{ duration: 4, repeat: Infinity }}
// //             >
// //               <FaRocket className="text-3xl text-white" />
// //             </motion.div>
// //           </div>
// //         </motion.div>

// //         {/* ================= RIGHT CONTENT ================= */}
// //         <motion.div
// //           initial={{ opacity: 0, x: 80 }}
// //           whileInView={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 1, ease: "easeOut" }}
// //           viewport={{ once: true }}
// //           className="space-y-6"
// //         >
// //           {/* Title with Animation */}
// //           <motion.div
// //             initial={{ opacity: 0, y: -20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.2 }}
// //             viewport={{ once: true }}
// //           >
// //             <motion.h2 
// //               className="text-4xl sm:text-5xl font-extrabold tracking-wide inline-block"
// //               whileHover={{ scale: 1.05 }}
// //             >
// //               <motion.span
// //                 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
// //                 animate={{
// //                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
// //                 }}
// //                 transition={{ duration: 5, repeat: Infinity }}
// //                 style={{ backgroundSize: "200% 200%" }}
// //               >
// //                 ABOUT ME
// //               </motion.span>
// //             </motion.h2>
            
// //             {/* Animated Underline */}
// //             <motion.div
// //               className="h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-2"
// //               initial={{ width: 0 }}
// //               whileInView={{ width: "100%" }}
// //               transition={{ delay: 0.5, duration: 0.8 }}
// //               viewport={{ once: true }}
// //             />
// //           </motion.div>

// //           {/* Description with Stagger Animation */}
// //           <motion.div
// //             initial={{ opacity: 0 }}
// //             whileInView={{ opacity: 1 }}
// //             transition={{ delay: 0.4 }}
// //             viewport={{ once: true }}
// //             className="space-y-4"
// //           >
// //             <motion.p 
// //               className="text-gray-300 leading-relaxed relative group"
// //               whileHover={{ x: 5 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <motion.span
// //                 className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-full"
// //                 initial={{ scaleY: 0 }}
// //                 whileInView={{ scaleY: 1 }}
// //                 transition={{ delay: 0.5 }}
// //                 viewport={{ once: true }}
// //               />
// //               <span className="block pl-4">
// //                 Hello, I'm <span className="font-bold  bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Shahedul Hoque</span>.
// //                 I'm a passionate MERN Stack Developer with a strong focus on building
// //                 modern, clean, and scalable web applications. I work with JavaScript,
// //                 React, Node.js, Express, and MongoDB to create fast, secure, and
// //                 user-friendly full-stack solutions.
// //               </span>
// //             </motion.p>

// //             <motion.p 
// //               className="text-gray-300 leading-relaxed relative group"
// //               whileHover={{ x: 5 }}
// //               transition={{ type: "spring", stiffness: 300 }}
// //             >
// //               <motion.span
// //                 className="absolute left-0 top-0 bottom-0 w-1 bg-purple-400 rounded-full"
// //                 initial={{ scaleY: 0 }}
// //                 whileInView={{ scaleY: 1 }}
// //                 transition={{ delay: 0.7 }}
// //                 viewport={{ once: true }}
// //               />
// //               <span className="block pl-4">
// //                 My coding philosophy is simple: write clean code, build meaningful
// //                 projects, and improve every single day.
// //               </span>
// //             </motion.p>
// //           </motion.div>

// //           {/* ================= ANIMATED STATS ================= */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 0.6 }}
// //             viewport={{ once: true }}
// //             className="grid grid-cols-3 gap-6 pt-6"
// //           >
// //             {[
// //               { end: 30, suffix: "+", label: "Completed Projects" },
// //               { end: 98, suffix: "%", label: "Client Satisfaction" },
// //               { end: 1, suffix: "+", label: "Years of Experience" },
// //             ].map((stat, i) => (
// //               <motion.div
// //                 key={i}
// //                 className="relative group"
// //                 initial={{ opacity: 0, scale: 0.5 }}
// //                 whileInView={{ opacity: 1, scale: 1 }}
// //                 transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
// //                 viewport={{ once: true }}
// //                 whileHover={{ scale: 1.1, y: -5 }}
// //               >
// //                 {/* Glow Effect */}
// //                 <motion.div
// //                   className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
// //                   transition={{ duration: 0.3 }}
// //                 />
                
// //                 <div className="relative bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 hover:border-cyan-400/50 transition-all">
// //                   <motion.h3 
// //                     className="text-3xl sm:text-4xl font-extrabold text-white"
// //                     initial={{ opacity: 0 }}
// //                     whileInView={{ opacity: 1 }}
// //                     viewport={{ once: true }}
// //                   >
// //                     <AnimatedCounter end={stat.end} suffix={stat.suffix} />
// //                   </motion.h3>
// //                   <p className="text-xs sm:text-sm text-gray-400 mt-1">
// //                     {stat.label}
// //                   </p>
                  
// //                   {/* Progress Bar */}
// //                   <motion.div
// //                     className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-3"
// //                     initial={{ width: 0 }}
// //                     whileInView={{ width: "100%" }}
// //                     transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
// //                     viewport={{ once: true }}
// //                   />
// //                 </div>
// //               </motion.div>
// //             ))}
// //           </motion.div>

// //           {/* CTA Button */}
// //           <motion.div
// //             initial={{ opacity: 0, y: 20 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             transition={{ delay: 1.2 }}
// //             viewport={{ once: true }}
// //             className="pt-4"
// //           >
// //             <motion.button
// //               className="group relative px-8 py-4 rounded-full overflow-hidden font-bold"
// //               whileHover={{ scale: 1.05 }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               {/* Animated Background */}
// //               <motion.div
// //                 className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
// //                 animate={{
// //                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
// //                 }}
// //                 transition={{ duration: 3, repeat: Infinity }}
// //                 style={{ backgroundSize: "200% 200%" }}
// //               />
              
// //               <span className="relative z-10 text-[#05080E] flex items-center gap-2">
// //                 Let's Work Together
// //                 <motion.span
// //                   animate={{ x: [0, 5, 0] }}
// //                   transition={{ duration: 1.5, repeat: Infinity }}
// //                 >
// //                   →
// //                 </motion.span>
// //               </span>

// //               {/* Shimmer */}
// //               <motion.div
// //                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
// //                 animate={{
// //                   x: ["-100%", "100%"],
// //                 }}
// //                 transition={{
// //                   duration: 2,
// //                   repeat: Infinity,
// //                   repeatDelay: 1,
// //                 }}
// //               />
// //             </motion.button>
// //           </motion.div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AboutMe;


// import React from "react";
// import { motion } from "framer-motion";
// import aboutImg from "../../assets/port.png";
// import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

// /* ================= Floating Particles ================= */
// const FloatingParticles = () => {
//   const particles = Array.from({ length: 30 });
  
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {particles.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
//           initial={{
//             x: Math.random() * 100 + "%",
//             y: Math.random() * 100 + "%",
//           }}
//           animate={{
//             x: Math.random() * 100 + "%",
//             y: Math.random() * 100 + "%",
//             opacity: [0.2, 0.5, 0.2],
//           }}
//           transition={{
//             duration: Math.random() * 15 + 10,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// /* ================= Animated Counter ================= */
// const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     let start = 0;
//     const increment = end / (duration * 60);
//     const timer = setInterval(() => {
//       start += increment;
//       if (start >= end) {
//         setCount(end);
//         clearInterval(timer);
//       } else {
//         setCount(Math.floor(start));
//       }
//     }, 1000 / 60);

//     return () => clearInterval(timer);
//   }, [end, duration]);

//   return (
//     <span>
//       {count}
//       <span className="text-cyan-400">{suffix}</span>
//     </span>
//   );
// };

// const AboutMe = () => {
//   const handleEmailClick = () => {
//     window.location.href = "mailto:shahedulhoque2003@gmail.com";
//   };

//   return (
//     <section
//       id="about"
//       className="relative py-20 bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] overflow-hidden"
//     >
//       {/* Background Elements */}
//       <FloatingParticles />
      
//       {/* Glowing Orbs */}
//       <motion.div
//         className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.3, 1],
//           x: [0, -50, 0],
//           y: [0, 50, 0],
//         }}
//         transition={{
//           duration: 10,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />
      
//       <motion.div
//         className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
//         animate={{
//           scale: [1, 1.2, 1],
//           x: [0, 40, 0],
//           y: [0, -40, 0],
//         }}
//         transition={{
//           duration: 12,
//           repeat: Infinity,
//           ease: "easeInOut",
//         }}
//       />

//       <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

//         {/* ================= LEFT IMAGE ================= */}
//         <motion.div
//           initial={{ opacity: 0, x: -80, rotateY: -30 }}
//           whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="flex justify-center lg:justify-start"
//         >
//           <div className="relative">
//             {/* Animated Rings */}
//             <motion.div
//               className="absolute inset-0 -m-8"
//               animate={{ rotate: 360 }}
//               transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
//             >
//               <div className="w-full h-full rounded-2xl border-2 border-dashed border-cyan-400/30" />
//             </motion.div>

//             <motion.div
//               className="absolute inset-0 -m-12"
//               animate={{ rotate: -360 }}
//               transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
//             >
//               <div className="w-full h-full rounded-2xl border-2 border-dotted border-purple-400/20" />
//             </motion.div>

//             {/* Glow Effects */}
//             <motion.div
//               className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-2xl"
//               animate={{
//                 scale: [1, 1.1, 1],
//                 opacity: [0.2, 0.4, 0.2],
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//             />

//             {/* Image Container */}
//             <motion.div
//               className="relative p-2 rounded-2xl border-4 border-cyan-400 overflow-hidden bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-sm"
//               whileHover={{ scale: 1.05, rotate: 2 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               style={{
//                 boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
//               }}
//             >
//               <img
//                 src={aboutImg}
//                 alt="About Me"
//                 className="relative z-10 w-[300px] sm:w-[360px] rounded-xl object-cover"
//               />

//               {/* Sparkle Effects */}
//               {[...Array(5)].map((_, i) => (
//                 <motion.div
//                   key={i}
//                   className="absolute w-2 h-2 bg-white rounded-full"
//                   style={{
//                     top: `${Math.random() * 100}%`,
//                     left: `${Math.random() * 100}%`,
//                   }}
//                   animate={{
//                     scale: [0, 1, 0],
//                     opacity: [0, 1, 0],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: i * 0.4,
//                   }}
//                 />
//               ))}

//               {/* Shimmer Effect */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
//                 animate={{
//                   x: ["-100%", "100%"],
//                 }}
//                 transition={{
//                   duration: 3,
//                   repeat: Infinity,
//                   repeatDelay: 2,
//                 }}
//               />
//             </motion.div>

//             {/* Floating Tech Icons */}
//             <motion.div
//               className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-2xl shadow-2xl"
//               animate={{
//                 y: [0, -15, 0],
//                 rotate: [0, 5, 0],
//               }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               <FaCode className="text-3xl text-white" />
//             </motion.div>

//             <motion.div
//               className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-2xl"
//               animate={{
//                 y: [0, 15, 0],
//                 rotate: [0, -5, 0],
//               }}
//               transition={{ duration: 3.5, repeat: Infinity }}
//             >
//               <FaLaptopCode className="text-3xl text-white" />
//             </motion.div>

//             <motion.div
//               className="absolute top-1/2 -right-8 bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-2xl"
//               animate={{
//                 x: [0, 10, 0],
//                 scale: [1, 1.1, 1],
//               }}
//               transition={{ duration: 4, repeat: Infinity }}
//             >
//               <FaRocket className="text-3xl text-white" />
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* ================= RIGHT CONTENT ================= */}
//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           viewport={{ once: true }}
//           className="space-y-6"
//         >
//           {/* Title with Animation */}
//           <motion.div
//             initial={{ opacity: 0, y: -20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             <motion.h2 
//               className="text-4xl sm:text-5xl font-extrabold tracking-wide inline-block"
//               whileHover={{ scale: 1.05 }}
//             >
//               <motion.span
//                 className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{ duration: 5, repeat: Infinity }}
//                 style={{ backgroundSize: "200% 200%" }}
//               >
//                 ABOUT ME
//               </motion.span>
//             </motion.h2>
            
//             {/* Animated Underline */}
//             <motion.div
//               className="h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-2"
//               initial={{ width: 0 }}
//               whileInView={{ width: "100%" }}
//               transition={{ delay: 0.5, duration: 0.8 }}
//               viewport={{ once: true }}
//             />
//           </motion.div>

//           {/* Description with Stagger Animation */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             viewport={{ once: true }}
//             className="space-y-4"
//           >
//             <motion.p 
//               className="text-gray-300 leading-relaxed relative group"
//               whileHover={{ x: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <motion.span
//                 className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-full"
//                 initial={{ scaleY: 0 }}
//                 whileInView={{ scaleY: 1 }}
//                 transition={{ delay: 0.5 }}
//                 viewport={{ once: true }}
//               />
//               <span className="block pl-4">
//                 Hello, I'm <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Shahedul Hoque</span>.
//                 I'm a passionate MERN Stack Developer with a strong focus on building
//                 modern, clean, and scalable web applications. I work with JavaScript,
//                 React, Node.js, Express, and MongoDB to create fast, secure, and
//                 user-friendly full-stack solutions.
//               </span>
//             </motion.p>

//             <motion.p 
//               className="text-gray-300 leading-relaxed relative group"
//               whileHover={{ x: 5 }}
//               transition={{ type: "spring", stiffness: 300 }}
//             >
//               <motion.span
//                 className="absolute left-0 top-0 bottom-0 w-1 bg-purple-400 rounded-full"
//                 initial={{ scaleY: 0 }}
//                 whileInView={{ scaleY: 1 }}
//                 transition={{ delay: 0.7 }}
//                 viewport={{ once: true }}
//               />
//               <span className="block pl-4">
//                 My coding philosophy is simple: write clean code, build meaningful
//                 projects, and improve every single day.
//               </span>
//             </motion.p>
//           </motion.div>

//           {/* ================= ANIMATED STATS ================= */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.6 }}
//             viewport={{ once: true }}
//             className="grid grid-cols-3 gap-6 pt-6"
//           >
//             {[
//               { end: 30, suffix: "+", label: "Completed Projects" },
//               { end: 98, suffix: "%", label: "Client Satisfaction" },
//               { end: 1, suffix: "+", label: "Years of Experience" },
//             ].map((stat, i) => (
//               <motion.div
//                 key={i}
//                 className="relative group"
//                 initial={{ opacity: 0, scale: 0.5 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
//                 viewport={{ once: true }}
//                 whileHover={{ scale: 1.1, y: -5 }}
//               >
//                 {/* Glow Effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
//                   transition={{ duration: 0.3 }}
//                 />
                
//                 <div className="relative bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 hover:border-cyan-400/50 transition-all">
//                   <motion.h3 
//                     className="text-3xl sm:text-4xl font-extrabold text-white"
//                     initial={{ opacity: 0 }}
//                     whileInView={{ opacity: 1 }}
//                     viewport={{ once: true }}
//                   >
//                     <AnimatedCounter end={stat.end} suffix={stat.suffix} />
//                   </motion.h3>
//                   <p className="text-xs sm:text-sm text-gray-400 mt-1">
//                     {stat.label}
//                   </p>
                  
//                   {/* Progress Bar */}
//                   <motion.div
//                     className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-3"
//                     initial={{ width: 0 }}
//                     whileInView={{ width: "100%" }}
//                     transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
//                     viewport={{ once: true }}
//                   />
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA Button */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 1.2 }}
//             viewport={{ once: true }}
//             className="pt-4"
//           >
//             <motion.button
//               onClick={handleEmailClick}
//               className="group relative px-8 py-4 rounded-full overflow-hidden font-bold cursor-pointer"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               {/* Animated Background */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
//                 animate={{
//                   backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
//                 }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 style={{ backgroundSize: "200% 200%" }}
//               />
              
//               <span className="relative z-10 text-[#05080E] flex items-center gap-2">
//                 Let's Work Together
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   →
//                 </motion.span>
//               </span>

//               {/* Shimmer */}
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
//                 animate={{
//                   x: ["-100%", "100%"],
//                 }}
//                 transition={{
//                   duration: 2,
//                   repeat: Infinity,
//                   repeatDelay: 1,
//                 }}
//               />
//             </motion.button>
//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;

import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/port.png";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

/* ================= Floating Particles ================= */
const FloatingParticles = () => {
  const particles = Array.from({ length: 30 });
  
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
            opacity: [0.2, 0.5, 0.2],
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

/* ================= Animated Counter ================= */
const AnimatedCounter = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span>
      {count}
      <span className="text-cyan-400">{suffix}</span>
    </span>
  );
};

const AboutMe = () => {
  // Smart Email Handler (PC এবং Mobile উভয়ের জন্য)
  const handleEmailClick = () => {
    const email = "shahedulhoque2003@gmail.com";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Mobile এর জন্য - ডিফল্ট ইমেল অ্যাপ
      window.location.href = `mailto:${email}`;
    } else {
      // PC এর জন্য - Gmail ওয়েব ভার্সন
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    }
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] overflow-hidden"
    >
      {/* Background Elements */}
      <FloatingParticles />
      
      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">

        {/* ================= LEFT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80, rotateY: -30 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative">
            {/* Animated Rings */}
            <motion.div
              className="absolute inset-0 -m-8"
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-2xl border-2 border-dashed border-cyan-400/30" />
            </motion.div>

            <motion.div
              className="absolute inset-0 -m-12"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-full rounded-2xl border-2 border-dotted border-purple-400/20" />
            </motion.div>

            {/* Glow Effects */}
            <motion.div
              className="absolute inset-0 bg-cyan-400 blur-3xl opacity-30 rounded-2xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Image Container */}
            <motion.div
              className="relative p-2 rounded-2xl border-4 border-cyan-400 overflow-hidden bg-gradient-to-br from-cyan-400/10 to-blue-500/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.4)",
              }}
            >
              <img
                src={aboutImg}
                alt="About Me"
                className="relative z-10 w-[300px] sm:w-[360px] rounded-xl object-cover"
              />

              {/* Sparkle Effects */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
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
                    delay: i * 0.4,
                  }}
                />
              ))}

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
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

            {/* Floating Tech Icons */}
            <motion.div
              className="absolute -top-6 -right-6 bg-gradient-to-br from-cyan-400 to-blue-500 p-4 rounded-2xl shadow-2xl"
              animate={{
                y: [0, -15, 0],
                rotate: [0, 5, 0],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaCode className="text-3xl text-white" />
            </motion.div>

            <motion.div
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-2xl shadow-2xl"
              animate={{
                y: [0, 15, 0],
                rotate: [0, -5, 0],
              }}
              transition={{ duration: 3.5, repeat: Infinity }}
            >
              <FaLaptopCode className="text-3xl text-white" />
            </motion.div>

            <motion.div
              className="absolute top-1/2 -right-8 bg-gradient-to-br from-green-400 to-emerald-500 p-4 rounded-2xl shadow-2xl"
              animate={{
                x: [0, 10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <FaRocket className="text-3xl text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* ================= RIGHT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Title with Animation */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl sm:text-5xl font-extrabold tracking-wide inline-block"
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                ABOUT ME
              </motion.span>
            </motion.h2>
            
            {/* Animated Underline */}
            <motion.div
              className="h-1 bg-gradient-to-r from-cyan-400 to-transparent rounded-full mt-2"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            />
          </motion.div>

          {/* Description with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <motion.p 
              className="text-gray-300 leading-relaxed relative group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              />
              <span className="block pl-4">
                Hello, I'm <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Shahedul Hoque</span>.
                I'm a passionate MERN Stack Developer with a strong focus on building
                modern, clean, and scalable web applications. I work with JavaScript,
                React, Node.js, Express, and MongoDB to create fast, secure, and
                user-friendly full-stack solutions.
              </span>
            </motion.p>

            <motion.p 
              className="text-gray-300 leading-relaxed relative group"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.span
                className="absolute left-0 top-0 bottom-0 w-1 bg-purple-400 rounded-full"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              />
              <span className="block pl-4">
                My coding philosophy is simple: write clean code, build meaningful
                projects, and improve every single day.
              </span>
            </motion.p>
          </motion.div>

          {/* ================= ANIMATED STATS ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-3 gap-6 pt-6"
          >
            {[
              { end: 30, suffix: "+", label: "Completed Projects" },
              { end: 98, suffix: "%", label: "Client Satisfaction" },
              { end: 1, suffix: "+", label: "Years of Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="relative group"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative bg-white/5 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-4 hover:border-cyan-400/50 transition-all">
                  <motion.h3 
                    className="text-3xl sm:text-4xl font-extrabold text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                  </motion.h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1">
                    {stat.label}
                  </p>
                  
                  {/* Progress Bar */}
                  <motion.div
                    className="h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-3"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    transition={{ delay: 1 + i * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            viewport={{ once: true }}
            className="pt-4"
          >
            <motion.button
              onClick={handleEmailClick}
              className="group relative px-8 py-4 rounded-full overflow-hidden font-bold cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated Background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
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

              {/* Shimmer */}
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
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;