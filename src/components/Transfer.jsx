import React, { useState } from "react";
import {
  Send,
  RefreshCw,
  Users,
  Search,
  ChevronRight,
  Info,
  CheckCircle2,
  ArrowRightLeft,
  ShieldCheck,
} from "lucide-react";

const Transfer = () => {
  const [activeTab, setActiveTab] = useState("someone"); // 'someone' or 'between'
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate high-tier banking verification delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl text-center animate-in zoom-in-95 duration-500">
        <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
          <CheckCircle2 size={56} />
        </div>
        <h2 className="text-3xl font-black text-slate-900 italic tracking-tighter">
          CAPITAL DEPLOYED
        </h2>
        <p className="text-slate-400 mt-3 mb-10 font-bold uppercase text-[10px] tracking-[0.2em]">
          Your liquidity has been moved successfully.
        </p>
        <div className="bg-slate-50 rounded-[2rem] p-8 mb-10 text-left space-y-4 border border-slate-100">
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Transaction ID
            </span>
            <span className="font-black text-slate-900 text-sm tracking-tight">
              UCB-992104-X
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Network Status
            </span>
            <span className="font-black text-emerald-600 text-sm uppercase tracking-tighter">
              Verified • Instant
            </span>
          </div>
        </div>
        <button
          onClick={() => setShowSuccess(false)}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl active:scale-95"
        >
          New Transaction
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex flex-col gap-2 px-2">
        <h2 className="text-4xl font-black tracking-tighter text-slate-900 italic">
          Move Capital
        </h2>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
          Secure wire transfers and internal liquidity rebalancing.
        </p>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex p-1.5 bg-slate-100 rounded-[1.5rem] w-full max-w-md shadow-inner">
        <button
          onClick={() => setActiveTab("someone")}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === "someone" ? "bg-white text-slate-900 shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
        >
          <Users size={16} /> Third Party
        </button>
        <button
          onClick={() => setActiveTab("between")}
          className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === "between" ? "bg-white text-slate-900 shadow-lg" : "text-slate-400 hover:text-slate-600"}`}
        >
          <RefreshCw size={16} /> Internal
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* MAIN FORM AREA */}
        <div className="lg:col-span-3 bg-white rounded-[2.5rem] border border-slate-50 p-10 shadow-sm">
          <form onSubmit={handleTransfer} className="space-y-8">
            {/* FROM ACCOUNT */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Origin Account
              </label>
              <div className="p-5 bg-slate-50 rounded-[1.5rem] border border-slate-100 flex items-center justify-between cursor-pointer hover:bg-emerald-50/50 hover:border-emerald-100 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                    <ArrowRightLeft size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900 italic">
                      Private Wealth Checking
                    </p>
                    <p className="text-[11px] text-slate-400 font-bold">
                      Available: £24,850.00
                    </p>
                  </div>
                </div>
                <ChevronRight size={20} className="text-slate-200" />
              </div>
            </div>

            {/* AMOUNT INPUT */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Allocation Amount
              </label>
              <div className="relative group">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-black text-slate-200 italic group-focus-within:text-emerald-500 transition-colors">
                  £
                </span>
                <input
                  type="number"
                  required
                  placeholder="0.00"
                  className="w-full bg-white border-2 border-slate-50 rounded-[2rem] pl-14 pr-8 py-7 text-4xl font-black italic focus:outline-none focus:border-emerald-500/20 focus:bg-emerald-50/10 transition-all placeholder:text-slate-100"
                />
              </div>
            </div>

            {/* REFERENCE */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Reference Code
              </label>
              <input
                type="text"
                placeholder="Ex: INVESTMENT_CAPITAL"
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-xl transition-all ${isProcessing ? "bg-slate-100 text-slate-300 cursor-not-allowed" : "bg-emerald-600 text-white hover:bg-slate-900 shadow-emerald-100 active:scale-95"}`}
            >
              {isProcessing ? "Authenticating..." : "Authorize Transfer"}
            </button>

            <div className="flex items-center gap-2 justify-center text-slate-300">
              <ShieldCheck size={14} className="text-emerald-500" />
              <p className="text-[9px] font-black uppercase tracking-widest">
                End-to-End Encrypted Transaction
              </p>
            </div>
          </form>
        </div>

        {/* SIDEBAR: RECENT PAYEES */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-[2.5rem] border border-slate-50 p-8 shadow-sm">
            <h3 className="font-black text-slate-900 mb-8 italic">
              Frequent Recipients
            </h3>
            <div className="space-y-6">
              <PayeeRow name="Sarah Jenkins" initial="SJ" acc="•••• 4412" />
              <PayeeRow name="Morgan Chase" initial="MC" acc="•••• 0092" />
              <PayeeRow
                name="Prime Equities"
                initial="PE"
                acc="•••• 8831"
                color="bg-emerald-100 text-emerald-700"
              />
              <PayeeRow
                name="United Utilities"
                initial="UU"
                acc="•••• 5521"
                color="bg-slate-100 text-slate-800"
              />

              <button className="w-full flex items-center justify-center gap-2 py-4 border-2 border-dashed border-slate-100 rounded-[1.5rem] text-slate-300 text-[10px] font-black uppercase tracking-[0.2em] hover:border-emerald-200 hover:text-emerald-600 hover:bg-emerald-50/30 transition-all mt-4">
                <Users size={16} /> Directory
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={16} className="text-emerald-500" />
                <p className="text-[10px] font-black text-emerald-500 uppercase tracking-widest">
                  Secure Protocol
                </p>
              </div>
              <p className="text-xs font-bold leading-relaxed text-slate-400 group-hover:text-slate-100 transition-colors">
                United Capital Bank will never request your multi-factor
                authentication codes via unsolicited calls. Keep your security
                keys private.
              </p>
            </div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-emerald-600/10 rounded-full blur-3xl group-hover:bg-emerald-600/20 transition-all duration-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PayeeRow = ({
  name,
  initial,
  acc,
  color = "bg-slate-50 text-slate-400",
}) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-4">
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs transition-all group-hover:rounded-full ${color}`}
      >
        {initial}
      </div>
      <div>
        <p className="text-sm font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
          {name}
        </p>
        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">
          Account {acc}
        </p>
      </div>
    </div>
    <ChevronRight
      size={18}
      className="text-slate-100 group-hover:text-slate-900 group-hover:translate-x-1 transition-all"
    />
  </div>
);

export default Transfer;
