const swiper1 = new Swiper(".mySwiper1", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
  
  const swiper2 = new Swiper('.mySwiper2', {
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  }
  );
  

