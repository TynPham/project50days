const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const circle = document.querySelector('.circle');
const container = document.querySelector('.container');


openBtn.onclick = function() {
    circle.classList.add('show-close');
    container.classList.add('show-nav')
}
closeBtn.onclick = function() {
    circle.classList.remove('show-close');
    container.classList.remove('show-nav');
}
