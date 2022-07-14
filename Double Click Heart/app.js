const container = document.querySelector('.container');
const numbertimes = document.querySelector('span');

var numberLikes = 0;

container.addEventListener('dblclick' , function(e) {
    numberLikes++;
    let iEl = document.createElement('i');
    iEl.className = 'fa-solid fa-heart';
    const x = e.clientX;
    const y = e.clientY;
    
    const currentX = x - e.target.offsetLeft;
    const currentY = y - e.target.offsetTop;

    iEl.style.top = currentY + 'px';
    iEl.style.left = currentX + 'px';

    container.appendChild(iEl);

    setTimeout(function() {
        iEl.remove();
    } , 500)

    numbertimes.innerText = numberLikes;
})