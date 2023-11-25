const swiper = new Swiper(".swiper-videos", {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,
  pagination: {
    el: ".last-videos .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".last-videos .btn-next",
    prevEl: ".last-videos .btn-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 16,
    },
    767: {
      slidesPerView: 2.1,
    },
    1024: {
      slidesPerView: 3.1,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  }
});