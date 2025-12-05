import React from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedin size={40} />, href: "https://www.linkedin.com/in/sh-shahedul/" },
    { icon: <FaGithub  size={40}/>, href: "https://github.com/sh-shahedul" },
    { icon: <FaFacebook size={40} />, href: "https://www.facebook.com/shahedulhoquee/" },
  ];

  return (
    <footer className="bg-[#05080E] text-gray-300 font-inter py-12">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0">

        {/* Logo & Description */}
        <motion.div
          className="flex flex-col items-center md:items-start text-center md:text-left gap-2"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex items-center gap-2">
            <svg
              className="h-8 w-8 text-cyan-400"
              fill="none"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M78.6833 21.3167C69.4938 12.1272 57.513 8.33334 45.4167 11.25C33.3203 14.1667 22.5062 23.5186 17.5 35.8333C12.4938 48.1481 13.75 62.0833 21.3167 73.6833C28.8833 85.2833 41.5937 92.5 55.4167 92.5C62.0833 92.5 68.5833 90.75 74.1667 87.5833M21.3167 78.6833C30.5062 87.8728 42.487 91.6667 54.5833 88.75C66.6797 85.8333 77.4938 76.4814 82.5 64.1667C87.5062 51.8519 86.25 37.9167 78.6833 26.3167C71.1167 14.7167 58.4063 7.5 44.5833 7.5C37.9167 7.5 31.4167 9.25 25.8333 12.4167"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="15"
              />
            </svg>
            <h2 className="text-2xl font-bold text-white">
              Shahedul <span className="text-cyan-400">Hoque</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm sm:text-base">
            Building Mern-stack web applications with React, Node.js & MongoDB
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-4">
          {socialLinks.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              className="flex items-center justify-center md:h-20 h-10 md:w-20 w-10 rounded-full bg-[#111418]/60 border border-cyan-400/20 shadow-lg shadow-cyan-500/20 text-cyan-400"
              whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.6, repeat: Infinity, repeatType: "loop" }}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Bottom Text */}
      <motion.div
        className="mt-8 text-center text-gray-500 text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        &copy; {new Date().getFullYear()} <span className="text-cyan-400">Shahedul Hoque</span>. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
