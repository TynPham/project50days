const listSlider = document.querySelectorAll('.slider');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const body = document.body;

var currentIndex = 0;

prev.onclick = function() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = listSlider.length - 1;
    }
    changeImage(currentIndex);
}

next.onclick = function() {
    currentIndex++;
    if (currentIndex > listSlider.length - 1) {
        currentIndex = 0;
    }
    changeImage(currentIndex);
}

function changeImage(currentIndex) {
    listSlider.forEach(function(slider) {
        slider.classList.remove('active');
    })
    listSlider[currentIndex].classList.add('active');
    body.style.backgroundImage = listSlider[currentIndex].style.backgroundImage;
}  
