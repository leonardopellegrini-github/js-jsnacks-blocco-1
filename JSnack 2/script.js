/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const primaParola = prompt("Inserisci la prima parola");
const secondaParola = prompt("Inserisci la seconda parola");

if (primaParola.length > secondaParola.length){
  document.getElementById("Prima").innerHTML = "La lettera più corta è" + " " + secondaParola;
  document.getElementById("Seconda").innerHTML = "La lettera più lunga è" + " " +primaParola;
} else{
  document.getElementById("Prima").innerHTML = "La lettera più corta è" + " " + primaParola;
  document.getElementById("Seconda").innerHTML = "La lettera più lunga è" + " " + secondaParola; 
}