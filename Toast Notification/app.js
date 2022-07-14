const toasts = document.querySelector('.toasts');
// const listBtn = document.querySelectorAll('button');
const successbtn = document.querySelector('.success');
const warningbtn = document.querySelector('.warning');
const errorbtn = document.querySelector('.error');

// listBtn.forEach(function(btn) {
//     btn.onclick = function() {
//         showToast(btn.name);
//     }
// })

const toastArray = {
    success: {
        icons: '<i class="fa-solid fa-circle-check"></i>',
        message: 'This is a success message !'
    },
    warning: {
        icons: '<i class="fa-solid fa-circle-exclamation"></i>',
        message: 'This is a warning message !'
    },
    error: {
        icons: '<i class="fa-solid fa-triangle-exclamation"></i>',
        message: 'This is a error message !'
    }
}


successbtn.addEventListener('click' , function() {
    showToast(successbtn.name);
});
warningbtn.addEventListener('click' , function() {
    showToast(warningbtn.name);
});
errorbtn.addEventListener('click' , function() {
    showToast(errorbtn.name);
});


function showToast(toast) {
    let toatsEl = document.createElement('div');
    toatsEl.className = `toast toast-${toast}`;
    toatsEl.innerHTML = `
            <span class="lineLeft line${toast}"></span>
            ${toastArray[toast].icons}
            <span class="message">${toastArray[toast].message}</span>
            <span class="lineBottom line${toast}"></span>
    `

    toasts.appendChild(toatsEl);

    setTimeout(function() {
        toatsEl.style.animation = 'hide-show 1s ease forwards';
    },2000)
    setTimeout(function() {
        toatsEl.remove();
    },3000)
}