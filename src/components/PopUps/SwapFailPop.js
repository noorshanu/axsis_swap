"use client";

import React from "react";
import groovyWalkAnimation from "./alert.json";
import Lottie from "lottie-react";

function SwapFailPop({ setSwapConfirmShow}) {
  return (
    <div className="swappopup" style={{ zIndex: "10000" }}>
      <div className="popContainer w-[550px] h-[380px] bg-[#17191E] rounded-[18px] p-6">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-[#fff] font-moment font-[400] text-xl ">
            Error
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
          <Lottie animationData={groovyWalkAnimation} loop={true} />
            </div>
              <div className="text-center my-5">
                <h2 className="text-white text-xl font-redHat font-[700]">Transaction rejected</h2>

  

              </div>

              <button className="green-grad w-[100%] py-4 px-5 font-moment text-lg font-[800] text-black" onClick={() => setSwapConfirmShow(false)}>
              Dismiss
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SwapFailPop;
