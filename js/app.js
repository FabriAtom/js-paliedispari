// Chiedere all’utente di inserire una parola
function isPalindrome(parola) {
    parola = parola.toLowerCase()
    const parolaInvertita = invertiParola(parola)

    return parola === parolaInvertita;
}


function invertiParola(testo) {
    const caratteriDiParola = testo.split('')
    console.log(caratteriDiParola)
    const caratteriInvertiti = caratteriDiParola.reverse()
    console.log(caratteriInvertiti)
    const parolaInvertita = caratteriInvertiti.join('')
    console.log(parolaInvertita)

    return parolaInvertita
}

const p = prompt('Inserisci una parola e ti dirò se è palindroma.')
 console.log(isPalindrome(p)); //amoroma