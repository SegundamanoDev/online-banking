import React from "react";
import { ChevronRight } from "lucide-react";

const QuickLinksBar = () => {
  const links = [
    { name: "Checking accounts", href: "/checking" },
    { name: "Mortgages", href: "/mortgages" },
    { name: "Credit cards", href: "/credit-cards" },
    { name: "Savings & CDs", href: "/savings" },
    { name: "Personal loans", href: "/loans" },
    { name: "Wealth management", href: "/wealth" },
  ];

  return (
    <div className="w-full bg-white py-16 border-b border-slate-50">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32">
        {/* Text size reduced to 16px (base) - 18px (lg) 
          Font weight moved to medium for better American fintech legibility
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group flex items-center text-[16px] lg:text-[18px] font-medium text-slate-500 hover:text-slate-900 transition-all duration-300"
            >
              <span className="relative pb-1">
                {link.name}
                {/* Custom animated underline instead of standard border */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
              <ChevronRight
                size={16}
                className="ml-2 text-emerald-500 transition-transform group-hover:translate-x-2"
                strokeWidth={2.5}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinksBar;
