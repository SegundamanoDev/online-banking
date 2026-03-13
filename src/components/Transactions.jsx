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

  // Dummy Data
  const transactionGroups = [
    {
      date: "Today, 13 March",
      items: [
        {
          id: 1,
          title: "Apple Store",
          sub: "Electronics",
          price: "-£1,299.00",
          icon: <ShoppingBag size={18} />,
          type: "expense",
        },
        {
          id: 2,
          title: "Starbucks",
          sub: "Food & Drink",
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
          title: "Salary - HSBC Tech",
          sub: "Income",
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
          sub: "Health",
          price: "-£35.00",
          icon: <Zap size={18} />,
          type: "expense",
        },
        {
          id: 6,
          title: "Sky Digital",
          sub: "Bills",
          price: "-£82.00",
          icon: <Home size={18} />,
          type: "expense",
        },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Transactions
          </h2>
          <p className="text-sm text-gray-500 mt-1 font-medium">
            Monitoring your checking account •••• 8842
          </p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest text-slate-600 hover:bg-gray-50 transition-all shadow-sm">
          <Download size={16} />
          Export Statement
        </button>
      </div>

      {/* MINI STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center">
            <ArrowDownLeft size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Monthly Income
            </p>
            <p className="text-xl font-black text-slate-900">+£8,250.00</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 bg-red-50 text-[#db0011] rounded-xl flex items-center justify-center">
            <ArrowUpRight size={24} />
          </div>
          <div>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              Monthly Spending
            </p>
            <p className="text-xl font-black text-slate-900">-£3,142.50</p>
          </div>
        </div>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search by merchant, category or amount..."
            className="w-full bg-white border border-gray-200 rounded-xl pl-12 pr-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-[#db0011] transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-700 hover:border-slate-300 transition-all">
          <Filter size={18} />
          Filters
        </button>
      </div>

      {/* TRANSACTION LIST */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        {transactionGroups.map((group, idx) => (
          <div key={idx}>
            {/* DATE HEADER */}
            <div className="bg-gray-50/50 px-6 py-3 border-b border-gray-100">
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em]">
                {group.date}
              </span>
            </div>

            {/* GROUP ITEMS */}
            <div className="divide-y divide-gray-50">
              {group.items.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between p-6 hover:bg-gray-50/80 transition-all cursor-pointer group"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${
                        item.type === "income"
                          ? "bg-green-50 text-green-600"
                          : "bg-slate-50 text-slate-600"
                      }`}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 font-medium">
                        {item.sub}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p
                        className={`text-sm font-black ${
                          item.type === "income"
                            ? "text-green-600"
                            : "text-slate-900"
                        }`}
                      >
                        {item.price}
                      </p>
                      <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">
                        Completed
                      </p>
                    </div>
                    <ChevronRight
                      size={18}
                      className="text-gray-300 group-hover:text-slate-900 group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* PAGINATION / LOAD MORE */}
      <div className="text-center py-4">
        <button className="text-xs font-bold text-gray-400 hover:text-[#db0011] tracking-[0.2em] uppercase transition-colors">
          Load older transactions
        </button>
      </div>
    </div>
  );
};

export default Transactions;
