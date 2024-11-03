{
    //
    class BankAccount {
       readonly id: number;
        name: string;
       protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addBalance(amount: number) {
            this._balance += amount;

        }
        withdrawBalance(amount: number) {
            if (amount <= this._balance) {
                this._balance -= amount;
            } else {
                console.log('Insufficient balance');
            }
        }
        getBalance() {
            return this._balance;
        }

    }

    const myAccount = new BankAccount(1, 'Mahedee', 10000)
    
    myAccount.withdrawBalance(10000)
    const totalBalance = myAccount.getBalance()
    console.log(`Total Balance: ${totalBalance}`);

    //
}