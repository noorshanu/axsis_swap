import React, { useRef, useState } from "react";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";
import Chip from "./Chip";

const DepositAmountCard = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(0);

  const focusOnClick = () => {
    inputRef.current.focus();
  };

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div
      onClick={focusOnClick}
      className="bg-light-grayish py-3 px-4 rounded-xl relative"
    >
      <div className="flex items-start sm:items-center flex-col sm:flex-row mb-2 sm:mb-4 xl:mb-5 space-y-3 sm:space-y-0">
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleInput}
          type="text"
          className="flex-1 border-none pr-2 text-base xl:text-lg text-black font-extrabold bg-transparent w-full"
          name=""
          id=""
        />
        {/* <p className="text-base xl:text-lg text-black font-extrabold">0</p> */}
        <Chip
          wrapperClassName="pointer-events-none"
          currency={cryptocurrencyConstants.BNB}
        />
      </div>

      <p className="text-right pointer-events-none text-black opacity-50 font-semibold text-xs xl:text-sm">
        Balance: 0
      </p>
    </div>
  );
};
export default DepositAmountCard;
