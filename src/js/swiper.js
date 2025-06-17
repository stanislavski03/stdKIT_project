import '../scss/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import '../scss/components/_gallery.scss';
import '../scss/components/_bestsellers.scss';
import '../scss/components/_recipes.scss';



document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.gallery-button-prev');
  const nextBtn = document.querySelector('.gallery-button-next');

  const BSprevBtn = document.querySelector('.bestseller-button-prev');
  const BSnextBtn = document.querySelector('.bestseller-button-next');

  const RprevBtn = document.querySelector('.recipe-button-prev');
  const RnextBtn = document.querySelector('.recipe-button-next');

  const gallerySwiper = new Swiper('.gallery-swiper', {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 50,
    clipToSide: true,
    watchSlidesVisibility: true,
    loop: true,


    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },


    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
      disabledClass: 'swiper-button--disabled'
    },


    pagination: {
      el: ".swiper-pagination",
      enabled: true,
      clickable: true,
    },


    on: {
      // init: function () {
      //   updateNavigationButtons(this);
      // },
      // slideChange: function () {
      //   updateNavigationButtons(this);
      // },
      click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },

    breakpoints: {

      // 768: {
      //   slidesPerView: 1,
      //   centeredSlides: false
      // },
      1200: {
        slidesPerView: 2
      },
      1700: {
        slidesPerView: 3
      }
    }


  });


  prevBtn.addEventListener('click', () => gallerySwiper.slidePrev());
  nextBtn.addEventListener('click', () => gallerySwiper.slideNext());

  // function updateNavigationButtons(swiper) {


  //   if (swiper.isBeginning) {
  //     prevBtn.classList.add('gallery-button--hidden');
  //   } else {
  //     prevBtn.classList.remove('gallery-button--hidden');
  //   }


  //   if (swiper.isEnd) {
  //     nextBtn.classList.add('gallery-button--hidden');
  //   } else {
  //     nextBtn.classList.remove('gallery-button--hidden');
  //   }
  // }

  const bestsellerSwiper = new Swiper('.bestseller-swiper', {

    
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 50,
    clipToSide: true,
    watchSlidesVisibility: true,
    loop: true,


    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },


    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
      disabledClass: 'swiper-button--disabled'
    },


    pagination: {
      el: ".swiper-pagination",
    
      clickable: true,
    },


    on: {
      // init: function () {
      //   updateNavigationButtons(this);
      // },
      // slideChange: function () {
      //   updateNavigationButtons(this);
      // },
      click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },

    breakpoints: {

      // 768: {
      //   slidesPerView: 1,
      //   centeredSlides: false
      // },
      1200: {
        slidesPerView: 2
      },
      1700: {
        slidesPerView: 3
      }
    }


  });

  BSprevBtn.addEventListener('click', () => bestsellerSwiper.slidePrev());
  BSnextBtn.addEventListener('click', () => bestsellerSwiper.slideNext());




  const recipeSwiper = new Swiper('.recipe-swiper', {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 50,
    clipToSide: true,
    watchSlidesVisibility: true,
    loop: true,


    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },


    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
      disabledClass: 'swiper-button--disabled'
    },


    pagination: {
      el: ".swiper-pagination",
    
      clickable: true,
    },


    on: {
      // init: function () {
      //   updateNavigationButtons(this);
      // },
      // slideChange: function () {
      //   updateNavigationButtons(this);
      // },
      click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },

    breakpoints: {

      // 768: {
      //   slidesPerView: 1,
      //   centeredSlides: false
      // },
      1200: {
        slidesPerView: 2
      },
      1700: {
        slidesPerView: 3
      }
    }


  });

  RprevBtn.addEventListener('click', () => recipeSwiper.slidePrev());
  RnextBtn.addEventListener('click', () => recipeSwiper.slideNext());






  document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('click', function () {

      document.querySelectorAll('.menu-item').forEach(btn => {
        btn.classList.remove('active');
      });


      this.classList.add('active');
    });
  });

  })