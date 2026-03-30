import React, { useState, useEffect } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {
  Send,
  Search,
  ShieldCheck,
  Info,
  ArrowRight,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Lock,
  X,
  ArrowLeft,
  Landmark,
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
          <div className="w-16 h-16 bg-red-500/10 text-red-500 rounded-2xl flex items-center justify-center mb-4 ring-1 ring-red-500/20">
            <Lock size={32} />
          </div>
          <h4 className="font-black uppercase italic text-sm tracking-widest text-white">
            Capital Movement Restricted
          </h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase mt-3 px-6 leading-relaxed tracking-wider">
            {message ||
              "Outgoing transactions are temporarily disabled for your security."}
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:support@unitedcapital.com")
            }
            className="mt-6 bg-white text-slate-900 px-6 py-3 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-emerald-500 hover:text-white transition-all shadow-lg"
          >
            Resolve via Compliance
          </button>
        </div>
      </div>
    </div>
  );
};

const InternalTransfer = () => {
  const { user, account } = useOutletContext();
  const navigate = useNavigate();
  const [transferMoney, { isLoading: isProcessing }] =
    useTransferMoneyMutation();

  // --- STATE ---
  const [step, setStep] = useState(1);
  const [showPinModal, setShowPinModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [pin, setPin] = useState("");
  const [formData, setFormData] = useState({
    recipientAccount: "",
    amount: "",
    description: "Portfolio Rebalancing",
  });

  const currencySign = account?.currency === "GBP" ? "£" : "$";

  // --- SECURITY LOCKOUT CHECK (FULL SCREEN BLOCK) ---
  // Blocks the whole view if status is suspended or isActive is explicitly false
  const isHardLocked =
    account?.isActive === false || account?.status === "suspended";

  // Blocks just the form (Read-Only Mode) if status is frozen or restricted
  const isRestricted =
    account?.status === "frozen" || account?.status === "restricted";

  if (isHardLocked) {
    return (
      <div className="max-w-md mx-auto mt-20 p-10 bg-white rounded-[3rem] border-2 border-red-100 text-center shadow-2xl">
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <ShieldAlert size={40} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 uppercase italic">
          Vault Access Denied
        </h2>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4 leading-relaxed">
          Your account is currently under security lock. <br />
          Please contact Treasury to restore ledger access.
        </p>
        <button
          onClick={() => navigate("/support")}
          className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest"
        >
          Contact Support
        </button>
      </div>
    );
  }

  // --- HANDLERS ---
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleFinalAuthorize = async () => {
    if (!pin) return toast.error("Authorization PIN required");

    const loadingToast = toast.loading("Executing Ledger Settlement...");
    try {
      await transferMoney({
        category: "local",
        recipientAccountNumber: formData.recipientAccount,
        amount: Number(formData.amount),
        description: formData.description,
        pin: pin,
        recipientName: "Internal UC Client",
      }).unwrap();

      toast.success("Settlement Confirmed", { id: loadingToast });
      setShowPinModal(false);
      setShowSuccess(true);
    } catch (err) {
      toast.error(err?.data?.message || "Settlement Declined", {
        id: loadingToast,
      });
      setPin("");
    }
  };

  if (showSuccess)
    return (
      <SuccessScreen
        amount={formData.amount}
        sign={currencySign}
        navigate={navigate}
      />
    );

  return (
    <div className="max-w-2xl mx-auto mt-4 lg:mt-10 animate-in fade-in slide-in-from-bottom-8 duration-700 pb-20">
      <Toaster position="top-center" />

      {/* HEADER SECTION */}
      <div className="text-center mb-10 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 text-white rounded-full mb-6">
          <Landmark size={12} className="text-emerald-400" />
          <span className="text-[9px] font-black uppercase tracking-[0.2em]">
            United Capital Core Ledger
          </span>
        </div>
        <h1 className="text-4xl font-black tracking-tighter text-slate-900 uppercase italic">
          Capital Movement
        </h1>
        <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-2">
          Internal Real-time Liquidity Settlement
        </p>
      </div>

      {/* PROGRESS TRACKER */}
      <div className="flex items-center justify-center gap-3 mb-12">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${step >= i ? "w-16 bg-emerald-500" : "w-8 bg-slate-200"}`}
          />
        ))}
      </div>

      <RestrictedWrapper
        isRestricted={isRestricted}
        message={
          account?.status === "frozen"
            ? "Your account is in Read-Only mode due to multiple failed PIN attempts."
            : "Verification required to unlock capital outflows."
        }
      >
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_30px_60px_rgba(15,23,42,0.06)] p-8 lg:p-12 relative">
          {/* SOURCE ACCOUNT SUMMARY */}
          <div className="mb-10 p-5 bg-slate-50 rounded-2xl border border-slate-100 flex justify-between items-end">
            <div className="space-y-1">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Originating Ledger
              </p>
              <p className="text-sm font-black text-slate-900">
                {account?.accountNumber}
              </p>
            </div>
            <div className="text-right space-y-1">
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                Available Liquidity
              </p>
              <p className="text-lg font-black text-emerald-600">
                {currencySign}
                {account?.balance.toLocaleString()}
              </p>
            </div>
          </div>

          {/* STEP 1: RECIPIENT */}
          {step === 1 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">
                  Recipient Ledger ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter 10-digit Ledger ID"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-[1.5rem] px-6 py-5 text-sm font-bold transition-all outline-none"
                    value={formData.recipientAccount}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        recipientAccount: e.target.value,
                      })
                    }
                  />
                  <Search
                    className="absolute right-6 top-5 text-slate-300"
                    size={20}
                  />
                </div>
              </div>
              <button
                disabled={formData.recipientAccount.length < 5}
                onClick={handleNext}
                className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.3em] hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 flex items-center justify-center gap-3"
              >
                Verify Recipient <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* STEP 2: AMOUNT */}
          {step === 2 && (
            <div className="space-y-8 animate-in fade-in slide-in-from-right-6">
              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">
                  Settlement Quantum
                </label>
                <div className="relative">
                  <span className="absolute left-6 top-5 text-2xl font-black text-slate-300 italic">
                    {currencySign}
                  </span>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-[1.5rem] px-12 py-6 text-4xl font-black italic transition-all outline-none"
                    value={formData.amount}
                    onChange={(e) =>
                      setFormData({ ...formData, amount: e.target.value })
                    }
                  />
                </div>
                {Number(formData.amount) > account?.balance && (
                  <div className="flex items-center gap-2 text-red-500 px-2">
                    <AlertCircle size={14} />
                    <p className="text-[10px] font-black uppercase tracking-tighter">
                      Liquidity Threshold Exceeded
                    </p>
                  </div>
                )}
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-[0.2em] ml-2">
                  Transaction Memo
                </label>
                <input
                  type="text"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-[1.5rem] px-6 py-5 text-sm font-bold outline-none"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                />
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-slate-100 text-slate-500 py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest"
                >
                  Back
                </button>
                <button
                  disabled={
                    !formData.amount ||
                    Number(formData.amount) > account?.balance
                  }
                  onClick={handleNext}
                  className="flex-[2] bg-slate-900 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-600 transition-all"
                >
                  Review Settlement
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: REVIEW */}
          {step === 3 && (
            <div className="space-y-8 animate-in fade-in zoom-in-95">
              <div className="bg-emerald-50/30 p-8 rounded-[2rem] border border-emerald-100/50 space-y-5">
                <div className="flex justify-between items-center border-b border-emerald-100/50 pb-5">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    Capital Deployment
                  </span>
                  <span className="text-2xl font-black text-slate-900 italic">
                    {currencySign}
                    {Number(formData.amount).toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    To Recipient
                  </span>
                  <div className="text-right">
                    <p className="text-sm font-black text-slate-900">
                      {formData.recipientAccount}
                    </p>
                    <p className="text-[9px] font-bold text-emerald-600 uppercase tracking-tighter">
                      Verified UC Recipient
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleBack}
                  className="flex-1 bg-slate-100 text-slate-500 py-6 rounded-2xl font-black text-[10px] uppercase tracking-widest"
                >
                  Edit
                </button>
                <button
                  onClick={() => setShowPinModal(true)}
                  className="flex-[2] bg-emerald-600 text-white py-6 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-emerald-500 transition-all shadow-xl shadow-emerald-100 flex items-center justify-center gap-2"
                >
                  Request Authorization <ShieldCheck size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      </RestrictedWrapper>

      {/* PIN MODAL */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/40 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative">
            <button
              onClick={() => setShowPinModal(false)}
              className="absolute right-8 top-8 text-slate-300 hover:text-slate-900"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-slate-900 text-emerald-400 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-black italic text-slate-900 uppercase">
                Authorization Gate
              </h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-relaxed">
                Enter your{" "}
                <span className="text-slate-900 font-black italic">
                  Security Vault PIN
                </span>{" "}
                to finalize the transfer of
                <span className="text-slate-900 ml-1">
                  {currencySign}
                  {formData.amount}
                </span>
              </p>
            </div>

            <div className="space-y-6">
              <input
                type="password"
                maxLength="6"
                placeholder="••••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-6 text-center text-4xl font-black tracking-[0.5em] focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 outline-none transition-all"
              />
              <button
                onClick={handleFinalAuthorize}
                disabled={pin.length < 4 || isProcessing}
                className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 disabled:opacity-50"
              >
                {isProcessing ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  "Authorize Settlement"
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- SUCCESS SCREEN ---
const SuccessScreen = ({ amount, sign, navigate }) => (
  <div className="max-w-md mx-auto mt-20 text-center animate-in zoom-in-95 duration-700">
    <div className="w-24 h-24 bg-emerald-500 text-white rounded-[2rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-emerald-200 rotate-12">
      <CheckCircle2 size={48} />
    </div>
    <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">
      Capital Settled
    </h2>
    <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-4 px-10 leading-relaxed">
      Transfer of{" "}
      <span className="text-slate-900">
        {sign}
        {Number(amount).toLocaleString()}
      </span>{" "}
      has been written to the institutional ledger.
    </p>
    <div className="mt-12 space-y-4">
      <button
        onClick={() => navigate("/dashboard")}
        className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.3em]"
      >
        Return to Portfolio
      </button>
      <button
        onClick={() => window.location.reload()}
        className="text-[10px] font-black uppercase text-slate-400 tracking-[0.2em] hover:text-emerald-600"
      >
        New Transfer
      </button>
    </div>
  </div>
);

export default InternalTransfer;
