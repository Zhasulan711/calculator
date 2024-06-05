export const performCalculation = (
  num1: number,
  num2: number,
  someOperation: string
) => {
  switch (someOperation) {
    case "+":
      return num1 + num2;

    case "-":
      return num1 - num2;

    case "*":
      return num1 * num2;

    case "/":
      return num1 / num2;

    default:
      return num1;
  }
};
