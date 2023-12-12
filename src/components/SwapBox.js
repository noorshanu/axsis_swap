"use client";
import React, { useContext, useState } from "react";
import { FaCheckDouble, FaCoins, FaSave } from "react-icons/fa";
import SettingPop from "./PopUps/SettingPop";
import SwapPop from "./PopUps/SwapPop";
import SidebarLayout from "layout/SidebarLayout";
import Image from "next/image";
import { MYContext } from "layout/SwapLayout";
import BaseButton from "./BaseButton";
import BaseButton2 from "./BaseButton2";
import SwapButton from "./SwapButton";
import IconButton from "./IconButton";
import SelectToken from "./PopUps/SelectToken";
import TransitionWrapper from "./TransitionWrapper";

const PercentageButton = ({ children, onClick, active }) => {
  return (
    <BaseButton2
      onClick={onClick}
      roundness="8px"
      variant={active ? 0 : 2}
      className="py-2 px-3 text-xs group text-black"
    >
      {children}
    </BaseButton2>
  );
};

const SwapBox = ({ title }) => {
  let { showSwap, setShowSwap } = useContext(MYContext);
  const [activePercentage, setActivePercentage] = useState("50%");
  const [selectTokenShow, setSelectTokenShow] = useState(false);
  const [showPop, setShowPop] = useState(false);
  const [swapPopShow, setSwapPopShow] = useState(false);
  let [priceSwap, setPriceSwap] = useState([
    {
      price: "499.929494",
      balance: "999.855d86311 BNB",
      coin: "BNB",
      icon: "/images/swap-page-icons/bnbcoin.png",
    },
    {
      price: "33302.8",
      balance: "999.855d86311 AXIS",
      coin: "AXIS",
      icon: "/images/swap-page-icons/axiscoin.png",
    },
  ]);
  let swapHandler = () => {
    setPriceSwap([...priceSwap.reverse()]);
  };
  console.log(showSwap);
  return (
    <div
      className={`${showSwap ? "flex flex-col" : "hidden"} sm:flex flex-col`}
    >
      <div className="bg-white rounded-lg px-3 py-4 z-50  relative">
        {/* <div className="absolute right-[8%] sm:right-[46%] -bottom-[20px] ml-2 h-10 w-10 flex justify-center items-center bg-gradient-to-tr from-[#ACFFB9]  to-[#11FF37] rotate-158.2 rounded-full">
          <div className="h-[17px] w-[17px] mx-auto relative flex">
            <Image
              src="/images/swap-page-icons/swap-arrow-vert.png"
              fill
              alt=""
            />
          </div>
        </div> */}

        {/* <BaseButton2
          position="absolute"
          roundness="50%"
          className="group w-[34px] h-[34px] flex items-center justify-center right-[8%] sm:right-[46%] -bottom-[20px]"
          hoverVariant={1}
        >
          <img
            alt=""
            src="/images/swap-page-icons/swap-arrow-vert.png"
            className="w-[50%] transition-all duration-200 group-hover:invert"
          />
        </BaseButton2> */}

        <SwapButton
          position="absolute"
          onClick={swapHandler}
          className="text-[110%] right-[8%] sm:right-[46%] -bottom-[20px]"
        />

        <div className="flex justify-between flex-wrap-reverse mb-3 sm:mb-11">
          <div className="text-2xl sm:text-3xl font-moment text-black ">
            {title}
          </div>
          <div className="flex flex-wrap-reverse mb-2 gap-x-1">
            {title == "Gasless Swap" && (
              <div className="h-8 w-14 flex text-[#727575] items-center text-sm font-medium justify-center rounded-md bg-[#F3F3F3] cursor-pointer">
                <FaCoins className=" mr-2" />{" "}
                <span className="text-[#727575]">61</span>
              </div>
            )}
            {/* <div
              className="ml-1 h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer"
              onClick={() => setShowPop(true)}
            >
              <div className="h-[18px] w-[18px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/settings.png" fill alt="" />
              </div>
            </div> */}

            <IconButton onClick={() => setShowPop(!showPop)}>
              <img
                src="/images/swap-page-icons/settings.png"
                className="w-[58%]"
                alt=""
              />
            </IconButton>
          </div>
        </div>
        <div className="flex justify-between  mb-3">
          <div className="flex font-bold flex-wrap font-moment text-black">
            <div
              className="p-2 h-9 text-base rounded-full bg-[#F3F3F3] flex items-center font-moment font-normal cursor-pointer "
              onClick={() => setSelectTokenShow(true)}
            >
              <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex flex-wrap">
                <Image src={priceSwap[0].icon} fill alt="" />
              </div>
              {priceSwap[0].coin}
            </div>
            <div className="p-2 text-sm rounded-full ml-2 font-moment font-normal ">
              YOU PAY
            </div>
          </div>
          <div className="hidden space-x-1 sm:flex items-center flex-wrap justify-end font-bold">
            <PercentageButton
              active={activePercentage === "25%"}
              onClick={() => setActivePercentage("25%")}
            >
              25%
            </PercentageButton>
            <PercentageButton
              active={activePercentage === "50%"}
              onClick={() => setActivePercentage("50%")}
            >
              50%
            </PercentageButton>
            <PercentageButton
              active={activePercentage === "75%"}
              onClick={() => setActivePercentage("75%")}
            >
              75%
            </PercentageButton>
            <PercentageButton
              active={activePercentage === "100%"}
              onClick={() => setActivePercentage("100%")}
            >
              100%
            </PercentageButton>
          </div>
        </div>
        <div className="flex justify-between flex-row flex-wrap items-center">
          <input
            defaultValue={priceSwap[0].price}
            type="number"
            className="text-xl sm:text-2xl text-black w-[53%] font-moment"
          />

          <div className="text-base text-[#BFC0C8] font-redHat sm:mt-0 mt-2">
            Balance: {priceSwap[0].balance}
          </div>
        </div>

        <div className="flex sm:hidden space-x-1 items-center flex-wrap justify-start mt-3 font-bold">
          <PercentageButton
            active={activePercentage === "25%"}
            onClick={() => setActivePercentage("25%")}
          >
            25%
          </PercentageButton>
          <PercentageButton
            active={activePercentage === "50%"}
            onClick={() => setActivePercentage("50%")}
          >
            50%
          </PercentageButton>
          <PercentageButton
            active={activePercentage === "75%"}
            onClick={() => setActivePercentage("75%")}
          >
            75%
          </PercentageButton>
          <PercentageButton
            active={activePercentage === "100%"}
            onClick={() => setActivePercentage("100%")}
          >
            100%
          </PercentageButton>
        </div>
      </div>

      <div className="bg-white rounded-lg px-3 py-4 my-1">
        <div className="flex font-bold font-moment text-black">
          <div
            className="p-2 h-9 text-base rounded-full bg-[#F3F3F3] font-moment font-normal flex items-center cursor-pointer"
            onClick={() => setSelectTokenShow(true)}
          >
            <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
              <Image src={priceSwap[1].icon} fill alt="" />
            </div>
            {priceSwap[1].coin}
          </div>
          <div className="p-2 text-sm rounded-full ml-2 font-moment font-normal">
            YOU RECEIVE
          </div>
        </div>
        <div className="flex justify-between  flex-wrap items-center mt-4">
          <input
            defaultValue={priceSwap[1].price}
            type="number"
            className="text-2xl text-[#B3B4BD] font-moment w-[50%]"
          />

          <div className="text-base text-[#BFC0C8]">
            Balance: {priceSwap[1].balance}
          </div>
        </div>
      </div>

      <BaseButton2
        customSize={true}
        className="group text-black text-[22px] hover:text-white py-3 font-moment font-normal rounded-lg"
        onClick={() => setSwapPopShow(true)}
        hoverVariant={1}
      >
        Swap
      </BaseButton2>
      <TransitionWrapper open={selectTokenShow}>
        <SelectToken setSelectTokenShow={setSelectTokenShow} />
      </TransitionWrapper>
      <TransitionWrapper open={showPop}>
        <SettingPop setShowPop={setShowPop} showSwap={showSwap} />
      </TransitionWrapper>
      <TransitionWrapper open={swapPopShow} setOpen={setSwapPopShow}>
        <SwapPop
          setShowHandler={() => setSwapPopShow(!swapPopShow)}
          priceSwap={priceSwap}
          swapHandler={swapHandler}
        />
      </TransitionWrapper>
    </div>
  );
};

export default SwapBox;
