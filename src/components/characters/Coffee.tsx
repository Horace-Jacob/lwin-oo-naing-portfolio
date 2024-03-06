import React from "react";
import { ReactComponent as CoffeeSVG } from "../../assets/coffeeMug.svg";
import { gsap } from "gsap";
import { LOOP_EASE_IN_OUT } from "../../utils/constants";
import { random } from "../../utils/utils";

interface ICoffee {}

export const Coffee: React.FC<ICoffee> = () => {
  React.useLayoutEffect(() => {
    let coffeeCtx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to(".coffee-coffee", {
        yPercent: random(20, 200),
        xPercent: random(-50, 50),
        rotation: random(0, 360),
        transformOrigin: "50% 50%",
        ...LOOP_EASE_IN_OUT,
        duration: 5,
      });
    });

    return () => coffeeCtx.revert();
  }, []);
  return (
    <div>
      <CoffeeSVG />
    </div>
  );
};
