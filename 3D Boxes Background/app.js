const container = document.querySelector('.container');
const magicbtn = document.querySelector('.magic');

for (let i = 0 ; i < 4 ; i++) {
    for (let j = 0 ; j < 4 ; j++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundPosition = `${-j * 125}px ${-i * 125}px`;
        container.appendChild(box);
    }
}

magicbtn.onclick = function() {
    container.classList.toggle('last');
}
