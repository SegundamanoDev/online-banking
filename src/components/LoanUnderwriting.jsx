import React from "react";
import {
  useGetLoanRequestsQuery,
  useApproveLoanMutation,
  useRejectLoanMutation,
} from "../../src/services/api";
import {
  CheckCircle,
  XCircle,
  User,
  Clock,
  Fingerprint,
  ShieldAlert,
  Loader2,
  TrendingUp,
  FileText,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const LoanUnderwriting = () => {
  const { data: loans, isLoading } = useGetLoanRequestsQuery();
  const [approveLoan, { isLoading: isApproving }] = useApproveLoanMutation();
  const [rejectLoan, { isLoading: isRejecting }] = useRejectLoanMutation();

  const handleAction = async (id, action, amount) => {
    const actionText = action === "approve" ? "Authorization" : "Rejection";
    const loadingToast = toast.loading(`Processing Ledger ${actionText}...`);

    try {
      if (action === "approve") {
        await approveLoan(id).unwrap();
        toast.success(`Capital of $${amount.toLocaleString()} Released`, {
          id: loadingToast,
        });
      } else {
        await rejectLoan(id).unwrap();
        toast.error("Credit Application Terminated", { id: loadingToast });
      }
    } catch (err) {
      toast.error(err?.data?.message || "Underwriting Sync Error", {
        id: loadingToast,
      });
    }
  };

  if (isLoading)
    return (
      <div className="flex flex-col items-center justify-center py-32 space-y-4">
        <Loader2 className="animate-spin text-slate-900" size={32} />
        <p className="font-black text-[10px] uppercase tracking-[0.4em] text-slate-400">
          Syncing_Underwriting_Ledger...
        </p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8 animate-in fade-in duration-700">
      <Toaster position="top-right" />

      {/* INSTITUTIONAL HEADER */}
      <header className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-slate-100 pb-8 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full mb-4">
            <Fingerprint size={12} className="text-emerald-400" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em]">
              Compliance Terminal
            </span>
          </div>
          <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter">
            Credit Underwriting <span className="text-emerald-500">Queue</span>
          </h2>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
            Institutional Credit Facility Adjudication
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-100 px-6 py-3 rounded-2xl">
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1 text-right">
            Pending Volume
          </p>
          <p className="text-xl font-black text-slate-900 italic text-right">
            {loans?.length || 0}{" "}
            <span className="text-[10px] not-italic text-slate-300">UNITS</span>
          </p>
        </div>
      </header>

      {loans?.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-slate-100 rounded-[3rem] p-32 text-center">
          <ShieldAlert className="mx-auto text-slate-100 mb-6" size={64} />
          <p className="text-slate-300 font-black uppercase text-xs tracking-[0.3em]">
            No Pending Adjudications Found
          </p>
        </div>
      ) : (
        <div className="grid gap-6">
          {loans?.map((loan) => (
            <div
              key={loan._id}
              className="group bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm hover:shadow-xl hover:border-emerald-100 transition-all duration-500 flex flex-wrap lg:flex-nowrap items-center justify-between gap-8"
            >
              {/* APPLICANT IDENTITY */}
              <div className="flex items-center gap-6 min-w-[280px]">
                <div className="w-16 h-16 bg-slate-50 text-slate-900 rounded-3xl flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-colors duration-500 shadow-inner">
                  <User size={28} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-lg tracking-tighter italic">
                    {loan.user?.firstName} {loan.user?.lastName}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter mb-3">
                    ID: {loan._id?.slice(-8).toUpperCase()}
                  </p>
                  <div className="flex gap-2">
                    <span className="bg-slate-900 text-white px-2 py-1 rounded text-[8px] font-black uppercase">
                      Tier: {loan.loanType || "Standard"}
                    </span>
                    <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded text-[8px] font-black uppercase flex items-center gap-1">
                      <Clock size={10} /> {loan.loanDuration} Months
                    </span>
                  </div>
                </div>
              </div>

              {/* QUANTUM DATA */}
              <div className="flex-1 grid grid-cols-2 gap-8 px-8 border-l border-r border-slate-50">
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-black text-slate-900 italic tracking-tighter">
                    ${loan.amount?.toLocaleString()}
                  </p>
                  <p className="text-[9px] font-black text-emerald-600 uppercase tracking-widest">
                    Requested Principal
                  </p>
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-3xl font-black text-slate-400 italic tracking-tighter">
                    {loan.interestRate}%
                  </p>
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                    Annual Percentage Rate
                  </p>
                </div>
              </div>

              {/* ACTIONS */}
              <div className="flex items-center gap-4">
                <button
                  disabled={isApproving || isRejecting}
                  onClick={() => handleAction(loan._id, "reject", loan.amount)}
                  className="p-5 text-slate-300 hover:text-rose-600 hover:bg-rose-50 rounded-3xl transition-all border border-transparent hover:border-rose-100 disabled:opacity-50"
                  title="Reject Application"
                >
                  <XCircle size={28} />
                </button>

                <button
                  disabled={isApproving || isRejecting}
                  onClick={() => handleAction(loan._id, "approve", loan.amount)}
                  className="flex items-center justify-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-[2rem] font-black uppercase text-[11px] tracking-[0.2em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-100 disabled:opacity-50"
                >
                  {isApproving ? (
                    <Loader2 className="animate-spin" size={18} />
                  ) : (
                    <>
                      <CheckCircle size={18} />
                      Authorize Release
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER AUDIT LOG */}
      <footer className="mt-12 flex items-center justify-between bg-slate-50 p-6 rounded-[2rem] border border-slate-100">
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-slate-200 border-2 border-slate-50"
              />
            ))}
          </div>
          <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
            Active Underwriter Sessions: 12
          </p>
        </div>
        <div className="flex items-center gap-2 text-emerald-500">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <p className="text-[9px] font-black uppercase tracking-widest">
            Ledger Synchronized
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LoanUnderwriting;
