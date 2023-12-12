import { MYContext } from "layout/SwapLayout";
import React, { useContext } from "react";
 
const Wrapper = ({ children }) => {
    let {showSwap} = useContext(MYContext);
    return (
    <div
      className={`${showSwap ? "md:col-span-2" : "md:col-span-5"}  space-y-1`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
