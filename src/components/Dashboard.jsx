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
        <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-8 relative">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-sm text-gray-400 font-bold uppercase tracking-tight">
                Combined Wealth (GBP)
              </p>
              <h2 className="text-4xl font-black tracking-tight mt-1">
                {showBalances ? "£142,950.00" : "••••••••"}
              </h2>
            </div>

            {/* ACCOUNT SETTINGS DROPDOWN */}
            <div className="relative">
              <button
                onClick={() => setSettingsOpen(!isSettingsOpen)}
                className={`p-2 rounded-lg transition-colors ${isSettingsOpen ? "bg-slate-900 text-white" : "bg-gray-50 text-slate-600 hover:bg-gray-200"}`}
              >
                <SlidersHorizontal size={18} />
              </button>

              {isSettingsOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setSettingsOpen(false)}
                  ></div>
                  <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-100 shadow-xl rounded-xl z-20 p-4 animate-in zoom-in-95 duration-200">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                      Display Currency
                    </p>
                    <div className="space-y-1">
                      {[
                        "GBP - British Pound",
                        "USD - US Dollar",
                        "EUR - Euro",
                      ].map((curr) => (
                        <button
                          key={curr}
                          className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-gray-50 flex items-center justify-between group"
                        >
                          {curr}
                          <ChevronRight
                            size={14}
                            className="text-gray-300 group-hover:text-slate-900"
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-gray-50 pt-8">
            <BalanceItem
              label="Checking"
              amount="£24,850.00"
              masked={!showBalances}
              color="bg-blue-600"
            />
            <BalanceItem
              label="Savings"
              amount="£118,100.00"
              masked={!showBalances}
              color="bg-green-600"
            />
            <BalanceItem
              label="Investments"
              amount="£0.00"
              masked={!showBalances}
              color="bg-purple-600"
            />
          </div>
        </div>

        {/* PROMO CARD / GLOBAL MONEY */}
        <div className="bg-[#db0011] rounded-2xl p-8 text-white shadow-xl shadow-red-100 relative overflow-hidden group">
          <Globe
            className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-700"
            size={160}
          />
          <h3 className="text-lg font-bold">Global Money</h3>
          <p className="text-red-100 text-sm opacity-80 mt-1">
            Ready for international transfer
          </p>
          <div className="mt-8">
            <h4 className="text-3xl font-bold">
              {showBalances ? "$12,100.45" : "••••••"}
            </h4>
            <p className="text-xs text-red-100 mt-1">Primary Currency: USD</p>
          </div>
          <button
            onClick={() => navigate("/dashboard/transfer")}
            className="mt-8 w-full bg-white text-[#db0011] py-3 rounded-xl font-bold text-sm uppercase tracking-wide hover:bg-red-50 transition-all shadow-md active:scale-[0.98]"
          >
            Exchange Money
          </button>
        </div>
      </div>

      {/* ACTION CENTER */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold">Recent Transactions</h3>
            <button
              onClick={() => navigate("/dashboard/transactions")}
              className="text-xs font-bold text-[#db0011] hover:underline tracking-widest"
            >
              VIEW ALL HISTORY
            </button>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
            <TransactionRow
              title="Apple Store"
              sub="Electronics"
              date="Today"
              price="-£1,299.00"
            />
            <TransactionRow
              title="Starbucks"
              sub="Food & Drink"
              date="Today"
              price="-£4.50"
            />
            <TransactionRow
              title="Salary"
              sub="Income"
              date="Yesterday"
              price="+£4,500.00"
              positive
            />
          </div>
        </div>

        {/* QUICK ACTIONS PANEL */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <h3 className="font-bold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <QuickActionButton
              icon={<Send size={18} />}
              label="Move Money"
              onClick={() => navigate("/dashboard/transfer")}
            />
            <QuickActionButton
              icon={<Plus size={18} />}
              label="Add Payee"
              onClick={() => setPayeePanelOpen(true)}
            />
            <QuickActionButton
              icon={<CreditCard size={18} />}
              label="Freeze Card"
            />
          </div>
        </div>
      </div>

      {/* --- ADD PAYEE SLIDE-OVER PANEL --- */}
      {isPayeePanelOpen && (
        <>
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setPayeePanelOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-white z-50 shadow-2xl animate-in slide-in-from-right duration-500">
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-xl font-black tracking-tight">
                  ADD NEW PAYEE
                </h2>
                <button
                  onClick={() => setPayeePanelOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8">
                {payeeStep === "form" ? (
                  <form onSubmit={handleAddPayee} className="space-y-6">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                        Account Holder Name
                      </label>
                      <input
                        required
                        type="text"
                        className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-[#db0011] transition-all"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                          Sort Code
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#db0011]"
                          placeholder="00-00-00"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                          Account Number
                        </label>
                        <input
                          required
                          type="text"
                          className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#db0011]"
                          placeholder="12345678"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#db0011] text-white py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all shadow-lg shadow-red-200 mt-8"
                    >
                      Confirm & Save Payee
                    </button>
                  </form>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center space-y-4 animate-in zoom-in-95 duration-500">
                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-2xl font-black">PAYEE ADDED</h3>
                    <p className="text-gray-500 text-sm">
                      You can now send money to this account immediately.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

// --- MINI COMPONENTS ---
const BalanceItem = ({ label, amount, masked, color }) => (
  <div>
    <div className="flex items-center gap-2 mb-1">
      <div className={`w-2 h-2 rounded-full ${color}`}></div>
      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
        {label}
      </p>
    </div>
    <p className="text-lg font-bold text-gray-800">
      {masked ? "••••••" : amount}
    </p>
  </div>
);

const TransactionRow = ({ title, sub, date, price, positive }) => (
  <div className="flex items-center justify-between p-5 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors cursor-pointer group">
    <div className="flex items-center gap-4">
      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400 text-xs group-hover:bg-gray-200 transition-colors">
        {title[0]}
      </div>
      <div>
        <p className="font-bold text-sm text-gray-900">{title}</p>
        <p className="text-[11px] text-gray-400">
          {sub} • {date}
        </p>
      </div>
    </div>
    <p
      className={`font-bold text-sm ${positive ? "text-green-600" : "text-gray-900"}`}
    >
      {price}
    </p>
  </div>
);

const QuickActionButton = ({ icon, label, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-4 rounded-xl border border-gray-50 hover:border-red-100 hover:bg-red-50 transition-all group"
  >
    <div className="flex items-center gap-3">
      <div className="text-gray-400 group-hover:text-[#db0011] transition-colors">
        {icon}
      </div>
      <span className="text-sm font-bold text-gray-700 group-hover:text-gray-900 transition-colors">
        {label}
      </span>
    </div>
    <ArrowUpRight
      size={16}
      className="text-gray-300 group-hover:text-[#db0011] transition-colors"
    />
  </button>
);

export default Dashboard;
