import React, { useState } from "react";
import Paper from "./Paper";
import CoinSelector from "./CoinSelector";
import BaseButton from "./BaseButton";
import TierCard from "./TierCard";
import BaseButton2 from "./BaseButton2";
import SelectToken from "./PopUps/SelectToken";
import TransitionWrapper from "./TransitionWrapper";

function SelectPair() {
  const [tier, setTier] = useState(3);
  const [selectTokenShow, setSelectTokenShow] = useState(false);

  return (
    <>
      <Paper>
        <p className="text-base xl:text-lg font-extrabold mb-3">Select Pair</p>

        <div className="grid grid-cols-2 gap-1 mb-3">
          <div onClick={() => setSelectTokenShow(true)}>
            {" "}
            <CoinSelector />
          </div>

          <div onClick={() => setSelectTokenShow(true)}>
            {" "}
            <CoinSelector />
          </div>
        </div>

        <div className="flex items-center justify-between h-10 xl:h-12 px-4 xl:px-5 bg-light-grayish rounded-xl mb-3">
          <p className="text-sm xl:text-base font-extrabold">1% fee tier</p>
          <BaseButton2
            roundness="8px"
            className="py-[0.4em] px-[1.25em] text-xs sm:text-sm xl:text-base font-bold"
          >
            Hide
          </BaseButton2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1">
          <TierCard active={tier === 1} onClick={() => setTier(1)} />
          <TierCard active={tier === 2} onClick={() => setTier(2)} />
          <TierCard active={tier === 3} onClick={() => setTier(3)} />
          <TierCard active={tier === 4} onClick={() => setTier(4)} />
        </div>
      </Paper>

        <TransitionWrapper open={selectTokenShow}>

        <SelectToken setSelectTokenShow={setSelectTokenShow} />
        </TransitionWrapper>
    </>
  );
}

export default SelectPair;
