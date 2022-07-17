const container = document.querySelector('.container');
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const numbers = 500;

for (let i = 0 ; i < 500 ; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    container.appendChild(square);

    square.addEventListener('mouseover' , function() {
        const color = colors[Math.floor(Math.random() * colors.length)];
        square.style.backgroundColor = color;
        square.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    })
    square.addEventListener('mouseout' , function() {
        square.style.backgroundColor = '#1d1d1d';
        square.style.boxShadow = '0 0 2px #000';
    })
}