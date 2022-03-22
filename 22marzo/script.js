
const button = document.querySelector("#button");
const firstNum = parseInt(prompt("Inserisci il primo numero"));
const secondNum = parseInt(prompt("Inserisci il secondo numero"))


// creo la funzione che mi ritorna il risultato dei due nomi presi dal prompt
const sum = () => console.log(firstNum + secondNum);
//faccio in modo che la funzione sum si attivi ogni 10 secondi all'infinito
const sumInterval = setInterval(sum, 10000);

console.log(sumInterval);

// al click sul bottone invoco clearInterval che stoppa la funzione sum.
button.addEventListener("click", () => {
       clearInterval(sumInterval) 
    }
);
