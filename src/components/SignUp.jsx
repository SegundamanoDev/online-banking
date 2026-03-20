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

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    securityPin: "",
  });
  console.log(formData);

  const [register, { isLoading }] = useRegisterMutation();

  // Auto-hide snackbar after 5 seconds
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
      const result = await register(formData).unwrap();
      setCustomerId(result.customerId);
      localStorage.setItem("token", result.token);
      setIsSuccess(true);
    } catch (err) {
      // Show Snackbar instead of alert
      setNotification({
        show: true,
        message:
          err.data?.message || "Protocol Error: Unable to provision profile.",
        type: "error",
      });
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-10 text-center space-y-6 border border-emerald-100 animate-in zoom-in duration-500">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-black text-slate-900 italic">
            Profile Provisioned
          </h2>
          <p className="text-slate-500 text-sm">
            Your institutional account is ready. Please save your Digital ID
            securely.
          </p>
          <div className="bg-slate-900 text-white p-6 rounded-2xl">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-2">
              Your Digital ID
            </p>
            <p className="text-3xl font-mono font-black text-emerald-400 tracking-tighter">
              {customerId}
            </p>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full bg-emerald-600 text-white font-black py-4 rounded-2xl hover:bg-slate-900 transition-all active:scale-95"
          >
            ENTER THE VAULT
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6 flex items-center justify-center relative overflow-hidden">
      {/* SNACKBAR / TOAST */}
      <div
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 transform 
        ${notification.show ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0 pointer-events-none"}`}
      >
        <div
          className={`flex items-center gap-3 px-6 py-4 rounded-2xl shadow-2xl border min-w-[320px]
          ${notification.type === "error" ? "bg-white border-red-100 text-red-600" : "bg-white border-emerald-100 text-emerald-600"}`}
        >
          {notification.type === "error" ? (
            <XCircle size={20} />
          ) : (
            <CheckCircle size={20} />
          )}
          <p className="text-sm font-bold italic flex-1">
            {notification.message}
          </p>
          <button
            onClick={() => setNotification({ ...notification, show: false })}
          >
            <X size={18} className="text-slate-400 hover:text-slate-600" />
          </button>
        </div>
      </div>

      <div className="max-w-4xl w-full bg-white rounded-[2.5rem] shadow-xl overflow-hidden flex flex-col md:flex-row border border-slate-100">
        {/* Left Side Info */}
        <div className="md:w-1/3 bg-slate-900 p-10 text-white flex flex-col justify-between">
          <div>
            <ShieldAlert className="text-emerald-500 mb-6" size={40} />
            <h2 className="text-2xl font-black italic mb-4">
              Institutional Onboarding
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Complete the form to generate your United Capital Digital ID and
              Treasury Account.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex gap-3 items-center text-[10px] font-bold text-slate-500 tracking-widest">
              <div className="w-2 h-2 rounded-full bg-emerald-500" /> 256-BIT
              ENCRYPTION
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="flex-1 p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                  First Name
                </label>
                <input
                  name="firstName"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border text-center text-3xl font-black py-5 rounded-2xl tracking-[0.5em] outline-none border-emerald-100 text-slate-900"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                  Last Name
                </label>
                <input
                  name="lastName"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border text-center text-3xl font-black py-5 rounded-2xl tracking-[0.5em] outline-none border-emerald-100 text-slate-900"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                Corporate Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                  size={16}
                />
                <input
                  name="email"
                  type="email"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 pl-12 pr-4 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                  Access Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase text-slate-400 ml-1">
                  Security PIN (6-Digit)
                </label>
                <input
                  name="securityPin"
                  type="password"
                  maxLength="6"
                  required
                  onChange={handleInputChange}
                  className="w-full bg-slate-50 border border-slate-100 rounded-xl py-3 px-4 outline-none text-center tracking-[0.5em]"
                  placeholder="••••••"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 mt-4 shadow-lg disabled:opacity-50 active:scale-[0.98]"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  CREATE PROFILE <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <p className="text-center mt-6 text-sm text-slate-500">
            Already have a Digital ID?{" "}
            <Link
              to="/login"
              className="text-emerald-600 font-bold hover:underline italic"
            >
              Log on
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
