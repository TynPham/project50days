const listImage = document.querySelectorAll('.image-slides');

listImage.forEach(function(image) {
    image.onclick = function() {
        removeActive();
        image.classList.add('active');
    }
})

function removeActive() {
    listImage.forEach(function(image) {
        image.classList.remove('active');
    })
}