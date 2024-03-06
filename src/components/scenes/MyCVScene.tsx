import React from "react";

interface IMyCVScene {}

const MyCVScene: React.FC<IMyCVScene> = () => {
  return (
    <div className="title-container">
      <h1 className="title">
        {"myCV("}
        <span className="params">/^.*$/gi</span>
        {")"}
      </h1>
      <div className="std">
        <p className="-gray">{"<WorkShowCase>"}</p>
      </div>
    </div>
  );
};

export default MyCVScene;
