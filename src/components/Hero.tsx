import React from "react";
import heroBg from "../assets/hero-bg.svg";
import logo from "../assets/logo.svg";

const Hero: React.FC = () => {
  return (
    <section 
      className="relative bg-cover bg-center h-screen flex items-center justify-center text-center px-6" 
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <nav className="absolute top-6 left-16 right-16 flex justify-between items-center w-full">
        <div>
          <img src={logo} alt="CycleBreeze Logo" className="h-12" />
        </div>
        <ul className="hidden md:flex gap-6 font-medium text-gray-700">
          <li className="hover:text-green-500 cursor-pointer">Home</li>
          <li className="hover:text-green-500 cursor-pointer">Pricing</li>
          <li className="hover:text-green-500 cursor-pointer">How It Works</li>
          <li className="hover:text-green-500 cursor-pointer">Why Us</li>
          <li className="hover:text-green-500 cursor-pointer">Contact</li>
        </ul>
      </nav>
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-[72px] leading-[79.2px] md:text-6xl font-extrabold text-black">
          Cyclebreeze Valentine’s Tech Love Deals!
        </h1>
        <p className="text-black mt-4 text-[18px] leading-[28.8px] font-normal">
          This Valentine’s, skip the chocolates and flowers—give the gift that keeps giving. 
          Whether it's for your partner, friend, or yourself, our exclusive tech packages are designed to launch dreams, elevate brands, and create lasting success. 
          Plus, with up to 70% OFF for Valentine’s, there’s never been a better time to invest in the future.
        </p>
        <button 
          className="mt-6 hover:bg-[#6FC446-600] text-white py-3 px-6 rounded-lg text-lg font-medium hover:bg-green-600 transition"
          style={{
            color: '#6FC446',
            // backgroundColor: '#6FC446',
            border: `1px solid #6FC446`,
            borderRadius: '8px',
          }}
        >
          Claim your package
        </button>
      </div>
    </section>
  );
};

export default Hero;