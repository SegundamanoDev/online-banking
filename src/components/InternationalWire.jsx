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
  ShieldAlert,
} from "lucide-react";
import { useTransferMoneyMutation } from "../../src/services/api";

// --- SUB-COMPONENT: RESTRICTED FEATURE WRAPPER ---
const RestrictedWrapper = ({ children, isRestricted, message }) => {
  if (!isRestricted) return children;

  return (
    <div className="relative group">
      {/* The Blurred/Desaturated Content */}
      <div className="opacity-30 grayscale pointer-events-none select-none blur-[2px]">
        {children}
      </div>

      {/* The Lock Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/5 backdrop-blur-[1px] rounded-[3rem] transition-all">
        <div className="bg-slate-900 text-white p-8 rounded-[2.5rem] shadow-2xl flex flex-col items-center text-center max-w-sm animate-in fade-in zoom-in duration-500 border border-white/10">
          <div className="w-16 h-16 bg-blue-500/10 text-blue-500 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-blue-500/20">
            <Lock size={32} />
          </div>
          <h4 className="font-black uppercase italic text-sm tracking-widest text-white">
            Wire Dispatch Restricted
          </h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase mt-3 px-6 leading-relaxed tracking-wider">
            {message ||
              "International liquidity dispatch is temporarily disabled for your security."}
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:compliance@unitedcapital.com")
            }
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg"
          >
            Resolve via Compliance
          </button>
        </div>
      </div>
    </div>
  );
};

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
  });

  const currencySign = account?.currency === "GBP" ? "£" : "$";
  const WIRE_FEE = 25.0;

  // --- SECURITY LOGIC ---
  const isHardLocked =
    account?.isActive === false || account?.status === "suspended";
  const isRestricted =
    account?.status === "frozen" ||
    account?.status === "restricted" ||
    account?.status === "suspended";

  // --- FULL SCREEN LOCKOUT GUARD ---
  if (isHardLocked) {
    return (
      <div className="max-w-md mx-auto mt-20 p-10 bg-white rounded-[3rem] border-2 border-red-50 text-center shadow-2xl">
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <ShieldAlert size={40} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 uppercase italic text-red-600">
          Vault Lockdown
        </h2>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 leading-relaxed">
          International liquidity dispatch is suspended for this account. <br />
          Identity verification required.
        </p>
        <button
          onClick={() => navigate("/support")}
          className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase"
        >
          Contact Compliance
        </button>
      </div>
    );
  }

  // --- HANDLERS ---
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleFinalAuthorize = async () => {
    if (!pin) return toast.error("Authorization PIN Required");

    const loadingToast = toast.loading("Broadcasting Wire to SWIFT Network...");
    try {
      await transferMoney({
        ...formData,
        category: "wire",
        amount: Number(formData.amount),
        recipientAccountNumber: formData.iban,
        recipientName: formData.beneficiaryName,
        pin: pin,
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
    <div className="max-w-3xl mx-auto mt-4 lg:mt-6 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      <Toaster position="top-center" />

      {/* HEADER */}
      <div className="text-center mb-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full mb-4">
          <Globe size={12} className="animate-spin-slow" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">
            Cross-Border Capital Dispatch
          </span>
        </div>
        <h1 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">
          International Wire
        </h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
          Global SWIFT Liquidity Settlement
        </p>
      </div>

      {/* PROGRESS */}
      <div className="flex items-center justify-center gap-2 mb-8">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1 rounded-full transition-all duration-500 ${step >= i ? "w-12 bg-blue-500" : "w-6 bg-slate-200"}`}
          />
        ))}
      </div>

      <RestrictedWrapper
        isRestricted={isRestricted}
        message={
          account?.status === "frozen"
            ? "SWIFT access is restricted due to security flags. Please verify recent activity."
            : "Verification required for cross-border capital movement."
        }
      >
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_rgba(0,0,0,0.05)] p-8 lg:p-12">
          {/* STEP 1: BENEFICIARY */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4">
                1. Beneficiary Identification
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                    Legal Entity / Full Name
                  </label>
                  <input
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none"
                    value={formData.beneficiaryName}
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
                    Physical Domicile
                  </label>
                  <input
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none"
                    placeholder="City, Country"
                    value={formData.beneficiaryAddress}
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
                disabled={!formData.beneficiaryName}
                onClick={handleNext}
                className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-3"
              >
                Banking Logistics <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* STEP 2: BANKING LOGISTICS */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4">
                2. Destination Routing
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                    SWIFT / BIC Code
                  </label>
                  <input
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none uppercase"
                    placeholder="UCBKLNDNXXX"
                    value={formData.swiftBic}
                    onChange={(e) =>
                      setFormData({ ...formData, swiftBic: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                    IBAN / Account ID
                  </label>
                  <input
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-500/20 rounded-2xl px-6 py-4 text-sm font-bold outline-none"
                    value={formData.iban}
                    onChange={(e) =>
                      setFormData({ ...formData, iban: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100 flex gap-3 items-start">
                <AlertTriangle className="text-amber-500 shrink-0" size={18} />
                <p className="text-[9px] font-bold text-amber-700 leading-relaxed uppercase">
                  Ensure routing data is verified. Incorrect SWIFT/IBAN
                  sequences trigger non-refundable institutional reclaim fees.
                </p>
              </div>
              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-slate-100 text-slate-500 py-6 rounded-2xl font-black text-[10px] uppercase"
                >
                  Back
                </button>
                <button
                  disabled={!formData.swiftBic || !formData.iban}
                  onClick={handleNext}
                  className="flex-[2] bg-slate-900 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest"
                >
                  Quantum Allocation
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: QUANTUM */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-6">
              <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50 pb-4">
                3. Capital Quantum & Purpose
              </h3>
              <div className="relative">
                <span className="absolute left-6 top-6 text-3xl font-black text-slate-300 italic">
                  {currencySign}
                </span>
                <input
                  type="number"
                  className="w-full bg-slate-50 border-none rounded-[2rem] px-14 py-8 text-5xl font-black italic outline-none"
                  placeholder="0.00"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-500 uppercase ml-2">
                  Compliance Category
                </label>
                <select
                  className="w-full bg-slate-50 rounded-2xl px-6 py-4 text-sm font-bold outline-none appearance-none"
                  value={formData.purpose}
                  onChange={(e) =>
                    setFormData({ ...formData, purpose: e.target.value })
                  }
                >
                  <option>Portfolio Rebalancing</option>
                  <option>Trade Settlement</option>
                  <option>Property Acquisition</option>
                  <option>Family Remittance</option>
                </select>
              </div>

              <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white space-y-4">
                <div className="flex justify-between items-center opacity-60">
                  <span className="text-[10px] font-black uppercase">
                    Standard Wire Fee
                  </span>
                  <span className="text-xs font-bold">
                    ${WIRE_FEE.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-4">
                  <span className="text-[10px] font-black uppercase text-blue-400">
                    Total Settlement
                  </span>
                  <span className="text-xl font-black italic">
                    {currencySign}
                    {(Number(formData.amount) + WIRE_FEE).toLocaleString()}
                  </span>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-slate-100 text-slate-500 py-6 rounded-2xl font-black text-[10px] uppercase"
                >
                  Back
                </button>
                <button
                  disabled={
                    !formData.amount ||
                    Number(formData.amount) + WIRE_FEE > account?.balance
                  }
                  onClick={() => setShowPinModal(true)}
                  className="flex-[2] bg-blue-600 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-blue-100"
                >
                  Initialize Dispatch
                </button>
              </div>
            </div>
          )}
        </div>
      </RestrictedWrapper>

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
              <h3 className="text-xl font-black italic uppercase italic">
                Vault Authorization
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                Global Liquidity Confirmation
              </p>
            </div>
            <input
              type="password"
              maxLength="6"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-6 text-center text-4xl font-black tracking-[0.5em] outline-none"
              placeholder="••••••"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
            <button
              onClick={handleFinalAuthorize}
              disabled={pin.length < 4 || isProcessing}
              className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] mt-8 flex items-center justify-center gap-3"
            >
              {isProcessing ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Authorize Wire Dispatch"
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
    <div className="w-24 h-24 bg-blue-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-blue-100 rotate-12">
      <CheckCircle2 size={48} />
    </div>
    <h2 className="text-4xl font-black text-slate-900 uppercase italic">
      Wire Broadcaster
    </h2>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-4 leading-relaxed">
      Capital quantum of{" "}
      <span className="text-slate-900">
        {amount} {currency}
      </span>{" "}
      has been dispatched to the SWIFT clearing gateway.
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
