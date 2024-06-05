import { useState, useEffect } from "react";

import "../../styles/Calculator.scss";
import { Button } from "./Button";
import { roundNumber } from "../../shared/utils/roundNumber";
import { ButtonHandlers, buttons } from "../../shared/utils/ButtonConfig";
import { performCalculation } from "../../shared/utils/performCalculation";

export const Calculator = () => {
  const [number, setNumber] = useState<string>("0");
  const [secondNumber, setSecondNumber] = useState<string>("0");
  const [operation, setOperation] = useState<string>("");
  const [calculate, setCalculate] = useState<boolean>(false);
  const [lastOperand, setLastOperand] = useState<string>("");
  const [lastOperation, setLastOperation] = useState<string>("");
  const [isResult, setIsResult] = useState<boolean>(false);

  useEffect(() => {
    if (calculate) {
      const num1 = parseFloat(number);
      const num2 = parseFloat(secondNumber);
      const result = performCalculation(num1, num2, operation);

      setNumber(roundNumber(result, 10).toString());
      setSecondNumber("0");
      setOperation("");
      setCalculate(false);
    }
  }, [number, secondNumber, calculate, operation]);

  const getSetter = () => (operation ? setSecondNumber : setNumber);

  const handleClickNumber = (num: number) => {
    const setter = getSetter();
    setter((prevNumber) =>
      prevNumber === "0" ? num.toString() : prevNumber + num.toString()
    );
  };

  const handleOperation = (op: string) => {
    setOperation(op);
  };

  const handleCalculate = () => {
    if (operation) {
      setCalculate(true);
      setLastOperand(parseFloat(secondNumber).toString());
      setLastOperation(operation);
      setIsResult(true);
    } else if (lastOperand && lastOperation) {
      const result = performCalculation(
        parseFloat(number),
        parseFloat(lastOperand),
        lastOperation
      );
      setNumber(roundNumber(result, 10).toString());
      setIsResult(true);
      setCalculate(true);
    }
  };

  const handleReset = () => {
    setNumber("0");
    setSecondNumber("0");
    setOperation("");
    setCalculate(false);
  };

  const handleChangeSign = () => {
    const setter = getSetter();
    setter((prevNumber) => (-parseFloat(prevNumber)).toString());
  };

  const handlePercentage = () => {
    const setter = getSetter();
    setter((prevNumber) => (parseFloat(prevNumber) / 100).toString());
  };

  const handleBack = () => {
    const setter = getSetter();
    setter((prevNumber) => prevNumber.slice(0, -1) || "0");
  };

  const handleComma = () => {
    const setter = getSetter();
    setter((prevNumber) =>
      isResult ? "0." : prevNumber.includes(".") ? prevNumber : prevNumber + "."
    );
    setIsResult(false);
  };

  const buttonHandlers: ButtonHandlers = {
    reset: handleReset,
    changeSign: handleChangeSign,
    percentage: handlePercentage,
    back: handleBack,
    comma: handleComma,
    calculate: handleCalculate,
    operation: handleOperation,
    clickNumber: handleClickNumber,
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="display-current">
          {operation && secondNumber === "0"
            ? number
            : secondNumber !== "0"
            ? secondNumber
            : number}
        </div>
      </div>
      <div className="controls">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={button.className}
            onClick={() => {
              if (button.handler === "clickNumber") {
                buttonHandlers[button.handler](parseInt(button.children));
              } else if (button.handler === "operation") {
                buttonHandlers[button.handler](button.children);
              } else {
                buttonHandlers[button.handler]();
              }
            }}
          >
            {button.children}
          </Button>
        ))}
      </div>
    </div>
  );
};
