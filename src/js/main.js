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
    slidesPerView: "auto",
    spaceBetween: 100,
    clipToSide: true,
    watchSlidesVisibility: true,


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
      enabled: false,
      clickable: true,
    },


    on: {
      init: function () {
        updateNavigationButtons(this);
      },
      slideChange: function () {
        updateNavigationButtons(this);
      },
      click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },

    breakpoints: {

      768: {
        slidesPerView: 1,
        centeredSlides: false
      },
      1024: {
        slidesPerView: 2
      }
    }


  });


  prevBtn.addEventListener('click', () => gallerySwiper.slidePrev());
  nextBtn.addEventListener('click', () => gallerySwiper.slideNext());

  function updateNavigationButtons(swiper) {


    if (swiper.isBeginning) {
      prevBtn.classList.add('gallery-button--hidden');
    } else {
      prevBtn.classList.remove('gallery-button--hidden');
    }


    if (swiper.isEnd) {
      nextBtn.classList.add('gallery-button--hidden');
    } else {
      nextBtn.classList.remove('gallery-button--hidden');
    }
  }

  const bestsellerSwiper = new Swiper('.bestseller-swiper', {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,
    speed: 600,
    slidesPerView: "auto",
    spaceBetween: 10,


    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },


    navigation: {
      nextEl: BSnextBtn,
      prevEl: BSprevBtn,
      disabledClass: 'bestseller-swiper-button--disabled'
    },


    pagination: {
      el: ".bestseller-swiper-pagination",
      enabled: false,
      clickable: true,
    },


    on: {
      init: function () {
        updateBSNavigationButtons(this);
      },
      slideChange: function () {
        updateBSNavigationButtons(this);
      },
      click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },

    breakpoints: {

      768: {
        slidesPerView: 1,
        centeredSlides: false
      },
      1024: {
        slidesPerView: 2
      }
    }


  });

  BSprevBtn.addEventListener('click', () => bestsellerSwiper.slidePrev());
  BSnextBtn.addEventListener('click', () => bestsellerSwiper.slideNext());

  function updateBSNavigationButtons(swiper) {


    if (swiper.isBeginning) {
      BSprevBtn.classList.add('bestseller-button--hidden');
    } else {
      BSprevBtn.classList.remove('bestseller-button--hidden');
    }


    if (swiper.isEnd) {
      BSnextBtn.classList.add('bestseller-button--hidden');
    } else {
      BSnextBtn.classList.remove('bestseller-button--hidden');
    }
  }




  const recipeSwiper = new Swiper('.recipe-swiper', {

    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,
    speed: 600,
    slidesPerView: "auto",
    spaceBetween: 10,

    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },


    navigation: {
      nextEl: RnextBtn,
      prevEl: RprevBtn,
      disabledClass: 'recipe-swiper-button--disabled'
    },


    pagination: {
      el: ".recipe-swiper-pagination",
      enabled: false,
      clickable: true,
    },


    on: {
      init: function () {
        updateRNavigationButtons(this);
      },
      slideChange: function () {
        updateRNavigationButtons(this);
      },
      click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },

    breakpoints: {

      768: {
        slidesPerView: 1,
        centeredSlides: false
      },
      1024: {
        slidesPerView: 2
      }
    }


  });

  RprevBtn.addEventListener('click', () => recipeSwiper.slidePrev());
  RnextBtn.addEventListener('click', () => recipeSwiper.slideNext());

  function updateRNavigationButtons(swiper) {


    if (swiper.isBeginning) {
      RprevBtn.classList.add('recipe-button--hidden');
    } else {
      RprevBtn.classList.remove('recipe-button--hidden');
    }


    if (swiper.isEnd) {
      RnextBtn.classList.add('recipe-button--hidden');
    } else {
      RnextBtn.classList.remove('recipe-button--hidden');
    }
  }





  document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('click', function () {

      document.querySelectorAll('.menu-item').forEach(btn => {
        btn.classList.remove('active');
      });


      this.classList.add('active');
    });
  });






  document.getElementById("contacts-form").addEventListener('submit', function (e) {
    e.preventDefault();


    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();


    if (name.length < 2 || name.length > 50) {
      alert('Ошибка: имя должно содержать от 2 до 50 символов');
      nameInput.focus();
      return;
    }


    const phoneRegex = /^\+7\s?\(\d{3}\)\s?\d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(phone)) {
      alert('Ошибка: введите телефон в формате +7 (XXX) XXX-XX-XX');
      phoneInput.focus();
      return;
    }

    alert('Форма успешно отправлена!');
    this.submit();
  });
  document.getElementById('phone').value = "+7"
  document.getElementById('phone').addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = !x[2] ? '+7' : '+7 (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
  });




  document.getElementById('back-to-top').addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Плавная прокрутка
    });
  });

  // Показываем/скрываем кнопку при прокрутке
  window.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'flex';
    } else {
      backToTopButton.style.display = 'none';
    }
  });

  // Инициализация - скрываем кнопку при загрузке, если мы уже вверху
  document.addEventListener('DOMContentLoaded', function () {
    const backToTopButton = document.getElementById('back-to-top');
    backToTopButton.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
  });




  ymaps.ready(init);

  function init() {
    // Создаем карту в контейнере "map"
    const myMap = new ymaps.Map("map", {
      center: [45.032101, 38.921536], // Координаты центра
      zoom: 16 // Масштаб
      
    });

    // Добавляем метку
    const myPlacemark = new ymaps.Placemark(
      [45.032101, 38.921536], // Координаты метки
      {
        hintContent: 'Наш офис', // Всплывающая подсказка
        balloonContent: 'Приходите к нам в гости!' // Балун при клике
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/geography/pin.svg', // Иконка метки
        iconImageSize: [50, 50],
        iconImageOffset: [-15, -42]
      }
    );

    // Добавляем метку на карту
    myMap.geoObjects.add(myPlacemark);

    if (window.innerWidth < 768) {
      myMap.controls.remove('searchControl');
  }

   
  }


    const burger = document.querySelector('.header__mobile-burger');
    const nav = document.querySelector('.header__nav');
    const dropdowns = document.querySelectorAll('.header__dropdown');
  
    // Бургер-меню
    burger.addEventListener('click', function() {
      this.classList.toggle('active');
      nav.classList.toggle('active');
      document.body.classList.toggle('lock-scroll');
    });
  
    // Dropdown для мобильных
    dropdowns.forEach(dropdown => {
      const btn = dropdown.querySelector('.header__dropdown-btn');
      
      btn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle('active');
        }
      });
    });
  
    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
          burger.classList.remove('active');
          nav.classList.remove('active');
          document.body.classList.remove('lock-scroll');
        }
      });
    });
  
    // Закрытие меню при изменении размера окна
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        burger.classList.remove('active');
        nav.classList.remove('active');
        document.body.classList.remove('lock-scroll');
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    });



})