"use strict";

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /*ScrollSmoother*/
  ScrollSmoother.create({
    content: "#scroll_smoother",
    smooth: 2,
    effects: true,
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
        start: "90% 100%",
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
  gsap.timeline({
    scrollTrigger: {
      trigger: ".sec3",
      start: "0% 0%",
      end: "2% 0%",
      pin: true,
      pinSpacing: false,
      srcub: 1,
    },
  });

  //첫번째 카드
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3 .card:first-child",
        start: "0% 0%",
        end: "25% 0%",
        ease: "ease-out",
        scrub: 1,
        dataLag: 1,
      },
    })
    .to(".sec3 .card:first-child", {
      height: 110,
      duration: 10,
    });

  //두번째 카드
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "5% 20%",
        end: "12% 50%",
        scrub: 1,
      },
    })
    .to(".sec3 .card:nth-child(2)", {
      height: 110,
      duration: 10,
    });

  //세번째 카드
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "8% 20%",
        end: "15% 50%",
        scrub: 1,
      },
    })
    .to(".sec3 .card:nth-child(3)", {
      height: 110,
      duration: 10,
    });

  //네번째 카드
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "11% 20%",
        end: "18% 50%",
        scrub: 1,
      },
    })
    .to(".sec3 .card:nth-child(4)", {
      height: 110,
      duration: 10,
    });

  //다섯번째 카드
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "14% 20%",
        end: "21% 50%",
        scrub: 1,
      },
    })
    .to(".sec3 .card:nth-child(5)", {
      height: 110,
      duration: 10,
    });

  //여섯번째 카드
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "17% 20%",
        end: "24% 50%",
        scrub: 1,
      },
    })
    .to(".sec3 .card:nth-child(6)", {
      height: 110,
      duration: 10,
    });

  //일곱번째 카드
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".sec3",
        start: "20% 20%",
        end: "27% 50%",
        scrub: 1,
      },
    })
    .to(".sec3 .card:nth-child(7)", {
      height: 110,
      duration: 10,
    })
    .add(() => {
      document.querySelector(".sec3").style.height = "fit-content";
    });
});
