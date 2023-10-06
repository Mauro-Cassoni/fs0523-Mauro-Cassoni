/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

function area(l1,l2){
    let risultato = l1 * l2;
    return risultato;
}
console.log(area(5,5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1,n2){
    if (n1 == n2) {
        return ((n1 + n2) *3)
    } else if (n1 != n2){
        return (n1 + n2)
    } else {
        return ('Error')
    }
}

console.log(crazySum (5, 5));
console.log(crazySum (2, 3));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n){
    if (n > 19){
        return Math.abs((n - 19)*3);
    } else{
        return (Math.abs(n - 19));
    }
}

console.log(crazyDiff(18));
console.log(crazyDiff(29));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n){
    if(n >= 20 && n <= 100){
        return true 
    } else if (n == 400){
        return true 
    } else {
        return false
    }
}

console.log(boundary(50));
console.log(boundary(400));
console.log(boundary(110));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(a){
    let y = a.split(" ");
    if (y[0] == 'EPICODE'){
        return (y.toString())
    } else{
        return ('EPICODE' + y.toString())
    }

}

console.log(epify('prova'));
console.log(epify('EPICODE prova'));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(x){
    let y = Math.abs(x)
    if (y % 3) {
        return 'é multiplo di 3'
    } else if (y % 7){
        return 'é multiplo di 7'
    } else {
        return y
    }
}

console.log(check3and7(14));
console.log(check3and7(5));
console.log(check3and7(-4));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(x){
    let y = x.split("");
    y.reverse();
    y.toString();
    return y
}
console.log(reverseString('ciao'));
console.log(reverseString('ciao sono Mauro'));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

function upperFirst(x){
    let y = x.split(" ");
    for (let i = 0; i < y.lenght; i++){

    }
    return y 
}

console.log(upperFirst('ciao sono mauro'));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(x){
    let y = x.split("");
    y.splice(0,1);
    y.splice(y.lenght,1)
    return y

}

console.log(cutString('Ciao'));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
