import React, { useState } from "react";
import {
  ShieldCheck,
  Snowflake,
  Eye,
  EyeOff,
  Settings,
  Lock,
  CreditCard,
  Smartphone,
  ChevronRight,
  Wifi,
} from "lucide-react";

const DashboardCards = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-slate-900">
            Manage Cards
          </h2>
          <p className="text-sm text-gray-500 font-medium mt-1">
            Active Card •••• 8842
          </p>
        </div>
        <button className="p-3 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-all shadow-sm">
          <Settings size={20} className="text-slate-600" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* VISUAL CARD SECTION */}
        <div className="space-y-6">
          <div
            className={`relative aspect-[1.586/1] w-full rounded-[24px] p-8 text-white overflow-hidden transition-all duration-500 shadow-2xl ${
              isFrozen
                ? "grayscale contrast-125"
                : "bg-gradient-to-br from-[#1a1a1a] via-[#2a2a2a] to-[#000000]"
            }`}
          >
            {/* Glossy Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div className="italic font-black text-2xl tracking-tighter">
                  HSBC <span className="text-red-600">Premier</span>
                </div>
                <Wifi size={24} className="opacity-60 rotate-90" />
              </div>

              <div>
                <div className="mb-6 flex gap-4 items-center">
                  <div className="w-12 h-10 bg-gradient-to-br from-yellow-200 to-yellow-500 rounded-md opacity-80 shadow-inner"></div>
                  {isFrozen && (
                    <div className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/20">
                      <Snowflake size={14} className="animate-pulse" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">
                        Frozen
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-xl font-mono tracking-[0.25em] mb-2">
                  {showDetails ? "4532 8812 0942 8842" : "•••• •••• •••• 8842"}
                </p>
                <div className="flex gap-8">
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-50">
                      Expiry
                    </p>
                    <p className="text-sm font-bold">09/28</p>
                  </div>
                  <div>
                    <p className="text-[8px] uppercase tracking-widest opacity-50">
                      CVV
                    </p>
                    <p className="text-sm font-bold">
                      {showDetails ? "442" : "•••"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Logo Watermark */}
            <div className="absolute -right-10 -bottom-10 opacity-10">
              <CreditCard size={200} />
            </div>
          </div>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="w-full py-4 bg-white border border-gray-200 rounded-2xl flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-slate-700 hover:bg-gray-50 transition-all shadow-sm"
          >
            {showDetails ? <EyeOff size={18} /> : <Eye size={18} />}
            {showDetails ? "Hide Card Details" : "View Card Details"}
          </button>
        </div>

        {/* CONTROLS SECTION */}
        <div className="space-y-4">
          <h3 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-4">
            Quick Security
          </h3>

          <CardAction
            icon={<Snowflake size={20} />}
            title="Freeze Card"
            sub="Instantly disable all transactions"
            active={isFrozen}
            onClick={() => setIsFrozen(!isFrozen)}
            variant="danger"
          />

          <CardAction
            icon={<Lock size={20} />}
            title="View PIN"
            sub="Safely reveal your 4-digit PIN"
          />

          <CardAction
            icon={<Smartphone size={20} />}
            title="Apple Wallet"
            sub="Add this card to your digital wallet"
          />

          <div className="mt-8 p-6 bg-blue-50/50 rounded-3xl border border-blue-100/50">
            <div className="flex gap-4">
              <ShieldCheck className="text-blue-600 shrink-0" size={24} />
              <div>
                <h4 className="font-bold text-sm text-slate-900">
                  Your card is protected
                </h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Every transaction is monitored by our Premier fraud detection
                  systems. You are not liable for unauthorized spending.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardAction = ({ icon, title, sub, active, onClick, variant }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between p-5 rounded-3xl border transition-all duration-300 group ${
      active
        ? "bg-slate-900 border-slate-900 text-white shadow-xl"
        : "bg-white border-gray-100 hover:border-gray-300 text-slate-900 shadow-sm"
    }`}
  >
    <div className="flex items-center gap-4">
      <div
        className={`p-3 rounded-2xl transition-colors ${
          active
            ? "bg-white/10 text-white"
            : "bg-gray-50 text-slate-500 group-hover:bg-red-50 group-hover:text-[#db0011]"
        }`}
      >
        {icon}
      </div>
      <div className="text-left">
        <p className="font-bold text-sm">{title}</p>
        <p
          className={`text-[11px] font-medium ${active ? "text-gray-400" : "text-gray-500"}`}
        >
          {sub}
        </p>
      </div>
    </div>
    <div
      className={`p-1 rounded-full transition-transform group-hover:translate-x-1 ${
        active ? "text-white" : "text-gray-300"
      }`}
    >
      <ChevronRight size={18} />
    </div>
  </button>
);

export default DashboardCards;
