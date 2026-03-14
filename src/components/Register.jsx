import React, { useState } from "react";
import {
  ChevronDown,
  ArrowRight,
  Smartphone,
  ShieldCheck,
  HelpCircle,
  QrCode,
} from "lucide-react";

const Register = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 antialiased">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column (Main Content) - 8/12 columns */}
          <div className="lg:col-span-8 space-y-16">
            {/* Header Section */}
            <header className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-6 bg-emerald-500 rounded-full" />
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                  Security First
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight italic tracking-tight">
                Digital Banking Setup
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed font-medium max-w-2xl">
                Activate your United Capital accounts for secure 24/7 access.
                The most efficient way to register is through our mobile
                application.
              </p>
            </header>

            {/* App Promotion Card */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white flex flex-col md:flex-row gap-12 items-center shadow-2xl overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />

              <div className="flex-1 space-y-6 z-10">
                <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-400 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Recommended
                </div>
                <h2 className="text-3xl font-black italic">
                  Mobile Registration
                </h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Register in under 3 minutes. Our app uses advanced biometric
                  verification to secure your profile instantly.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <button className="bg-white text-slate-900 px-8 py-3 rounded-full font-black text-sm flex items-center group transition-all hover:bg-emerald-500 hover:text-white">
                    Get the App{" "}
                    <ArrowRight
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      size={18}
                    />
                  </button>
                  <button className="border border-slate-700 text-white px-8 py-3 rounded-full font-black text-sm transition-all hover:bg-slate-800">
                    View Requirements
                  </button>
                </div>
              </div>

              <div className="hidden md:flex flex-col items-center gap-4 z-10 bg-white/5 p-6 rounded-[2rem] border border-white/10 backdrop-blur-sm">
                <div className="bg-white p-4 rounded-2xl">
                  <QrCode size={100} className="text-slate-900" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  Scan to download
                </p>
              </div>
            </div>

            {/* Help & Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="p-8 border border-slate-100 rounded-[2rem] hover:shadow-lg transition-all group">
                <HelpCircle
                  className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-xl font-black mb-3 italic">
                  Live Assistance
                </h3>
                <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                  Need guidance through the setup process? Connect with our
                  digital concierge team.
                </p>
                <a
                  href="#"
                  className="text-slate-900 font-black border-b-2 border-emerald-500 pb-1 flex items-center w-fit group"
                >
                  Contact Support{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </section>

              <section className="p-8 border border-slate-100 rounded-[2rem] hover:shadow-lg transition-all group">
                <ShieldCheck
                  className="text-emerald-500 mb-4 group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="text-xl font-black mb-3 italic">
                  Account Recovery
                </h3>
                <p className="text-slate-500 font-medium mb-6 leading-relaxed">
                  Forgotten credentials or locked out? Recover access using our
                  secure identity tool.
                </p>
                <button className="text-slate-900 font-black border-b-2 border-emerald-500 pb-1 flex items-center group">
                  Recovery Portal{" "}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </section>
            </div>

            {/* Information Accordion */}
            <section className="pt-8">
              <h2 className="text-3xl font-black italic tracking-tight mb-10">
                Frequently Asked
              </h2>
              <div className="space-y-4">
                <AccordionItem
                  title="Biometric & PIN Authentication"
                  isOpen={openAccordion === 1}
                  onClick={() => toggleAccordion(1)}
                >
                  During mobile setup, you'll establish a 6-digit Security PIN
                  and optional biometric (FaceID/TouchID) access. This
                  hardware-encrypted credential provides instant, secure
                  authorization for all future transactions.
                </AccordionItem>

                <AccordionItem
                  title="Telephone Verification Codes"
                  isOpen={openAccordion === 2}
                  onClick={() => toggleAccordion(2)}
                >
                  Your Telephone Security PIN (TSP) is a separate
                  institutional-grade code used to verify your identity during
                  secure phone consultations. If misplaced, this can be reset
                  through our encrypted web portal or at any branch office.
                </AccordionItem>

                <AccordionItem
                  title="Unified Account Management"
                  isOpen={openAccordion === 3}
                  onClick={() => toggleAccordion(3)}
                >
                  <ul className="space-y-3 font-medium text-slate-600">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />{" "}
                      Real-time institutional liquidity reporting
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />{" "}
                      Integrated cross-border payment gateway
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />{" "}
                      Digital statement archives (PDF & CSV)
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2" />{" "}
                      Priority multi-channel support access
                    </li>
                  </ul>
                </AccordionItem>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar) - 4/12 columns */}
          <aside className="lg:col-span-4 space-y-12">
            <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 sticky top-12">
              <h3 className="text-2xl font-black italic mb-8 border-b border-slate-200 pb-4">
                Ecosystem
              </h3>
              <div className="space-y-8">
                <SidebarLink
                  title="Treasury Management"
                  desc="Centralized control for high-volume commercial flows."
                />
                <SidebarLink
                  title="Global Assets"
                  desc="Manage international holdings and FX exposure."
                />
                <SidebarLink
                  title="Security Protocol"
                  desc="Our multi-layer encryption and fraud prevention suite."
                />
              </div>

              <div className="mt-12 p-6 bg-emerald-600 rounded-2xl text-white">
                <Smartphone className="mb-4" />
                <h4 className="font-black italic text-lg mb-2">
                  Banking on the go.
                </h4>
                <p className="text-emerald-100 text-sm mb-4 leading-relaxed">
                  Manage assets and authorize payments from any device,
                  anywhere.
                </p>
                <button className="text-xs font-black uppercase tracking-widest border-b border-white pb-1">
                  Download Guide
                </button>
              </div>
            </div>
          </aside>
        </div>

        {/* Footer Notes */}
        <footer className="mt-24 pt-12 border-t border-slate-100">
          <h5 className="text-slate-900 font-black italic mb-6">
            Terms & Disclosure
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-slate-400 text-xs font-medium leading-relaxed">
            <p>
              1. Digital registration implies consent to electronic-only
              delivery for selected tax documents and account notices. Opt-out
              is available post-setup.
            </p>
            <p>
              2. Application compatibility varies by region and operating
              system. Standard data rates apply. Biometric features require
              supported hardware.
            </p>
          </div>
        </footer>
      </main>

      <div className="w-full h-2 bg-emerald-500" />
    </div>
  );
};

// Sub-components
const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div
    className={`border-b border-slate-100 transition-all ${isOpen ? "bg-slate-50 rounded-2xl px-6" : "px-0"}`}
  >
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-6 text-left"
    >
      <span
        className={`text-xl font-black italic transition-colors ${isOpen ? "text-emerald-600" : "text-slate-900"}`}
      >
        {title}
      </span>
      <ChevronDown
        className={`transform transition-transform duration-300 ${isOpen ? "rotate-180 text-emerald-600" : "text-slate-400"}`}
      />
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-8" : "max-h-0"}`}
    >
      <div className="text-slate-500 font-medium leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const SidebarLink = ({ title, desc }) => (
  <div className="group cursor-pointer">
    <h4 className="font-black text-slate-900 group-hover:text-emerald-600 transition-colors flex items-center italic">
      {title}{" "}
      <ArrowRight
        size={14}
        className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
      />
    </h4>
    <p className="mt-1 text-xs text-slate-400 font-medium">{desc}</p>
  </div>
);

export default Register;
