import React from "react";
import { AlertOctagon, Info, ShieldAlert } from "lucide-react";

const AccountStatusBanner = ({ account }) => {
  // If data is still loading or status is active, do not show the banner
  if (!account || !account.status || account.status === "active") return null;

  const statusConfigs = {
    frozen: {
      bg: "bg-red-600",
      icon: <AlertOctagon size={18} />,
      title: "Security Protocol: Account Frozen",
      message:
        "Multiple failed attempts or suspicious activity detected. Capital outflows are disabled.",
    },
    suspended: {
      bg: "bg-slate-900",
      icon: <AlertOctagon size={18} />,
      title: "Account Suspended",
      message:
        "This account has been deactivated by the compliance department.",
    },
    restricted: {
      bg: "bg-amber-600",
      icon: <ShieldAlert size={18} />,
      title: "Verification Required",
      message:
        "Your account is currently under limited access mode. Complete KYC to restore full service.",
    },
  };

  // Only show if the status exists in our config
  const config = statusConfigs[account.status];
  if (!config) return null;

  return (
    <div
      className={`${config.bg} text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl z-40 relative`}
    >
      <div
        className={`${config.bg} text-white px-6 py-3 flex items-center justify-between shadow-lg animate-pulse-slow`}
      >
        <div className="flex items-center gap-3">
          {config.icon}
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest leading-none">
              {config.title}
            </p>
            <p className="text-xs font-medium opacity-90">{config.message}</p>
          </div>
        </div>
        <button
          onClick={() =>
            (window.location.href = "mailto:support@geminibank.com")
          }
          className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded text-[10px] font-black uppercase transition-colors"
        >
          Contact Support
        </button>
      </div>
    </div>
  );
};
