/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/*ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
console.log("ESERCIZIO 1");

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(2, 3)); // Output: 6

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

console.log("ESERCIZIO 2");

function crazySum(num1, num2) {
    if (num1 === num2) {
      return (num1 + num2) * 3;
    } else {
      return num1 + num2;
    }
}

console.log(crazySum(5, 5)); // Output: 30

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

console.log("ESERCIZIO 3");

function crazyDiff(num) {
    let diff = num - 19;
    if (diff < 0) {
      diff = diff * -1;
    }
    if (diff > 19) {
      diff = diff * 3;
    }
    return diff;
}

console.log(crazyDiff(21)); // Output: 2

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

console.log("ESERCIZIO 4");

function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
      return true;
    } else {
      return false;
    }
}

console.log(boundary(15)); // Output: false

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

console.log("ESERCIZIO 5");

function codify(str) {
    if (str.slice(0, 4) === "code") {
      return str;
    } else {
      return "code" + str;
    }
}

console.log(codify("javascript"));

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

console.log("ESERCIZIO 6");

function check3and7(num) {
    if (num <= 0) {
        return 'Valore non valido';
    }

    if (num % 3 === 0 || num % 7 === 0) {
      return true;
    } else {
      return false;
    }
}

console.log(check3and7(27));

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

console.log("ESERCIZIO 7");

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
}

console.log(reverseString("EPICODE")); // Output: "EDOCIPE"
console.log(reverseString("Javascript")); // Output: "tpircSavaJ"

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

console.log("ESERCIZIO 8");

function upperFirst(str) {
    let words = str.split(" "); // Dividiamo la stringa in parole, come elementi di un array
    for (let i = 0; i < words.length; i++) {
      let firstLetter = words[i][0].toUpperCase(); // Impostiamo la prima lettera della parola come MAIUSCOLA
      words[i] = firstLetter + words[i].substring(1); // Aggiungiamo il resto della parola come minuscola, dalla seconda lettera in poi
    }
    let capitalized = words.join(" "); // Uniamo tutte le parole trasformate
    return capitalized;
}

console.log(upperFirst("javascript è un linguaggio di programmazione molto popolare")); // Output: "Javascript È Un Linguaggio Di Programmazione Molto Popolare"


/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

console.log("ESERCIZIO 9");

function cutString(str) {
  let newStr = "";

  for (let i = 0; i < str.length; i++) {
    if (i === 0 || i === str.length - 1) {continue;}
    newStr += str[i];
  }

  return newStr;
}

console.log(cutString('Javascript')); // Output: avascrip

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

console.log("ESERCIZIO 10");

function giveMeRandom(n) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 11)); // Genera valore casuale tra 1 e 10 (compresi)
  }

  return arr;
}

console.log(giveMeRandom(5));
