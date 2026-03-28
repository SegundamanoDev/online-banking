import React from "react";
import {
  useGetLoanRequestsQuery,
  useApproveLoanMutation,
  useRejectLoanMutation,
} from "../../src/services/api";
import { CheckCircle, XCircle, User, Clock } from "lucide-react";
import { toast } from "react-hot-toast";

const LoanUnderwriting = () => {
  const { data: loans, isLoading } = useGetLoanRequestsQuery();
  const [approveLoan] = useApproveLoanMutation();
  const [rejectLoan] = useRejectLoanMutation();

  const handleAction = async (id, action) => {
    try {
      if (action === "approve") {
        await approveLoan(id).unwrap();
        toast.success("Capital Disbursed Successfully");
      } else {
        await rejectLoan(id).unwrap();
        toast.error("Application Declined");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Action Failed");
    }
  };

  if (isLoading)
    return (
      <div className="p-10 text-center font-black uppercase text-slate-400">
        Loading Underwriting Queue...
      </div>
    );

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h2 className="text-2xl font-black text-slate-900 uppercase italic">
          Credit Underwriting <span className="text-emerald-500">Queue</span>
        </h2>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">
          Review and Adjudicate Institutional Credit Facilities
        </p>
      </header>

      {loans?.length === 0 ? (
        <div className="bg-white border-2 border-dashed border-slate-200 rounded-3xl p-20 text-center">
          <p className="text-slate-400 font-black uppercase text-sm">
            No pending applications in queue
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {loans?.map((loan) => (
            <div
              key={loan._id}
              className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-slate-400">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 uppercase text-sm">
                    {loan.user?.firstName} {loan.user?.lastName}
                  </h4>
                  <p className="text-[10px] font-bold text-slate-400 uppercase mb-2">
                    {loan.user?.email}
                  </p>
                  <div className="flex gap-4">
                    <span className="bg-emerald-50 text-emerald-600 px-2 py-1 rounded text-[9px] font-black uppercase">
                      Type: {loan.loanType}
                    </span>
                    <span className="bg-slate-50 text-slate-500 px-2 py-1 rounded text-[9px] font-black uppercase">
                      Ref: {loan.loanReference}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <p className="text-2xl font-black text-slate-900 italic">
                  ${loan.amount.toLocaleString()}
                </p>
                <p className="text-[9px] font-bold text-slate-400 uppercase tracking-tighter">
                  Requested Principal
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleAction(loan._id, "reject")}
                  className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
                >
                  <XCircle size={24} />
                </button>
                <button
                  onClick={() => handleAction(loan._id, "approve")}
                  className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl font-black uppercase text-[10px] tracking-widest hover:bg-emerald-600 transition-all shadow-lg shadow-slate-200"
                >
                  <CheckCircle size={16} />
                  Authorize Release
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LoanUnderwriting;
