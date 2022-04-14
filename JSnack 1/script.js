/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore
*/

const primoNumero = prompt ("Inserisci il primo numero")
const secondoNumero = prompt ("Inserisci il secondo numero")

if (primoNumero > secondoNumero){
  document.getElementById("Numeromaggiore").innerHTML = "Il numero maggiore è" + " " + primoNumero;
} else {
  document.getElementById("Numeromaggiore").innerHTML = "Il numero maggiore è" + " " + secondoNumero;
} 