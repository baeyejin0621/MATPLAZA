"use strict";
/*메뉴 클릭하면 전체 메뉴 나오기*/
//메뉴
const menu = document.querySelector("header button");
//언어
const lan = document.querySelector("header .lan");
//전체 메뉴
const allMenu = document.querySelector(".all_menu");
//전체 메뉴 자식들
const allMenuChildren = Array.from(allMenu.children);
//전체 메뉴 배경
const allMenuBg = document.querySelector(".menu_bg");
//전체 메뉴 배경 하나하나
const allMenuBg5 = document.querySelectorAll(".menu_bg div");
//닫기 버튼들
const none = document.querySelectorAll(".all_menu .top :is(button, h2)");

document.addEventListener("DOMContentLoaded", (event) => {
  menu.addEventListener("click", () => {
    if (getComputedStyle(menu).color == "rgb(18, 18, 18)") {
      //메뉴 버튼
      menu.style.color = "#fff";
      menu.innerText = "CLOSE";
      //언어 선택
      lan.style.color = "#fff";
      //전체 메뉴
      allMenu.style.display = "block";
      //전체 메뉴 배경
      allMenuBg.style.display = "flex";
      let tl = gsap.timeline();
      allMenuBg5.forEach((element) => {
        tl.to(
          element,
          {
            scaleY: 1,
            duration: 0.5,
          },
          "<"
        );
      });
      tl.to(allMenuChildren[0], {
        opacity: 1,
        duration: 0.3,
      });
      allMenuChildren.shift();
      allMenuChildren.forEach((element) => {
        tl.to(
          element,
          {
            opacity: 1,
            duration: 0.3,
          },
          "<"
        );
      });
    } else if (getComputedStyle(menu).color == "rgb(255, 255, 255)") {
      //메뉴 버튼
      menu.style.color = "#121212";
      menu.innerHTML =
        "MENU<div class='line1'></div><div class='line2'></div><div class='line3'></div><div class='line4'></div>";
      //언어 선택
      lan.style.color = "#121212";
      //전체 메뉴
      allMenuChildren.unshift(document.querySelector(".all_menu .top"));
      allMenuChildren.forEach((element) => {
        element.style.opacity = 0;
      });
      allMenu.style.display = "none";
      //전체 메뉴 배경
      let tl = gsap.timeline();
      allMenuBg5.forEach((element) => {
        tl.to(
          element,
          {
            scaleY: 0,
            duration: 0.5,
          },
          "<"
        );
      });
      tl.to(allMenuBg, {
        display: "none",
      });
      // allMenuBg.style.display = "none";
    }
  });

  none.forEach((element) => {
    element.addEventListener("click", () => {
      allMenu.style.display = "none";
      allMenu.style.opacity = 0;

      allMenuBg5.forEach((element) => {
        element.style.transform = "scaleY(0)";
      });
    });
  });
});
