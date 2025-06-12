import '../scss/main.scss';
import Swiper from 'swiper';
import 'swiper/css';
import '../scss/components/_gallery.scss';
import '../scss/components/_bestsellers.scss';
import '../scss/components/_recipes.scss';




document.addEventListener('DOMContentLoaded', () => {

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



})