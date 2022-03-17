

// Se ho caricato due files JS su una pagina HTML, 
// e ad esempio creo una variabile su uno di questi due files, 
// questa variabile potra' essere usata anche nel secondo file.

// due funzioni di array che useremo tanto sono .map e .filter
// con .map posso modificare gli elementi all'interno di un array senza modificarne la lunghezza
// con .filter invece si modifica la lunghezza, quindi il numero di elementi di un array, ma non posso modificarli
// sia .map sia .filter ritornano sempre un nuovo array, sono metodi di array immutabili perche' in realta'
// non modificano l'array stesso, ma ritornano un secondo array con le modifiche.

//  "stampare" questi in pagina in una lista HTML
// - aggiungere una input di testo e un button sopra la lista, quando clicco il button la lista nella pagina dovrà essere filtrata in base al testo scritto nella input
// - [opzionalmente] stilare il tutto

const movies = [
  "Deadpool",
  "Dune",
  "Grosso guaio a Chinatown",
  "V per vendetta",
  "Pulp Fiction",
  "Signore degli anelli",
  "Scarface",
  "Sharknado (1,2,3,4,5 e 6)",
  "Blade Runner",
];

const movieList = document.querySelector("#movies");
const cheFilmCerchi = document.querySelector("#input");
const inviaButton = document.querySelector("#button");

///questa funzione mappa gli elementi dell'array movies dentro la ul movieList

function addMovie(array) {
    movieList.innerHTML = array.map(i => "<li>" + [i] + "</li>").join('');
};

addMovie(movies);

///questa funzione filtra gli elementi dentro l'array movies in base alla stringa che viene scritta dall'utente nell'input cheFilmCerchi

function filter(array) {
    return array.filter((element) =>
        element.toLowerCase().includes(cheFilmCerchi.value)
    );
}

///questa funzione contiene altre due funzioni all'interno, ovvero addMovie e filter e viene eseguita al click del pulsante button.

inviaButton.addEventListener("click", () => {
    addMovie(filter(movies));
    cheFilmCerchi.value = "";
});