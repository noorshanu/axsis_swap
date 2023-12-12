import BaseButton from "components/BaseButton";
import SideBar from "components/SideBar";
import useMediaQuery from "hooks/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

function SidebarLayout({ children }) {
  const [sidebarVisible, setSidebarVisibility] = useState(false);
  const isAbove1280px = useMediaQuery("(min-width : 1280px)");

  const toggleSidebar = () => setSidebarVisibility((val) => !val);

  return (
    <div className="min-h-screen flex flex-col">
      <SideBar
        sidebarVisible={sidebarVisible}
        setSidebarVisibility={setSidebarVisibility}
      />

      <main
        className={`w-full p-0 pt-70px sm:pt-0 xl:pl-[220px] flex-1 flex flex-col transition-all duration-300 ${
          sidebarVisible &&
          "-translate-x-[calc(250px+2rem)] pointer-events-none opacity-[.4]"
        }`}
      >
        {!isAbove1280px && (
          <header className="px-4 pt-4 pb-6 flex items-center justify-between">
            <Link
              href="/"
              className="h-[46px] w-[46px] relative flex"
              onClick={() => setActiveMenu(null)}
            >
              <Image
                src="/images/logos/logo-white.svg"
                fill={true}
                alt="logo"
              />
            </Link>

            <div className="flex items-center space-x-3">
              <BaseButton
                customSize={true}
                variant={1}
                className="px-0 h-[36px] w-[36px] flex items-center justify-center bg-white"
              >
                <img
                  src="/images/sidebar-icons/wallet.svg"
                  className="w-[60%]"
                  alt=""
                />
              </BaseButton>
              <BaseButton
                customSize={true}
                onClick={toggleSidebar}
                className="px-0 h-[36px] w-[36px] flex items-center justify-center text-xl"
              >
                <FiMenu />
              </BaseButton>
            </div>
          </header>
        )}

        {children}
      </main>
    </div>
  );
}

export default SidebarLayout;
