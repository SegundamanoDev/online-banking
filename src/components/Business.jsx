import React from "react";
import { ChevronRight, ArrowRight, ArrowLeft, FileText } from "lucide-react";

const Business = () => {
  const quickLinks = [
    {
      title: "Solutions",
      links: [
        { label: "Business Checking", href: "#" },
        { label: "Startups & Emerging Tech", href: "#" },
        { label: "Commercial Banking", href: "#" },
        { label: "Treasury Management", href: "#" },
      ],
    },
    {
      title: "Capital & Credit",
      links: [
        { label: "SBA Loans", href: "#" },
        { label: "Line of Credit", href: "#" },
        { label: "Equipment Financing", href: "#" },
        { label: "Commercial Real Estate", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Knowledge Center", href: "#" },
        { label: "Security & Fraud", href: "#" },
        { label: "Merchant Services", href: "#" },
        { label: "Contact Advisor", href: "#" },
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
      {/* --- 1. HERO BANNER --- */}
      <div className="relative w-full h-[600px] flex items-end">
        {" "}
        {/* Changed items-center to items-end */}
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
          alt="Grow your business"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/30"></div>
        <div className="relative max-w-[1440px] mx-auto w-full px-6 lg:px-32 z-10 pb-16">
          {" "}
          {/* Added pb-16 to give it a margin from the bottom */}
          <div className="bg-white/95 backdrop-blur-sm p-10 md:p-14 shadow-2xl rounded-[2rem] max-w-[600px]">
            <span className="text-emerald-600 font-black uppercase tracking-widest text-sm mb-4 block">
              Commercial Banking
            </span>
            <h1 className="text-[32px] md:text-[44px] font-black leading-[1.1] mb-6 tracking-tight italic">
              Empowering the next generation of American enterprise.
            </h1>
            <p className="text-[17px] text-slate-600 leading-relaxed mb-8 font-medium">
              From seed-stage startups to established corporations, we provide
              the capital and expertise to help your business lead the market.
            </p>
            <button className="bg-slate-900 hover:bg-emerald-600 text-white px-10 py-4 font-bold text-[16px] rounded-full transition-all flex items-center group">
              Open a Business Account
              <ChevronRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </div>
        </div>
      </div>

      {/* --- 2. QUICK LINKS GRID --- */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {quickLinks.map((section, idx) => (
            <div key={idx} className="space-y-8">
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-10 bg-emerald-500 rounded-full"></div>
                <h2 className="text-[28px] font-black italic tracking-tight">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-5">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="group">
                    <a
                      href={link.href}
                      className="text-[17px] font-bold text-slate-500 hover:text-emerald-600 flex items-center transition-colors"
                    >
                      {link.label}
                      <ChevronRight
                        size={18}
                        className="ml-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all text-emerald-500"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. BUSINESS INSIGHTS --- */}
      <div className="bg-slate-50 py-24 border-y border-slate-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-32">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-1.5 h-10 bg-emerald-500 rounded-full"></div>
                <h2 className="text-[32px] md:text-[40px] font-black italic tracking-tight">
                  Business Insights
                </h2>
              </div>
              <p className="text-slate-500 text-lg max-w-2xl font-medium">
                Expert analysis and founder stories to help you navigate the
                complexities of modern commerce.
              </p>
            </div>

            <div className="flex space-x-3 mt-8 md:mt-0">
              <button className="w-12 h-12 rounded-full border-2 border-slate-200 flex items-center justify-center hover:bg-white transition-all text-slate-400 hover:text-slate-900">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-emerald-600 transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <div
                key={index}
                className="group cursor-pointer flex flex-col h-full bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[12px] font-black text-emerald-600 uppercase tracking-widest">
                      {article.category}
                    </span>
                    <span className="text-[13px] text-slate-400 font-medium">
                      {article.date}
                    </span>
                  </div>
                  <h3 className="text-[20px] font-black leading-tight group-hover:text-emerald-600 transition-colors mb-6">
                    {article.title}
                  </h3>
                  <div className="mt-auto pt-6 border-t border-slate-50 flex items-center text-slate-400 text-xs font-bold uppercase tracking-tighter">
                    <FileText size={16} className="mr-2 text-emerald-500" />
                    Read Full Article
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Emerald Accent */}
      <div className="w-full h-2 bg-emerald-500"></div>
    </section>
  );
};

export default Business;
