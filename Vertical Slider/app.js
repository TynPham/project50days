const slider_container = document.querySelector('.slider-container');
const leftSlider = document.querySelector('.slider-left');
const rightSlider = document.querySelector('.slider-right');
const sliderLength = leftSlider.querySelectorAll('div').length;
const btnLeft = document.querySelector('.left'); 
const btnRight = document.querySelector('.right'); 

leftSlider.style.top = `-${(sliderLength - 1) * 100}vh`;

var currentIndex = 0;

btnLeft.onclick = function() {
    const sliderHeight = slider_container.clientHeight;
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = sliderLength - 1;
    }
    rightSlider.style.transform = `translateY(-${currentIndex * sliderHeight}px)`;
    leftSlider.style.transform = `translateY(${currentIndex * sliderHeight}px)`;
}

btnRight.onclick = function() {
    const sliderHeight = slider_container.clientHeight;
    currentIndex++;
    if (currentIndex > sliderLength - 1) {
        currentIndex = 0;
    }
    rightSlider.style.transform = `translateY(-${currentIndex * sliderHeight}px)`;
    leftSlider.style.transform = `translateY(${currentIndex * sliderHeight}px)`;
}
