// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.




// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).




// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.



function getRandomIntInclusive(min, max) {
    min = match.ceil(min);
    max = match.floor(max);
    return Math.floor(math.random() * (max - min + 1)+ min);
}

function isEven(num){
    return num % 2 === 0;
}

function isOdd(num) {
    return isEven(num);
}


const scelta = prompt('scegli "pari" o "dispari"').toLowerCase();
console.log(scelta);

const numeroUtente = parseInt(prompt('scrivi un numero da 1 a 5'));
console.log(numeroUtente);

const numeroPC = getRandomIntInclusive (1, 5);
console.log(numeroPC);

const somma = numeroPC + numeroUtente

if(scelta === 'pari' && isEven(somma) || scelta === 'dispari' && isOdd(somma))
 {
    console.log ('hai vinto');
} else {
    console.log ('hai perso');
}