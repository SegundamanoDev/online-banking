import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../src/services/authSlice";
import { useGetProfileQuery } from "../../src/services/api";
import {
  LayoutGrid,
  Send,
  Globe,
  Clock,
  Menu,
  X,
  EyeOff,
  Eye,
  Loader2,
  LogOut,
  Landmark,
  ShieldCheck,
  Fingerprint,
  AlertOctagon,
  ShieldAlert,
} from "lucide-react";
import { toast } from "react-hot-toast";

const AccountStatusBanner = ({ account }) => {
  if (!account || account.status === "active") return null;

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

  const config = statusConfigs[account.status] || statusConfigs.frozen;

  return (
    <div
      className={`${config.bg} text-white px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl z-40 relative`}
    >
      <div className="flex items-center gap-4">
        <div className="bg-white/20 p-2 rounded-lg animate-pulse">
          {config.icon}
        </div>
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1">
            {config.title}
          </p>
          <p className="text-xs font-medium opacity-90 italic">
            {config.message}
          </p>
        </div>
      </div>
      <button
        onClick={() =>
          (window.location.href = "mailto:support@unitedcapital.com")
        }
        className="bg-white text-slate-900 px-4 py-2 rounded-lg text-[10px] font-black uppercase hover:bg-slate-100 transition-all shrink-0"
      >
        Contact Institutional Support
      </button>
    </div>
  );
};

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBalances, setShowBalances] = useState(true);
  const [greeting, setGreeting] = useState("");

  const { data: profileData, isLoading } = useGetProfileQuery();
  const account = profileData?.account;

  // --- SESSION TIMEOUT LOGIC ---
  const handleLogout = useCallback(() => {
    dispatch(logout());
    navigate("/login");
    toast.error("Session expired for security.");
  }, [dispatch, navigate]);

  useEffect(() => {
    let timeout;
    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(handleLogout, 600000); // 10 Minutes
    };

    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    resetTimer();

    return () => {
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      clearTimeout(timeout);
    };
  }, [handleLogout]);

  // --- GREETING LOGIC ---
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleNavigation = (path) => {
    navigate(path);
    setMobileMenuOpen(false);
  };

  const getInitials = (user) => {
    if (!user) return "UC";
    const first = user.firstName?.charAt(0) || "";
    const last = user.lastName?.charAt(0) || "";
    return (first + last).toUpperCase() || "UC";
  };

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* --- SIDEBAR --- */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0F172A] text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 border-b border-white/5 flex justify-between items-center text-center">
          <div
            className="flex items-center gap-3 group cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <Landmark className="text-emerald-500" size={24} />
            <span className="font-black tracking-[0.25em] text-sm text-white uppercase italic">
              United Capital
            </span>
          </div>
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-8 overflow-y-auto">
          {/* CORE BANKING */}
          <div>
            <p className="px-4 mb-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Core Banking
            </p>
            <div className="space-y-1">
              <DashboardNavItem
                icon={<LayoutGrid size={18} />}
                label="Portfolio Overview"
                active={isActive("/dashboard")}
                onClick={() => handleNavigation("/dashboard")}
              />
              <DashboardNavItem
                icon={<Clock size={18} />}
                label="Audit Logs"
                active={isActive("/dashboard/transactions")}
                onClick={() => handleNavigation("/dashboard/transactions")}
              />
            </div>
          </div>

          {/* SECURITY & CREDIT */}
          <div>
            <p className="px-4 mb-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Security & Credit
            </p>
            <div className="space-y-1">
              <DashboardNavItem
                icon={<ShieldCheck size={18} />}
                label="Credit Facilities"
                active={isActive("/dashboard/loans")}
                onClick={() => handleNavigation("/dashboard/loans")}
              />
              <DashboardNavItem
                icon={<Fingerprint size={18} />}
                label="Security Vault"
                active={isActive("/dashboard/security")}
                onClick={() => handleNavigation("/dashboard/security")}
              />
            </div>
          </div>

          {/* REMITTANCE */}
          <div>
            <p className="px-4 mb-3 text-[10px] font-black text-slate-500 uppercase tracking-widest">
              Remittance
            </p>
            <div className="space-y-1">
              <DashboardNavItem
                icon={<Send size={18} />}
                label="Internal Transfer"
                active={isActive("/dashboard/transfer/local")}
                onClick={() => handleNavigation("/dashboard/transfer/local")}
              />
              <DashboardNavItem
                icon={<Globe size={18} />}
                label="International Wire"
                active={isActive("/dashboard/transfer/international")}
                onClick={() =>
                  handleNavigation("/dashboard/transfer/international")
                }
              />
            </div>
          </div>

          <div className="pt-10">
            <button
              onClick={handleLogout}
              className="w-full flex items-center space-x-4 px-4 py-3 text-red-400 hover:bg-red-500/10 rounded-xl transition-all group"
            >
              <LogOut
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
              <span className="text-sm font-black uppercase italic tracking-tighter">
                Terminate Session
              </span>
            </button>
          </div>
        </nav>
      </aside>

      {/* --- CONTENT AREA --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* GLOBAL STATUS BANNER */}
        <AccountStatusBanner account={account} />

        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 shrink-0 sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 hover:bg-slate-50 rounded-full"
            >
              <Menu size={24} />
            </button>
            <div className="flex flex-col">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] leading-none mb-1.5">
                {greeting}
              </p>
              <h1 className="text-base lg:text-lg font-black text-slate-900 uppercase">
                {isLoading
                  ? "Synchronizing..."
                  : `${profileData?.user?.firstName || ""} ${profileData?.user?.lastName || ""}`}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => setShowBalances(!showBalances)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[10px] font-black text-slate-400 hover:text-emerald-600 tracking-widest transition-colors"
            >
              {showBalances ? <EyeOff size={16} /> : <Eye size={16} />}
              {showBalances ? "HIDE ASSETS" : "SHOW ASSETS"}
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-100">
              <div className="hidden md:block text-right">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  Account Status
                </p>
                {/* DYNAMIC STATUS BADGE */}
                <p
                  className={`text-[10px] font-black uppercase ${
                    account?.status === "active"
                      ? "text-emerald-600"
                      : "text-red-500"
                  }`}
                >
                  {account?.status || "Institutional"}
                </p>
              </div>

              <div className="w-10 h-10 bg-slate-900 text-white rounded-xl flex items-center justify-center text-xs font-black shadow-lg shadow-slate-200 overflow-hidden ring-2 ring-slate-50">
                {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : profileData?.user?.avatar ? (
                  <img
                    src={profileData.user.avatar}
                    alt="User"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  getInitials(profileData?.user)
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-10 scroll-smooth bg-[#F8FAFC]">
          <Outlet
            context={{
              showBalances,
              user: profileData?.user,
              account: account,
            }}
          />
        </main>
      </div>
    </div>
  );
};

const DashboardNavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group ${
      active
        ? "bg-emerald-600/10 text-emerald-400 font-black italic"
        : "text-slate-400 hover:text-white hover:bg-white/5"
    }`}
  >
    <div className="flex items-center space-x-4">
      <span
        className={`${active ? "text-emerald-400" : "text-slate-500 group-hover:text-emerald-400"}`}
      >
        {icon}
      </span>
      <span className="text-[13px] uppercase tracking-tight">{label}</span>
    </div>
    {active && (
      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
    )}
  </button>
);

export default DashboardLayout;
