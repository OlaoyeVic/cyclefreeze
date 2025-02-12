import React from "react";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import HowItWorks from "./components/HowItWorks";
import WhyChooseCyclebreeze from "./components/WhyChooseCycleBreeze";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Hero />
      <Pricing />
      <HowItWorks />
      <WhyChooseCyclebreeze />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;