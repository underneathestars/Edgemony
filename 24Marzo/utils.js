//QUESTA FUNZIONE CREA LA STRUTTURA DI UNA 
//CARD CHE VIENE INSERITA ALL'INTERNO DEL DIV "parteSotto" di index.html

const createCard = (title, desc, imgUrl, year, genres, id) => {
    const divElement = document.createElement("div");
    const h3Element = document.createElement("h3");
    const descElement = document.createElement("p");
    const imgElement = document.createElement("img");
    const yearElement = document.createElement("p");
    const genreElement = document.createElement("p");
    const xElement = document.createElement("p");

    divElement.classList.add("card");
    descElement.classList.add("description");
    yearElement.classList.add("year");
    xElement.setAttribute("id", "x");
    imgElement.setAttribute("src", imgUrl);
    imgElement.setAttribute("alt", "immagine");
    h3Element.textContent = title;
    descElement.textContent = desc;
    yearElement.textContent = year;
    genreElement.textContent = genres;
    xElement.textContent = "x";


    xElement.addEventListener("click", async () => {
        await fetch("https://edgemony-backend.herokuapp.com/movies/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        });
        location.reload();
    });




    divElement.append(xElement, imgElement, h3Element, descElement, yearElement, genreElement);
    document.querySelector("#parteSotto").appendChild(divElement);
};

//CON EXPORT SI ESPORTA LA FUNZIONE E PUO' ESSERE IMPORTATA IN ALTRI FILES JS
export default createCard;