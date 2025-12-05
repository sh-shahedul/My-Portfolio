import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative bg-[#05080E] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Neon Glow */}
      <div className="absolute -top-40 -left-40 w-72 h-72 bg-cyan-500/30 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-spin-slow"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-16">

        {/* Left Side */}
        <motion.div
          className="lg:w-1/2 flex flex-col gap-8"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-5xl font-bold text-white">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>

          <motion.p
            className="text-gray-300 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            I'm always excited to collaborate, discuss ideas, or just say hi. Feel free to reach out!
          </motion.p>

          {/* Contact Info Cards */}
          <div className="flex flex-col gap-4">
            {[
              { icon: <FaEnvelope />, text: "shahedulhoque2003@gmail.com" },
              { icon: <FaPhone />, text: "+8801642282064" },
              { icon: <FaMapMarkerAlt />, text: "Uttara, Dhaka, Bangladesh" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="group relative flex items-center gap-4 p-4 rounded-2xl bg-[#111418]/70 backdrop-blur-md border border-cyan-400/30 shadow-lg shadow-cyan-500/20 hover:scale-105 transition-transform duration-300 hover:shadow-cyan-500/50"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                viewport={{ once: false }}
              >
                <div className="text-cyan-400 text-2xl">{item.icon}</div>
                <span className="text-gray-200 font-medium">{item.text}</span>

                <div className="absolute inset-0 rounded-2xl border border-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Side - Animated Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="lg:w-1/2 flex flex-col gap-4 p-10 rounded-3xl bg-[#111418]/70 backdrop-blur-xl border border-cyan-400/20 shadow-lg shadow-cyan-500/30"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          />

          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          />

          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30 focus:border-cyan-400 outline-none transition-all duration-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          ></motion.textarea>

          <motion.button
            className="mt-4 px-6 py-3 bg-cyan-400 text-[#05080E] font-semibold rounded-xl hover:bg-cyan-500 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
