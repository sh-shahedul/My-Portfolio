import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [active, setActive] = useState("about"); // Default active section

  // Define all routes
  const links = [
    { name: "Home", href: "#home" },
    { name: "Service", href: "#service" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Project", href: "#project" },
  ];

  // Scroll spy: detect which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActive(link.href.replace("#", ""));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  // Smooth scroll on click
  const handleClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActive(href.replace("#", ""));
    }
  };

  return (
    <div className="w-full bg-transparent backdrop-blur-md sticky top-0 z-50 font-inter shadow-md shadow-cyan-500/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">

          {/* Left Side (Logo) */}
          <div className="flex items-center space-x-3">
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
            <span className="text-2xl text-white font-semibold">Shahedul <span className="text-cyan-400">Hoque</span></span>
          </div>

          {/* Middle Menu */}
          <div className="hidden lg:flex">
            <ul className="flex space-x-6 font-bold">
              {links.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`transition-colors duration-300 ${
                      active === item.href.replace("#", "")
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-cyan-400"
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Button */}
          <div>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, "#contact")}
              className="
                px-8 py-2 rounded-full bg-cyan-400 text-[#05080E] font-semibold shadow-lg shadow-cyan-400/30
                hover:bg-cyan-300 hover:shadow-cyan-400/50 transition-all
              "
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
