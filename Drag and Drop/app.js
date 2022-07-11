const draggable = document.querySelector('.draggable')
const empties = document.querySelectorAll('.box')

draggable.addEventListener('dragstart', dragStart)
draggable.addEventListener('dragend', dragEnd)

for(const empty of empties) {
    empty.addEventListener('dragover', dragOver)
    empty.addEventListener('dragenter', dragEnter)
    empty.addEventListener('dragleave', dragLeave)
    empty.addEventListener('drop', dragDrop)
}

function dragStart() {
    this.className += ' outline' 
    setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd() {
    this.className = 'draggable'
}

function dragOver(e) {
    e.preventDefault()
}

function dragEnter(e) {
    e.preventDefault()
    this.className += ' fill'
}

function dragLeave() {
    this.className = 'box'
}

function dragDrop() {
    this.className = 'box'
    this.append(draggable);
}