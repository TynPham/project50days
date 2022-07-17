const counter = document.querySelector('.counter');
const final = document.querySelector('.final');
const listNumbers = document.querySelectorAll('.number');
const replay = document.querySelector('.replay')

run();

function run() {
    listNumbers.forEach(function(number , index) {
        const numbersLength = listNumbers.length - 1;
        number.addEventListener('animationend' , function(e) {
            if (e.animationName === "rotateIn" && index !== numbersLength) {
                number.classList.remove('in');
                number.classList.add('out');
            }
            else if (e.animationName === "rotateOut" && e.target.nextElementSibling) {
                e.target.nextElementSibling.classList.add('in');
            }
            else {
                counter.classList.add('hide');
                final.classList.add('show');
            }
        })
    })
}

replay.addEventListener('click' , function() {
    counter.classList.remove('hide');
    final.classList.remove('show');
    listNumbers.forEach(function(number) {
        number.className = 'number';
    })
    listNumbers[0].classList.add('in');
    run();
})