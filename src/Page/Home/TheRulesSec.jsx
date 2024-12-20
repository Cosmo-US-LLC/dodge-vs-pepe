import React from "react";
import crdimg1 from "../../assets/RuleSec/crdimg (4).png";
import crdimg2 from "../../assets/RuleSec/crdimg (3).png";
import crdimg3 from "../../assets/RuleSec/crdimg (2).png";
import crdimg4 from "../../assets/RuleSec/crdimg (1).png";
import crdimg5 from "../../assets/RuleSec/crdimg (6).png";
import crdimg6 from "../../assets/RuleSec/crdimg (5).png";
import crdimg7 from "../../assets/RuleSec/crdimg (7).png";
import telicn from "../../assets/RuleSec/logos_telegram.svg";

function TheRulesSec() {
  return (
    <div className="w-[100%] overflow-hidden w-[100%] py-[36px]">
      <div className="max-w-[1143px] space-y-[45px] w-[100%] mx-auto relative min-h-[500px]">
        <div>
          <h3 className="text-[#fff] text-center text-[42px] leading-[104.377%] font-[700]">
            The Rules
          </h3>
        </div>
        <div className="relative space-y-[30px]">
          <div className="flex Rulesborder justify-between px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img src={crdimg1} alt="card image" className="min-h-[220px]" />
            </div>
            <div className="max-w-[727.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-[700] text-[#fff]">
                  1. Choose Your Champion
                </h2>
              </div>
              <ol className="list-disc pl-[3rem] text-gray-200 pl-5 flex flex-col gap-4 text-base leading-relaxed">
                <li className="text-[18px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Team Pepe ($PEGE) –</span> <br />{" "}
                  Join Pepe, the internet’s ultimate rebel. This if for the
                  people who value humor, resilience, and chaos.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Team Doge ($DOPE) –</span> <br />{" "}
                  Stand with Doge, the first Meme who started it all. This is
                  for the people who understand and respect the Doge legacy.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-between Rulesborder2 px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="max-w-[727.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-[700] text-[#fff]">
                  2. Buy To Support Your Team
                </h2>
              </div>
              <ol className="list-disc	pl-[3rem] text-gray-200 pl-5 flex flex-col  text-base leading-relaxed">
                <li className="text-[18px] text-[#FFF] font-[400]">Buy tokens and support your favorite meme. 
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">Every token purchased is a vote toward their victory.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">Maximum Buy-In: Each wallet can buy for up to $10,000.
                </li>
              </ol>
            </div>
            <div className="w-[40%] flex justify-end">
              <img src={crdimg2} alt="card image" className="min-h-[220px]" />
            </div>
          </div>
          <div className="flex Rulesborder justify-between px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img src={crdimg3} alt="card image" className="min-h-[220px]" />
            </div>
            <div className="max-w-[655.31px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-[700] text-[#fff]">
                  3. The Race To $1 Million
                </h2>
              </div>
              <ol className="list-disc	pl-[3rem] text-gray-200  flex flex-col text-base leading-relaxed">
                <li className="text-[18px] text-[#FFF] font-[400]">The fight is decided when the first team reaches $1 million.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">
                Only the winner will remain and proceed to launch.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">
                The launch date will be announced directly after the first coin reaches $1M.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">
                Until the launch date, only the winner coin can be purchased.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex  Rulesborder2 justify-between px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="max-w-[655.31px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-[700] text-[#fff]">
                4. The Winner Takes It All
                </h2>
              </div>
              <ol className="list-disc	pl-[3rem] text-gray-200  flex flex-col gap-3 text-base leading-relaxed">
                <li className="text-[18px] text-[#FFF] font-[400]">The losing team’s funds aren’t wasted. They’re added to the liquidity pool of the winning team, making the winner’s token stronger and more valuable.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">The winning token's launch date will be announced directly after the pre-sale goal is reached. The launch is expected to happen a few days later to secure a major CEX listing.
                </li>
              </ol>
            </div>
            <div className="w-[40%] flex justify-end">
              <img src={crdimg4} alt="card image" className="min-h-[220px]" />
            </div>
          </div>
          <div className="flex justify-between Rulesborder px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img src={crdimg5} alt="card image" className="min-h-[220px]" />
            </div>
            <div className="max-w-[655.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-[700] text-[#fff]">
                 5. Rewards For Picking The Winner
                </h2>
              </div>
              <ol className="list-disc	pl-[3rem] text-gray-200 pl-5 flex flex-col  text-base leading-relaxed">
                <li className="text-[18px] text-[#FFF] font-[400]">All participants receive the winning coin.
                </li>
                <li className="text-[18px] font-[700] text-[#FFF]">But only the winner team will receive exclusive Prize Money (airdropped to their wallet), find more info below.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">Winners can claim their coins 24 hours earlier.
                </li>
              </ol>
            </div>
          </div>
          <div className="flex justify-between Rulesborder2 px-[90px] pt-[35px] pb-[25px] items-center w-full bg-[#181818] rounded-[30px] overflow-hidden">
           
            <div className="max-w-[755.98px] w-[100%] flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <h2 className="text-[32px] font-[700] text-[#fff]">
                6. Transparency And Fairness
                </h2>
              </div>
              <ol className="list-disc text-gray-200 pl-[3rem] flex flex-col  text-base leading-relaxed">
                <li className="text-[18px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Public Contracts:</span> Both pre-sale contracts are fully visible to ensure complete transparency.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">
                  <span className="font-[700]">Fair Play:</span> Each wallet is limited to $10,000 to give everyone a chance to participate equally.
                </li>
              </ol>
            </div>
            <div className="w-[40%] flex justify-end">
              <img src={crdimg6} alt="card image" className="min-h-[195px]" />
            </div>
          </div>
          <div className="flex justify-between  Rulesborder px-[90px] pt-[35px] pb-[25px] items-start w-full bg-[#181818] rounded-[30px] overflow-hidden">
            <div className="w-[40%] flex justify-start">
              <img src={crdimg7} alt="card image" className="min-h-[190px]" />
            </div>
            <div className="max-w-[655.98px] w-[100%] flex flex-col gap-6">
              <div className="">
                <h2 className="text-[32px] font-[700] text-[#fff]">
                7. Join The Community
                </h2>
                <p className="pl-[2.9rem] text-[18px] pb-[15px] text-[#FFF] ">Connect with other participants in our Telegram channels:</p>
              </div>
              <ol className="list-disc	pl-[3rem] text-gray-200 pl-[3rem] flex flex-col  text-base leading-relaxed">
                <li className="text-[18px] text-[#FFF] font-[400] ">General Channel: For updates and discussions.
                </li>
                <li className="text-[18px] font-[400] text-[#FFF]">Team Pepe Channel: For Pepe supporters.
                </li>
                <li className="text-[18px] text-[#FFF] font-[400]">Team Doge Channel: For Doge believers.
                </li>
              </ol>
              <div className="pt-[10px]">
                <button className="bg-[#00B7FF]  max-w-[252px] flex justify-center space-x-2 items-center w-[100%] ml-[6rem] rounded-[5px] h-[39px] uppercase text-[18px] text-[#fff] font-[400]"> Join Telegram <img src={telicn} className="ml-4" alt="" /></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TheRulesSec;
