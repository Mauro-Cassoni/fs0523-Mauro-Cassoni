"use strict";
class Smartphone {
    constructor(carica = 0, numeroChiamate = 0, costoMinuto = 0.2) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
    }
    ricarica(euro) {
        this.carica += euro;
    }
    numero404() {
        return `Il credito residuo è di ${this.carica.toFixed(2)}€`;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    chiamata(min) {
        this.numeroChiamate += 1;
        this.carica -= (min * this.costoMinuto);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
let EmaSmartphone = new Smartphone();
EmaSmartphone.ricarica(10);
console.log(EmaSmartphone.numero404());
console.log(EmaSmartphone.getNumeroChiamate());
EmaSmartphone.chiamata(5);
EmaSmartphone.chiamata(20);
console.log(EmaSmartphone.getNumeroChiamate());
console.log(EmaSmartphone.numero404());
EmaSmartphone.azzeraChiamate();
console.log(EmaSmartphone.getNumeroChiamate());
let EmiSmartphone = new Smartphone();
EmiSmartphone.ricarica(100);
console.log(EmiSmartphone.numero404());
console.log(EmiSmartphone.getNumeroChiamate());
EmiSmartphone.chiamata(15);
console.log(EmiSmartphone.getNumeroChiamate());
console.log(EmiSmartphone.numero404());
EmiSmartphone.azzeraChiamate();
console.log(EmiSmartphone.getNumeroChiamate());
let MauroSmartphone = new Smartphone();
MauroSmartphone.ricarica(15);
console.log(MauroSmartphone.numero404());
console.log(MauroSmartphone.getNumeroChiamate());
MauroSmartphone.chiamata(5);
MauroSmartphone.chiamata(12);
MauroSmartphone.chiamata(7);
console.log(MauroSmartphone.getNumeroChiamate());
console.log(MauroSmartphone.numero404());
MauroSmartphone.azzeraChiamate();
console.log(MauroSmartphone.getNumeroChiamate());
//# sourceMappingURL=script.js.map