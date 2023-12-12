import BaseButton from "components/BaseButton";
import BaseButton2 from "components/BaseButton2";
import DepositAmount from "components/DepositAmount";
import IconButton from "components/IconButton";
import Paper from "components/Paper";
import LiquiditySettingPop from "components/PopUps/LiquiditySettingPop";
import SettingPop from "components/PopUps/SettingPop";
import PriceCounter from "components/PriceCounter";
import SelectPair from "components/SelectPair";
import StartingPrice from "components/StartingPrice";
import TransitionWrapper from "components/TransitionWrapper";
import useMediaQuery from "hooks/useMediaQuery";
import React, { useState } from "react";
import { AiFillSetting } from "react-icons/ai";
import { BsArrowsAngleExpand, BsArrowsAngleContract } from "react-icons/bs";

const Switch = ({ liquidtyTab, setLiquidityTab }) => {
  return (
    <div className="flex rounded-lg p-[3px] bg-light-grayish">
      <BaseButton2
        roundness="8px"
        variant={liquidtyTab === 1 ? 0 : 2}
        onClick={() => setLiquidityTab(1)}
        className="py-1 px-4 text-sm xl:text-base font-bold"
      >
        ETH
      </BaseButton2>
      <BaseButton2
        roundness="8px"
        variant={liquidtyTab === 2 ? 0 : 2}
        onClick={() => setLiquidityTab(2)}
        className="py-1 px-4 text-sm xl:text-base font-bold"
      >
        DNT
      </BaseButton2>
    </div>
  );
};

function LiquidityPoolRight() {
  const [liquidtyTab, setLiquidityTab] = useState(1);
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");
  const [menuExpanded, setMenuExpanded] = useState(false);

  const toggleExpanded = () => setMenuExpanded((val) => !val);
  const [settingShow, setSettingShow] = useState(false);

  return (
    <>
      <Paper py={isAbove1024px ? 18 : 0} className="text-[100%]">
        <div className="flex items-center justify-between h-[60px] lg:h-auto">
          <h1 className="text-lg lg:text-xl xl:text-2xl font-normal font-moment text-black">
            Add Liquidity
          </h1>

          <div className="flex space-x-2">
            {isAbove1024px ? (
              <Switch
                liquidtyTab={liquidtyTab}
                setLiquidityTab={setLiquidityTab}
              />
            ) : (
              <IconButton
                className="text-base xl:text-xl"
                onClick={toggleExpanded}
              >
                {menuExpanded ? (
                  <BsArrowsAngleContract />
                ) : (
                  <BsArrowsAngleExpand />
                )}
              </IconButton>
            )}

            <IconButton
              className="text-base xl:text-xl"
              onClick={() => setSettingShow(true)}
            >
              <AiFillSetting />
            </IconButton>
          </div>
        </div>
      </Paper>

      {menuExpanded || isAbove1024px ? (
        <>
          {!isAbove1024px && (
            <div className="w-fit mx-auto">
              <Switch
                liquidtyTab={liquidtyTab}
                setLiquidityTab={setLiquidityTab}
              />
            </div>
          )}

          <SelectPair />
          <DepositAmount />
          <StartingPrice />

          <Paper>
            <p className="text-base xl:text-lg font-extrabold mb-3">
              Set Price Range
            </p>

            <div className="grid sm:grid-cols-2 gap-1">
              <PriceCounter title="Min Price" subtitle="BNB per ETH" />
              <PriceCounter title="Max Price" subtitle="BNB per ETH" />
            </div>
          </Paper>

          <div className="px-5 lg:px-0 mb-4">
            <BaseButton2
              className="font-moment text-base xl:text-lg font-normal h-[40px] xl:h-[50px] w-full hover:text-white"
              borderRadius={12}
              hoverVariant={1}
            >
              Enter an amount
            </BaseButton2>
          </div>
        </>
      ) : null}

      <TransitionWrapper open={settingShow}>
        <LiquiditySettingPop settingHandler={() => setSettingShow(false)} />
      </TransitionWrapper>
    </>
  );
}

export default LiquidityPoolRight;
