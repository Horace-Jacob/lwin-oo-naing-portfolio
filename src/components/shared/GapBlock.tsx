import React from "react";

interface IGapBlock {
  id: string;
}

export const GapBlock: React.FC<IGapBlock> = ({ id }) => {
  return <div className="gap" id={id}></div>;
};
