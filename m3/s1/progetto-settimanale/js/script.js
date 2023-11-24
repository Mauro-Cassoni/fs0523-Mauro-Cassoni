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
        this.numeroChiamate++;
        this.carica -= (min * this.costoMinuto);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
}
function controllaSmartphone(smartphone, ricarica, minuti1, minuti2 = 0) {
    smartphone.ricarica(ricarica);
    console.log(smartphone.numero404());
    console.log(smartphone.getNumeroChiamate());
    smartphone.chiamata(minuti1);
    smartphone.chiamata(minuti2);
    console.log(smartphone.getNumeroChiamate());
    console.log(smartphone.numero404());
    smartphone.azzeraChiamate();
    console.log(smartphone.getNumeroChiamate());
}
let emaSmartphone = new Smartphone();
controllaSmartphone(emaSmartphone, 10, 5, 20);
let emiSmartphone = new Smartphone();
controllaSmartphone(emiSmartphone, 100, 15, 3);
let mauroSmartphone = new Smartphone();
controllaSmartphone(mauroSmartphone, 15, 5, 12);
class ExtraSmartphone {
    constructor(carica = 0, numeroChiamate = 0, costoMinuto = 0.20, registroChiamate, partenzaID = 1) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoMinuto = costoMinuto;
        this.registroChiamate = registroChiamate;
        this.partenzaID = partenzaID;
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
        const timestamp = Date.now();
        const dataEora = new Date(timestamp);
        const anno = dataEora.getFullYear();
        const mese = dataEora.getMonth() + 1;
        const giorno = dataEora.getDate();
        const ore = dataEora.getHours();
        const minuti = dataEora.getMinutes();
        const secondi = dataEora.getSeconds();
        const dataOra = `Chiamata effettuata alle ore ${ore}:${minuti}:${secondi} del ${giorno}-${mese}-${anno}`;
        let id = this.partenzaID++;
        let chiamata = { id, min, dataOra, timestamp };
        if (!this.registroChiamate) {
            this.registroChiamate = [];
        }
        this.registroChiamate.push(chiamata);
        this.numeroChiamate++;
        this.carica -= (min * this.costoMinuto);
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    mostraRegistroChiamate() {
        return this.registroChiamate || [];
    }
    filtraChiamatePerDataOra(filtroOra, filtroGiorno, filtroMese, filtroAnno) {
        if (!this.registroChiamate) {
            return [];
        }
        return this.registroChiamate.filter(chiamata => {
            const dataEora = new Date(chiamata.timestamp);
            const anno = dataEora.getFullYear();
            const mese = dataEora.getMonth() + 1;
            const giorno = dataEora.getDate();
            const ora = dataEora.getHours();
            return ((!filtroAnno || anno === filtroAnno) &&
                (!filtroMese || mese === filtroMese) &&
                (!filtroGiorno || giorno === filtroGiorno) &&
                (!filtroOra || ora === filtroOra));
        });
    }
}
let micheleExtraSmartphone = new ExtraSmartphone();
controllaSmartphone(micheleExtraSmartphone, 250, 20, 35);
console.log(micheleExtraSmartphone.registroChiamate);
console.log(micheleExtraSmartphone.filtraChiamatePerDataOra(16, 24, 11, 2023));
//# sourceMappingURL=script.js.map