import React from "react";
import {
  Wifi,
  ShieldCheck,
  ChevronRight,
  TrendingUp,
  Award,
} from "lucide-react";

const Cards = () => {
  const creditCards = [
    {
      title: "UCB Balance Transfer",
      description:
        "Enjoy up to 36 months interest-free for balance transfers (3.19% fee, min $5). 24.9% APR (variable).",
      category: "Asset Management",
      isPremium: false,
    },
    {
      title: "UCB Purchase Plus",
      description:
        "Up to 20 months interest-free purchases and 17 months interest-free balance transfers. 24.9% APR (variable).",
      category: "Liquidity",
      isPremium: false,
    },
    {
      title: "UCB Rewards Elite",
      description:
        "Earn high-yield reward points on every eligible transaction. 26.9% APR (variable).",
      category: "Rewards",
      isPremium: true,
    },
    {
      title: "UCB Credit Builder",
      description:
        "Precision-engineered to help you establish or repair your credit profile. 29.9% APR (variable).",
      category: "Credit Strategy",
      isPremium: false,
    },
    {
      title: "UCB Elite Mastercard",
      description:
        "Global travel benefits and bespoke rewards. Get 20,000 points when you spend $2,000 in 90 days.",
      category: "Premium",
      isPremium: true,
    },
    {
      title: "UCB World Elite",
      description:
        "The pinnacle of UCB banking. 60,000 points bonus, exclusive concierge, and global protection.",
      category: "Private Wealth",
      isPremium: true,
    },
  ];

  const footnotes = [
    "UCB Shield Protection: Eligible spend excludes cash advances, fees, balance transfers, or gambling transactions.",
    "Elite Rewards: 20,000 bonus points awarded after qualifying spend of $2,000 within the first 90 days of account activation.",
    "UCB Private Wealth: World Elite applicants are subject to enhanced liquidity and status verification.",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans antialiased">
      {/* 1. HEADER SECTION */}
      <header className="bg-white pt-20 pb-12 border-b border-slate-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-4 block italic">
            United Capital Banking
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-[64px] font-black text-slate-900 mb-6 tracking-tighter leading-none italic">
            Elite <span className="text-emerald-500">Credit</span> Systems
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl leading-relaxed font-medium">
            Deploying intelligent capital solutions. From liquidity management
            to bespoke global rewards, our card systems are built for the modern
            architect.
          </p>
        </div>
      </header>

      {/* 2. BRAND PROMO SECTION */}
      <section className="bg-slate-900 overflow-hidden relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-stretch">
            <div className="flex-1 py-16 md:py-24 pr-0 md:pr-12 text-white flex flex-col justify-center">
              <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter italic">
                The UCB <span className="text-emerald-400">Standard</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-md font-medium">
                New to United Capital? Our digital-first application process
                ensures asset deployment in minutes, even without a prior UCB
                account.
              </p>
              <div className="flex gap-4">
                {/* Changed button to div (non-clickable) */}
                <div className="px-8 py-4 bg-emerald-500 text-slate-900 font-black text-xs uppercase tracking-widest rounded-full italic cursor-default">
                  System Active
                </div>
              </div>
            </div>

            <div className="flex-1 relative min-h-[400px] flex items-center justify-center py-12">
              <div className="relative aspect-[1.586/1] w-full max-w-md rounded-[24px] p-8 text-white overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] bg-slate-800 ring-1 ring-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col">
                      <span className="text-[8px] font-black tracking-[0.4em] text-emerald-500 uppercase">
                        United Capital
                      </span>
                      <span className="italic font-black text-xl tracking-tighter -mt-1">
                        UCB <span className="text-emerald-500">Elite</span>
                      </span>
                    </div>
                    <Wifi size={18} className="opacity-40 rotate-90" />
                  </div>
                  <div className="w-12 h-9 bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 rounded-md opacity-80 shadow-inner"></div>
                  <p className="text-xl font-mono tracking-[0.2em] text-white/90">
                    •••• •••• •••• 8842
                  </p>
                  <div className="flex justify-between items-end border-t border-white/5 pt-4">
                    <div className="flex gap-8">
                      <div>
                        <p className="text-[6px] uppercase tracking-[0.3em] text-slate-500 font-black">
                          Cardholder
                        </p>
                        <p className="text-[10px] font-black italic uppercase">
                          VALUED CLIENT
                        </p>
                      </div>
                      <div>
                        <p className="text-[6px] uppercase tracking-[0.3em] text-slate-500 font-black">
                          Expiry
                        </p>
                        <p className="text-[10px] font-bold">09/28</p>
                      </div>
                    </div>
                    <div className="flex -space-x-2">
                      <div className="w-6 h-6 rounded-full bg-[#EB001B] opacity-90"></div>
                      <div className="w-6 h-6 rounded-full bg-[#F79E1B] opacity-80 mix-blend-screen"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT GRID SECTION */}
      <main className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-2xl font-black text-slate-900 italic tracking-tight mb-2">
                Deployment <span className="text-emerald-500">Options</span>
              </h2>
              <p className="text-slate-500 font-medium text-sm">
                Credit subject to status. Secured by UCB AI-driven behavioral
                monitoring.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {creditCards.map((account, index) => (
              <div
                key={index}
                className="group relative flex flex-col bg-white border border-slate-100 p-8 rounded-[2rem] transition-all duration-500"
              >
                <div className="mb-6 flex justify-between items-start">
                  <div
                    className={`p-3 rounded-2xl ${
                      account.isPremium
                        ? "bg-slate-900 text-emerald-400"
                        : "bg-emerald-50 text-emerald-600"
                    }`}
                  >
                    {account.isPremium ? (
                      <Award size={24} />
                    ) : (
                      <TrendingUp size={24} />
                    )}
                  </div>
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
                    {account.category}
                  </span>
                </div>

                <h3 className="text-xl font-black text-slate-900 mb-3 italic tracking-tight transition-colors">
                  {account.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8 flex-grow">
                  {account.description}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 italic">
                    Asset Parameters
                  </span>
                  <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                    <ChevronRight size={16} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. FOOTNOTES SECTION */}
        <section className="mt-20 pt-12 border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <div className="bg-slate-50 p-8 md:p-12 rounded-[2.5rem] flex flex-col md:flex-row gap-10">
              <div className="md:w-1/3">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="text-emerald-600" size={24} />
                  <h4 className="font-black italic text-slate-900 tracking-tight">
                    UCB Protocol
                  </h4>
                </div>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  All credit facilities are monitored 24/7 by our security
                  systems. United Capital maintains zero-liability protection on
                  all Elite and World Elite Mastercard tiers.
                </p>
              </div>
              <div className="md:w-2/3">
                <ol className="space-y-4">
                  {footnotes.map((note, index) => (
                    <li
                      key={index}
                      className="text-[11px] text-slate-400 font-medium flex gap-3"
                    >
                      <span className="text-emerald-500 font-black">
                        0{index + 1}
                      </span>
                      {note}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Cards;
