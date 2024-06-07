import React from "react";

import { ButtonComponentProps } from "../../shared/interfaces";

export const Button: React.FC<ButtonComponentProps> = ({
  className,
  onClick,
  children,
}) => (
  <button className={`controls-item ${className}`} onClick={onClick}>
    {children}
  </button>
);
