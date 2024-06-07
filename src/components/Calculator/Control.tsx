import React from "react";

import { Button } from "./Button";
import { ButtonProps } from "../../shared/interfaces";

export const Control: React.FC<ButtonProps> = ({ buttons, buttonHandlers }) => {
  return (
    <div className="controls">
      {buttons.map((button, index) => (
        <Button
          key={index}
          className={button.className}
          onClick={() => {
            if (button.handler === "clickNumber") {
              buttonHandlers[button.handler](button.children);
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
  );
};
