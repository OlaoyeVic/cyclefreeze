import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { usePaystackPayment } from "react-paystack";
import RequestModal from "./RequestModal";

interface CustomQuoteFormProps {
  closeModal: () => void;
}
interface Plan {
  title: string;
  price: string;
  amount: string;
  desc: string;
  features: string[];
  color: string; // Add a color property
}

const CustomQuoteForm = ({ closeModal }: CustomQuoteFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const plans: Plan[] = [
    {
      title: "THE BOSS LADY",
      price: "₦250,000",
      amount: "250000",
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
      amount: "150000",
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
      amount: "750000",
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
      amount: "250000",
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
      amount: "400000",
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
      amount: "350000",
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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTitle = event.target.value;
    const plan = plans.find((p) => p.title === selectedTitle) || null;
    setSelectedPlan(plan);
  };
  const config = {
    reference: new Date().getTime().toString(),
    email: "", // Will be set dynamically
    amount: Number(selectedPlan?.amount || 0) * 100,
    publicKey: "pk_test_99da37a4cff9144f80c4d51aac3cc6d55d4ecf12",
    metadata: {
      custom_fields: [
        {
          fullname: "",
          email: "",
          phonenumber: "",
          voucherName: selectedPlan?.title || "",
          amount: selectedPlan?.price || "",
          subject: "",
          message: "",
          recipientsFirstName: "",
          recipientsLastName: "",
          recipientsEmail: "",
          recipientsPhone: "",
          recipientsnickName: "",
        },
        // To pass extra metadata, add an object with the same fields as above
      ],
    },
  };

  const initializePayment = usePaystackPayment(config);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!selectedPlan) return;

    setIsSubmitting(true);
    const formData = new FormData(event.currentTarget);
    config.email = formData.get("email") as string; // Update email dynamically
    config.metadata.custom_fields[0].fullname = formData.get(
      "fullname"
    ) as string;
    config.metadata.custom_fields[0].email = formData.get("email") as string;
    config.metadata.custom_fields[0].phonenumber = formData.get(
      "phonenumber"
    ) as string;
    config.metadata.custom_fields[0].subject = formData.get(
      "subject"
    ) as string;
    config.metadata.custom_fields[0].message = formData.get(
      "message"
    ) as string;
    config.metadata.custom_fields[0].recipientsFirstName = formData.get(
      "recipientsFirstName"
    ) as string;
    config.metadata.custom_fields[0].recipientsLastName = formData.get(
      "recipientsLastName"
    ) as string;
    config.metadata.custom_fields[0].recipientsEmail = formData.get(
      "recipientsEmail"
    ) as string;
    config.metadata.custom_fields[0].recipientsPhone = formData.get(
      "recipientsPhone"
    ) as string;
    config.metadata.custom_fields[0].recipientsnickName = formData.get(
      "recipientsnickName"
    ) as string;
    initializePayment({ onSuccess, onClose });
  };

  // you can call this function anything
  const onSuccess = (reference: any) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);

    closeModal();
    setIsSuccessModalOpen(true);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-[70%] relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold mb-4">Request a custom Quote</h2>
        <p className="text-gray-600 mb-6">
          Fill the below form so as to send you your desired package.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-col-1 lg:grid-cols-2 gap-8 mb-8">
            {" "}
            {/* Two-column grid */}
            <div>
              <label
                htmlFor="firstName"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Sender Fullname
              </label>
              <input
                type="text"
                id="firstName"
                name="fullname"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Sender Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phonenumber"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Any Nick Name
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                placeholder="Any Nick Name your Val Know you As"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-col-1 lg:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="voucherName"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Name your voucher
              </label>
              {/* <input 
                                type="text" 
                                id="voucherName" 
                                name='voucherName'
                                value={selectedPlan.title }
                                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                                required readOnly
                              /> */}
              <select
                onChange={handleSelectChange}
                className="border p-2 rounded-md w-full"
              >
                <option value="">-- Choose a Plan --</option>
                {plans.map((plan) => (
                  <option key={plan.title} value={plan.title}>
                    {plan.title} - {plan.price}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Recipients First name
              </label>
              <input
                type="text"
                id="amount"
                name="recipientsFirstName"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Recipients Last name
              </label>
              <input
                type="text"
                id="amount"
                name="recipientsLastName"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Recipient Email address
              </label>
              <input
                type="text"
                id="amount"
                name="recipientsEmail"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Recipients Phone number
              </label>
              <input
                type="text"
                id="amount"
                name="recipientsPhone"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="amount"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Recipient Nick Name
              </label>
              <input
                type="text"
                id="amount"
                name="recipientsnickName"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Enter Any special note to recipient (30 words max)
              </label>
              <textarea
                id="subject"
                name="subject"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-left text-gray-700 font-medium mb-2"
              >
                Enter Any other information you would like us to know
              </label>
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#6FC446] hover:bg-#6FC446-600 text-white font-medium py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-#6FC446-300 flex items-center justify-center whitespace-nowrap"
          >
            {isSubmitting ? (
              "Submitting"
            ) : (
              <>
                Submit{" "}
                <IoIosArrowForward
                  color="white"
                  style={{ marginLeft: "4px" }}
                />
              </>
            )}
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
