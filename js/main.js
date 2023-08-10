$(document).ready(function () {
  const flowersSlider = new Swiper(".flowers-slider", {
    // Параметры слайдера

    loop: true,
    slidesPerView: 6,

    // Стрелки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 6,
      },
    },
  });

  const reviewsSlider = new Swiper(".reviews-slider", {
    // Параметры слайдера

    loop: true,
    slidesPerView: 1,

    // Стрелки
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  $("#review-1").on("click", function () {
    $.fancybox.open(
      [
        {
          src: "../img/flowers/bouquet-1.jpg",
          opts: {
            caption: "First caption",
            thumb: "../img/flowers/bouquet-1.jpg",
          },
        },
        {
          src: "../img/flowers/bouquet-2.jpg",
          opts: {
            caption: "Second caption",
            thumb: "../img/flowers/bouquet-2.jpg",
          },
        },
        {
          src: "../img/flowers/bouquet-3.jpg",
          opts: {
            caption: "Second caption",
            thumb: "../img/flowers/bouquet-3.jpg",
          },
        },
        {
          src: "../img/flowers/bouquet-4.jpg",
          opts: {
            caption: "Second caption",
            thumb: "../img/flowers/bouquet-4.jpg",
          },
        },
      ],
      {
        loop: true,
        thumbs: {
          autoStart: true,
        },
      }
    );
  });
});
