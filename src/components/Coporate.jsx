import React from "react";
import { Link } from "react-router-dom";

const Corporate = () => {
  // Data for the 2-column specialism/sustainability section
  const specialismCards = [
    {
      title: "Industry Specialism",
      description:
        "Our Sector teams bring diverse perspectives, technical expertise and a commitment to share best practice to help your business energise for growth.",
      image: "/2800x1386px-sectors-homepage.jpg",
      link: "/en-gb/corporate/campaigns/sectors",
    },
    {
      title: "Sustainability for business in the UK",
      description:
        "We’re here to help you break down your business sustainability ambitions into achievable actions that can have an impact on your business. It all starts with a conversation.",
      image: "/sustainability-hub-updated-banner-2023.jpg",
      link: "/en-gb/campaigns/sustainability-for-business",
    },
  ];

  // Data for the 3-column working capital/growth/payments section
  const solutionsCards = [
    {
      title: "Working Capital",
      description:
        "Improve working capital by unlocking funds caught in the supply chain, and manage incoming and outgoing cash flows more effectively across your organization.",
      image: "/category-bg-working-capital.jpg",
      link: "/en-gb/corporate/solutions/working-capital",
    },
    {
      title: "Growth",
      description:
        "Inject capital into your supply chain, expand into new markets and improve your existing space and systems.",
      image: "/category-bg-growth.jpg",
      link: "/en-gb/corporate/solutions/growth",
    },
    {
      title: "Payments",
      description:
        "Streamline domestic and foreign payments and collections while also making the best use of cash balances.",
      image: "/category-bg-payments.jpg",
      link: "/en-gb/corporate/solutions/payments",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[500px] md:h-[600px] lg:h-[650px] overflow-hidden">
        <img
          src="/corporate-uk-homebanner.jpg"
          alt="Grow your corporate business with HSBC UK"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="relative h-full max-w-6xl mx-auto px-4 md:px-6">
          <div className="absolute bottom-10 left-4 right-4 md:left-6 md:bottom-12 md:max-w-[580px] bg-white p-8 md:p-12 shadow-2xl border-b-4 border-[#db0011]">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-gray-900 leading-[1.15]">
                Grow your corporate business with HSBC UK
              </h1>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed font-normal">
                Looking to grow your business at home or internationally, we
                have relationship directors in your local area and industry
                specialists that can help.
              </p>
              <div className="pt-2">
                <Link
                  to="/en-gb/corporate/contact-us"
                  className="inline-block bg-[#db0011] text-white font-bold py-3.5 px-8 transition-colors duration-200 hover:bg-[#333] active:scale-[0.98] text-center uppercase tracking-wider text-sm shadow-md"
                >
                  Contact us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WELCOME & INTRO SECTION */}
      <main className="flex-grow">
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-1.5 h-10 bg-[#db0011]" aria-hidden="true" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
                Welcome to HSBC UK Corporate Banking
              </h2>
            </div>
            <div className="md:ml-5.5 max-w-4xl space-y-6 text-gray-700 leading-relaxed text-lg">
              <p>
                Where you find challenge, we’ll help you harness opportunity.
                With HSBC UK as your partner, doubts about exploring new markets
                becomes certainties. Obstacles like access to finance become
                strategic advantages. And ambitions to scale up or expand become
                reality.
              </p>
              <p className="font-medium text-gray-900">
                With our specialist team, global reach and breadth of innovative
                solutions, we’re equipped and ready to connect you to the
                opportunities you need in order to reach your aspirations.
              </p>
            </div>
          </div>
        </section>

        {/* 3. USEFUL LINKS (HSBCnet) */}
        <section className="bg-[#f4f4f4] py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
              Useful links
            </h2>
            <div className="bg-white shadow-sm flex flex-col md:flex-row overflow-hidden">
              <div className="flex-1 p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  A digital banking solution built around your corporate
                  business needs
                </h3>
                <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                  HSBCnet brings together a range of powerful, intuitive online
                  banking tools to give you seamless control, cashflow
                  visibility and operational simplicity.
                </p>
                <div>
                  <a
                    href="http://www.hsbcnet.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center group bg-white border-2 border-gray-900 text-gray-900 font-bold py-3 px-8 hover:bg-black hover:text-white hover:border-black transition-all"
                  >
                    Login
                    <svg
                      className="ml-3 w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="flex-1 h-[300px] md:h-auto">
                <img
                  src="/hsbcnet-useful-links-img-corp-homepage.jpg"
                  alt="HSBCnet"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. INDUSTRY & SUSTAINABILITY (2-COLUMN) */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
              {specialismCards.map((card, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="overflow-hidden mb-6">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[250px] md:h-[320px] object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#db0011] transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {card.description}
                    </p>
                    <Link
                      to={card.link}
                      className="inline-flex items-center text-[#db0011] font-bold text-lg hover:underline underline-offset-4"
                    >
                      <span>Learn more</span>
                      <svg
                        className="ml-2 w-3 h-3 fill-current"
                        viewBox="0 0 18 18"
                      >
                        <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. FINANCING REPORT PROMO (IMAGE RIGHT) */}
        <section className="bg-white py-12 md:py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row bg-[#f4f4f4] overflow-hidden">
              <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  HSBC Financing for Growth report
                </h2>
                <div className="text-lg text-gray-700 mb-8">
                  Discover how ambitious UK businesses are turning uncertainty
                  to action in our HSBC Financing for Growth report.
                </div>
                <Link
                  to="/en-gb/corporate/campaigns/growth-finance-report"
                  className="inline-block bg-[#db0011] text-white font-bold py-4 px-8 hover:bg-[#333] transition-colors"
                >
                  Explore the HSBC Report
                </Link>
              </div>
              <div className="flex-1 relative min-h-[300px]">
                <img
                  src="/growth-finance-report-promo-image.jpg"
                  alt="Growth Report"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 6. SOLUTIONS GRID (3-COLUMN) */}
        <section className="bg-white py-16">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {solutionsCards.map((item, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="mb-6 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[240px] object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#db0011] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <Link
                      to={item.link}
                      className="mt-auto inline-flex items-center text-[#db0011] font-bold hover:underline underline-offset-4"
                    >
                      <span className="mr-2">Learn more</span>
                      <svg
                        className="w-2.5 h-2.5 fill-current"
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
        </section>

        {/* 7. GLOBAL GROWTH PROMO (IMAGE LEFT) */}
        <section className="bg-white py-12 md:pb-24">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row-reverse bg-[#f4f4f4] overflow-hidden">
              <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Unlock global growth with trade, payments & FX solutions
                </h2>
                <div className="text-lg text-gray-700 mb-8">
                  Want help unlocking global growth? Find out how HSBC can
                  support your international growth ambitions.
                </div>
                <Link
                  to="/en-gb/campaigns/supporting-your-global-ambitions"
                  className="inline-block bg-[#db0011] text-white font-bold py-4 px-10 hover:bg-[#333] transition-colors"
                >
                  Find out more
                </Link>
              </div>
              <div className="flex-1 relative min-h-[300px] md:min-h-[450px]">
                <img
                  src="/global-growth-with-trade-payments-fx-solutions-promo-banner.jpg"
                  alt="Global Growth"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Corporate;
