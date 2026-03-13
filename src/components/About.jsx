import React, { useState } from "react";
import {
  Globe,
  Calendar,
  Briefcase,
  Heart,
  PieChart,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const AboutBanner = () => {
  const [isRiskExpanded, setIsRiskExpanded] = useState(false);
  const [isLegalExpanded, setIsLegalExpanded] = useState(false);
  const benefits = [
    {
      icon: <Globe className="text-[#db0011]" size={32} strokeWidth={1.5} />,
      text: "Access investment opportunities all around the globe.",
    },
    {
      icon: <Calendar className="text-[#db0011]" size={32} strokeWidth={1.5} />,
      text: "Plan for the future with wealth and succession planning",
    },
    {
      icon: (
        <Briefcase className="text-[#db0011]" size={32} strokeWidth={1.5} />
      ),
      text: "Manage your portfolio with tailored solutions",
    },
    {
      icon: <Heart className="text-[#db0011]" size={32} strokeWidth={1.5} />,
      text: "Find the right support for your philanthropic vision.",
    },
    {
      icon: <PieChart className="text-[#db0011]" size={32} strokeWidth={1.5} />,
      text: "Receive bespoke financing for your needs.",
    },
  ];

  const advisors = [
    {
      title: "Investment Counsellors",
      image:
        "https://www.privatebanking.hsbc.com/content/dam/privatebanking/gpb/brand-(2019)/uplift-images/images/HSBC%20Global%20Private%20Banking%20-%20Woman%20writing.jpg",
      description:
        "Bring ideas and advice that consider your investment objectives, appetite for risk and projected returns.",
    },
    {
      title: "Credit Advisors",
      image:
        "https://www.privatebanking.hsbc.com/content/dam/privatebanking/gpb/brand-(2019)/uplift-images/images/HSBC%20Global%20Private%20Banking%20-%20Man%20at%20the%20airport.jpg",
      description:
        "Develop strategic financing solutions tailored to your needs.",
    },
    {
      title: "Wealth Planners",
      image:
        "https://www.privatebanking.hsbc.com/content/dam/privatebanking/gpb/brand-(2019)/uplift-images/images/HSBC%20Global%20Private%20Banking%20-%20Woman%20thingking.jpg",
      description:
        "Manage your wealth and develop a bespoke plan, both for now and for generations to come.",
    },
  ];
  const riskItems = [
    "It is important to note that the capital value of, and income from, any investment may go down as well as up and you may not get back the full amount invested",
    "The investment is subject to normal market fluctuations and there can be no assurance that an investment will return its value or that appreciation will occur",
    "Liquidity constraints where subscriptions and redemptions are not available daily, or where lockups apply, mean that investors are subject to market risk during interim pricing periods and may not be able to access funds on short notice",
    "There is a greater risk associated with emerging markets. Liquidity may be less reliable and price volatility may be higher than that experienced in more developed economies. This may result in the fund suffering sudden and large falls in value",
    "Funds with a single sector focus will typically be more volatile than funds which invest broadly across markets",
    "Funds with a single country focus will typically be more volatile than funds which invest broadly across markets and geographies",
    "Region-specific funds have a limited investment scope and are susceptible to a decline in the region in which they invest. Therefore, these funds may be more risky than those which invest more broadly across markets and geographies",
    "Countries where political leadership is either unstable or where it exerts a very strong influence on markets and business practices may be subject to greater volatility. Political risk may include potential for currency controls which would disrupt efficient financial markets",
    "Limited transparency is typically a feature of both hedge funds and funds of funds. Funds of funds rely on underlying managers’ allocations and holdings may be less transparent than in single manager long-only funds. Furthermore, hedge funds in particular may have highly tactical investments along with less frequent and less stringent reporting requirements which does not provide investors with a picture of holdings on any given day",
    "Currency may have either a direct or indirect effect on individuals’ investments. Where the reference currency is different from the reporting currency, foreign exchange movements will directly impact the value of the holdings. Currency will indirectly impact the value of the underlying investments as foreign exchange movements strongly influence the market economy and the competitiveness of both domestic and international companies. Funds which try to hedge to a reference currency can mitigate the direct impact of currency movements but cannot completely isolate the indirect effects of foreign exchange movements",
    "Where investment decisions are made by an individual or a very small team, the potential loss of any one individual represents a significant risk to the ongoing viability of the fund",
    "Passive Index funds are designed to track the reference index before fees and expenses. However, these funds may deviate from the index depending on several factors including: how fully the fund replicates the index, if the makeup of the index changes and if dividends are not fully captured",
    "Smaller Company Risk – Small companies may be less liquid than larger companies and therefore price movements in securities of smaller companies may be more volatile and involve greater risk",
  ];
  return (
    <section className="relative w-full overflow-hidden bg-white font-sans">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 relative pt-8 lg:pt-12">
        {/* --- BANNER SECTION --- */}
        <div className="relative w-full h-[250px] md:h-[350px] lg:h-[400px] overflow-hidden group">
          <img
            src="https://www.privatebanking.hsbc.com/content/dam/privatebanking/gpb/brand-(2019)/uplift-images/banner/HSBC%20Global%20Private%20Banking%20-%20Bridged%20metal%20-%20Banner.jpg"
            alt="HSBC Global Private Banking"
            className="w-full h-full object-cover object-center"
          />
          <div className="hidden lg:block absolute top-10 left-10 z-30">
            <div className="bg-white p-10 max-w-[480px] shadow-2xl border-l-4 border-[#db0011]">
              <h1 className="text-[40px] font-light leading-tight text-[#333] mb-6">
                Make the right connection with HSBC Private Bank
              </h1>
              <p className="text-[18px] text-gray-600">
                We help you find the right connections to grow, manage and
                preserve your wealth across geographies for generations to come.
              </p>
            </div>
          </div>
        </div>

        {/* --- KEY BENEFITS --- */}
        <div className="mt-16 lg:mt-24 border-b border-gray-100 pb-12">
          <h2 className="text-[28px] lg:text-[32px] font-bold text-[#333] mb-6">
            Key benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8 py-12">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start space-x-6">
                <div className="flex-shrink-0">{b.icon}</div>
                <p className="text-[16px] lg:text-[17px] text-gray-700">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- WHY CONNECTIONS MATTER --- */}
        <div className="py-16 lg:py-24 border-b border-gray-100">
          <h2 className="text-[28px] lg:text-[32px] font-bold text-[#333] mb-8">
            Why the right connection matters?
          </h2>
          <div className="space-y-6 text-[16px] lg:text-[18px] text-gray-700 max-w-4xl">
            <p>
              We understand that true value lies in finding the right
              opportunities. With HSBC’s global network, we help find what
              matters most.
            </p>
            <h3 className="text-[22px] lg:text-[26px] font-bold text-[#333] mt-12 mb-6">
              Accessing a global team of specialists
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {advisors.map((a, i) => (
                <div key={i} className="bg-white">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full aspect-[4/3] object-cover mb-4"
                  />
                  <h4 className="text-[22px] font-light mb-4">{a.title}</h4>
                  <p className="text-[14px] text-gray-600">{a.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- OPPORTUNITY BAR --- */}
        <div className="py-20 lg:py-28 flex items-start border-b border-gray-100">
          <div className="w-[4px] h-[70px] lg:h-[90px] bg-[#db0011] mt-2 mr-8 flex-shrink-0"></div>
          <h2 className="text-[28px] lg:text-[38px] font-light text-[#333] leading-[1.2] lg:w-[66%]">
            HSBC Private Bank helps you make the right connections to unlock a
            new world of opportunities
          </h2>
        </div>

        {/* --- RISK WARNING ACCORDION --- */}
        <div className="mt-12 mb-16 border border-gray-200">
          <button
            onClick={() => setIsRiskExpanded(!isRiskExpanded)}
            className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
          >
            <h4 className="text-[18px] lg:text-[20px] font-bold text-[#333]">
              Risk warning
            </h4>
            {isRiskExpanded ? (
              <ChevronUp size={24} />
            ) : (
              <ChevronDown size={24} />
            )}
          </button>

          {isRiskExpanded && (
            <div className="p-8 bg-white border-t border-gray-200">
              <ul className="list-disc pl-5 space-y-5">
                {riskItems.map((item, index) => (
                  <li
                    key={index}
                    className="text-[14px] lg:text-[15px] text-gray-600 leading-relaxed pl-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-4 mb-24">
          <div className="border border-gray-200 rounded-sm">
            <button
              onClick={() => setIsLegalExpanded(!isLegalExpanded)}
              className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 text-left"
            >
              <h4 className="text-[18px] lg:text-[20px] font-medium text-[#333]">
                Legal Information
              </h4>
              {isLegalExpanded ? (
                <ChevronUp size={24} className="text-[#db0011]" />
              ) : (
                <ChevronDown size={24} className="text-[#db0011]" />
              )}
            </button>

            {isLegalExpanded && (
              <div className="p-8 bg-white border-t border-gray-200">
                <div className="text-[14px] lg:text-[16px] text-gray-600 leading-relaxed space-y-6">
                  <p>
                    The information on this site refers to services or products
                    which are not available in certain locations, or which, in
                    any relevant location, may have components, methods,
                    structures and terms different from the ones described, as
                    well as restrictions on client eligibility. Please contact a
                    Relationship Manager for details of services and products
                    that may be available to you.
                  </p>

                  <p>
                    The use of the label ‘HSBC Private Banking’, ‘HSBC Private
                    Bank’, ‘we’, or ‘us’ refers to HSBC’s worldwide private
                    banking business, and is not indicative of any legal entity
                    or relationship.
                  </p>

                  <p>
                    This information is entirely qualified by reference to the
                    terms and conditions of the specific service, if any,
                    provided by the relevant HSBC company.
                  </p>

                  <p>
                    Nothing here is to be deemed an offer, solicitation,
                    endorsement, or recommendation to buy or sell any general or
                    specific product, service or security and should not be
                    considered to constitute investment advice.
                  </p>

                  <p className="font-medium text-black">
                    Please note that HSBC Private Banking does not provide Legal
                    and Tax Advice.
                  </p>

                  <p className="pt-4 border-t border-gray-100 text-[13px]">
                    Before proceeding, please refer to the full{" "}
                    <a
                      href="/disclaimer.html"
                      className="text-[#db0011] underline hover:text-black transition-colors"
                    >
                      Disclaimer
                    </a>{" "}
                    and the{" "}
                    <a
                      href="/terms-and-conditions.html"
                      className="text-[#db0011] underline hover:text-black transition-colors"
                    >
                      Terms and Conditions
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
