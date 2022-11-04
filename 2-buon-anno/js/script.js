/*
Buon anno!
Simulare un countdown di 10 secondi che alla fine dice "Buon anno!"
*/

let counter = 10;

const idInterval = setInterval(count, 1000);
function count() {
	if (counter === 0) {
		console.log('Buon anno!');
		clearInterval(idInterval);
	} else {
		console.log(counter);
		counter--;
	}
}

// const idInterval = setInterval(() => {
// 	if (counter === 0) {
// 		console.log('Buon anno!');
// 		clearInterval(idInterval);
// 	} else {
// 		console.log(counter);
// 		counter--;
// 	}
// }, 1000);

// const idInterval = setInterval(function () {
// 	if (counter === 0) {
// 		console.log('Buon anno!');
// 		clearInterval(idInterval);
// 	} else {
// 		console.log(counter);
// 		counter--;
// 	}
// }, 1000);
