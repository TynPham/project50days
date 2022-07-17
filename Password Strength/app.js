const inputPass = document.querySelector('#password');
const background = document.querySelector('.background');

inputPass.addEventListener('input' , function(e) {
    const length = e.target.value.length;
    background.style.filter = `blur(${20- 2*length}px)`
})