import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  Globe,
  Landmark,
  ShieldCheck,
  Info,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Lock,
  X,
  MapPin,
  CreditCard,
  HelpCircle,
  AlertTriangle,
} from "lucide-react";
import { useTransferMoneyMutation } from "../../src/services/api";

const InternationalWire = () => {
  const { account } = useOutletContext();
  const navigate = useNavigate();
  const [transferMoney, { isLoading: isProcessing }] =
    useTransferMoneyMutation();

  // --- STATE ---
  const [step, setStep] = useState(1);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pin, setPin] = useState("");

  const [formData, setFormData] = useState({
    beneficiaryName: "",
    beneficiaryAddress: "",
    swiftBic: "",
    iban: "",
    bankName: "",
    bankAddress: "",
    amount: "",
    currency: "USD",
    purpose: "Family Support/Gift",
    intermediarySwift: "",
  });

  const currencySign = account?.currency === "GBP" ? "£" : "$";

  // --- HANDLERS ---
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleFinalAuthorize = async () => {
    const loadingToast = toast.loading("Broadcasting Wire to SWIFT Network...");
    try {
      await transferMoney({
        ...formData,
        pin: pin,
        type: "International Wire",
      }).unwrap();

      toast.success("Wire Transfer Initialized", { id: loadingToast });
      setShowPinModal(false);
      setShowSuccess(true);
    } catch (err) {
      toast.error(err?.data?.message || "Wire Authorization Failed", {
        id: loadingToast,
      });
      setPin("");
    }
  };

  if (showSuccess)
    return (
      <WireSuccessScreen
        amount={formData.amount}
        currency={formData.currency}
        navigate={navigate}
      />
    );

  return (
    <div className="max-w-3xl mx-auto mt-4 lg:mt-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
      <Toaster position="top-center" />

      {/* GLOBAL HEADER */}
      <div className="text-center mb-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <Globe size={12} className="animate-pulse" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">
            Cross-Border Capital Dispatch
          </span>
        </div>
        <h1 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">
          International Wire
        </h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
          Global SWIFT/BIC Liquidity Settlement
        </p>
      </div>

      {/* STEP INDICATOR */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${step >= i ? "w-12 bg-blue-500" : "w-6 bg-slate-200"}`}
          />
        ))}
      </div>

      <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.05)] p-8 lg:p-12 relative">
        {/* STEP 1: BENEFICIARY DETAILS */}
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4">
              1. Beneficiary Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                  Full Legal Name
                </label>
                <input
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none"
                  placeholder="Recipient Name"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      beneficiaryName: e.target.value,
                    })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                  Physical Address
                </label>
                <input
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none"
                  placeholder="Street, City, Country"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      beneficiaryAddress: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <button
              onClick={handleNext}
              className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"
            >
              Next: Banking Logistics <ArrowRight size={16} />
            </button>
          </div>
        )}

        {/* STEP 2: BANKING LOGISTICS */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4">
              2. Destination Bank Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                  SWIFT / BIC Code
                </label>
                <input
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none uppercase"
                  placeholder="AAAA BB CC XXX"
                  onChange={(e) =>
                    setFormData({ ...formData, swiftBic: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                  IBAN / Account Number
                </label>
                <input
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none"
                  placeholder="GB00 0000 0000..."
                  onChange={(e) =>
                    setFormData({ ...formData, iban: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
              <AlertTriangle className="text-amber-500 shrink-0" size={18} />
              <p className="text-[10px] font-bold text-amber-700 leading-relaxed uppercase">
                Ensure SWIFT and IBAN are accurate. Incorrect data may result in
                non-refundable intermediary bank fees.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                onClick={handleBack}
                className="flex-1 bg-slate-100 text-slate-500 py-6 rounded-2xl font-black text-[10px] uppercase"
              >
                Back
              </button>
              <button
                onClick={handleNext}
                className="flex-[2] bg-slate-900 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest"
              >
                Next: Quantum
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: QUANTUM & REVIEW */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-6">
            <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4">
              3. Amount & Purpose
            </h3>
            <div className="space-y-6">
              <div className="relative">
                <span className="absolute left-6 top-6 text-3xl font-black text-slate-300 italic">
                  {currencySign}
                </span>
                <input
                  type="number"
                  className="w-full bg-slate-50 border-none rounded-[2rem] px-14 py-8 text-5xl font-black italic outline-none"
                  placeholder="0.00"
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                  Purpose of Remittance (Regulatory Required)
                </label>
                <select
                  className="w-full bg-slate-50 rounded-2xl px-6 py-4 text-sm font-bold outline-none border-none"
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                >
                  <option>Family Support / Gift</option>
                  <option>Property Investment</option>
                  <option>Trade Settlement</option>
                  <option>Institutional Rebalancing</option>
                </select>
              </div>
            </div>

            <div className="bg-slate-900 rounded-[2rem] p-8 text-white space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase">
                  Est. Arrival
                </span>
                <span className="text-xs font-bold">1 - 3 Business Days</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[10px] font-black text-slate-400 uppercase">
                  Wire Fee
                </span>
                <span className="text-xs font-bold">
                  $25.00 (Flat Institutional Rate)
                </span>
              </div>
            </div>

            <button
              onClick={() => setShowPinModal(true)}
              className="w-full bg-blue-600 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-blue-100"
            >
              Initialize Global Dispatch
            </button>
          </div>
        )}
      </div>

      {/* PIN MODAL */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 relative shadow-2xl">
            <button
              onClick={() => setShowPinModal(false)}
              className="absolute right-8 top-8 text-slate-300"
            >
              <X size={24} />
            </button>
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-black italic uppercase">
                Vault Authorization
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Secure Global Wire Approval
              </p>
            </div>
            <input
              type="password"
              maxLength="6"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-6 text-center text-4xl font-black tracking-[0.5em] outline-none"
              placeholder="••••••"
              onChange={(e) => setPin(e.target.value)}
            />
            <button
              onClick={handleFinalAuthorize}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] mt-8 flex items-center justify-center gap-3"
            >
              {isProcessing ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Authorize Dispatch"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const WireSuccessScreen = ({ amount, currency, navigate }) => (
  <div className="max-w-md mx-auto mt-20 text-center animate-in zoom-in-95 duration-700">
    <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-100">
      <CheckCircle2 size={48} />
    </div>
    <h2 className="text-4xl font-black text-slate-900 uppercase italic">
      Wire Dispatched
    </h2>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-4 leading-relaxed">
      Your transfer of{" "}
      <span className="text-slate-900">
        {amount} {currency}
      </span>{" "}
      has entered the international clearing system.
    </p>
    <button
      onClick={() => navigate("/dashboard")}
      className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] mt-10"
    >
      Back to Portfolio
    </button>
  </div>
);

export default InternationalWire;
