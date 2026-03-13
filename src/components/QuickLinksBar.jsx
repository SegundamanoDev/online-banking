import React from "react";
import { ChevronRight } from "lucide-react";

const QuickLinksBar = () => {
  const links = [
    { name: "Current accounts", href: "/current-account" },
    { name: "Mortgages", href: "/mortgages" },
    { name: "Credit cards", href: "/credit-cards" },
    { name: "Savings", href: "/savings" },
    { name: "Loans", href: "/loans" },
    { name: "Insurance", href: "/insurance" },
  ];

  return (
    <div className="w-full bg-white py-12">
      {/* Using a grid to match the 4-column layout in the HSBC photo.
         The gap and alignment now mirror the screenshot exactly.
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="group flex items-center text-[22px] lg:text-[24px] font-light text-gray-600 hover:text-[#db0011] transition-colors duration-200"
          >
            <span className="border-b border-transparent pb-0.5">
              {link.name}
            </span>
            <ChevronRight
              size={20}
              className="ml-2 text-[#db0011] transition-transform group-hover:translate-x-1"
              strokeWidth={3}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickLinksBar;
