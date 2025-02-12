import React, { useState } from 'react';
import { IoIosArrowForward } from 'react-icons/io';

interface CustomQuoteFormProps {
  closeModal: () => void;
}

const CustomQuoteForm = ({ closeModal }: CustomQuoteFormProps) => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [voucherName, setVoucherName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log('Form submitted:', { firstName, surname, voucherName, email });
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
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                required
              />
            </div>
            <div>
              <label htmlFor="surname" className="block text-left text-gray-700 font-medium mb-2">Surname</label>
              <input 
                type="text" 
                id="surname" 
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={surname} 
                onChange={(e) => setSurname(e.target.value)} 
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
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={voucherName} 
                onChange={(e) => setVoucherName(e.target.value)} 
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-left text-gray-700 font-medium mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="bg-[#6FC446] hover:bg-#6FC446-600 text-white font-medium py-2 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-#6FC446-300 flex items-center justify-center whitespace-nowrap"
          >
            Submit <IoIosArrowForward color="white" style={{marginLeft: '4px'}} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CustomQuoteForm;