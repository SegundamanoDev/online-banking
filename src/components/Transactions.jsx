import React, { useState, useMemo } from "react";
import { useGetTransactionsQuery, useGetProfileQuery } from "../services/api";
import {
  Search,
  Filter,
  ArrowUpRight,
  ArrowDownLeft,
  Download,
  ChevronRight,
  Loader2,
  Calendar,
  Wallet,
} from "lucide-react";

const Transactions = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isDownloading, setIsDownloading] = useState(false);

  // 1. Fetch real data from RTK Query
  const {
    data: transactions = [],
    isLoading: trxLoading,
    isError,
  } = useGetTransactionsQuery();
  const { data: profile, isLoading: profileLoading } = useGetProfileQuery();

  // 2. Resolve Current User ID (Handles both nested and flat responses)
  const currentUserId = profile?.user?._id || profile?._id;

  // 3. Calculate Stats using useMemo for performance
  const { totalInflow, totalOutflow } = useMemo(() => {
    if (!currentUserId || !transactions.length)
      return { totalInflow: 0, totalOutflow: 0 };

    return transactions.reduce(
      (acc, trx) => {
        const receiverId = trx.receiver?._id || trx.receiver;
        const senderId = trx.sender?._id || trx.sender;

        if (receiverId === currentUserId) {
          acc.totalInflow += trx.amount;
        } else if (senderId === currentUserId) {
          acc.totalOutflow += trx.amount;
        }
        return acc;
      },
      { totalInflow: 0, totalOutflow: 0 },
    );
  }, [transactions, currentUserId]);

  // 4. Logic: Group transactions by Date
  const groupTransactionsByDate = (items) => {
    const groups = {};
    items.forEach((item) => {
      const date = new Date(item.createdAt).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      });
      if (!groups[date]) groups[date] = [];
      groups[date].push(item);
    });
    return Object.entries(groups).map(([date, items]) => ({ date, items }));
  };

  // 5. Filter transactions based on Search
  const filteredTransactions = transactions.filter(
    (trx) =>
      trx.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trx.type?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      trx.transactionId?.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  const groupedData = groupTransactionsByDate(filteredTransactions);

  // 6. Statement Download Logic
  const handleDownloadStatement = async () => {
    setIsDownloading(true);
    const token = localStorage.getItem("token");
    const baseUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

    try {
      const response = await fetch(`${baseUrl}/api/transactions/statement`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) throw new Error("Failed to generate statement");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `UC-Statement-${Date.now()}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download Error:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  if (trxLoading || profileLoading)
    return (
      <div className="h-[60vh] flex flex-col items-center justify-center gap-4">
        <Loader2 className="animate-spin text-emerald-500" size={40} />
        <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
          Accessing Ledger...
        </p>
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER SECTION */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 px-2">
        <div>
          <h2 className="text-4xl font-black italic tracking-tighter text-slate-900">
            Ledger
          </h2>
          <p className="text-xs text-slate-400 mt-2 font-bold uppercase tracking-widest">
            {profile?.account?.accountNumber || "ID: •••• 8842"} • Institutional
            History
          </p>
        </div>
        <button
          onClick={handleDownloadStatement}
          disabled={isDownloading}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 disabled:opacity-50"
        >
          {isDownloading ? (
            <Loader2 className="animate-spin" size={16} />
          ) : (
            <Download size={16} />
          )}
          {isDownloading ? "Generating..." : "Get Statement"}
        </button>
      </div>

      {/* MINI STATS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          label="Total Inflow"
          amount={totalInflow}
          icon={<ArrowDownLeft size={28} />}
          color="text-emerald-600"
          bg="bg-emerald-50"
        />
        <StatCard
          label="Total Outflow"
          amount={totalOutflow}
          icon={<ArrowUpRight size={28} />}
          color="text-rose-600"
          bg="bg-rose-50"
        />
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
            placeholder="Search records by description..."
            className="w-full bg-white border-none rounded-2xl pl-14 pr-6 py-4 text-sm font-bold shadow-sm focus:ring-2 focus:ring-emerald-500/20 transition-all outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="flex items-center justify-center gap-2 bg-white border border-slate-100 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-600 hover:bg-slate-50 shadow-sm transition-all">
          <Filter size={18} />
          Refine
        </button>
      </div>

      {/* TRANSACTION LIST */}
      <div className="bg-white rounded-[2.5rem] border border-slate-50 shadow-sm overflow-hidden">
        {groupedData.length > 0 ? (
          groupedData.map((group, idx) => (
            <div key={idx}>
              <div className="bg-slate-50/50 px-8 py-4 border-b border-slate-50 flex items-center gap-2">
                <Calendar size={12} className="text-slate-300" />
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
                  {group.date}
                </span>
              </div>

              <div className="divide-y divide-slate-50">
                {group.items.map((item) => {
                  const receiverId = item.receiver?._id || item.receiver;
                  const isIncome = receiverId === currentUserId;

                  return (
                    <div
                      key={item._id}
                      className="flex items-center justify-between p-7 hover:bg-emerald-50/30 transition-all cursor-pointer group"
                    >
                      <div className="flex items-center gap-5">
                        <div
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] ${isIncome ? "bg-emerald-600 text-white" : "bg-slate-900 text-white"}`}
                        >
                          <Wallet size={18} />
                        </div>
                        <div>
                          <h4 className="font-black text-slate-900 text-sm tracking-tight">
                            {item.description || "Institutional Transfer"}
                          </h4>
                          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-tighter mt-0.5">
                            {item.transactionId} •{" "}
                            {isIncome ? "CREDIT" : "DEBIT"}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-8">
                        <div className="text-right">
                          <p
                            className={`text-sm font-black ${isIncome ? "text-emerald-600" : "text-slate-900"}`}
                          >
                            {isIncome ? "+" : "-"}$
                            {item.amount.toLocaleString()}
                          </p>
                          <p
                            className={`text-[9px] font-black uppercase tracking-widest mt-1 ${item.status === "completed" ? "text-emerald-500" : "text-amber-500"}`}
                          >
                            {item.status || "Settled"}
                          </p>
                        </div>
                        <ChevronRight
                          size={20}
                          className="text-slate-200 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        ) : (
          <div className="p-20 text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-slate-200">
              <Filter size={32} />
            </div>
            <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">
              No matching records found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

const StatCard = ({ label, amount, icon, color, bg }) => (
  <div className="bg-white p-7 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-5 group hover:border-emerald-100 transition-all">
    <div
      className={`w-14 h-14 ${bg} ${color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform`}
    >
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
        {label}
      </p>
      <p className="text-2xl font-black text-slate-900">
        ${amount.toLocaleString()}.00
      </p>
    </div>
  </div>
);

export default Transactions;
