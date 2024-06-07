import { ButtonConfig } from "../types";

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
