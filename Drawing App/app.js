const canvas = document.getElementById('canvas');
const color = document.querySelector('.color');
const eraser = document.querySelector('.eraser');
const reduce = document.querySelector('.reduce');
const size = document.querySelector('.size');
const augment = document.querySelector('.augment');
const closes = document.querySelector('.close');
const save = document.querySelector('.save');

var context = canvas.getContext("2d");

var x , y;
var isPressed = false;
var Curcolor = '#000';
var isColor = true;
var lastColor = Curcolor;
var line = 5;

canvas.addEventListener('mousedown' , function(e) {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener('mouseup' , function() {
    isPressed = false;
    x = undefined;
    y = undefined;
})
canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		const x2 = e.offsetX
		const y2 = e.offsetY

        context.beginPath();
		context.moveTo(x, y);
        context.lineTo(x2, y2);
        context.lineWidth = line * 2;
        context.strokeStyle = Curcolor;
        context.stroke();
        
        context.beginPath();
        context.arc(x2, y2, line, 0, 2 * Math.PI);
        context.fillStyle = Curcolor;
        context.fill();
        
		x = x2
		y = y2
	}
})

color.addEventListener('change' , function(e) {
    Curcolor = e.target.value;
    lastColor = Curcolor;
})

eraser.addEventListener('click' , function() {
    isColor = !isColor;
    if (!isColor) {
        Curcolor = '#fff';
    }
    else {
        Curcolor = lastColor;
    }
})

reduce.addEventListener('click' , function() {
    if (line === 5) {
        line = 5;
    }
    else { 
        line -= 5;
    }

    size.innerText = line;
})

augment.addEventListener('click' , function() {
    if (line === 20) {
        line = 20;
    }
    else { 
        line += 5;
    }

    size.innerText = line;
})

closes.addEventListener('click', function() {
    context.clearRect(0 , 0 , canvas.width , canvas.height);
})

save.onclick = function() {
    save.href = canvas.toDataURL();
}