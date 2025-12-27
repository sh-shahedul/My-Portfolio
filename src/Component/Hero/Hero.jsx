import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import profile from "../../assets/port1.png";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { FiArrowDownCircle } from "react-icons/fi";

/* ================= Typing Hook ================= */
const useTyping = (text, speed = 120, pause = 1500) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText.length < text.length) {
      timer = setTimeout(
        () => setDisplayedText(text.slice(0, displayedText.length + 1)),
        speed
      );
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(
        () => setDisplayedText(text.slice(0, displayedText.length - 1)),
        speed / 2
      );
    } else if (!isDeleting && displayedText.length === text.length) {
      timer = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && displayedText.length === 0) {
      timer = setTimeout(() => setIsDeleting(false), speed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, speed, pause]);

  return displayedText;
};

/* ================= Particle Background ================= */
const ParticleBackground = () => {
  const particles = Array.from({ length: 50 });
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

/* ================= Cursor Follow Effect ================= */
const CursorFollowEffect = ({ children }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), springConfig);

  const handleMouse = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );
};

/* ================= Glowing Orbs ================= */
const GlowingOrbs = () => {
  return (
    <>
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
};

/* ================= HERO ================= */
const Hero = () => {
  const typedText = useTyping("MERN Stack Developer");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative py-10 bg-gradient-to-br from-[#050b18] via-[#061427] to-[#020a14] flex items-center overflow-hidden mx-auto"
    >
      {/* Animated Background Elements */}
      <GlowingOrbs />
      <ParticleBackground />

      {/* Grid Background with Animation */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
        animate={{
          backgroundPosition: ["0px 0px", "50px 50px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="container  mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center relative z-10">
        {/* ================= LEFT ================= */}
        <motion.div
           className="text-center lg:text-left space-y-5 ml-3 order-2 lg:order-1"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Hi Badge with Pulse */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block"
          >
            <motion.h4
              className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 text-cyan-400 font-bold text-xl backdrop-blur-sm"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                  "0 0 40px rgba(6, 182, 212, 0.5)",
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              👋 Hi, I'm
            </motion.h4>
          </motion.div>

          {/* Name with Gradient Animation */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold"
          >
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Shahedul Hoque
            </motion.span>
          </motion.h1>

          {/* Typing Effect with Better Styling */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="relative inline-block"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-400 relative">
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 10px rgba(6, 182, 212, 0.5)",
                    "0 0 20px rgba(6, 182, 212, 0.8)",
                    "0 0 10px rgba(6, 182, 212, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {typedText}
              </motion.span>
              <motion.span
                className="border-r-2 border-cyan-400 ml-1"
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </h2>
          </motion.div>

          {/* Description with Hover Effect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed relative group"
          >
            <span className="relative z-10">
              I craft high-performance web applications using the MERN stack,
              blending clean architecture, elegant UI, and smooth animations to
              deliver modern digital experiences.
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-transparent rounded-lg -z-10"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1 }}
            />
          </motion.p>

          {/* Social Icons with Advanced Animations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex justify-center lg:justify-start gap-4 pt-4"
          >
            {[
              { icon: <FaGithub />, link: "https://github.com/sh-shahedul", color: "from-gray-400 to-gray-600" },
              { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/sh-shahedul/", color: "from-blue-400 to-blue-600" },
              { icon: <FaFacebook />, link: "https://www.facebook.com/shahedulhoquee/", color: "from-blue-500 to-blue-700" },
              { icon: <FaInstagram />, link: "https://www.instagram.com/sh.shahedul/", color: "from-pink-400 to-purple-600" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1, type: "spring" }}
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} rounded-full blur-md opacity-0 group-hover:opacity-70`}
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                />
                <div className="relative p-3 rounded-full bg-white/5 backdrop-blur-md border border-cyan-400/20 text-cyan-400 text-2xl hover:text-white hover:border-cyan-400 transition-all">
                  {item.icon}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Button with Magnetic Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="pt-2"
          >
            <motion.a
              href="/Shahedul_Hoque_Resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full overflow-hidden font-bold"
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
              
              {/* Border Animation */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(6, 182, 212, 0.5)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />

              <span className="relative z-10 text-[#05080E] flex items-center gap-2">
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FiArrowDownCircle className="text-2xl" />
                </motion.div>
                Download Resume
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
        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          className="flex justify-center lg:justify-center order-1 lg:order-2"
          initial={{ opacity: 0, scale: 0.8, rotateY: -180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <CursorFollowEffect>
            <motion.div
              className="relative"
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Rotating Rings */}
              <motion.div
                className="absolute inset-0 -m-8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-dashed border-cyan-400/30" />
              </motion.div>

              <motion.div
                className="absolute inset-0 -m-12"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-full h-full rounded-full border-2 border-dotted border-purple-400/20" />
              </motion.div>

              {/* Multiple Glow Layers */}
              <motion.div
                className="absolute inset-0 bg-cyan-400 blur-3xl opacity-40 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              <motion.div
                className="absolute inset-0 bg-blue-500 blur-2xl opacity-30 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Image Container with Parallax */}
              <motion.div
                className="relative p-2 rounded-full border-4 border-cyan-400 overflow-hidden bg-gradient-to-br from-cyan-400/20 to-blue-500/20 backdrop-blur-sm"
                whileHover={{ scale: 1.08, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                style={{
                  boxShadow: "0 0 50px rgba(6, 182, 212, 0.5)",
                }}
              >
                {/* Profile Image */}
                <img
                  src={profile}
                  alt="Shahedul Hoque"
                  className="w-56 h-56 sm:w-64 sm:h-64 rounded-full object-cover"
                />

                {/* Sparkle Effects */}
                {[...Array(6)].map((_, i) => (
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
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Orbiting Tech Icons - Solar System Style */}
              <div className="absolute inset-0 pointer-events-none">
                {[
                  { icon: <FaNodeJs />, color: "bg-green-500", delay: 0, name: "Node.js", radius: 180 },
                  { icon: <SiMongodb />, color: "bg-green-600", delay: 5, name: "MongoDB", radius: 180 },
                  { icon: <FaReact />, color: "bg-cyan-400", delay: 10, name: "React", radius: 180 },
                  { icon: <SiNextdotjs />, color: "bg-black", delay: 15, name: "Next.js", radius: 180 },
                ].map((tech, i) => (
                  <motion.div
                    key={i}
                    className="absolute left-1/2 top-1/2 pointer-events-auto"
                    style={{
                      width: `${tech.radius * 2}px`,
                      height: `${tech.radius * 2}px`,
                      marginLeft: `-${tech.radius}px`,
                      marginTop: `-${tech.radius}px`,
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                      delay: tech.delay,
                    }}
                  >
                    <motion.div
                      className={`absolute top-0 left-1/2 -translate-x-1/2 ${tech.color} p-4 rounded-full shadow-2xl border-2 border-white/20`}
                      animate={{
                        rotate: [0, -360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: tech.delay,
                      }}
                      whileHover={{ scale: 1.3 }}
                      title={tech.name}
                    >
                      <span className="text-3xl text-white">{tech.icon}</span>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </CursorFollowEffect>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;