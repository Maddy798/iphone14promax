import { Application } from "@splinetool/runtime";

const lenis = new Lenis();

lenis.on("scroll", (e) => {});

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 500);
});

gsap.ticker.lagSmoothing(0);

const canvas = document.getElementById("canvas3d");
const app = new Application(canvas);
app
  .load("https://prod.spline.design/Z3hOV2wMGWrMQOmz/scene.splinecode")
  .then(() => {
    const keyboard = app.findObjectByName("iPhone 14 Pro");
    const Loader = document.getElementById("loader");

    setTimeout(() => {
      Loader.classList.add("loaded");
    }, 1000);

    gsap.set(keyboard.rotation, { x: 0, y: 3.2, z: 0 });
    gsap.set(keyboard.scale, { x: 0.95, y: 0.95, z: 0.95 });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "0% 0%",
        end: "20% 0%",
        scrub: true,
        markers: false,
      },
    });

    tl.to(
      ".hero .left",
      {
        opacity: 0,
        right: "-100%",
      },
      "first"
    );
    tl.to(
      ".hero .right",
      {
        opacity: 0,
        left: "-100%",
      },
      "first"
    );
    tl.to(
      ".hero h1",
      {
        transform: "rotateX(-90deg)",
      },
      "first"
    );
    tl.to(
      keyboard.position,
      {
        x: 400,
        y: 0,
      },
      "first"
    );
    tl.to(
      keyboard.rotation,
      {
        x: 0,
        y: -0.5,
        z: 0,
      },
      "first"
    );

    var tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "15% 0%",
        end: "30% 100% ",
        scrub: true,
        markers: false,
      },
    });

    tl2.to(
      ".display-desc",
      {
        backgroundSize: "100% 100%",
      },
      "second"
    );
    tl2.to(
      ".screen-section h1",
      {
        transform: "scaleX(1)",
      },
      "second"
    );

    var tl3 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "30% 25%",
        end: "60% 100% ",
        scrub: true,
        markers: false,
      },
    });

    tl3.to(
      keyboard.position,
      {
        x: -300,
        y: -300,
      },
      "third"
    );
    tl3.to(
      keyboard.rotation,
      {
        x: 0,
        y: 3,
        z: 1.55,
      },
      "third"
    );
    tl3.to(
      keyboard.scale,
      {
        x: 2.0,
        y: 2.0,
        z: 2.0,
      },
      "third"
    );
    tl3.to(
      ".camera-section h1",
      {
        backgroundSize: "100% 100%",
      },
      "second"
    );
    tl3.to(
      ".camera-section",
      {
        height: "120vh",
      },
      "second"
    );
    var tl4 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "55% 40%",
        end: "75% 100% ",
        scrub: true,
        markers: false,
      },
    });
    tl4.to(
      keyboard.scale,
      {
        x: 1.2,
        y: 1.2,
        z: 1.2,
      },
      "fourth"
    );
    tl4.to(
      keyboard.position,
      {
        x: -250,
        y: -50,
      },
      "fourth"
    );
    tl4.to(
      keyboard.rotation,
      {
        x: 1.6,
        y: -0.5,
        z: 1.55,
      },
      "fourth"
    );
    tl4.to(
      ".body-section",
      {
        height: "120vh",
      },
      "fourth"
    );
    tl4.to(
      ".body-section h1",
      {
        backgroundSize: "100% 100%",
      },
      "fourth"
    );
    tl4.to(
      ".body-section p",
      {
        backgroundSize: "100% 100%",
      },
      "fourth"
    );
    var tl5 = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-container",
        start: "70% 70%",
        end: "100% 100% ",
        scrub: true,
        markers: false,
      },
    });
    tl5.to(
      keyboard.scale,
      {
        x: 1.0,
        y: 1.0,
        z: 1.0,
      },
      "fifth"
    );
    tl5.to(
      keyboard.position,
      {
        x: 300,
        y: -20,
      },
      "fifth"
    );
    tl5.to(
      keyboard.rotation,
      {
        x: 0,
        y: 0,
        z: 0,
      },
      "fifth"
    );
    tl5.to(
      ".final-section",
      {
        height: "130vh",
      },
      "fifth"
    );
    tl5.to(
      ".final-section h1",
      {
        backgroundSize: "100% 100%",
      },
      "fifth"
    );
    tl5.to(
      ".final-section p",
      {
        backgroundSize: "100% 100%",
      },
      "fifth"
    );
  });
