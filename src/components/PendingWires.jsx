import React, { useState } from "react";
import {
  useGetPendingWiresQuery,
  useApproveWireMutation,
} from "../../src/services/api";
import {
  Loader2,
  ShieldCheck,
  Globe,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";
import { toast } from "react-hot-toast";

const PendingWires = () => {
  const { data: wires, isLoading } = useGetPendingWiresQuery();
  const [approveWire, { isLoading: isApproving }] = useApproveWireMutation();
  const [selectedWire, setSelectedWire] = useState(null);

  const handleRelease = async () => {
    try {
      await approveWire(selectedWire.transactionId).unwrap();
      toast.success("SWIFT Message Dispatched Successfully");
      setSelectedWire(null);
    } catch (err) {
      toast.error(err.data?.message || "Settlement Failed");
    }
  };

  if (isLoading)
    return (
      <div className="p-10 flex justify-center">
        <Loader2 className="animate-spin text-amber-500" />
      </div>
    );

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-8">
      {/* --- HEADER WITH DYNAMIC STATUS PILL --- */}
      <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-amber-600 mb-1">
            Treasury Department
          </h2>
          <h1 className="text-3xl font-black text-slate-900 italic">
            Settlement Queue
          </h1>
        </div>

        <div
          className={`px-4 py-2 rounded-xl border text-[9px] font-black uppercase tracking-widest flex items-center gap-2 transition-colors duration-500 ${
            wires?.length > 0
              ? "bg-amber-50 border-amber-200 text-amber-700"
              : "bg-emerald-50 border-emerald-200 text-emerald-700"
          }`}
        >
          <span
            className={`w-2 h-2 rounded-full ${
              wires?.length > 0
                ? "bg-amber-500 animate-pulse"
                : "bg-emerald-500"
            }`}
          />
          {wires?.length || 0} Pending Instructions
        </div>
      </header>

      <div className="grid gap-4">
        {/* --- INSTITUTIONAL EMPTY STATE (SYSTEM INTEGRITY) --- */}
        {wires?.length === 0 && (
          <div className="relative group overflow-hidden bg-white border border-slate-100 rounded-[3rem] p-16 text-center shadow-sm">
            {/* Radar Animation Background */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <div className="w-[300px] h-[300px] border border-slate-900 rounded-full animate-ping" />
              <div className="absolute w-[500px] h-[500px] border border-slate-900 rounded-full animate-pulse" />
            </div>

            <div className="relative z-10">
              <div className="mx-auto w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                <ShieldCheck className="text-emerald-500" size={40} />
              </div>

              <h3 className="text-xl font-black text-slate-900 italic mb-2">
                Settlement Integrity Confirmed
              </h3>

              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-8 max-w-xs mx-auto leading-relaxed">
                All outbound SWIFT instructions have been successfully settled.
                Treasury liquidity is currently synchronized.
              </p>

              <div className="inline-flex items-center gap-4 bg-slate-50 px-6 py-3 rounded-2xl border border-slate-100">
                <div className="flex gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-75" />
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse delay-150" />
                </div>
                <span className="text-[9px] font-black text-slate-500 uppercase tracking-widest">
                  Live Treasury Monitoring Active
                </span>
              </div>
            </div>
          </div>
        )}

        {/* --- QUEUE LIST --- */}
        {wires?.map((wire) => (
          <div
            key={wire._id}
            className="bg-white border border-slate-100 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className="h-14 w-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 group-hover:scale-110 transition-transform">
                <Globe size={28} />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h3 className="font-black text-slate-900 uppercase text-sm">
                    {wire.recipientName}
                  </h3>
                  <RiskBadge amount={wire.amount} />
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                  {wire.recipientBankName} • {wire.swiftCode}
                </p>
              </div>
            </div>

            <div className="text-right flex items-center gap-8 mt-4 md:mt-0">
              <div>
                <p className="text-2xl font-black text-slate-900 italic">
                  ${wire.amount.toLocaleString()}
                </p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">
                  Principal Amount
                </p>
              </div>
              <button
                onClick={() => setSelectedWire(wire)}
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all active:scale-95 shadow-lg shadow-amber-500/20"
              >
                Release Wire
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* --- DOUBLE-CHECK MODAL --- */}
      {selectedWire && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="bg-amber-500 p-8 text-white flex justify-between items-center">
              <div>
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-80">
                  Final Verification
                </h3>
                <p className="text-2xl font-black italic">Confirm Release</p>
              </div>
              <ShieldCheck size={40} />
            </div>

            <div className="p-8 space-y-6">
              <div className="space-y-4">
                <DetailRow
                  label="Beneficiary"
                  value={selectedWire.recipientName}
                />
                <DetailRow label="SWIFT/BIC" value={selectedWire.swiftCode} />
                <DetailRow
                  label="Account Number"
                  value={selectedWire.recipientAccountNumber}
                />
                <DetailRow
                  label="Amount"
                  value={`$${selectedWire.amount.toLocaleString()}.00 USD`}
                />
              </div>

              <div className="bg-amber-50 p-4 rounded-2xl flex gap-3 border border-amber-100">
                <AlertTriangle className="text-amber-600 shrink-0" size={20} />
                <p className="text-[10px] leading-relaxed font-bold text-amber-700 uppercase">
                  Warning: Final broadcast to the SWIFT network is irreversible.
                  Ensure AML compliance before release.
                </p>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => setSelectedWire(null)}
                  className="flex-1 py-4 text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 transition-colors"
                >
                  Abort
                </button>
                <button
                  onClick={handleRelease}
                  disabled={isApproving}
                  className="flex-[2] bg-slate-900 hover:bg-black text-white py-4 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-xl"
                >
                  {isApproving ? (
                    <Loader2 className="animate-spin" size={14} />
                  ) : (
                    "Authorize Settlement"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- SUB-COMPONENTS ---
const RiskBadge = ({ amount }) => {
  const risk = amount > 50000 ? "High" : amount > 10000 ? "Medium" : "Low";
  const colors = {
    High: "bg-red-100 text-red-700",
    Medium: "bg-amber-100 text-amber-700",
    Low: "bg-emerald-100 text-emerald-700",
  };
  return (
    <span
      className={`text-[8px] font-black uppercase px-2 py-0.5 rounded ${colors[risk]}`}
    >
      {risk} Risk
    </span>
  );
};

const DetailRow = ({ label, value }) => (
  <div className="flex justify-between items-end border-b border-slate-50 pb-2">
    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
      {label}
    </span>
    <span className="text-xs font-black text-slate-900 uppercase tracking-tighter">
      {value}
    </span>
  </div>
);

export default PendingWires;
