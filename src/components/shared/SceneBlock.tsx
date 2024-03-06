import React from "react";

interface ISceneBlock {
  staticChildren: React.ReactNode;
  children?: React.ReactNode;
  id: string;
}

export const SceneBlock: React.FC<ISceneBlock> = ({
  staticChildren,
  children,
  id,
}) => {
  return (
    <>
      <section className="scene" id={id}>
        <div className="static-container">{staticChildren}</div>
        <div className="container">{children}</div>
      </section>
    </>
  );
};
