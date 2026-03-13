import React, { useState } from "react";

const Register = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-800 antialiased">
      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Main Layout Grid (66/33 split) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 space-y-12">
            {/* Header Section */}
            <header>
              <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-6 border-b pb-4">
                Register for mobile and online banking
              </h1>
              <p className="text-lg leading-relaxed">
                The quickest and easiest way to register for digital banking
                <sup>1</sup> is by downloading our app<sup>2</sup>. Just select{" "}
                <span className="font-semibold">'Register now'</span> when asked
                if you're already registered for HSBC UK Digital Banking.
              </p>
            </header>

            {/* App Promotion (Adaptive CTA section) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-sm">
              <div className="space-y-4">
                <p className="text-base text-gray-700 italic">
                  Download the app and register in minutes. Manage your accounts
                  on the go, with access to your cards and payments at your
                  fingertips.
                </p>
                {/* Desktop QR Section */}
                <div className="hidden md:block">
                  <p className="mb-4 font-medium text-sm">
                    Scan the QR code to download the app and get started.
                  </p>
                  <img
                    src="/content/dam/hsbc/gb/images/ways-to-bank/qr-code/17599-register-adaptive-qr-code-120x120.jpg"
                    alt="QR Code"
                    className="w-32 h-32 border bg-white p-2"
                  />
                </div>
                {/* Mobile Button */}
                <div className="md:hidden">
                  <button className="w-full bg-[#db0011] text-white py-3 px-6 rounded font-bold hover:bg-[#b3000d] transition shadow-md">
                    Download app
                  </button>
                </div>
              </div>

              <div className="flex flex-col justify-start">
                <button className="text-left border-2 border-gray-900 px-6 py-4 font-bold text-gray-900 hover:bg-gray-100 transition flex justify-between items-center">
                  Learn more about Photo ID and selfie verification
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>

            {/* Call to Action Sections */}
            <div className="space-y-10">
              <section>
                <h2 className="text-2xl font-light mb-4">
                  More help with registration
                </h2>
                <p>
                  If you need help to register for digital banking, you'll need
                  to{" "}
                  <a href="#" className="text-[#db0011] underline font-medium">
                    call us
                  </a>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-light mb-4">
                  Need to reset your details?
                </h2>
                <div className="space-y-4">
                  <p>
                    If you're locked out of mobile or online banking, or you've
                    forgotten your log on details, we can help.
                  </p>
                  <p>
                    Our digital banking help tool will get you back online
                    quickly and easily.
                  </p>
                  <button className="border-2 border-gray-900 px-6 py-2 font-bold hover:bg-gray-100 transition">
                    Digital banking help tool
                  </button>
                </div>
              </section>
            </div>

            {/* Accordion / More Information */}
            <section className="border-t pt-10">
              <h2 className="text-2xl font-light mb-6">More information</h2>
              <div className="border-y divide-y">
                {/* Accordion Item 1 */}
                <AccordionItem
                  title="Setting up a Mobile Banking PIN"
                  isOpen={openAccordion === 1}
                  onClick={() => toggleAccordion(1)}
                >
                  <p className="mb-4">
                    During registration you'll be asked to set up a Mobile
                    Banking PIN.
                  </p>
                  <p className="mb-4">
                    By choosing a Mobile Banking PIN, this will give you full
                    access to mobile and online banking as soon as you complete
                    registration and log on.
                  </p>
                  <p>
                    If you have any accessibility or mobility needs, please{" "}
                    <a href="#" className="text-[#db0011] underline">
                      get in touch with us
                    </a>
                    .
                  </p>
                </AccordionItem>

                {/* Accordion Item 2 */}
                <AccordionItem
                  title="Telephone Security Number queries"
                  isOpen={openAccordion === 2}
                  onClick={() => toggleAccordion(2)}
                >
                  <div className="space-y-4">
                    <h4 className="font-bold">
                      What is my Telephone Security Number?
                    </h4>
                    <p>
                      Your Telephone Security Number is a 6 to 10 digit number
                      that only you will know. It is what we use to verify you
                      if you call us.
                    </p>
                    <h4 className="font-bold">Forgotten your number?</h4>
                    <p>
                      Please call us on{" "}
                      <span className="font-bold">03456 002290</span> or visit a
                      branch.
                    </p>
                  </div>
                </AccordionItem>

                {/* Accordion Item 3 */}
                <AccordionItem
                  title="Online Banking Features"
                  isOpen={openAccordion === 3}
                  onClick={() => toggleAccordion(3)}
                >
                  <ul className="list-disc ml-5 space-y-2">
                    <li>See a detailed view of balance and transactions</li>
                    <li>Send money and pay bills</li>
                    <li>View or download statements</li>
                    <li>Report card lost or stolen</li>
                    <li>Speak to our Live Chat team</li>
                  </ul>
                </AccordionItem>
              </div>
            </section>
          </div>

          {/* Right Column (Sidebar / Master Cards) */}
          <aside className="space-y-8">
            <h3 className="text-xl font-bold border-b-2 border-[#db0011] pb-2">
              You might also be interested in
            </h3>

            <div className="space-y-6">
              <SidebarCard
                title="Online banking"
                desc="Online banking is quick, convenient and secure. Log on to access your accounts whenever you want."
              />
              <SidebarCard
                title="Mobile banking"
                desc="Banking from the palm of your hand."
              />
              <SidebarCard
                title="Secure Key"
                desc="Stay safe online with the HSBC Secure Key."
              />
            </div>
          </aside>
        </div>

        {/* Footnote Section */}
        <footer className="mt-20 pt-10 border-t border-gray-200 text-sm text-gray-600">
          <h2 className="text-xl font-bold text-gray-900 mb-4">
            Important information
          </h2>
          <ol className="list-decimal ml-5 space-y-4">
            <li>
              When you register for digital banking, you'll opt out
              automatically of receiving paper copies of certain statements and
              documents.
            </li>
            <li>
              Find out more about the{" "}
              <a href="#" className="text-[#db0011] underline">
                operating systems our app works on
              </a>
              .
            </li>
          </ol>
        </footer>
      </main>
    </div>
  );
};

// Sub-components for cleaner code
const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="py-2">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-4 text-left font-bold text-lg hover:text-[#db0011] transition-colors"
    >
      {title}
      <span
        className={`transform transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
      >
        ▼
      </span>
    </button>
    <div
      className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[500px] pb-6" : "max-h-0"}`}
    >
      <div className="text-gray-700 leading-relaxed">{children}</div>
    </div>
  </div>
);

const SidebarCard = ({ title, desc }) => (
  <div className="p-5 bg-[#f4f4f4] border-l-4 border-[#db0011] hover:bg-gray-100 transition-colors cursor-pointer group">
    <h4 className="font-bold text-lg group-hover:text-[#db0011] flex items-center">
      {title} <span className="ml-2 text-sm">→</span>
    </h4>
    <p className="mt-2 text-sm text-gray-600 leading-snug">{desc}</p>
  </div>
);

export default Register;
