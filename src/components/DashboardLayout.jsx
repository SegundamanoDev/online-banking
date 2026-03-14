import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import {
  LayoutGrid,
  ShieldCheck,
  Send,
  Globe,
  CreditCard,
  Clock,
  Menu,
  X,
  Bell,
  EyeOff,
  Eye,
  Lock,
} from "lucide-react";

const DashboardLayout = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBalances, setShowBalances] = useState(true);
  const [greeting, setGreeting] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900">
      {/* --- SIDEBAR --- */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-[#0F172A] text-white transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-8 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="h-10 w-10 bg-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-900/20">
              <Globe size={22} className="text-white" />
            </div>
            <div>
              <div className="text-white font-black text-xl tracking-tighter leading-none">
                UNITED<span className="text-emerald-500">CAPITAL</span>
              </div>
              <p className="text-[9px] text-emerald-500/60 mt-1.5 font-mono uppercase tracking-[0.3em]">
                Secure Banking
              </p>
            </div>
          </div>
          <button
            className="lg:hidden p-2 text-gray-400 hover:text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-1.5 mt-8">
          <DashboardNavItem
            icon={<LayoutGrid size={20} />}
            label="Overview"
            active={isActive("/dashboard")}
            onClick={() => handleNavigation("/dashboard")}
          />
          <DashboardNavItem
            icon={<Clock size={20} />}
            label="Transactions"
            active={isActive("/dashboard/transactions")}
            onClick={() => handleNavigation("/dashboard/transactions")}
          />
          <DashboardNavItem
            icon={<Send size={20} />}
            label="Pay & Transfer"
            active={isActive("/dashboard/transfer")}
            onClick={() => handleNavigation("/dashboard/transfer")}
          />
          <DashboardNavItem
            icon={<Globe size={20} />}
            label="Global Money"
            active={isActive("/dashboard/global")}
            onClick={() => handleNavigation("/dashboard/global")}
          />
          <DashboardNavItem
            icon={<CreditCard size={20} />}
            label="Cards"
            active={isActive("/dashboard/cards")}
            onClick={() => handleNavigation("/dashboard/cards")}
          />
          <DashboardNavItem
            icon={<ShieldCheck size={20} />}
            label="Insurance"
            active={isActive("/dashboard/insurance")}
            onClick={() => handleNavigation("/dashboard/insurance")}
          />
        </nav>

        {/* SECURE SESSION INDICATOR */}
        <div className="p-5 bg-white/5 m-4 rounded-2xl border border-white/5">
          <div className="flex items-center gap-2 text-emerald-500 mb-2">
            <Lock size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest">
              Secure Session
            </span>
          </div>
          <p className="text-[11px] text-gray-500 font-medium">
            Auto-logout in 04:59
          </p>
          <div className="w-full bg-white/10 h-1 rounded-full mt-3 overflow-hidden">
            <div className="bg-emerald-600 h-full w-2/3"></div>
          </div>
        </div>
      </aside>

      {/* --- CONTENT AREA --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 shrink-0 sticky top-0 z-30">
          {/* LEFT: Mobile Toggle & Name */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 -ml-2 hover:bg-slate-50 rounded-full transition-colors"
            >
              <Menu size={24} className="text-slate-600" />
            </button>

            <div className="flex flex-col">
              <p className="text-[10px] font-bold text-emerald-600 uppercase tracking-[0.2em] leading-none mb-1.5">
                {greeting}
              </p>
              <h1 className="text-base lg:text-lg font-black text-slate-900 leading-none tracking-tight">
                ALEXANDER WEST
              </h1>
            </div>
          </div>

          {/* RIGHT: Actions & Profile */}
          <div className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => setShowBalances(!showBalances)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[10px] font-black text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all tracking-widest"
            >
              {showBalances ? <EyeOff size={16} /> : <Eye size={16} />}
              {showBalances ? "HIDE" : "SHOW"}
            </button>

            {/* Notification */}
            <button className="relative p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all">
              <Bell size={22} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Avatar */}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-100 ml-2">
              <div className="hidden md:block text-right">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  UCB Elite
                </p>
                <p className="text-[11px] font-bold text-emerald-600">Secure</p>
              </div>
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xs lg:text-sm font-black shadow-lg shadow-slate-200 hover:bg-emerald-600 transition-all cursor-pointer">
                AW
              </div>
            </div>
          </div>
        </header>

        {/* MAIN CONTENT WINDOW */}
        <main className="flex-1 overflow-y-auto p-4 lg:p-10 scroll-smooth">
          <Outlet context={{ showBalances }} />
        </main>
      </div>

      {/* MOBILE OVERLAY */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
};

const DashboardNavItem = ({ icon, label, active, onClick }) => (
  <button
    onClick={onClick}
    className={`w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl transition-all duration-300 group ${
      active
        ? "bg-emerald-600 text-white font-bold shadow-xl shadow-emerald-900/40"
        : "text-slate-400 hover:text-white hover:bg-white/5"
    }`}
  >
    <span
      className={`transition-colors duration-300 ${active ? "text-white" : "text-slate-500 group-hover:text-emerald-400"}`}
    >
      {icon}
    </span>
    <span className="text-sm font-medium tracking-wide">{label}</span>
  </button>
);

export default DashboardLayout;
