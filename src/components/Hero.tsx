import React, { useState } from "react";
import heroBg from "../assets/hero-bg.svg";
import logo from "../assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Hero: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className="relative bg-cover bg-center w-full h-full overflow-hidden md:h-screen flex items-center justify-center text-center px-6"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <nav className="absolute top-6 px-4 flex justify-between items-center w-full">
        <div>
          <img src={logo} alt="CycleBreeze Logo" className="h-12" />
        </div>
        <ul className="hidden md:flex md:flex-row gap-6 font-medium text-white max-w-full">
          <li className="hover:text-green-500 cursor-pointer">
            <a
              href="https://www.cyclebreeze.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Home
            </a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a
              href="https://www.cyclebreeze.com/about"
              target="_blank"
              rel="noopener noreferrer"
            >
              About us
            </a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a
              href="https://www.cyclebreeze.com/services"
              target="_blank"
              rel="noopener noreferrer"
            >
              Services
            </a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a
              href="https://www.cyclebreeze.com/projects"
              target="_blank"
              rel="noopener noreferrer"
            >
              Projects
            </a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a
              href="https://www.cyclebreeze.com/academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              Academy
            </a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a
              href="https://www.cyclebreeze.com/programs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Programs
            </a>
          </li>
          <li className="hover:text-green-500 cursor-pointer">
            <a
              href="https://www.cyclebreeze.com/publications"
              target="_blank"
              rel="noopener noreferrer"
            >
              Publications
            </a>
          </li>
        </ul>
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <FaTimes className="text-black text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-3/4 h-full bg-white/90 text-black flex flex-col items-start justify-center px-6 gap-6 transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          {[
            { name: "Home", link: "https://www.cyclebreeze.com/" },
            { name: "About us", link: "https://www.cyclebreeze.com/about" },
            { name: "Services", link: "https://www.cyclebreeze.com/services" },
            { name: "Projects", link: "https://www.cyclebreeze.com/projects" },
            { name: "Academy", link: "https://www.cyclebreeze.com/academy" },
            { name: "Programs", link: "https://www.cyclebreeze.com/programs" },
            {
              name: "Publications",
              link: "https://www.cyclebreeze.com/publications",
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 text-lg"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="relative z-10 max-w-3xl mt-[160px] md:mt-0 p-6">
        <h1 className="text-[56px] md:text-[72px] leading-[79.2px] md:text-6xl font-extrabold text-black">
          Cyclebreeze Valentine’s Tech Love Deals!
        </h1>
        <p className="text-black mt-4 text-[12px] md:text-[18px] leading-[28.8px] font-normal">
          This Valentine’s, skip the chocolates and flowers—give the gift that
          keeps giving. Whether it's for your partner, friend, or yourself, our
          exclusive tech packages are designed to launch dreams, elevate brands,
          and create lasting success. Plus, with up to 70% OFF for Valentine’s,
          there’s never been a better time to invest in the future.
        </p>
        <button
          className="mt-6 hover:bg-[#6FC446-600] text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-600 transition"
          style={{
            color: "#6FC446",
            // backgroundColor: '#6FC446',
            border: `1px solid #6FC446`,
            borderRadius: "8px",
          }}
          onClick={() => window.scrollTo({ top: 1000, behavior: "smooth" })}
        >
          Claim your package
        </button>
      </div>
    </section>
  );
};

export default Hero;
