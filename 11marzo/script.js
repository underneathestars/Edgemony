// Es. 1: Dato il seguente 'snippet' (piccolo programmino), qual è il risultato dei console.log? 
// RISPOSTA: 3.14, 3.14 poiché il valore di PI è sempre maggiore di 3.

const PI = 3.14;

console.log(PI);

if (PI >= 3) { console.log(PI); }

// Es. 2: Dato il seguente, qual è il risultato dei console.log? 
// RISPOSTA: "Il mio colore preferito e' violet", "Ci sono 12 mesi in un anno".

var favColour = "violet"; 

let monthsInAYear = 12;

if (true) { 
    var favColour = "violet"; 
    console.log("Il mio colore preferito è:", favColour); 
}

console.log("Ci sono", monthsInAYear, "mesi in un anno.");

// Es. 3: Dato il seguente, qual è il risultato dei console.log?
// RISPOSTA: la funzione da' errore perché' si chiama all'infinito da sola.

function makePizza(moreIngredients) { 
    let theSecond = "Sugo di pomodoro freschissimo"; 
    // { ... } console.log(theSecond + ", " + moreIngredients); return true; 
    // non fa niente in pratica! Ritorna solo true (ne riparleremo a lezione!) }

    if (true) { 
        makePizza("rucola, prosciutto crudo e scaglie di grana.");
        console.log("Il secondo ingrediente necessario: ", theSecond); 
    }
}

