import React, { useState } from "react";
import {
  Globe,
  Plus,
  TrendingUp,
  History,
  ChevronRight,
  Info,
  Zap,
} from "lucide-react";

const GlobalMoney = () => {
  const [activeCurrency, setActiveCurrency] = useState("USD");

  const currencies = [
    {
      code: "USD",
      name: "US Dollar",
      balance: "12,100.45",
      flag: "🇺🇸",
      rate: "1.27",
    },
    {
      code: "EUR",
      name: "Euro",
      balance: "4,250.00",
      flag: "🇪🇺",
      rate: "1.18",
    },
    {
      code: "HKD",
      name: "Hong Kong Dollar",
      balance: "0.00",
      flag: "🇭🇰",
      rate: "9.92",
    },
    {
      code: "JPY",
      name: "Japanese Yen",
      balance: "0.00",
      flag: "🇯🇵",
      rate: "189.4",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HERO SECTION */}
      <div className="bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
        {/* Background decorative element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-emerald-500/10 to-transparent pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2.5 bg-emerald-500/20 rounded-xl backdrop-blur-md border border-emerald-500/20">
                <Globe size={24} className="text-emerald-400" />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500">
                UCB Global Liquidity
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-black italic tracking-tighter mb-6 leading-[0.9]">
              Borderless <br />
              <span className="text-emerald-400">Capital.</span>
            </h2>
            <p className="text-slate-400 max-w-sm text-sm font-medium leading-relaxed mb-10">
              Deploy capital across 10+ major markets instantly. No hidden
              spread, no remittance delays. Just pure liquidity.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-emerald-900/20 active:scale-95">
                Execute Swap
              </button>
              <button className="bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-md text-white px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all active:scale-95">
                Add Asset
              </button>
            </div>
          </div>

          {/* INTERACTIVE RATE CARD */}
          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
            <div className="bg-slate-800/40 border border-white/5 backdrop-blur-2xl rounded-[2.5rem] p-10 relative z-10 shadow-3xl">
              <div className="flex items-center justify-between mb-8">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em]">
                  Real-time Spot Rate
                </p>
                <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  LIVE
                </div>
              </div>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h4 className="text-4xl font-black italic tracking-tighter text-white">
                    GBP / USD
                  </h4>
                  <p className="text-emerald-400 text-xs font-bold flex items-center gap-1 mt-2">
                    <TrendingUp size={16} /> +0.24% session
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-black text-white tracking-tight">
                    1.2742
                  </p>
                  <p className="text-[9px] text-slate-500 uppercase font-black tracking-widest mt-1">
                    UCB Mid-Market
                  </p>
                </div>
              </div>
              <div className="h-[80px] flex items-end gap-1.5">
                {[30, 50, 40, 70, 55, 90, 65, 85, 60, 100].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-emerald-500/20 rounded-t-md hover:bg-emerald-400 transition-all cursor-pointer group relative"
                    style={{ height: `${h}%` }}
                  >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                      {h}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ASSET GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {currencies.map((curr) => (
          <button
            key={curr.code}
            onClick={() => setActiveCurrency(curr.code)}
            className={`group p-8 rounded-[2rem] border-2 text-left transition-all duration-500 ${
              activeCurrency === curr.code
                ? "bg-white border-emerald-500/20 shadow-2xl shadow-emerald-500/5 translate-y-[-4px]"
                : "bg-white border-slate-50 hover:border-slate-200"
            }`}
          >
            <div className="flex justify-between items-start mb-8">
              <span className="text-3xl grayscale group-hover:grayscale-0 transition-all duration-500">
                {curr.flag}
              </span>
              <span
                className={`text-[10px] font-black px-3 py-1.5 rounded-xl tracking-widest transition-colors ${
                  activeCurrency === curr.code
                    ? "bg-emerald-600 text-white"
                    : "bg-slate-100 text-slate-400"
                }`}
              >
                {curr.code}
              </span>
            </div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">
              {curr.name}
            </p>
            <h3 className="text-2xl font-black text-slate-900 italic tracking-tight">
              {curr.code === "USD" ? "$" : curr.code === "EUR" ? "€" : "¥"}
              {curr.balance}
            </h3>
          </button>
        ))}
        <button className="p-8 rounded-[2rem] border-2 border-dashed border-slate-100 flex flex-col items-center justify-center gap-3 text-slate-300 hover:border-emerald-200 hover:bg-emerald-50/30 hover:text-emerald-600 transition-all group">
          <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-emerald-100 transition-colors">
            <Plus
              size={24}
              className="group-hover:scale-125 transition-transform duration-500"
            />
          </div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">
            Open Wallet
          </span>
        </button>
      </div>

      {/* STATUS BAR */}
      <div className="bg-white rounded-[2.5rem] border border-slate-50 p-10 flex flex-col lg:grid lg:grid-cols-3 items-center gap-8 shadow-sm">
        <div className="flex items-center gap-5 lg:col-span-2">
          <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-[1.5rem] flex items-center justify-center shrink-0">
            <Zap size={28} fill="currentColor" />
          </div>
          <div>
            <h4 className="font-black text-slate-900 italic tracking-tight">
              Dynamic Spending Protocol Active
            </h4>
            <p className="text-xs text-slate-400 font-medium leading-relaxed mt-1">
              Your UCB Infinite Card is currently optimized for multi-currency
              settlement. Funds will be drawn from local wallets first to
              eliminate conversion overhead.
            </p>
          </div>
        </div>
        <div className="flex gap-4 w-full lg:justify-end">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-slate-50 hover:bg-slate-100 rounded-2xl text-[10px] font-black uppercase tracking-widest text-slate-600 transition-all">
            <History size={16} /> Audit Trail
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 hover:bg-emerald-600 rounded-2xl text-[10px] font-black uppercase tracking-widest text-white transition-all shadow-lg active:scale-95">
            Settings <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalMoney;
