import React from "react";
import { FiChevronDown } from "react-icons/fi";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";
import Chip from "./Chip";

const CoinSelector = () => {
  return (
    <button className="h-11 pl-3 pr-5 rounded-[60px] bg-light-grayish flex items-center justify-between w-full">
      <Chip noSize={true} currency={cryptocurrencyConstants.BNB} variant={2} />
      <FiChevronDown className="text-xl" />
    </button>
  );
};

export default CoinSelector;
