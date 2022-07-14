const text = "We Love Programming!";
const h1 = document.querySelector('h1');
const input = document.querySelector('input');

var values = 300/input.value;
var index = 1;

autoText();

function autoText() {
    h1.innerText = text.slice(0 , index);
    index++;
    if (index > text.length) {
        index = 1;
    }
    setTimeout(autoText , values);
}

input.addEventListener('change' , function(e) {
    values = 300/e.target.value;
})