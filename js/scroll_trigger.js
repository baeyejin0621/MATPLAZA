"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);
  //헤더
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".main_visual",
        start: "20% 0%",
        end: "39% 0%",
        duration: 3,
        scrub: 1,
      },
    })
    .to("h1", {
      width: 130,
      top: 0,
      right: 40,
      x: 0,
    });

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".main_visual",
        start: "10% 0%",
        end: "70% 0%",
        scrub: 1,
      },
    })
    //메인 비주얼 아래 글
    .to(".main_visual .bottom .bottom_line *", {
      duration: 1,
      opacity: 0,
    })
    //메인 비주얼 아래 선
    .to(".main_visual .bottom .bottom_line", {
      duration: 4,
      scaleX: 0,
    })
    .to(
      ".main_visual .bottom .top_line",
      {
        ease: "power4.out",
        opacity: 0,
        duration: 3,
      },
      "<"
    );
});
