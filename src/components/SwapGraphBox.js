import { MYContext } from "layout/SwapLayout";
import Image from "next/image";
import React, { useContext, useState } from "react";
import BaseButton2 from "./BaseButton2";
import SwapButton from "./SwapButton";
import IconButton from "./IconButton";
import SelectToken from "./PopUps/SelectToken";
import TransitionWrapper from "./TransitionWrapper";

const SwapGraphBox = () => {
  let [swap, setSwap] = useState(false);
  let { showSwap, setShowSwap } = useContext(MYContext);
  const [selectTokenShow, setSelectTokenShow] = useState(false);

  return (
    <>
      <div
        className={`bg-white  rounded-xl ${
          showSwap ? "h-auto " : "h-auto sm:h-[99vh] "
        } font-moment   px-2 py-4 sm:p-5 `}
      >
        <div className="flex justify-between flex-wrap-reverse">
          <div className="flex sm:flex-row flex-row-reverse items-center space-x-4">
            <div
              className={`${
                swap ? "flex-row-reverse" : "flex-row"
              } flex items-center text-lg  ml-2 sm:ml-0 sm:text-2xl font-moment text-black`}
            >
              <div
                className="text-lg sm:text-2xl font-moment text-black flex items-center cursor-pointer"
                onClick={() => setSelectTokenShow(true)}
              >
                <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
                  <Image
                    src="/images/swap-page-icons/axiscoin.png"
                    fill
                    alt=""
                  />
                </div>
                AXIS
              </div>
              <span className="text-lg sm:text-2xl font-moment text-black mx-2">
                /{" "}
              </span>

              <div
                className="text-lg sm:text-2xl font-moment text-black flex items-center cursor-pointer"
                onClick={() => setSelectTokenShow(true)}
              >
                <div className="h-[22px] w-[22px] mr-1 mx-auto relative flex">
                  <Image
                    src="/images/swap-page-icons/bnbcoin.png"
                    fill
                    alt=""
                  />
                </div>
                BNB
              </div>
            </div>
            {/* <div className="mr-2 sm:ml-2 h-9 w-9 flex justify-center items-center bg-gradient-to-tr from-[#ACFFB9]  to-[#11FF37] rotate-158.2 rounded-full">
              <div className="h-[15px] w-[16px] mx-auto relative flex">
                <Image
                  src="/images/swap-page-icons/swap-arrow-hortz.png"
                  fill
                />
              </div>
            </div> */}

            <SwapButton
              className="rotate-[90deg] mr-2 sm:m-0"
              onClick={() => {
                console.log("swapping");
                setSwap(!swap);
              }}
            />
          </div>
          <div className="flex space-x-2 mb-2 ml-1">
            <IconButton
              onClick={() => {
                setShowSwap(!showSwap);
              }}
            >
              <img
                src="/images/swap-page-icons/expand.png"
                className="w-[42%]"
                alt=""
              />
            </IconButton>

            <IconButton>
              <img
                src="/images/swap-page-icons/3dots-vert.png"
                className="w-[10%]"
                alt=""
              />
            </IconButton>

            {/* <button
              onClick={() => {
                setShowSwap(!showSwap);
              }}
              className={`outline-none border-none h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] md:hover:bg-gradient-to-b md:hover:from-[#ACFFB9] md:hover:to-[#11FF37] text-black cursor-pointer  ${
                showSwap
                  ? "bg-[#F3F3F3]"
                  : "bg-gradient-to-b from-[#ACFFB9] to-[#11FF37]"
              }`}
            >
              <div className="h-[13px] w-[13px] mx-auto relative flex">
                <Image src="/images/swap-page-icons/expand.png" fill />
              </div>
            </button> */}
            {/* <div className="ml-1 h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer">
              <div className="h-[13px] w-[2px] mx-auto relative flex">
                <Image src="/images/swap-page-icons/3dots-vert.png" fill />
              </div>
            </div> */}
          </div>
        </div>
        <div
          className={`text-5xl font-medium ${
            showSwap ? "hidden" : "flex"
          } sm:flex items-center mt-8 font-moment text text-black`}
        >
          0.0015{" "}
          <span className="ml-3 text-xl text-[#11FF37] font-redHat font-bold">
            +0.001 (2.12%)
          </span>
        </div>
        <div
          className={`${
            showSwap ? "hidden" : "flex"
          } sm:flex font-normal  text-base sm:text-lg text-[#707776] my-2 font-moment`}
        >
          AXIS / BNB
        </div>
        <div
          className={`${
            showSwap ? "hidden" : "flex"
          } sm:flex items-center justify-between flex-wrap sm:flex-row flex-row-reverse `}
        >
          <div className="text-[#BFC0C8] text-[15px] font-medium font-redHat mr-2">
            Feb 12, 2022, 03:08 AM
          </div>
          <div className="flex space-x-1 mt-2">
            {/* <div className="h-8 px-3 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer">
              <div className="h-[12px] w-[12px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/box.png" fill />
              </div>
              <span className="text-[#6F7675] text-sm font-medium ml-3 mr-1">
                24h
              </span>{" "}
              <div className="h-[7px] w-[10px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/arrow-down.png" fill />
              </div>
            </div> */}

            <BaseButton2
              variant={2}
              className="px-3 flex items-center text-sm"
              roundness="8px"
            >
              <img
                src="/images/swap-page-icons/box.png"
                className="w-[.9rem]"
                alt=""
              />
              <span
                className="text-[#6F7675] text-sm font-medium ml-2 mr-2 hidden sm:inline-block"
                style={{ fontSize: "inherit" }}
              >
                24h
              </span>
              <img
                src="/images/swap-page-icons/arrow-down.png"
                className="hidden sm:inline-block"
                alt=""
              />
            </BaseButton2>

            {/* <button
              className={`h-8 w-8 border-none outline-none flex justify-center items-center rounded-md hover:bg-gradient-to-b hover:from-[#ACFFB9] hover:to-[#11FF37] text-black cursor-pointer  ${
                showSwap
                  ? "bg-[#F3F3F3]"
                  : "bg-gradient-to-b from-[#ACFFB9] to-[#11FF37]"
              }`}
            >
              <div className="h-[20px] w-[20px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/filter.png" fill />
              </div>
            </button> */}

            <IconButton active={showSwap}>
              <img
                src="/images/swap-page-icons/filter.png"
                className="w-[54%]"
                alt=""
              />
            </IconButton>

            <IconButton>
              <img
                src="/images/swap-page-icons/graph.png"
                className="w-[54%]"
                alt=""
              />
            </IconButton>

            {/* <div className="h-8 w-8 flex justify-center items-center rounded-md bg-[#F3F3F3] cursor-pointer">
              <div className="h-[17px] w-[19px] mx-0 relative flex">
                <Image src="/images/swap-page-icons/graph.png" fill />
              </div>
            </div> */}
          </div>
        </div>
        <div
          className={`${
            showSwap
              ? "hidden sm:h-[31vh]"
              : " flex sm:h-[62%]  sm:justify-self-end"
          } sm:flex flex-col h-[66.5vh]  mt-10 space-y-3 text-sm relative overflow-hidden transition-height duration-300`}
        >
          <img
            src="/images/dex-chart.png"
            className="h-[100%] w-auto hidden sm:flex"
            alt=""
          />
          <img
            src="/images/dex-chart-mobile.png"
            className="h-[100%] w-auto flex sm:hidden "
            alt=""
          />
        </div>
      </div>
      <TransitionWrapper open={selectTokenShow}>
        <SelectToken setSelectTokenShow={setSelectTokenShow} />
      </TransitionWrapper>
    </>
  );
};

export default SwapGraphBox;
