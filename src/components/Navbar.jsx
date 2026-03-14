// import React, { useState } from "react";
// import {
//   ChevronRight,
//   ChevronLeft,
//   Menu,
//   X,
//   Landmark,
//   Wallet,
//   TrendingUp,
//   ShieldCheck,
//   HeartPulse,
//   HelpCircle,
// } from "lucide-react";

// const Navbar = () => {
//   const [activeMenu, setActiveMenu] = useState(null);
//   const [isMobileOpen, setIsMobileOpen] = useState(false);
//   const [mobileSubMenu, setMobileSubMenu] = useState(null);

//   const iconMap = {
//     Banking: <Landmark size={20} />,
//     Borrowing: <Wallet size={20} />,
//     Investing: <TrendingUp size={20} />,
//     Insurance: <ShieldCheck size={20} />,
//     Wellbeing: <HeartPulse size={20} />,
//     Help: <HelpCircle size={20} />,
//   };

//   // Mapping for the top utility tabs
//   const topTabs = [
//     { name: "Personal", path: "/" },
//     { name: "Private", path: "/private-banking" },
//     { name: "Business", path: "/business" },
//     { name: "Corporate", path: "/corporate" },
//   ];

//   const navItems = [
//     {
//       title: "Banking",
//       subtitle: "Accounts & services",
//       content: {
//         columns: [
//           {
//             label: "Current accounts",
//             links: [
//               {
//                 name: "Premier Account",
//                 path: "/personal/products/current-accounts/premier-account",
//               },
//               {
//                 name: "Bank Account",
//                 path: "/personal/products/current-accounts/bank-account",
//               },
//               {
//                 name: "Advance Account",
//                 path: "/personal/products/current-accounts/advance-account",
//               },
//               {
//                 name: "Student Account",
//                 path: "/personal/products/current-accounts/student-account",
//               },
//               {
//                 name: "International Student Account",
//                 path: "/personal/products/current-accounts/international-student-account",
//               },
//               {
//                 name: "Children's Account",
//                 path: "/personal/products/current-accounts/childrens-account",
//               },
//               {
//                 name: "Private Banking Account",
//                 path: "/personal/products/current-accounts/private-banking-account",
//               },
//               { name: "Business accounts", path: "/business/current-accounts" },
//               {
//                 name: "See all current accounts",
//                 path: "/personal/products/current-accounts",
//               },
//             ],
//           },
//           {
//             label: "Savings accounts",
//             links: [
//               {
//                 name: "Fixed Rate Cash ISA",
//                 path: "/personal/products/savings/fixed-rate-cash-isa",
//               },
//               {
//                 name: "Online Bonus Saver",
//                 path: "/personal/products/savings/online-bonus-saver",
//               },
//               {
//                 name: "Regular Savings Account",
//                 path: "/personal/products/savings/regular-savings-account",
//               },
//               {
//                 name: "Loyalty Cash ISA",
//                 path: "/personal/products/savings/loyalty-cash-isa",
//               },
//               {
//                 name: "Fixed Rate Savings Account",
//                 path: "/personal/products/savings/fixed-rate-savings-account",
//               },
//               {
//                 name: "Children's savings account",
//                 path: "/personal/products/savings/childrens-savings-account",
//               },
//               {
//                 name: "Easy access savings accounts",
//                 path: "/personal/products/savings/easy-access-savings-accounts",
//               },
//               {
//                 name: "Compare savings accounts",
//                 path: "/personal/products/savings/compare-savings-accounts",
//               },
//               {
//                 name: "See all savings accounts",
//                 path: "/personal/products/savings",
//               },
//             ],
//           },
//           {
//             label: "International services",
//             links: [
//               {
//                 name: "Global Money Account",
//                 path: "/personal/products/international/global-money-account",
//               },
//               {
//                 name: "Using your card outside the UK",
//                 path: "/personal/help/international-travel",
//               },
//               {
//                 name: "Travel Money",
//                 path: "/personal/products/international/travel-money",
//               },
//               {
//                 name: "International payments",
//                 path: "/personal/products/international/international-payments",
//               },
//               {
//                 name: "Currency Account",
//                 path: "/personal/products/international/currency-account",
//               },
//               {
//                 name: "Opening an account outside the UK",
//                 path: "/personal/products/international/opening-account-outside-uk",
//               },
//               {
//                 name: "Open a UK account",
//                 path: "/personal/products/international/open-uk-account",
//               },
//               {
//                 name: "See all international services",
//                 path: "/personal/products/international",
//               },
//             ],
//           },
//         ],
//         sidebar: {
//           title: "Already banking with us?",
//           links: [
//             {
//               name: "Existing customers",
//               path: "/personal/existing-customers",
//             },
//             { name: "Money worries", path: "/personal/help/money-worries" },
//             {
//               name: "Manage your account",
//               path: "/personal/help/manage-your-account",
//             },
//             {
//               name: "Mobile banking",
//               path: "/personal/ways-to-bank/mobile-banking",
//             },
//             {
//               name: "Online banking",
//               path: "/personal/ways-to-bank/online-banking",
//             },
//             {
//               name: "Overdrafts",
//               path: "/personal/products/current-accounts/overdrafts",
//             },
//             {
//               name: "Overdraft calculator",
//               path: "/personal/products/current-accounts/overdrafts/calculator",
//             },
//             {
//               name: "Overdraft repayment calculator",
//               path: "/personal/products/current-accounts/overdrafts/repayment-calculator",
//             },
//           ],
//         },
//       },
//     },
//     {
//       title: "Borrowing",
//       subtitle: "Short & long-term",
//       content: {
//         columns: [
//           {
//             label: "Credit cards",
//             links: [
//               {
//                 name: "Balance transfer credit cards",
//                 path: "/personal/products/credit-cards/balance-transfer",
//               },
//               {
//                 name: "Purchase cards",
//                 path: "/personal/products/credit-cards/purchase-cards",
//               },
//               {
//                 name: "Rewards cards",
//                 path: "/personal/products/credit-cards/reward-cards",
//               },
//               {
//                 name: "Credit building cards",
//                 path: "/personal/products/credit-cards/credit-building",
//               },
//               {
//                 name: "Premier cards",
//                 path: "/personal/products/credit-cards/premier-credit-card",
//               },
//               { name: "Ways to borrow", path: "/personal/products/borrowing" },
//               {
//                 name: "Credit card eligibility checker",
//                 path: "/personal/products/credit-cards/eligibility-checker",
//               },
//               {
//                 name: "See all credit cards",
//                 path: "/personal/products/credit-cards",
//               },
//             ],
//           },
//           {
//             label: "Loans",
//             links: [
//               {
//                 name: "Personal Loan",
//                 path: "/personal/products/loans/personal-loan",
//               },
//               {
//                 name: "Premier Loan",
//                 path: "/personal/products/loans/premier-loan",
//               },
//               { name: "Car Loan", path: "/personal/products/loans/car-loan" },
//               {
//                 name: "Home Improvement Loan",
//                 path: "/personal/products/loans/home-improvement-loan",
//               },
//               {
//                 name: "Top up your loan",
//                 path: "/personal/products/loans/top-up-loan",
//               },
//               { name: "Ways to borrow", path: "/personal/products/borrowing" },
//               {
//                 name: "Debt Consolidation Loan",
//                 path: "/personal/products/loans/debt-consolidation-loan",
//               },
//               {
//                 name: "HSBC Flexipay",
//                 path: "/personal/products/loans/flexipay",
//               },
//               { name: "See all loans", path: "/personal/products/loans" },
//             ],
//           },
//           {
//             label: "Mortgages",
//             links: [
//               {
//                 name: "Find a mortgage deal",
//                 path: "/personal/products/mortgages/find-a-deal",
//               },
//               {
//                 name: "Switch your mortgage rate",
//                 path: "/personal/products/mortgages/switch-rate",
//               },
//               {
//                 name: "Remortgage to HSBC",
//                 path: "/personal/products/mortgages/remortgage",
//               },
//               {
//                 name: "First-time buyers",
//                 path: "/personal/products/mortgages/first-time-buyers",
//               },
//               {
//                 name: "Get a decision in principle",
//                 path: "/personal/products/mortgages/decision-in-principle",
//               },
//               {
//                 name: "Moving home",
//                 path: "/personal/products/mortgages/moving-home",
//               },
//               {
//                 name: "Mortgage rates",
//                 path: "/personal/products/mortgages/mortgage-rates",
//               },
//               {
//                 name: "Mortgage calculators",
//                 path: "/personal/products/mortgages/calculators",
//               },
//               {
//                 name: "Continue my application",
//                 path: "/personal/products/mortgages/continue-application",
//               },
//             ],
//           },
//         ],
//         sidebar: {
//           title: "Already borrowing with us?",
//           links: [
//             {
//               name: "Mortgage Charter",
//               path: "/personal/help/mortgage-charter",
//             },
//             {
//               name: "Manage your existing mortgage",
//               path: "/personal/help/manage-your-mortgage",
//             },
//             {
//               name: "Pay off your mortgage",
//               path: "/personal/help/pay-off-your-mortgage",
//             },
//             { name: "Money worries", path: "/personal/help/money-worries" },
//             {
//               name: "Manage your credit card",
//               path: "/personal/help/manage-your-credit-card",
//             },
//             {
//               name: "Credit card instalment plans",
//               path: "/personal/products/credit-cards/instalment-plans",
//             },
//             {
//               name: "Credit card fees and rates",
//               path: "/personal/products/credit-cards/fees-and-rates",
//             },
//             { name: "Base rate information", path: "/personal/help/base-rate" },
//           ],
//         },
//       },
//     },
//     {
//       title: "Investing",
//       subtitle: "Products & planning",
//       content: {
//         columns: [
//           {
//             label: "Investing",
//             links: [
//               {
//                 name: "Stocks & shares ISA",
//                 path: "/personal/products/investing/stocks-and-shares-isa",
//               },
//               {
//                 name: "Invest in funds",
//                 path: "/personal/products/investing/invest-in-funds",
//               },
//               {
//                 name: "Investment calculator",
//                 path: "/personal/products/investing/investment-calculator",
//               },
//               {
//                 name: "Ready-made portfolios",
//                 path: "/personal/products/investing/ready-made-portfolios",
//               },
//               {
//                 name: "Invest in shares",
//                 path: "/personal/products/investing/invest-in-shares",
//               },
//               {
//                 name: "New to investing?",
//                 path: "/personal/products/investing/new-to-investing",
//               },
//             ],
//           },
//           {
//             label: "Advice",
//             links: [
//               {
//                 name: "Financial advice",
//                 path: "/personal/products/investing/financial-advice",
//               },
//               {
//                 name: "Premier investment management",
//                 path: "/personal/products/investing/premier-investment-management",
//               },
//               {
//                 name: "Protection advice",
//                 path: "/personal/products/investing/protection-advice",
//               },
//             ],
//             subSection: {
//               label: "Retirement",
//               links: [
//                 {
//                   name: "Retirement calculator",
//                   path: "/personal/products/investing/retirement-calculator",
//                 },
//                 {
//                   name: "Investing for retirement",
//                   path: "/personal/products/investing/investing-for-retirement",
//                 },
//               ],
//             },
//           },
//           {
//             label: "Wealth planning",
//             links: [
//               {
//                 name: "Wealth Insights",
//                 path: "/personal/products/investing/wealth-insights",
//               },
//               {
//                 name: "Future Planner",
//                 path: "/personal/products/investing/future-planner",
//               },
//               {
//                 name: "Investment goals",
//                 path: "/personal/products/investing/investment-goals",
//               },
//               {
//                 name: "Children's education calculator",
//                 path: "/personal/products/investing/education-calculator",
//               },
//               {
//                 name: "Your financial action plan",
//                 path: "/personal/products/investing/financial-action-plan",
//               },
//             ],
//           },
//         ],
//         sidebar: {
//           title: "Already investing with us?",
//           links: [
//             {
//               name: "Global Investment Centre",
//               path: "/personal/investing/global-investment-centre",
//             },
//             {
//               name: "Child Trust Fund",
//               path: "/personal/investing/child-trust-fund",
//             },
//             {
//               name: "How to use InvestDirect",
//               path: "/personal/investing/how-to-use-investdirect",
//             },
//             {
//               name: "Manage your investments",
//               path: "/personal/investing/manage-your-investments",
//             },
//             {
//               name: "Onshore Investment Bond",
//               path: "/personal/investing/onshore-investment-bond",
//             },
//             {
//               name: "Manage your personal pension",
//               path: "/personal/investing/manage-your-pension",
//             },
//             {
//               name: "Flexible Retirement Account",
//               path: "/personal/investing/flexible-retirement-account",
//             },
//             {
//               name: "Buy / manage funds on the app",
//               path: "/personal/investing/mobile-investing",
//             },
//           ],
//         },
//       },
//     },
//     {
//       title: "Insurance",
//       subtitle: "Property & family",
//       content: {
//         columns: [
//           {
//             label: "Insurance",
//             links: [
//               {
//                 name: "Home Insurance",
//                 path: "/personal/products/insurance/home-insurance",
//               },
//               {
//                 name: "Contents Insurance",
//                 path: "/personal/products/insurance/contents-insurance",
//               },
//               {
//                 name: "Travel Insurance",
//                 path: "/personal/products/insurance/travel-insurance",
//               },
//               { name: "Small Business Insurance", path: "/business/insurance" },
//               {
//                 name: "See all insurance",
//                 path: "/personal/products/insurance",
//               },
//             ],
//           },
//           {
//             label: "Life",
//             links: [
//               {
//                 name: "Life Cover",
//                 path: "/personal/products/insurance/life-cover",
//               },
//               {
//                 name: "Critical Illness Cover",
//                 path: "/personal/products/insurance/critical-illness-cover",
//               },
//               {
//                 name: "Protection advice",
//                 path: "/personal/products/investing/protection-advice",
//               },
//               {
//                 name: "See all life insurance",
//                 path: "/personal/products/insurance/life-insurance",
//               },
//             ],
//           },
//           {
//             label: "Claims",
//             links: [
//               {
//                 name: "Home Insurance claims",
//                 path: "/personal/help/insurance-claims/home-claims",
//               },
//               {
//                 name: "Life Insurance claims",
//                 path: "/personal/help/insurance-claims/life-claims",
//               },
//               {
//                 name: "Travel Insurance claims",
//                 path: "/personal/help/insurance-claims/travel-claims",
//               },
//               {
//                 name: "Aspects Insurance claims",
//                 path: "/personal/help/insurance-claims/aspects-claims",
//               },
//               {
//                 name: "Premier Travel Insurance claims",
//                 path: "/personal/help/insurance-claims/premier-travel-claims",
//               },
//             ],
//           },
//         ],
//         sidebar: {
//           title: "Already insured by us?",
//           links: [
//             {
//               name: "Home Insurance support",
//               path: "/personal/help/insurance-support/home-support",
//             },
//             {
//               name: "Life Insurance support",
//               path: "/personal/help/insurance-support/life-support",
//             },
//             {
//               name: "Premier Travel support",
//               path: "/personal/help/insurance-support/premier-travel-support",
//             },
//             {
//               name: "Aspects Insurance support",
//               path: "/personal/help/insurance-support/aspects-support",
//             },
//           ],
//         },
//       },
//     },
//     {
//       title: "Wellbeing",
//       subtitle: "Financial health & support",
//       content: {
//         columns: [
//           {
//             label: "Financial fitness",
//             links: [
//               {
//                 name: "Financial health tools & webinars",
//                 path: "/personal/wellbeing/financial-health-tools",
//               },
//               {
//                 name: "Everyday budgeting",
//                 path: "/personal/wellbeing/budgeting",
//               },
//               {
//                 name: "Managing debt",
//                 path: "/personal/wellbeing/managing-debt",
//               },
//               {
//                 name: "Growing your money",
//                 path: "/personal/wellbeing/growing-your-money",
//               },
//               {
//                 name: "Staying safe and secure",
//                 path: "/personal/help/security",
//               },
//               {
//                 name: "Learning about money",
//                 path: "/personal/wellbeing/learning-about-money",
//               },
//             ],
//           },
//           {
//             label: "New beginnings",
//             links: [
//               {
//                 name: "Help pay for your wedding",
//                 path: "/personal/wellbeing/wedding-planning",
//               },
//               {
//                 name: "Children's investment accounts",
//                 path: "/personal/products/investing/childrens-investments",
//               },
//               {
//                 name: "Planning for retirement",
//                 path: "/personal/wellbeing/retirement-planning",
//               },
//               {
//                 name: "Buying your first home",
//                 path: "/personal/wellbeing/first-time-buyer-guide",
//               },
//               {
//                 name: "Moving abroad",
//                 path: "/personal/wellbeing/moving-abroad",
//               },
//               {
//                 name: "Going to uni",
//                 path: "/personal/wellbeing/student-guide",
//               },
//             ],
//           },
//           {
//             label: "Life events",
//             links: [
//               {
//                 name: "Bereavement support",
//                 path: "/personal/help/life-events/bereavement",
//               },
//               {
//                 name: "Assisting someone with their money",
//                 path: "/personal/help/life-events/assisting-others",
//               },
//               {
//                 name: "Separation",
//                 path: "/personal/help/life-events/separation",
//               },
//               {
//                 name: "Losing your job",
//                 path: "/personal/help/life-events/redundancy",
//               },
//               {
//                 name: "Power of Attorney",
//                 path: "/personal/help/life-events/power-of-attorney",
//               },
//               {
//                 name: "Mental health and support",
//                 path: "/personal/help/life-events/mental-health",
//               },
//               {
//                 name: "Tell us your support needs",
//                 path: "/personal/help/support-needs",
//               },
//             ],
//           },
//         ],
//         sidebar: {
//           title: "Money worries",
//           links: [
//             {
//               name: "How we can help",
//               path: "/personal/help/money-worries/how-we-can-help",
//             },
//             {
//               name: "Mortgage payment support",
//               path: "/personal/help/money-worries/mortgage-support",
//             },
//             {
//               name: "Financial and domestic abuse",
//               path: "/personal/help/money-worries/financial-abuse",
//             },
//             {
//               name: "Rising cost of living",
//               path: "/personal/help/money-worries/cost-of-living",
//             },
//             {
//               name: "Support for gambling",
//               path: "/personal/help/money-worries/gambling-support",
//             },
//           ],
//         },
//       },
//     },
//     {
//       title: "Help",
//       subtitle: "Service & security",
//       content: {
//         columns: [
//           {
//             label: "Managing your account",
//             links: [
//               {
//                 name: "Rising cost of living",
//                 path: "/personal/help/cost-of-living",
//               },
//               { name: "Ways to bank", path: "/personal/ways-to-bank" },
//               { name: "Card support", path: "/personal/help/card-support" },
//               {
//                 name: "Making payments",
//                 path: "/personal/help/making-payments",
//               },
//               {
//                 name: "Set up or cancel a Direct Debit",
//                 path: "/personal/help/direct-debits",
//               },
//               {
//                 name: "Set up or cancel a standing order",
//                 path: "/personal/help/standing-orders",
//               },
//               {
//                 name: "Query a transaction",
//                 path: "/personal/help/query-transaction",
//               },
//             ],
//           },
//           {
//             label: "Fraud and security",
//             links: [
//               { name: "Secure Key", path: "/personal/ways-to-bank/secure-key" },
//               {
//                 name: "Latest scams",
//                 path: "/personal/help/security/latest-scams",
//               },
//               {
//                 name: "Fraud guide",
//                 path: "/personal/help/security/fraud-guide",
//               },
//               {
//                 name: "Received a text?",
//                 path: "/personal/help/security/received-a-text",
//               },
//               {
//                 name: "Our Digital Security Promise",
//                 path: "/personal/help/security/security-promise",
//               },
//               {
//                 name: "Verify your ID online",
//                 path: "/personal/help/verify-id",
//               },
//               { name: "HSBC Safeguard", path: "/personal/help/safeguard" },
//             ],
//           },
//           {
//             label: "Digital banking",
//             links: [
//               {
//                 name: "Register for digital banking",
//                 path: "/personal/ways-to-bank/register",
//               },
//               {
//                 name: "Mobile banking",
//                 path: "/personal/ways-to-bank/mobile-banking",
//               },
//               {
//                 name: "Online banking",
//                 path: "/personal/ways-to-bank/online-banking",
//               },
//               {
//                 name: "Digital banking help tool",
//                 path: "/personal/help/digital-banking-help",
//               },
//               {
//                 name: "Banking from home",
//                 path: "/personal/ways-to-bank/banking-from-home",
//               },
//               {
//                 name: "Mobile cheque deposit",
//                 path: "/personal/ways-to-bank/mobile-cheque-deposit",
//               },
//               {
//                 name: "Reset your log on details",
//                 path: "/personal/help/reset-logon",
//               },
//               {
//                 name: "Mobile money management",
//                 path: "/personal/ways-to-bank/money-management",
//               },
//             ],
//           },
//         ],
//         sidebar: {
//           title: "Help",
//           links: [
//             { name: "Service status", path: "/personal/help/service-status" },
//             {
//               name: "Find a branch or access to cash",
//               path: "/personal/branch-finder",
//             },
//             {
//               name: "Feedback and complaints",
//               path: "/personal/help/feedback-complaints",
//             },
//             {
//               name: "Bank England base rate",
//               path: "/personal/help/base-rate",
//             },
//             {
//               name: "Accessibility and disability",
//               path: "/personal/help/accessibility",
//             },
//             {
//               name: "HSBC's partnership with Shelter",
//               path: "/about/partnership-shelter",
//             },
//             { name: "Sustainability", path: "/about/sustainability" },
//           ],
//         },
//       },
//     },
//   ];

//   return (
//     <nav className="relative w-full border-b border-gray-200 z-50 font-sans">
//       {/* MOBILE INITIAL VIEW */}
//       <div className="lg:hidden bg-white px-4 h-16 flex items-center justify-between border-b">
//         <div className="flex items-center gap-4 h-full">
//           <button onClick={() => setIsMobileOpen(true)} className="p-2">
//             <Menu size={28} strokeWidth={1.5} />
//           </button>
//           <div className="w-[1px] h-8 bg-gray-200" />
//           <a href="/" className="flex items-center cursor-pointer">
//             <svg viewBox="0 0 100 100" className="w-8 h-8">
//               <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="#db0011" />
//               <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="white" />
//             </svg>
//             <span className="text-xl font-bold ml-2 tracking-tighter">
//               HSBC <span className="font-light">UK</span>
//             </span>
//           </a>
//         </div>
//         <button className="bg-[#db0011] text-white px-5 py-2 font-bold text-sm">
//           Log on
//         </button>
//       </div>

//       {/* DESKTOP TOP UTILITY BAR - Updated with Paths */}
//       <div className="hidden lg:flex bg-black text-white text-[13px] px-10 h-10 items-center justify-between">
//         <div className="flex gap-1 items-center h-full">
//           {topTabs.map((tab, i) => (
//             <a
//               key={tab.name}
//               href={tab.path}
//               className={`px-4 h-full flex items-center cursor-pointer transition-colors ${i === 0 ? 'bg-white text-black font-bold relative after:content-[""] after:absolute after:bottom-[-5px] after:left-1/2 after:-translate-x-1/2 after:border-l-[6px] after:border-l-transparent after:border-r-[6px] after:border-r-transparent after:border-t-[6px] after:border-t-white' : "hover:bg-[#333]"}`}
//             >
//               {tab.name}
//             </a>
//           ))}
//         </div>
//         <div className="flex items-center gap-6 h-full">
//           <button className="hover:underline cursor-pointer">English</button>
//           <a
//             href="/personal/ways-to-bank/register"
//             className="flex items-center gap-1 hover:underline cursor-pointer"
//           >
//             Register <ChevronRight size={14} strokeWidth={3} />
//           </a>
//           <button className="bg-[#db0011] h-10 px-10 font-bold flex items-center hover:bg-black transition-all cursor-pointer">
//             Log on
//           </button>
//         </div>
//       </div>

//       {/* DESKTOP MAIN NAV BAR */}
//       <div className="hidden lg:flex bg-white px-10 h-24 items-center justify-between border-b border-gray-200">
//         <div className="flex items-center h-full">
//           <a href="/" className="flex items-center mr-12 cursor-pointer">
//             <svg viewBox="0 0 100 100" className="w-12 h-12">
//               <path d="M50 5 L95 50 L50 95 L5 50 Z" fill="#db0011" />
//               <path d="M50 25 L75 50 L50 75 L25 50 Z" fill="white" />
//             </svg>
//             <span className="text-2xl font-bold ml-2 tracking-tighter">
//               HSBC <span className="font-light">UK</span>
//             </span>
//           </a>
//           <div className="flex h-full">
//             {navItems.map((item) => (
//               <div
//                 key={item.title}
//                 onMouseEnter={() => setActiveMenu(item.title)}
//                 className={`flex flex-col justify-center px-6 border-l border-gray-100 last:border-r cursor-pointer transition-all h-full
//                 ${activeMenu === item.title ? "bg-[#f4f4f4] border-b-4 border-b-[#db0011]" : "hover:bg-gray-50"}`}
//               >
//                 <span className="text-xl text-[#333] font-normal leading-tight">
//                   {item.title}
//                 </span>
//                 <span className="text-[11px] text-gray-500 font-medium">
//                   {item.subtitle}
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* DESKTOP MEGA MENU PANEL */}
//       {activeMenu && (
//         <div
//           className="absolute left-0 w-full bg-[#f4f4f4] shadow-2xl hidden lg:block border-t border-gray-200"
//           onMouseLeave={() => setActiveMenu(null)}
//         >
//           <div className="max-w-[1400px] mx-auto flex">
//             <div className="flex-1 grid grid-cols-3 p-10 gap-x-12 gap-y-8 bg-white">
//               {navItems
//                 .find((n) => n.title === activeMenu)
//                 ?.content?.columns.map((col) => (
//                   <div key={col.label} className="flex flex-col">
//                     <h3 className="font-bold text-[#333] text-lg mb-4 border-b border-gray-100 pb-2">
//                       {col.label}
//                     </h3>
//                     <ul className="space-y-2">
//                       {col.links.map((link) => (
//                         <li
//                           key={link.name}
//                           className="text-[15px] text-[#333] hover:text-[#db0011] hover:underline cursor-pointer"
//                         >
//                           <a href={link.path}>{link.name}</a>
//                         </li>
//                       ))}
//                     </ul>
//                     {col.subSection && (
//                       <div className="mt-6">
//                         <h3 className="font-bold text-[#333] text-lg mb-2">
//                           {col.subSection.label}
//                         </h3>
//                         <ul className="space-y-2">
//                           {col.subSection.links.map((link) => (
//                             <li
//                               key={link.name}
//                               className="text-[15px] text-[#333] hover:text-[#db0011] hover:underline cursor-pointer"
//                             >
//                               <a href={link.path}>{link.name}</a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     )}
//                   </div>
//                 ))}
//             </div>
//             <div className="w-96 bg-[#333] p-10 text-white">
//               <h3 className="text-2xl font-light mb-8">
//                 {
//                   navItems.find((n) => n.title === activeMenu)?.content?.sidebar
//                     ?.title
//                 }
//               </h3>
//               <ul className="space-y-5">
//                 {navItems
//                   .find((n) => n.title === activeMenu)
//                   ?.content?.sidebar?.links.map((link) => (
//                     <li
//                       key={link.name}
//                       className="font-bold text-[15px] hover:underline cursor-pointer flex items-center justify-between group"
//                     >
//                       <a href={link.path} className="flex-1">
//                         {link.name}
//                       </a>
//                       <ChevronRight
//                         size={16}
//                         className="opacity-0 group-hover:opacity-100 transition-opacity"
//                       />
//                     </li>
//                   ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* MOBILE OVERLAY MENU */}
//       <div
//         className={`fixed inset-0 bg-black/60 z-[100] transition-opacity lg:hidden ${isMobileOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
//       >
//         <div
//           className={`fixed top-0 left-0 h-full bg-white transition-transform duration-300 ease-in-out flex ${isMobileOpen ? "translate-x-0" : "-translate-x-full"} ${mobileSubMenu ? "w-full" : "w-[85%]"}`}
//         >
//           {/* MOBILE SIDEBAR ICONS */}
//           <div
//             className={`w-16 border-r border-gray-100 flex flex-col items-center py-4 gap-6 bg-white transition-all duration-300`}
//           >
//             <button
//               onClick={() => {
//                 mobileSubMenu ? setMobileSubMenu(null) : setIsMobileOpen(false);
//               }}
//               className="mb-4 text-gray-800"
//             >
//               {mobileSubMenu ? <ChevronLeft size={28} /> : <X size={28} />}
//             </button>
//             {navItems.map((item) => (
//               <button
//                 key={item.title}
//                 onClick={() => setMobileSubMenu(item.title)}
//                 className={`p-2 transition-colors ${mobileSubMenu === item.title ? "text-[#db0011]" : "text-gray-400"}`}
//               >
//                 {iconMap[item.title]}
//               </button>
//             ))}
//           </div>

//           {/* MOBILE DYNAMIC CONTENT */}
//           <div className="flex-1 overflow-y-auto bg-white">
//             {!mobileSubMenu ? (
//               <div className="flex flex-col divide-y divide-gray-100">
//                 <div className="p-6">
//                   <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
//                     Menu
//                   </span>
//                 </div>
//                 {navItems.map((item) => (
//                   <button
//                     key={item.title}
//                     onClick={() => setMobileSubMenu(item.title)}
//                     className="flex items-center justify-between p-5 text-left active:bg-gray-50"
//                   >
//                     <div className="flex items-center gap-4">
//                       <span className="text-gray-400">
//                         {iconMap[item.title]}
//                       </span>
//                       <span className="font-medium text-lg text-[#333]">
//                         {item.title}
//                       </span>
//                     </div>
//                     <ChevronRight size={20} className="text-gray-300" />
//                   </button>
//                 ))}
//               </div>
//             ) : (
//               <div className="flex flex-col h-full">
//                 <div className="p-6 bg-white border-b">
//                   <h2 className="text-2xl font-bold text-[#333] border-b-4 border-[#db0011] inline-block pb-1">
//                     {mobileSubMenu}
//                   </h2>
//                 </div>
//                 <div className="p-6 space-y-8 bg-[#f4f4f4] flex-1">
//                   {navItems
//                     .find((n) => n.title === mobileSubMenu)
//                     ?.content?.columns.map((col, idx) => (
//                       <div key={idx}>
//                         <h3 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
//                           {col.label}
//                         </h3>
//                         <ul className="space-y-6">
//                           {col.links.map((link) => (
//                             <li
//                               key={link.name}
//                               className="text-[17px] text-gray-800 font-normal"
//                             >
//                               <a href={link.path}>{link.name}</a>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>
//                     ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Globe } from "lucide-react"; // Make sure lucide-react is installed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper for active styling on the top utility bar (Now Emerald)
  const topLinkStyle = ({ isActive }) =>
    `h-10 flex items-center px-1 border-b-2 transition-colors ${
      isActive
        ? "border-emerald-600 text-gray-900"
        : "border-transparent text-gray-600 hover:text-emerald-600"
    }`;

  return (
    <>
      {/* SPACER */}
      <div className="h-[104px] md:h-[120px]" aria-hidden="true" />

      <header className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm">
        {/* 1. Top Utility Bar (Personal, Business, etc.) */}
        <div className="bg-[#f8fafc] border-b border-gray-100 hidden md:block">
          <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-10">
            <nav className="flex space-x-6 text-[11px] font-bold uppercase tracking-widest">
              <NavLink to="/" className={topLinkStyle}>
                Personal
              </NavLink>
              <NavLink to="/private" className={topLinkStyle}>
                Private
              </NavLink>
              <NavLink to="/business" className={topLinkStyle}>
                Business
              </NavLink>
              <NavLink to="/corporate" className={topLinkStyle}>
                Corporate
              </NavLink>
            </nav>
            <div className="text-[10px] text-gray-400 font-medium">
              Secure Banking for a Modern World
            </div>
          </div>
        </div>

        {/* 2. Main Navigation Bar */}
        <nav className="w-full bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center h-16 md:h-20">
              {/* BRAND LOGO: UNITED CAPITAL */}
              <Link to="/" className="flex items-center group">
                <div className="h-10 w-10 bg-emerald-600 rounded-xl flex items-center justify-center mr-3 group-hover:bg-slate-900 transition-all duration-300 shadow-lg shadow-emerald-100 group-hover:shadow-none">
                  <Globe className="text-white" size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black tracking-tighter text-gray-900 leading-none">
                    UNITED<span className="text-emerald-600">CAPITAL</span>
                  </span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.3em] mt-0.5">
                    BANK
                  </span>
                </div>
              </Link>

              {/* Desktop NavLinks */}
              <div className="hidden md:flex items-center space-x-8">
                <NavLink
                  to="/register"
                  className={({ isActive }) =>
                    `font-bold text-sm uppercase tracking-widest transition-all border-b-2 py-1 ${
                      isActive
                        ? "text-emerald-600 border-emerald-600"
                        : "text-gray-800 border-transparent hover:text-emerald-600 hover:border-emerald-600"
                    }`
                  }
                >
                  Register
                </NavLink>

                <Link
                  to="/logon"
                  className="bg-emerald-600 text-white px-8 py-3 font-bold text-sm uppercase tracking-widest hover:bg-slate-900 transition-all active:scale-95 shadow-lg shadow-emerald-100"
                >
                  Log on
                </Link>
              </div>

              {/* Mobile Menu Toggle */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center text-gray-800 p-2 focus:outline-none"
                >
                  <span className="text-[10px] font-black mr-2 uppercase tracking-widest">
                    {isOpen ? "Close" : "Menu"}
                  </span>
                  <div className="space-y-1">
                    <span
                      className={`block w-5 h-0.5 bg-current transition-transform ${isOpen ? "rotate-45 translate-y-1.5" : ""}`}
                    ></span>
                    <span
                      className={`block w-5 h-0.5 bg-current ${isOpen ? "opacity-0" : ""}`}
                    ></span>
                    <span
                      className={`block w-5 h-0.5 bg-current transition-transform ${isOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
                    ></span>
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`md:hidden bg-white border-t transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? "max-h-screen" : "max-h-0"}`}
          >
            <div className="px-6 py-8 space-y-8">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="/personal"
                  className="text-xs font-black uppercase tracking-widest text-emerald-600"
                >
                  Personal
                </Link>
                <Link
                  to="/business"
                  className="text-xs font-black uppercase tracking-widest text-gray-400"
                >
                  Business
                </Link>
              </div>
              <NavLink
                to="/register"
                className="block text-2xl font-black text-gray-900 italic tracking-tighter"
              >
                Register
              </NavLink>
              <Link
                to="/logon"
                className="block w-full bg-emerald-600 text-white py-4 text-center font-bold text-sm uppercase tracking-[0.2em] shadow-xl shadow-emerald-100"
              >
                Log on
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
