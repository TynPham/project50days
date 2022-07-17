const good = document.querySelector('#good');
const cheap = document.querySelector('#cheap');
const fast = document.querySelector('#fast');
const listcontrol = document.querySelectorAll('input');

listcontrol.forEach(function(items) {
    items.addEventListener('change' , function(e) {
        if (good.checked && cheap.checked && fast.checked) {
            if (good === e.target) {
                fast.checked = false;
            }
            if (cheap === e.target) {
                good.checked = false;
            }
            if (fast === e.target) {
                cheap.checked = false;
            }
        }
    })
})
