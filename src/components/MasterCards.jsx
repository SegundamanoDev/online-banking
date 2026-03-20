import React from "react";

const MasterCards = () => {
  const cardData = [
    {
      image:
        "https://i.pinimg.com/1200x/69/73/0d/69730d038efe30cb1487f148b318a6c4.jpg",
      title: "Resources & Support",
      text: "Get the most out of your digital experience with our comprehensive guides and security tutorials.",
    },
    {
      image:
        "https://i.pinimg.com/736x/9c/f3/35/9cf335a7b07e0b33710434af34c6f482.jpg",
      title: "Grow Your Wealth",
      text: "Leverage expert market analysis and diverse investment tools to help secure your financial future.",
    },
    {
      image:
        "https://i.pinimg.com/1200x/6a/9a/66/6a9a661a89881207fcc24bf0c16e5bf5.jpg",
      title: "Business Solutions",
      text: "Scale your vision with zero-fee business checking and integrated payroll for US-based startups.",
    },
  ];

  return (
    <section className="py-20 bg-[#fbfcfd]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cardData.map((card, index) => (
            <div key={index} className="flex flex-col group h-full">
              {/* Image Container */}
              <div className="overflow-hidden rounded-[2rem] mb-8 shadow-xl shadow-slate-200/50">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2">
                <h2 className="text-[24px] lg:text-[26px] font-black text-slate-900 leading-tight mb-4 tracking-tight italic group-hover:text-emerald-600 transition-colors">
                  {card.title}
                </h2>

                <p className="text-[16px] text-slate-500 leading-relaxed mb-8 font-medium">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasterCards;
