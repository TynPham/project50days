const buttonbtn = document.querySelector('button');
const container = document.querySelector('.container');

buttonbtn.onclick = function() {
    container.classList.toggle('active');
}