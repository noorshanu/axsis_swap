import React from "react";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";
import Badge from "./Badge";
import useMediaQuery from "hooks/useMediaQuery";

const Pool = () => {
  return (
    <div className="flex items-center space-x-5">
      <div className="flex items-center space-x-3">
        <div className="flex items-center">
          <img
            src={cryptocurrencyConstants.ETH.icon}
            className="w-5 xl:w-6"
            alt=""
          />
          <img
            src={cryptocurrencyConstants.BNB.icon}
            className="w-5 xl:w-6"
            alt=""
          />
        </div>
        <p className="text-xs xl:text-sm font-extrabold text-black">ETH/BNB</p>
      </div>

      <Badge>0.05%</Badge>
    </div>
  );
};

const Heading = ({ children }) => {
  return (
    <p className="text-xs xl:text-sm font-bold text-black opacity-60">
      {children}
    </p>
  );
};

const Text = ({ children }) => {
  return (
    <p className="font-extrabold text-xs xl:text-sm text-black">{children}</p>
  );
};

function TopPoolsTable() {
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");

  return (
    <div className="max-w-full w-[0px] relative min-w-full overflow-x-auto">
      <table className="text-black border-collapse w-full min-w-[450px]">
        <tbody>
          <tr className="border-b-2 border-[rgba(0,0,0,.2)] h-10">
            {isAbove1024px && <td></td>}
            <td>
              <Heading>Pools</Heading>
            </td>
            <td>
              <Heading>TVL</Heading>
            </td>
            <td>
              <Heading>Volume 24H</Heading>
            </td>
            <td>
              <Heading>Volume 7D</Heading>
            </td>
          </tr>

          {new Array(10).fill("").map((_, i) => (
            <tr key={i} className="h-10 sm:h-14">
              {isAbove1024px && (
                <td className="text-center pl-1 pr-4">
                  <Text>{i + 1}</Text>
                </td>
              )}
              <td>
                <Pool />
              </td>
              <td>
                <Text>$264.97M</Text>
              </td>
              <td>
                <Text>$270.39M</Text>
              </td>
              <td>
                <Text>$270.39M</Text>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopPoolsTable;
