import React from "react";

const variants = [
  { wrapper: "bg-black", icon: "invert", text: "text-white" },
  { wrapper: "bg-white", icon: "invert-0", text: "text-black" },
  { wrapper: "bg-transparent", icon: "invert-0", text: "text-black" },
  { wrapper: "", icon: "", text: "" },
];

const fontFamillies = ["var(--moment)", "var(--red-hat)"];

function Chip({
  currency,
  variant = 0,
  wrapperClassName,
  iconClassName,
  textClassName,
  title,
  fontVariant = 0,
  noSize = false,
  fontWeight = 400,
}) {
  const currentVariant = variants[variant];

  return (
    <div
      className={`flex items-center space-x-2 rounded-[60px] ${
        noSize ? null : "h-[32px] pl-2 pr-4"
      } ${wrapperClassName} ${currentVariant.wrapper}`}
    >
      <img
        src={currency.icon}
        className={`w-[1.25em] ${currentVariant.icon} ${iconClassName}`}
        alt=""
      />
      <p
        className={`text-[0.875em] ${currentVariant.text} ${textClassName}`}
        style={{ fontFamily: fontFamillies[fontVariant], fontWeight }}
      >
        {title ? title : currency.symbol}
      </p>
    </div>
  );
}

export default Chip;
