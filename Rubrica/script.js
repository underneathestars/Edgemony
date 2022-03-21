//lista contatti di default
const names = [
    "Jane Shepard - 555555555",
    "Tali Zorah - 444444444",
    "Garrus Vakarian - 333333333",
    "Thane Krios - 222222222",
    "Liara Tsoni - 111111111",
];

localStorage.setItem("names", JSON.stringify({ names }))


const people = document.querySelector("#people"); //lista ul con contatti
const inputNome = document.querySelector("#inputNome"); //input col nome da inserire
const inputNumero = document.querySelector("#inputNumero"); //input col numero da inserire
const button = document.querySelector("#button") //bottone che aggiunge un nuovo contatto

function createList(names) {
    people.innerHTML = names.map(i => "<li>" + [i] + "</li>").join('');
};

createList(names);

const liNames = document.querySelectorAll("li");

liNames.forEach((liName) => {
    liName.addEventListener("click", () => {
        liName.textContent = "";
    });
});

button.addEventListener("click", () => {
    names.push(inputNome.value + " - " + inputNumero.value)
    createList(names);
    const liNames = document.querySelectorAll("li");
    liNames.forEach((liName) => {
        liName.addEventListener("click", () => {
            liName.textContent = "";
        });
});
    inputNome.value = '';
    inputNumero.value = '';
});



