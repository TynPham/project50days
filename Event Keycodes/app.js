const container = document.querySelector('.container');

window.addEventListener('keydown' , function(e) {
    container.innerHTML = `
    <button class="btn key">
    ${e.keyCode === 32 ? 'Space' : e.key}
        <small>event.key</small>
    </button>
    <button class="btn keycode">${e.keyCode}
        <small>event.keyCode</small>
    </button>
    <button class="btn which">${e.which}
        <small>event.Which</small>
    </button>
    <button class="btn code">${e.code}
        <small>event.code</small>
    </button>
`
})