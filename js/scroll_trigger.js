"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /*ScrollSmoother*/
  ScrollSmoother.create({
    content: "#scroll_smoother",
    smooth: 2,
  });

  /*ScrollTrigger*/
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
    //로고
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
        end: "50% 0%",
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
      ease: "ease-in",
      duration: 3,
      scaleX: 0,
    })
    //"건축용 ~~~"
    .to(
      ".main_visual .bottom .top_line",
      {
        opacity: 0,
        duration: 3,
      },
      "<"
    );

  //메인 비주얼 이미지 움직이기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".main_visual",
        start: "0% 0%",
        endTrigger: ".sec2",
        end: "100% 100%",
        pin: ".visual_img",
        scrub: 1,
      },
    })
    //숨겨놨던 사진 보이기
    .to(".visual_img > img:last-child", {
      opacity: 1,
      duration: 0.2,
      delay: 0.1,
    })
    //메인 비주얼 이미지 넓어지기
    .to(
      ".visual_img",
      {
        width: 1395,
        maxWidth: 1395,
        x: "-50%",
        duration: 0.5,
      },
      "-=.1"
    );

  //두번째 섹션 글자 서서히 나타나기
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec2",
        start: "100% 100%",
        end: "110% 100%",
        duration: 0.3,
        scrub: 1,
      },
    })
    .fromTo(
      ".sec2 p",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
      }
    );

  //세번째 섹션 고정 효과
  // gsap.to(".sec3", {
  //   scrollTrigger: {
  //     trigger: ".sec3",
  //     start: "0% 0%",
  //     end: "95% 100%",
  //     pin: true,
  //     pinSpacing: false,
  //     pinType: "transform",
  //     anticipatePin: 1,
  //     srcub: 1,
  //   },
  //   y: "-978.1",
  // });

  ScrollTrigger.create({
    trigger: ".sec3",
    start: "0% 0%",
    end: "95% 100%",
    pin: true,
    pinSpacing: false,
    scurb: 1,
  });

  gsap.to(".sec3_inner", {
    y: -978.1,
    scrollTrigger: {
      trigger: ".sec3_inner",
      start: "2% 0%",
      end: "120% 100%",
      ease: "power4.in",
      scrub: 1,
      markers: true,
    },
  });

  // const ani1 = gsap.timeline();
  // ani1.to(".sec3_inner", { y: "-978.1px" });

  // ScrollTrigger.create({
  //   animation: ani1,
  //   trigger: ".sec3",
  //   start: "0% 0%",
  //   end: "100% 100%",
  //   pin: true,
  //   pinSpacing: false,
  //   pinType: "transform",
  //   anticipatePin: 1,
  //   srcub: 1,
  //   markers: true,
  // });

  //세번째 섹션 카드 height 좁아지는 애니메이션
  const sec3Card = Array.from(document.querySelectorAll(".sec3 .card"));
  sec3Card.pop();

  sec3Card.forEach((card, i) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: card,
          start: `-${i * 20}% 0%`,
          end: "90% 0%",
          scrub: 1,
        },
      })
      .to(card, {
        height: 110,
        duration: 30,
      });
  });
});
