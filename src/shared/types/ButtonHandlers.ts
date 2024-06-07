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
