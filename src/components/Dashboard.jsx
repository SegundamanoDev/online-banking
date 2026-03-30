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
  Activity,
  ArrowDownLeft,
} from "lucide-react";
import { useGetProfileQuery, useGetTransactionsQuery } from "../services/api";

const Dashboard = () => {
  const [isExporting, setIsExporting] = useState(false);
  const { showBalances } = useOutletContext();
  const navigate = useNavigate();

  const {
    data: profileData,
    isLoading: profileLoading,
    isError: profileError,
  } = useGetProfileQuery();
  const { data: trxData, isLoading: trxLoading } = useGetTransactionsQuery();

  if (profileLoading || trxLoading) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-slate-400 gap-4">
        <Loader2 className="animate-spin text-emerald-500" size={40} />
        <p className="text-[10px] font-black uppercase tracking-[0.3em] animate-pulse">
          Synchronizing Institutional Vault...
        </p>
      </div>
    );
  }

  if (profileError) {
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center text-center p-10">
        <ShieldCheck className="text-red-400 mb-4" size={48} />
        <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
          Access Revoked
        </h3>
        <p className="text-sm text-slate-400 mt-2">
          Authorization token expired. Please re-authenticate.
        </p>
        <button
          onClick={() => navigate("/login")}
          className="mt-6 px-8 py-3 bg-slate-900 text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em]"
        >
          Secure Re-Login
        </button>
      </div>
    );
  }

  const { user, account } = profileData;
  const recentTransactions = trxData?.slice(0, 6) || [];
  const currencySign = account.currency === "GBP" ? "£" : "$";

  const handleExportStatement = async () => {
    setIsExporting(true);
    try {
      const token = localStorage.getItem("token"); // Get your RTK auth token

      const response = await fetch(
        "https://united-capital.onrender.com/api/transactions/statement",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) throw new Error("Network response was not ok");

      // Convert the response to a Blob (Binary Data)
      const blob = await response.blob();

      // Create a temporary URL for the PDF file
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;

      // Set the filename
      link.setAttribute("download", `UC-Statement-${Date.now()}.pdf`);

      // Append to document, click it, and remove it
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);

      // Clean up the URL object
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Export Error:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* SECTION 1: ASSET RECAP */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* MAIN PORTFOLIO CARD */}
        <div className="xl:col-span-2 bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.02)] border border-slate-100 p-10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-50/20 rounded-full -mr-32 -mt-32 blur-[100px] group-hover:bg-emerald-100/30 transition-colors duration-1000" />

          <div className="relative z-10 flex justify-between items-start">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.25em]">
                  Portfolio Valuation ({account.currency})
                </p>
              </div>
              <h2 className="text-5xl lg:text-6xl font-black tracking-tighter text-slate-900">
                {showBalances
                  ? `${currencySign}${account.balance.toLocaleString()}`
                  : "••••••••"}
              </h2>
            </div>
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-slate-50 mt-12 pt-10">
            <BalanceItem
              label="Operating Capital"
              amount={`${currencySign}${account.balance.toLocaleString()}`}
              masked={!showBalances}
              color="bg-emerald-500"
              percentage="70%"
            />
            <BalanceItem
              label="Treasury Reserves"
              amount={`${currencySign}${(account.balance * 0.25).toLocaleString()}`}
              masked={!showBalances}
              color="bg-slate-900"
              percentage="25%"
            />
            <BalanceItem
              label="Escrow Assets"
              amount={`${currencySign}${(account.balance * 0.05).toLocaleString()}`}
              masked={!showBalances}
              color="bg-emerald-200"
              percentage="5%"
            />
          </div>
        </div>

        {/* ACCOUNT CREDENTIALS CARD */}
        <div className="bg-slate-900 rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group flex flex-col justify-between">
          <Globe
            className="absolute -right-12 -bottom-12 text-emerald-500/5 group-hover:rotate-12 transition-transform duration-[3000ms]"
            size={250}
          />

          <div className="relative z-10">
            <div className="flex justify-between items-center mb-10">
              <div className="px-3 py-1 bg-white/10 rounded-lg border border-white/10">
                <p className="text-[9px] font-black uppercase tracking-widest text-emerald-400">
                  Wealth Tier: Elite
                </p>
              </div>
              <Landmark size={20} className="text-slate-500" />
            </div>

            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-2">
              Institutional Routing Number
            </p>
            <h4 className="text-xl font-mono tracking-[0.3em] text-white/90 uppercase">
              {account.accountNumber}
            </h4>
          </div>

          <div className="relative z-10 mt-12">
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              Quick Liquidity
            </p>
            <button
              onClick={() => navigate("/dashboard/transfer/local")}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-[1.5rem] font-black text-[10px] uppercase tracking-[0.25em] transition-all shadow-lg shadow-emerald-900/20 active:scale-95 flex items-center justify-center gap-3"
            >
              <Send size={16} />
              Initiate Settlement
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: SETTLEMENT LOGS & CONTROLS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* TRANSACTION LEDGER */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between px-4">
            <div className="flex items-center gap-3">
              <Activity size={18} className="text-emerald-500" />
              <h3 className="text-lg font-black tracking-tighter text-slate-900 uppercase">
                Settled Transactions
              </h3>
            </div>
            <button
              onClick={() => navigate("/dashboard/transactions")}
              className="text-[9px] font-black text-slate-400 hover:text-emerald-600 transition-colors tracking-[0.3em] uppercase border-b border-transparent hover:border-emerald-600"
            >
              View Audit Trail
            </button>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden shadow-sm">
            {recentTransactions.length > 0 ? (
              recentTransactions.map((trx) => (
                <TransactionRow
                  key={trx._id}
                  trx={trx}
                  userId={user._id}
                  currencySign={currencySign}
                />
              ))
            ) : (
              <div className="flex flex-col items-center justify-center h-80 opacity-20">
                <FileText size={48} className="mb-4" />
                <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                  No Recorded Data
                </p>
              </div>
            )}
          </div>
        </div>

        {/* TREASURY CONTROLS */}
        <div className="space-y-6">
          <h3 className="font-black text-slate-900 italic tracking-tighter uppercase text-sm px-4">
            Treasury Operations
          </h3>
          <div className="bg-white rounded-[2.5rem] border border-slate-100 p-6 shadow-sm space-y-3">
            <QuickActionButton
              icon={<FileText size={18} />}
              label="Export Fiscal Audit"
              desc="PDF/CSV Statement"
              onClick={handleExportStatement}
            />
            <QuickActionButton
              icon={<Globe size={18} />}
              label="Global Wire"
              desc="Cross-border Transfer"
              onClick={() => navigate("/dashboard/transfer/international")}
            />
            <QuickActionButton
              icon={<ShieldCheck size={18} />}
              label="Credit Lines"
              desc="Apply for Capital"
              onClick={() => navigate("/dashboard/loans")}
            />
            <QuickActionButton
              icon={<CreditCard size={18} />}
              label="Freeze Asset"
              desc="Emergency Card Lock"
            />
          </div>

          {/* SYSTEM STATUS INDICATOR */}
          <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <p className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                Network Status: Nominal
              </p>
            </div>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">
              v2.04.1-UCB
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- MODULAR SUB-COMPONENTS ---

const BalanceItem = ({ label, amount, masked, color, percentage }) => (
  <div className="group cursor-default">
    <div className="flex items-center justify-between mb-3">
      <div className="flex items-center gap-2">
        <div className={`w-1 h-1 rounded-full ${color}`}></div>
        <p className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">
          {label}
        </p>
      </div>
      <span className="text-[9px] font-black text-slate-300">{percentage}</span>
    </div>
    <p className="text-2xl font-black text-slate-900 group-hover:translate-x-1 transition-transform">
      {masked ? "••••••" : amount}
    </p>
  </div>
);

const TransactionRow = ({ trx, userId, currencySign }) => {
  const isOutgoing = trx.sender === userId || trx.sender?._id === userId;
  const statusColor = isOutgoing ? "text-red-600" : "text-emerald-600";
  const bgIcon = isOutgoing
    ? "bg-red-50 text-red-600"
    : "bg-emerald-50 text-emerald-600";

  return (
    <div className="flex items-center justify-between p-7 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-all cursor-pointer group">
      <div className="flex items-center gap-6">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black transition-all group-hover:scale-110 shadow-sm ${bgIcon}`}
        >
          {isOutgoing ? (
            <ArrowUpRight size={20} />
          ) : (
            <ArrowDownLeft size={20} />
          )}
        </div>
        <div>
          <p className="font-black text-[13px] text-slate-900 tracking-tight uppercase group-hover:text-emerald-600 transition-colors">
            {trx.description || "Institutional Settlement"}
          </p>
          <div className="flex items-center gap-2 mt-1">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              {trx.type}
            </p>
            <span className="w-1 h-1 bg-slate-200 rounded-full" />
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              {new Date(trx.createdAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </div>
      <p className={`font-black text-base ${statusColor}`}>
        {isOutgoing ? "-" : "+"}
        {currencySign}
        {trx.amount.toLocaleString()}
      </p>
    </div>
  );
};

const QuickActionButton = ({ icon, label, desc, onClick }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center justify-between p-5 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/80 transition-all group"
  >
    <div className="flex items-center gap-5">
      <div className="text-slate-400 group-hover:text-emerald-600 transition-colors p-3 bg-slate-50 rounded-xl group-hover:bg-white group-hover:shadow-sm">
        {icon}
      </div>
      <div className="text-left">
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-900">
          {label}
        </p>
        <p className="text-[9px] font-bold text-slate-400 uppercase mt-0.5">
          {desc}
        </p>
      </div>
    </div>
    <ArrowUpRight
      size={16}
      className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
    />
  </button>
);

const Landmark = ({ size, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="3" y1="21" x2="21" y2="21"></line>
    <line x1="3" y1="7" x2="21" y2="7"></line>
    <path d="M4 10v11"></path>
    <path d="M20 10v11"></path>
    <path d="M8 10v11"></path>
    <path d="M12 10v11"></path>
    <path d="M16 10v11"></path>
    <path d="M12 2 3 7h18L12 2z"></path>
  </svg>
);

export default Dashboard;
