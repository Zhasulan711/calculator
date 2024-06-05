import React from "react";

import { NumberProps } from "../../shared/interfaces/NumberProps";
import { StatesProps } from "../../shared/interfaces/StatesProps";

type DisplayProps = NumberProps & StatesProps;

export const Display: React.FC<DisplayProps> = ({
  number,
  additionState,
  secondNumber,
}) => {
  return (
    <div className="display">
      <div className="display-current">
        {additionState && secondNumber === "0"
          ? number
          : secondNumber !== "0"
          ? secondNumber
          : number}
      </div>
    </div>
  );
};
