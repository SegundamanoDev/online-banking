import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import {
  Globe,
  SlidersHorizontal,
  Send,
  Plus,
  CreditCard,
  ArrowUpRight,
  TrendingUp,
  FileText,
  Loader2,
  ShieldCheck,
} from "lucide-react";
import { useGetProfileQuery, useGetTransactionsQuery } from "../services/api";

const Dashboard = () => {
  const { showBalances } = useOutletContext();
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
  } = useGetProfileQuery();

  const { data: trxData, isLoading: trxLoading } = useGetTransactionsQuery();

  const [isPayeePanelOpen, setPayeePanelOpen] = useState(false);
  const [isSettingsOpen, setSettingsOpen] = useState(false);

  if (profileLoading || trxLoading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-slate-400 gap-4">
        <Loader2 className="animate-spin text-emerald-500" size={40} />
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">
          Synchronizing Vault Data...
        </p>
      </div>
    );
  }

  if (profileError) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-center p-10">
        <ShieldCheck className="text-red-400 mb-4" size={48} />
        <h3 className="text-xl font-black italic text-slate-900">
          Session Expired
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Please log in again to access your private wealth dashboard.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-xs uppercase tracking-widest"
        >
          Re-Authenticate
        </button>
      </div>
    );
  }

  const { user, account } = profileData;
  const recentTransactions = trxData?.slice(0, 5) || [];

  const handleExportStatement = () => {
    window.open(
      `${process.env.REACT_APP_API_URL || ""}/api/transactions/statement`,
      "_blank",
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 relative">
      {/* PRIMARY WEALTH CARDS */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/30 rounded-full -mr-20 -mt-20 blur-3xl" />

          <div className="relative z-10 flex justify-between items-start mb-8">
            <div>
              <p className="text-[10px] text-emerald-600 font-black uppercase tracking-[0.2em]">
                Total Liquid Capital ({account.currency})
              </p>
              <h2 className="text-4xl lg:text-5xl font-black tracking-tighter text-slate-900 mt-2">
                {showBalances
                  ? `${account.currency === "GBP" ? "£" : "$"}${account.balance.toLocaleString()}`
                  : "••••••••"}
              </h2>
            </div>

            <div className="relative">
              <button
                onClick={() => setSettingsOpen(!isSettingsOpen)}
                className={`p-3 rounded-xl transition-all ${isSettingsOpen ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50"}`}
              >
                <SlidersHorizontal size={20} />
              </button>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-50 pt-8">
            <BalanceItem
              label={account.accountType || "Checking"}
              amount={`${account.currency === "GBP" ? "£" : "$"}${account.balance.toLocaleString()}`}
              masked={!showBalances}
              color="bg-emerald-500"
            />
            <BalanceItem
              label="Wealth Savings"
              amount={`${account.currency === "GBP" ? "£" : "$"}${account.balance.toLocaleString()}`}
              masked={!showBalances}
              color="bg-slate-900"
            />
            <BalanceItem
              label="Treasury"
              amount={`${account.currency === "GBP" ? "£" : "$"}${account.balance.toLocaleString()}`}
              masked={!showBalances}
              color="bg-emerald-200"
            />
          </div>
        </div>

        {/* INSTITUTIONAL ID CARD */}
        <div className="bg-slate-900 rounded-[2rem] p-8 text-white shadow-xl relative overflow-hidden group">
          <Globe
            className="absolute -right-6 -bottom-6 text-emerald-500/10 group-hover:scale-110 transition-transform duration-1000"
            size={180}
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-1">
              <TrendingUp size={14} className="text-emerald-400" />
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-400">
                Institutional ID
              </h3>
            </div>

            <p className="text-slate-400 text-xs font-mono tracking-widest uppercase">
              {account.accountNumber}
            </p>

            <div className="mt-10">
              <h4 className="text-3xl font-black tracking-tight">
                {showBalances
                  ? `${account.currency === "GBP" ? "£" : "$"}${account.balance.toLocaleString(undefined, { minimumFractionDigits: 2 })}`
                  : "••••••"}
              </h4>

              <p className="text-[10px] text-slate-500 font-bold mt-2 uppercase tracking-widest">
                Account Status:{" "}
                <span className="text-emerald-500">
                  {user.status || "Active"}
                </span>
              </p>
            </div>

            <button
              onClick={() => navigate("/dashboard/transfer")}
              className="mt-10 w-full bg-emerald-600 text-white py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all active:scale-[0.98]"
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

          <div className="bg-white rounded-[2rem] border border-slate-100 overflow-hidden shadow-sm min-h-[300px]">
            {recentTransactions.length > 0 ? (
              recentTransactions.map((trx) => {
                // Calculation for Plus/Minus and Color
                const isOutgoing =
                  trx.sender === user._id || trx.sender?._id === user._id;
                const prefix = isOutgoing ? "-" : "+";
                const currencySymbol = account.currency === "GBP" ? "£" : "$";

                return (
                  <TransactionRow
                    key={trx._id}
                    title={trx.description || "Institutional Transfer"}
                    sub={trx.type}
                    date={new Date(trx.createdAt).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                    price={`${prefix}${currencySymbol}${trx.amount.toLocaleString()}`}
                    positive={!isOutgoing}
                  />
                );
              })
            ) : (
              <div className="flex flex-col items-center justify-center h-64 text-slate-300">
                <p className="text-[10px] font-black uppercase tracking-widest">
                  No Recent Transactions
                </p>
              </div>
            )}
          </div>
        </div>

        {/* QUICK ACTIONS PANEL */}
        <div className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm">
          <h3 className="font-black text-slate-900 mb-6 italic">
            Quick Controls
          </h3>
          <div className="space-y-3">
            <QuickActionButton
              icon={<FileText size={18} />}
              label="Export Statement"
              onClick={handleExportStatement}
            />
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
    </div>
  );
};

// --- SUB-COMPONENTS ---

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
      <div
        className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xs transition-all ${positive ? "bg-emerald-50 text-emerald-600" : "bg-red-50 text-red-600"}`}
      >
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
      className={`font-black text-sm ${positive ? "text-emerald-600" : "text-red-600"}`}
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
