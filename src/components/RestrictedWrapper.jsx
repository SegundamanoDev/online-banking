import React from "react";
import { Lock } from "lucide-react";

const RestrictedWrapper = ({ children, isRestricted, message }) => {
  if (!isRestricted) return children;

  return (
    <div className="relative group">
      {/* The Blurred/Desaturated Content */}
      <div className="opacity-40 grayscale pointer-events-none select-none">
        {children}
      </div>

      {/* The Lock Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-[2px] rounded-[2.5rem] transition-all">
        <div className="bg-slate-900 text-white p-4 rounded-2xl shadow-2xl flex flex-col items-center text-center max-w-xs animate-in fade-in zoom-in duration-300">
          <Lock size={32} className="text-amber-500 mb-3" />
          <h4 className="font-black uppercase italic text-sm tracking-widest">
            Feature Restricted
          </h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase mt-2 px-4">
            {message ||
              "Outgoing transactions are temporarily disabled for your security."}
          </p>
          <button
            onClick={() =>
              (window.location.href = "mailto:support@unitedcapital.com")
            }
            className="mt-4 text-[9px] font-black underline hover:text-emerald-400"
          >
            RESOLVE VIA COMPLIANCE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RestrictedWrapper;
