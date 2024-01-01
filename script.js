function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let iconElement = document.querySelector('.icon');
    let menuButton = document.querySelector('.menu-button');

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        menuButton.classList.remove('open');
        setTimeout(() => {
            iconElement.src = "/img/icon.svg";
        }, 300);
    } else {
        menuMobile.classList.add('open');
        menuButton.classList.add('open');
        setTimeout(() => {
            iconElement.src = "/img/close.svg";
        }, 300);
    }
}