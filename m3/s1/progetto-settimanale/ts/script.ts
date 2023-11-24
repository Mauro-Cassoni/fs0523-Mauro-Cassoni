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
        public costoMinuto: number = 0.2,
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
        this.numeroChiamate++;
        this.carica -= (min * this.costoMinuto);
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

}

function controllaSmartphone(smartphone: Smartphone, ricarica: number, minuti1: number, minuti2: number = 0): void {
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

let emaSmartphone: Smartphone = new Smartphone();
controllaSmartphone(emaSmartphone,10,5,20);


let emiSmartphone: Smartphone = new Smartphone();
controllaSmartphone(emiSmartphone,100,15,3);


let mauroSmartphone: Smartphone = new Smartphone();
controllaSmartphone(mauroSmartphone,15,5,12);



class ExtraSmartphone implements ISim {
    constructor(
        public carica: number = 0,
        public numeroChiamate: number = 0,
        public costoMinuto: number = 0.20,
        public registroChiamate?: { id: number, min: number, dataOra: string, timestamp:number }[],
        private partenzaID: number = 1
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
        const timestamp:number = Date.now();
        const dataEora = new Date(timestamp);
        
        const anno:number = dataEora.getFullYear();
        const mese:number = dataEora.getMonth() + 1;
        const giorno:number = dataEora.getDate();
        const ore:number = dataEora.getHours();
        const minuti:number = dataEora.getMinutes();
        const secondi:number = dataEora.getSeconds();
        
        const dataOra = `Chiamata effettuata alle ore ${ore}:${minuti}:${secondi} del ${giorno}-${mese}-${anno}`;
        
        let id = this.partenzaID++;
        let chiamata = { id, min, dataOra, timestamp}
        if (!this.registroChiamate) {
            this.registroChiamate = [];
        }
        this.registroChiamate.push(chiamata);
        this.numeroChiamate++;
        this.carica -= (min * this.costoMinuto);
    }
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }

    mostraRegistroChiamate() {
        return this.registroChiamate || [];
    }
    filtraChiamatePerDataOra(filtroOra?: number, filtroGiorno?: number, filtroMese?: number, filtroAnno?: number): any[] {
        if (!this.registroChiamate) {
            return [];
        }
    
        return this.registroChiamate.filter(chiamata => {
            const dataEora = new Date(chiamata.timestamp);
            const anno = dataEora.getFullYear();
            const mese = dataEora.getMonth() + 1;
            const giorno = dataEora.getDate();
            const ora = dataEora.getHours();
    
            return (
                (!filtroAnno || anno === filtroAnno) &&
                (!filtroMese || mese === filtroMese) &&
                (!filtroGiorno || giorno === filtroGiorno) &&
                (!filtroOra || ora === filtroOra)
            );
        });
    }

}

let micheleExtraSmartphone: ExtraSmartphone = new ExtraSmartphone();
controllaSmartphone(micheleExtraSmartphone,250,20,35);

console.log(micheleExtraSmartphone.registroChiamate);
console.log(micheleExtraSmartphone.filtraChiamatePerDataOra(16,24,11,2023));


