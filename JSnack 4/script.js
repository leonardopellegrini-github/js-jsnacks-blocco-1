/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const database = ['gianni', 'pinotto', 'angelo', 'fabrizio', 'nicolo', 'margherita',]

let corretto = false;
const nome = prompt ("Come ti chiami?");

corretto = database.includes(nome);

if (corretto){
  document.getElementById("stampa").innerHTML = "Sei in lista";
} else {
    document.getElementById("stampa").innerHTML = "Sei fuori";
}