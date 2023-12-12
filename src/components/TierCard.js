import React from "react";
import { MdDone } from "react-icons/md";

const TierCard = ({ active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-2 px-3  rounded-xl text-left  border-2  ${
        active ? "border-green bg-tier-active" : "border-[rgba(0,0,0,.1)]"
      }`}
    >
      <div className="mb-2 flex items-center justify-between">
        <p className="text-black text-sm xl:text-base font-extrabold">0.01%</p>

        {active && (
          <div className="w-4 h-4 rounded-full bg-green-gradient flex items-center justify-center text-black text-xs">
            <MdDone />
          </div>
        )}
      </div>

      <p className="text-black text-xs font-medium">
        Best for very stable pairs
      </p>
    </button>
  );
};
export default TierCard;
