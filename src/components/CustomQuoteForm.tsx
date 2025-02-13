import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';
import emailjs from '@emailjs/browser';
import RequestModal from './RequestModal';

interface CustomQuoteFormProps {
  closeModal: () => void;
}

const CustomQuoteForm = ({ closeModal }: CustomQuoteFormProps) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // if (!selectedPlan) return;
  
      setIsSubmitting(true);
      const formData = new FormData(event.currentTarget);
      const emailParams = {
        to_name: formData.get("name") as string,
        from_name: "CycleBreeze",
        message: `You have selected the ${formData.get("plan")} plan at ${formData.get("")}.`,
        plan_title: formData.get("plan") as string,
        plan_price: formData.get("price") as string,
        email: formData.get("email") as string,
      };
    
      emailjs.send('service_l8bmfs8', 'template_hnpiu31', emailParams, 'Dpb-hMQBC7s3a_rEP')
        .then(() => {
          event.currentTarget.reset();
          closeModal();
          setIsSuccessModalOpen(true);
        })
        .catch(() => {
          alert("An error occurred. Please try again later.");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-[70%] relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-4">Request a custom Quote</h2>
        <p className="text-gray-600 mb-6">Our AI will use this to personalise your resume review to you.</p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-8 mb-8">  {/* Two-column grid */}
                <div>
                  <label htmlFor="firstName" className="block text-left text-gray-700 font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    name='name'
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="surname" className="block text-left text-gray-700 font-medium mb-2">Surname</label>
                  <input 
                    type="text" 
                    id="surname" 
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4"> {/* Two-column grid */}
                <div>
                  <label htmlFor="voucherName" className="block text-left text-gray-700 font-medium mb-2">Name your voucher</label>
                  <input 
                    type="text" 
                    id="voucherName" 
                    name='voucherName'
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name='email'
                    className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required
                  />
                </div>
              </div>

              <button 
                type="submit" 
                className="bg-[#6FC446] hover:bg-#6FC446-600 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-#6FC446-300 flex items-center justify-center whitespace-nowrap"
              >
                {isSubmitting ? "Submitting" : <>Submit <IoIosArrowForward color="white" style={{marginLeft: '4px'}} /></>}
              </button>
            </form>
      </div>

      {isSuccessModalOpen && (
        <RequestModal closeSecondModal={() => setIsSuccessModalOpen(false)} />
      )}
    </div>
  );
};

export default CustomQuoteForm;