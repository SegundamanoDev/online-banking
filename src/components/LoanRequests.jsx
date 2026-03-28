import React from "react";
import {
  useGetLoanRequestsQuery,
  useApproveLoanMutation,
  useRejectLoanMutation,
} from "../../src/services/api";
import {
  ShieldCheck,
  XCircle,
  Clock,
  Landmark,
  AlertCircle,
} from "lucide-react";
import { toast } from "react-hot-toast";

const LoanRequests = () => {
  const { data: requests, isLoading } = useGetLoanRequestsQuery();
  const [approve] = useApproveLoanMutation();
  const [reject] = useRejectLoanMutation();

  const handleAction = async (id, action, amount) => {
    try {
      if (action === "approve") {
        await approve(id).unwrap();
        toast.success(
          `Capital Disbursement of $${amount.toLocaleString()} Authorized`,
        );
      } else {
        await reject(id).unwrap();
        toast.error("Credit Facility Denied");
      }
    } catch (err) {
      toast.error("Underwriting Error: System failure");
    }
  };

  if (isLoading)
    return (
      <div className="p-10 font-mono text-[10px] animate-pulse">
        SCANNING_CREDIT_APPLICATIONS...
      </div>
    );

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header>
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-1">
          Risk Assessment
        </h2>
        <h1 className="text-3xl font-black text-slate-900 italic">
          Loan Underwriting Queue
        </h1>
      </header>

      <div className="grid gap-4">
        {requests?.length === 0 && (
          <div className="p-20 border-2 border-dashed border-slate-200 rounded-[3rem] text-center">
            <ShieldCheck className="mx-auto text-slate-200 mb-4" size={48} />
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              No Active Credit Applications
            </p>
          </div>
        )}

        {requests?.map((req) => (
          <div
            key={req._id}
            className="bg-white border border-slate-100 rounded-[2.5rem] p-8 flex items-center justify-between shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex gap-8 items-center">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400">
                <Landmark size={28} />
              </div>
              <div>
                <h3 className="font-black text-slate-900 uppercase text-sm mb-1">
                  {req.user?.firstName} {req.user?.lastName}
                </h3>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter max-w-xs leading-relaxed">
                  PURPOSE: {req.purpose || "Institutional Growth Capital"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-10">
              <div className="text-right">
                <p className="text-2xl font-black text-slate-900 italic">
                  ${req.amount.toLocaleString()}
                </p>
                <p className="text-[10px] font-black text-emerald-600 uppercase tracking-widest">
                  Requested Principal
                </p>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleAction(req._id, "reject", req.amount)}
                  className="p-4 rounded-2xl bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-all"
                >
                  <XCircle size={20} />
                </button>
                <button
                  onClick={() => handleAction(req._id, "approve", req.amount)}
                  className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black flex items-center gap-2 shadow-lg"
                >
                  <ShieldCheck size={16} /> Authorize Disbursement
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoanRequests;
