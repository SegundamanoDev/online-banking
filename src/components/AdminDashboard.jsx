import React from "react";
import {
  TrendingUp,
  Activity,
  ShieldAlert,
  FileText,
  Zap,
  Globe,
  ArrowUpRight,
} from "lucide-react";
// Assuming these are your Redux Toolkit Query hooks
import { useGetSystemStatsQuery } from "../../src/services/api";
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from "recharts";

const AdminDashboard = () => {
  // 1. Fetch live data from your updated getSystemStats controller
  const { data: stats, isLoading, isError } = useGetSystemStatsQuery();

  if (isLoading)
    return (
      <div className="p-10 font-mono text-xs animate-pulse">
        SYNCHRONIZING WITH CORE LEDGER...
      </div>
    );
  if (isError)
    return (
      <div className="p-10 font-mono text-xs text-red-500">
        CONNECTION FAILURE: DATABASE OFFLINE
      </div>
    );

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* 1. TOP TIER: MISSION CRITICAL STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total AUM Card */}
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-2">
              Total System Liquidity (AUM)
            </p>
            <h2 className="text-4xl font-black tracking-tighter italic">
              {/* Uses 'totalDeposits' from your backend controller */}$
              {stats?.totalDeposits?.toLocaleString() || "0.00"}
            </h2>
            <div className="flex items-center gap-2 mt-4 text-emerald-400 font-bold text-[10px]">
              <TrendingUp size={14} /> LIVE SYSTEM VALUATION
            </div>
          </div>
          <Zap
            size={120}
            className="absolute -right-4 -bottom-4 text-slate-800 opacity-50 group-hover:text-emerald-500/10 transition-colors"
          />
        </div>

        {/* Transaction Velocity Card */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
            Historical Volume
          </p>
          <h2 className="text-4xl font-black tracking-tighter italic text-slate-900">
            {stats?.totalTransactions || "0"}{" "}
            <span className="text-sm text-slate-300">LOGS</span>
          </h2>
          <div className="h-12 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              {/* Uses 'chartData' (aggregated by date) from your backend */}
              <LineChart data={stats?.chartData}>
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="#10b981"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* User Count Card */}
        <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
              Verified Client Base
            </p>
            <h2 className="text-4xl font-black tracking-tighter italic text-slate-900">
              {stats?.totalUsers || "0"}
            </h2>
          </div>
          <div className="flex gap-1">
            {/* Visual indicator of system health */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="h-4 w-full bg-emerald-500 rounded-sm opacity-80"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 2. CENTER: LIVE SYSTEM TICKER (BLOOMBERG STYLE) */}
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-slate-50/50">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 flex items-center gap-2">
              <Activity size={14} className="text-blue-500" /> Live Signal Feed
            </h3>
            <span className="text-[9px] font-black text-slate-400 uppercase animate-pulse">
              Real-Time Pulse Active
            </span>
          </div>

          <div className="flex-1 max-h-[400px] overflow-y-auto font-mono scrollbar-hide">
            {stats?.recentActivity && stats.recentActivity.length > 0 ? (
              stats.recentActivity.map((log, index) => (
                <TickerItem
                  key={index}
                  type={log.type}
                  msg={log.msg}
                  time={log.time}
                  // Color coding based on transaction type
                  color={
                    log.type === "DEPOSIT"
                      ? "text-emerald-600"
                      : log.type === "WITHDRAWAL"
                        ? "text-red-600"
                        : "text-blue-600"
                  }
                />
              ))
            ) : (
              <div className="p-10 text-center text-[10px] text-slate-400 uppercase font-black">
                No recent activity detected on the ledger
              </div>
            )}
          </div>
        </div>

        {/* 3. RIGHT: PROTOCOL CONTROLS (QUICK ACTIONS) */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 px-4">
            Security Protocol
          </h3>

          <div className="bg-white rounded-[2rem] p-6 border border-slate-100 shadow-sm space-y-4">
            <button className="w-full group bg-slate-50 hover:bg-red-50 p-4 rounded-2xl flex items-center justify-between transition-all border border-transparent hover:border-red-100">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-red-100 text-red-600 rounded-lg group-hover:bg-red-600 group-hover:text-white transition-colors">
                  <ShieldAlert size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase text-slate-900">
                    Freeze System
                  </p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase">
                    Immediate Ledger Lock
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300" />
            </button>

            <button className="w-full group bg-slate-50 hover:bg-blue-50 p-4 rounded-2xl flex items-center justify-between transition-all border border-transparent hover:border-blue-100">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FileText size={20} />
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase text-slate-900">
                    Audit Export
                  </p>
                  <p className="text-[9px] font-bold text-slate-400 uppercase">
                    Generate CSV Ledger
                  </p>
                </div>
              </div>
              <ArrowUpRight size={16} className="text-slate-300" />
            </button>
          </div>

          <div className="bg-emerald-500 rounded-[2rem] p-8 text-white shadow-xl shadow-emerald-500/20">
            <Globe size={32} className="mb-4" />
            <h4 className="text-lg font-black italic leading-tight">
              Network Status: Optimal
            </h4>
            <p className="text-[10px] font-bold uppercase opacity-80 mt-2 tracking-widest">
              Primary US-East Node Online
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper component for the Ticker rows
const TickerItem = ({ type, msg, time, color }) => (
  <div className="p-4 border-b border-slate-50 flex items-center gap-6 hover:bg-slate-50/50 transition-colors">
    <span className="text-[9px] font-bold text-slate-400 w-16">{time}</span>
    <span
      className={`text-[8px] font-black px-2 py-0.5 rounded border border-current ${color} uppercase tracking-tighter`}
    >
      {type}
    </span>
    <p className="text-[10px] font-bold text-slate-600 truncate flex-1">
      {msg}
    </p>
  </div>
);

export default AdminDashboard;
