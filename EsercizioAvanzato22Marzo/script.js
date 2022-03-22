// fetch("https://swapi.dev/api/films/1/") // funzione che ritorna una promise
// .then((res) => res.json())
// .then((data) => console.log(data));

function createCard(name) {
    console.log(name);
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    

    h3El.textContent = name;
   

    divEl.append(h3El);
    document.body.appendChild(divEl);
};

const button = document.querySelector("#button");

let dataArray = [];

fetch("https://swapi.dev/api/films/1/") // funzione che ritorna una promise
    .then(res => res.json())
    .then(data => data.characters)
    .then(characters => characters.map(character => fetch(character)
                                                .then(res => res.json())
                                                .then(data => data.name)
                                                .then(name => dataArray.push(name))));

console.log(dataArray);

button.addEventListener("click", () => {
    dataArray.forEach(name => createCard(name));
});
