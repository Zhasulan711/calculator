import { ButtonConfig, ButtonHandlers } from "../types";

export interface ButtonProps {
  buttons: ButtonConfig[];
  buttonHandlers: ButtonHandlers;
}

export interface ButtonComponentProps {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}
