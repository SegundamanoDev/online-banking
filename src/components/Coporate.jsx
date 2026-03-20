import React from "react";
import {
  Globe,
  Shield,
  Zap,
  TrendingUp,
  FileText,
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
    },
    {
      title: "ESG & Sustainable Finance",
      description:
        "Transforming sustainability goals into competitive advantages through green bonds, transition financing, and carbon-efficient treasury solutions.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  const solutionsCards = [
    {
      title: "Treasury Management",
      icon: <Zap className="text-emerald-600" size={22} />,
      description:
        "Optimize liquidity with automated cash pooling, real-time visibility, and institutional-grade payment infrastructure.",
    },
    {
      title: "Strategic Growth",
      icon: <TrendingUp className="text-emerald-600" size={22} />,
      description:
        "Accelerate expansion through structured debt, M&A advisory, and customized capital expenditure financing.",
    },
    {
      title: "Global Payments",
      icon: <Globe className="text-emerald-600" size={22} />,
      description:
        "Seamless cross-border settlements with integrated FX hedging and multi-currency account architecture.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
      {/* 1. HERO SECTION */}
      <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden flex items-center lg:items-end">
        <img
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000"
          alt="Corporate Banking"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/30" />

        <div className="relative w-full max-w-6xl mx-auto px-6 z-10 lg:pb-16">
          <div className="bg-white/95 backdrop-blur-md p-8 lg:p-12 shadow-xl rounded-[2.5rem] max-w-[550px]">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <Shield className="text-emerald-600" size={18} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                  Institutional Banking
                </span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Strategic Capital for{" "}
                <span className="italic font-medium text-emerald-600">
                  Global Enterprise.
                </span>
              </h1>
              <p className="text-base text-slate-600 leading-relaxed font-medium">
                United Capital provides the sophisticated infrastructure and
                deep sector expertise required to navigate international
                markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTRO SECTION */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3">
                <div className="w-[3px] h-8 bg-emerald-500 rounded-full" />
                <h2 className="text-2xl font-bold italic tracking-tight">
                  The Institutional Advantage
                </h2>
              </div>
            </div>
            <div className="lg:w-2/3 space-y-6 text-slate-500 leading-relaxed text-lg font-medium">
              <p>
                At United Capital, we don't just provide credit—we engineer
                outcomes. Our corporate platform is built to solve for the
                unique friction points of large-scale operations.
              </p>
              <p className="text-slate-900 font-bold italic border-l-2 border-emerald-500 pl-6 py-1">
                With a global footprint and boutique focus, we connect your
                aspirations to the specific capital structures required to lead
                your industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DIGITAL SOLUTION (TREASURY HUB) */}
      <section className="bg-slate-50 py-20 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[2.5rem] shadow-sm flex flex-col md:flex-row overflow-hidden border border-slate-100">
            <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
              <span className="text-emerald-600 font-bold text-[10px] uppercase tracking-[0.2em] mb-4">
                Technology Platform
              </span>
              <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-5 leading-tight italic">
                UnitedOne Treasury Hub
              </h3>
              <p className="text-slate-500 text-sm lg:text-base mb-8 leading-relaxed font-medium">
                A unified digital ecosystem designed for CFOs. Real-time
                liquidity forecasting, multi-entity reporting, and encrypted
                global disbursements.
              </p>
              <div className="flex items-center text-xs font-bold uppercase tracking-widest text-slate-400">
                <BarChart3 size={16} className="mr-2 text-emerald-500" />
                Institutional Portal
              </div>
            </div>
            <div className="flex-1 min-h-[350px]">
              <img
                src="https://i.pinimg.com/1200x/1e/9c/c6/1e9cc60e87a8d49670c35da567b0d687.jpg"
                alt="Digital Treasury"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. VERTICALS & ESG */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {specialismCards.map((card, index) => (
              <div key={index} className="flex flex-col group">
                <div className="overflow-hidden rounded-3xl mb-6 shadow-sm border border-slate-100">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-[300px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="space-y-3 px-2">
                  <h3 className="text-xl font-bold text-slate-900 italic">
                    {card.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed text-sm font-medium">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SOLUTIONS GRID */}
      <section className="bg-slate-900 py-20 lg:py-28 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-[3px] h-8 bg-emerald-500 rounded-full" />
            <h2 className="text-2xl font-bold italic tracking-tight">
              Core Corporate Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutionsCards.map((item, index) => (
              <div
                key={index}
                className="flex flex-col p-8 rounded-3xl bg-slate-800/40 border border-slate-700/50"
              >
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold mb-3 italic">{item.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GLOBAL GROWTH PROMO */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row-reverse bg-emerald-50/50 rounded-[2.5rem] overflow-hidden border border-emerald-100/50">
            <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-6 leading-tight italic">
                Powering multi-national trade with precision FX.
              </h2>
              <p className="text-base text-slate-600 mb-8 font-medium leading-relaxed">
                United Capital provides institutional FX liquidity and hedging
                strategies to protect your margins across 140+ currencies.
              </p>
              <div className="flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-700">
                Global Markets Desk
              </div>
            </div>
            <div className="flex-1 relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200"
                alt="Global Growth"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Signature Emerald Bottom Accent */}
      <div className="w-full h-1.5 bg-emerald-500"></div>
    </div>
  );
};

export default Corporate;
