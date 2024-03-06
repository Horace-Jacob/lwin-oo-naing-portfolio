import React from "react";

interface IIntroScene {}

export const IntroScene: React.FC<IIntroScene> = () => {
  return (
    <div className="static-container">
      <h1 className="title">
        <span className="me">me</span>
        <span className="func">.is()</span>
      </h1>
      <div className="std">
        <p className="-purple">Lwin Oo Naing</p>
        <p className="-gray">Innovative software engineer</p>
      </div>
    </div>
  );
};
