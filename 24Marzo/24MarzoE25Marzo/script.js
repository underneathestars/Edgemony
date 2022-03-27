//CON IMPORT IMPORTO LA FUNZIONE CHE DEFINISCE LA STRUTTURA DI UNA CARD DAL FILE utils.js

import createCard from "./utils.js";

//QUESTA FUNZIONE ASINCRONA FA UNA CHIAMATA DI TIPO FETCH E TRASFORMA I DATI RICEVUTI IN JSON.
//ALL'INTERNO DI QUESTA FUNZIONE VIENE DETERMINATO ANCHE IL COMPORTAMENTO DEL BROWSER NEL CASO
//IL FETCH NON VADA A BUON FINE -> COMPARIRÀ' UN MESSAGGIO DI ERRORE

const getMoviesData = async () => {
    const response = await fetch("https://edgemony-backend.herokuapp.com/movies", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
    },
});

if (response.status >= 200 && response.status <= 299) {
    return await response.json();
} else {
    const h1Element = document.createElement("h1");
    h1Element.textContent = "404 pagina non trovata";
    document.body.append(h1Element);

    throw new Error("La pagina non e' stata trovata");
}
};


//ELEMENTI RELATIVI ALLA MODALE
const modalElement = document.querySelector(".modalParteSotto");
const overlayElement = document.querySelector(".modalOverlay");

//ELEMENTI RELATIVI AL FORM
const titleInputElement = document.querySelector("#title");
const descInputElement = document.querySelector("#desc");
const posterInputElement = document.querySelector("#poster");
const yearInputElement = document.querySelector("#year");
const submitInputElement = document.querySelector("#button");
const checkboxInputElements = document.querySelectorAll("#genre");


//CON QUESTA FUNZIONE APPLICO I DATI RICEVUTI DALL'API
//ALLA STRUTTURA DELLA CARD CREATA IN PRECEDENZA
//ASSEGNANDO AD OGNI ELEMENTO IL CORRISPONDENTE ELEMENTO DEL FILE JSON.

getMoviesData()
    .then((resultAPI) => {
        resultAPI.map((movie) => 
        createCard(
            movie.title,
            movie.description,
            movie.poster,
            movie.year,
            movie.genres,
            movie.id
        ));
    })
    .then(() => {
        const cardsEl = document.querySelectorAll(".card");

        cardsEl.forEach((card) => {
            const imgElement = card.querySelector("img");
            const title = card.querySelector("h3");
            const desc = card.querySelector(".description");
            imgElement.addEventListener("click", () => {
                const modalImgElement = modalElement.querySelector("#modalImg");

                modalElement.querySelector("#modalTitle").textContent = title.textContent;
                modalElement.querySelector("#modalDesc").textContent = desc.textContent;
                modalImgElement.src = imgElement.src;
                modalImgElement.alt = imgElement.alt;
                

                modalElement.classList.toggle("showModal");
                overlayElement.classList.toggle("hideOverlay");
            });
        });
    });
        overlayElement.addEventListener("click", () => {
            modalElement.classList.toggle("showModal");
            overlayElement.classList.toggle("hideOverlay");
        });



//CREO UNA FUNZIONE CHE PRENDA TUTTI GLI ELEMENTI SELEZIONATI
//DALLA CHECKBOX E LI INSERISCA IN UN ARRAY CHE VERRA' ASSEGNATO A GENRES.

function getArrayFromCheckboxes() {
    let genresArray = [];
    checkboxInputElements.forEach(element => {
        if(element.checked)
            genresArray.push(element.value);
    });
    return genresArray;
};

//CREO UN EVENTO CHE MI PERMETTE DI AGGIUNGERE NUOVI ELEMENTI ALL'API
//TRAMITE UN FORM CHE PUO' ESSERE COMPILATO DALL'UTENTE

submitInputElement.addEventListener("click", (event) => {
    event.preventDefault();

    const array = getArrayFromCheckboxes();

    fetch("https://edgemony-backend.herokuapp.com/movies/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: titleInputElement.value,
            description: descInputElement.value,
            poster: posterInputElement.value,
            year: yearInputElement.value,
            genres: array
        }),
    }).then(() => {
        location.reload();
    });
});