const input = document.querySelector('textarea');
const random = document.querySelector('.random');


input.addEventListener('keyup' , function(e) {
    addText(e.target.value);
        
    if(e.key === 'Enter') {
        e.target.value = '';

        randomSelect();
    }

})
function addText(texts) {
    const tags = texts.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim())
    random.innerHTML = '';
    tags.forEach(function(text) {
        let btn = document.createElement('button');
        btn.classList.add('random-items');
        btn.innerText = text;
        random.appendChild(btn);
    }) 
}

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = pickRandomTag()
	
	if (randomTag !== undefined) {
        highlightTag(randomTag)

        setTimeout(() => {
            unHighlightTag(randomTag)
        }, 100)
	}
    }, 100);
    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = pickRandomTag()

            highlightTag(randomTag)
        }, 100)

    }, times * 100);
}
function pickRandomTag() {
    const tags = document.querySelectorAll('.random-items')
    return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag) {
    tag.classList.add('highlight')
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight')
}