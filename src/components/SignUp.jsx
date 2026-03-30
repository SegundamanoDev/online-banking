import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../services/api";
import {
  ShieldAlert,
  Mail,
  Lock,
  Key,
  ArrowRight,
  CheckCircle,
  Loader2,
  XCircle,
  X,
  Fingerprint,
  UserPlus,
  ShieldCheck,
} from "lucide-react";

const SignUp = () => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [customerId, setCustomerId] = useState("");
  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "error",
  });

  // Updated to match Backend expectations: No securityPin here
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [register, { isLoading }] = useRegisterMutation();

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(
        () => setNotification({ ...notification, show: false }),
        5000,
      );
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Result now contains customerId and isPinSet: false
      const result = await register(formData).unwrap();
      setCustomerId(result.user.customerId);
      localStorage.setItem("token", result.token);
      setIsSuccess(true);
    } catch (err) {
      setNotification({
        show: true,
        message:
          err.data?.message ||
          "KYC Protocol Failure: Unable to provision profile.",
        type: "error",
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl p-12 text-center space-y-8 border border-slate-100 animate-in zoom-in duration-700">
          <div className="w-24 h-24 bg-emerald-50 text-emerald-600 rounded-[2rem] flex items-center justify-center mx-auto shadow-inner">
            <ShieldCheck size={48} />
          </div>

          <div className="space-y-2">
            <h2 className="text-3xl font-black text-slate-900 italic uppercase tracking-tighter">
              Identity Verified
            </h2>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest leading-relaxed">
              Institutional Profile Provisioned. Your Digital ID is required for
              all future vault access.
            </p>
          </div>

          <div className="bg-slate-900 rounded-[2rem] p-8 space-y-3 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Fingerprint size={80} className="text-white" />
            </div>
            <p className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">
              Assigned Digital ID
            </p>
            <p className="text-4xl font-mono font-black text-white tracking-tighter">
              {customerId}
            </p>
          </div>

          <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start gap-3 text-left">
            <ShieldAlert size={16} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-[9px] font-bold text-amber-800 uppercase leading-normal">
              <b>Mandatory:</b> You must initialize your 4-digit Transaction PIN
              in the Security Vault upon entry.
            </p>
          </div>

          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-emerald-600 text-white text-xs font-black py-6 rounded-2xl hover:bg-slate-900 transition-all shadow-xl shadow-emerald-100 uppercase tracking-widest"
          >
            Access Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 flex items-center justify-center relative overflow-hidden">
      {/* NOTIFICATION */}
      <div
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform ${notification.show ? "translate-y-0 opacity-100" : "-translate-y-24 opacity-0 pointer-events-none"}`}
      >
        <div className="flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl bg-white border border-red-100 text-red-600 min-w-[340px]">
          <XCircle size={20} className="shrink-0" />
          <p className="text-[11px] font-black uppercase tracking-tighter flex-1">
            {notification.message}
          </p>
          <button
            onClick={() => setNotification({ ...notification, show: false })}
          >
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="max-w-5xl w-full bg-white rounded-[4rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
        {/* LEFT PANEL */}
        <div className="md:w-[40%] bg-slate-900 p-12 text-white flex flex-col justify-between">
          <div>
            <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-2xl flex items-center justify-center mb-8">
              <UserPlus size={32} />
            </div>
            <h2 className="text-4xl font-black italic mb-6 leading-tight uppercase tracking-tighter">
              Institutional <br /> Onboarding
            </h2>
            <p className="text-slate-400 text-xs font-medium leading-relaxed">
              Establish your footprint in the United Capital Private Wealth
              Network. Complete the KYC identification to generate your unique
              Treasury ID.
            </p>
          </div>

          <div className="space-y-4 pt-12 border-t border-slate-800">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500">
                256-BIT KYC ENCRYPTION
              </p>
            </div>
          </div>
        </div>

        {/* FORM PANEL */}
        <div className="flex-1 p-12 lg:p-16">
          <header className="mb-12">
            <h3 className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.3em] mb-2">
              Identification Module
            </h3>
            <h1 className="text-2xl font-black text-slate-900 uppercase italic">
              Digital Profile Provisioning
            </h1>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase text-slate-400 ml-2 tracking-widest">
                  Legal First Name
                </label>
                <input
                  name="firstName"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl px-6 py-4 text-sm font-bold outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase text-slate-400 ml-2 tracking-widest">
                  Legal Last Name
                </label>
                <input
                  name="lastName"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl px-6 py-4 text-sm font-bold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase text-slate-400 ml-2 tracking-widest">
                Corporate Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  name="email"
                  type="email"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-sm font-bold outline-none transition-all"
                  placeholder="verify@institution.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase text-slate-400 ml-2 tracking-widest">
                Access Password
              </label>
              <div className="relative">
                <Key
                  className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300"
                  size={18}
                />
                <input
                  name="password"
                  type="password"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border-2 border-transparent focus:border-emerald-500/20 focus:bg-white rounded-2xl py-4 pl-14 pr-6 text-sm font-bold outline-none transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white font-black py-6 rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-3 mt-4 shadow-xl shadow-slate-200 disabled:opacity-50 uppercase text-[10px] tracking-[0.2em]"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  Verify & Create Profile <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-10 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
            Existing credential holder?{" "}
            <Link
              to="/login"
              className="text-emerald-600 hover:text-slate-900 transition-colors ml-2 border-b border-emerald-100 pb-0.5"
            >
              Secure Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
