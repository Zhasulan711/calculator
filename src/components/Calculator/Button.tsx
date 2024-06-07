import React from "react";

import { ButtonComponentProps } from "../../shared/utils/ButtonConfig";

export const Button: React.FC<ButtonComponentProps> = ({
  className,
  onClick,
  children,
}) => (
  <button className={`controls-item ${className}`} onClick={onClick}>
    {children}
  </button>
);
