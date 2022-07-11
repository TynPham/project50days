const toggle = document.querySelector('.toggle');

const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const time = document.querySelector('.time');
const dates = document.querySelector('.date');

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



function setTimes() {
    const times = new Date();
    const hours = times.getHours();
    const minutes = times.getMinutes();
    const seconds = times.getSeconds();
    const day = times.getDay();
    const date = times.getDate();
    const month = times.getMonth();
    
    time.innerText = `${hours > 12 ?hours % 12 : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${hours >= 12 ? "PM" : "AM" }`;
    dates.innerHTML = `${days[day]},${months[month]} <span class="circle">${date}</span>`;

    const hourClock = hours > 12 ?hours % 12 : hours;
    
    hour.style.transform = `translate(-50% , -100%) rotate(${scale(hourClock , 0 , 12 , 0 , 360)}deg)`
    minute.style.transform = `translate(-50% , -100%) rotate(${scale(minutes , 0 , 60 , 0 , 360)}deg)`
    second.style.transform = `translate(-50% , -100%) rotate(${scale(seconds , 0 , 60 , 0 , 360)}deg)`
}

toggle.onclick = function(e) {
    const html = document.querySelector('html');
    if (html.classList.contains('dark')) {
        e.target.innerText = 'Dark mode';
    }
    else {
        e.target.innerText = 'Light mode';
    }
    html.classList.toggle('dark');
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTimes();


setInterval(setTimes , 1000);