import gesture from "../assets/gesture.svg";
import personal from "../assets/personal.svg";
import account from "../assets/account.svg";

const HowItWorks = () => {
  return (
    <section className="bg-pink-100 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-8">How does it work?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-10 relative">
        <div className="flex flex-col items-center max-w-xs relative gap-4">
          <div className="bg-[#FF69B4] flex justify-center items-center w-[90px] h-[90px] rounded-[20px]">
            <img src={gesture} alt="Gesture" className="w-[30px] h-[30px]" />
          </div>
          <h3 className="font-normal text-[22px] leading-[22px]">Choose your package</h3>
          <p className="font-normal text-[16px] text-center mt-4">Select the perfect gift for your loved one—or yourself!</p>

          <div className="absolute top-3/4 -translate-y-1/2 md:left-[80%] md:top-auto md:translate-y-0 hidden md:flex items-center"> {/* Flexbox for circles and line */}
            <div className="w-6 h-6 rounded-full bg-[#FF69B4]"></div> {/* Start Circle */}
            <div className="md:w-24 w-0 h-0.5 bg-[#FF69B4] md:block hidden md:mx-2 md:border-t-2 md:border-[#FF69B4] md:border-style-dotted" style={{ borderStyle: 'dotted' }}></div> {/* Dotted Line with margin */}
            <div className="w-6 h-6 rounded-full bg-[#FF69B4]"></div> {/* End Circle */}
          </div>
        </div>
        <div className="flex flex-col items-center max-w-xs relative gap-4">
          <div className="bg-[#538EDD] flex justify-center items-center w-[90px] h-[90px] rounded-[20px]">
            <img src={personal} alt="personal collection" className="w-[30px] h-[30px]" />
          </div>
          <h3 className="font-normal text-[22px] leading-[22px]">Receive your voucher</h3>
          <p className="font-normal text-[16px] text-center mt-4">After purchase, you’ll get a personalized voucher to present to your Valentine.</p>
          <div className="absolute top-1/2 -translate-y-1/2 md:left-[80%] md:top-auto md:translate-y-0 hidden md:flex items-center ">
            <div className="w-6 h-6 rounded-full bg-[#FF69B4]"></div> {/* Start Circle */}
            <div className="md:w-24 w-0 h-0.5 bg-[#FF69B4] md:block hidden md:mx-2 md:border-t-2 md:border-[#FF69B4] md:border-style-dotted" style={{ borderStyle: 'dotted' }}></div> {/* Dotted Line with margin */}
            <div className="w-6 h-6 rounded-full bg-[#FF69B4]"></div> {/* End Circle */}
          </div>
        </div>
        <div className="flex flex-col items-center max-w-xs relative gap-4">
          <div className="bg-[#6FC446] flex justify-center items-center w-[90px] h-[90px] rounded-[20px]">
            <img src={account} alt="account payment" className="w-[30px] h-[30px]" />
          </div>
          <h3 className="font-normal text-[22px] leading-[22px]">Customize your Email</h3>
          <p className="font-normal text-[16px] text-center mt-4">We'll send a heartfelt email to your recipient with redemption details.</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;