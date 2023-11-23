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
        return this.saldo * (this.saldo * 0.01);
    }

    getAcquistoCapo(): number {
        return this.prezzoivainclusa - this.getSaldoCapo();
    }
}

let capiAbbigliamento: Capo[] = [];

async function getCapi(): Promise<Capo[]> {
    let res: Response = await fetch('../Abbigliamento.json');
    let data: Capo[] = await res.json();

    data.forEach((c: Capo) => {
        let capo = new Capo(
            c.id,
            c.codprod,
            c.collezione,
            c.capo,
            c.modello,
            c.quantita,
            c.colore,
            c.prezzoivaesclusa,
            c.prezzoivainclusa,
            c.disponibile,
            c.saldo,
        );
    });


    
    return data;
}

getCapi();



