import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-grid.css';
import './style.css';

window.onload = () => {
    const container = document.querySelector('.container-fluid');
    container.hidden = false;

    //const serial = document.querySelectorAll('.serial .part');
    //serial.forEach((element) => {
    //    element.addEventListener('click', () => {
    //        window.open('https://serial.koljasha.ru/', '_blank');
    //    });
    //});

    const social = document.querySelectorAll('.social .part');
    social.forEach((element) => {
        element.addEventListener('click', () => {
            window.open('https://social.koljasha.ru/', '_blank');
        });
    });

    document.querySelector('#year').appendChild(document.createTextNode(new Date().getFullYear()));
};
