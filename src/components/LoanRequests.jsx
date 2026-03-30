import React, { useState } from "react";
import {
  useGetLoanRequestsQuery,
  useApproveLoanMutation,
  useRejectLoanMutation,
} from "../../src/services/api";
import {
  ShieldCheck,
  XCircle,
  Landmark,
  AlertCircle,
  TrendingUp,
  Fingerprint,
  Loader2,
  ChevronRight,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const LoanRequests = () => {
  const { data: requests, isLoading, isError } = useGetLoanRequestsQuery();
  const [approve, { isLoading: isApproving }] = useApproveLoanMutation();
  const [reject, { isLoading: isRejecting }] = useRejectLoanMutation();

  // --- HANDLERS ---
  const handleAction = async (id, action, amount) => {
    const confirmMsg =
      action === "approve"
        ? `Confirm $${amount.toLocaleString()} capital disbursement?`
        : "Reject this credit facility application?";

    if (!window.confirm(confirmMsg)) return;

    const loadingToast = toast.loading(
      action === "approve"
        ? "Authorizing Ledger Credits..."
        : "Processing Rejection...",
    );

    try {
      if (action === "approve") {
        await approve(id).unwrap();
        toast.success(
          `Disbursement of $${amount.toLocaleString()} Authorized`,
          { id: loadingToast },
        );
      } else {
        await reject(id).unwrap();
        toast.error("Credit Facility Denied", { id: loadingToast });
      }
    } catch (err) {
      toast.error(
        err?.data?.message || "Underwriting Error: Ledger sync failed",
        { id: loadingToast },
      );
    }
  };

  // --- RISK INDICATOR HELPER ---
  const getRiskTier = (amount) => {
    if (amount > 50000)
      return { label: "High Exposure", color: "text-rose-600 bg-rose-50" };
    if (amount > 10000)
      return { label: "Moderate Risk", color: "text-amber-600 bg-amber-50" };
    return {
      label: "Standard Credit",
      color: "text-emerald-600 bg-emerald-50",
    };
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="animate-spin text-slate-900" size={40} />
        <p className="font-black text-[10px] uppercase tracking-[0.4em] text-slate-400">
          Syncing_Credit_Queue...
        </p>
      </div>
    );

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-10 animate-in fade-in duration-700">
      <Toaster position="top-right" />

      <header className="flex justify-between items-end border-b border-slate-100 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full mb-4">
            <Fingerprint size={12} className="text-emerald-400" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">
              Underwriting Terminal
            </span>
          </div>
          <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter uppercase">
            Risk Assessment
          </h1>
          <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2 italic">
            Active Credit Disbursement Queue
          </p>
        </div>

        <div className="text-right hidden md:block">
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Active Applications
          </p>
          <p className="text-3xl font-black text-slate-900 italic">
            {requests?.length || 0}
          </p>
        </div>
      </header>

      <div className="grid gap-6">
        {requests?.length === 0 ? (
          <div className="p-32 border-2 border-dashed border-slate-100 rounded-[4rem] text-center bg-slate-50/50">
            <ShieldCheck className="mx-auto text-slate-200 mb-6" size={64} />
            <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.3em]">
              Ledger Clear: No Pending Actions
            </h3>
          </div>
        ) : (
          requests?.map((req) => {
            const risk = getRiskTier(req.amount);
            return (
              <div
                key={req._id}
                className="group bg-white border border-slate-100 rounded-[3rem] p-8 flex flex-wrap md:flex-nowrap items-center justify-between shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-xl hover:border-emerald-100 transition-all duration-500"
              >
                <div className="flex gap-8 items-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-900 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                    <TrendingUp size={32} />
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-black text-slate-900 uppercase text-lg tracking-tighter italic">
                        {req.user?.firstName} {req.user?.lastName}
                      </h3>
                      <span
                        className={`px-3 py-1 rounded-full text-[8px] font-black uppercase tracking-widest ${risk.color}`}
                      >
                        {risk.label}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400">
                      <AlertCircle size={12} />
                      <p className="text-[10px] font-bold uppercase tracking-widest">
                        {req.purpose || "Growth Capital"}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-12 mt-6 md:mt-0">
                  <div className="text-right">
                    <p className="text-3xl font-black text-slate-900 italic tracking-tighter">
                      ${req.amount.toLocaleString()}
                    </p>
                    <p className="text-[9px] font-black text-emerald-600 uppercase tracking-[0.2em]">
                      Principal Requested
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <button
                      disabled={isApproving || isRejecting}
                      onClick={() =>
                        handleAction(req._id, "reject", req.amount)
                      }
                      className="p-5 rounded-3xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-all border border-transparent hover:border-rose-100 disabled:opacity-50"
                    >
                      <XCircle size={24} />
                    </button>

                    <button
                      disabled={isApproving || isRejecting}
                      onClick={() =>
                        handleAction(req._id, "approve", req.amount)
                      }
                      className="bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 flex items-center gap-3 disabled:opacity-50"
                    >
                      {isApproving ? (
                        <Loader2 className="animate-spin" size={16} />
                      ) : (
                        <ShieldCheck size={18} />
                      )}
                      Authorize Disbursement
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>

      <footer className="pt-10">
        <div className="bg-slate-50 p-6 rounded-[2rem] border border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
              Global Underwriting System Active
            </p>
          </div>
          <p className="text-[9px] font-bold text-slate-300 uppercase tracking-tighter">
            United Capital Treasury Division © 2024
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoanRequests;
