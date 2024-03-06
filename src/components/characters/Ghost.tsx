import React from "react";
import { ReactComponent as GhostSVG } from "../../assets/react-ghost.svg";
import { gsap } from "gsap";

interface IGhost {}

export const Ghost: React.FC<IGhost> = () => {
  React.useLayoutEffect(() => {
    let ghostCtx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .to("#ghost #ghost-hands", {
          yoyo: true,
          repeat: -1,
          duration: 2,
          stagger: 2,
          ease: "power3.inOut",
          transformOrigin: "50% 50%",
          x: "+=8",
          y: "+=4",
        })
        .to(
          "#ghost",
          {
            yoyo: true,
            repeat: -1,
            y: "+=2",
            transformOrigin: "50% 50%",
            duration: 2,
            stagger: 2,
            ease: "power3.inOut",
          },
          0
        )
        .to(
          "#ghost #ghost-body",
          {
            yoyo: true,
            repeat: -1,
            duration: 2,
            ease: "power3.inOut",
            y: "+=2",
          },
          0
        );
    });
    return () => ghostCtx.revert();
  }, []);
  return (
    <div id="abiz">
      <GhostSVG />
    </div>
  );
};
