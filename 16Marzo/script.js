const quotes = [
  "Io sono tuo padre!",
  "guerra nessuno fatto grande",
  "fare o non fare... non c'è provare",
  "L'imperatore non condivide affatto le vostre ottimistiche previsioni!",
  "Sto più in alto di te!",
  ".... (cit. Darth Maul)",
  "Eri come un fratello per me! (pianto)",
];

const list = document.querySelector("#quotes");
const button = document.querySelector("#button");

button.addEventListener("click", () => {
    let random = Math.floor(Math.random() * 7);
    let quote = quotes[random];

    list.innerHTML += "<li>" + quote + "</li>";
})
