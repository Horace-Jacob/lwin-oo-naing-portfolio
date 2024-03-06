import React from "react";
import { SceneBlock } from "../shared/SceneBlock";

interface IWrapperScene {}

const Wrapper = () => {
  return <h1 className="title">&lt;/wrapper&gt;</h1>;
};

export const WrapperScene: React.FC<IWrapperScene> = () => {
  return <SceneBlock id="wrapperTitle" staticChildren={<Wrapper />} />;
};
