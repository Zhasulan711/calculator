import React, { useState, useEffect } from "react";

import { NumberProps } from "../../interfaces/NumberProps";
import { StatesProps } from "../../interfaces/StatesProps";

type DisplayProps = NumberProps & StatesProps;

const roundNumber = (number: number, decimals: number) => {
  const factor = Math.pow(10, decimals);
  return Math.round(number * factor) / factor;
};

export const Control: React.FC<DisplayProps> = ({
  number,
  secondNumber,
  setNumber,
  setSecondNumber,
  additionState,
  subtractionState,
  multiplicationState,
  divisionState,
  setAdditionState,
  setSubtractionState,
  setMultiplicationState,
  setDivisionState,
}) => {
  const [calculate, setCalculate] = useState<boolean>(false);

  useEffect(() => {
    if (calculate) {
      switch (true) {
        case additionState:
          setNumber(
            roundNumber(parseFloat(number) + parseFloat(secondNumber), 10).toString()
          );
          setSecondNumber("0");
          setCalculate(false);
          setAdditionState(false);
          break;

        case subtractionState:
          setNumber(
            roundNumber(parseFloat(number) - parseFloat(secondNumber), 10).toString()
          );
          setSecondNumber("0");
          setCalculate(false);
          setSubtractionState(false);
          break;

        case multiplicationState:
          setNumber(
            roundNumber(parseFloat(number) * parseFloat(secondNumber), 10).toString()
          );
          setSecondNumber("0");
          setCalculate(false);
          setMultiplicationState(false);
          break;

        case divisionState:
          setNumber(
            roundNumber(parseFloat(number) / parseFloat(secondNumber), 10).toString()
          );
          setSecondNumber("0");
          setCalculate(false);
          setDivisionState(false);
          break;
      }
    }
  }, [
    number,
    secondNumber,
    setNumber,
    setSecondNumber,
    additionState,
    subtractionState,
    multiplicationState,
    divisionState,
    setAdditionState,
    setSubtractionState,
    setMultiplicationState,
    setDivisionState,
    calculate,
    setCalculate,
  ]);

  const handleClickNumber = (number: number) => {
    if (
      additionState ||
      subtractionState ||
      multiplicationState ||
      divisionState
    ) {
      setSecondNumber((prevNumber) =>
        prevNumber === "0" ? number.toString() : prevNumber + number.toString()
      );
    } else {
      setNumber((prevNumber) =>
        prevNumber === "0" ? number.toString() : prevNumber + number.toString()
      );
    }
  };

  const handleCalculate = () => {
    if (
      additionState ||
      subtractionState ||
      multiplicationState ||
      divisionState
    ) {
      setCalculate(true);
    }
  };

  const handleReset = () => {
    setAdditionState(false);
    setSubtractionState(false);
    setMultiplicationState(false);
    setDivisionState(false);

    setNumber("0");
    setSecondNumber("0");
    setCalculate(false);
  };

  const handleIncrease = () => {
    setAdditionState(true);
    setSubtractionState(false);
    setMultiplicationState(false);
    setDivisionState(false);
  };

  const handleDecrease = () => {
    setSubtractionState(true);
    setAdditionState(false);
    setMultiplicationState(false);
    setDivisionState(false);
  };

  const handleMultiplication = () => {
    setMultiplicationState(true);
    setAdditionState(false);
    setSubtractionState(false);
    setDivisionState(false);
  };

  const handleDivision = () => {
    setDivisionState(true);
    setAdditionState(false);
    setSubtractionState(false);
    setMultiplicationState(false);
  };

  const handleChangeSign = () => {
    if (
      additionState ||
      subtractionState ||
      multiplicationState ||
      divisionState
    ) {
      setSecondNumber((prevNumber) => (-parseFloat(prevNumber)).toString());
    } else {
      setNumber((prevNumber) => (-parseFloat(prevNumber)).toString());
    }
  };

  const handlePercentage = () => {
    if (
      additionState ||
      subtractionState ||
      multiplicationState ||
      divisionState
    ) {
      setSecondNumber((prevNumber) =>
        (parseFloat(prevNumber) / 100).toString()
      );
    } else {
      setNumber((prevNumber) => (parseFloat(prevNumber) / 100).toString());
    }
  };

  const handleBack = () => {
    let newNumber = parseFloat(number.toString().slice(0, -1));
    if (!isNaN(newNumber)) {
      newNumber = parseFloat(newNumber.toFixed(5));
      setNumber(newNumber.toString());
    }

    let newSecondNumber = parseFloat(secondNumber.toString().slice(0, -1));
    if (!isNaN(newSecondNumber)) {
      newSecondNumber = parseFloat(newSecondNumber.toFixed(5));
      setSecondNumber(newSecondNumber.toString());
    }
  };

  const handleComma = () => {
    if (
      additionState ||
      subtractionState ||
      multiplicationState ||
      divisionState
    ) {
      if (!secondNumber.includes(".")) {
        setSecondNumber((prevNumber) => prevNumber + ".");
      }
    } else {
      if (!number.includes(".")) {
        setNumber((prevNumber) => prevNumber + ".");
      }
    }
  };

  return (
    <div className="controls">
      <button
        className="controls-item controls-item-darker"
        onClick={handleReset}
      >
        C
      </button>
      <button
        className="controls-item controls-item-darker"
        onClick={handleChangeSign}
      >
        +/-
      </button>
      <button
        className="controls-item controls-item-darker"
        onClick={handlePercentage}
      >
        %
      </button>
      <button
        className="controls-item controls-item-orangeLight"
        onClick={handleDivision}
      >
        /
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(7)}
      >
        7
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(8)}
      >
        8
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(9)}
      >
        9
      </button>
      <button
        className="controls-item controls-item-orangeLight"
        onClick={handleMultiplication}
      >
        x
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(4)}
      >
        4
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(5)}
      >
        5
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(6)}
      >
        6
      </button>
      <button
        className="controls-item controls-item-orangeLight"
        onClick={handleDecrease}
      >
        -
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(3)}
      >
        3
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(2)}
      >
        2
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(1)}
      >
        1
      </button>
      <button
        className="controls-item controls-item-orangeLight"
        onClick={handleIncrease}
      >
        +
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={() => handleClickNumber(0)}
      >
        0
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={handleComma}
      >
        ,
      </button>
      <button
        className="controls-item controls-item-default"
        onClick={handleBack}
      >
        &lt;-
      </button>
      <button
        className="controls-item controls-item-orangeMedium"
        onClick={handleCalculate}
      >
        =
      </button>
    </div>
  );
};
