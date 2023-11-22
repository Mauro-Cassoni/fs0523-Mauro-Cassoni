"use strict";
class Tasse {
    constructor(codred, redditoannuolordo, tasseinps, tasseirpef) {
        this.codred = codred;
        this.redditoannuolordo = redditoannuolordo;
        this.tasseinps = tasseinps;
        this.tasseirpef = tasseirpef;
    }
    getUtileTasse() {
        return this.getTasseIrpef() + this.getTasseInps();
    }
    getTasseInps() {
        return this.redditoannuolordo * (this.tasseinps * 0.01);
    }
    getTasseIrpef() {
        return this.redditoannuolordo * (this.tasseirpef * 0.01);
    }
    getRedditoAnnuoNetto() {
        return this.redditoannuolordo - this.getUtileTasse();
    }
}
class TasseDipendente extends Tasse {
}
let lavoratore = new TasseDipendente(78, 27000, 26, 23);
console.log(lavoratore);
console.log(lavoratore.getRedditoAnnuoNetto());
//# sourceMappingURL=script.js.map