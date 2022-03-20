const people = [
  "Luke Skywalker - Star Wars",
  "Jack Burton - Grosso guaio a Chinatown",
  "Jhonny Silverhad - Cyberpunk 2077",
  "Bilbo Baggins - Il signore degli anelli",
  "Rick Sanchez - Rick & Morty",
  "Master Chief - Halo",
  "Eleven - Stranger Things",
];

const nome = document.querySelector("#nome");
const universe = document.querySelector("#universe");
const button = document.querySelector("#button");
const search = document.querySelector("#search");
const listaPersonaggi = document.querySelector("#listaPersonaggi");

function addPg(people) {
    listaPersonaggi.innerHTML = people.map(i => cards(i)).join('');
};

addPg(people);

function filter(people) {
    return people.filter((element) =>
        element.toLowerCase().includes(search.value)
    );
}

search.addEventListener("keyup", () => {
    addPg(filter(people));
});

button.addEventListener("click", () => {
    people.push(nome.value + ' - ' + universe.value);
    addPg(people);
    nome.value='';
    universe.value='';
});

function cards(i) {
    let array = i.split("-");
    let nome = array[0];
    let universe = array[1];

    let card = '<li><div class="card">' +
    '<div class="container">' +
    '<h4><b>' + nome + '</b></h4>' +
    '<p>' + universe + '</p>' +
    '</div>'
    '</div></li>';

    return card;
}