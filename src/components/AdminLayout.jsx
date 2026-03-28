import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import {
  ShieldAlert,
  Users,
  Landmark,
  Activity,
  LogOut,
  Menu,
  X,
  Bell,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";

const AdminLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      name: "Command Center",
      path: "/admin/dashboard",
      icon: <Activity size={20} />,
    },
    {
      name: "Client Registry",
      path: "/admin/users",
      icon: <Users size={20} />,
    },
    {
      name: "Loan Underwriting",
      path: "/admin/loans",
      icon: <ShieldCheck size={20} />,
    },
    {
      name: "Pending Wires",
      path: "/admin/wires",
      icon: <ShieldAlert size={20} />,
    },
    {
      name: "System Ledger",
      path: "/admin/ledger",
      icon: <Landmark size={20} />,
    },
  ];

  const handleLogout = () => {
    // Clear admin session logic here
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex">
      {/* SIDEBAR - DESKTOP */}
      <aside className="hidden lg:flex flex-col w-72 bg-slate-900 text-white p-6 sticky top-0 h-screen">
        <div className="mb-10 px-2">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <Landmark size={18} className="text-white" />
            </div>
            <span className="font-black tracking-tighter text-xl uppercase italic">
              Zondo<span className="text-emerald-500">Ops</span>
            </span>
          </div>
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
            Institutional Access
          </p>
        </div>

        <nav className="flex-1 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center justify-between p-4 rounded-2xl transition-all group ${
                location.pathname === item.path
                  ? "bg-emerald-600 text-white shadow-lg shadow-emerald-900/20"
                  : "text-slate-400 hover:bg-slate-800 hover:text-white"
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-xs font-black uppercase tracking-widest">
                  {item.name}
                </span>
              </div>
              <ChevronRight
                size={14}
                className={
                  location.pathname === item.path
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }
              />
            </Link>
          ))}
        </nav>

        <button
          onClick={handleLogout}
          className="mt-auto flex items-center gap-3 p-4 text-slate-500 hover:text-red-400 transition-colors text-xs font-black uppercase tracking-widest"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0">
        {/* TOPBAR */}
        <header className="h-20 bg-white border-b border-slate-100 flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-slate-900"
            >
              <Menu size={24} />
            </button>
            <span className="font-black text-sm uppercase italic">
              Zondo Ops
            </span>
          </div>

          <div className="hidden lg:block text-[10px] font-black text-slate-400 uppercase tracking-widest">
            Server Time: {new Date().toLocaleTimeString()} • Node:{" "}
            <span className="text-emerald-500">Primary_US_East</span>
          </div>

          <div className="flex items-center gap-6">
            <button className="relative text-slate-400 hover:text-slate-900 transition-colors">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-black text-slate-900 uppercase">
                  Sys_Admin_01
                </p>
                <p className="text-[9px] font-bold text-emerald-500 uppercase">
                  Superuser
                </p>
              </div>
              <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center font-black text-slate-400 text-xs">
                AD
              </div>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <div className="p-4 lg:p-10">
          <Outlet />
        </div>
      </main>

      {/* MOBILE OVERLAY MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 bottom-0 w-80 bg-slate-900 p-8 flex flex-col animate-in slide-in-from-left duration-300">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="self-end text-slate-400 mb-8"
            >
              <X size={24} />
            </button>
            {/* Same menu items as above but for mobile */}
            <nav className="space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-4 text-white font-black uppercase text-sm tracking-widest"
                >
                  {item.icon} {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminLayout;
