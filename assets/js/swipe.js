var swiper = new Swiper(".cards", {
    spaceBetween: 30,
    centerSlide: true,
    fade: true,
    grabCursor: true,
    loop: true,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".next-btn",
      prevEl: ".prev-btn",
    },

     breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      520: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      950: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
     },
  });
