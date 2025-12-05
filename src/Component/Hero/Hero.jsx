import React from 'react';

const Hero = () => {
  return (
    <section className="bg-[#05080E] font-inter">
      <div className="flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-[#0a101b] via-[#071322] to-[#04101F]">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Text Content */}
            <div className="text-center lg:text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                I'M <span className="text-cyan-400">DEVELOPER</span><br />
                WILKERSON HARDIN
              </h1>
              <p className="mt-4 text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0">
                Greetings, fellow digital explorers! I am Wilkerson, a passionate and innovative developer dedicated to crafting immersive digital experiences. Welcome to my online abode.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <a 
                  className="w-full sm:w-auto text-center bg-cyan-400 text-[#05080E] font-bold py-3 px-8 rounded-full shadow-lg shadow-cyan-400/30 hover:opacity-90 transition-opacity duration-300" 
                  href="#contact"
                >
                  Hire Me
                </a>
                <a 
                  className="w-full sm:w-auto flex items-center justify-center gap-2 font-bold py-3 px-8 rounded-full border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#05080E] transition-colors duration-300" 
                  href="#"
                >
                  <span className="material-icons text-2xl">play_circle</span>
                  Play Video
                </a>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="flex justify-center">
              <img 
                alt="A professional portrait of Wilkerson Hardin" 
                className="max-w-sm w-full md:max-w-md lg:max-w-none rounded-2xl shadow-lg shadow-cyan-500/20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzvvWuvcNcakEuIcCQmxiKbDzuvYmVdSO-i9D7bT9LW0vOIpOJDRNPAC-QqjE2eG3ISL654QL9jka_rnavyaAmXDVCOxuM69AD11N5ybAkruTKWXqvUpw61231ZAMF9Ft6nKeVXxwJdA48Gwpj3UWGOc6GYEJcVRTD2EsAv1ZSpgHb-qjv9FUcWFKpHdR9X3Uqq_9Z9ORXywI5QZ9tUAbb7PCaq8b43tTWAROe0XRezIr8QXJ2xKpEGPiwWFxCW5rZb56KiDV1dw" 
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
