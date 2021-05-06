/* 
Istuzioni:
Il computer deve generare 16 numeri casuali tra 1 e 100.
I numeri non possono essere duplicati.
In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
L’utente non può inserire più volte lo stesso numero.
Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
BONUS: (da fare solo se funziona tutto il resto)
all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
con difficoltà 0 => tra 1 e 100
con difficoltà 1 => tra 1 e 80
con difficoltà 2 => tra 1 e 50
 */

//Seleziona difficoltà
var level;
var maxRange;
var rounds;

while (level !== 0 && level !== 1 && level !==2) {
    level = Number(prompt('Seleziona un livello [0] [1] [2]'))
}

if (level == 0) {
    maxRange = 100;
}else if (level == 1) {
    maxRange = 80;
}else {
    maxRange = 50;
}
//console.log(maxRange);

rounds = maxRange - 16;
//console.log(rounds);

//genero numeri casuali tra 1 e 100
function numberRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min );
}
//console.log(numberRandom(1, 100));

//inserisco 16 numeri in un array, i numeri non devono essere duplicati
var bombe = [];

while (bombe.length < 16) {
    var pcNumber = numberRandom(1, maxRange);
    if (!bombe.includes(pcNumber)) {
        bombe.push(pcNumber);
    }
}
console.log(bombe);

//creo arrey per numeri utente
var validNumbers = [];

//chiedo i numeri all'utente e inserisco nell'arrey
while (validNumbers.length < rounds && !bombe.includes(userNumber)) {
    var userNumber = Number(prompt('Inserisci un numero da 1 a ' + maxRange));
    var score = Number(validNumbers.length);

    if (userNumber < 1 || userNumber > maxRange || isNaN(userNumber)) {
        alert('Numero non valido! 🚫')
    }else if (!validNumbers.includes(userNumber)) {
        //l'utente non può inserire più volte lo stesso numero
        validNumbers.push(userNumber);

        //se numero utente è uguale al numero generato dal pc "bomba" ha perso.
        if (bombe.includes(userNumber)) {
            alert('Hai perso!! 💣   |   punteggio: ' + score);
        }
    } else{
        alert('Numero già inserito... 🤨 Inseirisci un altro numero!')
    }

    //console.log(validNumbers);      
}

//console.log(score);

if (!bombe.includes(userNumber)) {
    alert ('Hai vinto!! 🏆   |   punteggio: ' + (score + 1));
}

