// Esercizi aggiuntivi

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray", che riceve come parametro un array di numeri random (creati con giveMeRandom)
 e stampa in console, per ogni oggetto, true/false a seconda che il numero sia più grande di 5 o no.
 La funzione deve infine tornare la somma di solamente i numeri che sono risultati maggiori di 5.
*/

console.log("EXTRA 1");

function giveMeRandom(n) {
    let arr = [];
  
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 11)); // Genera valore casuale tra 1 e 10 (compresi)
    }
  
    return arr;
}

let randomArr = [] = giveMeRandom(5);
console.log(randomArr);

function checkArray(randomArr) {
    let booleanArr = [];

    for (let i = 0; i < randomArr.length; i++) {
        randomArr[i] > 5 ? booleanArr.push(true) : booleanArr.push(false);
    }

    return booleanArr;
}

console.log(checkArray(randomArr));

/* EXTRA 2
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio.
*/

console.log("EXTRA 2");

let shoppingCart = [
    {
        id: '005',
        title: 'iPhone',
        price: 799.90,
        quantity: 1
    },
    {
        id: '006',
        title: 'iPhone Cover Blue',
        price: 19.90,
        quantity: 1
    },
    {
        id: '015',
        title: 'iPhone sticker',
        price: 1.20,
        quantity: 3
    }
];

function shoppingCartTotal() {
    let totalCost = 0;

    for (let i = 0; i < shoppingCart.length; i++) {
        totalCost += (shoppingCart[i].price * shoppingCart[i].quantity);
    }

    return totalCost;
}

console.log("Il costo totale è " + shoppingCartTotal() + " EUR");


/* EXTRA 3
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto, lo aggiunge allo shoppingCart e ritorna il numero totale degli oggetti in esso contenuti.
*/

console.log("EXTRA 3");

function addToShoppingCart(newProd) {
    shoppingCart.push(newProd);

    return shoppingCart.length;
}

addToShoppingCart(
    {
        id: '018',
        title: 'iPad',
        price: 649.90,
        quantity: 1
    }
);

console.log("Prodotto aggiunto al carrello, ora ci sono " + shoppingCart.length + " prodotti!");


/* EXTRA 4
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array shoppingCart e ritorna l'oggetto più costoso in esso contenuto.
*/

console.log("EXTRA 4");

function maxShoppingCart() {
    let max = {price: 0};

    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].price > max.price) {
            max = shoppingCart[i];
        }
    }
    
    return max;
}

console.log(maxShoppingCart());

/* EXTRA 5
 Nel tuo sito e-commerce hai un array di oggetti chiamato shoppingCart. Ognuno di questi oggetti ha un prezzo, un nome, un id e la quantità da spedire.
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array shoppingCart e ritorna l'ultimo oggetto in esso contenuto.
*/

console.log("EXTRA 5");

function latestShoppingCart() {
    return shoppingCart[shoppingCart.length - 1];
}

console.log(latestShoppingCart());

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve come parametro un intero "x" compreso tra 0 e 9.
 La funzione mostra in console un numero casuale tra 0 e 9 finchè il numero estratto è maggiore di x per 3 volte di fila.
*/

console.log("EXTRA 6");

function loopUntil(random) {
    
    let count = 1;
    
    while (true) {
        // console.log("Tentativo n. " + count);
        
        let num1 = Math.floor(Math.random() * 10);
        //console.log("num1: " + num1);
        
        let num2 = Math.floor(Math.random() * 10);
        // console.log("num2: " + num2);
        
        let num3 = Math.floor(Math.random() * 10);
        // console.log("num3: " + num3);
        
        if ((random <= num1) && (random <= num2) && (random <= num3)) { //il ciclo termina SOLO quando i 3 valori random sono pari o superiori al valore random generato
            break;
        }
        
        count++;
    }
    
    return count;
}

let randomInt = Math.floor(Math.random() * 10);
// console.log("Il numero generato é " + randomInt);

console.log('Il numero di tentativi é ' + loopUntil(randomInt));


/* EXTRA 7
 Crea una funzione chiamata "average" che riceve un array come parametro e ritorna la media aritmetica dei numeri in esso contenuti.
 La funzione salta automaticamente qualsiasi valore non numerico all'interno dell'array.
*/

console.log("EXTRA 7");

function average(arr) {
    let sum = 0;
    let countNum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== 'number') { //se non é un numero, salta ciclo
            continue;
        }
        
        sum += arr[i];    
        countNum++;
    }

    let media = sum / countNum;

    console.log('Totale numeri: ' + countNum);
    
    return media;
}

let array = [20, 60, "", 'number', 'Alessio', null];

console.log('La media aritmetica é ' + average(array)); // Output: 40

/* EXTRA 8
 Scrivi una funzione chiamata "longest" che ricerca la stringa più lunga all'interno del parametro ricevuto (un array di stringhe).
*/

console.log('EXTRA 8');

function longest(arrStr) {
    let longestStr = "";

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i].length > longestStr.length) {
            longestStr = arrStr[i];
        }        
    }

    return longestStr;
}

const arraySample = [
    'Spider-man',
    'Superman',
    'Batman',
    'Joker & Harley Quinn'
]
console.log(longest(arraySample)); // Output: Joker & Harley Quinn

/* EXTRA 9
 Scrivi una funzione per creare un filtro anti spam molto semplice per una casella email. La funzione riceve una stringa come parametro, "emailContent", e ritorna un boolean.
 La funzione deve tornare true se emailContent NON contiene le parole "SPAM" o "SCAM".
*/

console.log('EXTRA 9');

function isNotSpam(emailContent) {
    if (
        (!emailContent.includes('SPAM'))
        &&
        (!emailContent.includes('SCAM'))
        ) {
        // se non contiene SPAM o SCAM, la funzione é vera che isNotSpam
        return true;
    } else {
        return false;
    }
}

const emailContent = 'Questa email contiene SCAM';

console.log("L'email é sicura?");
console.log(isNotSpam(emailContent)); // Output: false

/* EXTRA 10
 Scrivi una funzione che riceve come parametro una data e ritorna il numero di giorni passati ad oggi.
*/

console.log('EXTRA 10');

function passedDays(date) {
    // Converti la data in timestamp
    const dataTimestamp = new Date(date).getTime();
  
    // Calcola la differenza in millisecondi tra la data passta e oggi
    const diff = Date.now() - dataTimestamp;
  
    // Converte la differenza da millisecondi in giorni
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
    return days;
  }

console.log(passedDays('04/03/2023')); // mm/dd/yyyy

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due interi, "x" e "y".
 La funzione deve tornare una matrice di x volte y, e ogni valore deve rappresentare l'indice dell'elemento.

 Es.: x = 3, y = 2
[
  ["00", "01", "02"],
  ["10", "11", "12"]
]
*/

console.log('EXTRA 11');

function matrixGenerator(x, y) {
    let matrix = [];
    for (let i = 0; i < y; i++) {
      let row = [];
      for (let j = 0; j < x; j++) {
        row.push(i.toString() + j.toString());
      }
      matrix.push(row);
    }
    return matrix;
}

console.log(matrixGenerator(3, 2));