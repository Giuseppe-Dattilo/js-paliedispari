// console.log('JS OK');


/*
Chiedere all’utente di inserire una parola tramite un form
Creare una funzione per capire se la parola inserita è palindroma
*/


// Funzione per verificare se una parola è palindroma
function palindrome (word) {

    let reverseWord ='';

    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    
    if(reverseWord === word){
        return true;
    }

    return false;
}


// Prendo gli elementi dal DOM
const resultElement = document.getElementById ('result');
const formElement = document.querySelector ('form');
const wordElement = document.getElementById ('word');


// Aggancio l'evento al click del bottone nel form

formElement.addEventListener('submit', function(e){

    e.preventDefault();

    // prendo il valore dell'input
    const userWord = wordElement.value.trim();
    console.log(userWord);

    // Validazione
    if(!userWord){
        alert ('I dati inseriti non sono corretti');
        return;
    }

    let isValid = palindrome(userWord);
  
    resultElement.innerText = isValid ? 'la parola inserita è palindroma' : 'la parola inserita non è palindroma';
    resultElement.className = isValid ? 'text-success' : 'text-danger';
    resultElement.value = '';
});

