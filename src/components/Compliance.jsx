import React from "react";
import { ExternalLink } from "lucide-react";

const ComplianceFooter = () => {
  return (
    <section className="bg-[#f4f4f4] border-t border-gray-200 py-10 mt-12">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <div className="space-y-6 text-[14px] text-gray-600 leading-relaxed">
          {/* SQI Information */}
          <p>
            The requirement to publish the Financial Conduct Authority Service
            Quality Information for personal current accounts can be found on
            the{" "}
            <a
              href="#"
              className="text-[#333] underline font-medium hover:text-[#db0011]"
            >
              SQI page
            </a>
            .
          </p>

          {/* APP Scams Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-800">
              Authorised push payment (APP) scams rankings
            </h3>
            <p>
              Authorised push payment (APP) scams happen when someone is tricked
              into transferring money into a fraudster's bank account.
              Information about HSBC UK and first direct performance prior to
              the introduction of the reimbursement requirement in October 2024
              can be found in the PSR's latest APP Scams Performance Report
              published in February 2026.
            </p>
            <p>
              You can read the full report by visiting the{" "}
              <a
                href="#"
                className="text-[#333] underline font-medium inline-flex items-center hover:text-[#db0011]"
              >
                PSR website <ExternalLink size={12} className="ml-1" />
              </a>
              .
            </p>
            <p>
              If you are concerned about APP scams you can find out more on our{" "}
              <a
                href="#"
                className="text-[#333] underline font-medium hover:text-[#db0011]"
              >
                APP scams page
              </a>
              .
            </p>
          </div>

          {/* FSCS Protection Section */}
          <div className="space-y-3 border-t border-gray-300 pt-6">
            <p>
              Your eligible deposits with HSBC UK Bank plc are protected up to a
              total of <strong className="text-gray-800">£120,000</strong>, or
              up to <strong className="text-gray-800">£240,000</strong> for
              joint accounts, by the{" "}
              <a
                href="#"
                className="text-[#333] underline font-medium inline-flex items-center hover:text-[#db0011]"
              >
                Financial Services Compensation Scheme{" "}
                <ExternalLink size={12} className="ml-1" />
              </a>
              , the UK's deposit guarantee scheme.
            </p>
            <p>
              This limit is applied to the total of any deposits you have with
              the following: HSBC UK Bank plc, HSBC Private Banking, and first
              direct. Any total deposits you hold above the limit between these
              brands are unlikely to be covered.
            </p>
            <a
              href="#"
              className="text-[#333] font-bold border-b-2 border-[#db0011] pb-0.5 hover:text-[#db0011] transition-colors inline-block mt-2"
            >
              Find out more about FSCS
            </a>
          </div>

          {/* Footnotes Section */}
          <div
            id="one"
            className="text-[12px] pt-4 text-gray-500 border-t border-gray-300"
          >
            <p className="font-bold mb-1">Additional information</p>
            <p>
              1. Free UK digital banking means day-to-day standard electronic
              transfers made through Business Internet Banking and HSBC UK
              Business Banking app are free. Other charges apply e.g cheques and
              CHAPS. See{" "}
              <a
                href="#"
                className="text-gray-600 underline hover:text-[#db0011]"
              >
                Business Price List
              </a>{" "}
              for details. Subject to application, eligibility, credit check and
              T&Cs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceFooter;
