import React from "react";

interface ISpineLine {}

export const SpineLine: React.FC<ISpineLine> = () => {
  return (
    <div>
      <div className="spine" />
      <div className="spine-target">
        <div className="circle" />
        <div className="pulse" />
      </div>
    </div>
  );
};
