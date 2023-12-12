import React, { useState } from "react";
import { FaMediumM, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import SocialIcon from "./SocialIcon";
import NavMenu from "utils/NavMenu";
import SidebarItem from "./SidebarItem";
import useMediaQuery from "hooks/useMediaQuery";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import BaseButton2 from "./BaseButton2";

function SideBar({ sidebarVisible, setSidebarVisibility }) {
  const [activeMenu, setActiveMenu] = useState(false);
  const isAbove1280px = useMediaQuery("(min-width : 1280px)");
  const sidebarRef = OutsideClickDetector(() => setSidebarVisibility(false));

  return (
    <>
      {!isAbove1280px && (
        <img
          src="images/blob.png"
          className={`fixed top-[-12rem] right-[-6rem] z-10 w-[34rem] pointer-events-none transition-all duration-300 ${
            !sidebarVisible ? "opacity-0" : "opacity-100"
          }`}
          alt=""
        />
      )}

      <div
        ref={sidebarRef}
        className={`w-[250px] xl:w-[220px] fixed top-0 xl:left-0 right-0 h-screen overflow-y-auto menu flex flex-col px-3 xl:bg-main transition-all duration-300 z-[110] ${
          sidebarVisible
            ? "translate-x-0"
            : "translate-x-[250px] xl:translate-x-0"
        }`}
      >
        {isAbove1280px && (
          <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
            <img
              src="/images/sidebar-icons/bg-blob.png"
              className="w-full absolute left-0 top-0 h-full"
              alt=""
            />
          </div>
        )}

        {!isAbove1280px && (
          <div className="w-full py-6 px-3 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Link
                href="/"
                className="h-[36px] w-[36px] relative flex"
                onClick={() => setActiveMenu(null)}
              >
                <Image
                  src="/images/logos/logo-white.svg"
                  fill={true}
                  alt="logo"
                />
              </Link>

              <p className="font-moment text-base font-normal">Axis Finance</p>
            </div>

            {/* <button className="flex text-2xl" onClick={toggleSidebar}>
              <IoClose />
            </button> */}
          </div>
        )}

        <div className="flex-1 mb-4 xl:mb-8">
          {isAbove1280px && (
            <div className="w-full py-6">
              <Link
                href="/"
                className="h-[60px] xl:h-[72px] w-[60px] xl:w-[72px] mx-auto relative flex"
                onClick={() => setActiveMenu(null)}
              >
                <Image
                  src="/images/logos/logo-white.svg"
                  fill={true}
                  alt="logo"
                />
              </Link>
            </div>
          )}

          <div className="space-y-2">
            {NavMenu.map((menuItem, id) => {
              const active = activeMenu === menuItem.title;

              return (
                <SidebarItem
                  key={id}
                  active={active}
                  menuItem={menuItem}
                  setActiveMenu={setActiveMenu}
                  setSidebarVisibility={setSidebarVisibility}
                />
              );
            })}
          </div>
        </div>

        <div className="mb-6 xl:mb-0">
          {isAbove1280px && (
            <div className="pb-4">
              <BaseButton2
                roundness="8px"
                className="w-full space-x-3 group flex items-center px-3 h-[34px] xl:h-[40px]"
                variant={4}
                hoverVariant={1}
              >
                <img
                  src="/images/sidebar-icons/wallet.svg"
                  className="h-[1rem] xl:h-[1.1rem] transition-all duration-200 group-hover:invert"
                  alt=""
                />
                <span className="font-normal text-black font-moment text-xs transition-all duration-200 group-hover:text-white">
                  Connect Wallet
                </span>
              </BaseButton2>
              {/* <div className="flex space-x-2 justify-center w-full mt-2 rounded-lg items-center bg-gradient-to-b from-[#ACFFB9] to-[#11FF37] h-[50px] ">
          </div> */}
              <div className="flex w-full mt-2 rounded-lg justify-between items-center py-3 text-white">
                <div className="flex items-center space-x-2">
                  <div className="relative w-[24px] h-[24px]">
                    <Image
                      src="/images/logos/logo-green.svg"
                      fill={true}
                      className="mr-3"
                      alt="green-logo"
                    />
                  </div>
                  <p className="text-sm xl:text-base font-medium">$0.235</p>
                </div>
                {/* <button className="border-green border-1 text-white py-[0.16rem] xl:py-1 w-16 xl:w-20 text-center cursor-pointer text-sm rounded-lg transition-all duration-300 hover:bg-green hover:text-black">
                Buy
              </button> */}

                <BaseButton2
                  roundness="8px"
                  className="text-sm py-[0.16rem] xl:py-1 w-16 xl:w-20 hover:text-black after:border-2 after:border-green hover:after:opacity-0"
                  hoverVariant={2}
                  variant={2}
                >
                  Buy
                </BaseButton2>
              </div>
              <div className="flex w-full  rounded-lg justify-between items-center py-1 text-white">
                <div className="flex items-center space-x-2">
                  <img
                    src="/images/sidebar-icons/wallet.svg"
                    className="h-[1.1rem] invert"
                    alt=""
                  />

                  <p className="text-sm xl:text-base font-semibold">Balance</p>
                </div>
                <div className="text-white bg-[#2B2B2B] py-1 w-20 text-center cursor-pointer text-sm rounded-lg ">
                  127,678 $
                </div>
              </div>
            </div>
          )}

          <div className="xl:py-4 xl:border-t-1 xl:border-grey flex items-center space-x-4 xl:space-x-0 xl:justify-between">
            <SocialIcon>
              <FaTelegramPlane />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <img
                src="/images/gitbook.svg"
                className="h-[1.4em] invert group-hover:invert-0 transition-all duration-200"
                alt=""
              />
            </SocialIcon>
            <SocialIcon>
              <FaMediumM />
            </SocialIcon>
          </div>
        </div>
      </div>

      {/* <div className={`black-screen ${sidebarVisible && "show"} z-[100]`}></div> */}
    </>
  );
}

export default SideBar;
