import React, { useState } from "react";
import {
  Globe,
  Calendar,
  Briefcase,
  Heart,
  PieChart,
  ChevronDown,
  ChevronUp,
  Landmark,
} from "lucide-react";

const AboutBanner = () => {
  const [isRiskExpanded, setIsRiskExpanded] = useState(false);
  const [isLegalExpanded, setIsLegalExpanded] = useState(false);

  const benefits = [
    {
      icon: <Globe className="text-emerald-500" size={32} strokeWidth={1.5} />,
      text: "Global market access with institutional-grade execution.",
    },
    {
      icon: (
        <Calendar className="text-emerald-500" size={32} strokeWidth={1.5} />
      ),
      text: "Comprehensive estate and multi-generational succession planning.",
    },
    {
      icon: (
        <Briefcase className="text-emerald-500" size={32} strokeWidth={1.5} />
      ),
      text: "Portfolio management through custom-tailored investment mandates.",
    },
    {
      icon: <Heart className="text-emerald-500" size={32} strokeWidth={1.5} />,
      text: "Strategic advisory for your philanthropic and legacy goals.",
    },
    {
      icon: (
        <PieChart className="text-emerald-500" size={32} strokeWidth={1.5} />
      ),
      text: "Bespoke structured financing and liquidity solutions.",
    },
  ];

  const advisors = [
    {
      title: "Portfolio Strategists",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      description:
        "Dedicated experts who align your capital with your long-term risk tolerance and yield objectives.",
    },
    {
      title: "Lending Advisors",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      description:
        "Specialized credit professionals providing high-net-worth liquidity and asset-backed financing.",
    },
    {
      title: "Wealth Architects",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      description:
        "Structuring your legacy today to ensure seamless wealth transfer for the generations of tomorrow.",
    },
  ];

  return (
    <section className="relative w-full bg-white font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32 relative pt-12 lg:pt-20">
        {/* --- HERO BANNER SECTION --- */}
        <div className="relative w-full h-[400px] lg:h-[500px] overflow-hidden rounded-[2.5rem] shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000"
            alt="United Capital Private Wealth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/40"></div>

          <div className="absolute top-1/2 -translate-y-1/2 left-6 lg:left-16 z-30">
            <div className="bg-white/95 backdrop-blur-md p-8 lg:p-16 max-w-[550px] rounded-[2rem] shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Landmark className="text-emerald-600" size={24} />
                <span className="font-black tracking-tighter text-slate-900 text-sm uppercase">
                  Private Client
                </span>
              </div>
              <h1 className="text-[36px] lg:text-[48px] font-black leading-[1.1] text-slate-900 mb-6 tracking-tight italic">
                Preserving Wealth across generations.
              </h1>
              <p className="text-[18px] text-slate-600 font-medium">
                We provide the exclusive connections and sophisticated tools
                required to manage significant capital in a global economy.
              </p>
            </div>
          </div>
        </div>

        {/* --- KEY BENEFITS --- */}
        <div className="mt-24 pb-20 border-b border-slate-100">
          <h2 className="text-[32px] font-black text-slate-900 mb-12 tracking-tight">
            The Private Client Advantage
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {benefits.map((b, i) => (
              <div key={i} className="flex flex-col space-y-4">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="text-[18px] text-slate-800 font-semibold leading-snug">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ADVISOR SECTION --- */}
        <div className="py-24">
          <h2 className="text-[32px] font-black text-slate-900 mb-12 tracking-tight italic">
            A Global Network of Specialists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {advisors.map((a, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-[2rem] mb-6 shadow-lg">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-[24px] font-black text-slate-900 mb-2 italic">
                  {a.title}
                </h4>
                <p className="text-[15px] text-slate-500 font-medium leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- QUOTE BAR --- */}
        <div className="py-24 flex items-center gap-12 border-t border-slate-100">
          <div className="w-[6px] h-24 bg-emerald-500 rounded-full"></div>
          <h2 className="text-[28px] lg:text-[42px] font-light text-slate-900 leading-tight max-w-4xl">
            United Capital{" "}
            <span className="font-black italic">Private Client</span> provides
            the architecture to unlock institutional-grade opportunities.
          </h2>
        </div>

        {/* --- ACCORDIONS --- */}
        <div className="space-y-4 mb-32">
          {/* Risk Warning */}
          <div className="border border-slate-200 rounded-[1.5rem] overflow-hidden">
            <button
              onClick={() => setIsRiskExpanded(!isRiskExpanded)}
              className="w-full flex items-center justify-between p-8 bg-slate-50 hover:bg-slate-100 transition-all"
            >
              <h4 className="text-[18px] font-black text-slate-900 uppercase tracking-widest italic">
                Market Risk Disclosure
              </h4>
              {isRiskExpanded ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {isRiskExpanded && (
              <div className="p-8 bg-white border-t border-slate-200 animate-in fade-in slide-in-from-top-2">
                <p className="text-[14px] text-slate-500 mb-4 font-bold uppercase tracking-tighter">
                  Please review carefully:
                </p>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none">
                  <li className="text-[13px] text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    Capital is at risk. Values can fluctuate based on market
                    conditions.
                  </li>
                  <li className="text-[13px] text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    Liquidity constraints may apply to private equity or
                    alternative assets.
                  </li>
                  <li className="text-[13px] text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
                    Foreign exchange movements can significantly impact non-USD
                    holdings.
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Legal Info */}
          <div className="border border-slate-200 rounded-[1.5rem] overflow-hidden">
            <button
              onClick={() => setIsLegalExpanded(!isLegalExpanded)}
              className="w-full flex items-center justify-between p-8 bg-slate-50 hover:bg-slate-100 transition-all"
            >
              <h4 className="text-[18px] font-black text-slate-900 uppercase tracking-widest italic">
                Legal & Jurisdiction
              </h4>
              {isLegalExpanded ? (
                <ChevronUp size={20} />
              ) : (
                <ChevronDown size={20} />
              )}
            </button>
            {isLegalExpanded && (
              <div className="p-8 bg-white border-t border-slate-200 text-slate-500 text-[14px] leading-relaxed space-y-4">
                <p>
                  Investment products are provided by{" "}
                  <strong>United Capital Wealth Management, N.A.</strong>, a
                  subsidiary of United Capital Bank. These products are{" "}
                  <strong>Not FDIC Insured</strong> and carry no bank guarantee.
                </p>
                <p>
                  United Capital Bank does not provide legal or tax advice.
                  Clients should consult with their personal tax advisors
                  regarding the implications of any investment strategy.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
