import React from "react";
import { gsap } from "gsap";

interface ISquare {}

export const Square: React.FC<ISquare> = () => {
  React.useLayoutEffect(() => {
    let squareRotationCtx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to(".container #open", {
        yoyo: true,
        repeat: -1,
        rotation: 360,
        duration: 4,
        stagger: 2,
        ease: "power3.inOut",
        transform: "50% 50%",
      });
    });

    return () => squareRotationCtx.revert();
  }, []);
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="open">
        <g className="open-open">
          <path
            fill="var(--orange)"
            d="M90 70.2l-2-44.1c-.5-9.3-8.4-16.5-17.8-16.1l-44.1 2c-9.3.5-16.5 8.4-16.1 17.8l2 44.1c.4 9.3 8.4 16.6 17.7 16.1l44.1-2c9.4-.5 16.6-8.4 16.2-17.8z"
          />
        </g>
      </svg>
    </div>
  );
};
