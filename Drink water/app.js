const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const smallCups = $$('.cup-small');
const water_parameter = $('.water-parameter');
const percent = $('.percent');
const liter = $('.liter');

smallCups.forEach(function(cup , index) {
    cup.onclick = function() {
        turn_on(index);
    }
})

function turn_on(index) {
    if (smallCups[index].classList.contains('full') && index === smallCups.length - 1) {
        index--;
    }
    else if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling.classList.contains('full')) {
        index--;
    }
    else if (smallCups[index].classList.contains('full') && smallCups[index].nextElementSibling.classList.contains('full')) {
        index --;
    }
    smallCups.forEach(function(cup , index2) {
        if (index2 <= index) {
            cup.classList.add('full');
        }
        else {
            cup.classList.remove('full');
        }
    })

    turn_on_cup();
}

function turn_on_cup() {
    let smallActiveLength = $$('.cup-small.full').length;
    if (smallActiveLength === 0) {
        percent.style.visibility = 'hidden';
        percent.style.height = 0;
    }
    else {
        percent.style.visibility = 'visible'
        percent.style.height = `${smallActiveLength/smallCups.length * 330}px`;
        percent.innerText = `${smallActiveLength/smallCups.length * 100}%`
    }

    if (smallActiveLength === smallCups.length) {
        water_parameter.style.visibility = 'hidden';
        water_parameter.style.height = 0;
    }
    else {
        water_parameter.style.visibility = 'visible';
        liter.innerText = 2-(0.25 * smallActiveLength) + 'L';
    }
}