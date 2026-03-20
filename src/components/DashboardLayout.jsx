import React, { useState, useEffect } from "react";
import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../src/services/authSlice";
import { useGetProfileQuery } from "../../src/services/api";
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
  Loader2,
  LogOut,
  Landmark,
} from "lucide-react";

const DashboardLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBalances, setShowBalances] = useState(true);
  const [greeting, setGreeting] = useState("");

  // Fetch User Data
  const { data: profileData, isLoading } = useGetProfileQuery();

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
    return `${user.firstName?.charAt(0) || ""}${user.lastName?.charAt(0) || ""}`.toUpperCase();
  };

  const handleLogout = () => {
    dispatch(logout()); // Clears Redux state and LocalStorage
    navigate("/login");
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
            <div className="flex items-center gap-2">
              <Landmark
                className="text-emerald-500 group-hover:scale-110 transition-transform"
                size={24}
              />

              <span className="font-black tracking-[0.25em] text-sm text-white group-hover:text-emerald-400 transition-colors">
                UNITED CAPITAL
              </span>
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
            icon={<CreditCard size={20} />}
            label="Cards"
            active={isActive("/dashboard/cards")}
            onClick={() => handleNavigation("/dashboard/cards")}
          />

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl text-red-400 hover:text-white hover:bg-red-500/10 transition-all duration-300 mt-4 group"
          >
            <LogOut
              size={20}
              className="group-hover:rotate-12 transition-transform"
            />
            <span className="text-sm font-medium tracking-wide">
              Secure Logout
            </span>
          </button>
        </nav>
      </aside>

      {/* --- CONTENT AREA --- */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-6 lg:px-10 shrink-0 sticky top-0 z-30">
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
              <h1 className="text-base lg:text-lg font-black text-slate-900 leading-none tracking-tight uppercase">
                {isLoading
                  ? "Loading..."
                  : `${profileData?.user?.firstName || ""} ${profileData?.user?.lastName || ""}`}
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => setShowBalances(!showBalances)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-[10px] font-black text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-all tracking-widest"
            >
              {showBalances ? <EyeOff size={16} /> : <Eye size={16} />}
              {showBalances ? "HIDE" : "SHOW"}
            </button>

            <button className="relative p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all">
              <Bell size={22} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-white"></span>
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-100 ml-2">
              <div className="hidden md:block text-right">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">
                  UCB Elite
                </p>
                <p className="text-[11px] font-bold text-emerald-600">Secure</p>
              </div>
              <div className="w-10 h-10 lg:w-11 lg:h-11 bg-slate-900 text-white rounded-2xl flex items-center justify-center text-xs lg:text-sm font-black shadow-lg shadow-slate-200 hover:bg-emerald-600 transition-all cursor-pointer overflow-hidden">
                {isLoading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  getInitials(profileData?.user)
                )}
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-4 lg:p-10 scroll-smooth">
          <Outlet
            context={{
              showBalances,
              user: profileData?.user,
              account: profileData?.account,
            }}
          />
        </main>
      </div>

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
      className={`transition-colors duration-300 ${
        active ? "text-white" : "text-slate-500 group-hover:text-emerald-400"
      }`}
    >
      {icon}
    </span>
    <span className="text-sm font-medium tracking-wide">{label}</span>
  </button>
);

export default DashboardLayout;
