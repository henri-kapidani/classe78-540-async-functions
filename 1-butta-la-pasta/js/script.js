/*
Butta la pasta
Il programma chiede all’utente quanti secondi mancano alla cottura della pasta.
Dopo il tempo indicato, appare un alert().
*/

const timeToPasta = parseInt(prompt('quanti secondi al lancio della pasta?'));

setTimeout(() => alert('Butta la pasta'), timeToPasta * 1000);

// setTimeout(function () {
// 	alert('Butta la pasta');
// }, timeToPasta * 1000);

// setTimeout(avvisaButtaPasta, timeToPasta * 1000);
// function avvisaButtaPasta() {
// 	alert('Butta la pasta');
// }