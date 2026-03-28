import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ShieldCheck,
  Info,
  Landmark,
  ArrowRight,
  Clock,
  CheckCircle,
} from "lucide-react";

const DashboardLoan = () => {
  const { account, user } = useOutletContext();
  const [isApplying, setIsApplying] = useState(false);

  // Logic to check if user already has an active or pending loan
  const activeLoan = account?.activeLoan;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <header>
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-1">
          Capital Management
        </h2>
        <h1 className="text-3xl font-black text-slate-900 italic">
          Credit Facilities
        </h1>
      </header>

      {!activeLoan ? (
        /* --- STATE: APPLICATION VIEW --- */
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm">
              <h3 className="text-xl font-black mb-6 italic">
                Request Liquidity Injection
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">
                      Desired Principal (USD)
                    </label>
                    <input
                      type="number"
                      placeholder="50,000"
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 font-mono font-bold focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400">
                      Tenure (Months)
                    </label>
                    <select className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold">
                      <option>12 Months @ 4.5%</option>
                      <option>24 Months @ 5.2%</option>
                      <option>36 Months @ 6.0%</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400">
                    Purpose of Funds
                  </label>
                  <textarea
                    className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium"
                    rows="3"
                    placeholder="Working capital, real estate acquisition, etc."
                  />
                </div>
                <button className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-3">
                  Submit for Underwriting <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-emerald-900 text-white rounded-[2.5rem] p-8 shadow-xl">
              <ShieldCheck className="mb-4 text-emerald-400" size={32} />
              <h4 className="font-black italic text-lg mb-2">Pre-Approved</h4>
              <p className="text-emerald-200/60 text-[11px] leading-relaxed mb-6 uppercase font-bold tracking-tight">
                Based on your institutional history, you are eligible for up to
                <span className="text-white block text-xl mt-1">
                  $250,000.00
                </span>
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-[10px] font-bold">
                  <CheckCircle size={14} /> Instant Disbursement
                </li>
                <li className="flex items-center gap-2 text-[10px] font-bold">
                  <CheckCircle size={14} /> No Collateral Required
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : (
        /* --- STATE: ACTIVE LOAN MANAGEMENT --- */
        <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm">
          <div className="bg-slate-900 p-10 text-white flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Active Facility
                </p>
              </div>
              <p className="text-4xl font-mono font-black italic">
                ${activeLoan.remainingBalance.toLocaleString()}
              </p>
              <p className="text-[10px] font-bold text-slate-500 uppercase mt-1">
                Remaining Principal & Interest
              </p>
            </div>
            <Landmark size={60} className="opacity-10" />
          </div>

          <div className="p-10 grid md:grid-cols-3 gap-8">
            <LoanDetail
              label="Next Repayment"
              value={activeLoan.nextDate}
              icon={<Clock size={16} />}
            />
            <LoanDetail
              label="Interest Rate"
              value={`${activeLoan.rate}% Fixed`}
              icon={<Info size={16} />}
            />
            <div className="flex items-center justify-end">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all">
                Manual Repayment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const LoanDetail = ({ label, value, icon }) => (
  <div className="space-y-1">
    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
      {icon} {label}
    </p>
    <p className="text-lg font-bold text-slate-900 uppercase tracking-tighter">
      {value}
    </p>
  </div>
);

export default DashboardLoan;
