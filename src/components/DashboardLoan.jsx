import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import { useRequestLoanMutation } from "../../src/services/api";
import {
  ShieldCheck,
  Info,
  Landmark,
  ArrowRight,
  Clock,
  CheckCircle,
  Loader2,
  Lock,
  ShieldAlert,
  AlertCircle,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

// --- SUB-COMPONENT: RESTRICTED FEATURE WRAPPER ---
const RestrictedWrapper = ({ children, isRestricted, message }) => {
  if (!isRestricted) return children;

  return (
    <div className="relative group">
      <div className="opacity-30 grayscale pointer-events-none select-none blur-[2px]">
        {children}
      </div>
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/5 backdrop-blur-[1px] rounded-[3rem] transition-all">
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center max-w-sm border border-white/10 animate-in fade-in zoom-in duration-500">
          <div className="w-16 h-16 bg-amber-500/10 text-amber-500 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-amber-500/20">
            <Lock size={32} />
          </div>
          <h4 className="font-black uppercase italic text-sm tracking-widest text-white">
            Credit Facility Locked
          </h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase mt-3 px-6 leading-relaxed tracking-wider">
            {message ||
              "New credit applications are temporarily disabled for your security."}
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:support@unitedcapital.com")
            }
            className="mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
          >
            Consult Treasury
          </button>
        </div>
      </div>
    </div>
  );
};

const DashboardLoan = () => {
  const { account } = useOutletContext();
  const navigate = useNavigate();
  const [requestLoan, { isLoading }] = useRequestLoanMutation();

  const [formData, setFormData] = useState({
    amount: "",
    loanType: "business",
    durationMonths: 12,
    purpose: "",
    pin: "",
  });

  const activeLoan = account?.activeLoan;

  // --- SECURITY LOGIC ---
  const isHardLocked =
    account?.isActive === false || account?.status === "suspended";
  const isRestricted =
    account?.status === "frozen" || account?.status === "restricted";

  // 1. HARD LOCK VIEW
  if (isHardLocked) {
    return (
      <div className="max-w-md mx-auto mt-20 p-10 bg-white rounded-[3rem] border-2 border-red-100 text-center shadow-2xl">
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <ShieldAlert size={40} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 uppercase italic">
          Facility Access Denied
        </h2>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 leading-relaxed">
          Your credit line has been suspended by the compliance department.
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest"
        >
          Return to Portfolio
        </button>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.pin.length !== 4)
      return toast.error("Security Authorization PIN required");
    if (Number(formData.amount) < 1000)
      return toast.error("Minimum principal: $1,000.00");

    const loadingToast = toast.loading("Processing Underwriting Request...");
    try {
      await requestLoan(formData).unwrap();
      toast.success("Application submitted to underwriting queue", {
        id: loadingToast,
      });
      setFormData((prev) => ({ ...prev, pin: "", amount: "" }));
    } catch (err) {
      toast.error(err?.data?.message || "Underwriting Failure", {
        id: loadingToast,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-20">
      <Toaster position="top-center" />
      <header>
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-1">
          Capital Management
        </h2>
        <h1 className="text-3xl font-black text-slate-900 italic uppercase">
          Credit Facilities
        </h1>
      </header>

      {!activeLoan || activeLoan.status === "none" ? (
        <RestrictedWrapper
          isRestricted={isRestricted}
          message={
            account?.status === "frozen"
              ? "Account Frozen: Credit applications disabled."
              : "Verification Required for Liquidity Access."
          }
        >
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-6">
              <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-sm">
                <h3 className="text-xl font-black mb-6 italic uppercase tracking-tighter">
                  Request Liquidity Injection
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                        Desired Principal (USD)
                      </label>
                      <input
                        required
                        type="number"
                        name="amount"
                        value={formData.amount}
                        onChange={handleInputChange}
                        placeholder="50,000"
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 font-mono font-bold text-xl focus:ring-2 focus:ring-emerald-500 transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                        Tenure (Months)
                      </label>
                      <select
                        name="durationMonths"
                        value={formData.durationMonths}
                        onChange={handleInputChange}
                        className="w-full bg-slate-50 border-none rounded-2xl p-4 font-bold text-sm h-[60px]"
                      >
                        <option value={12}>12 Months @ 4.5% APR</option>
                        <option value={24}>24 Months @ 5.2% APR</option>
                        <option value={36}>36 Months @ 6.0% APR</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase text-slate-400 ml-2">
                      Institutional Purpose
                    </label>
                    <textarea
                      required
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border-none rounded-2xl p-4 font-medium text-sm"
                      rows="2"
                      placeholder="e.g. Asset Acquisition, Portfolio Rebalancing..."
                    />
                  </div>

                  {/* PIN AUTHORIZATION BOX */}
                  <div className="bg-slate-900 p-8 rounded-[2rem] border border-white/10 space-y-4">
                    <div className="flex items-center gap-2">
                      <Lock size={14} className="text-emerald-400" />
                      <span className="text-[10px] font-black uppercase text-white tracking-widest">
                        Security Authorization Gate
                      </span>
                    </div>
                    <input
                      required
                      type="password"
                      name="pin"
                      maxLength="4"
                      value={formData.pin}
                      onChange={handleInputChange}
                      placeholder="••••"
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-center text-3xl tracking-[1em] font-black text-white focus:border-emerald-500 transition-all outline-none"
                    />
                    <p className="text-[9px] text-center font-bold text-slate-500 uppercase tracking-tighter">
                      Enter Security PIN to sign underwriting contract
                    </p>
                  </div>

                  <button
                    disabled={isLoading}
                    type="submit"
                    className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {isLoading ? (
                      <Loader2 className="animate-spin" size={18} />
                    ) : (
                      "Submit for Underwriting"
                    )}
                    {!isLoading && <ArrowRight size={18} />}
                  </button>
                </form>
              </div>
            </div>

            {/* SIDEBAR INFO */}
            <div className="space-y-6">
              <div className="bg-emerald-950 text-white rounded-[2.5rem] p-8 shadow-xl border border-emerald-500/20">
                <ShieldCheck className="mb-4 text-emerald-400" size={32} />
                <h4 className="font-black italic text-lg mb-2 uppercase">
                  Institutional Audit
                </h4>
                <p className="text-emerald-200/50 text-[10px] leading-relaxed mb-6 uppercase font-black tracking-tight">
                  All liquidity injections are subject to
                  <span className="text-white block text-sm mt-1">
                    KYC-Level 3 Verification
                  </span>
                </p>
                <div className="space-y-3 border-t border-white/5 pt-6">
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase text-emerald-400">
                    <CheckCircle size={14} /> Low-Latency Approval
                  </div>
                  <div className="flex items-center gap-2 text-[9px] font-black uppercase text-emerald-400">
                    <CheckCircle size={14} /> Fixed Capital Rates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </RestrictedWrapper>
      ) : (
        /* --- ACTIVE LOAN DISPLAY (Remains the same) --- */
        <div className="bg-white border border-slate-100 rounded-[3rem] overflow-hidden shadow-sm animate-in fade-in zoom-in-95">
          <div className="bg-slate-900 p-10 text-white flex justify-between items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  Current Ledger Balance
                </p>
              </div>
              <p className="text-4xl font-mono font-black italic">
                ${activeLoan.remainingBalance.toLocaleString()}
              </p>
            </div>
            <Landmark size={60} className="opacity-10" />
          </div>
          <div className="p-10 grid md:grid-cols-3 gap-8">
            <LoanDetail
              label="Next Repayment"
              value={activeLoan.nextDate || "Pending"}
              icon={<Clock size={16} />}
            />
            <LoanDetail
              label="Interest Rate"
              value={`${activeLoan.rate || "4.5"}% Fixed`}
              icon={<Info size={16} />}
            />
            <div className="flex items-center justify-end">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100">
                Execute Settlement
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
