const main = document.querySelector('.main');
const searchIcon = document.querySelector('.box');
searchIcon.onclick = function() {
    main.classList.toggle('active');
}