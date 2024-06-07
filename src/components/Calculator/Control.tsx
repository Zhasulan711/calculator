import React from "react";

import { ButtonProps } from "../../shared/utils/ButtonConfig";
import { Button } from "./Button";

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
