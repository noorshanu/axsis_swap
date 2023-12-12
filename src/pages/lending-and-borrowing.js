import LendingAndBorrowingPopup from "Modals/LendingAndBorrowingPopup";
import Badge from "components/Badge";
import CryptoTitle from "components/CryptoTitle";
import Paper from "components/Paper";
import TransitionWrapper from "components/TransitionWrapper";
import useMediaQuery from "hooks/useMediaQuery";
import React from "react";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const BalanceCard = ({ title, balance }) => {
  return (
    <div>
      <p className="uppercase text-[10px] lg:text-xs font-medium mb-1">
        {title}
      </p>

      {balance ? (
        <h1 className="text-xl lg:text-2xl font-extrabold text-white">
          {balance}
        </h1>
      ) : (
        <div className="flex items-center">
          <img
            src="images/empty-wallet.svg"
            className="w-[40px] sm:w-[50px]"
            alt=""
          />
          <p className="text-xs sm:text-sm font-medium">Nothing yet</p>
        </div>
      )}
    </div>
  );
};

const HeaderBottomCard = () => {
  return (
    <div className="lg:w-fit">
      <div className="bg-[rgba(255,255,255,0.1)] lg:bg-[rgb(26,26,26)] rounded-2xl py-6 lg:py-8 px-9 grid grid-cols-[1fr_auto] sm:flex justify-between gap-y-6 sm:gap-y-0 sm:space-x-16 lg:w-fit mb-4 lg:mb-8">
        <BalanceCard title="DAILY EARNINGS" balance="$11.01" />
        <BalanceCard title="SUPPLY BALANCE" balance={null} />
        <BalanceCard title="BORROW BALANCE" balance={null} />
      </div>

      <div className="flex items-center justify-between px-4 lg:pr-6">
        <p className="text-sm">
          <span className="text-white opacity-60">Borrow limit used:</span>{" "}
          <span className="font-bold">20%</span>
        </p>
        <p className="text-sm">
          <span className="text-white opacity-60">Max:</span>{" "}
          <span className="font-bold">$20,000</span>
        </p>
      </div>
    </div>
  );
};

const Header = () => {
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");

  return (
    <div className="rounded-2xl bg-black text-white pb-6 lg:pt-8 lg:pb-12 lg:px-9 relative z-10 overflow-hidden">
      {!isAbove1024px && (
        // <img
        //   src="images/account-banner-mobile.png"
        //   className="w-full mb-4"
        //   alt=""
        // />

        <div className="mb-4 w-full relative rounded-2xl overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[100%] h-[10%] bg-gradient-to-t from-[black] to-[transparent]"></div>

          <img
            src="images/account-banner.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      )}

      <div className="px-9 lg:px-0">
        <p className="text-lg xl:text-xl font-bold mb-5 lg:mb-8 xl:mb-10">
          My account
        </p>

        <div className="lg:mb-7">
          <p className="text-xs font-medium mb-2">NET APY</p>
          <h1 className="text-3xl xl:text-[40px] font-normal font-moment">
            4.52%
          </h1>
        </div>
      </div>

      {isAbove1024px && <HeaderBottomCard />}

      {isAbove1024px && (
        <div className="absolute top-0 right-0 h-full w-[54%] -z-10 rounded-2xl overflow-hidden">
          <div className="absolute top-0 left-0 w-[10%] h-full bg-gradient-to-r from-[black] to-[transparent]"></div>

          <img
            src="images/account-banner.png"
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

const TableSortButton = ({ label, className }) => {
  return (
    <button className={`flex items-center space-x-1 ${className}`}>
      <span className="text-xs sm:text-sm font-bold text-black opacity-70">
        {label}
      </span>
      <FiChevronDown className="text-base" />
    </button>
  );
};

const SuppliedTable = ({ data, toggleExchangeVisibility }) => {
  return (
    <table className="text-black w-full border-collapse">
      <thead>
        <tr className="border-b-2 border-[rgba(0,0,0,.2)] h-10">
          <td className="">
            <TableSortButton label="Asset" />
          </td>
          <td className="">
            <TableSortButton label="Apy" className="mx-auto" />
          </td>
          <td className="">
            <TableSortButton label="Wallet" className="mx-auto" />
          </td>
          <td className="">
            <TableSortButton label="Collateral" className="mx-auto" />
          </td>
        </tr>
      </thead>

      <tbody>
        {data.map((item, i) => (
          <tr key={i} className="h-12 xl:h-14">
            <td>
              <button className="flex" onClick={toggleExchangeVisibility}>
                <CryptoTitle label={item.asset} />
              </button>
            </td>
            <td>
              <div className="mx-auto w-fit">
                <Badge>{item.apy}</Badge>
              </div>
            </td>
            <td>
              <p className="text-xs sm:text-sm font-extrabold text-black text-center">
                {item.wallet}
              </p>
            </td>
            <td>
              {typeof item.collateral === "boolean" ? (
                <div
                  className={`w-[25px] h-[25px] rounded-full mx-auto ${
                    item.collateral ? "bg-green" : "bg-[#E8E8E8]"
                  }`}
                ></div>
              ) : (
                <p className="text-xs sm:text-sm font-extrabold text-black text-center">
                  {item.collateral}
                </p>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const PaperTitle = ({ children, title }) => {
  return (
    <Paper>
      <p className="text-lg lg:text-xl xl:text-2xl font-moment text-black mb-3">
        {title}
      </p>

      {children}
    </Paper>
  );
};

function LendingAndBorrowing() {
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");
  const [exchangeModalVisible, setExchangeModalVisibility] = useState(false);

  const toggleExchangeVisibility = () => {
    setExchangeModalVisibility((val) => !val);
  };

  return (
    <div className="px-3 lg:pr-1 lg:pl-1 pb-4 flex flex-col flex-1">
      <div className="lg:mb-4">
        <Header />
      </div>

      {!isAbove1024px && (
        <div className="mt-5 mb-8">
          <HeaderBottomCard />
        </div>
      )}

      <div className="grid lg:grid-cols-2 gap-2 lg:gap-1 flex-1">
        <div className="grid gap-2 lg:gap-1 content-start grid-rows-[auto_1fr]">
          <PaperTitle title="Supplied">
            <SuppliedTable
              toggleExchangeVisibility={toggleExchangeVisibility}
              data={[
                {
                  asset: "TRX",
                  apy: "0.05%",
                  wallet: "0 USDT",
                  collateral: true,
                },
              ]}
            />
          </PaperTitle>
          <PaperTitle title="Supply Market">
            <SuppliedTable
              toggleExchangeVisibility={toggleExchangeVisibility}
              data={[
                {
                  asset: "USDT",
                  apy: "0.05%",
                  wallet: "0 USDT",
                  collateral: false,
                },
                {
                  asset: "TRX",
                  apy: "0.05%",
                  wallet: "0 TRX",
                  collateral: false,
                },
                {
                  asset: "USDC",
                  apy: "0.05%",
                  wallet: "0 USDC",
                  collateral: false,
                },
                {
                  asset: "ETH",
                  apy: "0.05%",
                  wallet: "0 ETH",
                  collateral: false,
                },
              ]}
            />
          </PaperTitle>
        </div>

        <PaperTitle title="Borrow Market">
          <SuppliedTable
            toggleExchangeVisibility={toggleExchangeVisibility}
            data={[
              {
                asset: "USDT",
                apy: "0.05%",
                wallet: "0 USDT",
                collateral: "$270.39M",
              },
              {
                asset: "TRX",
                apy: "0.05%",
                wallet: "0 TRX",
                collateral: "$270.39M",
              },
              {
                asset: "USDC",
                apy: "0.05%",
                wallet: "0 USDC",
                collateral: "$270.39M",
              },
              {
                asset: "ETH",
                apy: "0.05%",
                wallet: "0 ETH",
                collateral: "$270.39M",
              },
              {
                asset: "USDT",
                apy: "0.05%",
                wallet: "0 USDT",
                collateral: "$270.39M",
              },
              {
                asset: "TRX",
                apy: "0.05%",
                wallet: "0 TRX",
                collateral: "$270.39M",
              },
              {
                asset: "BDT",
                apy: "0.05%",
                wallet: "0 BDT",
                collateral: "$270.39M",
              },
            ]}
          />
        </PaperTitle>
      </div>

      <TransitionWrapper
        open={exchangeModalVisible}
      >
        <LendingAndBorrowingPopup setOpen={setExchangeModalVisibility} />
      </TransitionWrapper>
    </div>
  );
}

export default LendingAndBorrowing;
