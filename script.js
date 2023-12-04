let cityName = [];
let population = [];
let website = [];

async function init () {
    await loadCity();
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