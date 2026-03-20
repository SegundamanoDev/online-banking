import React, { useState, useEffect } from "react";
import { ChevronRight, Landmark, ShieldCheck, Globe, Zap } from "lucide-react";

const Hero = () => {
  const heroVariants = [
    {
      label: "PREMIUM LIQUIDITY",
      title: "Elevate Your Capital Profile",
      desc: "Experience the United Infinite Reserve. Bespoke credit facilities with 5x global rewards and zero procurement fees for the inaugural fiscal year.",
      subDesc:
        "Variable APRs: 18.24%–29.24%. Subject to rigorous credit underwriting and approval.",
      btnText: "View Card Portfolio",
      // Premium Black Card / Wealth aesthetic
      img: "https://i.pinimg.com/736x/8f/75/67/8f75674357e292becd7edb74b184ea70.jpg",
    },
    {
      label: "ASSET MIGRATION",
      title: "Seamless Institutional Onboarding",
      desc: "Transition your primary holdings to United Capital. Qualified institutional transfers are eligible for a $300 liquidity bonus upon account maturity.",
      subDesc:
        "Available for new private banking clients. Standard regulatory terms and conditions apply.",
      btnText: "Initiate Transfer",
      // YOUR PINTEREST IMAGE LINK (Corporate High-Rise)
      img: "https://i.pinimg.com/1200x/e2/b6/a3/e2b6a3776769eb7cb645678003f40c03.jpg",
    },
    {
      label: "REAL ESTATE ADVISORY",
      title: "Legacy Estates & Private Financing",
      desc: "Institutional-grade mortgage structures for primary residences and sophisticated refinancing for existing real estate portfolios.",
      subDesc:
        "United Capital is an Equal Housing Lender. NMLS ID #401234. Subject to appraisal.",
      btnText: "Analyze Rates",
      // Luxury Modern Estate / Mortgage aesthetic
      img: "https://i.pinimg.com/736x/0e/d0/79/0ed079bdadf500b4063c2bd93cf48546.jpg",
    },
  ];

  const [currentHero, setCurrentHero] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroVariants.length);
    setCurrentHero(heroVariants[randomIndex]);
  }, []);

  if (!currentHero) return null;

  return (
    <div className="relative w-full bg-white overflow-hidden">
      {/* --- MAIN HERO BODY --- */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-20">
        {/* LEFT SIDE: PORTABLE CONTENT BOX */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:px-24 z-20 order-last lg:order-first">
          <div className="max-w-[520px] animate-in fade-in slide-in-from-left-12 duration-1000">
            {/* Tag */}
            <div className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-black tracking-[0.2em] uppercase rounded-full mb-6">
              {currentHero.label}
            </div>

            <h1 className="text-[38px] sm:text-[48px] lg:text-[56px] leading-[1.1] font-serif font-medium text-slate-900 mb-6 tracking-tight">
              {currentHero.title}
            </h1>

            <div className="space-y-6">
              <p className="text-[16px] lg:text-[18px] leading-relaxed text-slate-600 font-light">
                {currentHero.desc}
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200">
                  {currentHero.btnText}
                </button>
                <button className="border border-slate-200 text-slate-900 px-8 py-4 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-slate-50 transition-all">
                  Contact Advisor
                </button>
              </div>

              <hr className="border-slate-100 w-24 mt-8" />

              <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-widest font-medium">
                {currentHero.subDesc}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: IMAGE SECTION */}
        <div className="relative flex-[1.4] min-h-[400px] lg:min-h-full overflow-hidden order-first lg:order-last">
          <img
            src={currentHero.img}
            alt="Institutional Banking"
            className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000"
          />
          {/* Professional Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent hidden lg:block" />
        </div>
      </div>

      {/* --- GLOBAL SERVICES OVERLAY (PORTABLE CARDS) --- */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-24 -mt-16 relative z-40 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            icon={<ShieldCheck size={20} />}
            title="Capital Preservation"
            desc="Advanced multi-layer security protocols for high-net-worth liquid assets."
          />

          <ServiceCard
            icon={<Globe size={20} />}
            title="Cross-Border Clearing"
            desc="Accelerated international remittance through our proprietary global network."
          />

          <ServiceCard
            icon={<Zap size={20} />}
            title="Real-time Settlement"
            desc="Instant execution of domestic transfers via the Institutional Master Ledger."
            isDark={true}
          />
        </div>
      </div>
    </div>
  );
};

/* --- REUSABLE PORTABLE SERVICE CARD --- */
const ServiceCard = ({ icon, title, desc, isDark = false }) => (
  <div
    className={`p-8 rounded-[1.5rem] transition-all duration-500 hover:-translate-y-2 border ${
      isDark
        ? "bg-slate-900 text-white border-slate-800 shadow-2xl shadow-slate-400"
        : "bg-white text-slate-900 border-slate-100 shadow-xl shadow-slate-100"
    }`}
  >
    <div
      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-6 ${
        isDark ? "bg-emerald-500 text-white" : "bg-slate-900 text-white"
      }`}
    >
      {icon}
    </div>
    <h3 className="text-[18px] font-bold mb-3 tracking-tight">{title}</h3>
    <p
      className={`text-[13px] leading-relaxed ${isDark ? "text-slate-400" : "text-slate-500"}`}
    >
      {desc}
    </p>
  </div>
);

export default Hero;
