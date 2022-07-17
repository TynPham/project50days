const listFeeling = document.querySelectorAll('.feel');
const submit = document.querySelector('.send');
const container = document.querySelector('.container');
const thank_you = document.querySelector('.thank-you');
const result = document.querySelector('.result');

listFeeling.forEach(function(item , index) {
    item.addEventListener('click' , function() {
        hideactive(index);
        item.classList.add('active');
        result.innerText = 'Feedback: ' + item.innerText;
    })
})

function hideactive() {
    listFeeling.forEach(function(item) {
        item.classList.remove('active');
    })
}

submit.onclick = function() {
    if (result.innerText === '') {
        alert('You have not rated!')
    }
    else {
        container.classList.add('hide');
        thank_you.classList.remove('hide');
    }
}