import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShieldCheck, Info, Zap, ArrowRight } from "lucide-react";

const TransferCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const navigate = useNavigate();

  const { user, isAuthenticated } = useSelector((state) => state.auth);

  const handleTransferClick = () => {
    if (isAuthenticated && user) {
      // User is logged in, proceed to transfer
      navigate("/dashboard/transfer");
    } else {
      navigate("/login", {
        state: {
          from: "/dashboard/transfer",
          intendedAmount: amount,
        },
      });
    }
  };

  const flatFee = 15.0;
  const fxMargin = 0.005;
  const totalCharge = flatFee + amount * fxMargin;

  return (
    <div className="w-full max-w-[1440px] mx-auto bg-[#f8fafc] p-6 md:p-12 rounded-3xl border border-slate-200 shadow-sm">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-serif font-bold text-slate-900">
          Transfer Estimate
        </h3>
        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black bg-white px-3 py-1 rounded-full border border-slate-100">
          Live FX Data
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* LEFT COLUMN: Trust & Guarantee */}
        <div className="flex flex-col justify-center">
          <div className="bg-emerald-50 border border-emerald-100 p-6 rounded-2xl mb-6">
            <div className="flex gap-4">
              <ShieldCheck
                className="text-emerald-600 flex-shrink-0"
                size={28}
              />
              <div>
                <p className="text-lg font-bold text-emerald-900">
                  The United Transparency Guarantee
                </p>
                <p className="text-sm text-emerald-700 leading-relaxed mt-1">
                  What you see is exactly what they receive. We disclose all FX
                  margins and network handling fees upfront. No intermediary
                  surprises.
                </p>
              </div>
            </div>
          </div>

          {/* Welcome message if user is found in Redux */}
          {user && (
            <div className="px-6 py-2 border-l-4 border-emerald-500 text-slate-600 text-sm italic">
              Welcome back, {user.firstName || "Member"}. Your preferred
              institutional rates are applied.
            </div>
          )}
        </div>

        {/* RIGHT COLUMN: Input & Action */}
        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-inner">
          <div>
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-2">
              You Send (USD)
            </label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full bg-slate-50 border border-slate-200 rounded-xl p-5 text-2xl font-bold focus:ring-2 focus:ring-emerald-500 focus:bg-white outline-none transition-all"
              />
              <span className="absolute right-6 top-5 font-bold text-slate-400 text-lg">
                USD
              </span>
            </div>
          </div>

          <div className="py-6 border-y border-slate-100 space-y-4">
            <div className="flex justify-between text-base">
              <span className="text-slate-500 flex items-center gap-2">
                Transfer Fee <Info size={16} />
              </span>
              <span className="font-bold text-slate-800">
                ${flatFee.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-100">
              <span className="text-slate-900 font-bold uppercase text-xs tracking-wider">
                Estimated Total Charges
              </span>
              <span className="text-2xl font-black text-emerald-700">
                ${totalCharge.toFixed(2)}
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 bg-slate-900 text-white p-4 rounded-xl flex items-center gap-4">
              <Zap size={20} className="text-emerald-400" />
              <div>
                <p className="text-[10px] uppercase font-black tracking-widest opacity-60">
                  Estimated Delivery
                </p>
                <p className="font-bold text-sm">Within 24 Hours</p>
              </div>
            </div>

            <button
              onClick={handleTransferClick}
              className="flex-[1.5] bg-emerald-600 text-white py-4 px-6 rounded-xl font-bold hover:bg-emerald-700 transition-all flex items-center justify-center gap-2 group shadow-lg"
            >
              {isAuthenticated ? "Proceed to Transfer" : "Sign in to Send"}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferCalculator;
