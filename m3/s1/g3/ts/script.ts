abstract class Tasse{

    constructor(
        public codred:number,
        public redditoannuolordo:number,
        public tasseinps:number,
        public tasseirpef:number
    ){}

    getUtileTasse():number{
        return this.getTasseIrpef() + this.getTasseInps();
    }

    getTasseInps():number{
        return this.redditoannuolordo * (this.tasseinps * 0.01);
    }

    getTasseIrpef():number {
        return this.redditoannuolordo * (this.tasseirpef * 0.01);
    }

    getRedditoAnnuoNetto():number{
        return this.redditoannuolordo - this.getUtileTasse();
    }
}


class TasseDipendente extends Tasse{}

let lavoratore: TasseDipendente = new TasseDipendente(78,27000,26,23)
console.log(lavoratore);
console.log('Il reddito annuo netto del lavoratore è di',lavoratore.getRedditoAnnuoNetto());

