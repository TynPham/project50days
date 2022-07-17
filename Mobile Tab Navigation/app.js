
const listControl = document.querySelectorAll('.item');
const image = document.querySelectorAll('img');

listControl.forEach(function(item , index) {
    item.addEventListener('click' , function() {
        unactive(index);
        item.classList.add('active');
        image[index].classList.add('show');
    })
})


function unactive(index) {
    listControl.forEach(function(item , index2) {
        if (index2 !== index) {
            item.classList.remove('active');
            image[index2].classList.remove('show');
        }
    })
}