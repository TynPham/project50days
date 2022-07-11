const numbers = document.querySelectorAll('h1');


numbers.forEach(function(number) {
    let follow = parseInt(number.innerText);
    let count = 0;
    let step = follow / 100;
    let interval = setInterval(function() {
        if (count >= follow) {
            count = 0;
            clearInterval(interval);
        }
        else {
            count += Math.floor(step);
            number.innerText = count;
        }
    } , 10)
})