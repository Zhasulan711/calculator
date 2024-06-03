import { useState } from "react";

import "../../styles/Calculator.scss";
import { Control } from "./Control";
import { Display } from "./Display";

export const Calculator = () => {
  const [number, setNumber] = useState<number>(0);
  const [secondNumber, setSecondNumber] = useState<number>(0);
  const [additionState, setAdditionState] = useState<boolean>(false);
  const [subtractionState, setSubtractionState] = useState<boolean>(false);
  const [multiplicationState, setMultiplicationState] =
    useState<boolean>(false);
  const [divisionState, setDivisionState] = useState<boolean>(false);

  return (
    <div className="calculator">
      <Display
        number={number}
        secondNumber={secondNumber}
        setNumber={setNumber}
        setSecondNumber={setSecondNumber}
        additionState={additionState}
        subtractionState={subtractionState}
        multiplicationState={multiplicationState}
        divisionState={divisionState}
        setAdditionState={setAdditionState}
        setSubtractionState={setSubtractionState}
        setMultiplicationState={setMultiplicationState}
        setDivisionState={setDivisionState}
      />
      <Control
        number={number}
        secondNumber={secondNumber}
        setNumber={setNumber}
        setSecondNumber={setSecondNumber}
        additionState={additionState}
        subtractionState={subtractionState}
        multiplicationState={multiplicationState}
        divisionState={divisionState}
        setAdditionState={setAdditionState}
        setSubtractionState={setSubtractionState}
        setMultiplicationState={setMultiplicationState}
        setDivisionState={setDivisionState}
      />
    </div>
  );
};
