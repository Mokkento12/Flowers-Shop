const flowersSlider = new Swiper(".flowers-slider", {
  // Параметры слайдера

  loop: true,
  slidesPerView: 6,

  // Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
