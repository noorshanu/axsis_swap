import React from "react";
import Paper from "./Paper";

function StartingPrice() {
  return (
    <Paper>
      <p className="text-base xl:text-lg font-extrabold mb-3">
        Set Starting Price
      </p>

      <div className="bg-light-grayish py-3 px-5 mb-3 rounded-xl">
        <p className="text-black opacity-60 font-bold text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Egestas
          purus viverra accumsan in nisl nisi Arcu cursus vitae congue mauris
          rhoncus aenean vel elit scelerisque In egestas erat imperdiet sed
          euismod nisi porta lorem mollis
        </p>
      </div>

      <div className="grid grid-cols-[.5fr_1fr] sm:grid-cols-2 gap-1 grid-rows-[42px] xl:grid-rows-[52px]">
        <input
          defaultValue={0}
          type="number"
          className="px-4 xl:px-5 border-2 border-border rounded-xl font-extrabold text-sm xl:text-base w-full"
        />
        <div className="bg-light-grayish rounded-xl px-4 xl:px-5 flex items-center justify-between">
          <p className="text-sm xl:text-base font-extrabold">
            Current ETH Price:{" "}
          </p>
          <p className="text-sm xl:text-base font-extrabold">-</p>
        </div>
      </div>
    </Paper>
  );
}

export default StartingPrice;
