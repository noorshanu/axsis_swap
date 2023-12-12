import Paper from "components/Paper";
import TopPoolsTable from "components/TopPoolsTable";
import { FiArrowUpLeft, FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import LiquidityPoolRight from "LiquidityPoolRight";
import useMediaQuery from "hooks/useMediaQuery";
import { useState } from "react";

const StatCard = ({ title, subtitle, icon }) => {
  const isAbove640px = useMediaQuery("(min-width : 640px)");
  

  return (
    <Paper py={isAbove640px ? 20 : 0} className="text-[70%] xl:text-[90%]">
      <div className="flex flex-row items-center justify-between sm:flex-col h-[60px] sm:h-auto">
        <div className="sm:mb-3 xl:mb-4 flex items-center space-x-2 xl:space-x-3 justify-center">
          <div className="w-7 xl:w-9 h-7 xl:h-9 flex items-center justify-center rounded-full bg-green-gradient">
            <img src={icon} className="w-[50%]" alt="" />
          </div>
          <p className="font-moment font-normal text-xs xl:text-sm text-black">
            {title}
          </p>
        </div>

        <p className="font-moment text-xl lg:text-2xl xl:text-3xl font-normal text-center text-black">
          {subtitle}
        </p>
      </div>
    </Paper>
  );
};

export default function LiquidtyPools() {
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");
 
  return (
    <div className="grid lg:grid-cols-[1fr_.8fr] gap-1 text-black px-3 pb-4 lg:pb-0 lg:px-1 flex-1">
      <div className="grid gap-1 grid-rows-[auto_1fr] content-start">
        <div className="grid sm:grid-cols-3 gap-1">
          <StatCard
            title="Total TVL"
            subtitle="$5M"
            icon="/images/liquidity-pools/total.svg"
          />
          <StatCard
            title="Volume 24H"
            subtitle="$280M"
            icon="/images/liquidity-pools/volume.svg"
          />
          <StatCard
            title="Volume 7D"
            subtitle="$7.2B"
            icon="/images/liquidity-pools/volume-7.svg"
          />
        </div>

        {!isAbove1024px && (
          <Paper px={0} py={0} className="">
            <LiquidityPoolRight />
          </Paper>
        )}

        <Paper className="flex flex-col">
          <h1 className="font-moment font-normal text-lg lg:text-xl xl:text-3xl mb-4 text-black">
            Top Pools
          </h1>

          <div className="flex-1">
            <TopPoolsTable />
          </div>

          <div className="flex items-center justify-between mb-0 mt-4">
            <button className="text-black text-lg xl:text-2xl">
              <FiArrowUpLeft />
            </button>

            <p className="text-center text-xs font-extrabold text-black">
              Page 1 of 5
            </p>

            <button className="text-black text-lg xl:text-2xl">
              <FiArrowUpRight />
            </button>
          </div>
        </Paper>
      </div>

      {isAbove1024px && (
        <div className="grid gap-1 content-start">
          <LiquidityPoolRight />
        </div>
      )}
    </div>
  );
}
