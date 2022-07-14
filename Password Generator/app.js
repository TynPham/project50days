const result = document.querySelector('.result');
const lengthEl = document.getElementById('length');
const upperEl = document.getElementById('uppercase');
const lowerEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('number');
const symbolsEl = document.getElementById('symbols');
const generate = document.querySelector('.submit');
const copied = document.querySelector('.copied');

const getRandomtext = {
    upper: getuppercase,
    lower: getlowercase,
    numbers: getnumberscase,
    symbols: getsymbolscase
}

copied.addEventListener('click', function() {
    let textarea = document.createElement('textarea');
    const password = result.innerText;

    if (!password) {
        return;
    }
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('Password copied to clipboard!');
})

generate.addEventListener('click' , function() {
    const length = lengthEl.value;
    const upper = upperEl.checked;
    const lower = lowerEl.checked;
    const numbers = numbersEl.checked;
    const symbols = symbolsEl.checked;
    
    getResult(upper , lower , numbers ,symbols , length);
})

function getResult(upper , lower , numbers ,symbols , length) {
    const numberofRule = upper + lower + numbers + symbols;
    const arrayCheck = [{upper} , {lower} , {numbers} , {symbols}].filter(items => Object.values(items)[0]);
    
    if (numberofRule === 0) {
        return '';
    }
    let generatePass = ''
    for (let i = 0 ; i < length ; i += numberofRule) {
        arrayCheck.forEach(function(items) {
            const keys = Object.keys(items)[0];
            generatePass += getRandomtext[keys]();
        })
    }
    const resultPass = generatePass.slice(0 , length);
    result.innerText = resultPass;
}

function getuppercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
function getlowercase() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getnumberscase() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getsymbolscase() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)];
}