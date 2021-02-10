window.onload = () => {
    const container = document.querySelector('.container-fluid');
    container.hidden = false;

    const archlinux = document.querySelectorAll('.archlinux .part');
    archlinux.forEach((element) => {
       element.addEventListener('click', () => {
           window.open('https://github.com/Koljasha/archlinux_installer', '_blank');
       });
    });

    const social = document.querySelectorAll('.social .part');
    social.forEach((element) => {
        element.addEventListener('click', () => {
            window.open('https://social.koljasha.ru/', '_blank');
        });
    });

    document.querySelector('#year').appendChild(document.createTextNode(new Date().getFullYear()));
};
