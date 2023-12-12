import BaseButton2 from "components/BaseButton2";
import Chip from "components/Chip";
import IconButton from "components/IconButton";
import Paper from "components/Paper";
import cryptocurrencyConstants from "constants/cryptocurrencyConstants";
import { useState } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import pxToEm from "utils/pxToEm";

const TabButton = ({ children, active, ...props }) => {
  return (
    <BaseButton2
      roundness={pxToEm(8)}
      variant={active ? 0 : 3}
      hoverVariant={1}
      className={`bg-[rgba(255,255,255,0.13)] py-[0.5625em] text-[0.7em] sm:text-[0.875em] font-bold hover:text-white ${
        active ? "text-black" : "text-white"
      }`}
      {...props}
    >
      {children}
    </BaseButton2>
  );
};

const TitleValue = ({ title, value, className }) => {
  return (
    <p className={`text-[1em] font-semibold pr-[0.5em] ${className}`}>
      <span className="opacity-40">{title}:</span>{" "}
      <span className="text-white">{value}</span>
    </p>
  );
};

const CryptoValueAndBalance = () => {
  return (
    <div>
      <div className="relative z-10">
        <img
          src={cryptocurrencyConstants.BNB.icon}
          className="w-[1.6875wm] absolute top-1/2 -translate-y-1/2 left-[1.5em] invert pointer-events-none"
          alt=""
        />

        <input
          type="number"
          className="h-[3.2em] w-full block outline-none border-2 border-green rounded-2xl bg-transparent font-moment text-white text-[1.5em] pl-[3em] pr-[7em] z-1"
        />

        <BaseButton2
          position="absolute"
          className="top-1/2 right-5 -translate-y-1/2 py-[0.5625em] px-[2.5em] text-[1em] font-semibold text-black hover:text-white z-10"
          hoverVariant={1}
          roundness={pxToEm(60)}
        >
          Max
        </BaseButton2>
      </div>

      <div className="mt-[0.75em]">
        <TitleValue title="BALANCE" value="535trx" className="text-right" />
      </div>
    </div>
  );
};

const BetweenItems = ({ children }) => {
  return <div className="flex items-center justify-between">{children}</div>;
};

const PaperWrapper = ({ children }) => {
  return (
    <Paper className="space-y-[1em]" px={24}>
      {children}
    </Paper>
  );
};

const KeyArrowValue = ({ title, value }) => {
  return (
    <div className="flex items-center space-x-[0.5em]">
      <p className="text-[0.875em] font-bold text-black">{title}</p>
      <BsArrowRightShort className="text-green text-[1.25em]" />
      <p className="text-[0.875em] font-bold text-black">{value}</p>
    </div>
  );
};

const Button = ({ children, ...props }) => {
  return (
    <BaseButton2
      className="py-[0.75em] text-[1em] font-extrabold w-full text-black font-moment hover:text-white"
      hoverVariant={1}
      {...props}
    >
      {children}
    </BaseButton2>
  );
};

const LendingAndBorrowingPopup = ({ setOpen }) => {
  const [activeTab, setActiveTab] = useState("WITHDRAW");

  return (
    <div
      className="w-[90%] rounded-[1em] max-w-[37em] bg-[#17191E] py-[2em] px-[2.25em] max-h-[90vh] overflow-y-scroll custom-scrollbar text-[68%] xl:text-[78%] 2xl:text-[100%]"
      style={{
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        WebkitFontSmoothing: "subpixel-antialiased",
      }}
    >
      <header className="flex items-center justify-between mb-[1.5em]">
        <div className="flex items-center space-x-[0.75em]">
          <Chip
            currency={cryptocurrencyConstants.BNB}
            variant={3}
            iconClassName="invert"
            title="TRX"
            noSize={true}
            wrapperClassName="text-[140%]"
          />

          <p className="text-base text-white opacity-50 font-normal font-moment">
            TRON
          </p>
        </div>

        <IconButton
          className="text-base bg-[#343434] text-[1em]"
          variant={2}
          hoverVariant={1}
          roundness={pxToEm(8)}
          onClick={() => setOpen(false)}
        >
          <IoClose />
        </IconButton>
      </header>

      <div className="grid grid-cols-4 gap-[0.5em]">
        <TabButton
          active={activeTab === "SUPPLY"}
          onClick={() => setActiveTab("SUPPLY")}
        >
          SUPPLY
        </TabButton>
        <TabButton
          active={activeTab === "WITHDRAW"}
          onClick={() => setActiveTab("WITHDRAW")}
        >
          WITHDRAW
        </TabButton>
        <TabButton
          active={activeTab === "BORROW"}
          onClick={() => setActiveTab("BORROW")}
        >
          BORROW
        </TabButton>
        <TabButton
          active={activeTab === "REPAY"}
          onClick={() => setActiveTab("REPAY")}
        >
          REPAY
        </TabButton>
      </div>

      {activeTab === "WITHDRAW" && (
        <>
          <div className="mt-[1em]">
            <div className="mb-[1.25em]">
              <CryptoValueAndBalance />
            </div>

            <PaperWrapper>
              <BetweenItems>
                <Chip
                  currency={cryptocurrencyConstants.BNB}
                  title="Supply APY"
                  variant={2}
                  noSize={true}
                  fontVariant={1}
                  fontWeight={700}
                />

                <p className="text-[0.875em] font-bold text-black">1.10%</p>
              </BetweenItems>
              <BetweenItems>
                <Chip
                  currency={cryptocurrencyConstants.BNB}
                  title="Distribution APY"
                  variant={2}
                  noSize={true}
                  fontVariant={1}
                  fontWeight={700}
                />

                <p className="text-[0.875em] font-bold text-black">1.10%</p>
              </BetweenItems>
            </PaperWrapper>

            <div className="flex items-center justify-between px-[0.75em] mt-[0.5em] mb-[1.75em]">
              <TitleValue title="Borrow limit used" value="0%" />
              <TitleValue title="MAX" value="535trx" />
            </div>

            <PaperWrapper>
              <BetweenItems>
                <p className="text-[0.875em] font-bold text-black">
                  Borrow limit
                </p>
                <KeyArrowValue title="$0.00" value="$11.08" />
              </BetweenItems>

              <BetweenItems>
                <p className="text-[0.875em] font-bold text-black">
                  Daily Earnings
                </p>
                <p className="text-[0.875em] font-bold text-black">$0.00</p>
              </BetweenItems>

              <BetweenItems>
                <p className="text-[0.875em] font-bold text-black">
                  Supply Balance (TRX)
                </p>
                <KeyArrowValue title="$0.00" value="$11.08" />
              </BetweenItems>
            </PaperWrapper>

            <div className="mt-[1.25em]">
              <Button>Supply</Button>
            </div>
          </div>
        </>
      )}

      {activeTab === "SUPPLY" && (
        <div className="mt-[2.5em]">
          <div className="flex flex-col items-center text-center mb-[2.5em]">
            <img
              src={cryptocurrencyConstants.BNB.icon}
              className="w-[5em] invert mb-[1.4em]"
              alt=""
            />

            <p className="text-center font-semibold text-[1.5em]">
              To supply TRX to Bitlend,
              <br />
              <span className="text-green">enable it first</span> at your
              wallet.
            </p>
          </div>

          <PaperWrapper>
            <BetweenItems>
              <Chip
                currency={cryptocurrencyConstants.BNB}
                title="Supply APY"
                variant={2}
                noSize={true}
                fontVariant={1}
                fontWeight={700}
              />

              <p className="text-[0.875em] font-bold text-black">1.10%</p>
            </BetweenItems>
            <BetweenItems>
              <Chip
                currency={cryptocurrencyConstants.BNB}
                title="Distribution APY"
                variant={2}
                noSize={true}
                fontVariant={1}
                fontWeight={700}
              />

              <p className="text-[0.875em] font-bold text-black">1.10%</p>
            </BetweenItems>
          </PaperWrapper>

          <div className="mt-[1.2em]">
            <Button>Enable</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LendingAndBorrowingPopup;
