import React from "react";
import { ExternalLink, Shield } from "lucide-react";

const ComplianceFooter = () => {
  return (
    <section className="bg-slate-50 border-t border-slate-200 py-16 mt-20">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32">
        <div className="space-y-10 text-[13px] text-slate-500 leading-relaxed">
          {/* Brand Identity / FDIC Badge */}
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-slate-900 p-2 rounded-lg">
              <Shield className="text-emerald-400" size={18} />
            </div>
            <span className="font-black text-slate-900 tracking-tighter text-lg uppercase">
              United Capital Bank
            </span>
          </div>

          {/* FDIC Protection Section */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px]">
              Deposit Insurance & Protection
            </h3>
            <p>
              United Capital Bank is a Member of the{" "}
              <strong className="text-slate-900">FDIC</strong>. Your eligible
              deposits are protected up to
              <strong className="text-slate-900"> $250,000</strong> per
              depositor, for each account ownership category. Joint accounts are
              protected up to
              <strong className="text-slate-900"> $500,000</strong>.
            </p>
            <p>
              Additional information regarding the
              <a
                href="#"
                className="text-slate-900 underline font-semibold mx-1 inline-flex items-center hover:text-emerald-600 transition-colors"
              >
                Electronic Fund Transfer Act{" "}
                <ExternalLink size={12} className="ml-1" />
              </a>
              and your rights regarding unauthorized transactions can be found
              in our Digital Banking Agreement.
            </p>
          </div>

          {/* Regulatory & Scams Section */}
          <div className="space-y-4 border-t border-slate-200 pt-8">
            <h3 className="font-bold text-slate-900 uppercase tracking-widest text-[11px]">
              Security & Consumer Fraud Disclosure
            </h3>
            <p>
              United Capital Bank will never ask for your password, PIN, or
              one-time login code via text or email. Be aware of "Phishing" or
              "Spoofing" scams where fraudsters pose as bank employees to gain
              access to your wire transfer or Zelle® credentials.
            </p>
            <p>
              If you suspect fraudulent activity, please contact our 24/7
              US-based Fraud Department immediately via the
              <a
                href="#"
                className="text-slate-900 underline font-semibold mx-1 hover:text-emerald-600"
              >
                Security Center
              </a>
              within the mobile app.
            </p>
          </div>

          {/* Footnotes Section */}
          <div
            id="legal-notes"
            className="text-[11px] pt-8 text-slate-400 border-t border-slate-200"
          >
            <p className="font-bold mb-2 uppercase tracking-tighter text-slate-500">
              Legal Disclosures
            </p>
            <div className="space-y-2">
              <p>
                1.{" "}
                <strong className="text-slate-500">
                  United Capital Infinite Card:
                </strong>{" "}
                Variable APRs range from 18.24% to 29.24% based on
                creditworthiness. Offers subject to credit approval. Rewards
                points do not expire as long as your account remains open and in
                good standing.
              </p>
              <p>
                2.{" "}
                <strong className="text-slate-500">
                  No-Fee Business Checking:
                </strong>{" "}
                Refers to standard ACH transfers and mobile deposits. Fees may
                apply for domestic and international wire transfers, stop
                payments, and overdrafts. See our
                <a href="#" className="underline ml-1 hover:text-emerald-600">
                  Standard Service Price List
                </a>{" "}
                for more details.
              </p>
              <p className="italic mt-4">
                United Capital Bank, N.A. Member FDIC. Equal Housing Lender 🏠.
                © 2026 United Capital Financial Services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceFooter;
