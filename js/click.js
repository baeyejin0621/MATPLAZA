"use strict";
/*메뉴 클릭하면 전체 메뉴 나오기*/
//메뉴
const menu = document.querySelector("header button");
//전체 메뉴
const allMenu = document.querySelector(".all_menu");
//전체 메뉴 배경
const allMenuBg = document.querySelector(".all_menu .menu_bg");
//전체 메뉴 배경 하나하나
const allMenuBg5 = document.querySelectorAll(".all_menu .menu_bg div");
//닫기 버튼들
const none = document.querySelectorAll(".all_menu .top :is(button, h2)");

menu.addEventListener("click", () => {
  allMenu.style.display = "block";

  allMenuBg5.forEach((element) => {
    element.style.transform = "scaleY(1)";
  });
});

none.forEach((element) => {
  element.addEventListener("click", () => {
    allMenuBg5.forEach((element) => {
      element.style.transform = "scaleY(0)";
    });

    allMenu.style.display = "none";
  });
});
