import React from "react";

interface ITitleSection {
  children: React.ReactNode;
  id?: string;
}

export const TitleSection: React.FC<ITitleSection> = ({
  children,
  id = "scene",
}) => {
  return (
    <>
      <section className="scene" id={id}>
        <div className="title-container">{children}</div>
      </section>
    </>
  );
};
