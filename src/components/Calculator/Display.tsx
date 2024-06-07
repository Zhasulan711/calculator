import React from "react";

import { DisplayProps } from "../../shared/interface/DisplayProps";

export const Display: React.FC<DisplayProps> = ({
  operation,
  secondNumber,
  number,
}) => {
  return (
    <div className="display">
      <div className="display-current">
        {operation && secondNumber === "0"
          ? number
          : secondNumber !== "0"
          ? secondNumber
          : number}
      </div>
    </div>
  );
};
