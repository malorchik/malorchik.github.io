const swiper = new Swiper('.sample-slider', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
    //   delay: 2000,  
  },   
  pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
  },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})

const swiper2 = new Swiper('.sample-slider2', {
  loop: true,                         //loop
  autoplay: {                         //autoplay
    //   delay: 2000,  
  },   
  pagination: {                       //pagination(dots)
      el: '.swiper-pagination',
  },
  navigation: {                       //navigation(arrows)
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
})