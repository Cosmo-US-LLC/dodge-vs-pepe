import React from "react";

function Roadmap() {
  return (
    <div className="flex flex-col items-center mt-4 bg-[black] p-4 relative">
      <p className="text-[24px] font-[700] leading-[31px] text-[white]">Roadmap</p>
      <div className="flex flex-row justify-between w-full mt-16 gap-2">
        <div className="w-[45%]">
          <div className="bg-[#FFBF00] font-[700] text-[12px] text-[14px] px-2 py-1 rounded-full">
            The  $DOPE Roadmap
          </div>
          <div className="bg-[#181818] flex flex-col items-left mt-4 rounded-[6px] py-4 px-1 min-h-[400px]">
            <p className="text-[10px] font-[600] leading-[8px] text-[#FEBF01]">Phase 1: The Battle Begins</p>
            <ol className="list-disc text-gray-200 pl-5 flex flex-col gap-1 text-base leading-relaxed mt-4">
              <li className="text-[10px] text-[#FFF] font-[400]">
                Concept Development: Craft the vision for $DOPE, combining Doge’s charm with a competitive presale.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Website Launch: Launch the $DOPE site with presale details, community channels, and resources for supporters.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Community Setup: Create Telegram channels for rallying Team Doge fans.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Marketing Kickoff: Roll out social media campaigns, influencer promos, and press releases to unite Doge fans globally.              </li>
            </ol>
          </div>
        </div>
        <div className="absolute bg-[white] h-full w-[1px] rounded-full left-1/2 top-[12%] h-[88%]"></div>
        <div className="w-[45%]">
          <div className="bg-[#4EB52A] font-[700] text-[12px] text-[14px] px-2 py-1 rounded-full">
            The  $PEGE Roadmap
          </div>
          <div className="bg-[#181818] flex flex-col items-left mt-4 rounded-[6px] py-4 px-1 min-h-[400px]">
            <p className="text-[10px] font-[600] leading-[8px] text-[#FEBF01]">Phase 1: The Battle Begins</p>
            <ol className="list-disc text-gray-200 pl-5 flex flex-col gap-1 text-base leading-relaxed mt-4">
              <li className="text-[10px] text-[#FFF] font-[400]">
                Concept Development: Craft the vision for $PEGE, combining Pepe’s iconic status with a thrilling presale.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Website Launch: Launch the $PEPE site with presale details and community tools.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Community Setup: Create Telegram channels for rallying Team Pepe believers.
              </li>
              <li className="text-[10px] text-[#FFF] font-[400]">
                Marketing Kickoff: Launch social media campaigns, influencer shoutouts, and press releases to unite the Pepe army.              </li>
            </ol>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Roadmap;

