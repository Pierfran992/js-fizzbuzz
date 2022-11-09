/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/

// creo un ciclo for che stampi in console i numeri da 1 a 100

for (let i =1; i <= 100; i++){

    if ( i % 3 == 0 && i % 5 == 0 ) { // se un numero è divisibile sia per 3 che per 5 stampa fizzbuzz

        console.log("fizz");

    } else if ( i % 3 == 0 ) { // se un numero è divisibile per 3 stampa fizz

        console.log("buzz");

    } else if ( i % 5 == 0 ) { // se un numero è divisibile per 5 stanpa buzz

        console.log("fizzbuzz");

    } else { // altrimenti se non è divisibile ne per 3 ne per 5 stampa il valore di i

        console.log(i);

    }

}