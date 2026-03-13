import React from "react";
import Hero from "./Hero";
import QuickLinksBar from "./QuickLinksBar";
import Navbar from "./Navbar"; // Assuming you have the Navbar we built earlier
import MasterCards from "./MasterCards";
import ComplianceFooter from "./Compliance";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-[1440px] mx-auto px-6 lg:px-20 xl:px-24">
        <Hero />
        <QuickLinksBar />
        <MasterCards />
        <ComplianceFooter />
      </main>
    </div>
  );
};

export default Home;
