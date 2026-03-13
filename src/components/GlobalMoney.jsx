import React, { useState } from "react";
import {
  Globe,
  ArrowRightLeft,
  Plus,
  TrendingUp,
  History,
  ChevronRight,
  Info,
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
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HERO SECTION */}
      <div className="bg-slate-900 rounded-[2rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg backdrop-blur-md">
                <Globe size={24} className="text-red-500" />
              </div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
                Global Money Account
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter mb-4">
              Travel & Pay <br />
              Without Fees.
            </h2>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed mb-8">
              Hold, manage, and spend in 10+ currencies with the real exchange
              rate and no hidden charges.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#db0011] hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all shadow-lg shadow-red-900/20">
                Convert Money
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all">
                Add Currency
              </button>
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-red-600/20 rounded-full blur-[80px]"></div>
            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 relative z-10 shadow-2xl">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Live Exchange Rate
              </p>
              <div className="flex items-end justify-between mb-6">
                <div>
                  <h4 className="text-3xl font-black italic">GBP / USD</h4>
                  <p className="text-green-400 text-xs font-bold flex items-center gap-1 mt-1">
                    <TrendingUp size={14} /> +0.24% today
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-white">1.2742</p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold">
                    Interbank Rate
                  </p>
                </div>
              </div>
              <div className="h-[60px] flex items-end gap-1">
                {[40, 70, 45, 90, 65, 80, 50, 85, 100, 75].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-red-500/30 rounded-t-sm hover:bg-red-500 transition-all cursor-pointer"
                    style={{ height: `${h}%` }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CURRENCY GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currencies.map((curr) => (
          <button
            key={curr.code}
            onClick={() => setActiveCurrency(curr.code)}
            className={`p-6 rounded-3xl border text-left transition-all duration-300 ${
              activeCurrency === curr.code
                ? "bg-white border-red-100 shadow-xl shadow-red-500/5 ring-2 ring-red-500/10"
                : "bg-white border-gray-100 hover:border-gray-300"
            }`}
          >
            <div className="flex justify-between items-start mb-6">
              <span className="text-2xl">{curr.flag}</span>
              <span
                className={`text-[10px] font-black px-2 py-1 rounded-md ${
                  activeCurrency === curr.code
                    ? "bg-red-50 text-red-600"
                    : "bg-gray-50 text-gray-400"
                }`}
              >
                {curr.code}
              </span>
            </div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
              {curr.name}
            </p>
            <h3 className="text-xl font-black text-slate-900 italic">
              {curr.code === "USD" ? "$" : curr.code === "EUR" ? "€" : "¥"}
              {curr.balance}
            </h3>
          </button>
        ))}
        <button className="p-6 rounded-3xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-2 text-gray-400 hover:border-red-200 hover:text-red-500 transition-all group">
          <Plus
            size={24}
            className="group-hover:scale-110 transition-transform"
          />
          <span className="text-xs font-bold uppercase tracking-widest">
            Add Wallet
          </span>
        </button>
      </div>

      {/* BOTTOM ACTION BAR */}
      <div className="bg-white rounded-3xl border border-gray-100 p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
            <Info size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-900">
              Global Spending is Active
            </h4>
            <p className="text-xs text-gray-500">
              Your Premier Debit card will automatically use these wallets while
              you travel.
            </p>
          </div>
        </div>
        <div className="flex gap-3 w-full lg:w-auto">
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-gray-50 hover:bg-gray-100 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 transition-all">
            <History size={16} /> Transaction History
          </button>
          <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 hover:bg-black rounded-xl text-xs font-bold uppercase tracking-widest text-white transition-all">
            Manage Card <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GlobalMoney;
