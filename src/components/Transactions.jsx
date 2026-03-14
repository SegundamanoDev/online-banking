import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  Download,
  ChevronRight,
  Coffee,
  ShoppingBag,
  Home,
  Zap,
  Car,
} from "lucide-react";

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Rebranded Data
  const transactionGroups = [
    {
      date: "Today, 13 March",
      items: [
        {
          id: 1,
          title: "Apple Store",
          sub: "Tech & Gadgets",
          price: "-£1,299.00",
          icon: <ShoppingBag size={18} />,
          type: "expense",
        },
        {
          id: 2,
          title: "Starbucks",
          sub: "Lifestyle",
          price: "-£4.50",
          icon: <Coffee size={18} />,
          type: "expense",
        },
      ],
    },
    {
      date: "Yesterday, 12 March",
      items: [
        {
          id: 3,
          title: "Salary - UCB Global",
          sub: "Professional Income",
          price: "+£4,500.00",
          icon: <ArrowDownLeft size={18} />,
          type: "income",
        },
        {
          id: 4,
          title: "Shell Oil",
          sub: "Transport",
          price: "-£65.00",
          icon: <Car size={18} />,
          type: "expense",
        },
      ],
    },
    {
      date: "10 March",
      items: [
        {
          id: 5,
          title: "PureGym Ltd",
          sub: "Wellness",
          price: "-£35.00",
          icon: <Zap size={18} />,
          type: "expense",
        },
        {
          id: 6,
          title: "Sky Digital",
          sub: "Home Utilities",
          price: "-£82.00",
          icon: <Home size={18} />,
          type: "expense",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-slate-900">
            Ledger
          </h2>
          <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">
            Capital Management •••• 8842
          </p>
        </div>
        <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 active:scale-95">
          <Download size={16} />
          Get Statement
        </button>
      </div>

      {/* MINI STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-100 transition-all">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowDownLeft size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Total Inflow
            </p>
            <p className="text-2xl font-black text-slate-900">+£8,250.00</p>
          </div>
        </div>
        <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-slate-200 transition-all">
          <div className="w-14 h-14 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <ArrowUpRight size={28} />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Total Outflow
            </p>
            <p className="text-2xl font-black text-slate-900">-£3,142.50</p>
          </div>
        </div>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"
            size={20}
          />
          <input
            type="text"
            placeholder="Search transactions..."
            className="w-full bg-white border-none rounded-2xl pl-14 pr-6 py-4 text-sm font-bold shadow-sm focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none placeholder:text-slate-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-100 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 transition-all shadow-sm">
          <Filter size={18} />
          Refine
        </button>
      </div>

      {/* TRANSACTION LIST */}
      <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-sm overflow-hidden">
        {transactionGroups.map((group, idx) => (
          <div key={idx}>
            {/* DATE HEADER */}
            <div className="bg-slate-50/50 px-8 py-4 border-b border-slate-50">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                {group.date}
              </span>
            </div>

            {/* GROUP ITEMS */}
            <div className="divide-y divide-slate-50">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-7 hover:bg-emerald-50/30 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] ${
                        item.type === "income"
                          ? "bg-emerald-600 text-white"
                          : "bg-slate-900 text-white"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-black text-slate-900 text-sm tracking-tight">
                        {item.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p
                        className={`text-sm font-black ${
                          item.type === "income"
                            ? "text-emerald-600"
                            : "text-slate-900"
                        }`}
                      >
                        {item.price}
                      </p>
                      <p className="text-[9px] text-emerald-500 font-black uppercase tracking-widest mt-1">
                        Settled
                      </p>
                    </div>
                    <ChevronRight
                      size={20}
                      className="text-slate-200 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION / LOAD MORE */}
      <div className="text-center py-6">
        <button className="text-[10px] font-black text-slate-300 hover:text-emerald-600 tracking-[0.3em] uppercase transition-all">
          Retrieve Older Records
        </button>
      </div>
    </div>
  );
};

export default Transactions;
