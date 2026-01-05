// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
// import { motion } from "framer-motion";

// const Contact = () => {
//   const formRef = useRef();
//   const [formData, setFormData] = useState({ name: "", email: "", message: "" });

//   const handleChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .sendForm(
//         "service_oggyaen",  
//         "template_9750fcx",
//         formRef.current,
//         "1IxDWqqOZZl9me7hu"   
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" });
//         },
//         (error) => {
//           alert("Oops! Something went wrong. Try again later.");
//         }
//       );
//   };

//   // Smart handlers for Email, Phone, WhatsApp
//   const handleEmailClick = () => {
//     const email = "shahedulhoque2003@gmail.com";
//     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
//     if (isMobile) window.location.href = `mailto:${email}`;
//     else window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
//   };
//   const handlePhoneClick = () => {
//     const phone = "+8801642282064";
//     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
//     if (isMobile) window.location.href = `tel:${phone}`;
//     else { navigator.clipboard.writeText(phone); alert(`${phone} copied!`); }
//   };
//   const handleWhatsappClick = () => {
//     const phone = "8801642282064";
//     const message = "Hello, I visited your portfolio";
//     const isMobile = /Mobi|Android/i.test(navigator.userAgent);
//     const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
//     if (isMobile) window.location.href = waLink;
//     else window.open(waLink, "_blank");
//   };

//   return (
//     <section className="relative bg-[#05080E] py-24 px-4 sm:px-6 lg:px-8">
//       <div className="relative z-10 max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
//         {/* Left: Contact Cards */}
//         <motion.div className="lg:w-1/2 flex flex-col gap-8" initial={{opacity:0,x:-60}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
//           <h2 className="text-5xl font-bold text-white">Let's <span className="text-cyan-400">Connect</span></h2>
//           <p className="text-gray-300 text-lg">Click below to contact me instantly.</p>
//           <div className="flex flex-col gap-4">
//             <motion.div onClick={handleEmailClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111418]/70 cursor-pointer">
//               <FaEnvelope className="text-cyan-400 text-2xl"/>
//               <span className="text-gray-200 font-medium">shahedulhoque2003@gmail.com</span>
//             </motion.div>
//             <motion.div onClick={handlePhoneClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111418]/70 cursor-pointer">
//               <FaPhone className="text-cyan-400 text-2xl"/>
//               <span className="text-gray-200 font-medium">+8801642282064</span>
//             </motion.div>
//             <motion.div onClick={handleWhatsappClick} className="group flex items-center gap-4 p-4 rounded-2xl bg-[#111418]/70 cursor-pointer">
//               <FaWhatsapp className="text-cyan-400 text-2xl"/>
//               <span className="text-gray-200 font-medium">Chat on WhatsApp</span>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* Right: Contact Form */}
//         <motion.form ref={formRef} onSubmit={handleSubmit} className="lg:w-1/2 flex flex-col gap-4 p-10 rounded-3xl bg-[#111418]/70" initial={{opacity:0,x:60}} whileInView={{opacity:1,x:0}} transition={{duration:0.7}}>
//           <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30"/>
//           <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30"/>
//           <textarea name="message" rows="6" placeholder="Your Message" value={formData.message} onChange={handleChange} className="p-4 rounded-xl bg-[#0a101b]/50 text-white border border-cyan-400/30"/>
//           <motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className="mt-4 px-6 py-3 bg-cyan-400 text-[#05080E] font-semibold rounded-xl">Send Message</motion.button>
//         </motion.form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React from "react";
import { FaEnvelope, FaPhone, FaWhatsapp, FaGithub, FaLinkedin, FaFacebookF } from "react-icons/fa";

const Contact = () => {
  const handleEmailClick = () => {
    const email = "shahedulhoque2003@gmail.com";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `mailto:${email}`;
    } else {
      window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, "_blank");
    }
  };

  const handlePhoneClick = () => {
    const phone = "+8801642282064";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    if (isMobile) {
      window.location.href = `tel:${phone}`;
    } else {
      navigator.clipboard.writeText(phone);
      alert(`📋 ${phone} copied to clipboard!`);
    }
  };

  const handleWhatsappClick = () => {
    const phone = "8801642282064";
    const message = "Hello! I visited your portfolio and would like to connect.";
    const waLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(waLink, "_blank");
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium backdrop-blur-sm">
              💬 Let's Talk
            </span>
          </div>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
            Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto">
            আমার সাথে যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করুন
          </p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email Card */}
          <div 
            onClick={handleEmailClick}
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <FaEnvelope className="text-cyan-400 text-4xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Email</h3>
              <p className="text-gray-400 text-center mb-4">Drop me a line anytime</p>
              
              <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-4 text-center">
                <p className="text-cyan-400 font-medium break-all">shahedulhoque2003@gmail.com</p>
              </div>
              
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-cyan-400 transition-colors">
                  Click to send email
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* Phone Card */}
          <div 
            onClick={handlePhoneClick}
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <FaPhone className="text-cyan-400 text-4xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 text-center">Phone</h3>
              <p className="text-gray-400 text-center mb-4">Call me for urgent matters</p>
              
              <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-4 text-center">
                <p className="text-cyan-400 font-medium text-xl">+880 1642-282064</p>
              </div>
              
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-cyan-400 transition-colors">
                  Click to call/copy
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>

          {/* WhatsApp Card */}
          <div 
            onClick={handleWhatsappClick}
            className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-8 cursor-pointer overflow-hidden transition-all duration-500 hover:scale-105 hover:border-cyan-400/60 hover:shadow-2xl hover:shadow-cyan-400/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/0 group-hover:from-cyan-400/10 group-hover:to-blue-400/10 transition-all duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-blue-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <FaWhatsapp className="text-cyan-400 text-4xl" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 text-center">WhatsApp</h3>
              <p className="text-gray-400 text-center mb-4">Quick chat on WhatsApp</p>
              
              <div className="bg-slate-900/50 border border-cyan-400/20 rounded-xl p-4 text-center">
                <p className="text-cyan-400 font-medium">Start Conversation</p>
              </div>
              
              <div className="mt-4 text-center">
                <span className="inline-flex items-center gap-2 text-sm text-gray-500 group-hover:text-cyan-400 transition-colors">
                  Click to chat now
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl border border-cyan-400/20 rounded-3xl p-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Connect on <span className="text-cyan-400">Social Media</span>
            </h3>
            <p className="text-gray-400 text-lg">Follow me on various platforms</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://github.com/sh-shahedul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-slate-800/50 border border-cyan-400/20 rounded-2xl px-8 py-5 hover:border-cyan-400 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
            >
              <FaGithub className="text-cyan-400 text-3xl group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <p className="text-gray-400 text-sm">Follow on</p>
                <p className="text-white font-semibold">GitHub</p>
              </div>
            </a>

            <a 
              href="https://www.linkedin.com/in/sh-shahedul/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-slate-800/50 border border-cyan-400/20 rounded-2xl px-8 py-5 hover:border-cyan-400 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
            >
              <FaLinkedin className="text-cyan-400 text-3xl group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <p className="text-gray-400 text-sm">Connect on</p>
                <p className="text-white font-semibold">LinkedIn</p>
              </div>
            </a>

            <a 
              href="https://www.facebook.com/shahedulhoquee/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-4 bg-slate-800/50 border border-cyan-400/20 rounded-2xl px-8 py-5 hover:border-cyan-400 hover:bg-slate-800/80 transition-all duration-300 hover:scale-105"
            >
              <FaFacebookF className="text-cyan-400 text-3xl group-hover:rotate-12 transition-transform" />
              <div className="text-left">
                <p className="text-gray-400 text-sm">Follow on</p>
                <p className="text-white font-semibold">Facebook</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;