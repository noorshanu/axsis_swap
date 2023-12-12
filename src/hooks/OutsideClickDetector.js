import React from "react";
import { useRef, useEffect } from "react";

const OutsideClickDetector = (handler) => {
  let domNode = useRef(null);

  useEffect(() => {
    const func = (e) => {
      if (!domNode.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", func);

    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  return domNode;
};

export default OutsideClickDetector;
