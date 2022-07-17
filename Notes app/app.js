const addnote = document.querySelector('.addnotes');
const main = document.querySelector('.main');

const listNoteLS = JSON.parse(localStorage.getItem('listNotes'));
console.log(listNoteLS);
if (listNoteLS) {
    listNoteLS.forEach(function(note) {
        addNewNotes(note);
    })
}

function addNewNotes(text = '') {
    let container = document.createElement('div');
    container.classList.add('container');
    container.innerHTML = `
            <div class="container_header">
                <button class="control edit"><i class="fa-solid fa-pen-to-square"></i></button>
                <button class="control delete"><i class="fa-solid fa-trash-can"></i></button>
            </div>
            <div class="note ${text ? '' : 'hidden'}"></div>
            <textarea name="" id="" class="${text ? 'hidden' : ''}"></textarea>
    `
    main.appendChild(container);
    
    const edit = container.querySelector('.edit');
    const textarea = container.querySelector('textarea');
    const noteEl = container.querySelector('.note');
    const deletess = container.querySelector('.delete');

    noteEl.innerText = text;
    textarea.value = text;
    
    edit.addEventListener('click' , function() {
        const note = textarea.value;
        
        textarea.classList.toggle('hidden');
        noteEl.classList.toggle('hidden');
    
        noteEl.innerText = note;
        setLS();
    })
    
    deletess.addEventListener('click' , function() {
        container.remove();
        setLS();
    })
}
addnote.addEventListener('click' , function() {
    addNewNotes();
})

function setLS() {
    const listnotesEL = document.querySelectorAll('textarea');
    const listNotes = [];

    listnotesEL.forEach(function(note) {
        listNotes.push(note.value);
    })

    localStorage.setItem('listNotes' , JSON.stringify(listNotes));
}
