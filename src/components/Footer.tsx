import { FaDribbble, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
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
          <h3 className="text-xl font-semibold border-b-2 border-green-400 pb-2">Contacts Us</h3>
          <p className="mt-4">hr@cyclebreeze.com</p>
          <p className="mt-2">Website: <a href="https://cyclebreeze.com" className="text-white-400 hover:underline">https://cyclebreeze.com</a></p>
          <p className="mt-2">WhatsApp: +234 902 024 9763</p>
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