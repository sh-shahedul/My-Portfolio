import React from 'react';

const services = [
  { icon: 'wysiwyg', title: 'Frontend Development', description: 'Creating dynamic, responsive, and visually appealing interfaces for web applications.' },
  { icon: 'web_asset', title: 'Backend Development', description: 'Building robust, scalable server-side logic and APIs.' , offset: 'mt-8'},
  { icon: 'design_services', title: 'UI/UX Design', description: 'Designing user-friendly, modern interfaces with seamless experiences.' , offset: '-mt-8'},
  { icon: 'checklist', title: 'Project Management', description: 'Efficiently managing projects to ensure timely delivery and quality.' }
];

const Service = () => {
  return (
    <section className="font-inter bg-[#05080E] text-gray-300">
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                My <span className="text-cyan-400">Services</span>
              </h2>
              <p className="text-base text-gray-400 max-w-lg">
                I am a passionate and innovative developer dedicated to crafting immersive digital experiences.
              </p>
              <p className="text-base text-gray-400 max-w-lg">
                I combine design and technology to build applications that delight users.
              </p>
              <div>
                <a 
                  href="#"
                  className="inline-block bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Read More
                </a>
              </div>
            </div>

            {/* Right Grid of Services */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-14">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className={`p-6 rounded-2xl space-y-4 flex flex-col justify-center h-full ${service.offset || ''} bg-[#29b6f61a] backdrop-blur-md border border-[#29b6f633] shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/50 transition-all duration-300`}
                >
                  <span 
                    className="material-symbols-outlined text-cyan-400 text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 300, 'opsz' 40" }}
                  >
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-bold text-cyan-400">{service.title}</h3>
                  <p className="text-sm text-gray-200">{service.description}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </section>
  );
};

export default Service;
