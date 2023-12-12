import React from "react";
import Paper from "./Paper";
import DepositAmountCard from "./DepositAmountCard";

function DepositAmount() {
  return (
    <Paper>
      <p className="text-base xl:text-lg font-extrabold mb-3">
        Deposit Amounts
      </p>
      <div className="grid grid-cols-2 gap-1">
        <DepositAmountCard />
        <DepositAmountCard />
      </div>
    </Paper>
  );
}

export default DepositAmount;
