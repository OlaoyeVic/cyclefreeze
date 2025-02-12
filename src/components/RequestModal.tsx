interface RequestModalProps {
  closeSecondModal: () => void;
}
const RequestModal = ({ closeSecondModal }: RequestModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-128 relative">
        <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={closeSecondModal}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <p className="text-center text-[#6FC446] text-[20px] leading-[30px]">
          Thank you for your request. A message has been sent to your Email Address
        </p>
      </div>
    </div>
  )
}
export default RequestModal;