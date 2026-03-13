import React from "react";
import {
  ShieldCheck,
  Plane,
  Smartphone,
  Car,
  Heart,
  Umbrella,
  ChevronRight,
  FileText,
  PhoneCall,
} from "lucide-react";

const DashboardInsurance = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* HERO SECTION */}
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2.5rem] p-10 lg:p-14 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-blue-500/20 rounded-lg backdrop-blur-md">
              <ShieldCheck size={24} className="text-blue-400" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-300">
              Premier Protection
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black italic tracking-tighter mb-6">
            You're covered, <br />
            Everywhere.
          </h2>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed mb-8">
            As a Premier member, your worldwide travel, mobile phone, and
            purchase protection are already active. No registration required.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-gray-100 transition-all shadow-lg">
              View Policy PDF
            </button>
            <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all">
              <PhoneCall size={18} /> Emergency Help
            </button>
          </div>
        </div>

        {/* Decorative Shield Watermark */}
        <ShieldCheck
          size={400}
          className="absolute -right-20 -bottom-20 text-white/5 rotate-12"
        />
      </div>

      {/* ACTIVE COVERAGE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <InsuranceCard
          icon={<Plane size={24} />}
          title="Worldwide Travel"
          status="Active"
          sub="Multi-trip coverage for you & family"
        />
        <InsuranceCard
          icon={<Smartphone size={24} />}
          title="Mobile Protection"
          status="Active"
          sub="Theft, accidental damage & loss"
        />
        <InsuranceCard
          icon={<Car size={24} />}
          title="Breakdown Cover"
          status="Active"
          sub="Roadside assistance across Europe"
        />
        <InsuranceCard
          icon={<Heart size={24} />}
          title="Medical Expenses"
          status="Up to £10m"
          sub="Emergency treatment while abroad"
        />
        <InsuranceCard
          icon={<Umbrella size={24} />}
          title="Purchase Protection"
          status="Active"
          sub="Cover for new items up to 90 days"
        />

        {/* ADD NEW POLICY SLOT */}
        <button className="p-8 rounded-[2rem] border-2 border-dashed border-gray-200 flex flex-col items-center justify-center text-center group hover:border-red-200 transition-all">
          <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-4 group-hover:bg-red-50 group-hover:text-[#db0011] transition-colors">
            <FileText
              size={24}
              className="text-gray-400 group-hover:text-[#db0011]"
            />
          </div>
          <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest">
            Add Other Insurance
          </h4>
          <p className="text-xs text-gray-400 mt-1">
            Life, Home, or Pet coverage
          </p>
        </button>
      </div>

      {/* RECENT CLAIMS / DOCUMENTS SECTION */}
      <div className="bg-white rounded-[2rem] border border-gray-100 p-8 shadow-sm">
        <h3 className="text-lg font-black text-slate-900 mb-6 italic">
          Recent Activity
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl border border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900">
                  Travel Insurance Renewal
                </p>
                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">
                  Completed • 12 Feb 2026
                </p>
              </div>
            </div>
            <button className="text-xs font-bold text-[#db0011] hover:underline uppercase tracking-widest">
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const InsuranceCard = ({ icon, title, status, sub }) => (
  <div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
    <div className="relative z-10">
      <div className="w-14 h-14 bg-slate-50 text-slate-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#db0011] group-hover:text-white transition-all duration-500">
        {icon}
      </div>
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-black text-slate-900 text-lg italic">{title}</h3>
        <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-1 rounded-md uppercase tracking-tighter">
          {status}
        </span>
      </div>
      <p className="text-xs text-gray-400 font-medium leading-relaxed">{sub}</p>

      <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-[#db0011] transition-colors">
        View Details <ChevronRight size={14} />
      </div>
    </div>
  </div>
);

export default DashboardInsurance;
