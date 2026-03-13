import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-app-card border-t border-app-border pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
      <div className="col-span-2 md:col-span-1">
        <h2 className="text-2xl font-black text-bank-accent tracking-tighter mb-6">
          GEMINI.
        </h2>
        <p className="opacity-50 text-sm leading-loose">
          Gemini Bank is a financial technology company, not a bank. Banking
          services provided by our global partner banks.
        </p>
      </div>
      <div>
        <h4 className="font-bold mb-6">Company</h4>
        <div className="flex flex-col gap-4 opacity-60 text-sm">
          <Link to="/about" className="hover:text-bank-accent">
            About Us
          </Link>
          <Link to="/pricing" className="hover:text-bank-accent">
            Pricing
          </Link>
          <Link to="/contact" className="hover:text-bank-accent">
            Contact
          </Link>
        </div>
      </div>
      <div>
        <h4 className="font-bold mb-6">Legal</h4>
        <div className="flex flex-col gap-4 opacity-60 text-sm">
          <Link to="/privacy" className="hover:text-bank-accent">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-bank-accent">
            Terms of Service
          </Link>
          <Link to="/security" className="hover:text-bank-accent">
            Security Disclosure
          </Link>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto pt-10 border-t border-app-border text-center opacity-40 text-xs">
      © 2026 Gemini Financial Technologies Ltd. All rights reserved.
    </div>
  </footer>
);

export default Footer;
