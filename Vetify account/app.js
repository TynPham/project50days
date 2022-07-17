const listCode = document.querySelectorAll('.code');

listCode[0].focus();

listCode.forEach(function(code , index) {
    code.addEventListener('keydown' , function(e) {
        if (e.key >= 0 && e.key <= 9) {
            listCode[index].value = ''
            setTimeout(() => listCode[index + 1].focus(), 10)
        } else if(e.key === 'Backspace') {
            setTimeout(() => listCode[index - 1].focus(), 10)
        }
    })
})