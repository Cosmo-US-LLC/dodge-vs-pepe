import React, { useState } from "react";
import percentage_bar from "../../assets/Mobile/percentage_bar.svg";
import stages from "../../assets/Mobile/stages.svg";
import chestImage from "../../assets/MilestonesSec/deal-box.svg";
import groupImage from "../../assets/MilestonesSec/group-line-flag.svg";

function Milestones() {
  const [dogePercentage, setDogePercentage] = useState(18);
  const [pepePercentage, setPepePercentage] = useState(24);
  return (
    <div className=" relative w-[100%] pt-[40px] overflow-hidden pb-[40px]">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
           
            <h3 className="w-[360px] text-[#FFFCFC] text-center font-k2d text-[24px] font-[700] leading-normal uppercase">
            Mystery <br/> Milestones Reveal
            </h3>

            <p className="text-[#FFF] text-center font-k2d text-[12px] font-[400] leading-[114%]">
              The race heats up with every milestone!
            </p>
          
          <p className="w-[331px] text-[#FFF] text-center font-k2d text-[12px] font-[400] leading-[114%]">
            When one project hits a milestone, it reveals a mystery feature for
            the opposing project, keeping the <br />
            competition alive and rewarding both sides. With four key
            milestones—250k, 500k, 750k, and 900k—
            <br />
            each unlocks exciting surprises that drive both teams closer to the
            finish line.
          </p>
        </div>
        <div>
          <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#EFAB00]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600"
              style={{ width: `${dogePercentage}%` }}
            >
              <span className="text-[32.668px] font-extrabold text-[#0B0101] leading-none font-[Inter]">
                {dogePercentage}%
              </span>
            </div>
          </div>

          <div className="relative flex min-h-[500px] justify-center items-center flex-col ">
            <div className="absolute top-[6%] left-[24%] gap-[140px] flex ">
              <div className="flex flex-col items-center justify-center">
                <img src={chestImage} alt="Treasure Chest" className="mb-2 " />
                <span className="text-white font-inter text-[22px] font-bold leading-normal">
                  $250,000
                </span>
              </div>
              <div>
                <img src={chestImage} alt="Treasure Chest" className="mb-2 " />
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
              </div>
              <div>
                <img src={chestImage} alt="Treasure Chest" className="mb-2 " />
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
              </div>
            </div>
            <div className="relative z-50 flex items-center justify-center">
              <span className="text-white font-inter text-[36px] font-bold leading-normal absolute right-[3%] top-[-21%]">
                $1,000,000
              </span>

              <img src={groupImage} alt="flag" className="" />
              <span className="text-white font-inter text-[36px] font-bold leading-normal absolute right-[1%] bottom-[-20%]">
                The Winner
              </span>
            </div>
            <div className="absolute bottom-[6%] left-[24%] gap-[150px] flex ">
              <div className="flex flex-col items-center justify-center">
                <span className="text-white font-inter text-[22px] font-bold leading-normal">
                  $250,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-2 " />
              </div>
              <div>
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-2 " />
              </div>
              <div>
                <span className="text-white font-inter text-[22px] font-bold leading-normal opacity-30">
                  $250,000
                </span>
                <img src={chestImage} alt="Treasure Chest" className="mt-2 " />
              </div>
            </div>
          </div>
          <div className="bg-[#181818] p-1 rounded-[40.835px] w-[100%] h-[66.415px] border-[0.794px] border-[#09FC3C]">
            <div
              className="flex items-center justify-center h-full rounded-full bg-gradient-to-r"
              style={{
                width: `${pepePercentage}%`,
                background:
                  "linear-gradient(66deg, #79EC8F 25.98%, #09FC3C 65.48%)",
              }}
            >
              <span className="text-[32.668px] font-extrabold text-[#0B0101] leading-none font-[Inter]">
                {pepePercentage}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    // <div className="flex flex-col items-center p-4 mt-4 bg-[black]">
    //   <p className="text-[24px] font-[700] leading-[31px] text-[white]">Milestones Mystery Reveals</p>
    //   <p className="text-[12px] font-[400] leading-[13px] text-[white] mt-2">
    //     The race heats up with every milestone!
    //   </p>
    //   <p className="text-center text-[12px] font-[400] leading-[13px] text-[white] mt-4">
    //     When one project hits a milestone, it reveals a mystery feature for the opposing project, keeping the competition alive and rewarding both sides. With four key milestones—250k, 500k, 750k, and 900k—each unlocks exciting surprises that drive both teams closer to the finish line.
    //   </p>
    //   <div className="relative">
    //     <img
    //       src={percentage_bar}
    //       className="mt-8"
    //       alt="percentage_bar"
    //     />
    //     <img
    //       src={stages}
    //       className="absolute top-[70px]"
    //       alt="stages"
    //     />
    //   </div>

    // </div >
  );
}

export default Milestones;
