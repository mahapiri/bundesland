let cityName = [];
let population = [];
let website = [];

async function init () {
    await loadCity();
    loadCard();
}


async function loadCity() {
    let file = 'bundesland.json';
    let response = await fetch(file);
    let responseAsJson = await response.json();
    for (let i = 0; i < file.length; i++) {
        const currentCity = responseAsJson[i];
        cityName.push(currentCity['name']);
        population.push(currentCity['population']);
        website.push(currentCity['url']);
    }
}

function loadCard() {
    let content = document.getElementById('content');
    
    for (let i = 0; i < cityName.length; i++) {
        content.innerHTML += /*html*/`
            <tr class="card" id="card${i}" onmouseover="showLink(${i})">
                <td class="card-info">
                    <h4>${cityName[i]}</h4>
                    <p>${population[i]} Millionen</p>
                    <div class="link d-none" id="link${i}">
                        <p>Link: <span onclick="window.open('${website[i]}', '_blank')">${website[i]}</span></p>
                    </div> 
                </td>
            </tr>
            
    `;

    
    }    
}

function showLink(i) {
    let link = document.getElementById(`link${i}`);
    link.classList.remove('d-none');   
}

function clear(i) {
    let link = document.getElementById(`link${i}`);
    link.classList.add('d-none');
}

function timeOut(i) {
    setTimeout(showLink(i), 1000);
}