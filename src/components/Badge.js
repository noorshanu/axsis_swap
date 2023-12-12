import React from "react";

function Badge({ children }) {
  return (
    <div
      className={`h-[1.75em] w-[4.375em] flex items-center justify-center text-center bg-green-gradient rounded-[3.75em] text-black text-xs xl:text-sm font-bold`}
    >
      {children}
    </div>
  );
}

export default Badge;
