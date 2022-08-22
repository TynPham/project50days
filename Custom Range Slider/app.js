const slider = document.querySelector('#slider');
const values = document.querySelector('label');

slider.addEventListener('input' , function(e) {
    const value = slider.value;
    values.innerText = value;
    values.style.left = value + '%';
})