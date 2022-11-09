/*Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/

// creo la variabile per richiamare  il container
const container = document.querySelector(".container");

// creo un ciclo for che stampi in console i numeri da 1 a 100

for (let i =1; i <= 100; i++){

    // creo le variabili per inserire i div nell'html
    const element = document.createElement('div');

    // inserisco al div una classe
    element.classList.add("cube");

    if ( i % 3 == 0 && i % 5 == 0 ) { // se un numero è divisibile sia per 3 che per 5 stampa fizzbuzz

        element.append("fizzbuzz");

        element.classList.add("ms_color_fizz_buzz");

        console.log("fizzbuzz");

    } else if ( i % 3 == 0 ) { // se un numero è divisibile per 3 stampa fizz

        element.append("fizz");

        element.classList.add("ms_color_fizz");

        console.log("fizz");

    } else if ( i % 5 == 0 ) { // se un numero è divisibile per 5 stanpa buzz

        element.append("buzz");

        element.classList.add("ms_color_buzz");

        console.log("buzz");

    } else { // altrimenti se non è divisibile ne per 3 ne per 5 stampa il valore di i

        element.append(i);

        console.log(i);

    }

    container.append(element);

}