{
    //

    // Getter & Setter


    class BankAccount {
       readonly id: number;
        name: string;
       protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

       set addBalance(amount: number) {
            this._balance += amount;

        }
       set withdrawBalance(amount: number) {
            if (amount <= this._balance) {
                this._balance -= amount;
            } else {
                console.log('Insufficient balance');
            }
        }
        get balance() {
            return this._balance;
        }

    }

    const myAccount = new BankAccount(1, 'Mahedee', 10000)
    
    myAccount.withdrawBalance = 10001
    const totalBalance = myAccount.balance
    console.log(`Total Balance: ${totalBalance}`);

    //
}