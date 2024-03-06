import React from "react";
import { TextBlock } from "./TextBlock";

interface ITitleFunction {
  params: string;
  children: React.ReactNode;
  subtitle?: string;
}

export const TitleFunction: React.FC<ITitleFunction> = ({
  params,
  children,
  subtitle,
}) => {
  return (
    <div>
      <h1 className="title">
        {children}(<span className="params">{params}</span>)
      </h1>
      {subtitle ? (
        <TextBlock>
          <p id="subtitle">{subtitle}</p>
        </TextBlock>
      ) : null}
    </div>
  );
};
