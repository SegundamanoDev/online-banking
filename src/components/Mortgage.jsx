import React, { useState } from "react";
// If using react-router-dom, keep this. If not, replace <Link> with <a> tags.
import { Link } from "react-router-dom";

const Mortgage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const links = [
    {
      title: "Compare our rates",
      description:
        "Search our mortgage deals to see if any meet your needs. Choose HSBC and you could find a lower interest rate that could make your monthly repayments less.",
      image:
        "https://www.hsbc.co.uk/content/dam/hsbc/en/images/16-9/keyring-small-house.jpg/jcr:content/renditions/cq5dam.web.1280.1280.jpeg",
      hasImage: true,
      bgColor: "bg-[#db0011]",
    },
    {
      title: "Get a decision in principle",
      description: "Find out how to apply and get a decision in principle.",
      image:
        "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
      hasImage: true,
      bgColor: "bg-gray-100",
    },
    {
      title: "Manage your mortgage",
      description:
        "Got a mortgage with us already? Find out how to make changes, borrow more, move home or switch to another HSBC rate.",
      hasImage: false,
    },
    {
      title: "International property services",
      description:
        "From finding and financing, to moving and maintenance, we can help with your overseas property. Eligibility criteria apply.",
      hasImage: false,
    },
  ];

  const mortgageTypes = [
    {
      title: "First-time buyer mortgages",
      description:
        "Find out everything you need on the journey to owning your own home.",
      icon: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=600&auto=format&fit=crop",
      link: "/mortgages/first-time-buyers",
    },
    {
      title: "Remortgage to HSBC",
      description:
        "If your mortgage is with another lender, easily move it to HSBC and you could get a better deal.",
      icon: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop",
      link: "/mortgages/move-your-mortgage",
    },
    {
      title: "Mortgages for moving home",
      description:
        "Move home and you could get a better deal with an HSBC mortgage.",
      icon: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
      link: "/mortgages/moving-home",
    },
    {
      title: "Buy-to-let mortgages",
      description:
        "Explore how our buy-to-let mortgages could make it easier to buy your rental property.",
      icon: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop",
      link: "/mortgages/buy-to-let",
    },
  ];

  const articles = [
    {
      title: "10 Steps to buying your own home",
      description:
        "From saving for a deposit, to exchange and completion, we guide you through the process.",
      image:
        "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "What's remortgaging?",
      description:
        "Take a look at our video, with an introduction to remortgaging and how it works.",
      image:
        "https://images.unsplash.com/photo-1554469384-e58fb1622ed4?q=80&w=600&auto=format&fit=crop",
      isVideo: true,
    },
    {
      title: "Should you remortgage?",
      description:
        "Here are 5 common reasons to remortgage, to help you decide if it's right for you.",
      image:
        "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=600&auto=format&fit=crop",
    },
    {
      title: "How to switch your mortgage rate",
      description:
        "Find out if switching rates with your current lender could help save you money.",
      image:
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      question: "What is a mortgage?",
      answer: (
        <div className="space-y-4">
          <p>
            A mortgage is a loan used to buy a property or land. You’ll borrow
            money from a lender and repay them (plus any interest) over an
            agreed period.
          </p>
          <p className="font-bold border-l-4 border-[#db0011] pl-4">
            Think carefully before securing other debts against your home. Your
            home may be repossessed if you do not keep up repayments on your
            mortgage.
          </p>
        </div>
      ),
    },
    {
      question: "How do I get a mortgage?",
      answer: (
        <div className="space-y-4">
          <p>
            Before you start a mortgage application, you’ll need to review your
            finances and get a Decision in Principle.
          </p>
          <p>
            Once you find a property* you love, you’ll then need some documents
            to apply for a mortgage. You'll need to show proof of ID and
            address, bank statements, and evidence of income/deposit.
          </p>
          <p className="text-sm italic text-gray-500">
            *This information applies to UK residents only.
          </p>
        </div>
      ),
    },
    {
      question: "What is a Decision in Principle?",
      answer:
        "A Decision in Principle shows you how much you could borrow before you apply for a mortgage. It’s usually seen as the first step to buying a property. It is subject to assessment and isn’t a guarantee.",
    },
    {
      question: "What is a mortgage broker?",
      answer:
        "A mortgage broker will help you find your ideal mortgage. They’ll work with you to understand what type of mortgage you need and arrange it between you and a lender.",
    },
    {
      question: "What is loan-to-value?",
      answer: (
        <div className="space-y-4">
          <p>
            The loan-to-value (LTV) is the value of the property compared to how
            much you need to borrow, shown as a percentage.
          </p>
          <p>
            Example: If you take out a £200,000 mortgage for a £250,000 home,
            the LTV is 80%.
          </p>
        </div>
      ),
    },
    {
      question: "I'm in the armed forces, can I get a mortgage?",
      answer:
        "We provide extra flexibility to personnel on active service. You could be eligible for the forces Help to Buy scheme, borrowing up to 50% of your salary interest-free (max £25,000) for a deposit.",
    },
  ];

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* HERO SECTION */}
      <section className="bg-white pt-16 pb-12 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl lg:text-[52px] font-bold mb-6 tracking-tight leading-tight">
            Mortgages
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl leading-relaxed">
            We've got everything you need to make finding a mortgage
            straightforward
          </p>
        </div>
      </section>

      {/* PRIMARY ACTIONS GRID */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {links.map((item, index) => (
              <Link
                key={index}
                to="#"
                className="group flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-sm overflow-hidden"
              >
                {item.hasImage && (
                  /* INCREASED HEIGHT: From aspect-ratio to fixed min-height for better verticality */
                  <div
                    className={`h-[320px] md:h-[400px] w-full overflow-hidden ${item.bgColor}`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                <div className="p-8 flex flex-col h-full">
                  <h2 className="text-2xl md:text-[28px] font-medium mb-4 flex items-center">
                    <span className="group-hover:underline decoration-1 underline-offset-4">
                      {item.title}
                    </span>
                    <svg
                      className="ml-3 w-4 h-4 fill-[#db0011] transition-transform group-hover:translate-x-2"
                      viewBox="0 0 11 16"
                    >
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                    </svg>
                  </h2>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* MORTGAGE TYPES GRID */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mortgages to suit you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              From remortgaging to getting your foot on the property ladder.
            </p>
            <div className="w-16 h-1 bg-[#db0011] mt-6" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {mortgageTypes.map((item, index) => (
              <div key={index} className="flex flex-col group">
                {/* INCREASED HEIGHT: Fixed height for grid thumbnails */}
                <div className="mb-6 overflow-hidden rounded-sm bg-gray-50 h-64">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <Link
                  to={item.link}
                  className="group/link inline-flex items-start mb-3"
                >
                  <h3 className="text-xl font-bold group-hover/link:underline decoration-[#db0011] underline-offset-4 flex items-center">
                    <span>{item.title}</span>
                    <svg
                      className="ml-2 w-3 h-3 fill-[#db0011] transition-transform group-hover/link:translate-x-1"
                      viewBox="0 0 11 16"
                    >
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                    </svg>
                  </h3>
                </Link>
                <p className="text-gray-600 text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED INSIGHT BANNER */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-stretch border-b border-gray-100 pb-16">
            <div className="flex-1 pr-0 md:pr-12 mb-8 md:mb-0 flex flex-col justify-center">
              <Link to="#" className="group inline-flex items-center mb-6">
                <h2 className="text-2xl md:text-3xl font-medium group-hover:underline decoration-[#db0011] underline-offset-4">
                  The cost of living and your mortgage
                </h2>
                <svg
                  className="ml-3 w-4 h-4 fill-[#db0011] transition-transform group-hover:translate-x-2"
                  viewBox="0 0 11 16"
                >
                  <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                </svg>
              </Link>
              <p className="text-lg text-gray-700 leading-relaxed max-w-md">
                Find out how your mortgage may be affected by interest rates and
                ways you could reduce your monthly payments.
              </p>
            </div>
            {/* INCREASED HEIGHT: Banner image now has a substantial min-height */}
            <div className="flex-[1.5] relative min-h-[400px] md:min-h-[500px] overflow-hidden rounded-sm">
              <img
                src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1000&auto=format&fit=crop"
                alt="Living"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* SMALL ARTICLE GRID */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 pb-20 mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {articles.map((article, index) => (
              <div key={index} className="flex flex-col group cursor-pointer">
                {/* INCREASED HEIGHT: Small articles grid cards */}
                <div className="relative h-64 mb-6 overflow-hidden bg-gray-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {article.isVideo && (
                    <div className="absolute bottom-3 left-3 bg-[#db0011] p-2 rounded-sm">
                      <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>
                <Link
                  to="#"
                  className="group/link inline-flex items-start mb-3"
                >
                  <h3 className="text-lg font-bold group-hover/link:underline decoration-[#db0011] underline-offset-4">
                    {article.title}{" "}
                    <svg
                      className="inline-block w-2.5 h-2.5 fill-[#db0011]"
                      viewBox="0 0 11 16"
                    >
                      <path d="M.271 16l8-8-8-8h2.546l7.998 8-7.998 8z" />
                    </svg>
                  </h3>
                </Link>
                <p className="text-base text-gray-600 leading-relaxed">
                  {article.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-gray-50 py-12 md:py-20">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold mb-8">Mortgage FAQ</h2>
          <div className="border-t border-gray-200">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span
                    className={`text-lg md:text-xl font-medium transition-colors ${
                      openIndex === index
                        ? "text-[#db0011]"
                        : "group-hover:text-[#db0011]"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <svg
                    className={`w-5 h-5 fill-[#db0011] transform transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[500px] pb-8" : "max-h-0"
                  }`}
                >
                  <div className="text-gray-700 text-lg leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mortgage;
