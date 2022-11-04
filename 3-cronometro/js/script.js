/*
Cronometro
Cliccando su un pulsante, viene avviato un cronometro.
Per fermare il cronometro, bisogna cliccare su un secondo pulsante.
*/

const eleCounter = document.querySelector('.counter');
const eleBtnStart = document.querySelector('.btn-start');
const eleBtnStop = document.querySelector('.btn-stop');
const eleBtnReset = document.querySelector('.btn-reset');
let idInterval;
let i = 0;

eleBtnStart.addEventListener('click', function() {
	idInterval = setInterval(() => console.log(i++), 1000);
});

eleBtnReset.addEventListener('click', function() {
	i = 0;
})

eleBtnStop.addEventListener('click', function() {
	clearInterval(idInterval);
})