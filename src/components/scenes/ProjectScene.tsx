import React from "react";
import { SceneBlock } from "../shared/SceneBlock";
import { TextBlock } from "../shared/TextBlock";

const StaticChildren = () => {
  const openLink = (url: string) => {
    window.open(url, "_blank");
  };
  return (
    <TextBlock>
      <p>
        Over 6 years of software development experience, I have developed
        several projects. Notably,
        <span className="-big -purple">
          @
          <span
            onClick={() =>
              openLink(
                "https://github.com/Horace-Jacob/pictionary-game-react-python"
              )
            }
            className="project-link"
          >
            Pictionary Game
          </span>
          , @
          <span
            onClick={() =>
              openLink("https://github.com/Horace-Jacob/Movie-Show")
            }
            className="project-link"
          >
            Movie App{" "}
          </span>
          and @
          <span
            onClick={() =>
              openLink("https://github.com/Horace-Jacob/social-hub")
            }
            className="project-link"
          >
            Social Media Clone
          </span>
        </span>
        have made significant contributions to my journey.
      </p>
    </TextBlock>
  );
};

export const ProjectScene = () => {
  return (
    <div className="ghibliScene">
      <SceneBlock id="project" staticChildren={<StaticChildren />} />
    </div>
  );
};
