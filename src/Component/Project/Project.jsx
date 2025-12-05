import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Project = () => {
  const projects = [
    {
      title: 'Web Development',
      description: 'Creating responsive, modern web applications with smooth UX.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB__OHCEaKQ9IWAgCaeKXk4ArQ8L2pyZ8vPSXOXHaQqt_ZOhF0Q4pz-uRG04xdYgKQbsx2Yy19UBJbUvz5fiWItDETcmIIe2YHkfAFG17Z156IBlcCPZkstkRwDEl2X3Tyivl_YPCgXEdJ4EG7KkRawC3KsewA1N-lNg3N2BgaB6Wfde_6LKxydkwqvHbnzzcYlnVWiLPC8Xw74iQIrLAkfZTtwlaUXe8aTXmEsl8WNkg-9wOS6HkL2ENYgCd3SMakPaMnGlCU05w',
      offset: ''
    },
    {
      title: 'Frontend Development',
      description: 'Building visually appealing and interactive interfaces.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1S1-r1v7ldpjzlgWDM_eIoh0FX5-ZTmsMqmUHjHCnnpS6g0fPVfqvzXMntCxjMrYvIAFqim3uAEEw0nj6N1reT8Utfu8hrn6_qCZ7q97y_9aGP5_7LZrUJT7rN9A6PIpgZO1ow59n_4vj0XAvl92LKijSDk0qltqBbrkiCXAGDFNMOZFsKqLh2GpHupx0TF1xGhNw_AK1_uj-xtJteyGddroDQ7hxH5K7JPIeBu429r6bVbOCMsSm_rgUfc_vV2e6IPGsqdnA-w',
      offset: 'lg:mt-16'
    },
    {
      title: 'Backend Development',
      description: 'Developing robust server-side logic and APIs.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAuemjtHlPl6bGXuvj0B-tYajRv699B9ZgiLUjZxLkHHEfMxqvBUuJ3kr-7KDADlIkBZosPiqh3H71bW2tNRZT_TiVjsGLBITf1rPxe0rOVs4K9a50120s3PUN2flZEy0HIBKOxec9GA6COmbs-sFhKfVn-SX3VWh6kcNBn-7gDR4RaCoc8JVIb5Rc8hb_l4ArWmXq9GuMlNOPoDvi482UpwqD67ehBG48kFK_kFXTVdvu6o8tgB_spn1M3cRbxw_5NPN_FhF9s0g',
      offset: ''
    },
    {
      title: 'User Experience',
      description: 'Designing user-centric experiences for web and mobile.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAamc6Qprjixn_lLRW1VrSuaI4NYi1myU2O4vceKX3ZSEYWROrvrMf12aQZGiUIAazSbqVHCZEfi1j1N-n6hPg5XQ9Jn3po0XrIpxh5DFmB4_GowETN5m9IEi8YXUVN6YR70BL7GwofVZFe9aoeABcEsyH34f33vq7zwajZZX8y-kMwr3VETswHAZWm0u4rwjwzzrWRqoq9CABNqjyTIq-TAh5lau7oZFUMwuCraFDnIccaHAutjtkrghxaaiA14GuuN2LDcLbyA',
      offset: 'lg:mt-16'
    },
    // Add more projects if needed for 4+ pages
  ];

  const projectsPerPage = 4;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const currentProjects = projects.slice(
    (currentPage - 1) * projectsPerPage,
    currentPage * projectsPerPage
  );

  const goNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goPrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <section className="bg-[#05080E] text-gray-300 font-inter">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        {/* Header */}
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-cyan-400">Latest</span> Projects
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Greetings, fellow digital explorers! I am a passionate and innovative developer.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-8">
          {currentProjects.map((project, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl shadow-lg border border-cyan-400/20 cursor-pointer transition-transform duration-300 hover:-translate-y-2 ${project.offset}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full aspect-[3/4] object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-6 bg-[#29b6f61a] backdrop-blur-md border-t border-cyan-400/30 group-hover:bg-[#29b6f633] transition-colors duration-300">
                <h3 className="text-lg font-bold text-cyan-400 mb-1">{project.title}</h3>
                <p className="text-gray-200 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-6">
          <button
            onClick={goPrev}
            className="px-3 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#05080E] transition-colors duration-200"
          >
            <FaArrowLeft />
          </button>

          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx + 1)}
              className={`px-4 py-2 rounded-full font-semibold transition-colors duration-200 ${
                currentPage === idx + 1
                  ? 'bg-cyan-400 text-[#05080E] shadow-lg shadow-cyan-400/30'
                  : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#05080E]'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={goNext}
            className="px-3 py-2 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-[#05080E] transition-colors duration-200"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Project;
