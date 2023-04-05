/*
?Es. 1
Scrivere una funzione che estragga casualmente il nome di uno studente di una classe (usa un array). Gli studenti già interrogati non possono però essere estratti nuovamente.
*/

console.log('ESERCIZIO 1');

const students = [
    {
        name: 'Mario',
        lastname: 'Rossi',
        isQuestioned: false,
    },
    {
        name: 'Roberto',
        lastname: 'Proietti',
        isQuestioned: true,
    },
    {
        name: 'Alessio',
        lastname: 'De Amicis',
        isQuestioned: false,
    },
    {
        name: 'Mattia',
        lastname: 'Napolitano',
        isQuestioned: false,
    },
    {
        name: 'Luigi',
        lastname: 'Ferrero',
        isQuestioned: true,
    },
    {
        name: 'Riccardo',
        lastname: 'Barbero',
        isQuestioned: true,
    },
    {
        name: 'Matteo',
        lastname: 'Russo',
        isQuestioned: false,
    },
]

// INIZIO FUNZIONE
function randomStudent() {
    do {
        let i = Math.floor(Math.random() * students.length);

        if (students[i].isQuestioned === false) {
            return students[i];
        }

    } while (true);
}

console.log(randomStudent());

/*
? Es.2
Scrivere un programma che conti quante volte è presente la ‘a’ (minuscola) in una frase fornita in input. Fornire il risultato in console.
*/

console.log('ESERCIZIO 2');

function aCounter(string) {
    let count = 0;

    for (let i = 0; i < string.length; i++) {
        string[i] === 'a' ? count++ : null;   
    }

    return count;
}

let sentence = 'Javascript è un linguaggio di programmazione avanzato';

console.log(aCounter(sentence)); // Output: 8
