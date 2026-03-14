import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import {
  Globe,
  SlidersHorizontal,
  Send,
  Plus,
  CreditCard,
  ArrowUpRight,
  X,
  CheckCircle2,
  ChevronRight,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  const { showBalances } = useOutletContext();
  const navigate = useNavigate();

  // --- UI STATE ---
  const [isPayeePanelOpen, setPayeePanelOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);
  const [payeeStep, setPayeeStep] = useState("form"); // 'form' or 'success'

  const handleAddPayee = (e) => {
    e.preventDefault();
    setPayeeStep("success");
    setTimeout(() => {
      setPayeePanelOpen(false);
      setPayeeStep("form");
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      {/* PRIMARY WEALTH CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 lg:p-10 relative overflow-hidden">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/30 rounded-full -mr-20 -mt-20 blur-3xl" />

          <div className="relative z-10 flex justify-between items-start mb-8">
            <div>
              <p className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em]">
                Total Liquid Capital (GBP)
              </p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mt-2">
                {showBalances ? "£142,950.00" : "••••••••"}
              </h2>
            </div>

            {/* SETTINGS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setSettingsOpen(!isSettingsOpen)}
                className={`p-3 rounded-xl transition-all ${
                  isSettingsOpen
                    ? "bg-slate-900 text-white"
                    : "bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50"
                }`}
              >
                <SlidersHorizontal size={20} />
              </button>

              {isSettingsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setSettingsOpen(false)}
                  />
                  <div className="absolute right-0 mt-3 w-64 bg-white border border-slate-100 shadow-2xl rounded-2xl z-20 p-5 animate-in zoom-in-95 duration-200">
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">
                      Base Currency
                    </p>
                    <div className="space-y-1">
                      {[
                        "GBP - British Pound",
                        "USD - US Dollar",
                        "EUR - Euro",
                      ].map((curr) => (
                        <button
                          key={curr}
                          className="w-full text-left px-3 py-2.5 text-xs font-bold rounded-lg hover:bg-emerald-50 hover:text-emerald-700 flex items-center justify-between group transition-colors"
                        >
                          {curr}
                          <ChevronRight
                            size={14}
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-50 pt-8">
            <BalanceItem
              label="Checking"
              amount="£24,850.00"
              masked={!showBalances}
              color="bg-emerald-500"
            />
            <BalanceItem
              label="Wealth Savings"
              amount="£118,100.00"
              masked={!showBalances}
              color="bg-slate-900"
            />
            <BalanceItem
              label="Investments"
              amount="£0.00"
              masked={!showBalances}
              color="bg-emerald-200"
            />
          </div>
        </div>

        {/* GLOBAL MONEY CARD - REBRANDED */}
        <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl shadow-slate-200 relative overflow-hidden group">
          <Globe
            className="absolute -right-6 -bottom-6 text-emerald-500/10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-1000"
            size={180}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={14} className="text-emerald-400" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
                Global Wallet
              </h3>
            </div>
            <p className="text-slate-400 text-xs font-medium">
              Multi-currency enabled
            </p>

            <div className="mt-10">
              <h4 className="text-3xl font-black tracking-tight">
                {showBalances ? "$12,100.45" : "••••••"}
              </h4>
              <p className="text-[10px] text-slate-500 font-bold mt-2 uppercase tracking-widest">
                Primary: US Dollar
              </p>
            </div>

            <button
              onClick={() => navigate("/dashboard/transfer")}
              className="mt-10 w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-900/20 active:scale-[0.98]"
            >
              Transfer Funds
            </button>
          </div>
        </div>
      </div>

      {/* ACTION CENTER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-lg font-black italic tracking-tight text-slate-900">
              Activity History
            </h3>
            <button
              onClick={() => navigate("/dashboard/transactions")}
              className="text-[10px] font-black text-emerald-600 hover:text-slate-900 transition-colors tracking-[0.2em] uppercase"
            >
              Full Ledger
            </button>
          </div>
          <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm">
            <TransactionRow
              title="Apple Store"
              sub="Tech & Electronics"
              date="14 Mar"
              price="-£1,299.00"
            />
            <TransactionRow
              title="United Energy"
              sub="Utilities"
              date="13 Mar"
              price="-£142.50"
            />
            <TransactionRow
              title="Capital Dividend"
              sub="Investment"
              date="12 Mar"
              price="+£4,500.00"
              positive
            />
          </div>
        </div>

        {/* QUICK ACTIONS PANEL */}
        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm">
          <h3 className="font-black text-slate-900 mb-6 italic">
            Quick Controls
          </h3>
          <div className="space-y-3">
            <QuickActionButton
              icon={<Send size={18} />}
              label="Move Capital"
              onClick={() => navigate("/dashboard/transfer")}
            />
            <QuickActionButton
              icon={<Plus size={18} />}
              label="Add Recipient"
              onClick={() => setPayeePanelOpen(true)}
            />
            <QuickActionButton
              icon={<CreditCard size={18} />}
              label="Lock Card"
            />
          </div>
        </div>
      </div>

      {/* --- ADD PAYEE PANEL --- */}
      {isPayeePanelOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md z-50 transition-opacity"
            onClick={() => setPayeePanelOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-2xl animate-in slide-in-from-right duration-500">
            <div className="h-full flex flex-col p-8">
              <div className="flex items-center justify-between mb-10">
                <h2 className="text-2xl font-black italic tracking-tighter text-slate-900">
                  NEW RECIPIENT
                </h2>
                <button
                  onClick={() => setPayeePanelOpen(false)}
                  className="p-2 hover:bg-slate-50 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {payeeStep === "form" ? (
                <form onSubmit={handleAddPayee} className="space-y-6">
                  <div>
                    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                      Legal Name
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
                      placeholder="Enter Full Name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                        Sort Code
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                        placeholder="00-00-00"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3">
                        Account
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500 outline-none"
                        placeholder="8 Digits"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl mt-10"
                  >
                    Register Payee
                  </button>
                </form>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-[2rem] flex items-center justify-center mb-4">
                    <CheckCircle2 size={56} />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 italic">
                    SUCCESSFULLY REGISTERED
                  </h3>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">
                    Recipient has been verified and added to your secure address
                    book.
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- MINI COMPONENTS ---
const BalanceItem = ({ label, amount, masked, color }) => (
  <div className="group">
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-1.5 h-1.5 rounded-full ${color}`}></div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
        {label}
      </p>
    </div>
    <p className="text-xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
      {masked ? "••••••" : amount}
    </p>
  </div>
);

const TransactionRow = ({ title, sub, date, price, positive }) => (
  <div className="flex items-center justify-between p-6 border-b border-slate-50 last:border-0 hover:bg-slate-50/80 transition-all cursor-pointer group">
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-slate-400 text-xs group-hover:bg-emerald-600 group-hover:text-white transition-all">
        {title[0]}
      </div>
      <div>
        <p className="font-black text-sm text-slate-900 tracking-tight">
          {title}
        </p>
        <p className="text-[11px] font-bold text-slate-400 uppercase tracking-tighter">
          {sub} • {date}
        </p>
      </div>
    </div>
    <p
      className={`font-black text-sm ${positive ? "text-emerald-600" : "text-slate-900"}`}
    >
      {price}
    </p>
  </div>
);

const QuickActionButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-5 rounded-2xl border border-slate-50 hover:border-emerald-100 hover:bg-emerald-50/50 transition-all group"
  >
    <div className="flex items-center gap-4">
      <div className="text-slate-400 group-hover:text-emerald-600 transition-colors">
        {icon}
      </div>
      <span className="text-xs font-black uppercase tracking-widest text-slate-600 group-hover:text-slate-900 transition-colors">
        {label}
      </span>
    </div>
    <ArrowUpRight
      size={18}
      className="text-slate-300 group-hover:text-emerald-600 transition-colors"
    />
  </button>
);

export default Dashboard;
