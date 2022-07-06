const labelList = document.querySelectorAll('label');

labelList.forEach(function(label) {
    label.innerHTML = label.innerText
            .split('')
            .map(function(text , index) {
                return  `<span style="transition-delay: ${index * 50}ms">${text}</span>`
            })
            .join('')
            
})
