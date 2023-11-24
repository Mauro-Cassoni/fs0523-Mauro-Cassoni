interface ISim {

    carica: number;
    numeroChiamate: number;
    costoMinuto: number;

    ricarica(euro: number): void;
    numero404(): string;
    getNumeroChiamate(): number;
    chiamata(min: number): void;
    azzeraChiamate(): void;

}

class Smartphone implements ISim {

    constructor(
        public carica: number = 0,
        public numeroChiamate: number = 0,
        public costoMinuto: number = 0.2
    ) { }

    ricarica(euro: number): void {
        this.carica += euro;
    }
    numero404(): string {
        return `Il credito residuo è di ${this.carica.toFixed(2)}€`;
    }
    getNumeroChiamate(): number {
        return this.numeroChiamate;
    }
    chiamata(min: number): void {
        this.numeroChiamate += 1;
        this.carica -= (min * this.costoMinuto);
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}

let EmaSmartphone = new Smartphone()

EmaSmartphone.ricarica(10);
console.log(EmaSmartphone.numero404());
console.log(EmaSmartphone.getNumeroChiamate());
EmaSmartphone.chiamata(5);
EmaSmartphone.chiamata(20);
console.log(EmaSmartphone.getNumeroChiamate());
console.log(EmaSmartphone.numero404());
EmaSmartphone.azzeraChiamate()
console.log(EmaSmartphone.getNumeroChiamate());


let EmiSmartphone = new Smartphone()

EmiSmartphone.ricarica(100);
console.log(EmiSmartphone.numero404());
console.log(EmiSmartphone.getNumeroChiamate());
EmiSmartphone.chiamata(15);
console.log(EmiSmartphone.getNumeroChiamate());
console.log(EmiSmartphone.numero404());
EmiSmartphone.azzeraChiamate()
console.log(EmiSmartphone.getNumeroChiamate());


let MauroSmartphone = new Smartphone()

MauroSmartphone.ricarica(15);
console.log(MauroSmartphone.numero404());
console.log(MauroSmartphone.getNumeroChiamate());
MauroSmartphone.chiamata(5);
MauroSmartphone.chiamata(12);
MauroSmartphone.chiamata(7);
console.log(MauroSmartphone.getNumeroChiamate());
console.log(MauroSmartphone.numero404());
MauroSmartphone.azzeraChiamate()
console.log(MauroSmartphone.getNumeroChiamate());


