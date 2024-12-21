import React from "react"
import Navbar from "../../compunent/navbar";
import MobileHeroSection from "./MobileHeroSection";
import HeroWalletSec from "./HeroWalletSec";
import MobileFirstEverSec from "./MobileFirstEverSec";
import TheRules from "./TheRules";
import PrizeMoney from "./PrizeMoney";

function MobileHome() {
  return (
    <div className="bg-[black] w-[100%]">
      <div>
        <Navbar />
        <MobileHeroSection />
        <HeroWalletSec />
        <MobileFirstEverSec />
        <TheRules />
        <PrizeMoney />
      </div>
    </div>
  );
}

export default MobileHome;
