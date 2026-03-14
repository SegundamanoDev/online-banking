import React from "react";
import { ChevronRight } from "lucide-react";

const MasterCards = () => {
  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=1000",
      title: "Resources & Support",
      text: "Get the most out of your digital experience with our comprehensive guides and security tutorials.",
      links: [
        { label: "Security & Fraud Center", url: "/help/security" },
        { label: "Digital Banking Setup", url: "/help/digital-setup" },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=1000",
      title: "Grow Your Wealth",
      text: "Leverage expert market analysis and diverse investment tools to help secure your financial future.",
      links: [
        { label: "Retirement & 401(k) Options", url: "/invest/retirement" },
      ],
    },
    {
      image:
        "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?auto=format&fit=crop&q=80&w=1000",
      title: "Business Solutions",
      text: "Scale your vision with zero-fee business checking and integrated payroll for US-based startups.",
      links: [{ label: "Small Business Accounts", url: "/business" }],
    },
  ];

  return (
    <section className="py-20 bg-[#fbfcfd]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col group h-full">
              {/* Image with brand-consistent rounding */}
              <div className="overflow-hidden rounded-[2rem] mb-8 shadow-xl shadow-slate-200/50">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <h2 className="text-[24px] lg:text-[26px] font-black text-slate-900 leading-tight mb-4 tracking-tight group-hover:text-emerald-600 transition-colors">
                  <a href="#" className="flex items-center">
                    {card.title}
                    <ChevronRight
                      size={20}
                      className="ml-1 text-emerald-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-1"
                      strokeWidth={3}
                    />
                  </a>
                </h2>

                <p className="text-[16px] text-slate-500 leading-relaxed mb-8 font-medium">
                  {card.text}
                </p>

                {/* Styled Action Links */}
                <div className="mt-auto space-y-5">
                  {card.links.map((link, lIndex) => (
                    <a
                      key={lIndex}
                      href={link.url}
                      className="flex items-center text-slate-900 font-bold text-[15px] hover:text-emerald-600 group/link w-fit"
                    >
                      <span className="relative pb-0.5">
                        {link.label}
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-emerald-500 scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left"></span>
                      </span>
                      <ChevronRight
                        size={16}
                        className="ml-1 text-emerald-500"
                        strokeWidth={3}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterCards;
