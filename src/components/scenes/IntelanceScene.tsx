import React from "react";
import { TitleSection } from "../shared/TitleSection";
import { TitleFunction } from "../shared/TitleFunction";
import { SceneBlock } from "../shared/SceneBlock";
import { TextBlock } from "../shared/TextBlock";
import { Square } from "../characters/Square";
import { Ghost } from "../characters/Ghost";
import { Coffee } from "../characters/Coffee";
import { Astronaut } from "../characters/Astronaut";

interface IIntelanceScene {}

const Yammobots = () => {
  return (
    <div id="yammobots">
      <TextBlock>
        <p className="-big">
          From 2022 May to Aug 2023 I was
          <strong className="-purple"> a Software Engineer </strong>@
          <a
            href="https://yammobots.com/"
            target="_blank"
            title="Visit Yammobots Website"
            rel="noreferrer"
          >
            Yammobots
          </a>
          .
        </p>
        <p>
          A hybrid company that combines elements of software development,
          potentially offering some SaaS-like features, while focusing on
          serving the needs of local businesses in Myanmar
        </p>
      </TextBlock>
    </div>
  );
};

const YammobotsWork = () => {
  return (
    <TextBlock>
      <p>
        Over the year at Yammobots I was involved in
        <span className="-big -purple">
          real estate system, telemedicine system and cinema booking system
        </span>
        for local businesses in Myanmar
      </p>
    </TextBlock>
  );
};

const subtitle = `Led health tracking & monitoring feature development, building a user-friendly React UI & implementing CI/CD pipelines with Azure DevOps.`;

export const IntelanceScene: React.FC<IIntelanceScene> = () => {
  return (
    <>
      <div className="bizScene" id="intelance">
        <TitleSection>
          <TitleFunction params="Sep 2023, ~" subtitle={subtitle}>
            Intelance
          </TitleFunction>
        </TitleSection>
        <SceneBlock staticChildren={<Yammobots />} id="biz1">
          <Square />
          <Ghost />
          <Coffee />
          <Astronaut />
        </SceneBlock>
        <SceneBlock staticChildren={<YammobotsWork />} id="biz2" />
      </div>
    </>
  );
};
