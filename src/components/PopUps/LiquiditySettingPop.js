"use client";
import Toggle from "components/Toggle";
import Image from "next/image";
import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

function LiquiditySettingPop({ settingHandler }) {
  return (
    <div
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        WebkitFontSmoothing: "subpixel-antialiased",
      }}
      className=" h-screen w-screen sm:w-[550px] sm:h-[540px] flex flex-col justify-between sm:justify-evenly bg-white sm:bg-[#17191E] rounded-[18px] px-6 py-8 sm:p-6"

      // className="popContainer  "
    >
      <div className="flex justify-between">
        <div className="">
          <h2 className="text-black sm:text-[#fff] font-moment font-[500] sm:font-normal text-xl ">
            Settings
          </h2>
        </div>

        <div className="CloseBtn bg-[#343434] rounded-lg pt-[1px] pb-[3px] px-[10px]">
          <button
            className="text-[#fff] text-[13px] font-[800]"
            onClick={() => settingHandler()}
          >
            X
          </button>
        </div>
      </div>

      <div className="mt-8">
        <div className="formWrapper">
          <div className="flex items-center gap-3">
            <p className="text-black sm:text-white font-redHat text-xl font-[500] sm:font-normal">
              Slippage tolerance
            </p>
            <span className="font-redHat text-xl font-[600] text-white">
              <AiOutlineQuestionCircle />
            </span>
          </div>
          <div className="flex gap-3 items-center my-4">
            <button className="green-grad text-black font-moment text-base font-[500] sm:font-normal py-4 px-4 ">
              Auto
            </button>
            <input
              type="number"
              placeholder="0.50%"
              className="text-[#000] py-4 px-4 rounded-xl bg-[#F3F3F3] sm:bg-white text-end w-[100%] placeholder-black font-moment text-xl"
            />
          </div>

          <div className="flex items-center gap-3 py-4">
            <p className="text-black sm:text-white font-redHat text-xl font-[500] sm:font-normal">
              Transaction deadline
            </p>
            <span className="font-redHat text-xl font-[600] text-white">
              {" "}
              <AiOutlineQuestionCircle />
            </span>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              placeholder="30"
              className="text-[#000] py-4 px-4 rounded-xl bg-[#F3F3F3] sm:bg-white text-end w-[190px]  placeholder-black font-moment text-xl "
            />
            <p className="text-black sm:text-white font-redHat text-xl font-[500] sm:font-normal">
              minutes
            </p>
          </div>
          <p className="text-black sm:text-white font-redHat text-xl font-[500] sm:font-normal pt-7 pb-5">
            Interface Setting
          </p>

          <div className="flex items-center justify-between gap-3 pb-6">
            <p className="text-black sm:text-white font-redHat text-xl font-[500] sm:font-normal flex gap-3">
              Auto Router API <AiOutlineQuestionCircle />
            </p>
            <Toggle label="Subscribe" />
          </div>
          <div className="flex items-center justify-between gap-3 pb">
            <p className="text-black sm:text-white font-redHat text-xl font-[500] sm:font-normal flex gap-3">
              Expert Mode <AiOutlineQuestionCircle />
            </p>
            <Toggle label="Subs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiquiditySettingPop;
