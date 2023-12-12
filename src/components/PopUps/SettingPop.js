"use client";

import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import Toggle from "components/Toggle";
function SettingPop({ setShowPop ,showPop}) {
  let [active, setActive] = useState("instant");
  return (
    <div
      className="popup transition-opacity duration-200"
      style={{ zIndex: "10000" }}
    >
      <div className="popContainer w-screen h-screen sm:w-[550px] sm:h-fit bg-white rounded-[18px]  p-3 py-4 sm:p-6">
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-[#000] font-moment font-[400] text-xl ">
              Settings
            </h2>
          </div>

          <div className="CloseBtn bg-[#F3F3F3] rounded-lg pt-[1px] pb-[3px] px-[10px]">
            <button
              className="text-[#000] text-[13px] font-[800]"
              onClick={() => setShowPop(false)}
            >
              X
            </button>
          </div>
        </div>

        <div className="pt-8 sm:mt-5 formWrapper flex flex-col sm:justify-evenly justify-between h-full">
          <form className="">
            <label
              htmlFor="instant"
              className={`${
                active == "instant" ? "active" : ""
              } py-[12] px-5 flex justify-between align-middle items-center mb-4`}
            >
              <label
                htmlFor="instant"
                className="flex align-middle items-center cursor-pointer"
              >
                <input
                  type="radio"
                  onChange={(e) => e.target.checked && setActive("instant")}
                  id="instant"
                  name="fav_language"
                />

                <h2
                  className={`${
                    active == "instant" ? "active" : ""
                  } text-[#707776] font-[400] text-base sm:text-lg ml-4 font-moment`}
                >
                  Instant
                </h2>
                <MdKeyboardArrowLeft className="text-[#707776] text-[15px] ml-2 " />
                <p className="text-[#707776] text-[15px]"> 10 sec</p>
              </label>

              <div className="pl-1 text-sm text-[#707776] whitespace-nowrap">
                290.00 Gwei
              </div>
            </label>

            <label
              htmlFor="high"
              className={`${
                active == "high" ? "active" : ""
              } py-[12] px-5  flex justify-between align-middle items-center mb-4`}
            >
              <label
                htmlFor="high"
                className="flex align-middle items-center cursor-pointer"
              >
                <input
                  type="radio"
                  onChange={(e) => e.target.checked && setActive("high")}
                  id="high"
                  name="fav_language"
                />

                <h2
                  className={`${
                    active == "high" ? "active" : ""
                  } text-[#707776] font-[400] text-base sm:text-lg ml-4 font-moment`}
                >
                  High
                </h2>

                <p className="text-[#707776] text-[15px] ml-2 whitespace-nowrap">
                  {" "}
                  ~ 12 sec{" "}
                </p>
              </label>

              <div className="pl-1 text-sm text-[#707776] whitespace-nowrap">
                290.00 Gwei
              </div>
            </label>
            <label
              htmlFor="medium"
              className={`${
                active == "medium" ? "active" : ""
              } py-[12] px-5  flex justify-between align-middle items-center mb-4`}
            >
              <label
                htmlFor="medium"
                className="flex align-middle items-center cursor-pointer"
              >
                <input
                  type="radio"
                  onChange={(e) => e.target.checked && setActive("medium")}
                  id="medium"
                  name="fav_language"
                />

                <h2
                  className={`${
                    active == "medium" ? "active" : ""
                  } text-[#707776] font-[400] text-base sm:text-lg ml-4 font-moment`}
                >
                  Medium
                </h2>

                <p className="text-[#707776] text-[15px] ml-2 whitespace-nowrap">
                  {" "}
                  ~ 12 sec{" "}
                </p>
              </label>

              <div className="pl-1 text-sm text-[#707776] whitespace-nowrap">
                290.00 Gwei
              </div>
            </label>

            <label
              htmlFor="low"
              className={`${
                active == "low" ? "active" : ""
              } py-[12] px-5 flex justify-between align-middle items-center mb-4`}
            >
              <label
                htmlFor="low"
                className="flex align-middle items-center cursor-pointer"
              >
                <input
                  type="radio"
                  onChange={(e) => e.target.checked && setActive("low")}
                  id="low"
                  name="fav_language"
                />

                <h2
                  className={`${
                    active == "low" ? "active" : ""
                  } text-[#707776] font-[400] text-base sm:text-lg ml-4 font-moment`}
                >
                  Low
                </h2>

                <p className="text-[#707776] text-[15px] ml-2 whitespace-nowrap">
                  {" "}
                  ~ 1 min
                </p>
              </label>

              <div className="pl-1 text-sm text-[#707776] whitespace-nowrap">
                290.00 Gwei
              </div>
            </label>
          </form>
          <div className="footer pb-8 sm:p-0">
            <div className="flex items-center justify-between mt-8">
              <p className="text-[#000] font-moment text-[17px] font-[400] ">
                Auto Slippage
              </p>
              <Toggle label="Subs" />
            </div>

            <div className="flex justify-between items-center mt-4 mb-2">
              <p className="text-[#989898] text-[14px] font-redHat font-[600]">
                Slippage tolerance
              </p>
              <input
                type="number"
                className="place text-[#000] font-moment font-[400] text-2xl placeholder-black text-end w-[60%] "
                placeholder=" 0.5%"
              />{" "}
            </div>
            <p className="text-[#000] font-redHat font-[600] flex items-center gap-2  ">
              <span>
                <AiFillInfoCircle />
              </span>{" "}
              Your transaction may be front-run
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingPop;
