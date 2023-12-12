import SwapBox from "components/SwapBox";
import Wrapper from "components/Wrapper";
import SwapLayout from "layout/SwapLayout";

export default function GaslessSwapPage() {
  return (
    <SwapLayout>

      <Wrapper>
        <SwapBox title={"Gasless Swap"} />
        <div className="relative p-5 text-[#D8D8D8] font-redHat font-medium space-y-4 text-base">
          <div className="absolute left-[-2rem] -top-[7.5rem] blur-[91.5px] bg-[#11FF37] opacity-25 h-80 w-80" />
          <div className=" hidden md:flex z-0 absolute right-[0rem] bottom-[-12rem] blur-[80px] bg-[#11FF37] opacity-25 h-60 w-60" />

          <div className="w-100% flex justify-between">
            <p>Gas Fees Estimated</p>
            <p>
              <span className="line-through">$0.5620</span>{" "}
              <span className="text-[#11FF37] ml-2">Free</span>
            </p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Liquidity Provider</p>
            <p>Sushi Swap</p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Minimum Received</p>
            <p>1625.03 DAI</p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Slippage Tolerance</p>
            <p>0.5%</p>
          </div>
          <div className="w-100% flex justify-between">
            <p>Price</p>
            <p>0.0150116 BNB per PNS</p>
          </div>
        </div>
      </Wrapper>
    </SwapLayout>
  );
}
