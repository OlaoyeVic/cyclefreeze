import { FaDribbble, FaEnvelope, FaGlobe, FaInstagram, FaPhone, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import whitelogo from "../assets/white-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-[#1D2A49] text-white py-12 px-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="flex flex-col items-center gap-4 md:items-start text-center md:text-left">
          <img src={whitelogo} alt="CycleBreeze Logo White" className="h-12" />
          <p className="mt-4 max-w-sm">A one-stop hub for solutions to your business needs and for research and technological development!</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/cyclebreeze_/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-gray-400 text-xl hover:text-white" />
            </a>
            <FaDribbble className="text-gray-400 text-xl hover:text-white" />
            <a href="https://x.com/cyclebreeze_" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-gray-400 text-xl hover:text-white" />
            </a>
            <a href="https://www.youtube.com/@cyclebreeze6780" target="_blank" rel="noopener noreferrer">
              <FaYoutube className="text-gray-400 text-xl hover:text-white" />
            </a>
          </div>
        </div>
       
<div className="mt-8 md:mt-0">
  <h3 className="text-xl font-semibold border-b-2 border-green-400 pb-2">
    Contact Us
  </h3>
  <p className="mt-4 flex items-center gap-2">
    <FaEnvelope className="text-gray-400 text-xl hover:text-white" />
    <a href="mailto:hr@cyclebreeze.com" className="text-white hover:underline">
      hr@cyclebreeze.com
    </a>
  </p>
  <p className="mt-2 flex items-center gap-2">
    <FaGlobe className="text-gray-400 text-xl hover:text-white" />
    <a href="https://cyclebreeze.com" className="text-white hover:underline">
      cyclebreeze.com
    </a>
  </p>
  <p className="mt-2 flex items-center gap-2">
    <FaWhatsapp className="text-gray-400 text-xl hover:text-white" />
    <a href="tel:+2349020249763" className="text-white hover:underline">
      +234  810 9976 152
    </a>
  </p>
  <p className="mt-2 flex items-center gap-2">
    <FaPhone className="text-gray-400 text-xl hover:text-white" />
    <a href="tel:+2342013309116" className="text-white hover:underline">
    +234 201 3309 116
    </a>
  </p>
</div>

      </div>
      <div className="flex justify-evenly items-center border-t border-gray-600 mt-8 pt-4 text-center text-gray-400">
        <p>&copy; 2022 Cycle Breeze. All rights reserved</p>
        <p className="mt-2"><a href="#" className="hover:underline">Privacy Policy</a> - <a href="#" className="hover:underline">Terms & Conditions</a></p>
      </div>
    </footer>
  );
};
export default Footer;