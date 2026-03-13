import React from "react";

// Product Data Array - Centralized for easy updates
const savingsProducts = [
  {
    title: "Fixed Rate Savings Account",
    image: "/content/dam/hsbc/en/images/16-9/coins-in-jar.jpg",
    link: "/savings/products/fixed-rate/",
    description:
      "Save for 1 or 2 years. For current account and savings account customers only (not including Appointee/Executor Account, Loyalty Cash ISA or Regular Saver).",
    rates: [
      { label: "1-year term", value: "3.20% AER / gross" },
      { label: "2-year term", value: "3.20% AER / gross" },
      { label: "Instant access", value: "No" },
    ],
    footerNote: "Interest is paid monthly or yearly and the rate is fixed.",
    compareLink: "/savings/compare/fixed-rate-savings-account/",
  },
  {
    title: "Online Bonus Savings Account",
    image: "/content/dam/hsbc/en/images/16-9/red-wallet-smartphone.jpg",
    link: "/savings/products/online-bonus-saver/",
    description:
      "Get a higher interest rate in any months you don't make a withdrawal. For existing HSBC customers only. You can only open this account online.",
    rates: [
      { label: "Bonus up to £50k", value: "3.35% AER / 3.30% gross" },
      { label: "Standard rate", value: "1.05% AER / 1.04% gross" },
      { label: "Instant access", value: "Yes" },
    ],
    footerNote: "Interest is paid monthly and the rate is variable.",
    compareLink: "/savings/compare/online-bonus-savings-account/",
  },
  {
    title: "Regular Savings Account",
    image: "/content/dam/hsbc/en/images/16-9/stacked-toy.jpg",
    link: "/savings/products/regular-saver/",
    description:
      "Save between £25 and £250 every month with a 12-month fixed rate account. Available to customers with a current account.",
    rates: [
      { label: "Interest rate", value: "5.00% AER / gross" },
      { label: "Instant access", value: "No (restrictions apply)" },
    ],
    footerNote: "Interest is paid after 12 months and the rate is fixed.",
    compareLink: "/savings/compare/regular-savings-account/",
  },
  {
    title: "Loyalty Cash ISA",
    image: "/content/dam/hsbc/en/images/16-9/calendar-calculator.jpg",
    link: "/savings/products/cash-isa/",
    description:
      "Start saving tax-free with instant access to your money. For existing HSBC current account customers only.",
    rates: [
      { label: "Premier rate", value: "3.00% AER (2.96% tax-free)" },
      { label: "Standard rate", value: "2.50% AER (2.47% tax-free)" },
      { label: "Instant access", value: "Yes" },
    ],
    footerNote: "Interest is paid monthly and the rate is variable.",
    compareLink: "/savings/compare/loyalty-cash-isa/",
  },
  {
    title: "Fixed Rate Cash ISA",
    image: "/content/dam/hsbc/en/images/16-9/sweet-dispenser-coins.jpg",
    link: "/savings/products/fixed-rate-isa/",
    description:
      "Tax-free savings, with a fixed rate for up to 13 months. For current account customers only.",
    rates: [
      { label: "Fixed up to 13 months", value: "4.00% AER (4.00% tax-free)" },
      { label: "Instant access", value: "No (fees may apply)" },
    ],
    footerNote:
      "We calculate interest daily and credit this at the end of the fixed term.",
    compareLink: "/savings/compare/fixed-rate-cash-isa/",
  },
  {
    title: "Flexible Savings Account",
    image: "/content/dam/hsbc/en/images/16-9/slinky-red.jpg",
    link: "/savings/products/flexible-saver/",
    description:
      "Our most flexible savings account. Deposit money and make withdrawals as often as you like, and access your account the way you want.",
    rates: [
      { label: "Interest rate", value: "1.05% AER / 1.04% gross" },
      { label: "Instant access", value: "Yes" },
    ],
    footerNote: "Interest is paid monthly and the rate is variable.",
    compareLink: "/savings/compare/flexible-savings-account/",
  },
  {
    title: "Children's Savings Account",
    image: "/content/dam/hsbc/en/images/16-9/two-piggy-bank.jpg",
    link: "/savings/products/mysavings/",
    description:
      "An easy way to save for 7 to 17 year olds. Start saving from just £10, whether it's your pocket money or wages from your job.",
    rates: [
      { label: "Up to £3,000", value: "3.75% AER / 3.69% gross" },
      { label: "Over £3,000", value: "1.10% AER / 1.09% gross" },
      { label: "Instant access", value: "Yes" },
    ],
    footerNote: "Interest is paid monthly and the rate is variable.",
    compareLink: "/savings/compare/childrens-savings-account/",
  },
  {
    title: "Premier Savings Account",
    image: "/content/dam/hsbc/en/images/16-9/antique-safe.jpg",
    link: "/savings/products/premier/",
    description:
      "Help your money work harder with our flexible savings account exclusively for HSBC Premier customers.",
    rates: [
      { label: "Up to £50,000", value: "1.10% AER / 1.09% gross" },
      { label: "£50k to £100k", value: "1.15% AER / 1.14% gross" },
      { label: "Over £100,000", value: "1.65% AER / 1.64% gross" },
      { label: "Instant access", value: "Yes" },
    ],
    footerNote: "Interest is paid monthly and the rate is variable.",
    compareLink: "/savings/compare/premier-savings/",
  },
];

// Reusable Chevron Icon
const ChevronRight = ({ className = "w-3 h-3" }) => (
  <svg className={className} viewBox="0 0 11 16" aria-hidden="true">
    <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
  </svg>
);

const SavingsPage = () => {
  return (
    <div className="bg-white font-sans text-gray-900 overflow-x-hidden">
      {/* 1. HERO HEADER SECTION */}
      <header className="max-w-6xl mx-auto px-4 py-16 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-light mb-4">
          Explore our savings accounts
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-3xl">
          Take a look at our full range of savings accounts. Whether you want to
          save a lump sum or a little each month, we've got an account for you.
        </p>
      </header>

      {/* 2. CHARCOAL COMPARISON PROMO */}
      <section className="bg-[#333333] text-white py-12 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-light mb-3">
              Find the right savings account for you
            </h2>
            <p className="text-gray-300">
              Not sure which account to choose? Compare our savings and find the
              one that suits you best.
            </p>
          </div>
          <a
            href="/savings/compare/"
            className="group inline-flex items-center bg-white text-gray-900 font-bold px-8 py-4 rounded-sm hover:bg-gray-100 transition-colors"
          >
            Compare savings accounts
            <ChevronRight className="ml-3 fill-gray-900 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </section>

      {/* 3. MAIN PRODUCT GRID SECTION */}
      <section className="max-w-6xl mx-auto px-4 mt-20">
        <h2 className="text-3xl font-light mb-12 border-b border-gray-100 pb-8">
          Compare savings accounts from HSBC
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {savingsProducts.map((item, index) => (
            <article
              key={index}
              className="flex flex-col border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <a
                  href={item.link}
                  className="group flex justify-between items-start mb-4"
                >
                  <h3 className="text-xl md:text-2xl font-bold group-hover:underline decoration-[#db0011] underline-offset-4">
                    {item.title}
                  </h3>
                  <ChevronRight className="w-3 h-3 mt-2 flex-shrink-0 fill-[#db0011]" />
                </a>

                <p className="text-gray-700 mb-8 leading-relaxed line-clamp-3">
                  {item.description}
                </p>

                <div className="bg-gray-50 p-5 mb-6 rounded-sm border-l-4 border-gray-200">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">
                    Key Information
                  </h4>
                  <ul className="space-y-3 text-sm md:text-base">
                    {item.rates.map((rate, rIdx) => (
                      <li
                        key={rIdx}
                        className="flex justify-between items-baseline gap-4"
                      >
                        <span className="text-gray-600">{rate.label}:</span>
                        <span className="font-bold text-gray-900 text-right">
                          {rate.value}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm italic text-gray-500 mb-8">
                  {item.footerNote}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a
                    href={item.compareLink}
                    className="group text-sm font-bold flex items-center hover:text-[#db0011] transition-colors"
                  >
                    Compare to other savings accounts
                    <ChevronRight className="w-2.5 h-2.5 ml-2 fill-[#db0011] group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. ADDITIONAL INFORMATION FOOTER */}
      <footer className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            Additional information
          </h2>
          <div className="space-y-8 text-base md:text-lg text-gray-700 leading-relaxed">
            <section>
              <p>
                <strong className="text-gray-900">AER</strong> stands for annual
                equivalent rate. This shows you what the interest rate would be
                if interest was paid and compounded once each year.
              </p>
            </section>
            <section>
              <p>
                <strong className="text-gray-900">Gross</strong> is the rate of
                interest paid before any tax (where applicable) has been
                deducted.
              </p>
            </section>
            <section>
              <p>
                <strong className="text-gray-900">Tax-free</strong> means you
                don't have to pay UK income tax or capital gains tax on any
                interest or returns you earn.
              </p>
            </section>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SavingsPage;
