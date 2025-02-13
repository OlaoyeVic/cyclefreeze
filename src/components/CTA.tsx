import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import CustomQuoteForm from "./CustomQuoteForm";
import RequestModal from "./RequestModal";

const CTA = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openSecondModal = () => setIsSecondModalOpen(true);
  const closeSecondModal = () => setIsSecondModalOpen(false);

  return (
    <section className="md:px-96 py-12 text-center">
      <div className="bg-[#6FC446] md:rounded-[20px] p-8">
        <h2 className="text-2xl font-bold mb-4 text-white">READY TO GIVE THE ULTIMATE GIFT?</h2>
        <p className="mb-6 text-white">Invest in your loved one’s future—or your own—this Valentine’s. Let’s build something beautiful together!</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button 
            className="px-6 py-3 text-white rounded-lg font-normal  hover:bg-[#FFFFFF] hover:text-white flex items-center justify-center"
            style={{
              color: '#FFFFFF',
              backgroundColor: '#6FC446',
              border: `4px solid #FFFFFF`,
              borderRadius: '32px',
              whiteSpace: 'nowrap',
            }}
            onClick={openSecondModal}
          >
            Claim Your Valentine’s Package Now! <IoIosArrowForward color="black" style={{marginLeft: '4px'}} />
          </button>
          <button 
            className="px-6 py-3 bg-white text-black rounded-[32px] font-normal flex items-center justify-center whitespace-nowrap"
            onClick={openModal}
          >
            Request a Custom Quote <IoIosArrowForward color="black" style={{marginLeft: '4px'}} />
          </button>
        </div>
      </div>
      {isModalOpen && (
        <CustomQuoteForm closeModal={closeModal} />
      )}
      {isSecondModalOpen && (
        <RequestModal closeSecondModal={closeSecondModal} />
      )}
    </section>
  );
};
export default CTA;