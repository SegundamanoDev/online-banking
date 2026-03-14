import React, { useState, useEffect } from "react";
import { ChevronRight, Landmark, ArrowRight } from "lucide-react";

const Hero = () => {
  const heroVariants = [
    {
      title: "Elevate Your Credit",
      desc: "Discover the United Infinite Card. Earn 5x points on travel and dining with no annual fee for the first year.",
      subDesc:
        "Variable APRs range from 18.24% to 29.24% based on creditworthiness. Subject to credit approval.",
      btnText: "Explore Cards",
      img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=2000",
      link: "/credit-cards",
    },
    {
      title: "The Smarter Way to Switch",
      desc: "Transfer your checking account to United Capital in minutes. Get a $300 bonus when you open a new account.",
      subDesc:
        "Offer available for new personal checking customers. Terms apply.",
      btnText: "Claim Your Bonus",
      img: "https://images.unsplash.com/photo-1601597121423-02926bb763fe?auto=format&fit=crop&q=80&w=2000",
      link: "/checking",
    },
    {
      title: "Your American Dream, Realized",
      desc: "Low-rate mortgages for first-time buyers and flexible refinancing options for homeowners.",
      subDesc: "United Capital Bank is an Equal Housing Lender. NMLS #401234.",
      btnText: "Check Rates",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=2000",
      link: "/mortgages",
    },
    {
      title: "Build Generational Wealth",
      desc: "Start investing with as little as $50. Access professional portfolios and market insights on the go.",
      subDesc:
        "Investment products are Not FDIC Insured, Not Bank Guaranteed, and May Lose Value.",
      btnText: "Get Started",
      img: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000",
      link: "/invest",
    },
  ];

  const [currentHero, setCurrentHero] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroVariants.length);
    setCurrentHero(heroVariants[randomIndex]);
  }, []);

  if (!currentHero) return null;

  return (
    <div className="relative w-full bg-[#f8fafc] overflow-hidden font-sans">
      {/* --- MAIN HERO SECTION --- */}
      <div className="flex flex-col lg:flex-row min-h-[600px] relative">
        {/* LEFT SIDE (Content) */}
        <div className="flex-1 flex flex-col justify-center px-6 py-16 lg:pl-32 lg:pr-16 z-20 bg-white order-last lg:order-first">
          <div className="max-w-xl animate-in fade-in slide-in-from-left-8 duration-1000">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center">
                <Landmark className="text-white" size={20} />
              </div>
              <span className="font-bold tracking-tighter text-xl text-slate-900">
                UNITED CAPITAL
              </span>
            </div>

            <h1 className="text-[40px] sm:text-[48px] lg:text-[64px] leading-[1] font-black text-slate-900 mb-6 tracking-tight">
              {currentHero.title}
            </h1>
            <div className="space-y-6 text-slate-600">
              <p className="text-[18px] lg:text-[24px] leading-relaxed font-light">
                {currentHero.desc}
              </p>
              <p className="text-[12px] text-slate-400 leading-relaxed uppercase tracking-widest font-semibold">
                {currentHero.subDesc}
              </p>
            </div>
            <div className="mt-10">
              <a
                href={currentHero.link}
                className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-12 py-5 font-bold transition-all duration-300 rounded-full text-[16px] w-full sm:w-auto group"
              >
                {currentHero.btnText}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE (Image) */}
        <div className="relative flex-[1.2] min-h-[300px] lg:min-h-full overflow-hidden order-first lg:order-last">
          <img
            src={currentHero.img}
            alt="United Capital Banking"
            className="w-full h-full object-cover scale-105"
          />
          {/* Subtle vignette for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent lg:hidden" />
        </div>
      </div>

      {/* --- FEATURE OVERLAYS --- */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32 -mt-12 lg:-mt-20 relative z-30 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] p-10 lg:p-12 rounded-[2rem] border border-slate-100 transition-transform hover:-translate-y-2 duration-500">
            <h2 className="text-[26px] font-bold text-slate-900 mb-4 tracking-tight">
              Private Client Services
            </h2>
            <p className="text-slate-500 text-[16px] mb-8 leading-relaxed">
              Experience personalized wealth management, dedicated advisors, and
              exclusive lifestyle rewards designed for your financial journey.
            </p>
            <a
              href="/private-client"
              className="inline-flex items-center text-slate-900 font-bold hover:text-blue-600 group text-[15px]"
            >
              <span className="border-b-2 border-slate-900 group-hover:border-blue-600 pb-0.5">
                Join Private Client
              </span>
              <ChevronRight className="ml-1" size={18} />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] p-10 lg:p-12 rounded-[2rem] text-white transition-transform hover:-translate-y-2 duration-500">
            <h2 className="text-[26px] font-bold mb-4 tracking-tight">
              Modern Digital Tools
            </h2>
            <p className="text-slate-300 text-[16px] mb-8 leading-relaxed">
              Track spending, pay bills, and manage your portfolio with the
              United Capital app. Voted #1 for mobile banking experience.
            </p>
            <a
              href="/app"
              className="inline-flex items-center text-white font-bold hover:text-blue-400 group text-[15px]"
            >
              <span className="border-b-2 border-white group-hover:border-blue-400 pb-0.5">
                Download the App
              </span>
              <ChevronRight className="ml-1" size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
