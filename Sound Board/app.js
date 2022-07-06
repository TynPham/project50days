const listAudio = document.querySelectorAll('audio');
const buttons = document.querySelector('#buttons');

const ArrayAudio = [];
listAudio.forEach(function(audio) {
    ArrayAudio.push(`${audio.id}`);
})
console.log(ArrayAudio);

ArrayAudio.forEach(function(audio) {
    let button = document.createElement('button');
    button.classList.add('btn');
    button.innerText = audio;
    buttons.appendChild(button);
    button.onclick = function() {
        stopAudio();
        document.querySelector(`#${audio}`).play();
    }
})
function stopAudio() {
    listAudio.forEach(function(audio) {
        audio.pause();
        audio.currentTime = 0;
    })
}