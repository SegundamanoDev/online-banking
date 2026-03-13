import React from "react";

const BusinessAccount = () => {
  return (
    <main className="w-full bg-white font-sans text-[#333]">
      {/* --- 1. PAGE HEADER (Back Link) --- */}
      <div className="bg-[#333] py-3 px-6 lg:px-24">
        <a
          href="/en-gb/products-and-solutions"
          className="flex items-center text-white text-sm hover:underline"
        >
          <svg className="w-4 h-4 mr-2" viewBox="0 0 18 18" fill="currentColor">
            <path d="M7.153 2L.151 9l7.002 7h1.696l-6.4-6.4H18V8.4H2.449l6.4-6.4z" />
          </svg>
          Back to products & solutions
        </a>
      </div>

      {/* --- 2. HERO BANNER --- */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden">
        <img
          src="https://www.business.hsbc.uk/-/media/media/uk/images/products-and-solutions/business-accounts-banner.jpg"
          alt="Business Accounts Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center">
          <div className="max-w-[1440px] mx-auto w-full px-6 lg:px-24">
            <h1 className="text-white text-3xl md:text-5xl font-light tracking-tight">
              Compare our Business Bank Accounts
            </h1>
          </div>
        </div>
      </div>

      {/* --- 3. TRUSTPILOT & INTRO SECTION --- */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img
              src="https://www.business.hsbc.uk/-/media/media/uk/images/products-and-solutions/business-banking-trustpilot-logo.jpg"
              alt="Trustpilot logo"
              className="w-full max-w-[400px] h-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p>
              Explore our range of award winning business accounts. From
              start-ups to established businesses that need a Relationship
              Manager, HSBC has a range of products that suit every business's
              needs. With 160 years’ experience supporting businesses like
              yours, we understand what it takes and will support you all the
              way.
            </p>
          </div>
        </div>
      </div>

      {/* --- 4. COMPARISON CARDS SECTION --- */}
      <div className="bg-[#f5f5f5] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <div className="flex items-center mb-12">
            <div className="w-[4px] h-[40px] bg-[#db0011] mr-4"></div>
            <h2 className="text-3xl font-light">Business Bank Accounts</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Startups */}
            <div className="bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                <img
                  src="https://www.business.hsbc.uk/-/media/media/uk/images/common/accounts-icon.jpg"
                  alt="Icon"
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-medium">
                  Startups and small businesses
                </h3>
              </div>
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://cdn.optimizely.com/img/24086370557/2b62599a8be64a79901bb31154fc8fc3.png"
                  alt="Small Business"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-grow">
                <h2 className="text-2xl font-light mb-6">
                  Small Business Banking Account
                </h2>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex gap-2">
                    <span>•</span> No monthly account fee and free UK digital
                    banking¹
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Suitable for all legal entities
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Desktop and mobile app access
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Support from Business Specialists
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Access borrowing up to £100k²
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center bg-[#db0011] text-white px-6 py-3 font-bold hover:bg-black transition-colors"
                >
                  Find out more
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                  >
                    <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Card 2: Established */}
            <div className="bg-white shadow-lg overflow-hidden flex flex-col">
              <div className="p-6 border-b border-gray-100 flex items-center gap-4">
                <img
                  src="https://www.business.hsbc.uk/-/media/media/uk/images/common/accounts-icon.jpg"
                  alt="Icon"
                  className="w-10 h-10"
                />
                <h3 className="text-xl font-medium">Established businesses</h3>
              </div>
              <div className="aspect-video overflow-hidden">
                <img
                  src="https://cdn.optimizely.com/img/24086370557/a0c663b1413d4107a52d1bb3ec7f9f9a.jpg"
                  alt="Established Business"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex-grow">
                <h2 className="text-2xl font-light mb-6">
                  Business Banking Account
                </h2>
                <ul className="space-y-4 text-gray-600 mb-8">
                  <li className="flex gap-2">
                    <span>•</span> 12 months free banking³
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Suitable for all legal entities
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Desktop and mobile app access
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Access borrowing solutions over £100k²
                  </li>
                  <li className="flex gap-2">
                    <span>•</span> Access to a Relationship Manager⁴
                  </li>
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center bg-[#db0011] text-white px-6 py-3 font-bold hover:bg-black transition-colors"
                >
                  Find out more
                  <svg
                    className="ml-2 w-4 h-4"
                    viewBox="0 0 18 18"
                    fill="currentColor"
                  >
                    <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- 5. SPECIALIST ACCOUNTS (Kinetic & Charity) --- */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 py-20 border-t border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Kinetic */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-[4px] h-[30px] bg-[#db0011] mr-4"></div>
              <h2 className="text-2xl font-light">
                Mobile app only business account
              </h2>
            </div>
            <h3 className="text-xl font-medium">
              HSBC Kinetic Current Account
            </h3>
            <p className="text-gray-600 leading-relaxed">
              If you’re a sole trader or single director shareholder business,
              HSBC Kinetic is our mobile app only account i.e. no desktop
              access. Only the sole trader or director can manage the account.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#db0011] font-bold hover:underline"
            >
              Find out more
              <svg
                className="ml-2 w-3 h-3"
                viewBox="0 0 18 18"
                fill="currentColor"
              >
                <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
              </svg>
            </a>
          </div>

          {/* Charity */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-[4px] h-[30px] bg-[#db0011] mr-4"></div>
              <h2 className="text-2xl font-light">Charitable organisations</h2>
            </div>
            <h3 className="text-xl font-medium">Charitable Bank Account</h3>
            <p className="text-gray-600 leading-relaxed">
              Everyday banking at a reduced price for charities and
              not-for-profit organisations with a charitable purpose.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-[#db0011] font-bold hover:underline"
            >
              Find out more
              <svg
                className="ml-2 w-3 h-3"
                viewBox="0 0 18 18"
                fill="currentColor"
              >
                <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* --- 6. LEGAL DISCLAIMER --- */}
      <div className="bg-white py-12 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-24">
          <ol className="text-xs text-gray-500 space-y-4 list-decimal pl-4">
            <li>
              Free UK digital banking means day to day standard electronic
              transfers...
            </li>
            <li>
              Borrowing is subject to application, eligibility, affordability...
            </li>
            <li>
              Free banking means no monthly account fee and all day to day
              standard transactions...
            </li>
            <li>
              Business Banking customers. These are typically small and medium
              sized enterprises...
            </li>
          </ol>
        </div>
      </div>
    </main>
  );
};

export default BusinessAccount;
