import React, { useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import {
  useSetTransactionPinMutation,
  useRequestPinResetMutation,
  useResetPinWithTokenMutation,
} from "../../src/services/api";
import {
  ShieldCheck,
  Lock,
  CheckCircle,
  AlertTriangle,
  Loader2,
  MailQuestion,
  KeyRound,
  ShieldAlert,
} from "lucide-react";
import { toast, Toaster } from "react-hot-toast";

const SecurityCenter = () => {
  const { account } = useOutletContext();
  const navigate = useNavigate();
  const [isResetMode, setIsResetMode] = useState(false);

  const [setPin, { isLoading: isSetting }] = useSetTransactionPinMutation();
  const [requestReset, { isLoading: isRequesting }] =
    useRequestPinResetMutation();
  const [confirmReset, { isLoading: isResetting }] =
    useResetPinWithTokenMutation();

  const [formData, setFormData] = useState({
    pin: "",
    confirmPin: "",
    otp: "",
  });

  const isPinAlreadySet = account?.isPinSet;

  // --- SECURITY GUARD ---
  // Prevent PIN manipulation if the account is hard-locked
  const isLockedOut =
    account?.isActive === false ||
    account?.status === "suspended" ||
    account?.status === "frozen";

  if (isLockedOut) {
    return (
      <div className="max-w-md mx-auto mt-20 p-10 bg-white rounded-[3rem] border-2 border-red-50 text-center shadow-2xl animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-red-50 text-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6">
          <ShieldAlert size={40} />
        </div>
        <h2 className="text-2xl font-black text-slate-900 uppercase italic text-red-600">
          Security Lockdown
        </h2>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4 leading-relaxed">
          Credentials management is disabled while your account is under review.
          <br />
          Contact the forensic department for identity re-verification.
        </p>
        <button
          onClick={() => navigate("/support")}
          className="w-full mt-8 bg-slate-900 text-white py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-black transition-all"
        >
          Contact Compliance
        </button>
      </div>
    );
  }

  // --- HANDLERS ---
  const handleSetPin = async (e) => {
    e.preventDefault();
    if (formData.pin.length !== 4 || !/^\d+$/.test(formData.pin)) {
      return toast.error("PIN must be exactly 4 digits");
    }
    if (formData.pin !== formData.confirmPin) {
      return toast.error("PINs do not match");
    }

    try {
      await setPin({ pin: formData.pin }).unwrap();
      toast.success("Transaction PIN Encrypted & Activated");
      setFormData({ pin: "", confirmPin: "", otp: "" });
    } catch (err) {
      toast.error(err?.data?.message || "Failed to initialize security vault");
    }
  };

  const handleRequestReset = async () => {
    try {
      await requestReset().unwrap();
      toast.success("Authorization code sent to your email");
      setIsResetMode(true);
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send reset email");
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    if (formData.otp.length !== 6)
      return toast.error("Enter 6-digit code from email");
    if (formData.pin.length !== 4) return toast.error("PIN must be 4 digits");

    try {
      await confirmReset({
        otp: formData.otp,
        newPin: formData.pin,
      }).unwrap();
      toast.success("PIN Reset Successful");
      setIsResetMode(false);
      setFormData({ pin: "", confirmPin: "", otp: "" });
    } catch (err) {
      toast.error(err?.data?.message || "Invalid or expired code");
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <Toaster position="top-center" />

      <header className="flex items-center justify-between px-2">
        <div>
          <h1 className="text-3xl font-black text-slate-900 italic uppercase">
            Security <span className="text-blue-600">Vault</span>
          </h1>
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
            Institutional-Grade Account Protection
          </p>
        </div>
        <div
          className={`px-4 py-2 rounded-full flex items-center gap-2 text-[10px] font-black uppercase border-2 transition-all duration-500 ${
            isPinAlreadySet && !isResetMode
              ? "bg-emerald-50 border-emerald-100 text-emerald-600"
              : "bg-amber-50 border-amber-100 text-amber-600"
          }`}
        >
          {isPinAlreadySet && !isResetMode ? (
            <CheckCircle size={14} />
          ) : (
            <AlertTriangle size={14} />
          )}
          {isPinAlreadySet && !isResetMode
            ? "Protection Active"
            : "Action Required"}
        </div>
      </header>

      <div className="grid md:grid-cols-2 gap-8">
        {/* LEFT COLUMN: PIN FORM */}
        <div className="bg-white border border-slate-100 rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.02)]">
          {isPinAlreadySet && !isResetMode ? (
            <div className="text-center space-y-6 py-10">
              <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-3xl flex items-center justify-center mx-auto shadow-inner ring-4 ring-blue-50/50">
                <ShieldCheck size={40} />
              </div>
              <div>
                <h3 className="font-black text-slate-900 uppercase italic text-lg">
                  Vault Secured
                </h3>
                <p className="text-xs text-slate-400 font-bold uppercase mt-2 leading-relaxed px-4">
                  Your 4-digit transaction PIN is active. It is required for all
                  capital outflows and SWIFT settlements.
                </p>
              </div>
              <button
                onClick={handleRequestReset}
                disabled={isRequesting}
                className="text-[10px] font-black uppercase text-slate-400 hover:text-blue-600 transition-colors flex items-center justify-center gap-2 mx-auto pt-4"
              >
                {isRequesting ? (
                  <Loader2 size={12} className="animate-spin" />
                ) : (
                  <MailQuestion size={12} />
                )}
                Request PIN Reset via Email
              </button>
            </div>
          ) : (
            <form
              onSubmit={isResetMode ? handleResetSubmit : handleSetPin}
              className="space-y-6 animate-in fade-in duration-500"
            >
              <h3 className="font-black text-slate-900 uppercase italic text-sm mb-4 border-b border-slate-50 pb-4">
                {isResetMode ? "Authorize PIN Reset" : "Initialize Security"}
              </h3>

              {isResetMode && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2 ml-2">
                    <KeyRound size={12} /> 6-Digit Email Code
                  </label>
                  <input
                    type="text"
                    maxLength="6"
                    value={formData.otp}
                    onChange={(e) =>
                      setFormData({ ...formData, otp: e.target.value })
                    }
                    placeholder="000000"
                    className="w-full bg-amber-50 border-2 border-transparent focus:border-amber-500 rounded-2xl p-4 text-center text-2xl font-black tracking-widest transition-all outline-none"
                    required
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2 ml-2">
                  <Lock size={12} />{" "}
                  {isResetMode ? "New 4-Digit PIN" : "Create 4-Digit PIN"}
                </label>
                <input
                  type="password"
                  maxLength="4"
                  value={formData.pin}
                  onChange={(e) =>
                    setFormData({ ...formData, pin: e.target.value })
                  }
                  placeholder="••••"
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-5 text-center text-3xl font-black tracking-[1em] transition-all outline-none"
                  required
                />
              </div>

              {!isResetMode && (
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-slate-400 flex items-center gap-2 ml-2">
                    <CheckCircle size={12} /> Confirm PIN
                  </label>
                  <input
                    type="password"
                    maxLength="4"
                    value={formData.confirmPin}
                    onChange={(e) =>
                      setFormData({ ...formData, confirmPin: e.target.value })
                    }
                    placeholder="••••"
                    className="w-full bg-slate-50 border-2 border-transparent focus:border-blue-600 rounded-2xl p-5 text-center text-3xl font-black tracking-[1em] transition-all outline-none"
                    required
                  />
                </div>
              )}

              <div className="flex flex-col gap-3 pt-4">
                <button
                  type="submit"
                  disabled={isSetting || isResetting}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all flex items-center justify-center gap-3 disabled:opacity-50 shadow-xl shadow-slate-100"
                >
                  {isSetting || isResetting ? (
                    <Loader2 className="animate-spin" />
                  ) : isResetMode ? (
                    "Update Security PIN"
                  ) : (
                    "Activate Security"
                  )}
                </button>

                {isResetMode && (
                  <button
                    type="button"
                    onClick={() => setIsResetMode(false)}
                    className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-600 pt-2"
                  >
                    Cancel Reset
                  </button>
                )}
              </div>
            </form>
          )}
        </div>

        {/* RIGHT COLUMN: PROTOCOLS */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-[-20px] right-[-20px] w-40 h-40 bg-blue-600/10 rounded-full blur-3xl"></div>
            <h4 className="font-black italic text-lg mb-6 flex items-center gap-2">
              <ShieldCheck className="text-blue-500" size={20} />
              Security Protocol
            </h4>
            <div className="space-y-6 relative z-10">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 font-black text-xs shrink-0 border border-slate-700">
                  01
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-normal tracking-wider">
                  Your PIN is{" "}
                  <span className="text-white">End-to-End Encrypted</span> using
                  256-bit AES protocols before transmission.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 font-black text-xs shrink-0 border border-slate-700">
                  02
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-normal tracking-wider">
                  Incorrect PIN entry{" "}
                  <span className="text-white">3 consecutive times</span>{" "}
                  results in an automated anti-fraud freeze.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center text-blue-400 font-black text-xs shrink-0 border border-slate-700">
                  03
                </div>
                <p className="text-[10px] font-bold text-slate-400 uppercase leading-normal tracking-wider">
                  Never share your PIN.{" "}
                  <span className="text-white italic">United Capital</span>{" "}
                  employees will never ask for this code.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-[2.5rem] p-8">
            <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              Internal Audit Log
            </p>
            <div className="flex justify-between items-center text-[10px] font-black text-slate-600 uppercase">
              <span className="tracking-widest">Last PIN Modification:</span>
              <span className="text-slate-900 italic bg-white px-3 py-1 rounded-lg border border-slate-100">
                {account?.lastPinChange
                  ? new Date(account.lastPinChange).toLocaleDateString(
                      undefined,
                      {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      },
                    )
                  : "N/A - NEW VAULT"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecurityCenter;
