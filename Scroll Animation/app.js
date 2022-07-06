const listBox = document.querySelectorAll('.box');

window.addEventListener('scroll' , loading);

loading();

function loading() {
    listBox.forEach(function(box) {
        let boxheight = box.getClientRects()[0].bottom;
        if (boxheight < window.innerHeight) {
            box.classList.add('show');
        }
        else {
            box.classList.remove('show');
        }
    })
}