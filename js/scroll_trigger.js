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
        onRefresh: () => {
          //로딩되면 맨위로 스크롤 이동
          window.scrollTo(0, 0);
        },
      },
    })
    .to("h1", {
      width: 130,
      top: 0,
      right: 40,
      x: 0,
    });

  //메인 비주얼 아래 선
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".main_visual",
        start: "20% 0%",
        end: "20% 0%",
        duration: 1,
        scrub: 1,
      },
    })
    .to(".main_visual .bottom .bottom_line *", {
      opacity: 0,
    })
    .to(".main_visual .bottom .bottom_line", {
      scale: 0,
    });

  //메인 비주얼 아래 글자들
  gsap.timeline({
    scrollTrigger: {
      trigger: ".main_visual",
      start: "20% 0%",
      end: "100% 0%",
      duration: 3,
      scrub: 1,
      markers: true,
    },
  });
});
