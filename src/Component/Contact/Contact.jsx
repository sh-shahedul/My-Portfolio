import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_oggyaen",  
        "template_9750fcx",
        formRef.current,
        "1IxDWqqOZZl9me7hu"   
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Oops! Something went wrong. Try again later.");
        }
      );
  };

  // Smart handlers for Email, Phone, WhatsApp
  const handleEmailClick = () => {
    const email = "shahedulhoque2003@gmail.com";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) window.location.href = `mailto:${email}`;
    else window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
  };
  const handlePhoneClick = () => {
    const phone = "+8801642282064";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) window.location.href = `tel:${phone}`;
    else { navigator.clipboard.writeText(phone); alert(`${phone} copied!`); }
  };
  const handleWhatsappClick = () => {
    const phone = "8801642282064";
    const message = "Hello, I visited your portfolio";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    if (isMobile) window.location.href = waLink;
    else window.open(waLink, "_blank");
  };

  return (
    <section className="relative bg-[#05080E] py-24 px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        {/* Left: Contact Cards */}
        <motion.div className="lg:w-1/2 flex flex-col gap-8" initial={{opacity:0,x:-60}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
          <h2 className="text-5xl font-bold text-white">Let's <span className="text-cyan-400">Connect</span></h2>
          <p className="text-gray-300 text-lg">Click below to contact me instantly.</p>
          <div className="flex flex-col gap-4">
            <motion.div onClick={handleEmailClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111418]/70 cursor-pointer">
              <FaEnvelope className="text-cyan-400 text-2xl"/>
              <span className="text-gray-200 font-medium">shahedulhoque2003@gmail.com</span>
            </motion.div>
            <motion.div onClick={handlePhoneClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111418]/70 cursor-pointer">
              <FaPhone className="text-cyan-400 text-2xl"/>
              <span className="text-gray-200 font-medium">+8801642282064</span>
            </motion.div>
            <motion.div onClick={handleWhatsappClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111418]/70 cursor-pointer">
              <FaWhatsapp className="text-cyan-400 text-2xl"/>
              <span className="text-gray-200 font-medium">Chat on WhatsApp</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form ref={formRef} onSubmit={handleSubmit} className="lg:w-1/2 flex flex-col gap-4 p-10 rounded-3xl bg-[#111418]/70" initial={{opacity:0,x:60}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30"/>
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30"/>
          <textarea name="message" rows="6" placeholder="Your Message" value={formData.message} onChange={handleChange} className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30"/>
          <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="mt-4 px-6 py-3 bg-cyan-400 text-[#05080E] font-semibold rounded-xl">Send Message</motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
