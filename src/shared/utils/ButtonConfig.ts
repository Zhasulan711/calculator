export type ButtonHandlers = {
  reset: () => void;
  changeSign: () => void;
  percentage: () => void;
  back: () => void;
  comma: () => void;
  calculate: () => void;
  operation: (op: string) => void;
  clickNumber: (num: string) => void;
};

export type ButtonHandler = keyof ButtonHandlers;

export type ButtonConfig = {
  className: string;
  handler: ButtonHandler;
  children: string;
};

export const buttons: ButtonConfig[] = [
  {
    className: "darker",
    handler: "reset",
    children: "C",
  },
  {
    className: "darker",
    handler: "changeSign",
    children: "+/-",
  },
  {
    className: "darker",
    handler: "percentage",
    children: "%",
  },
  {
    className: "orangeLight",
    handler: "operation",
    children: "/",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "7",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "8",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "9",
  },
  {
    className: "orangeLight",
    handler: "operation",
    children: "x",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "4",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "5",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "6",
  },
  {
    className: "orangeLight",
    handler: "operation",
    children: "-",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "1",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "2",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "3",
  },
  {
    className: "orangeLight",
    handler: "operation",
    children: "+",
  },
  {
    className: "default",
    handler: "clickNumber",
    children: "0",
  },
  {
    className: "default",
    handler: "comma",
    children: ",",
  },
  {
    className: "default",
    handler: "back",
    children: "<-",
  },
  {
    className: "orangeMedium",
    handler: "calculate",
    children: "=",
  },
];

export interface ButtonProps {
  buttons: ButtonConfig[];
  buttonHandlers: ButtonHandlers;
}

export interface ButtonComponentProps {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}
