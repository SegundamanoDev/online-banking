import React, { useState, useEffect, useRef } from "react";
import { Lock, ShieldCheck, Loader2, X } from "lucide-react";
import { useVerifyTransactionPinMutation } from "../../src/services/api";
import { toast } from "react-hot-toast";

const PinVerificationModal = ({
  isOpen,
  onClose,
  onSuccess,
  actionLabel = "Authorize Transaction",
}) => {
  const [pin, setPin] = useState("");
  const [verifyPin, { isLoading }] = useVerifyTransactionPinMutation();
  const inputRef = useRef(null);

  // Auto-focus the input when modal opens
  useEffect(() => {
    if (isOpen) {
      setPin("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (pin.length !== 4) return toast.error("Enter 4-digit PIN");

    try {
      await verifyPin({ pin }).unwrap();
      toast.success("Identity Verified");
      onSuccess(); // Execute the actual transfer/loan
      onClose();
    } catch (err) {
      // The backend returns "2 attempts remaining" - toast handles it
      toast.error(err?.data?.message || "Verification Failed");
      setPin("");
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
      <div className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className="bg-slate-50 p-8 flex justify-between items-center border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 className="font-black italic uppercase text-slate-900 text-sm">
                Security Challenge
              </h3>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                Verification Required
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-slate-900 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="p-10 space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-[11px] font-black uppercase text-slate-500 tracking-tighter">
              Confirm authorization for:
            </p>
            <p className="text-xs font-bold text-emerald-600 uppercase bg-emerald-50 py-2 rounded-full inline-block px-6">
              {actionLabel}
            </p>
          </div>

          <div className="relative max-w-[200px] mx-auto">
            <input
              ref={inputRef}
              type="password"
              maxLength="4"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl p-5 text-center text-4xl font-black tracking-[0.8em] focus:border-emerald-500 focus:ring-0 transition-all"
              placeholder="••••"
              disabled={isLoading}
            />
          </div>

          <p className="text-[9px] font-bold text-slate-400 uppercase leading-relaxed max-w-[240px] mx-auto">
            Entering an incorrect PIN 3 times will result in immediate
            <span className="text-rose-500"> account suspension</span>.
          </p>

          <button
            type="submit"
            disabled={isLoading || pin.length < 4}
            className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-black transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {isLoading ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Verify & Confirm"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PinVerificationModal;
