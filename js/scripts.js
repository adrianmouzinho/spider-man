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
});