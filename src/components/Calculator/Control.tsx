import React, { useState, useEffect } from "react";

import { NumberProps } from "../../interfaces/NumberProps";
import { StatesProps } from "../../interfaces/StatesProps";

type DisplayProps = NumberProps & StatesProps;

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
  const [addition, setAddition] = useState<number>(0);
  const [subtraction, setSubtraction] = useState<number>(0);
  const [multiplication, setMultiplication] = useState<number>(0);
  const [division, setDivision] = useState<number>(0);
  const [calculate, setCalculate] = useState<boolean>(false);

  useEffect(() => {
    if (calculate) {
      switch (true) {
        case additionState:
          setNumber(addition);
          setSecondNumber(0);
          setCalculate(false);
          setAdditionState(false);
          break;

        case subtractionState:
          setNumber(subtraction);
          setSecondNumber(0);
          setCalculate(false);
          setSubtractionState(false);
          break;

        case multiplicationState:
          setNumber(multiplication);
          setSecondNumber(0);
          setCalculate(false);
          setMultiplicationState(false);
          break;

        case divisionState:
          setNumber(division);
          setSecondNumber(0);
          setCalculate(false);
          setDivisionState(false);
      }
    }
  }, [
    setNumber,
    setSecondNumber,
    addition,
    subtraction,
    multiplication,
    division,
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
    switch (true) {
      case additionState:
        setSecondNumber((prevNumber) => prevNumber * 10 + number);
        break;

      case subtractionState:
        setSecondNumber((prevNumber) => prevNumber * 10 + number);
        break;

      case multiplicationState:
        setSecondNumber((prevNumber) => prevNumber * 10 + number);
        break;

      case divisionState:
        setSecondNumber((prevNumber) => prevNumber * 10 + number);
        break;

      default:
        setNumber((prevNumber) => prevNumber * 10 + number);
        break;
    }
  };

  const handleCalculate = () => {
    switch (true) {
      case additionState:
        setCalculate(true);
        setAddition(number + secondNumber);
        break;

      case subtractionState:
        setCalculate(true);
        setSubtraction(number - secondNumber);
        break;

      case multiplicationState:
        setCalculate(true);
        setMultiplication(number * secondNumber);
        break;

      case divisionState:
        setCalculate(true);
        setDivision(number / secondNumber);
        break;
    }
  };

  const handleReset = () => {
    setAdditionState(false);
    setSubtractionState(false);
    setMultiplicationState(false);
    setDivisionState(false);

    setNumber(0);
    setSecondNumber(0);
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
    setNumber(-number);
    setSecondNumber(-secondNumber);
  };

  const handlePercentage = () => {
    setNumber(number / 100);
    setSecondNumber(secondNumber / 100);
  };

  const handleBack = () => {
    let newNumber = parseFloat(number.toString().slice(0, -1));
    if (!isNaN(newNumber)) {
      newNumber = parseFloat(newNumber.toFixed(5));
      setNumber(newNumber);
    }

    let newSecondNumber = parseFloat(secondNumber.toString().slice(0, -1));
    if (!isNaN(newSecondNumber)) {
      newSecondNumber = parseFloat(newSecondNumber.toFixed(5));
      setSecondNumber(newSecondNumber);
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
      <button className="controls-item controls-item-default">,</button>
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
