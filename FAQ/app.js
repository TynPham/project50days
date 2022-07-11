const listControl = document.querySelectorAll('button');

listControl.forEach(function(btn) {
    btn.onclick = function() {
        btn.parentElement.classList.toggle('active');
    }
})