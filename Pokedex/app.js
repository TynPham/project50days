const APIURL = 'https://pokeapi.co/api/v2/pokemon/';
const container = document.querySelector('.container');

getInfo();

async function getInfo() {
    for (let i = 1 ; i <= 150 ; i++) {
        const res = await fetch(APIURL + i);
        const data = await res.json();
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <div class="img">
                <img src="${data.sprites.other.home.front_default}" alt="" class="image">
            </div>
            <small class="number">#${getnumber(i)}</small>
            <h3 class="name">${data.forms[0].name}</h3>
            <span class="type">Type: ${data.types[0].type.name}</span>
        `
        container.appendChild(card);
        console.log(data.sprites.other.home.front_default)
    }
}

function getnumber(i) {
    if (i < 10) {
        return `00${i}`;
    }
    else if (i < 100) {
        return `0${i}`;
    }
    else {
        return i;
    }
}
