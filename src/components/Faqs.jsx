import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShieldCheck,
  CreditCard,
  Globe,
} from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "Transfers & Fees",
      icon: <Globe size={20} className="text-emerald-600" />,
      question: "What are the exact charges for international wire transfers?",
      answer:
        "At United Capital, we pride ourselves on a 'Full Disclosure' policy. Standard international transfers incur a flat fee of $15.00 USD plus a 0.5% mid-market exchange rate margin. Unlike traditional retail banks, we do not hide costs inside the currency spread, and there are zero incoming wire fees for Infinite Tier members.",
    },
    {
      category: "Security",
      icon: <ShieldCheck size={20} className="text-emerald-600" />,
      question: "How does the 'United Transparency Guarantee' protect me?",
      answer:
        "The guarantee ensures that the 'Estimated Total' you see in our transfer calculator is the final amount settled. We use end-to-end SWIFT gpi tracking, allowing you to see exactly where your capital is in real-time and ensuring no intermediary bank deducts 'hidden' handling fees without prior disclosure.",
    },
    {
      category: "Accounts",
      icon: <CreditCard size={20} className="text-emerald-600" />,
      question: "How do I qualify for the $300 Asset Migration bonus?",
      answer:
        "New private banking clients who transition a minimum of $25,000 in liquid assets within the first 90 days of account opening are eligible. The bonus is credited to the account upon maturity (120 days of maintained balance).",
    },
    {
      category: "General",
      icon: <HelpCircle size={20} className="text-emerald-600" />,
      question: "Are my deposits at United Capital FDIC insured?",
      answer:
        "Yes. United Capital is a Member FDIC. Your deposits are insured up to the standard maximum of $250,000 per depositor, for each ownership category. For institutional clients, we offer extended coverage through our IntraFi network partners.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-24 px-6 lg:px-24 border-t border-slate-100">
      <div className="max-w-[1000px] mx-auto">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Everything you need to know about our institutional services,
            transparent fee structures, and security protocols.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl transition-all duration-300 ${
                openIndex === index
                  ? "border-emerald-200 bg-emerald-50/30 shadow-sm"
                  : "border-slate-200"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className="hidden sm:block">{faq.icon}</div>
                  <div>
                    <span className="text-[10px] font-black text-emerald-600 uppercase tracking-widest block mb-1">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-bold text-slate-800">
                      {faq.question}
                    </h3>
                  </div>
                </div>
                <div className="text-slate-400">
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </div>
              </button>

              {/* ANSWER AREA */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 ml-0 sm:ml-14 text-slate-600 leading-relaxed border-t border-emerald-100/50 mt-2">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
