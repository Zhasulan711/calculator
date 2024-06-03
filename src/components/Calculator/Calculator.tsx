import "../../styles/Calculator.scss";
import { Control } from "./Control";
import { Display } from "./Display";


export const Calculator = () => {
  return (
    <div className="calculator">
      <Display />
      <Control />
    </div>
  );
};
