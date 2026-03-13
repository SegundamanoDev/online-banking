import React from "react";

// Reusable Chevron Component for consistency
const ChevronRight = () => (
  <svg
    className="w-4 h-4 text-[#db0011] inline-block ml-1 transition-transform group-hover:translate-x-1"
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
);

// Reusable Card for Insurance Items
const InsuranceItem = ({ title, description, link = "#" }) => (
  <div className="py-8 border-b border-gray-200 group cursor-pointer hover:bg-gray-50 transition-colors px-4 -mx-4">
    <a href={link} className="block">
      <h3 className="text-xl font-bold text-gray-900 flex items-center group-hover:text-[#db0011] transition-colors">
        {title} <ChevronRight />
      </h3>
      {description && (
        <p className="mt-2 text-gray-600 leading-relaxed max-w-3xl">
          {description}
        </p>
      )}
    </a>
  </div>
);

const InsurancePage = () => {
  return (
    <div className="bg-white font-sans text-gray-900">
      {/* --- HERO SECTION --- */}
      <header className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light mb-6">
            Explore HSBC Insurance products
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl leading-relaxed">
            Our wide range of insurance policies can help you protect what you
            care about most
          </p>
        </div>
      </header>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        {/* 1. HOME INSURANCE SECTION */}
        <section className="mt-12">
          <h2 className="text-3xl font-light border-b-2 border-gray-900 pb-4 mb-2">
            Home insurance
          </h2>
          <div className="flex flex-col">
            <InsuranceItem
              title="Buildings and contents insurance"
              description="Combine contents and buildings insurance to get complete coverage for your home."
            />
            <InsuranceItem
              title="Contents only insurance"
              description="Get cover for loss of or damage to the contents in your home."
            />
            <InsuranceItem
              title="Buildings only insurance"
              description="We'll cover whatever it costs to repair your home after loss or damage."
            />
          </div>
        </section>

        {/* 2. LIFE INSURANCE SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-light border-b-2 border-gray-900 pb-4 mb-2">
            Life insurance
          </h2>
          <div className="flex flex-col">
            <InsuranceItem
              title="Life cover"
              description="Give your loved ones the financial support they might need if the unexpected happens."
            />
            <InsuranceItem
              title="Critical illness cover"
              description="Get financial support for yourself and your loved ones should you unexpectedly fall ill."
            />
            <InsuranceItem
              title="Cancer Bereavement Cover for Premier customers"
              description="£2,000 will be paid into your account if you pass away from a cancer related cause (if the policy started over 12 months ago). Subject to eligibility."
            />
          </div>
        </section>

        {/* 3. TRAVEL INSURANCE SECTION */}
        <section className="mt-20">
          <h2 className="text-3xl font-light border-b-2 border-gray-900 pb-4 mb-2">
            Travel insurance
          </h2>
          <div className="flex flex-col">
            <InsuranceItem
              title="Premier Worldwide Travel Insurance"
              description="If you’re a Premier customer, here are details of the worldwide cover for you and your family. Subject to application."
            />
            <InsuranceItem
              title="Insurance Aspects"
              description="If you’re an existing HSBC Advance customer with an HSBC Insurance Aspects policy, here are your benefits."
            />
          </div>
        </section>

        {/* 4. MORE PRODUCTS (Business) */}
        <section className="mt-20">
          <h2 className="text-3xl font-light border-b-2 border-gray-900 pb-4 mb-2">
            More insurance products
          </h2>
          <div className="flex flex-col">
            <InsuranceItem
              title="Business insurance"
              description="See a range of policies designed to offer dedicated protection for your business."
            />
          </div>
        </section>

        {/* 5. EXPLORE MORE (Footer Links) */}
        <section className="mt-24 bg-gray-50 -mx-4 px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-light mb-10">Explore more</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <a href="#" className="group">
                <h3 className="text-lg font-bold flex items-center group-hover:text-[#db0011]">
                  Manage your insurance <ChevronRight />
                </h3>
              </a>
              <a href="#" className="group">
                <h3 className="text-lg font-bold flex items-center group-hover:text-[#db0011]">
                  What to consider when buying insurance <ChevronRight />
                </h3>
              </a>
              <a href="#" className="group">
                <h3 className="text-lg font-bold flex items-center group-hover:text-[#db0011]">
                  What are the different types of insurance? <ChevronRight />
                </h3>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* --- FOOTER SPACING --- */}
      <footer className="h-20 border-t border-gray-100"></footer>
    </div>
  );
};

export default InsurancePage;
