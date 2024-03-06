import React from "react";
import { SceneBlock } from "../shared/SceneBlock";
import { TextBlock } from "../shared/TextBlock";
import { Potion } from "../characters/Potion";

interface IThankScene {}

const ThankYou = () => {
  return (
    <TextBlock>
      <Potion />
      <div className="madeof">
        <p className="-comment">{"//Made with"}</p>
        <div className="cols">
          <ul className="col">
            <li className="ico">()&lt;/&gt;</li>
            <li>ReactJs</li>
            <li>GSAP 3</li>
            <li>ThreeJs</li>
            <li>Figma</li>
          </ul>
          <ul className="col">
            <li className="ico">~</li>
            <li>
              SketchFab <span style={{ color: "#dbdbdb" }}>and</span>
            </li>
            <li>Endless references</li>
          </ul>
        </div>
      </div>
    </TextBlock>
  );
};

export const ThankScene: React.FC<IThankScene> = () => {
  return <SceneBlock id="thanks" staticChildren={<ThankYou />} />;
};
