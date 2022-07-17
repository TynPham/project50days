const ApiURL = 'https://randomuser.me/api?results=50';
const users = document.querySelector('.list_users');
const find = document.querySelector('input');
const listItems = [];
getdata();

async function getdata() {
    const res = await fetch(ApiURL);
    const listdatas = await res.json();
    const datas = listdatas.results;
    datas.forEach(function(data) {
        let user = document.createElement('li');
        user.classList.add('user');
        listItems.push(user);
        user.innerHTML = `
            <img src="${data.picture.large}" alt="image">
            <div class="content">
                <h4 class="name">${data.name.first} ${data.name.last}</h4>
                <span class="info">${data.location.city}, ${data.location.country}</span>
            </div>
        `
        users.appendChild(user);
    })
}

find.addEventListener('input' , function(e) {
    listItems.forEach(function(item) {
        if (item.innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            item.classList.remove('hide');
        }
        else {
            item.classList.add('hide');
        }
    })
})

