import React from "react";

const variants = [
  "before:bg-green-gradient",
  "before:bg-green-gradient-2",
  "before:bg-light-grayish",
  "",
  "before:bg-gradient-to-b before:from-[#ACFFB9] before:to-[#11FF37]",
];

const hoverVariants = [
  "hover:before:opacity-0 after:opacity-0 hover:after:opacity-100 after:bg-white after:border-2 after:border-black",
  "hover:before:opacity-0 after:opacity-0 hover:after:opacity-100 after:bg-black after:border-2 after:border-green",
  "before:opacity-0 hover:before:opacity-100 before:bg-green-gradient-2",
];

function BaseButton2({
  children,
  variant = 0,
  className,
  roundness = "12px",
  hoverVariant = 0,
  position = "relative",
  ...props
}) {
  return (
    <button
      style={{ "--roundness": roundness, position }}
      className={`${hoverVariants[hoverVariant]} cursor-pointer outline-none overflow-hidden z-10 before:-z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full transition-all duration-200 before:transition-all before:duration-200 rounded-[var(--roundness)] before:rounded-[var(--roundness)] after:rounded-[var(--roundness)]   
      
      
      after:-z-10 after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-all after:duration-200 


      ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default BaseButton2;
