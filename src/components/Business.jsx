import React from "react";
import { ChevronRight, FileText } from "lucide-react";

const Business = () => {
  const quickLinks = [
    {
      title: "Solutions",
      items: [
        "Business Checking",
        "Startups & Emerging Tech",
        "Commercial Banking",
        "Treasury Management",
      ],
    },
    {
      title: "Capital & Credit",
      items: [
        "SBA Loans",
        "Line of Credit",
        "Equipment Financing",
        "Commercial Real Estate",
      ],
    },
    {
      title: "Resources",
      items: [
        "Knowledge Center",
        "Security & Fraud",
        "Merchant Services",
        "Contact Advisor",
      ],
    },
  ];

  const articles = [
    {
      category: "Innovation",
      date: "Nov 17, 2025",
      title: "Generative AI for SMBs: Scaling Operations without Scaling Costs",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
      category: "Strategy",
      date: "Oct 12, 2025",
      title: "Navigating Interest Rate Cycles: A Guide for CFOs",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    },
    {
      category: "Case Study",
      date: "Sep 07, 2025",
      title: "Scale Story: How Cefar Tech reached Series B with United Capital",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-sans text-slate-900">
      {/* --- 1. HERO BANNER --- */}
      <div className="relative w-full h-[500px] lg:h-[580px] flex items-center lg:items-end">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Grow your business"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/40"></div>

        <div className="relative max-w-6xl mx-auto w-full px-6 z-10 lg:pb-16">
          <div className="bg-white/95 backdrop-blur-md p-8 lg:p-12 shadow-xl rounded-[2.5rem] max-w-[520px]">
            <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-[10px] mb-4 block">
              Commercial Banking
            </span>
            <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight mb-5 tracking-tight">
              Empowering the next generation of{" "}
              <span className="italic font-medium">American enterprise.</span>
            </h1>
            <p className="text-base text-slate-600 leading-relaxed mb-8 font-medium">
              From seed-stage startups to established corporations, we provide
              the capital and expertise to help your business lead the market.
            </p>
            <div className="inline-flex items-center bg-slate-900 text-white px-8 py-3.5 font-bold text-sm rounded-full cursor-default">
              Open Business Account
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. INFORMATION GRID --- */}
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {quickLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-[3px] h-8 bg-emerald-500 rounded-full"></div>
                <h2 className="text-xl font-bold italic tracking-tight text-slate-900">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.items.map((item, iIdx) => (
                  <li
                    key={iIdx}
                    className="text-[15px] font-semibold text-slate-500 flex items-center cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/30 mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. BUSINESS INSIGHTS --- */}
      <div className="bg-slate-50 py-20 lg:py-28 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-[3px] h-8 bg-emerald-500 rounded-full"></div>
              <h2 className="text-2xl lg:text-3xl font-bold italic tracking-tight">
                Business Insights
              </h2>
            </div>
            <p className="text-slate-500 text-base font-medium">
              Expert analysis and founder stories to help you navigate the
              complexities of modern commerce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">
                      {article.category}
                    </span>
                    <span className="text-[11px] text-slate-400 font-medium">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug mb-6 text-slate-900">
                    {article.title}
                  </h3>
                  <div className="mt-auto pt-5 border-t border-slate-50 flex items-center text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    <FileText size={14} className="mr-2 text-emerald-500" />
                    Insight Report
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Emerald Accent */}
      <div className="w-full h-1.5 bg-emerald-500"></div>
    </section>
  );
};

export default Business;
