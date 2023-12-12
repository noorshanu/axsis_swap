import React from "react";
import BaseButton2 from "./BaseButton2";

function IconButton({
  children,
  className,
  position = "relative",
  active,
  customSize = false,
  variant,
  hoverVariant = 0,
  roundness = "8px",
  ...props
}) {
  return (
    <BaseButton2
      position={position}
      roundness={roundness}
      variant={variant ? variant : active ? 1 : 2}
      hoverVariant={hoverVariant}
      className={`${
        customSize ? null : "w-[2.1em] h-[2.1em]"
      } flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </BaseButton2>
  );
}

export default IconButton;
