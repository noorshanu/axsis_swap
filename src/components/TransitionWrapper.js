import OutsideClickDetector from "hooks/OutsideClickDetector";
import useDelayUnmount from "hooks/useDelayUnmount";
import React from "react";

function TransitionWrapper({ open, className, children }) {
  const shouldRender = useDelayUnmount(open, 300);

  return (
    <>
      {shouldRender && (
        <div
          className={`fixed w-full flex justify-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[300] popup-y ${
            open ? "mount" : "unmount"
          } ${className}`}
        >
          {children}
        </div>
      )}

      {shouldRender && (
        <div
          className={`black-screen-animation z-[200] ${
            open ? "mount" : "unmount"
          }`}
        ></div>
      )}
    </>
  );
}

export default TransitionWrapper;
