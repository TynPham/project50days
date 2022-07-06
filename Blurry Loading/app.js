const image = document.querySelector('img');
const loading = document.querySelector('.loading-text');

var text = 0;

window.onload = function() {
    let loadingText = setInterval(function() {
        text++;
        if (text > 99) {
            clearInterval(loadingText);
        }
        loading.innerText = text + '%';
        loading.style.opacity = scale(text , 0 , 100 , 1 , 0);
        image.style.filter = `blur(${scale(text , 0 , 100 , 30 , 0)}px)`;
    },30)
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}