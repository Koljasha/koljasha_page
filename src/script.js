import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './style.css';

window.onload = () => {
    //селекторы
    const container = document.querySelectorAll('.container');
    const eyes = document.querySelectorAll('.eye');
    const lines = document.querySelectorAll('.lines');

    //главная страница
    container[0].hidden = false;

    //глаза
    eyes.forEach((element) => {
        element.addEventListener('mouseover', () => {
            eyes[0].src = 'img/top_left_red.jpg';
            eyes[1].src = 'img/top_right_red.jpg';
        });
    });
    eyes.forEach((element) => {
        element.addEventListener('mouseout', () => {
            eyes[0].src = 'img/top_left_yellow.jpg';
            eyes[1].src = 'img/top_right_yellow.jpg';
        });
    });

    //первый пункт меню
    lines[0].addEventListener('mouseover', () => {
        eyes[0].src = 'img/top_left_blue.jpg';
        eyes[1].src = 'img/top_right_blue.jpg';
    });
    lines[0].addEventListener('mouseout', () => {
        eyes[0].src = 'img/top_left_yellow.jpg';
        eyes[1].src = 'img/top_right_yellow.jpg';
    });
    lines[0].addEventListener('click', () => {
        container[0].classList.add('swing-out-left-bck');
        setTimeout(() => {
            container[0].classList.remove('swing-out-left-bck');
            container[0].hidden = true;
            container[1].hidden = false;
        }, 1000);
    });

    //второй пункт меню
    lines[1].addEventListener('mouseover', () => {
        eyes[0].src = 'img/top_left_green.jpg';
        eyes[1].src = 'img/top_right_green.jpg';
    });
    lines[1].addEventListener('mouseout', () => {
        eyes[0].src = 'img/top_left_yellow.jpg';
        eyes[1].src = 'img/top_right_yellow.jpg';
    });
    lines[1].addEventListener('click', () => {
        container[0].classList.add('swing-out-right-bck');
        setTimeout(() => {
            container[0].classList.remove('swing-out-right-bck');
            container[0].hidden = true;
            container[2].hidden = false;
        }, 1000);
    });

    //назад из первого
    lines[2].addEventListener('click', () => {
        container[1].classList.add('fade-out-bck');
        setTimeout(() => {
            container[1].classList.remove('fade-out-bck');
            container[1].hidden = true;
            container[0].hidden = false;
        }, 550);
    });

    //назад из второго
    lines[3].addEventListener('click', () => {
        container[2].classList.add('fade-out-bck');
        setTimeout(() => {
            container[2].classList.remove('fade-out-bck');
            container[2].hidden = true;
            container[0].hidden = false;
        }, 550);
    });
};
