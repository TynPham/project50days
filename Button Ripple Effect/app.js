const button = document.querySelector('button');

button.onclick = function(e) {
    const x = e.clientX;
    const y = e.clientY;
    
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const span = document.createElement('span');
    span.style.left = (x - buttonLeft) + "px";
    span.style.top = (y - buttonTop) + "px";

    button.appendChild(span);

    setTimeout(function() {
        span.remove();
    } , 500);
}