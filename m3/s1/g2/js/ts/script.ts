class Account {

    balance:number=0

    constructor(){
        this.balance = 0;
    }

    deposit(n:number):void{
        this.balance += n;
    }

    withDraw(n:number):void{
        this.balance -= n;
    }

}

class MotherAccount extends Account{
    
    addInterest():void{
        this.balance *= 1.1
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