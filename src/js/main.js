import '../scss/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import '../scss/components/_gallery.scss';
import '../scss/components/_bestsellers.scss';
import '../scss/components/_recipes.scss';
import './header';
import './swiper';
import './contacts';
import './map';






document.addEventListener('DOMContentLoaded', () => {


//КНОПКА ПРОКРУТКИ

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





})








