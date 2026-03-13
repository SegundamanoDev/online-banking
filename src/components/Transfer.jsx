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
} from "lucide-react";

const Transfer = () => {
  const [activeTab, setActiveTab] = useState("someone"); // 'someone' or 'between'
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleTransfer = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate network delay
    setTimeout(() => {
      setIsProcessing(false);
      setShowSuccess(true);
    }, 2000);
  };

  if (showSuccess) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-10 bg-white rounded-3xl border border-gray-100 shadow-xl text-center animate-in zoom-in-95 duration-500">
        <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-3xl font-black text-slate-900 italic">
          Payment Successful
        </h2>
        <p className="text-gray-500 mt-2 mb-8 font-medium">
          Your transfer has been processed and is on its way.
        </p>
        <div className="bg-gray-50 rounded-2xl p-6 mb-8 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Reference:</span>{" "}
            <span className="font-bold">HSBC-992104</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Estimated Arrival:</span>{" "}
            <span className="font-bold">Instant</span>
          </div>
        </div>
        <button
          onClick={() => setShowSuccess(false)}
          className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-black transition-all"
        >
          Make Another Transfer
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl font-black tracking-tight text-slate-900">
          Move Money
        </h2>
        <p className="text-sm text-gray-500 font-medium">
          Send funds securely to local or international accounts.
        </p>
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex p-1 bg-gray-100 rounded-2xl w-full max-w-md">
        <button
          onClick={() => setActiveTab("someone")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === "someone" ? "bg-white text-slate-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
        >
          <Users size={16} /> Pay Someone
        </button>
        <button
          onClick={() => setActiveTab("between")}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${activeTab === "between" ? "bg-white text-slate-900 shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
        >
          <RefreshCw size={16} /> Between Accounts
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* MAIN FORM AREA */}
        <div className="lg:col-span-3 bg-white rounded-3xl border border-gray-100 p-8 shadow-sm">
          <form onSubmit={handleTransfer} className="space-y-6">
            {/* FROM ACCOUNT */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Pay From
              </label>
              <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 flex items-center justify-between cursor-pointer hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <ArrowRightLeft size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 italic">
                      Premier Checking
                    </p>
                    <p className="text-[11px] text-gray-500 font-medium">
                      Balance: £24,850.00
                    </p>
                  </div>
                </div>
                <ChevronRight size={18} className="text-gray-300" />
              </div>
            </div>

            {/* AMOUNT INPUT */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Enter Amount
              </label>
              <div className="relative">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-2xl font-black text-slate-400 italic">
                  £
                </span>
                <input
                  type="number"
                  required
                  placeholder="0.00"
                  className="w-full bg-white border-2 border-gray-100 rounded-2xl pl-12 pr-6 py-5 text-3xl font-black italic focus:outline-none focus:border-[#db0011] transition-all"
                />
              </div>
            </div>

            {/* REFERENCE */}
            <div>
              <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                Reference (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Dinner, Rent"
                className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-slate-300"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={isProcessing}
              className={`w-full py-4 rounded-xl font-black text-sm uppercase tracking-[0.2em] shadow-lg transition-all ${isProcessing ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-[#db0011] text-white hover:bg-red-700 shadow-red-100 active:scale-[0.98]"}`}
            >
              {isProcessing ? "Processing..." : "Confirm & Send"}
            </button>

            <div className="flex items-center gap-2 justify-center text-gray-400">
              <Info size={14} />
              <p className="text-[10px] font-bold uppercase tracking-tighter">
                Funds usually arrive instantly
              </p>
            </div>
          </form>
        </div>

        {/* SIDEBAR: RECENT PAYEES */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-6">Recent Payees</h3>
            <div className="space-y-4">
              <PayeeRow name="Sarah Jenkins" initial="SJ" acc="•••• 4412" />
              <PayeeRow name="John Smith" initial="JS" acc="•••• 0092" />
              <PayeeRow
                name="Amazon UK"
                initial="A"
                acc="•••• 8831"
                color="bg-orange-100 text-orange-600"
              />
              <PayeeRow
                name="Electric Co."
                initial="E"
                acc="•••• 5521"
                color="bg-blue-100 text-blue-600"
              />

              <button className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-gray-100 rounded-xl text-gray-400 text-xs font-bold uppercase tracking-widest hover:border-red-200 hover:text-[#db0011] transition-all">
                <Users size={16} /> View All Payees
              </button>
            </div>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-6 text-white relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">
                Security Tip
              </p>
              <p className="text-sm font-medium leading-relaxed">
                HSBC will never ask for your PIN or full password over the phone
                or by text.
              </p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
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
  color = "bg-gray-100 text-slate-600",
}) => (
  <div className="flex items-center justify-between group cursor-pointer">
    <div className="flex items-center gap-3">
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs ${color}`}
      >
        {initial}
      </div>
      <div>
        <p className="text-sm font-bold text-slate-900 group-hover:text-[#db0011] transition-colors">
          {name}
        </p>
        <p className="text-[10px] text-gray-400 font-medium tracking-wider">
          {acc}
        </p>
      </div>
    </div>
    <ChevronRight
      size={16}
      className="text-gray-200 group-hover:text-slate-900 transition-all"
    />
  </div>
);

export default Transfer;
