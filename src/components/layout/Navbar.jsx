import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose, AiOutlineGlobal } from "react-icons/ai";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenu(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Personal", path: "/about" },
    { name: "Business", path: "/business" },
    { name: "Rates", path: "/pricing" },
    { name: "Security", path: "/security" },
    { name: "Help", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled
          ? "bg-app-bg/90 backdrop-blur-xl py-4 border-b border-app-border shadow-xl"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* LOGO (Acts as Home too) */}
        <Link
          to="/"
          className="text-2xl font-black text-bank-accent tracking-tighter flex items-center gap-2 group"
        >
          <AiOutlineGlobal className="text-3xl group-hover:rotate-180 transition-transform duration-700" />
          <span>
            GEMINI<span className="text-app-text">BANK.</span>
          </span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-10 font-bold text-xs uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-all duration-300 relative group ${
                location.pathname === link.path
                  ? "text-bank-accent"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              {link.name}
              {/* Active Indicator Underline */}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-bank-accent"
                />
              )}
            </Link>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="hidden lg:flex items-center gap-6">
          <Link
            to="/login"
            className="font-bold text-xs uppercase tracking-widest hover:text-bank-accent transition-colors"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-bank-accent text-white px-8 py-3 rounded-full shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all active:scale-95 font-bold text-xs uppercase"
          >
            Open Account
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden text-3xl text-bank-accent"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-full bg-app-card border-b border-app-border lg:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 gap-6 font-bold text-lg">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`pb-2 ${location.pathname === link.path ? "text-bank-accent" : "opacity-60"}`}
                >
                  {link.name}
                </Link>
              ))}
              <hr className="border-app-border" />
              <Link
                to="/login"
                className="text-center py-4 rounded-2xl border border-app-border"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-center py-4 rounded-2xl bg-bank-accent text-white"
              >
                Open Account
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
