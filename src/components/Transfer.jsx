import React, { useState } from "react";
import {
  Send,
  RefreshCw,
  Users,
  Search,
  ChevronRight,
  Info,
  CheckCircle2,
  ArrowRightLeft,
  ShieldCheck,
  Lock,
  X,
} from "lucide-react";

const Transfer = () => {
  const [activeTab, setActiveTab] = useState("someone");
  const [isProcessing, setIsProcessing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // New States for Security
  const [showPinModal, setShowPinModal] = useState(false);
  const [pin, setPin] = useState("");
  const [formData, setFormData] = useState({
    recipientAccountNumber: "",
    amount: "",
    description: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1: Trigger the PIN Modal
  const initiateTransfer = (e) => {
    e.preventDefault();
    setShowPinModal(true);
  };

  // Step 2: Final Authorization with PIN
  const confirmTransfer = async () => {
    setIsProcessing(true);

    try {
      const response = await fetch("/api/transactions/transfer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({ ...formData, pin }),
      });

      const data = await response.json();

      if (response.ok) {
        setShowPinModal(false);
        setShowSuccess(true);
      } else {
        alert(data.message); // Handle invalid PIN or insufficient funds
      }
    } catch (error) {
      console.error("Transfer failed", error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (showSuccess) {
    return (
      <div className="max-w-xl mx-auto mt-10 p-10 bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl text-center">
        <div className="w-24 h-24 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle2 size={56} />
        </div>
        <h2 className="text-3xl font-black text-slate-900 italic tracking-tighter uppercase">
          Capital Deployed
        </h2>
        <p className="text-slate-400 mt-3 mb-10 font-bold uppercase text-[10px] tracking-[0.2em]">
          Wire Transfer successfully broadcasted to the network.
        </p>
        <button
          onClick={() => setShowSuccess(false)}
          className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black uppercase text-xs tracking-[0.3em] hover:bg-emerald-600 transition-all"
        >
          New Transaction
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto space-y-10">
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-2 px-2">
        <h2 className="text-4xl font-black tracking-tighter text-slate-900 italic">
          Move Capital
        </h2>
        <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
          Authorize secure wire transfers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        <div className="lg:col-span-3 bg-white rounded-[2.5rem] border border-slate-50 p-10 shadow-sm">
          <form onSubmit={initiateTransfer} className="space-y-8">
            {/* RECIPIENT ACCOUNT */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Recipient Account Number
              </label>
              <input
                name="recipientAccountNumber"
                type="text"
                required
                onChange={handleInputChange}
                placeholder="Ex: 1099220033"
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold focus:ring-2 focus:ring-emerald-500/20 outline-none"
              />
            </div>

            {/* AMOUNT */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Allocation Amount
              </label>
              <div className="relative group">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl font-black text-slate-200 italic">
                  $
                </span>
                <input
                  name="amount"
                  type="number"
                  required
                  onChange={handleInputChange}
                  placeholder="0.00"
                  className="w-full bg-white border-2 border-slate-50 rounded-[2rem] pl-14 pr-8 py-7 text-4xl font-black italic focus:border-emerald-500/20 focus:bg-emerald-50/10 outline-none"
                />
              </div>
            </div>

            {/* DESCRIPTION */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">
                Reference Memo
              </label>
              <input
                name="description"
                type="text"
                onChange={handleInputChange}
                placeholder="Ex: Q1 Dividend Payout"
                className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 text-sm font-bold outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-6 rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] bg-emerald-600 text-white hover:bg-slate-900 shadow-xl transition-all"
            >
              Initialize Authorization
            </button>
          </form>
        </div>

        {/* SIDEBAR PLACEHOLDER */}
        <div className="lg:col-span-2">
          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white">
            <ShieldCheck size={24} className="text-emerald-500 mb-4" />
            <h3 className="font-black italic mb-2">Vault Protection</h3>
            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              All outbound transfers require your 6-digit Security PIN. This
              protocol ensures that capital remains within your authorized
              control.
            </p>
          </div>
        </div>
      </div>

      {/* --- PIN AUTHORIZATION MODAL --- */}
      {showPinModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-white w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl relative overflow-hidden">
            <button
              onClick={() => setShowPinModal(false)}
              className="absolute right-8 top-8 text-slate-300 hover:text-slate-900 transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto text-emerald-600">
                <Lock size={28} />
              </div>
              <h3 className="text-xl font-black italic text-slate-900">
                Final Authorization
              </h3>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">
                Enter your 6-digit transaction PIN to deploy{" "}
                <span className="text-slate-900">${formData.amount}</span>
              </p>
            </div>

            <div className="space-y-6">
              <input
                type="password"
                maxLength="6"
                placeholder="••••••"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-6 text-center text-4xl font-black tracking-[0.5em] focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none"
              />

              <button
                onClick={confirmTransfer}
                disabled={pin.length < 4 || isProcessing}
                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all ${isProcessing ? "bg-slate-100 text-slate-300" : "bg-slate-900 text-white hover:bg-emerald-600"}`}
              >
                {isProcessing ? "Verifying..." : "Confirm & Send Capital"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transfer;
