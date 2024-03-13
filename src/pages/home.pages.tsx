import React from "react";
import { IntroScene } from "../components/scenes/IntroScene";
import { Navbar } from "../components/navbar/Navbar";
import MyCVScene from "../components/scenes/MyCVScene";
import { gsap, Power3, Elastic } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IntelanceScene } from "../components/scenes/IntelanceScene";
import { GapBlock } from "../components/shared/GapBlock";
import { EducationScene } from "../components/scenes/EducationScene";
import { GhibliScene } from "../components/scenes/GhibliScene";
import { ThankScene } from "../components/scenes/ThankScene";
import { addBodyClass, removeBodyClass } from "../utils/utils";
import { WrapperScene } from "../components/scenes/WrapperScene";
import { SpineLine } from "../components/shared/SpineLine";
import { ProjectScene } from "../components/scenes/ProjectScene";

interface IHomePage {}

export const HomePage: React.FC<IHomePage> = () => {
  React.useLayoutEffect(() => {
    // plugin register
    gsap.registerPlugin(ScrollTrigger);

    // animate intro scene
    let introCtx = gsap.context(() => {
      const timeline = gsap.timeline();
      timeline
        .addLabel("enter", 1)
        .from(
          "#intro .title",
          {
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: "50% 50% -100px",
            ease: "power3.out",
            duration: 2,
          },
          "enter"
        )
        .from(
          "#intro .std",
          {
            autoAlpha: 0,
            x: -32,
            ease: "power3.out",
            duration: 2,
          },
          "enter+=1.5"
        );
    }, "#intro");

    // animate cv scene
    let cvCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#gap",
          toggleActions: "restart pause resume reset",
          scrub: 5,
          endTrigger: "body",
          start: "bottom 85%",
          end: "+=500",
        },
      });

      timeline
        .set("#curriculum .title-container", { autoAlpha: 1 })
        .addLabel("start", 0)
        .from(
          "#curriculum .title",
          {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: "50% 50% -100px",
            ease: "power3.out",
            duration: 2,
          },
          "start"
        )
        .from(
          "#curriculum .std",
          {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: "50% 50% -100px",
            ease: "power3.out",
            duration: 2,
          },
          "start"
        )
        .to("#curriculum .title, #curriculum .std", {
          autoAlpha: 0,
          yPercent: -100,
          duration: 2,
        });
    });

    // animate intelance scene
    let intelanceCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#curriculum",
          toggleActions: "restart pause resume reset",
          scrub: 3,
          endTrigger: "body",
          start: `top ${document.getElementById("gap")?.offsetHeight}`,
          end: "+=1200",
        },
      });

      timeline
        .set("#intelance .title-container", { autoAlpha: 1 })
        .from("#intelance .title", {
          yPercent: -50,
          autoAlpha: 0,
          ease: "power3.out",
          delay: 0.3,
          duration: 2,
          rotationX: 90,
          transformOrigin: "50% 50% -100px",
        })
        .from(
          "#intelance #subtitle",
          {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: "50% 50% -100px",
            ease: "power3.out",
            duration: 2,
          },
          0
        )
        .to("#intelance .title", {
          yPercent: -50,
          autoAlpha: 0,
          delay: 0.3,
          duration: 2,
          rotationX: 90,
          ease: "power2.out",
        })
        .to(
          "#intelance #subtitle",
          {
            xPercent: -50,
            autoAlpha: 0,
            delay: 0.3,
            duration: 2,
            transformOrigin: "50% 50% -100px",
            ease: "power2.out",
          },
          2
        );
    });

    //animate square
    let squareCtx = gsap.context(() => {
      const bizGapHeight = document.getElementById("bizGap")?.offsetHeight;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#bizGap",
          endTrigger: "body",
          scrub: 1,
          toggleActions: "restart pause resume reset",
          start: `top ${bizGapHeight && bizGapHeight + 600}`,
          end: () => "+=500",
        },
      });

      timeline
        .set("#intelance .container", { autoAlpha: 1 })
        .from(["#intelance .container #open", "#intelance .container #ghost"], {
          scale: 0,
          autoAlpha: 0,
          ease: "power2.out",
        });
    });

    //animate square fades in
    let squareFadeInCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#bizGap",
          start: `top ${document.getElementById("yammobots")?.offsetHeight}`,
          scrub: 1,
          end: "+=1000",
          endTrigger: "body",
        },
      });
      timeline
        .to("#intelance #open", {
          scale: 0,
          autoAlpha: 0,
          ease: "power2.in",
          duration: 2,
        })
        .to(
          "#intelance #ghost",
          {
            x: 300,
            autoAlpha: 0,
            scale: 0,
            ease: "power2.in",
            duration: 2,
          },
          1
        );
    });

    //animate astro
    let astroOutCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#bizGap",
          endTrigger: "body",
          start: `top ${document.getElementById("yammobots")?.offsetHeight}`,
          scrub: 3,
          end: "+=500",
        },
      });

      timeline.from(["#intelance #biz1 #coffee", "#intelance #biz1 #astro"], {
        autoAlpha: 0,
        xPercent: 100,
        duration: 2,
        ease: "power2.out",
      });
    });

    //animate astro ending
    let astroEndingCtx = gsap.context(() => {
      const yammobotHeight = document.getElementById("scene")?.offsetHeight;
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#astroGap",
          endTrigger: "body",
          scrub: 3,
          start: `top ${yammobotHeight}`,
          end: "+=500",
        },
      });

      timeline
        .addLabel("start", 0)
        .to(
          "#intelance #biz1 #astro",
          {
            bottom: "-10vh",
            right: "-10vw",
            scale: 4,
            ease: "power3.inOut",
            duration: 12,
          },
          "start"
        )
        .to(
          "#intelance #biz1 #coffee",
          {
            top: "8rem",
            left: 0,
            scale: 4,
            ease: "power3.inOut",
            duration: 12,
          },
          "start"
        );
    });

    //animate early scenes
    let cloudCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#earlyTitle",
          scrub: 3,
          start: `top ${document.getElementById("earlyTitle")?.offsetHeight}`,
          endTrigger: "body",
          end: "+=1200",
        },
      });
      timeline
        .addLabel("start", 0)
        .set("#earlyTitle", { autoAlpha: 1 })
        .to(
          "#intelance #biz1 #astro",
          4,
          {
            yPercent: 600,
            xPercent: 200,
            ease: "power2.in",
          },
          "start"
        )
        .to(
          "#intelance #biz1 #coffee",
          4,
          {
            yPercent: -600,
            xPercent: -400,
            ease: "power2.in",
          },
          "start"
        )
        .to("#earlyTitle .title-container", 2, { autoAlpha: 1 }, "start")
        .from(
          "#earlyTitle .title",
          4,
          {
            yPercent: -50,
            autoAlpha: 0,
            rotationX: 90,
            transformOrigin: "50% 50% -100px",
            ease: "power3.out",
          },
          "start"
        )
        .from(
          "#earlyTitle .std",
          4,
          {
            yPercent: 50,
            autoAlpha: 0,
            rotationX: -90,
            transformOrigin: "50% 50% 100px",
            ease: "power3.out",
          },
          "start"
        )
        .to("#earlyTitle .title, #earlyTitle .std", 4, {
          autoAlpha: 0,
          yPercent: -100,
        });
    });

    //animate clouds
    let earlyScene = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#intelance",
          scrub: 3,
          endTrigger: "body",
        },
      });

      timeline
        .addLabel("start", 0)
        .fromTo(
          ".cloud-1",
          5,
          {
            yPercent: 50,
            xPercent: 20,
          },
          {
            yPercent: -85,
            xPercent: -20,
          },
          "action"
        )
        .fromTo(
          ".cloud-2",
          5,
          {
            yPercent: 40,
            xPercent: -10,
          },
          {
            yPercent: -40,
            xPercent: -85,
          },
          "action"
        )
        .fromTo(
          ".cloud-3",
          5,
          {
            yPercent: 70,
            xPercent: 40,
          },
          {
            yPercent: -85,
            xPercent: -40,
          },
          "action"
        );
    });

    //animate ghibli scene
    let ghibliCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#ghibliGap",
          endTrigger: "body",
          scrub: 3,
        },
      });

      timeline
        .addLabel("start", 0)
        .to(
          "#earlyTitle .title-container",
          2,
          { autoAlpha: 0, ease: "power2.inOut" },
          "start"
        )
        .to(
          "#Ghibli .grass1",
          20,
          {
            yPercent: 10,
            xPercent: -100,
            ease: "power1.in",
          },
          "start"
        )
        .to(
          "#Ghibli .grass2",
          20,
          {
            yPercent: 10,
            xPercent: 100,
            ease: "power1.in",
          },
          "start"
        )
        .addLabel("start");
    });

    //animate gCloud
    let gCloudCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#early-days",
          scrub: 3,
          endTrigger: "body",
          toggleClass: {
            targets: "body",
            className: "blue-background",
          },
        },
      });

      timeline
        .addLabel("start", 0)
        .to("#Ghibli .container", 4, { autoAlpha: 1 }, "start")
        .set("#Ghibli .sky .c1, #Ghibli .sky .c2", { yPercent: 50 })
        .to(
          "#Ghibli .sky .c1",
          20,
          {
            yPercent: 10,
            xPercent: -50,
            scale: 1.5,
            ease: "power1.in",
          },
          "start"
        )
        .to(
          "#Ghibli .sky .c2",
          20,
          {
            yPercent: 0,
            scale: 1.5,
            ease: "power1.in",
          },
          "start"
        );
    });

    //animate background
    let bgCtx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#wrapperTitle",
          scrub: 3,
          onEnter: () => {
            removeBodyClass("blue-background");
          },
          onLeaveBack: () => {
            addBodyClass("blue-background");
          },
          start: "top center",
        },
      });

      timeline
        .addLabel("start", 0)
        .to("#Ghibli .container", 2, { autoAlpha: 0 }, "start");
    });

    //animate spineline
    let spineCtx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline
        .addLabel("enter", 0)
        .fromTo(
          ".spine",
          1,
          {
            autoAlpha: 0,
            yPercent: 20,
          },
          {
            autoAlpha: 1,
            yPercent: 0,
            ease: Power3.easeOut,
          },
          "enter"
        )
        .fromTo(
          ".spine-target .circle",
          1,
          {
            scale: 0,
            autoAlpha: 0,
          },
          {
            scale: 1,
            autoAlpha: 1,
            ease: Elastic.easeOut.config(1, 0.5),
          },
          "enter+=.7"
        )
        .fromTo(
          ".spine-target .circle",
          2,
          {
            backgroundColor: "#f97316",
          },
          {
            backgroundColor: "#f97316",
          },
          "enter+=1.2"
        )
        .fromTo(
          ".spine-target .pulse",
          4,
          {
            autoAlpha: 1,
            scale: 0,
          },
          {
            autoAlpha: 0,
            scale: 8,
            ease: Power3.easeOut,
            repeat: -1,
          },
          "enter+=1.2"
        );
    });

    // gsap cleanup
    return () => {
      introCtx.revert();
      cvCtx.revert();
      intelanceCtx.revert();
      squareCtx.revert();
      squareFadeInCtx.revert();
      astroOutCtx.revert();
      astroEndingCtx.revert();
      cloudCtx.revert();
      earlyScene.revert();
      ghibliCtx.revert();
      gCloudCtx.revert();
      bgCtx.revert();
      spineCtx.revert();
    };
  }, []);
  return (
    <>
      <header id="header">
        <Navbar />
      </header>
      <div id="home" className="wrapper">
        <section id="intro" className="scene">
          <IntroScene />
        </section>
        <GapBlock id="gap" />
        <section className="scene" id="curriculum">
          <MyCVScene />
        </section>
        <GapBlock id="bizGap" />
        <IntelanceScene />
        <GapBlock id="astroGap" />
        <EducationScene />
        <GapBlock id="ghibliGap" />
        <GhibliScene />
        <ProjectScene />
        <WrapperScene />
        <ThankScene />
      </div>
      <SpineLine />
    </>
  );
};
