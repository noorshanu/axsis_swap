"use client";

import React from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "./loading.json";

function SwapConfirmPop({ setSwapConfirmShow }) {
  return (
    <div
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        WebkitFontSmoothing: "subpixel-antialiased",
      }}
      // className="popContainer"
      className=" flex flex-col justify-between sm:justify-evenly  w-[550px] h-[400px] bg-[#17191E] rounded-[18px] p-6"
    >
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-[#fff] font-moment font-[400] text-xl ">
            Confirming...
          </h2>
        </div>

        <div className="CloseBtn bg-[#343434] rounded-lg pt-[1px] pb-[3px] px-[10px]">
          <button
            className="text-[#fff] text-[13px] font-[800]"
            onClick={() => setSwapConfirmShow(false)}
          >
            X
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="formWrapper text-center">
          <div className="h-[150px] w-[150px] m-auto relative flex text-center">
            {/* <Image src='/images/swap-page-icons/ring.png' fill alt=""/> */}
            <Lottie animationData={groovyWalkAnimation} loop={true} />
          </div>
          <div className="text-center mt-4">
            <h2 className="text-white text-xl font-redHat font-[700]">
              Waiting for confirmation
            </h2>

            <h2 className="text-white text-xl font-redHat font-[700]">
              Swapping 0.00023 ETH for 0.230231 BNB
            </h2>
            <p className="mt-3 text-[#808184] text-base font-redHat">
              Confirm this transaction in your wallet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapConfirmPop;
