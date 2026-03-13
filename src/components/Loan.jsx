import React, { useState } from "react";

// --- Sub-Component: Chevron Icon ---
const ChevronIcon = ({ isOpen, className = "w-4 h-4" }) => (
  <svg
    className={`${className} transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
    viewBox="0 0 11 16"
    fill="currentColor"
  >
    <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
  </svg>
);

// --- Sub-Component: FAQ Accordion ---
const FAQItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left hover:text-[#db0011] transition-colors group"
      >
        <h3 className="text-xl font-medium pr-4">{title}</h3>
        <div className="bg-gray-100 p-2 rounded-full group-hover:bg-[#db0011] group-hover:text-white transition-colors">
          <ChevronIcon isOpen={isOpen} className="w-3 h-3 rotate-90" />
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}
      >
        <div className="text-gray-700 leading-relaxed max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

// --- Main Component ---
const LoansPage = () => {
  return (
    <div className="bg-white font-sans text-gray-900 antialiased">
      {/* 1. HERO SECTION */}
      <header className="max-w-6xl mx-auto px-4 py-16">
        <h1 className="text-5xl font-light mb-8">Loans</h1>
        <p className="text-2xl text-gray-700 max-w-4xl leading-relaxed">
          Whether you want a bank loan to buy a car, improve your home or
          consolidate your existing debts, compare our loans to find the one
          that’s perfect for your plans
          <sup className="text-[#db0011] font-bold ml-1 text-sm cursor-help">
            1
          </sup>
          .
        </p>
      </header>

      {/* 2. CORE PRODUCTS (Personal, Premier, Car) */}
      <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Loan */}
        <div className="flex flex-col border border-gray-200 shadow-sm">
          <img
            src="/content/dam/hsbc/en/images/articles/16-9/loans/couple-new-home.jpg"
            alt="Personal"
            className="aspect-video object-cover"
          />
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-4">Personal Loan</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Borrow from £1,000 to £30,000 with a personal loan and make your
              goals a reality.
            </p>
            <div className="mt-auto bg-gray-900 p-5 text-white rounded-sm">
              <p className="text-xs text-gray-400 uppercase font-bold tracking-widest mb-1">
                Key Information
              </p>
              <p className="text-xl font-bold">6.2% APR representative</p>
              <p className="text-xs text-gray-400 mt-1">
                available for loans between £7,500 and £20,000
              </p>
            </div>
          </div>
        </div>

        {/* Premier Personal Loan */}
        <div className="flex flex-col border border-gray-200 shadow-sm border-t-4 border-t-[#db0011]">
          <img
            src="/content/dam/hsbc/en/images/16-9/inside-air-balloon.jpg"
            alt="Premier"
            className="aspect-video object-cover"
          />
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-4">Premier Personal Loan</h3>
            <p className="text-gray-600 mb-6 font-medium">
              Borrow up to £50,000 with a personal loan for Premier customers.
            </p>
            <div className="mt-auto bg-gray-900 p-5 text-white rounded-sm">
              <p className="text-xs text-[#db0011] uppercase font-bold tracking-widest mb-1">
                Key Information
              </p>
              <p className="text-xl font-bold">5.7% APR representative</p>
              <p className="text-xs text-gray-400 mt-1">
                available for loans between £10,000 and £30,000
              </p>
            </div>
          </div>
        </div>

        {/* Car Loan */}
        <div className="flex flex-col border border-gray-200 shadow-sm">
          <img
            src="/content/dam/hsbc/hbmt/images/loans/16-9/1752-road-trip-800x450.jpg"
            alt="Car"
            className="aspect-video object-cover"
          />
          <div className="p-8 flex flex-col flex-grow">
            <h3 className="text-2xl font-bold mb-4">Car Loan</h3>
            <p className="text-gray-600 mb-8 font-medium">
              Get a loan for a new or used car that you pay back at the speed
              you want.
            </p>
            <button className="mt-auto text-[#db0011] font-bold flex items-center hover:underline self-start">
              View car loans{" "}
              <ChevronIcon isOpen={false} className="ml-2 w-3 h-3 rotate-0" />
            </button>
          </div>
        </div>
      </section>

      {/* 3. USE CASE GRID */}
      <section className="max-w-6xl mx-auto px-4 py-16 border-t border-gray-100">
        <h2 className="text-3xl font-light mb-10">
          What are you looking to use your loan for?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Want to borrow more?",
              desc: "If you already have an HSBC loan you can either take out an additional loan or top up your existing loan.",
            },
            {
              title: "Home Improvement Loan",
              desc: "Make your dream home a reality with a home improvement loan.",
            },
            {
              title: "Debt Consolidation Loan",
              desc: "Help make your debts easier to manage with a single monthly repayment plan.",
            },
            {
              title: "Holiday Loan",
              desc: "Make your dream trip a reality with a Holiday Loan.",
            },
          ].map((item, idx) => (
            <div key={idx} className="group cursor-pointer">
              <h4 className="text-lg font-bold mb-3 flex items-center group-hover:text-[#db0011] transition-colors leading-tight">
                {item.title}{" "}
                <ChevronIcon isOpen={false} className="ml-2 w-2.5 h-2.5" />
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. REPAYMENT CALCULATOR STRIP */}
      <section className="bg-[#333333] text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-light mb-4">
              Work out the total cost of a loan
            </h2>
            <p className="text-gray-300 text-lg">
              Find out your estimated representative interest rates and monthly
              repayments without impacting your credit score using our{" "}
              <strong>Personal Loan calculator</strong>.
            </p>
          </div>
          <button className="bg-white text-gray-900 font-bold px-10 py-4 rounded-sm hover:bg-gray-100 transition-all whitespace-nowrap">
            Launch Calculator
          </button>
        </div>
      </section>

      {/* 5. EDITORIAL GUIDES SECTION */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="mb-12">
          <h2 className="text-3xl font-light mb-4">
            Making the most of your loan
          </h2>
          <p className="text-xl text-gray-600">
            Read our helpful guides about how loans work, and what you could use
            them for.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {[
            {
              t: "Things to consider when buying a used car",
              d: "Get tips on things to keep in mind when buying a used car, from working out your budget to insurance.",
            },
            {
              t: "What is a secured loan?",
              d: "Get to know how a secured loan works, its benefits and things to consider before taking one out.",
            },
            {
              t: "What is an unsecured loan?",
              d: "Get to know the types of unsecured loan and things to consider before taking one out.",
            },
            {
              t: "What are some of the different types of loan?",
              d: "Learn about different types of loan you might come across, such as secured and unsecured.",
            },
            {
              t: "What is a joint loan?",
              d: "Learn how a joint loan lets you to borrow money with a partner, relative or close friend.",
            },
          ].map((guide, i) => (
            <div
              key={i}
              className="flex flex-col border-l-2 border-gray-100 pl-6 hover:border-[#db0011] transition-all group cursor-pointer"
            >
              <h4 className="text-lg font-bold mb-3 group-hover:text-[#db0011] transition-colors leading-snug">
                {guide.t}
              </h4>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {guide.d}
              </p>
              <span className="text-[#db0011] text-xs font-bold uppercase tracking-widest flex items-center">
                Read Guide{" "}
                <ChevronIcon isOpen={false} className="ml-1 w-2 h-2" />
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. FAQ SECTION (WHAT OTHER PEOPLE ARE ASKING) */}
      <section className="bg-gray-50 py-20 px-4 border-t border-gray-200">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-10 text-center md:text-left">
            What other people are asking
          </h2>
          <div className="space-y-1">
            <FAQItem title="How to get a loan?">
              <p>
                You can apply directly on our website or by visiting a branch.
                Typically, you'll need proof of identity, address, and income.
              </p>
            </FAQItem>
            <FAQItem title="What is a secured loan?">
              <p>
                A secured loan uses an asset (like your home) as collateral.{" "}
                <strong>Important:</strong> Your home may be at risk if you do
                not keep up repayments.
              </p>
            </FAQItem>
            <FAQItem title="What is an unsecured loan?">
              <p>
                An unsecured loan (personal loan) allows you to borrow without
                using an asset as collateral, based on your credit status.
              </p>
            </FAQItem>
            <FAQItem title="What is a loan?">
              <p>
                A loan is a sum of money borrowed from a lender that is repaid
                in installments over a fixed term, usually with interest.
              </p>
            </FAQItem>
            <FAQItem title="What is APR on a loan?">
              <p>
                Annual Percentage Rate (APR) includes the interest rate plus any
                extra fees, showing you the total yearly cost of borrowing.
              </p>
            </FAQItem>
            <FAQItem title="Can you pay a loan off early?">
              <p>
                Yes, most providers allow early repayment, though they may apply
                an Early Repayment Charge (ERC).
              </p>
            </FAQItem>
            <FAQItem title="How long does it take to get a loan?">
              <p>
                Timelines vary; some customers get an instant decision, while
                others may take a few days for manual review.
              </p>
            </FAQItem>
            <FAQItem title="How can I calculate my loan repayments?">
              <p>
                You can use the <strong>Personal Loan calculator</strong>{" "}
                section above to estimate monthly costs based on your borrow
                amount and term.
              </p>
            </FAQItem>
          </div>
        </div>
      </section>

      {/* 7. FOOTNOTES */}
      <footer className="max-w-6xl mx-auto px-4 py-12 text-xs text-gray-500">
        <div className="border-t border-gray-200 pt-8">
          <p>
            1. Eligibility criteria and credit status apply. Personal loans are
            subject to status.
          </p>
          <p className="mt-4 italic font-medium">
            DISCLAIMER: This is a front-end simulation and does not provide
            actual financial advice or loan approvals.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoansPage;
