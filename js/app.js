// Chiedere all’utente di inserire una parola

function isPalindrome(parola) {
    parola = parola.toLoweCase()
    return parola === invertiParola(parola);
}

function invertiParola(testo) {
    return testo.split('').reverse().join('');
}

const parola = prompt('inserisci una parola e ti dirò se è palindorma');

console.log(isPalindrome(parola));
