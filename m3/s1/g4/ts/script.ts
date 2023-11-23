class Capo {
    constructor(
        public id: number,
        public codprod: number,
        public collezione: string,
        public capo: string,
        public modello: number,
        public quantita: number,
        public colore: string,
        public prezzoivaesclusa: number,
        public prezzoivainclusa: number,
        public disponibile: string,
        public saldo: number
    ) { }

    getSaldoCapo(): number {
        return this.saldo;
    }

    getAcquistoCapo(): number {
        return this.prezzoivainclusa * (this.saldo * 0.01);
    }
}

let capiAbbigliamento: Capo[] = [];

async function getCapi(): Promise<Capo[]> {
    let res: Response = await fetch('../Abbigliamento.json');
    let data: Capo[] = await res.json();

    data.forEach((capo: Capo) => capiAbbigliamento.push(capo));

    
    return data;
}

getCapi();



