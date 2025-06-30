"use strict";

/*슬라이드*/
var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  slidesPerGroup: 1,

  breakpoints: {
    320: {
      spaceBetween: 12,
    },

    1001: {
      spaceBetween: 20,
    },
  },
});

/*슬라이드 클릭하면 그에 맞는 라이트 박스 나타나기*/
//슬라이드
const slide = document.querySelectorAll(".swiper-slide");
//라이트 박스
const lightBox = document.querySelector(".light_box");
//라이트 박스 이미지
const lightBoxImg = document.querySelector(".light_box img");
//장소 이름
const lightBoxName = document.querySelector(".light_box .name");
//정보
const lightBoxP = document.querySelector(".light_box .p");
//날짜
const lightBoxDate = document.querySelector(".light_box .date");
//Close 버튼
const close = document.querySelector(".light_box button");

slide.forEach((element) => {
  element.addEventListener("click", () => {
    lightBoxImg.src = element.getAttribute("data-src");
    lightBoxName.innerText = element.getAttribute("data-name");
    lightBoxP.innerText = element.getAttribute("data-p");
    lightBoxDate.innerText = element.getAttribute("data-date");
    lightBox.style.display = "flex";
    gsap.to(lightBox, {
      opacity: 1,
      duration: 0.3,
    });
  });
});

lightBox.addEventListener("click", () => {
  lightBox.style.opacity = 0;
  lightBox.style.display = "none";
});
