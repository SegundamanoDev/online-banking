import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Globe,
  Shield,
  Zap,
  TrendingUp,
  BarChart3,
} from "lucide-react";

const Corporate = () => {
  const specialismCards = [
    {
      title: "Vertical Expertise",
      description:
        "Our Sector Leads provide institutional-grade insights and strategic capital across Technology, Healthcare, Energy, and Manufacturing verticals.",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
      link: "/corporate/specialisms",
    },
    {
      title: "ESG & Sustainable Finance",
      description:
        "Transforming sustainability goals into competitive advantages through green bonds, transition financing, and carbon-efficient treasury solutions.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
      link: "/corporate/sustainability",
    },
  ];

  const solutionsCards = [
    {
      title: "Treasury Management",
      icon: <Zap className="text-emerald-600" size={24} />,
      description:
        "Optimize liquidity with automated cash pooling, real-time visibility, and institutional-grade payment infrastructure.",
      image:
        "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Strategic Growth",
      icon: <TrendingUp className="text-emerald-600" size={24} />,
      description:
        "Accelerate expansion through structured debt, M&A advisory, and customized capital expenditure financing.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Global Payments",
      icon: <Globe className="text-emerald-600" size={24} />,
      description:
        "Seamless cross-border settlements with integrated FX hedging and multi-currency account architecture.",
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION - GROUNDED CONTENT */}
      <section className="relative w-full h-[600px] lg:h-[700px] overflow-hidden flex items-end">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          alt="Corporate Banking"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-slate-900/40" />

        <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-24 z-10">
          <div className="bg-white/95 backdrop-blur-md p-8 md:p-14 shadow-2xl rounded-[2.5rem] md:max-w-[650px]">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <Shield className="text-emerald-600" size={20} />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  Institutional Banking
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.05] tracking-tight italic">
                Strategic Capital for Global Enterprise.
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                United Capital provides the sophisticated infrastructure and
                deep sector expertise required to navigate the complexities of
                international markets.
              </p>
              <div className="pt-2">
                <Link
                  to="/corporate/contact"
                  className="inline-flex items-center bg-slate-900 text-white font-bold py-4 px-10 rounded-full transition-all hover:bg-emerald-600 group"
                >
                  CONNECT WITH AN ADVISOR
                  <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <main className="flex-grow">
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row gap-16 items-start">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-1.5 h-10 bg-emerald-500 rounded-full" />
                  <h2 className="text-3xl font-black italic tracking-tight">
                    The Institutional Advantage
                  </h2>
                </div>
              </div>
              <div className="lg:w-2/3 space-y-8 text-slate-600 leading-relaxed text-xl font-medium">
                <p>
                  At United Capital, we don't just provide credit—we engineer
                  outcomes. Our corporate platform is built to solve for the
                  unique friction points of large-scale operations, from supply
                  chain volatility to cross-border regulatory shifts.
                </p>
                <p className="text-slate-900 font-black italic">
                  With a global footprint and boutique focus, we connect your
                  aspirations to the specific capital structures and market
                  access required to lead your industry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. DIGITAL SOLUTION (TREASURY HUB) */}
        <section className="bg-slate-50 py-24 border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="bg-white rounded-[3rem] shadow-xl flex flex-col md:flex-row overflow-hidden border border-slate-100">
              <div className="flex-1 p-10 md:p-20 flex flex-col justify-center">
                <span className="text-emerald-600 font-black text-xs uppercase tracking-widest mb-4">
                  Technology Platform
                </span>
                <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 leading-tight italic">
                  UnitedOne Treasury Management
                </h3>
                <p className="text-slate-500 text-lg mb-10 leading-relaxed font-medium">
                  A unified digital ecosystem designed for CFOs and Treasurers.
                  Real-time liquidity forecasting, multi-entity reporting, and
                  encrypted global disbursements in a single dashboard.
                </p>
                <div>
                  <button className="flex items-center gap-3 text-slate-900 font-black border-b-2 border-emerald-500 pb-1 hover:text-emerald-600 transition-colors">
                    Request a Platform Demo <ChevronRight size={18} />
                  </button>
                </div>
              </div>
              <div className="flex-1 min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=1200"
                  alt="Digital Treasury"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. VERTICALS & ESG */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {specialismCards.map((card, index) => (
                <div key={index} className="flex flex-col group cursor-pointer">
                  <div className="overflow-hidden rounded-[2.5rem] mb-8 shadow-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[350px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-4 px-4">
                    <h3 className="text-2xl font-black text-slate-900 italic group-hover:text-emerald-600 transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed text-lg font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. SOLUTIONS GRID */}
        <section className="bg-slate-900 py-24 text-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <h2 className="text-3xl font-black italic mb-16 tracking-tight">
              Core Corporate Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {solutionsCards.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col h-full bg-slate-800/50 p-8 rounded-[2rem] border border-slate-700 hover:border-emerald-500 transition-colors"
                >
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-black mb-4 italic">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-medium mb-8">
                    {item.description}
                  </p>
                  <Link
                    to="/"
                    className="mt-auto inline-flex items-center text-emerald-400 font-bold hover:text-white transition-colors"
                  >
                    View Framework <ChevronRight className="ml-1" size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. GLOBAL GROWTH PROMO */}
        <section className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col md:flex-row-reverse bg-emerald-50 rounded-[3rem] overflow-hidden">
              <div className="flex-1 p-10 md:p-20 flex flex-col justify-center">
                <h2 className="text-3xl font-black text-slate-900 mb-6 leading-[1.1] italic">
                  Powering multi-national trade with precision FX.
                </h2>
                <div className="text-lg text-slate-600 mb-8 font-medium">
                  United Capital provides institutional FX liquidity and hedging
                  strategies to protect your margins across 140+ currencies.
                </div>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center bg-emerald-600 text-white font-black py-4 px-10 rounded-full hover:bg-slate-900 transition-all"
                >
                  Explore Trade Finance
                </Link>
              </div>
              <div className="flex-1 relative min-h-[400px]">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200"
                  alt="Global Growth"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Signature Emerald Bottom Accent */}
      <div className="w-full h-3 bg-emerald-500"></div>
    </div>
  );
};

export default Corporate;
