import { FaCheckCircle } from "react-icons/fa";
import gift from "../assets/gift.svg";

const WhyChooseCyclebreeze = () => {
  return (
    <section className="bg-white py-16 px-16 md:px-56">
      <div className="bg-white p-16 md:shadow-lg md:rounded-lg flex flex-col md:flex-row justify-between items-center gap-10 relative">
        <div>
          <h2 className="text-5xl font-extrabold mb-8">Why choose Cyclebreeze?</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2 font-normal text-[20px]"><FaCheckCircle className="text-[#6FC446]" /> Affordable Tech Solutions tailored to launch and grow businesses.</li>
            <li className="flex items-center gap-2 font-normal text-[20px]"><FaCheckCircle className="text-[#6FC446]" /> Personalized service that makes every package feel special.</li>
            <li className="flex items-center gap-2 font-normal text-[20px]"><FaCheckCircle className="text-[#6FC446]" /> Massive discounts up to 70% OFF—only this Valentine’s!</li>
          </ul>
          <button 
            className="mt-6 px-6 py-3 text-#6FC446 rounded-lg font-semibold hover:bg-[#6FC446] hover:text-white transition"
            style={{
              color: '#6FC446',
              backgroundColor: '#FFFFFF',
              border: `1px solid #6FC446`,
              borderRadius: '8px',
            }}
          >
            Hurry! Offer Ends February 28th!
          </button>
          <div className="absolute -top-6 right-24 w-[59px] h-[60px] rounded-full bg-[#538EDD]"></div>
        </div>
        <div>
          <img src={gift} alt="Gift Boxes" className="max-w-xs md:max-w-md" />
        </div>
      </div>
    </section>
  );
};
export default WhyChooseCyclebreeze;