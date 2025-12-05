import React, { useState, useEffect, useRef } from 'react';
import { FiArrowDownCircle } from 'react-icons/fi';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profile from "../../assets/port1.png"

gsap.registerPlugin(ScrollTrigger);

// Typing animation hook
const useTyping = (text, speed = 150, pause = 1500) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText.length < text.length) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length - 1));
      }, speed / 2);
    } else if (!isDeleting && displayedText.length === text.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText.length === 0) {
      timer = setTimeout(() => setIsDeleting(false), speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pause]);

  return displayedText;
};

const Hero = () => {
  const typedText = useTyping('MERN Stack Developer');
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Left text animation
      gsap.from(leftRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      // Right image animation
      gsap.from(rightRef.current, {
        opacity: 0,
        y: 50,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" className="bg-linear-to-r from-[#0a101b] via-[#071322] to-[#04101F] font-inter">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left Text Content */}
          <motion.div ref={leftRef} className="text-center lg:text-left space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
              className="text-2xl text-cyan-400 font-bold"
            >
              Hi, I'm
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              Shahedul Hoque
            </motion.h1>

            {/* Typing Animation */}
            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-3xl text-cyan-400 font-bold mt-2"
            >
              {typedText}
              <span className="border-r-2 border-cyan-400 ml-1 animate-pulse"></span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 font-semibold"
            >
              Creating dynamic web applications with the MERN stack, focusing on clean code, responsive design, and smooth functionality. I turn ideas into interactive digital experiences while continuously learning and improving.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <a href='#contact'
                className="w-full sm:w-auto text-center bg-cyan-400 text-[#05080E] font-bold py-3 px-8 rounded-full shadow-lg shadow-cyan-400/30 hover:opacity-90 transition-opacity duration-300"
              >
                Hire Me
              </a>
              <a
                className="w-full animate-bounce sm:w-auto flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#05080E] transition-colors duration-300"
                href="#"
              >
                <FiArrowDownCircle className="text-2xl" />
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Image Content */}
      <motion.div ref={rightRef} className="flex justify-center lg:justify-end">
  <motion.div
    className="relative group"
    
    // Floating animation + slight rotation
    animate={{ 
      y: [0, -15, 0], 
      rotate: [-2, 2, -2] 
    }}
    transition={{ 
      duration: 4, 
      repeat: Infinity, 
      ease: "easeInOut" 
    }}
  >
    
    {/* Glow Pulse Animation */}
    <motion.div
      className="absolute inset-0 rounded-full bg-cyan-400 blur-3xl opacity-40"
      animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    ></motion.div>

    {/* Image Border Animation */}
    <motion.div
      className="p-1 rounded-full border-4 border-cyan-400 relative"
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <motion.div
        className="p-1 bg-white/10 backdrop-blur-sm rounded-full"
        animate={{ scale: [1, 1.03, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Main Image */}
        <motion.img
          alt="profile"
          src={profile}
          className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full object-cover"
          
          // Entrance animation (GSAP handles initial fade-in, this adds smoothness)
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
        />
      </motion.div>
    </motion.div>
  </motion.div>
</motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
