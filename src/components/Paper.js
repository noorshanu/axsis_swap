import React from "react";
import pxToEm from "utils/pxToEm";

function Paper({ className = "text-[100%]", px = 20, py = 20, children }) {
  return (
    <div
      className={`bg-white rounded-2xl ${className}`}
      style={{
        padding: `${pxToEm(py)} ${pxToEm(px)}`,
      }}
    >
      {children}
    </div>
  );
}

export default Paper;
