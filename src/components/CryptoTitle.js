import cryptocurrencyConstants from "constants/cryptocurrencyConstants";
import React from "react";

function CryptoTitle({ label = "ETH" }) {
  return (
    <div className="flex items-center space-x-2 lg:space-x-3">
      <img
        src={cryptocurrencyConstants.ETH.icon}
        className="w-5 lg:w-6 xl:w-7"
        alt=""
      />
      <p className="text-sm xl:text-base font-extrabold text-black">{label}</p>
    </div>
  );
}

export default CryptoTitle;
