const nav = document.querySelector('.nav');
const h1 = document.querySelector('h1');

window.addEventListener('scroll' , function() {
    if (this.window.scrollY > h1.offsetHeight + 150) {
        nav.classList.add('scroll');
    }
    else {
        nav.classList.remove('scroll');
    }
})