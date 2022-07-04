const scrollBar = document.querySelector('.progress-bar');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const listNumber = document.querySelectorAll('.progress-number');

var currentIndex = 1;

prev.onclick = function() {
    currentIndex--;
    update();
}
next.onclick = function() {
    currentIndex++;
    update();
}
function update() {
    listNumber.forEach(function(number , index) {
        if (index < currentIndex) {
            number.classList.add('active');
        }
        else {
            number.classList.remove('active');
        }
    })
    let listActive = document.querySelectorAll('.active');
    let percent = ((listActive.length - 1) / (listNumber.length - 1)) * 100;
    scrollBar.style.width = percent + '%';
    if (currentIndex === 1) {
        prev.disabled = true;
    }
    else if (currentIndex === listNumber.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
}