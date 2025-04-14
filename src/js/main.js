import '../scss/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import '../scss/components/_gallery.scss';
import '../scss/components/_bestsellers.scss';
import '../scss/components/_recipes.scss';





// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', () => {
  const prevBtn = document.querySelector('.gallery-button-prev');
  const nextBtn = document.querySelector('.gallery-button-next');
  
  const BSprevBtn = document.querySelector('.bestseller-button-prev');
  const BSnextBtn = document.querySelector('.bestseller-button-next');

  const RprevBtn = document.querySelector('.recipe-button-prev');
  const RnextBtn = document.querySelector('.recipe-button-next');

  const gallerySwiper = new Swiper('.gallery-swiper', {
    // Основные параметры
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    initialSlide: 0,
    speed: 600,
    slidesPerView: "auto",
    spaceBetween: 100,

    
    // Эффект coverflow
    coverflowEffect: {
      rotate: 0,
      stretch: 80,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },
    
    // Навигация (исправленные селекторы)
    navigation: {
      nextEl: nextBtn,
      prevEl: prevBtn,
      disabledClass: 'swiper-button--disabled' // Добавляем класс для неактивных кнопок
    },
    
    // Отключаем пагинацию (если она не используется)
    pagination: {
      el: ".swiper-pagination",
      enabled: false,
      clickable: true,
    },
    
    // Обработчики событий
    on: {
      init: function() {
        updateNavigationButtons(this);
      },
      slideChange: function() {
        updateNavigationButtons(this);
      },
      click(event) {
        if (this.clickedIndex !== undefined) {
          this.slideTo(this.clickedIndex);
        }
      }
    },
    
  breakpoints: {
    // Адаптив для мобильных
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
  
  // Для кнопки "Назад"
  if (swiper.isBeginning) {
    prevBtn.classList.add('gallery-button--hidden');
  } else {
    prevBtn.classList.remove('gallery-button--hidden');
  }
  
  // Для кнопки "Вперед"
  if (swiper.isEnd) {
    nextBtn.classList.add('gallery-button--hidden');
  } else {
    nextBtn.classList.remove('gallery-button--hidden');
  }
}

const bestsellerSwiper = new Swiper('.bestseller-swiper', {
  // Основные параметры
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  initialSlide: 0,
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 10,

  
  // Эффект coverflow
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  
  // Навигация (исправленные селекторы)
  navigation: {
    nextEl: BSnextBtn,
    prevEl: BSprevBtn,
    disabledClass: 'bestseller-swiper-button--disabled' // Добавляем класс для неактивных кнопок
  },
  
  // Отключаем пагинацию (если она не используется)
  pagination: {
    el: ".bestseller-swiper-pagination",
    enabled: false,
    clickable: true,
  },
  
  // Обработчики событий
  on: {
    init: function() {
      updateBSNavigationButtons(this);
    },
    slideChange: function() {
      updateBSNavigationButtons(this);
    },
    click(event) {
      if (this.clickedIndex !== undefined) {
        this.slideTo(this.clickedIndex);
      }
    }
  },
  
breakpoints: {
  // Адаптив для мобильных
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
  
  // Для кнопки "Назад"
  if (swiper.isBeginning) {
    BSprevBtn.classList.add('bestseller-button--hidden');
  } else {
    BSprevBtn.classList.remove('bestseller-button--hidden');
  }
  
  // Для кнопки "Вперед"
  if (swiper.isEnd) {
    BSnextBtn.classList.add('bestseller-button--hidden');
  } else {
    BSnextBtn.classList.remove('bestseller-button--hidden');
  }
}




const recipeSwiper = new Swiper('.recipe-swiper', {
  // Основные параметры
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: false,
  initialSlide: 0,
  speed: 600,
  slidesPerView: "auto",
  spaceBetween: 10,

  
  // Эффект coverflow
  coverflowEffect: {
    rotate: 0,
    stretch: 80,
    depth: 350,
    modifier: 1,
    slideShadows: true,
  },
  
  // Навигация (исправленные селекторы)
  navigation: {
    nextEl: RnextBtn,
    prevEl: RprevBtn,
    disabledClass: 'recipe-swiper-button--disabled' // Добавляем класс для неактивных кнопок
  },
  
  // Отключаем пагинацию (если она не используется)
  pagination: {
    el: ".recipe-swiper-pagination",
    enabled: false,
    clickable: true,
  },
  
  // Обработчики событий
  on: {
    init: function() {
      updateRNavigationButtons(this);
    },
    slideChange: function() {
      updateRNavigationButtons(this);
    },
    click(event) {
      if (this.clickedIndex !== undefined) {
        this.slideTo(this.clickedIndex);
      }
    }
  },
  
breakpoints: {
  // Адаптив для мобильных
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
  
  // Для кнопки "Назад"
  if (swiper.isBeginning) {
    RprevBtn.classList.add('recipe-button--hidden');
  } else {
    RprevBtn.classList.remove('recipe-button--hidden');
  }
  
  // Для кнопки "Вперед"
  if (swiper.isEnd) {
    RnextBtn.classList.add('recipe-button--hidden');
  } else {
    RnextBtn.classList.remove('recipe-button--hidden');
  }
}
})


