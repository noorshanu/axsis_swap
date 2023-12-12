import React from "react";
import pxToRem from "utils/pxToRem";

const varaints = [
  "bg-green-gradient text-black transition-all duration-200 lg:hover:scale-[.9] shadow-md",
  "text-black transition-all duration-200 lg:hover:scale-[.9]",
];

function BaseButton({
  children,
  variant = 0,
  className,
  borderRadius = 8,
  style,
  customSize = false,
  ...props
}) {
  return (
    <button
      className={`${
        customSize ? null : "h-[2em] px-[1.25em]"
      } font-bold disabled:opacity-70 ${varaints[variant]} ${className}`}
      style={{ borderRadius: pxToRem(borderRadius), ...style }}
      {...props}
    >
      {children}
    </button>
  );
}

export default BaseButton;
