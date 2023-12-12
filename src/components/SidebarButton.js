import React from "react";

const variants = [
  "bg-transparent hover:bg-gradient-to-b hover:from-[#ACFFB9] hover:to-[#11FF37]",
  "relative overflow-hidden z-10 before:-z-10 before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-[#ACFFB9] before:to-[#11FF37] transition-all duration-200 before:transition-all before:duration-200 hover:text-white hover:before:opacity-0 hover:bg-black",
];

function SidebarButton({
  children,
  className,
  as = "button",
  onClick,
  variant = 0,

  ...props
}) {
  const As = as;

  return (
    <As
      className={`flex items-center rounded-lg hover:text-black px-3 h-[34px] xl:h-[40px] text-left ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </As>
  );
}

export default SidebarButton;
