import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { BiChevronDown } from "react-icons/bi";
import SidebarButton from "./SidebarButton";
import { useRouter } from "next/router";

function SidebarItem({
  active,
  menuItem,
  setActiveMenu,
  setSidebarVisibility,
}) {
  const menuRef = useRef();
  const router = useRouter();
  const areSubMenus = menuItem.subMenus.length !== 0;
  const isRouteActive = router.route.includes(menuItem.route);

  useEffect(() => {
    if (menuRef.current) {
      if (active) {
        menuRef.current.style.height = menuRef?.current.scrollHeight + "px";
      } else {
        menuRef.current.style.height = 0;
      }
    }
  }, [active]);

  return (
    <div className="mx-auto w-full rounded-2xl">
      <div>
        <div>
          <SidebarButton
            as={areSubMenus ? "button" : Link}
            href={areSubMenus ? null : menuItem.route}
            onClick={() => {
              if (active) {
                setActiveMenu(null);
              } else {
                if (areSubMenus) {
                  setActiveMenu(menuItem.title);
                } else {
                  setActiveMenu(null);
                  setSidebarVisibility(false);
                }
              }
            }}
            className={`group w-full justify-between ${
              active || isRouteActive
                ? "bg-gradient-to-b from-[#ACFFB9] to-[#11FF37]"
                : "bg-transparent"
            }`}
          >
            <div className="flex items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <div className="w-[1.9rem]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={menuItem.iconImg}
                  className={`group-hover:invert h-[1rem] xl:h-[1.2rem] ${
                    // route == menuItem.title
                    active || isRouteActive ? "invert" : ""
                  }`}
                  alt=""
                />
              </div>

              <p
                className={`text-xs sm:text-sm font-semibold group-hover:text-black ${
                  // route == menuItem.title
                  active || isRouteActive ? "text-black" : "text-white"
                }`}
              >
                {menuItem.title}
              </p>
            </div>
            {menuItem.subMenus.length !== 0 && (
              <BiChevronDown
                className={`text-xl xl:text-2xl ${
                  active ? "rotate-180" : "rotate-0"
                } ${
                  active || isRouteActive
                    ? "text-black  transform"
                    : "text-white"
                } group-hover:text-black transition-transform duration-200`}
              />
            )}
          </SidebarButton>

          {areSubMenus && (
            <>
              <div
                ref={menuRef}
                className="h-0 overflow-hidden transition-all duration-300"
              >
                <div
                  className={`pt-4 pb-2 text-sm text-white flex justify-between items-center transition-[height] `}
                >
                  <div
                    className={`w-[2px] h-auto  bg-[#11ff394e] relative mx-4 ml-5`}
                  >
                    {menuItem.subMenus.map((subMenu, i) => (
                      <div
                        key={i}
                        className="w-0 h-[42.5px] border  border-transparent  group-hover/item:border-[#11FF37] cursor-pointer mx-auto"
                      />
                    ))}
                  </div>
                  <div className="h-full w-full space-y-1">
                    {menuItem.subMenus.map((subMenu, i) => {
                      const isSubmenuActive =
                        `${menuItem.route}${subMenu.link}` === router.route;

                      return (
                        <Link
                          key={i}
                          href={`${menuItem.route}${subMenu.link}`}
                          onClick={() => {
                            setSidebarVisibility(false);
                          }}
                          className={`group/item flex group w-full cursor-pointer relative justify-between rounded-lg items-center  px-3 py-2 text-left text-sm font-medium  hover:text-black hover:bg-gradient-to-b hover:from-[#ACFFB9] hover:to-[#11FF37] ${
                            // pathName == subMenu.link
                            isSubmenuActive
                              ? "bg-gradient-to-b from-[#ACFFB9] to-[#11FF37] text-black"
                              : "bg-transparent text-white"
                          }`}
                        >
                          <div
                            className={`w-0 h-[42.5px] top-0 -left-[18px]  absolute  group-hover/item:border  group-hover/item:border-[#11FF37] cursor-pointer mx-auto ${
                              // pathName == subMenu.link
                              isSubmenuActive
                                ? "border border-[#11FF37]"
                                : "border-[0px]"
                            }`}
                          />
                          <span>{subMenu.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;
