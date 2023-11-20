"use strict";
function player1VSplayer2(a, b) {
    let numeroCasuale = Math.floor(Math.random() * 100) + 1;
    let diffA = a - numeroCasuale;
    let diffB = b - numeroCasuale;
    if (a < 0 || a > 100 || b < 0 || b > 100) {
        return 'Inserisci in entrambi campi, un valore compreso tra 1 e 100';
    }
    console.log(`A ` + a);
    console.log(`B ` + b);
    console.log(`Numero casuale ` + numeroCasuale);
    if (a == b && a == numeroCasuale) {
        return `Giocatelo al Superenalotto`;
    }
    if (a == numeroCasuale) {
        return `Il giocatore A ha vinto!`;
    }
    if (b == numeroCasuale) {
        return `Il giocatore B ha vinto!`;
    }
    if (diffA < diffB) {
        return `Il giocatore A ci è andato più vicono.`;
    }
    if (diffB < diffA) {
        return `Il giocatore B ci è andato più vicono.`;
    }
    if (a == b) {
        return `Ci avete provato.`;
    }
    if (diffA == diffB) {
        return `Nonostante i numeri siano diversi, ci siete andati vicini allo stesso modo.`;
    }
}
console.log(player1VSplayer2(-15, 30));
console.log(player1VSplayer2(15, 30));
console.log(player1VSplayer2(30, 30));
console.log(player1VSplayer2(30, 15));
