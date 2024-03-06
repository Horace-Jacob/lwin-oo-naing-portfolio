import React from "react";
import { SceneBlock } from "../shared/SceneBlock";
import { TextBlock } from "../shared/TextBlock";
import { Phoenix } from "../characters/Phoenix";
import { Canvas } from "@react-three/fiber";

interface IGhlibliScene {}

const StaticChildren = () => {
  return (
    <TextBlock>
      <p className="-big">
        Interested in{" "}
        <span className="-purple">
          Philosophy, Japanese animation and video games.
        </span>
      </p>
      <p>
        Passionate software engineer with a flair for blending code and
        creativity, driven by a love for Philosophy, Japanese animation, and
        video games.
      </p>
    </TextBlock>
  );
};

export const GhibliScene: React.FC<IGhlibliScene> = () => {
  return (
    <div className="ghibliScene">
      <SceneBlock id="Ghibli" staticChildren={<StaticChildren />}>
        <div className="sky">
          <div className="cloud c1"></div>
          <div className="cloud c2"></div>
        </div>
        <Canvas>
          <React.Suspense>
            <directionalLight position={[1, 1, 1]} intensity={2} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 5, 10]} intensity={2} />
            <spotLight
              position={[0, 50, 10]}
              angle={0.15}
              penumbra={1}
              intensity={2}
            />

            <Phoenix />
          </React.Suspense>
        </Canvas>
        <div className="grass1"></div>
        <div className="grass2"></div>
      </SceneBlock>
    </div>
  );
};
