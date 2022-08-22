const form = document.querySelector('form');
const input = document.querySelector('input');
const ulEl = document.querySelector('ul');

const listTodoLc = JSON.parse(localStorage.getItem('listTodo'));
if (listTodoLc) {
    listTodoLc.forEach(function(item) {
        createTOdo(item);
    })
}
form.addEventListener('submit' , function(e) {
    e.preventDefault();
    createTOdo();
})

function createTOdo(textLc) {
    let text = input.value;
    if (textLc) {
        text = textLc.text;
    }
    if (text) {
        const liEl = document.createElement('li');
        liEl.classList.add('todo');
        if (textLc && textLc.completed) {
            liEl.classList.add('completed');
        }
        liEl.innerText = text;
        liEl.addEventListener('click' , function() {
            liEl.classList.toggle('completed');
            updateData();
        })
        liEl.addEventListener('contextmenu' , function(e) {
            e.preventDefault();
            liEl.remove();
            updateData();
        })
        ulEl.appendChild(liEl);
        input.value = '';
        updateData();
    }
}

function updateData() {
    const listTodo = document.querySelectorAll('li');
    const arrayTodo = [];
    listTodo.forEach(function(item) {
        arrayTodo.push({
            text: item.innerText,
            completed: item.classList.contains('completed')
        });
    })
    localStorage.setItem('listTodo' , JSON.stringify(arrayTodo));
}
