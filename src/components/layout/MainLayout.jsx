import React, { useState } from "react";
import { Outlet, Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import {
  AiOutlineDashboard,
  AiOutlineTransaction,
  AiOutlineSwap,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <AiOutlineDashboard /> },
    { name: "Transfer", path: "/transfer", icon: <AiOutlineSwap /> },
    { name: "History", path: "/history", icon: <AiOutlineTransaction /> },
    { name: "Settings", path: "/settings", icon: <AiOutlineSetting /> },
  ];

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-app-bg text-app-text flex">
      {/* --- SIDEBAR --- */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-app-card border-r border-app-border transform transition-transform duration-300 ease-in-out
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-bank-accent tracking-tight">
            Zondo Bank
          </h1>
        </div>

        <nav className="mt-6 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium
                ${
                  location.pathname === item.path
                    ? "bg-bank-accent text-white shadow-lg shadow-blue-500/20"
                    : "hover:bg-app-bg opacity-70 hover:opacity-100"
                }
              `}
            >
              <span className="text-xl">{item.icon}</span>
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 w-full px-4">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-4 py-3 w-full text-bank-danger hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-all font-medium"
          >
            <AiOutlineLogout className="text-xl" />
            Logout
          </button>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 lg:ml-64 min-h-screen transition-all">
        {/* Topbar */}
        <header className="h-20 bg-app-card border-b border-app-border flex items-center justify-between px-8 sticky top-0 z-40">
          <button
            className="lg:hidden text-2xl"
            onClick={() => setSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>

          <div className="hidden lg:block text-sm font-medium opacity-60">
            Welcome back,{" "}
            <span className="text-app-text font-bold opacity-100">
              {user?.firstName}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-bank-accent flex items-center justify-center text-white font-bold uppercase">
              {user?.firstName?.charAt(0)}
            </div>
          </div>
        </header>

        {/* Dynamic Page Content */}
        <div className="p-8">
          <Outlet />
        </div>
      </main>

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default MainLayout;
