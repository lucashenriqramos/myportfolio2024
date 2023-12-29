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

const btnDarkModeToggle = document.getElementById('btn-dark-mode-toggle')
const themeSystem = localStorage.getItem('themeSystem') || 'light'

btnDarkModeToggle.addEventListener('click', () => {
    let oldTheme = localStorage.getItem('themeSystem') || 'light'
    let newTheme = oldTheme == "light" ? "dark" : "light"
    localStorage.setItem('themeSystem',newTheme)
    defineCurrentTheme(newTheme)
})

function defineCurrentTheme(theme){
    const darkSvg = "img/dark.png"
    const lightSvg = "img/light.png"
    if(theme == "light")
    {
        btnDarkModeToggle.src = darkSvg
        return
    }
    btnDarkModeToggle.src = lightSvg
}

defineCurrentTheme(themeSystem)