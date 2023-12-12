"use client";
import Image from "next/image";
import React, { useState } from "react";
import SelectToken from "./SelectToken";
import { HiArrowNarrowDown } from "react-icons/hi";
import SwapConfirmPop from "./SwapConfirmPop ";
import { Transition } from "@headlessui/react";
import TransitionWrapper from "components/TransitionWrapper";

function SwapPop({ setShowHandler, priceSwap, swapHandler,  }) {
  const [selectTokenShow, setSelectTokenShow] = useState(false);
  const [swapConfirmShow, setSwapConfirmShow] = useState(false);
  const handlePopupClose = () => {
    setSwapConfirmShow(true);
  };

  const highlightStyle = {
    zIndex: swapConfirmShow ? "0" : "10000",
    display: swapConfirmShow ? "none" : "block",
  };
  return (
    <>
      <div
        style={{
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
          WebkitFontSmoothing: "subpixel-antialiased",
        }}
        className="  sm:w-[550px] w-screen h-screen sm:h-[620px] flex flex-col justify-between sm:justify-evenly bg-[#17191E] rounded-[18px] p-2 sm:p-6"
      >
        <div>
          <div className="flex justify-between items-center sm:flex-row flex-row-reverse sm:p-0 pt-6 py-5 px-2">
            <div></div>

            <div className="">
              <h2 className="text-[#fff] font-moment font-[300] text-base ">
                Confirm Swap
              </h2>
            </div>

            <div className="CloseBtn bg-[#343434] rounded-lg pt-[1px] pb-[3px] px-[10px]">
              <button
                className="text-[#fff] text-[13px] font-[800]"
                onClick={() => {
                  setShowHandler();
                }}
              >
                X
              </button>
            </div>
          </div>

          <div className="mt-5">
            <div className="formWrapper">
              <div className="flex justify-between bg-white rounded-2xl items-center mt-2 sm:py-[18px] py-3 px-3 sm:px-[28px]">
                <div>
                  <input
                    type="text"
                    className="placeholder-black font-moment text-xl w-[80%] text-black pb-2"
                    value={priceSwap[0].price}
                  />
                  <p className="text-[#989898]">$0.181</p>
                </div>

                <div>
                  <div
                    className="p-2 text-base rounded-full bg-[#F3F3F3] flex items-center font-moment font-normal text-[#000] cursor-pointer "
                    onClick={() => setSelectTokenShow(true)}
                  >
                    <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex ">
                      <Image
                        src="/images/swap-page-icons/bnbcoin.png"
                        fill
                        alt=""
                      />
                    </div>
                    BNB
                  </div>
                </div>
              </div>

              <div className="flex justify-between bg-white rounded-2xl items-center sm:py-[18px] py-3 px-3 sm:px-[28px] mt-1 relative">
                <button
                  onClick={swapHandler}
                  className="cursor-pointer absolute outline-none top-[-23px] right-[48%] ml-2 h-10 w-10 flex justify-center items-center bg-gradient-to-tr from-[#ACFFB9]  to-[#11FF37] rotate-158.2 rounded-full"
                >
                  <div className="h-[15px] w-[16px] mx-auto relative flex">
                    <div className="h-[17px] w-[17px] mx-auto relative flex">
                      <Image
                        src="/images/swap-page-icons/swap-arrow-vert.png"
                        fill
                        alt=""
                      />
                    </div>
                  </div>
                </button>
                <div>
                  <input
                    type="text"
                    className="placeholder-black font-moment text-xl w-[80%] text-black pb-2"
                    value={priceSwap[1].price}
                  />
                  <p className="text-[#989898]">$0.179 (-1.500%)</p>
                </div>

                <div>
                  <div
                    className="p-2 text-base rounded-full bg-[#F3F3F3] flex items-center font-moment font-normal text-[#000] cursor-pointer"
                    onClick={() => setSelectTokenShow(true)}
                  >
                    <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
                      <Image src={`${priceSwap[1].icon}`} fill alt="" />
                    </div>
                    {priceSwap[1].coin}
                  </div>
                </div>
              </div>

              <p className="text-[#fff] text-[14px] font-redHat font-[600] sm:mt-3 mb-3 py-3 px-3 sm:px-[28px] ">
                {"1 EHT = 0.000232 BNB"}{" "}
                <span className="text-[#707776]">($1.24)</span>
              </p>
              <div className=" bg-white rounded-2xl sm:py-[18px] py-3 px-3 sm:px-[28px]">
                <div className="flex justify-between bb-1">
                  <div>
                    <h2 className="text-[#000] font-redHat text-sm font-[700] pb-1">
                      Expected Output
                    </h2>
                    <p className="text-[#000] font-redHat text-sm font-[700] pb-2">
                      Price Impact
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#000] font-redHat text-sm font-[700] pb-1">
                      {priceSwap[0].price} {priceSwap[0].coin}
                    </h2>
                    <p className="text-[#b3b4b5] font-redHat text-sm font-[700] text-end pb-2">
                      0.00%
                    </p>
                  </div>
                </div>

                <div className="flex justify-between">
                  <div>
                    <h2 className="text-[#000] font-redHat text-sm font-[700] pt-2 pb-1">
                      Minimum received{" "}
                      <span className="whitespace-nowrap">
                        {" "}
                        after slippage (5.00%){" "}
                      </span>
                    </h2>
                    <p className="text-[#000] font-redHat text-sm font-[700] pb-2">
                      Network Fee
                    </p>
                  </div>
                  <div>
                    <h2 className="text-[#000] font-redHat text-sm font-[700] pt-2 pb-1">
                      {priceSwap[1].price} {priceSwap[1].coin}
                    </h2>
                    <p className="text-[#000] font-redHat text-sm font-[700] text-end pb-2">
                      ~ $5.07
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-[#808184] font-redHat text-xs font-[700] pt-3 pb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </div>
          </div>
        </div>
        <button
          className="green-grad w-[100%] py-4 px-5 font-moment text-lg font-[400] text-black"
          onClick={handlePopupClose}
        >
          Confirm Swap
        </button>
      </div>
        <TransitionWrapper open={swapConfirmShow}>
          <SwapConfirmPop setSwapConfirmShow={setSwapConfirmShow} />
        </TransitionWrapper>

        <TransitionWrapper open={selectTokenShow}>

        <SelectToken setSelectTokenShow={setSelectTokenShow} />
        </TransitionWrapper>
    </>
  );
}

export default SwapPop;
