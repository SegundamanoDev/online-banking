import React, { useState, useEffect } from "react";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const heroVariants = [
    {
      title: "New to HSBC?",
      desc: "Take a look at the credit cards you can apply for and compare the benefits they offer.",
      subDesc:
        "Representative 29.9% APR (variable). Eligibility criteria apply. Credit subject to status.",
      btnText: "Find out more",
      img: "https://www.hsbc.co.uk/content/dam/hsbc/en/images/16-9/17199-togetherness-park-autumn-2000x1125.jpg",
      link: "/credit-cards",
    },
    {
      title: "Switching made easy",
      desc: "Move your everyday banking to us in just 7 working days with the Current Account Switch Service.",
      subDesc: "Terms and conditions apply.",
      btnText: "Learn about switching",
      img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=2000",
      link: "/switch",
    },
    {
      title: "Your home journey",
      desc: "Whether you're a first-time buyer or looking to remortgage, we have deals to suit you.",
      subDesc: "Your home may be repossessed if you do not keep up repayments.",
      btnText: "View mortgages",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=2000",
      link: "/mortgages",
    },
    {
      title: "Investing for your future",
      desc: "Start investing from as little as £50 a month and manage it all in our mobile app.",
      subDesc:
        "Capital at risk. The value of investments can go down as well as up.",
      btnText: "Start investing",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000",
      link: "/investing",
    },
  ];

  const [currentHero, setCurrentHero] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * heroVariants.length);
    setCurrentHero(heroVariants[randomIndex]);
  }, []);

  if (!currentHero) return null;

  return (
    <div className="relative w-full bg-white overflow-hidden font-sans">
      {/* --- MAIN HERO SECTION --- */}
      {/* lg:flex-row handles desktop side-by-side, default flex-col handles mobile stacking */}
      <div className="flex flex-col lg:flex-row min-h-[500px] relative">
        {/* RIGHT SIDE (Image) - Forced to top on mobile via 'order-first' */}
        <div className="relative flex-1 min-h-[250px] sm:min-h-[350px] lg:min-h-full overflow-hidden order-first lg:order-last">
          {/* HSBC Diagonal Overlay - Only visible on Desktop (lg) */}
          <div
            className="absolute inset-0 hidden lg:block bg-white z-10"
            style={{ clipPath: "polygon(0 0, 15% 0, 0 100%, 0% 100%)" }}
          />

          <img
            src={currentHero.img}
            alt="HSBC Hero"
            className="w-full h-full object-cover"
          />
        </div>

        {/* LEFT SIDE (Content) - Appears under image on mobile */}
        <div className="flex-1 flex flex-col justify-center px-6 py-12 lg:pl-24 lg:pr-12 z-20 bg-white order-last lg:order-first">
          <div className="max-w-xl">
            <h1 className="text-[32px] sm:text-[40px] lg:text-[52px] leading-[1.1] font-bold text-[#333] mb-4 lg:mb-6 tracking-tight">
              {currentHero.title}
            </h1>
            <div className="space-y-4 text-[#333]">
              <p className="text-[18px] lg:text-[22px] leading-snug font-normal">
                {currentHero.desc}
              </p>
              <p className="text-[14px] text-gray-600 leading-relaxed">
                {currentHero.subDesc}
              </p>
            </div>
            <div className="mt-8 lg:mt-10">
              <a
                href={currentHero.link}
                className="inline-block bg-[#db0011] hover:bg-black text-white px-10 py-3.5 font-bold transition-all duration-300 text-[15px] w-full sm:w-auto text-center"
              >
                {currentHero.btnText}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- BOTTOM OVERLAPPING CARDS --- */}
      {/* Margin top is reduced on mobile so cards sit closer to the content */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-24 -mt-8 lg:-mt-16 relative z-30 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 lg:p-10 border-t-[6px] border-[#db0011]">
            <h2 className="text-[22px] lg:text-[24px] font-bold text-[#333] mb-3">
              Join HSBC Premier today
            </h2>
            <p className="text-[#555] text-[15px] mb-6 lg:mb-8 leading-relaxed">
              HSBC Premier is our premium account that gives you more than
              banking with wealth, health and travel benefits.
            </p>
            <a
              href="/premier"
              className="flex items-center text-[#333] font-bold hover:text-[#db0011] group text-[15px]"
            >
              <span className="border-b-2 border-transparent group-hover:border-[#db0011] pb-0.5">
                Premier Bank Account
              </span>
              <ChevronRight
                className="ml-1 text-[#db0011]"
                size={18}
                strokeWidth={3}
              />
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] p-8 lg:p-10 border-t-[6px] border-[#db0011]">
            <h2 className="text-[22px] lg:text-[24px] font-bold text-[#333] mb-3">
              Buy and manage funds on the app
            </h2>
            <p className="text-[#555] text-[15px] mb-6 lg:mb-8 leading-relaxed">
              It's now even easier for HSBC UK current account customers to
              manage, buy and sell investments in the app.
            </p>
            <a
              href="/investing"
              className="flex items-center text-[#333] font-bold hover:text-[#db0011] group text-[15px]"
            >
              <span className="border-b-2 border-transparent group-hover:border-[#db0011] pb-0.5">
                Learn more
              </span>
              <ChevronRight
                className="ml-1 text-[#db0011]"
                size={18}
                strokeWidth={3}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
