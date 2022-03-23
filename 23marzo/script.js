// Questa funzione crea una card che al suo interno contiene un titolo in h3, un'immagine, una descrizione e un prezzo.

function createCard(title, description, imageURL, price) {
    const divEl = document.createElement("div");
    const h3El = document.createElement("h3");
    const imgEl = document.createElement("img");
    const parEl = document.createElement("p");
    const parPriceEl = document.createElement("p");

    divEl.classList.add("card");
    parEl.classList.add("description");
    parPriceEl.classList.add("price");

    imgEl.setAttribute("src", imageURL);
    h3El.textContent = title;
    parEl.textContent = description;
    parPriceEl.textContent = price;

    divEl.append(h3El, parEl, imgEl, parPriceEl);
    document.querySelector(".cardWrapper").appendChild(divEl);
};



const getAPIdata = async(URL, item = "") => {
    const res = await fetch(`${URL}${item}`);

    return await res.json();
};

//FETCH
getAPIdata("https://fakestoreapi.com/products").then((data) => {
    data.map((product) => {
        createCard(
            product.title,
            product.description,
            product.image,
            product.price + " $"
        );
        const cardEls = document.querySelectorAll(".card");

        cardEls.forEach((card) => {
            card.addEventListener("click", () =>
            (card.innerHTML = "")
            );
    });
});

});



