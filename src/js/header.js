import '../scss/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import '../scss/components/_gallery.scss';
import '../scss/components/_bestsellers.scss';
import '../scss/components/_recipes.scss';

document.addEventListener('DOMContentLoaded', function () {
    // Счётчик элементов в dropdown
    const counter = document.querySelector('.white-circle');
    if (counter) {
        const elements = document.getElementsByClassName('header__link-drp');
        const count = elements.length;
        counter.textContent = count;
    }

    // Dropdown меню
    const dropdownBtns = document.querySelectorAll('.js-dropdown-btn');
    const dropdownContents = document.querySelectorAll('.js-dropdown-content');
    const mobileBurger = document.querySelector('.header__mobile-burger');
    const headerNav = document.querySelector('.header__nav');
    const header = document.getElementById('header');
    let hoverTimers = {};
    const delay = 300;
    let scrollPosition = 0; // Для сохранения позиции скролла

    // Функции для работы с dropdown
    function showDropdown(content) {
        content.closest('.header__dropdown').classList.add('header__dropdown--visible');
    }

    function hideDropdown(content) {
        content.closest('.header__dropdown').classList.remove('header__dropdown--visible');
    }

    // Функции для блокировки скролла
    function lockScroll() {
        scrollPosition = window.pageYOffset;
        document.body.style.overflow = 'hidden';
    }

    function unlockScroll() {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
    }

    // Обработчики для десктопного dropdown
    dropdownBtns.forEach((btn, index) => {
        const content = dropdownContents[index];
        if (!content) return;

        btn.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimers[index]);
            hoverTimers[index] = setTimeout(() => showDropdown(content), delay);
        });

        btn.closest('.header__dropdown').addEventListener('mouseleave', () => {
            hoverTimers[index] = setTimeout(() => hideDropdown(content), delay);
        });

        btn.closest('.header__dropdown').addEventListener('mouseenter', () => {
            clearTimeout(hoverTimers[index]);
        });
    });

    // Обработчик клика вне dropdown
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header__dropdown')) {
            dropdownContents.forEach(content => {
                hideDropdown(content);
            });
        }
    });

    // Обработчик скролла для header
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Унифицированный обработчик бургер-меню
    if (mobileBurger && headerNav) {
        mobileBurger.addEventListener('click', function(e) {
            e.preventDefault();
            const wasActive = this.classList.contains('active');
            
            // Закрываем все dropdown
            dropdownContents.forEach(content => {
                hideDropdown(content);
            });
            document.querySelectorAll('.header__dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
            });

            // Переключаем состояние меню
            this.classList.toggle('active');
            headerNav.classList.toggle('active');

            // Управляем скроллом
            if (this.classList.contains('active')) {
            } else {
            }
        });
    }

    // Обработчики для мобильных dropdown
    document.querySelectorAll('.header__dropdown-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                e.stopPropagation();
                const dropdown = this.closest('.header__dropdown');
                dropdown.classList.toggle('active');
            }
        });
    });

    // Закрытие меню при клике на ссылку
    document.querySelectorAll('.header__link').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768 && mobileBurger && headerNav) {
                mobileBurger.classList.remove('active');
                headerNav.classList.remove('active');
            }
        });
    });

    // Ресайз окна
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            if (mobileBurger) mobileBurger.classList.remove('active');
            if (headerNav) headerNav.classList.remove('active');
            document.querySelectorAll('.header__dropdown').forEach(dropdown => {
                dropdown.classList.remove('active');
                dropdown.classList.remove('header__dropdown--visible');
            });
        }
    });

});