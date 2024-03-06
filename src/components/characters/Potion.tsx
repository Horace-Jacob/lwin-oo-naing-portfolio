import React from "react";
import { ReactComponent as PotionSVG } from "../../assets/potion.svg";
import { gsap } from "gsap";
import { getNodes } from "../../utils/utils";
import { LOOP_EASE_IN_OUT } from "../../utils/constants";

interface IPotion {}

export const Potion: React.FC<IPotion> = () => {
  React.useEffect(() => {
    const potion = getNodes("#potion");
    const potionCtx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .addLabel("start")
        .to(potion, 3, {
          transformOrigin: "50% 90%",
          rotation: 15,
          ...LOOP_EASE_IN_OUT,
        })
        .fromTo(
          potion.potionDrop,
          0.5,
          {
            yPercent: 100,
            rotation: 0,
            scale: 1,
          },
          {
            transformOrigin: "20% 120%",
            rotation: 360,
            yPercent: -100,
            scale: 0,
            repeat: -1,
          },
          "start"
        )
        .fromTo(
          potion.potionDrop2,
          0.7,
          {
            yPercent: 100,
            rotation: 0,
            scale: 1,
          },
          {
            transformOrigin: "0% 120%",
            rotation: -360,
            yPercent: -100,
            scale: 0,
            repeat: -1,
          },
          "start"
        );
    });

    return () => potionCtx.revert();
  });
  return (
    <div>
      <PotionSVG />
    </div>
  );
};
