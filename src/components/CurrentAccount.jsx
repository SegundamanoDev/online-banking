import React from "react";
import { Link } from "react-router-dom";

const CurrentAccount = () => {
  const accounts = [
    {
      title: "Bank Account",
      description:
        "Our most popular, everyday current account that provides all you need to stay on top of your finances.",
      category: "Everyday",
    },
    {
      title: "Premier Bank Account",
      description:
        "Premium account with preferred products. £100k income or savings required.",
      category: "Everyday",
    },
    {
      title: "Private Banking",
      description:
        "Exclusive benefits and advanced wealth solutions. £1.5m+ investments required.",
      category: "Everyday",
    },
    {
      title: "Advance Account",
      description:
        "Everyday banking with retail offers and no monthly account fee.",
      category: "Everyday",
    },
    {
      title: "Basic Bank Account",
      description:
        "A basic account for those who don't qualify for our other accounts.",
      category: "Everyday",
    },
    {
      title: "Kinetic Business",
      description:
        "For sole traders or single-director businesses. Apply in minutes via app.",
      category: "Business",
    },
    {
      title: "Student Account",
      description:
        "Designed to help you make the most of student life with a 0% overdraft.",
      category: "Student",
    },
    {
      title: "Int. Student",
      description:
        "For international students who have lived in the UK for less than 3 years.",
      category: "Student",
    },
    {
      title: "Graduate Account",
      description:
        "Ideal whether you're starting work or taking time out after university.",
      category: "Student",
    },
    {
      title: "Children's Account",
      description:
        "For 11 to 17 year olds, with a debit card and linked savings.",
      category: "Young",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HEADER SECTION */}
      <header className="bg-white pt-16 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Explore our current accounts
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            Take a look at our full range of current accounts. To apply, you'll
            need to be 18 or older (unless otherwise stated).
          </p>
        </div>
      </header>

      {/* 2. CHARCOAL PROMO SECTION */}
      <section className="bg-[#333333] overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* flex-col: stacked on mobile
        md:flex-row: side-by-side on desktop
        items-stretch: ensures the image height matches the text height 
    */}
          <div className="flex flex-col md:flex-row items-stretch">
            {/* 1. Text Content - flex-1 takes up half the space */}
            <div className="flex-1 py-12 md:py-20 pr-0 md:pr-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight leading-tight">
                Find the right current account for you
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-md">
                Not sure which account to choose? Compare our current accounts
                and find the one that suits you best.
              </p>
              <div className="flex items-center">
                <Link
                  to="/current-accounts/compare"
                  className="group inline-flex items-center text-white font-bold text-lg hover:underline decoration-2 underline-offset-8"
                >
                  <span>Compare current accounts</span>
                  <svg
                    className="ml-3 w-3 h-3 fill-[#db0011] transition-transform group-hover:translate-x-1"
                    viewBox="0 0 11 16"
                  >
                    <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* 2. Image Container - flex-1 takes up the other half */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <img
                src="/cq5dam.web.1280.1280.jpeg"
                alt="Compare products"
                /* md:absolute ensures the image fills the flex container height 
             object-cover prevents stretching 
          */
                className="w-full h-full md:absolute md:inset-0 object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID SECTION */}
      <main className="bg-white py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-[#db0011] pl-4">
              Our accounts at a glance
            </h2>
          </div>

          {/* 10-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {accounts.map((account, index) => (
              <div
                key={index}
                className="flex flex-col bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Card Top: ATM Card Graphic */}
                <div className="p-3 bg-gray-50/50">
                  <div className="relative aspect-[1.58/1] w-full bg-gradient-to-br from-[#444] to-[#111] rounded-md overflow-hidden shadow-md group-hover:scale-[1.03] transition-transform">
                    {/* Chip */}
                    <div className="absolute top-[20%] left-[10%] w-[18%] h-[25%] bg-gradient-to-tr from-yellow-600 to-yellow-200 rounded-sm opacity-80" />
                    {/* Brand */}
                    <div className="absolute top-[15%] right-[10%] text-white font-bold italic text-[8px] tracking-tighter">
                      HSBC
                    </div>
                    {/* Card Numbers Placeholder */}
                    <div className="absolute bottom-[20%] left-[10%] space-x-1 flex">
                      <div className="w-4 h-1 bg-white/20 rounded-full" />
                      <div className="w-4 h-1 bg-white/20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 flex flex-col flex-grow bg-white">
                  {/* Category Tag - High Contrast Red */}
                  <span className="text-sm uppercase tracking-wider text-[#db0011] font-bold mb-2">
                    {account.category}
                  </span>

                  {/* Title - Set to 18px (text-lg) to stand out above the 16px body text */}
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight min-h-[56px] group-hover:text-[#db0011] transition-colors">
                    {account.title}
                  </h3>

                  {/* Description - Exactly 16px (text-base) as requested */}
                  <p className="text-base text-gray-700 leading-relaxed mb-6 flex-grow">
                    {account.description}
                  </p>

                  {/* Action Link - Bold and clear at 16px */}
                  <Link
                    to={`/accounts/${account.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className="mt-auto inline-flex items-center text-base font-bold text-gray-900 group-hover:text-[#db0011] border-b-2 border-transparent hover:border-[#db0011] pb-1 transition-all w-fit"
                  >
                    <span>Learn more</span>
                    <svg
                      className="ml-2 w-3 h-3 fill-current"
                      viewBox="0 0 11 16"
                    >
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CurrentAccount;
