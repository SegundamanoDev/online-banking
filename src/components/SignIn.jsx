import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../services/authSlice";
import { useLoginMutation } from "../services/api"; // Import the hook
import {
  ShieldCheck,
  Lock,
  UserCheck,
  ArrowRight,
  Eye,
  EyeOff,
  Fingerprint,
  Loader2,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // RTK Query Mutation Hook
  const [login, { isLoading }] = useLoginMutation();

  const [is2FA, setIs2FA] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    customerId: "",
    password: "",
    twoFactorCode: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Execute the mutation
      const result = await login(formData).unwrap();

      if (result.twoFactorRequired) {
        setIs2FA(true);
      } else {
        // Handle successful login
        dispatch(
          setCredentials({
            user: result.user,
            token: result.token,
          }),
        );

        // Redirect based on role
        if (result.user.role === "admin") {
          navigate("/admin/dashboard");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (err) {
      // RTK Query puts the backend error in err.data
      alert(
        err?.data?.message ||
          "Authentication Failed. Please check your credentials.",
      );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col md:flex-row">
      {/* Visual Branding Section */}
      <div className="hidden md:flex md:w-1/2 bg-slate-900 relative items-center justify-center p-12">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80')] bg-cover" />
        <div className="relative z-10 max-w-md">
          <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mb-8 shadow-2xl">
            <ShieldCheck className="text-white" size={32} />
          </div>
          <h2 className="text-4xl font-black text-white italic leading-tight mb-6">
            United Capital Vault.
          </h2>
          <p className="text-slate-400 text-lg font-medium">
            Access your institutional assets via encrypted gateway.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-10">
          <header>
            <h1 className="text-3xl font-black text-slate-900 italic tracking-tight">
              {is2FA ? "Identity Verification" : "Secure Log On"}
            </h1>
            <p className="text-slate-500 font-medium mt-2">
              Enter your United Capital credentials.
            </p>
          </header>

          <form onSubmit={handleSubmit} className="space-y-6">
            {!is2FA ? (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Digital ID
                  </label>
                  <div className="relative">
                    <UserCheck
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      type="text"
                      name="customerId"
                      required
                      placeholder="UC-00000000"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Access Code
                  </label>
                  <div className="relative">
                    <Lock
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                      size={18}
                    />
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-12 focus:ring-2 focus:ring-emerald-500/20 outline-none"
                      onChange={handleInputChange}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="space-y-4 text-center">
                <Fingerprint
                  size={48}
                  className="text-emerald-500 mx-auto mb-4"
                />
                <p className="text-sm font-bold text-slate-600">
                  Enter 6-digit Security Pin
                </p>
                <input
                  type="text"
                  name="twoFactorCode"
                  required
                  maxLength="6"
                  placeholder="••••••"
                  className="w-full bg-slate-50 border text-center text-3xl font-black py-5 rounded-2xl tracking-[0.5em] outline-none border-emerald-100"
                  onChange={handleInputChange}
                />
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-slate-900 text-white font-black py-4 rounded-2xl hover:bg-emerald-600 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-xl shadow-slate-200"
            >
              {isLoading ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                <>
                  {is2FA ? "VERIFY IDENTITY" : "AUTHORIZE ACCESS"}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          <footer className="text-center pt-8 border-t border-slate-50">
            <p className="text-slate-500 font-medium text-sm">
              New to United Capital?{" "}
              <Link
                to="/zondo/signup"
                className="text-emerald-600 font-black hover:underline"
              >
                Register Profile
              </Link>
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Login;
