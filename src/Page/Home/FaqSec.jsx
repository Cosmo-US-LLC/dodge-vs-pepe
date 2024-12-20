import React, { useState } from "react";

import arw from "../../assets/footer/Group 1410124940.svg";
// import faqvet2 from "../assets/Svgs/faqsvt (2).svg";

const FaqItem = ({ question, answer, isOpen, handleClick }) => {
  const createMarkup = () => ({ __html: answer });
  const contentStyles = {
    maxHeight: isOpen ? "1000px" : "0",
    opacity: isOpen ? "1" : "0",
    overflow: "hidden",
    transition: "max-height 0.9 ease, opacity 2s ease",
  };

  return (
   <div className="">
     <div
      className={`border faqsbrder flex-col rounded-[15px] border-solid   bg-[#181818] ${
        isOpen ? "border-[#fff]" : "border-[#fff]"
      }  border-solid`}
    >
      <div
        className="flex justify-between  items-between px-[34px] py-[30px] gap-[25px] cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center justify-center gap-5 xs:pt-[14px]">
          <div className={`text-[22px] text-[#fff] font-[400]`}>{question}</div>
        </div>

        <h4
          className={`text-[18px] xs:text-[10px] rounded-full w-[26px] h-[26px] xs:h-[16px] xs:w-[16px]  flex items-center justify-center plusIcon  ${
            !isOpen
              ? " rotate-0"
              : "rotate-[-180deg]"
          }`}
        >
          {isOpen ? (
            <>
              <div>
                <img src={arw} alt="" />
              </div>
            </>
          ) : (
            <>
              <div>
               <img src={arw} alt="" />
              </div>
            </>
          )}
        </h4>
      </div>
      <div style={contentStyles}>
        <div className="w-[100%] px-[34px] pb-[20px]">
          <p
            className="pb-[10px] answer text-[22px] text-[#fff] leading-[150%] font-[400]"
            dangerouslySetInnerHTML={createMarkup()}
          />
        </div>
      </div>
    </div>
   </div>
  );
};

const FaqSec = () => {
  const faqData = [
    {
      question: "What is DogevsPepe?",
      answer:
        "DogeVsPepe is the first-ever crypto presale showdown where two legendary memes, Doge and Pepe, compete to raise $1 million. The team with the most funds raised wins, escapes the Matrix, and launches as a live cryptocurrency.",
    },
    {
      question: "How does the presale work?",
      answer:
        "<span>.</span> Pick your team: Doge ($DOPE) or Pepe ($PEGE).<br/><span>.</span> Buy tokens to support your chosen champion(s).<br/><span>.</span> Once the combined total hits $1 million, the team with the most funds raised is declared the winner",
    },
    {
      question: "Can I invest in both teams?",
      answer:
        "Yes, you can support both teams by purchasing tokens for Doge and Pepe. However, only one will win, so choose your strategy wisely!",
    },
    {
      question: "How many times can I buy tokens?",
      answer:
        "You can buy as many times as you like. However, each individual purchase is capped at $10,000 to ensure fairness and equal participation.",
    },
    {
      question: "Is the presale fair and secure?",
      answer:
        "Yes, both presale contracts are fully public and transparent, allowing everyone to see how funds are allocated.",
    },
    {
      question: "What happens after I make a purchase?",
      answer:
        "<span>.</span> Everyone who purchases tokens will receive the winning coin, regardless of which team they supported.<br/><span>.</span> However, those who backed the winning team will receive extra rewards:",
    },
    {
      question: "What are the rewards for picking the correct team?",
      answer:
        "1. Daily Bonus Coins: <br/> <span>.</span> 1M coins are added to the winner pool daily while the fight is ongoing. <br/> <span>.</span> These coins are airdropped proportionally based on the number of tokens you hold.<br/>2. Early Claim Access: <br/><span>.</span> Winners can claim their airdropped coins 24 hours earlier than participants who supported the losing team.",
    },
    {
      question: "What happens if my team loses?",
      answer:
        "Even if your team loses:<br/><span>.</span> You will still receive the winning coin based on the amount of tokens you purchased.<br/> <span>.</span> Your investment will contribute to strengthening the liquidity pool of the winning token.",
    },
    {
      question: "How do I track the progress of the presale?",
      answer:
        "Real-time stats showing how much each team has raised will be displayed on the website, so you can stay updated and cheer your team to victory.",
    },
    {
      question: "When does the winning token launch?",
      answer:
        "The winning token launches within a few days of the $1 million presale goal being reached. No long waits with this presale..",
    },
  ];
  const [openItems, setOpenItems] = useState([]);

  const handleClick = (index) => {
    setOpenItems(openItems === index ? null : index);
  };

  return (
    <>
      <div className=" relative" id="faq">
        <div className=" w-[100%] max-w-[1143px] pt-[73px] mx-auto pb-[63px]">
          <div className="text-center ">
            <h2 className="text-[#fff]  uppercase text-[42px] font-[700] leading-[142.857%] pb-[10px]">
            frequently asked questions
            </h2>
            {/* <img
              src={faqvet1}
              className="absolute left-[3%] top-[-6%]"
              alt=""
            />
            <img
              src={faqvet2}
              className="absolute right-[3%] top-[-6%]"
              alt=""
            /> */}
          </div>
          <div className="2xl:w-[100%] xl:w-[100%] lg:w-[100%] md:w-[100%] sm:w-[100%] w-[100%] mx-auto">
            <div className="space-y-[15px]">
              {faqData.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems === index}
                  handleClick={() => handleClick(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqSec;