const swiper = new Swiper('.card-slider', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 30,

  pagination: {
    el: '.swiper-pagination',
    renderBullet: function (index, className) {
      return '<li class="' + className + '"></li>'
    },
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.nextArrowBtn',
    prevEl: '.prevArrowBtn',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // 1024: {
    //   slidesPerView: 5,
    //   spaceBetween: 50,
    // },
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
})
