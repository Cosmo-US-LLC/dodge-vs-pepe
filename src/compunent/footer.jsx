import React from "react";
import Logo from "../assets/footer/Image (14).png";
import socialicn1 from "../assets/footer/soclicn (3).svg"
import socialicn2 from "../assets/footer/soclicn (2).svg"
import socialicn3 from "../assets/footer/soclicn (1).svg"

function Footer() {
  

  return (
    <div className="w-[100%] z-[99] bg-[#181818] pt-[56px] pb-[36px] ">
      <div className="max-w-[1296px]  2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[90%] w-[100%]  mx-auto space-y-[64px]">
      <div className="flex justify-between">
      <div>
        <img src={Logo} alt="" />
        <h3 className="text-[42px] font-[800] leading-[92.019%] tracking-[-2.453px] text-[#FFF]">DOGEVSPEPE</h3>
      </div>
      <div className="space-y-[10px]">
        <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">DOGEvsPEPE</a>
        <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">The First Ever Crypto Meme Fight</a>
        <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">The Rules</a>
        <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">Milestones Mystery Reveals</a>
        <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">The Community Decides </a>
        <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">Roadmap</a>
      </div>
      <div className="space-y-[10px]">
      <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">$DOPE Tokenomics</a>
      <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">$PEPE Tokenomics</a>
      <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">Join And Support Your Team On Telegram</a>
      <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">Don’t Wait – The Race is On!</a>
      <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">frequently asked questions</a>
      <a href="" className="text-[18px] text-[#fff] font-[400] leading-[119.856%] block">Need Help?</a>

      </div>
      <div className="max-w-[110px] w-[100%] space-y-[10px]">
        <h4 className="text-[18px] text-[#fff] font-[400] leading-[119.856%]">Get updated </h4>
        <div className="flex space-x-2">
            <img src={socialicn1} alt="" />
            <img src={socialicn2} alt="" />
            <img src={socialicn3} alt="" />
        </div>
      </div>
      </div>
      <div className="max-w-[1031px] w-[100%] mx-auto space-y-[27px]">
        <p className="text-[18px] font-[400] text-center leading-[119.856%] text-[#fff]">Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go up as well as down. Profits may be subject to capital gains or other taxes applicable in your jurisdiction.</p>
        <p className="text-[18px] font-[400] text-center leading-[119.856%] text-[#fff]">Copyright 2024 DOGEVSPEPE | All rights reserved.</p>
      </div>
      
      </div>
    </div>
  );
}

export default Footer;
