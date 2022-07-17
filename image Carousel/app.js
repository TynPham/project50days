const listImages = document.querySelectorAll('.img');
const images = document.querySelector('.images');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var currentIndex = 0;

let interval = setInterval(slider , 1500);
function slider() {
    currentIndex++;
    run();
}

function run() {
    if (currentIndex > listImages.length - 1) {
        currentIndex = 0;
    }
    if (currentIndex < 0) {
        currentIndex = listImages.length - 1;
    }

    images.style.transform = `translateX(-${currentIndex * 500}px)`;
}

function reset() {
    clearInterval(interval);
    interval = setInterval(slider , 1500);
}

prev.addEventListener('click' , function() {
    currentIndex--;
    run();
    reset();
})
next.addEventListener('click' , function() {
    currentIndex++;
    run();
    reset();
})

