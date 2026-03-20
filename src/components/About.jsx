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
      icon: <Globe className="text-emerald-600" size={24} strokeWidth={1.5} />,
      text: "Global market access with institutional-grade execution.",
    },
    {
      icon: (
        <Calendar className="text-emerald-600" size={24} strokeWidth={1.5} />
      ),
      text: "Comprehensive estate and multi-generational succession planning.",
    },
    {
      icon: (
        <Briefcase className="text-emerald-600" size={24} strokeWidth={1.5} />
      ),
      text: "Portfolio management through custom investment mandates.",
    },
    {
      icon: <Heart className="text-emerald-600" size={24} strokeWidth={1.5} />,
      text: "Strategic advisory for philanthropic and legacy goals.",
    },
    {
      icon: (
        <PieChart className="text-emerald-600" size={24} strokeWidth={1.5} />
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
        "Dedicated experts aligning capital with your long-term risk tolerance and yield objectives.",
    },
    {
      title: "Lending Advisors",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
      description:
        "Specialized professionals providing high-net-worth liquidity and asset-backed financing.",
    },
    {
      title: "Wealth Architects",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      description:
        "Structuring your legacy today to ensure seamless wealth transfer for future generations.",
    },
  ];

  return (
    <section className="w-full bg-white font-sans overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        {/* --- HERO BANNER SECTION --- */}
        <div className="relative w-full min-h-[450px] lg:h-[540px] overflow-hidden rounded-[2rem] shadow-xl">
          <img
            src="https://i.pinimg.com/1200x/0b/bd/51/0bbd51b0158c6fd07bc44477a7886c53.jpg"
            alt="United Capital Private Wealth"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/30"></div>

          {/* Portable Content Box */}
          <div className="relative h-full flex items-center p-6 lg:p-12">
            <div className="bg-white/95 backdrop-blur-sm p-8 lg:p-12 max-w-[480px] rounded-3xl shadow-xl">
              <div className="flex items-center gap-2 mb-4">
                <Landmark className="text-emerald-600" size={18} />
                <span className="font-bold tracking-widest text-slate-500 text-[10px] uppercase">
                  Private Client Group
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight text-slate-900 mb-4 tracking-tight">
                Preserving Wealth <br />
                <span className="text-emerald-600 italic font-medium">
                  across generations.
                </span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed">
                We provide the exclusive connections and sophisticated tools
                required to manage significant capital in a global economy.
              </p>
            </div>
          </div>
        </div>

        {/* --- KEY BENEFITS --- */}
        <div className="mt-20 pb-16 border-b border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-10 tracking-tight">
            The Private Client Advantage
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {benefits.map((b, i) => (
              <div key={i} className="flex gap-5 items-start">
                <div className="shrink-0 w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center">
                  {b.icon}
                </div>
                <p className="text-[15px] text-slate-700 font-medium leading-snug pt-1">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- ADVISOR SECTION --- */}
        <div className="py-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight italic">
              A Global Network of Specialists
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              Expertise across every asset class.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((a, i) => (
              <div key={i} className="group">
                <div className="overflow-hidden rounded-2xl mb-5 shadow-sm border border-slate-100">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  {a.title}
                </h4>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {a.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- QUOTE BAR --- */}
        <div className="py-16 flex items-center gap-8 border-t border-slate-100">
          <div className="w-[4px] h-16 bg-emerald-500 rounded-full shrink-0"></div>
          <h2 className="text-xl lg:text-2xl font-normal text-slate-700 leading-snug max-w-3xl">
            United Capital{" "}
            <span className="font-bold text-slate-900 italic">
              Private Client
            </span>{" "}
            provides the architecture to unlock institutional-grade
            opportunities.
          </h2>
        </div>

        {/* --- ACCORDIONS --- */}
        <div className="space-y-3 mb-20">
          {/* Risk Warning */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => setIsRiskExpanded(!isRiskExpanded)}
              className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-all"
            >
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest italic">
                Market Risk Disclosure
              </h4>
              {isRiskExpanded ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {isRiskExpanded && (
              <div className="p-6 bg-white border-t border-slate-100 animate-in fade-in slide-in-from-top-1">
                <p className="text-[11px] text-slate-400 mb-4 font-bold uppercase tracking-widest">
                  Assessment Protocols:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    Capital is at risk. Values fluctuate based on market
                    conditions.
                  </div>
                  <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    Liquidity constraints apply to private or alternative
                    assets.
                  </div>
                  <div className="text-xs text-slate-600 bg-slate-50 p-4 rounded-lg border border-slate-100">
                    FX movements can impact non-USD holdings significantly.
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Legal Info */}
          <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => setIsLegalExpanded(!isLegalExpanded)}
              className="w-full flex items-center justify-between p-6 bg-slate-50 hover:bg-slate-100 transition-all"
            >
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-widest italic">
                Legal & Jurisdiction
              </h4>
              {isLegalExpanded ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </button>
            {isLegalExpanded && (
              <div className="p-6 bg-white border-t border-slate-100 text-slate-500 text-xs leading-relaxed space-y-3">
                <p>
                  Investment products provided by{" "}
                  <strong>United Capital Wealth Management, N.A.</strong> These
                  products are <strong>Not FDIC Insured</strong>.
                </p>
                <p>
                  United Capital Bank does not provide legal or tax advice.
                  Consult with personal advisors regarding investment strategy
                  implications.
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
