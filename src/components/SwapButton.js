import React from "react";
import BaseButton2 from "./BaseButton2";

const SwapButton = ({
  className,
  position = "relative",
  onClick = () => {},
}) => {
  return (
    <BaseButton2
      onClick={onClick}
      position={position}
      roundness="50%"
      className={`group h-[2em] w-[2em] flex items-center justify-center ${className}`}
      hoverVariant={1}
    >
      <img
        alt=""
        src="/images/swap-page-icons/swap-arrow-vert.png"
        className="w-[46%] transition-all duration-200 group-hover:invert"
      />
    </BaseButton2>
  );
};

export default SwapButton;
