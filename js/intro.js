"use strict";

/*
흰 화면으로 시작
메인 비주얼 이미지와 같은 높이의 검정 박스가 opacity가 높아지며 아래서 위로 쭉 올라옴
로고가 그 위에서 나타남
아래 선이 왼쪽에서 쭉 길어짐
그리고 양옆으로 넓어짐
이미지 opacity가 높아짐
로고 커지며 헤더는 위에서 내려오며 opacity 높아지고
아래 글자들은 opacity만 높아짐
맨 마지막에 '건축용 자재의 ~' opacity 높아짐
*/

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger);

  gsap
    .timeline()
    //인트로 동안 메인 비주얼 화면 고정
    .to("body", {
      overflow: "hidden",
    })
    //메인 비주얼 이미지 박스 나타나기
    .to(".visual_img", {
      scaleY: "1",
      opacity: 1,
      delay: 0.7,
      duration: 0.7,
    })
    //로고 나타나기
    .to(
      "h1",
      {
        opacity: 1,
        duration: 0.7,
      },
      "-=.1"
    )
    //밑에 선 나타나기
    .to(".main_visual .bottom .bottom_line", {
      scaleX: "1",
      duration: 0.7,
    })
    //메인 비주얼 이미지 박스 넓어지기
    .to(
      ".visual_img",
      {
        scaleX: "1",
      },
      "<"
    )
    //메인 비주얼 이미지 나타나기
    .to(
      ".visual_img > img:first-child",
      {
        opacity: 1,
        duration: 0.5,
      },
      "-=.2"
    )
    //로고 커지기
    .to(
      "h1",
      {
        scale: 1,
        y: 0,
        duration: 0.8,
      },
      "+=.2"
    )
    //헤더 나타나기
    .fromTo(
      ".header_menu, header > .lan, .main_visual .copy",
      {
        y: -50,
        duration: 0.5,
      },
      {
        opacity: 1,
        y: 0,
      },
      "<"
    )
    //메인 비주얼 아래 부분 나타나기
    .to(
      ".main_visual .bottom .bottom_line *",
      {
        opacity: 1,
        duration: 0.5,
      },
      "<"
    )
    .to(".main_visual .bottom .top_line", {
      opacity: 1,
      duration: 0.5,
    })
    .add(() => {
      document.body.style.overflow = "auto";
    });

  window.history.scrollRestoration = "manual";
  window.addEventListener("load", () => {
    window.scrollTo(0, 0);
  });
});
