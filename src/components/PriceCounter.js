import React, { useState } from "react";
import BaseButton from "./BaseButton";
import BaseButton2 from "./BaseButton2";
import IconButton from "./IconButton";

const PriceCounter = ({ title, subtitle }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-light-grayish py-4 px-4 rounded-xl items-center flex flex-row justify-between sm:flex-col">
      <div className="sm:mb-3">
        <p className="sm:text-center font-bold text-sm mb-1 sm:mb-0">{title}</p>

        <p className="text-left font-medium text-xs block sm:hidden">
          {subtitle}
        </p>
      </div>

      <div className="flex items-center justify-between sm:mb-3 flex-[.6] w-full">
        <IconButton
          onClick={() => setCount((val) => val - 1)}
          variant={1}
          className="text-[90%] xl:text-[110%] font-extrabold"
        >
          <span className="text-xl xl:text-2xl">-</span>
        </IconButton>

        <p className="text-center text-base xl:text-lg font-extrabold">
          {count}
        </p>

        <IconButton
          onClick={() => setCount((val) => val + 1)}
          variant={1}
          className="text-[90%] xl:text-[110%] font-extrabold"
        >
          <span className="text-xl xl:text-2xl">+</span>
        </IconButton>
      </div>

      <p className="text-center font-semibold text-sm hidden sm:block">
        {subtitle}
      </p>
    </div>
  );
};

export default PriceCounter;
