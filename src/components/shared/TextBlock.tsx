import React from "react";

interface ITextBlock {
  children: React.ReactNode;
}

export const TextBlock: React.FC<ITextBlock> = ({ children }) => {
  return <div className="std">{children}</div>;
};
