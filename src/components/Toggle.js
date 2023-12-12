import { Switch } from "@headlessui/react";
import React, { useState } from "react";

function Toggle({ label }) {
  const [enabled, setEnabled] = useState(false);
  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-black" : "bg-[#F3F3F3]"
      } relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}
    >
      <span
        className={`${
          enabled
            ? "translate-x-6 bg-gradient-to-br from-[#ACFFB9] to-[#11FF37]"
            : "translate-x-1 bg-[#D6D6D6]"
        } inline-block h-4 w-4 transform rounded-full  transition`}
      />
    </Switch>
  );
}

export default Toggle;
