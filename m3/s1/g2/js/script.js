"use strict";
class Account {
    constructor() {
        this.balance = 0;
        this.balance = 0;
    }
    deposit(n) {
        this.balance += n;
    }
    withDraw(n) {
        this.balance -= n;
    }
}
class MotherAccount extends Account {
    addInterest() {
        this.balance *= 1.1;
    }
}
let motherAccount = new MotherAccount();
motherAccount.deposit(100);
motherAccount.withDraw(60);
motherAccount.addInterest();
console.log(motherAccount.balance);
let sonAccount = new Account();
sonAccount.deposit(300);
sonAccount.withDraw(70);
console.log(sonAccount.balance);
//# sourceMappingURL=script.js.map