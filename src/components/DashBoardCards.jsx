import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";
import {
  ShieldCheck,
  Snowflake,
  Eye,
  EyeOff,
  Settings,
  Lock,
  Smartphone,
  ChevronRight,
  Wifi,
} from "lucide-react";

const DashboardCards = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const { user, account } = useOutletContext();

  const formatCardNumber = (num) => {
    if (!num) return "•••• •••• •••• 0000";
    // Using account number as the base card number
    const lastFour = num.slice(-4);
    return showDetails
      ? num.match(/.{1,4}/g).join(" ")
      : `•••• •••• •••• ${lastFour}`;
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 md:space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex justify-between items-end px-2">
        <div>
          <h2 className="text-2xl md:text-4xl font-black tracking-tighter text-slate-900 italic">
            Card Management
          </h2>
          <p className="text-[9px] md:text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mt-2">
            UCB Mastercard • {isFrozen ? "Locked" : "Active"} •{" "}
            {account?.accountNumber?.slice(-4) || "8842"}
          </p>
        </div>
        <button className="p-3 md:p-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all shadow-sm">
          <Settings size={20} className="text-slate-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* VISUAL CARD SECTION */}
        <div className="space-y-6">
          <div
            className={`relative aspect-[1.586/1] w-full rounded-[24px] md:rounded-[32px] p-6 md:p-10 text-white overflow-hidden transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.2)] group ${
              isFrozen ? "grayscale contrast-125 brightness-75" : "bg-slate-900"
            }`}
          >
            {/* Background Effects */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${isFrozen ? "opacity-20" : "opacity-100"}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Top Row: Bank Name & Wireless */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">
                    United Capital
                  </span>
                  <span className="italic font-black text-xl md:text-2xl tracking-tighter -mt-1 text-white">
                    UCB <span className="text-emerald-500">Elite</span>
                  </span>
                </div>
                <Wifi size={20} className="opacity-40 rotate-90" />
              </div>

              {/* Middle Row: Chip & Freeze Badge */}
              <div className="flex justify-between items-center">
                {/* EMV Chip */}
                <div className="w-10 h-8 md:w-14 md:h-11 bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 rounded-md md:rounded-lg opacity-90 flex flex-col justify-around p-1.5 md:p-2 shadow-inner">
                  <div className="w-full h-[0.5px] bg-black/20"></div>
                  <div className="w-full h-[0.5px] bg-black/20"></div>
                  <div className="w-full h-[0.5px] bg-black/20"></div>
                </div>
                {isFrozen && (
                  <div className="bg-emerald-500/20 backdrop-blur-xl px-3 py-1 rounded-full flex items-center gap-2 border border-emerald-500/30">
                    <Snowflake size={12} className="text-emerald-400" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-emerald-400">
                      Card Frozen
                    </span>
                  </div>
                )}
              </div>

              {/* Card Number */}
              <p className="text-lg md:text-2xl font-mono tracking-[0.15em] md:tracking-[0.2em] drop-shadow-lg text-white/90">
                {formatCardNumber(account?.accountNumber)}
              </p>

              {/* Bottom Row: Details & MASTERCARD BRANDING */}
              <div className="flex justify-between items-end border-t border-white/5 pt-3 md:pt-4">
                <div className="flex items-center gap-4 md:gap-10">
                  <div className="flex flex-col">
                    <p className="text-[6px] md:text-[7px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">
                      Cardholder
                    </p>
                    <p className="text-[10px] md:text-xs font-black italic tracking-tight uppercase truncate max-w-[80px] md:max-w-none">
                      {user?.firstName} {user?.lastName}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[6px] md:text-[7px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">
                      Expiry
                    </p>
                    <p className="text-[10px] md:text-xs font-bold tracking-widest">
                      09/28
                    </p>
                  </div>
                </div>

                {/* Mastercard Logo Area */}
                <div className="flex flex-col items-center">
                  <div className="flex -space-x-2 md:-space-x-3">
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#EB001B] opacity-95"></div>
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#F79E1B] opacity-90 mix-blend-screen"></div>
                  </div>
                  <span className="text-[6px] md:text-[8px] font-bold tracking-tighter mt-1 text-white/80 lowercase italic">
                    mastercard
                  </span>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full py-4 md:py-5 bg-white border border-slate-100 rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center gap-3 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
          >
            {showDetails ? <EyeOff size={16} /> : <Eye size={16} />}
            {showDetails ? "Secure Details" : "Reveal Credentials"}
          </button>
        </div>

        {/* CONTROLS SECTION */}
        <div className="space-y-4 md:space-y-6">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-2 ml-2">
            Security Protocols
          </h3>

          <CardAction
            icon={<Snowflake size={20} />}
            title={isFrozen ? "Thaw Asset" : "Freeze Card"}
            sub="Toggle instant transaction lock"
            active={isFrozen}
            onClick={() => setIsFrozen(!isFrozen)}
          />

          <CardAction
            icon={<Lock size={20} />}
            title="Credential Access"
            sub="Securely retrieve your 4-digit PIN"
          />

          <CardAction
            icon={<Smartphone size={20} />}
            title="Mobile Integration"
            sub="Sync with Apple Pay or Wallet"
          />

          <div className="mt-6 md:mt-10 p-6 md:p-8 bg-emerald-50/50 rounded-[2rem] md:rounded-[2.5rem] border border-emerald-100/50 relative overflow-hidden">
            <div className="relative z-10 flex gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                <ShieldCheck className="text-emerald-600" size={20} />
              </div>
              <div>
                <h4 className="font-black text-xs md:text-sm text-slate-900 italic tracking-tight">
                  Protected by UCB Shield
                </h4>
                <p className="text-[10px] md:text-xs text-slate-500 mt-1 md:mt-2 leading-relaxed font-medium">
                  Your Mastercard is backed by 24/7 AI-driven behavioral
                  monitoring and zero-liability protection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardAction = ({ icon, title, sub, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border transition-all duration-500 group ${
      active
        ? "bg-slate-900 border-slate-900 text-white shadow-xl scale-[1.01]"
        : "bg-white border-slate-50 hover:border-emerald-100 text-slate-900 shadow-sm"
    }`}
  >
    <div className="flex items-center gap-4 md:gap-5">
      <div
        className={`p-3 md:p-4 rounded-xl md:rounded-2xl transition-all duration-500 ${
          active ? "bg-emerald-500 text-white" : "bg-slate-50 text-slate-400"
        }`}
      >
        {icon}
      </div>
      <div className="text-left">
        <p className="font-black text-xs md:text-sm tracking-tight italic">
          {title}
        </p>
        <p className="text-[9px] md:text-[11px] font-bold mt-0.5 text-slate-400">
          {sub}
        </p>
      </div>
    </div>
    <ChevronRight
      size={18}
      className={`transition-transform group-hover:translate-x-1 ${active ? "text-emerald-500" : "text-slate-200"}`}
    />
  </button>
);

export default DashboardCards;
