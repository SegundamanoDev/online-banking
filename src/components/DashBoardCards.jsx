import React, { useState } from "react";
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

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex justify-between items-end px-2">
        <div>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 italic">
            Card Management
          </h2>
          <p className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mt-2">
            UCB Infinite • Active •••• 8842
          </p>
        </div>
        <button className="p-4 bg-white border border-slate-100 rounded-2xl hover:bg-slate-50 transition-all shadow-sm hover:rotate-90 duration-500">
          <Settings size={20} className="text-slate-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* VISUAL CARD SECTION */}
        <div className="space-y-8">
          <div
            className={`relative aspect-[1.586/1] w-full rounded-[32px] p-10 text-white overflow-hidden transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] group ${
              isFrozen ? "grayscale contrast-125 brightness-75" : "bg-slate-900"
            }`}
          >
            {/* High-End Gradient Overlays */}
            <div
              className={`absolute inset-0 transition-opacity duration-700 ${isFrozen ? "opacity-20" : "opacity-100"}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black"></div>
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.03)_50%,transparent_75%)] group-hover:translate-x-10 transition-transform duration-1000"></div>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* Top Row: Logo & Wireless */}
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black tracking-[0.4em] text-emerald-500 uppercase">
                    Infinite
                  </span>
                  <span className="italic font-black text-2xl tracking-tighter -mt-1 text-white">
                    UCB
                  </span>
                </div>
                <Wifi size={24} className="opacity-40 rotate-90" />
              </div>

              {/* Middle Row: Chip & Freeze Badge */}
              <div className="flex justify-between items-center">
                <div className="w-14 h-11 bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 rounded-lg opacity-90 shadow-[inset_0_1px_1px_rgba(255,255,255,0.5)] flex flex-col justify-around p-2">
                  <div className="w-full h-[0.5px] bg-black/20"></div>
                  <div className="w-full h-[0.5px] bg-black/20"></div>
                  <div className="w-full h-[0.5px] bg-black/20"></div>
                </div>
                {isFrozen && (
                  <div className="bg-emerald-500/20 backdrop-blur-xl px-4 py-1.5 rounded-full flex items-center gap-2 border border-emerald-500/30">
                    <Snowflake size={14} className="text-emerald-400" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">
                      Frozen
                    </span>
                  </div>
                )}
              </div>

              {/* Numbers Row */}
              <p className="text-2xl font-mono tracking-[0.2em] drop-shadow-lg text-white/90">
                {showDetails ? "4532 8812 0942 8842" : "•••• •••• •••• 8842"}
              </p>

              {/* Bottom Row: Aligned Info & Mastercard Logo */}
              <div className="flex justify-between items-end border-t border-white/5 pt-4">
                <div className="flex items-center gap-10">
                  <div className="flex flex-col">
                    <p className="text-[7px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">
                      Cardholder
                    </p>
                    <p className="text-xs font-black italic tracking-tight uppercase">
                      Alexander West
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[7px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">
                      Expiry
                    </p>
                    <p className="text-xs font-bold tracking-widest">09/28</p>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[7px] uppercase tracking-[0.3em] text-slate-500 font-black mb-1">
                      CVV
                    </p>
                    <p className="text-xs font-bold tracking-widest">
                      {showDetails ? "442" : "•••"}
                    </p>
                  </div>
                </div>

                {/* Mastercard Logo */}
                <div className="flex flex-col items-center">
                  <div className="flex -space-x-3">
                    <div className="w-8 h-8 rounded-full bg-[#EB001B] opacity-90"></div>
                    <div className="w-8 h-8 rounded-full bg-[#F79E1B] opacity-80 mix-blend-screen"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle Watermark */}
            <div className="absolute -right-16 -bottom-16 opacity-[0.03] rotate-12 pointer-events-none">
              <ShieldCheck size={320} />
            </div>
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full py-5 bg-white border border-slate-100 rounded-[2rem] flex items-center justify-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-slate-600 hover:bg-slate-900 hover:text-white transition-all shadow-sm active:scale-95"
          >
            {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
            {showDetails ? "Secure Details" : "Reveal Credentials"}
          </button>
        </div>

        {/* CONTROLS SECTION */}
        <div className="space-y-6">
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4 ml-2">
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
            sub="Sync with Apple Pay or Google Wallet"
          />

          <div className="mt-10 p-8 bg-emerald-50/50 rounded-[2.5rem] border border-emerald-100/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <ShieldCheck size={80} className="text-emerald-600" />
            </div>
            <div className="relative z-10 flex gap-5">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm shrink-0">
                <ShieldCheck className="text-emerald-600" size={24} />
              </div>
              <div>
                <h4 className="font-black text-sm text-slate-900 italic tracking-tight">
                  Protected by UCB Shield
                </h4>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-medium">
                  Your Infinite card is backed by 24/7 AI-driven behavioral
                  monitoring. Zero-liability protection is active for all global
                  transactions.
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
    className={`w-full flex items-center justify-between p-6 rounded-[2rem] border transition-all duration-500 group ${
      active
        ? "bg-slate-900 border-slate-900 text-white shadow-2xl scale-[1.02]"
        : "bg-white border-slate-50 hover:border-emerald-100 text-slate-900 shadow-sm"
    }`}
  >
    <div className="flex items-center gap-5">
      <div
        className={`p-4 rounded-2xl transition-all duration-500 ${
          active
            ? "bg-emerald-500 text-white"
            : "bg-slate-50 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-600"
        }`}
      >
        {icon}
      </div>
      <div className="text-left">
        <p className="font-black text-sm tracking-tight italic">{title}</p>
        <p
          className={`text-[11px] font-bold mt-0.5 ${active ? "text-slate-400" : "text-slate-400"}`}
        >
          {sub}
        </p>
      </div>
    </div>
    <div
      className={`p-1 transition-transform duration-500 group-hover:translate-x-2 ${active ? "text-emerald-500" : "text-slate-200"}`}
    >
      <ChevronRight size={20} />
    </div>
  </button>
);

export default DashboardCards;
