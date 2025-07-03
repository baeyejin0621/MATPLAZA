"use strict";

/*브라우저 넓이 변경될 때마다 새로고침하기*/
window.addEventListener("resize", () => {
  location.reload();
});

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  /*1000px 이하*/
  gsap.matchMedia().add("(max-width: 1000px)", () => {
    //헤더 로고
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sec_wrapper",
          start: "0% 0%",
          end: "1% 0%",
          duration: 0.5,
          scrub: 1,
        },
      })
      .to("h1", {
        width: 80,
        top: 1,
        right: 15,
        x: 0,
      });

    //메인 비주얼 이미지 움직이기
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sec_wrapper",
          start: "0% 0%",
          endTrigger: ".sec_wrapper",
          end: "120% 100%",
          scrub: 1,
        },
      })
      //숨겨놨던 사진 보이기
      .to(".visual_img > img:last-of-type", {
        opacity: 1,
        duration: 0.2,
      });

    //다섯번째 섹션
    //슬라이드
    const slide = document.querySelectorAll(".sec5 .swiper-slide");
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec5",
        start: "0% 90%",
        end: "100% 100%",
      },
    });

    slide.forEach((element) => {
      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
        }
      );
    });
  });

  /*1000px 이상*/
  gsap.matchMedia().add("(min-width: 1001px)", () => {
    /*ScrollSmoother*/
    ScrollSmoother.create({
      content: "#scroll_smoother",
      smooth: 2,
    });

    /*ScrollTrigger*/
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sec_wrapper",
          start: "10% 0%",
          end: "17% 0%",
          duration: 2,
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
      .to(".visual_img > img:last-of-type", {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
      })
      //메인 비주얼 이미지 넓어지기
      .to(
        ".visual_img",
        {
          width: 1199,
          maxWidth: 1199,
          duration: 0.5,
          x: "-50%",
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
        end: "90% 100%",
        scrub: 1,
      },
    });

    // (1)
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

    // (2)
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
            start: `-${i * 30}% 0%`,
            end: "90% 0%",
            scrub: 1,
          },
        })
        .to(card, {
          height: 110,
          duration: 30,
        });
    });

    //네번째 섹션 나타나기
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sec4",
          start: "0% 60%",
          end: "100% 100%",
        },
      })
      .to(".sec4 .box_wrap a:first-child", {
        scaleX: 1,
        duration: 0.6,
      })
      .to(".sec4 .box_wrap a .more_info", {
        opacity: 1,
        scaleX: 1,
        duration: 0.3,
      })
      .to(
        ".sec4 .box_wrap a:first-child h2",
        {
          opacity: 1,
          duration: 0.2,
        },
        "+=.1"
      )
      .to(
        ".sec4 .box_wrap a:first-child :is(p, .more_info span)",
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=.1"
      )
      .to(".sec4 .box_wrap a:first-child .more_info img", {
        opacity: 1,
        duration: 0.1,
      })
      .to(
        ".sec4 .box_wrap a:last-child",
        {
          scaleX: 1,
          duration: 0.6,
        },
        "-=.9"
      )
      .to(".sec4 .box_wrap a:last-child h2", {
        opacity: 1,
        duration: 0.2,
      })
      .to(
        ".sec4 .box_wrap a:last-child :is(p, .more_info span)",
        {
          opacity: 1,
          duration: 0.1,
        },
        "-=.1"
      )
      .to(".sec4 .box_wrap a:last-child .more_info img", {
        opacity: 1,
        duration: 0.1,
      });

    //다섯번째 섹션 슬라이드 올라오는 효과
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".sec5",
        start: "0% 60%",
        end: "100% 100%",
      },
    });

    //슬라이드
    const slide = document.querySelectorAll(".sec5 .swiper-slide");
    slide.forEach((element) => {
      tl.fromTo(
        element,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
        }
      );
    });

    //여섯번째 섹션
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".sec6",
          start: "0% 60%",
          end: "100% 100%",
        },
      })
      .to(".sec6 .content", {
        scaleX: 1,
      })
      .to(".sec6 .content .black", {
        scaleX: 0,
      })
      .to(
        ".sec6 .content .info > div",
        {
          scaleX: 1,
        },
        "-=.1"
      )
      .to(".sec6 .content .info > div *", {
        opacity: 1,
      })
      .to(".sec6 .bottom_info", {
        opacity: 1,
      });
  });
});
