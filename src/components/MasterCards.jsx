import React from "react";
import { ChevronRight } from "lucide-react";

const MasterCards = () => {
  const cardData = [
    {
      image:
        "https://www.hsbc.co.uk/content/dam/hsbc/en/images/16-9/19395-grandfather-and-granddaughters-having-fun-on-beach-2560x1440.jpg",
      title: "Looking for help?",
      text: "Find answers to your questions and get the latest guidance.",
      links: [
        { label: "Digital reset", url: "/help/digital-banking" },
        { label: "Managing your account", url: "/help/banking-made-easy" },
      ],
    },
    {
      image:
        "https://www.hsbc.co.uk/content/dam/hsbc/en/images/16-9/savings-shoots-growing.jpg",
      title: "Growing your money",
      text: "Explore ways you could make the most of your money to help reach your goals.",
      links: [{ label: "Stocks & shares ISA", url: "/investments/isas" }],
    },
    {
      image:
        "https://www.hsbc.co.uk/content/dam/hsbc/gb/images/16-9/18219-bb-image-homepage-1-800x450.jpg",
      title: "HSBC Small Business Banking Account",
      text: "We're here to support your business all the way, that’s why there’s no monthly account fee and free UK digital banking.",
      links: [{ label: "Small Business Banking Account", url: "/business" }],
    },
  ];

  return (
    <section className="py-12 bg-white">
      {/* Grid container: 1 col on mobile, 3 cols on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cardData.map((card, index) => (
          <div key={index} className="flex flex-col group">
            {/* Image Wrapper */}
            <div className="overflow-hidden mb-6">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Wrapper */}
            <div className="flex flex-col flex-grow">
              <h2 className="text-[24px] lg:text-[28px] font-bold text-[#333] leading-tight mb-4 hover:text-[#db0011] cursor-pointer transition-colors">
                <a href="#" className="flex items-center">
                  {card.title}
                  <ChevronRight
                    size={22}
                    className="ml-1 text-[#db0011]"
                    strokeWidth={3}
                  />
                </a>
              </h2>

              <p className="text-[16px] text-gray-700 leading-relaxed mb-6">
                {card.text}
              </p>

              {/* Links List */}
              <div className="mt-auto space-y-4">
                {card.links.map((link, lIndex) => (
                  <a
                    key={lIndex}
                    href={link.url}
                    className="flex items-center text-[#333] font-bold text-[15px] hover:text-[#db0011] group/link"
                  >
                    <span className="border-b-2 border-transparent group-hover/link:border-[#db0011] pb-0.5">
                      {link.label}
                    </span>
                    <ChevronRight
                      size={18}
                      className="ml-1 text-[#db0011]"
                      strokeWidth={3}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasterCards;
