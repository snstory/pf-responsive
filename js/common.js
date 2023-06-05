(function ($) {
   $('.wr-gnb').multiMenuProc({
      openCtrlButton: $('.wr-button:first'),
      targetLayer: $('.wr-search-gnb-wrap:first'),
      openClass: 'on',
   });

   $('.wr-lang > button:first').click(function (e) {
      e.preventDefault();
      $(this).toggleClass('on');
      $(this).hasClass('on') ?
         $(this).next('ul:first').stop(0, 0).slideDown(300) :
         $(this).next('ul:first').stop(0, 0).slideUp(300);
   });

   $('.wr-zoom-inout').fontSizeCtrl({
      decreaseBtn: $('.wr-zoom-inout > button:first'),
      originalBtn: $('.wr-zoom-inout > button:nth-child(2)'),
      increaseBtn: $('.wr-zoom-inout > button:last')
   });

   $('.gnb-max-inner:first').addHoverOutEvent({
      hoverClass: 'hovers',
      allClass: 'all-opens',
      allOpenBtn: $('.all-menu'),
      topButtons: $('.gnb-max-inner > nav > ul > li'),
      allOpenBtnClass: 'on',
   });

   $('<div class="tab-menu"><button type="button" class="on">온에어</button><button type="button">블로그</button><button type="button">유튜브</button><button type="button">인스타그램</button></div>').prependTo('.main-sect-02-c');
   $('.main-sect-02-c > div.tab-menu').normalTabMenu({
      menus: $('.main-sect-02-c > div.tab-menu > button'),
      layers: $('.main-sect-02-c > ul > li'),
   });

   $('.main-specific').areaControl({
      ltBtn: $('.main-specific > section:last-child'),
      gtBtn: $('.main-specific > section:first-child')
   });

   $('.main-sect-02-a-wrap').normalTabMenu({
      menus: $('.main-sect-02-a-wrap > section > h2'),
      layers: $('.main-sect-02-a-wrap > section > div')
   });

   $('.aside-right-wrapper').sideMenuCtrl({
      bowlLayer: $('.aside-right-wrapper > div'),
      bowlflexble: $('.aside-right:first'),
      flexbleLayer: $('.aside-right > ul:first'),
      flexbleItems: $('.aside-right > ul:first > li'),
      flexbleCtrlBtn: $('.aside-right > button:first'),
      gotoTopBtn: $('.aside-right > button:last'),
      hideCount: 5,
      hideGap: 10
   });
})(jQuery);

const swiper = new Swiper('.swiper', {
   // effect: 'flip',
   // flipEffect: {
   //    slideShadows: true,
   // },
   // effect: 'cube',
   // cubeEffect: {
   //    slideShadows: false,
   // },
   // effect: 'coverflow',
   // coverflowEffect: {
   //    rotate: 30,
   //    slideShadows: false,
   // },
   // effect: 'fade',
   // fadeEffect: {
   //    crossFade: true
   // },
   // effect: 'cards',
   // cardsEffect: {
   //    perSlideOffset: 8,
   //    perSlideRotate: 2,
   //    rotate: true,
   //    slideShadows: true,
   // },
   // effect: 'creative',
   // creativeEffect: {
   //    prev: {
   //       // will set `translateZ(-400px)` on previous slides
   //       translate: [0, 0, -400],
   //    },
   //    next: {
   //       // will set `translateX(100%)` on next slides
   //       translate: ['100%', 0, 0],
   //    },
   // },

   grabCursor: false,
   slidesPerView: 1,
   spaceBetween: 10,
   loop: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
   breakpoints: {
      640: {
         slidesPerView: 2,
      },
      // 768: {
      // },
      1024: {
         slidesPerView: 4,
      },
      1080: {
         slidesPerView: 1,
      },
   },
});

const swiper2 = new Swiper('.swiper-popup', {
   grabCursor: false,
   slidesPerView: 1,
   spaceBetween: 10,
   loop: true,
   autoplay: {
      delay: 2500,
      disableOnInteraction: false,
   },
   // pagination: {
   //    el: "",
   //    clickable: true,
   // },
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
});
