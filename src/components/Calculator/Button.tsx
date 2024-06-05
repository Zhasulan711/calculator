import React from "react";

export const Button = ({
  className,
  onClick,
  children,
}: {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
}) => (
  <button className={`controls-item ${className}`} onClick={onClick}>
    {children}
  </button>
);
