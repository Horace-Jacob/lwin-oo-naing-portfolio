import React from "react";
import { TitleSection } from "../shared/TitleSection";
import { TitleFunction } from "../shared/TitleFunction";
import { SceneBlock } from "../shared/SceneBlock";
import { TextBlock } from "../shared/TextBlock";

interface IEducationScene {}

const InfoMyanmar = () => {
  return (
    <TextBlock>
      <p>Info Myanmar University</p>
      <p className="-big">
        A Computer Science Student
        <br />
        <span className="-purple">from 2018 Oct to Feb 2021</span>
      </p>
    </TextBlock>
  );
};

export const EducationScene: React.FC<IEducationScene> = () => {
  return (
    <div className="earlyDays">
      <TitleSection id="earlyTitle">
        <TitleFunction
          params="2018, 2021"
          subtitle="&lt;table&gt;&lt;tr&gt;&lt;td&gt;..."
        >
          Education
        </TitleFunction>
        <div className="clouds cloud-1"></div>
        <div className="clouds cloud-2"></div>
        <div className="clouds cloud-3"></div>
      </TitleSection>
      <SceneBlock id="early-days" staticChildren={<InfoMyanmar />} />
    </div>
  );
};
