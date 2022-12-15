// console.log('JS OK');


/*
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5 tramite un form.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/


// Funzione per generare un numero random da 1 a 100
function getRandomNumber (min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min)) + min; 
    return randomNumber;
}


// Funzione per sapere se un numero è pari
function isEven (number) {
    let result = number % 2 === 0 ? true : false;
    return result;
}


// Prendo gli elementi dal DOM
const resultElement = document.getElementById ('result');
const formElement = document.querySelector ('form');
const numberElementEven = document.getElementById ('even'); 
const numberElementOdd = document.getElementById ('odd');
const userNumberElement = document.getElementById ('user');
const cpuNumberElement = document.getElementById ('cpu');
const userNumberChoice = document.getElementById ('number');



// Aggancio l'evento al click del bottone nel form

formElement.addEventListener('submit', function(e){

    e.preventDefault();

    // prendo il valore dell'input
    const userNumber = parseInt(userNumberChoice.value.trim());
    console.log(userNumber);

    let sum = 0;

    // Validazione
    if(isNaN(userNumber) || userNumber < 1 || userNumber > 5){
        alert ('I dati inseriti non sono corretti')

    } else {
        cpuNumber = getRandomNumber(1,5);
        sum = cpuNumber + userNumber;

        const userChoice = numberElementEven.checked ? 'pari' : 'dispari';
        
        let result = `La somma è ${sum}, tu hai scelto ${userChoice}. `;

        if((isEven(sum) && numberElementEven.checked) || (!isEven(sum) && numberElementOdd.checked)) {
            result += ' Complimenti, hai vinto!';
        } else {
            result += ' Mi dispiace, hai perso!';
        }

        userNumberElement.innerText = userNumber;
        cpuNumberElement.innerText = cpuNumber;
        resultElement.innerText = result;
    }
 
    

});

