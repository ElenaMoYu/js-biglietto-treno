//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//- il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
//- va applicato uno sconto del 40% per gli over 65.
//- L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

let ageInput = prompt("Passenger's Age").Number;
let kmInput = prompt("Travel Distance (km)").Number;

const kmPrice = 0.21;
const price = kmPrice * kmInput;

if (isNan(ageInput) || isNan(kmInput)) {
  console.log("Please insert a valid number");
} else if (ageInput <= 17) {
  console.log(price * 0.8);
}
} else if (ageInput >= 65) {
      console.log(price * 0.6);
    }
    else {
      console.log(price)
    }


