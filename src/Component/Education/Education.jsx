import React from "react";
import { FaSchool, FaRegStar, FaUniversity } from "react-icons/fa";

const iconMap = {
  school: <FaSchool className="w-6 h-6" />,
  star: <FaRegStar className="w-6 h-6" />,
  university: <FaUniversity className="w-6 h-6" />,
};

const timeline = [
  {
    title: "B.Tech Engineer",
    institution: "Kalinga Institute of Industrial Technology, Bhubaneswar, Odisha, India",
    period: "Oct 2021 - May 2025",
    icon: "university",
    items: [
      "B.Tech in Computer Science & Engineering",
      "Studied under IB scholarship",
      "Built several full-stack projects",
    ],
  },
  {
    title: "Higher Secondary Certificate",
    institution: "National College of Education, Narsingdi, Bangladesh",
    period: "Jul 2018 - Jan 2020",
    icon: "school",
    items: ["Completed HSC in science branch"],
  },
  {
    title: "Secondary School Certificate",
    institution: "Shahid Fakir Shamsuddin Sramik High School, Gazipur, Bangladesh",
    period: "Jan 2010 - Jun 2018",
    icon: "star",
    items: ["Completed schooling", "Graduated in 2018"],
  },
];

const TimelineCard = ({ item, reverse }) => (
  <div
    className={`relative flex flex-col md:flex-row items-start md:items-center ${
      reverse ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Icon + Period */}
    <div className="flex flex-col items-center md:items-start md:justify-center md:w-1/2">
      <div className="flex items-center space-x-2 mb-4 md:mb-0 md:justify-start">
        <div
          className="p-3 rounded-full bg-cyan-900/40 border border-cyan-400/30 shadow-lg shadow-cyan-500/40"
          title={item.icon}
        >
          {iconMap[item.icon]}
        </div>
        <span className="text-sm font-medium bg-cyan-900/40 px-3 py-1 rounded-full backdrop-blur-sm border border-cyan-400/30 text-cyan-100 shadow-sm">
          {item.period}
        </span>
      </div>
    </div>

    {/* Card */}
    <div
      className={`md:w-1/2 w-full bg-[#29b6f61a] backdrop-blur-md border border-[#29b6f633] rounded-2xl p-6 shadow-lg text-white hover:shadow-cyan-500/50 transition-shadow duration-300 ${
        reverse ? "md:mr-8 md:ml-0 md:order-last" : "md:ml-8 md:mr-0"
      }`}
    >
      <h3 className="text-xl font-bold text-cyan-400">{item.title}</h3>
      <p className="text-sm text-cyan-300 mt-1">{item.institution}</p>
      <ul className="mt-4 list-disc list-inside text-gray-200 space-y-1">
        {item.items.map((listItem, i) => (
          <li key={i}>{listItem}</li>
        ))}
      </ul>
    </div>
  </div>
);

const Education = () => {
  return (
    <section className="bg-[#05080E] font-inter text-gray-300 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500">
            WHAT I HAVE DONE
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-2">
            Education & Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Center line for desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-cyan-500/50 rounded-full"></div>

          <div className="space-y-12 md:space-y-20">
            {timeline.map((item, index) => (
              <TimelineCard key={index} item={item} reverse={index % 2 !== 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
