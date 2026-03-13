import React from "react";

const Business = () => {
  const quickLinks = [
    {
      title: "Products and Solutions",
      links: [
        { label: "Compare our business accounts", href: "#" },
        { label: "Startups and small businesses", href: "#" },
        { label: "Established businesses", href: "#" },
        { label: "View all", href: "#" },
      ],
    },
    {
      title: "Finance and Borrowing",
      links: [
        { label: "Small Business Loan", href: "#" },
        { label: "Flexible Business Loan", href: "#" },
        { label: "Commercial Mortgage", href: "#" },
        { label: "View All", href: "#" },
      ],
    },
    {
      title: "Help and Support",
      links: [
        { label: "Help centre", href: "#" },
        { label: "Online Banking", href: "#" },
        { label: "Fraud Centre", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ];

  const articles = [
    {
      category: "Growing my Business",
      date: "17 November 2025",
      title:
        "Unlocking the Power of Generative AI: A Practical Guide for Small...",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    },
    {
      category: "Support",
      date: "17 November 2025",
      title: "Let's talk about debt, government debt",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    },
    {
      category: "Growing a business",
      date: "7 September 2025",
      title: "Cefar: Building More Than Websites",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white font-sans text-[#333]">
      {/* --- 1. HERO BANNER --- */}
      <div className="relative w-full h-[500px]">
        <img
          src="/small-business-bank-account-banner-home-banner-2.jpg"
          alt="Grow your business"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 left-0 z-10">
          <div
            className="bg-white pt-8 pb-10 px-10 md:px-14 shadow-2xl"
            style={{
              clipPath: "polygon(0 0, 85% 0, 100% 100%, 0% 100%)",
              width: "auto",
              maxWidth: "520px",
            }}
          >
            <div className="mb-6 max-w-[400px]">
              <h1 className="text-[28px] md:text-[38px] font-light leading-tight mb-3">
                Grow your business with HSBC UK
              </h1>
              <p className="text-[15px] md:text-[16px] text-gray-700 leading-snug">
                Starting a business or looking to switch? We have a range of
                award-winning Business Banking Accounts for you to choose from.
              </p>
            </div>
            <a
              href="#"
              className="inline-block bg-[#db0011] hover:bg-black text-white px-8 py-3 font-bold text-[15px] transition-colors"
            >
              Find out more
            </a>
          </div>
        </div>
      </div>

      {/* --- 2. QUICK LINKS GRID --- */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {quickLinks.map((section, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-[3px] h-[35px] bg-[#db0011]"></div>
                <h2 className="text-[24px] md:text-[32px] font-light">
                  {section.title}
                </h2>
              </div>
              <ul className="space-y-4">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx} className="group">
                    <a
                      href="#"
                      className="text-[16px] text-gray-700 hover:text-[#db0011] flex items-center"
                    >
                      {link.label}{" "}
                      <span className="ml-2 text-[#db0011] group-hover:translate-x-1 transition-transform">
                        ›
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. BUSINESS INSIGHTS & CASE STUDIES (NEW SECTION) --- */}
      <div className="bg-white py-16 lg:py-24 border-t border-gray-100">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-[3px] h-[35px] bg-[#db0011]"></div>
                <h2 className="text-[28px] md:text-[36px] font-light">
                  Business Insights and Case Studies
                </h2>
              </div>
              <p className="text-gray-600 max-w-2xl">
                Here's where you'll find our latest articles with a range of
                hints, tips and insights to inspire, inform and guide you.
              </p>
              <div className="pt-2">
                <button className="border border-gray-400 px-6 py-1.5 text-sm font-medium hover:bg-gray-50 transition-colors">
                  View all
                </button>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex space-x-2 mt-6 md:mt-0">
              <button className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                <span className="sr-only">Previous</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors">
                <span className="sr-only">Next</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Article Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[16/10] overflow-hidden mb-6">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <p className="text-[13px] font-bold text-gray-500 uppercase tracking-wider">
                    {article.category}
                  </p>
                  <p className="text-[13px] text-gray-400">{article.date}</p>
                  <h3 className="text-[18px] md:text-[20px] font-light leading-snug group-hover:text-[#db0011] transition-colors">
                    {article.title}
                  </h3>
                  <div className="pt-4 flex items-center text-gray-500 text-xs">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Article
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Signature Red Bottom Accent */}
      <div className="w-full h-[4px] bg-[#db0011]"></div>
    </section>
  );
};

export default Business;
