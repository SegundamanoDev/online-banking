import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  const creditCards = [
    {
      title: "Balance Transfer Credit Card",
      description:
        "Enjoy up to 36 months interest-free for balance transfers (3.19% fee, min £5). 24.9% APR (variable).",
      category: "Credit Cards",
    },
    {
      title: "Purchase Plus Credit Card",
      description:
        "Up to 20 months interest-free purchases and 17 months interest-free balance transfers (3.49% fee). 24.9% APR (variable).",
      category: "Credit Cards",
    },
    {
      title: "Rewards Credit Card",
      description:
        "Earn reward points on eligible purchases you make. 26.9% APR (variable).",
      category: "Rewards",
    },
    {
      title: "Classic Credit Card",
      description:
        "Designed to help you improve or start building your credit rating. 29.9% APR (variable).",
      category: "Credit Building",
    },
    {
      title: "Premier Credit Card",
      description:
        "Travel benefits and rewards with no annual fee. Get 20,000 points when you spend £2,000 in 90 days. For Premier customers.",
      category: "Premium",
    },
    {
      title: "Premier World Elite Mastercard",
      description:
        "Exclusive travel benefits. Get 60,000 points when you spend £3,000 in 90 days. £290 annual fee. 100.2% APR (variable).",
      category: "Premium",
    },
    {
      title: "Student Credit Card",
      description:
        "A purpose-built card for existing HSBC Student Bank account holders. 18.9% APR (variable).",
      category: "Student",
    },
  ];
  const footnotes = [
    "Eligible spend excludes cash advances, fees, balance transfers, cheques, refunds, interest or any other charges.",
    "To receive the 20,000 reward points, you need to have been approved for this card and spent £2,000 on eligible purchases in the first 90 days of your card membership. Purchases made by the main and / or any additional cardholder during the first 90 days of account opening will count towards the £2,000 qualifying spend. The offer is limited to a single award of 20,000 reward points per account, regardless of the number of additional cardholders, or any spend in excess of £2,000. The reward points will be awarded 91 days after account opening, unless we've delayed applying one or more qualifying purchases made during the first 90 days to your account. In this case, the points will be awarded once the purchases have been applied. Offer can be withdrawn at any time.",
    "Welcome bonus points offer valid from 2 March 2026 to 28 May 2026. To benefit from this offer, you need to have applied for the card before midnight on 28 May 2026. Purchases made by the main and / or any additional cardholder during the first 90 days of account opening will count towards the £3,000 qualifying spend. The offer is limited to a single award of 60,000 points per account, regardless of the number of additional cardholders, or any spend in excess of £3,000. The reward points will be awarded in two sets, one of 40,000 and one of 20,000. These will be awarded 91 days after account opening, unless we’ve delayed applying one or more qualifying purchases made during the first 90 days to your account. In this case the points will be awarded once they’ve been applied.",
  ];
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HEADER SECTION */}
      <header className="bg-white pt-16 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-gray-900 mb-6 tracking-tight leading-tight">
            Explore our credit cards
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            From transferring a balance, earning rewards or building your credit
            score, there's a card for every need.
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
                New to HSBC?
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-md">
                Even if you don't have a current account with us, you can still
                apply for our Balance Transfer or Purchase Plus Credit Card.
              </p>
            </div>

            {/* 2. Image Container - flex-1 takes up the other half */}
            <div className="flex-1 relative min-h-[300px] md:min-h-full">
              <img
                src="/cq5dam.web.1280.1280 (1).jpeg"
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
          <div className="flex flex-col items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900 border-l-4 border-[#db0011] pl-4">
              Explore credit cards
            </h2>
            <p>
              Credit is subject to status, affordability and terms and
              conditions. At the end of any promotional period, balance
              transfers and purchases will revert to the standard variable rate.
            </p>
          </div>

          {/* 10-Column Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {creditCards.map((account, index) => (
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
        <section className="bg-white py-12 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="max-w-4xl">
              {" "}
              {/* Keeping legal text narrow for readability */}
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                Additional information:
              </h2>
              <ol className="list-decimal pl-5 space-y-4">
                {footnotes.map((note, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 leading-relaxed"
                  >
                    <div id={`fn-${index}`} className="pl-2">
                      {note}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cards;
