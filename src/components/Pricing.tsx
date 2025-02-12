import React from 'react';

interface Plan {
  title: string;
  price: string;
  desc: string;
  features: string[];
  color: string; // Add a color property
}

const Pricing: React.FC = () => {
  const plans: Plan[] = [
    {
      title: "THE BOSS LADY",
      price: "₦250,000",
      desc: "Perfect for entrepreneurs ready to launch their online presence.",
      features: [
        "Custom Website Design",
        "1 Year Free Hosting",
        "Basic SEO Setup",
        "Blog & Shop Integration",
        "Payment Gateway Integration",
        "1 Month Free Maintenance",
        "Unlimited Business Email Accounts",
      ],
      color: "#78C751",
    },
    {
      title: "THE SOCIAL QUEEN",
      price: "₦150,000",
      desc: "Ideal for businesses looking to level up their brand identity and social presence.",
      features: [
        "Logo Design",
        "Brand Guide (Typography, Color Palette, Logo Usage)",
        "Social Media Branding (5 Custom Templates)",
        "Packaging & Merch Design (Up to 3 Product Variants)",
        "Brand Identity Design",
        "5 Marketing Campaign Designs",
      ],
      color: "#FF69B4",
    },
    {
      title: "THE HUSTLER'S DEAL",
      price: "₦750,000",
      desc: "For businesses ready to take their products and services mobile.",
      features: [
        "User-Friendly App Interface Design",
        "Custom iOS & Android Development",
        "Website Landing Page",
        "Basic SEO & Analytics Setup",
        "1 Month Free Maintenance",
        "Admin Dashboard for App Management",
        "Backup & Security",
      ],
      color: "#5390D9",
    },
    {
      title: "CONTENT CREATOR's DREAM",
      price: "₦250,000",
      desc: "Perfect for influencers, content creators, and brands looking to boost their online presence",
      features: [
        "3 Video Ads for Social Media & Web",
        "4 Banner Designs for Ads",
        "3 Custom Social Media Graphics",
        "Basic SEO & Analytics Setup",
        "3 Custom Social Media Graphics",
        "1 Animated Social Media Post",
        "1 Hour Online Strategy Consultation",
      ],
      color: "#78C751",
    },
    {
      title: "THE CEO VIBES",
      price: "₦400,000",
      desc: "For business leaders who want a powerful online presence with strong branding",
      features: [
        "Custom Website Design",
        "1 Year Free Hosting and Domain",
        "Blog, Shop & Payment Integration",
        "Logo, Brand Guide & Identity Design",
        "5 Social Media Templates",
        "Unlimited Business Email Accounts",
        "2 Month Free Website Maintenance",
      ],
      color: "#FF69B4",
    },
    {
      title: "THE BRAND EMPEROR",
      price: "₦350,000",
      desc: "For businesses that want it all—a complete digital and branding presence with content to match.",
      features: [
        "Logo, Brand Guide & Identity Design",
        "3 Video Ads for Social Media & Web",
        "4 Banner Designs for Ads",
        "3 Custom Social Media Graphics",
        "1 Animated Social Media Post",
        "5 Marketing Campaign Designs",
        "Packaging & Merch Design (Up to 3 Product Variants)",
      ],
      color: "#5390D9",
    },
  ];

  const CheckIcon = ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-9" />
    </svg>
  );

  return (
    <section className="py-20 bg-pink-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div key={index} className={`h-[877px] bg-white rounded-3xl shadow-lg max-w-sm border border-${plan.color}-500 relative`}>

              <div className={`h-[180px] rounded-t-3xl p-8 py-12 text-center relative`} style={{ backgroundColor: plan.color }}>
                <h3 className={`text-[24px] font-normal text-white my-6`}>{plan.title}</h3>

                {/* Circle positioned to intersect both areas */}
                <div 
                  className={`absolute -bottom-12 left-1/2 -translate-x-1/2 bg-white rounded-full w-24 h-24 flex items-center justify-center border-4 border-white`} 
                  style={{ 
                    backgroundColor: plan.color, 
                    border: `4px solid white`,
                    boxShadow: `0 4px 4px rgba(0, 0, 0, 0.25)` 
                  }}
                >
                  <div className="flex items-center justify-center p-2 rounded-[20px]" style={{ backgroundColor: plan.color }}>
                    <span className={`text-3xl font-bold text-white`}>{plan.price}</span>
                  </div>
                </div>
              </div>

              {/* Content Area (below title) */}
              <div className="pt-20 mx-8"> 
                <p className='text-center pt-3 pb-6 font-normal text-[12px]'>{plan.desc}</p>
                <ul className="space-y-4 px-2 mb-8">
                  {plan.features.map((feature, i) => (
                    <li
                    key={i}
                    className={`flex items-center w-full ${i % 2 === 1 ? 'bg-gray-100' : ''}`}
                    style={i % 2 === 1 ? { backgroundColor: '#f8f8f8' } : {}}
                    >
                      <div
                        className="flex items-center justify-center min-w-8 min-h-8 w-8 h-8 mr-3"
                        style={{
                          backgroundColor: plan.color,
                          borderRadius: '50%',
                        }}
                      >
                        <CheckIcon className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-800 font-normal text-[12px]">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center absolute bottom-8 left-1/2 -translate-x-1/2 w-[80%]">
                  <button
                    className={`hover:bg-[${plan.color}-600] font-bold py-3 px-6 w-full`}
                    style={{
                      color: plan.color,
                      backgroundColor: 'white',
                      border: `1px solid ${plan.color}`,
                      borderRadius: '50px',
                    }}
                  >
                    Select this plan
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;