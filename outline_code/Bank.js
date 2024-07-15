class BankAccount {
    constructor(owner, balance = 0) {
        if (this.construtor === BankAccount) {
            throw new Error("Cannot instantiate abstract class")
        }
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error(`Deposit amount must be greater than zero!`)
        }
        this.balance += amount
        console.log(`Deposit of $${amount} success. 
            New banlance is$${this.balance}`);
    }
    withdraw(amount) {
        if (amount <= 0) {
            throw new Error('Withdrawal amount must be greater than zero');
        }
        if (amount > this.balance) {
            throw new Error('Insufficient funds');
        }
        this.balance -= amount;
        console.log(`Withdrawal of $${amount} successful. New balance is $${this.balance}`);
    }
    displayBalance() {
        console.log(`Current balance for ${this.owner}: $${this.balance}`);
    }
}
class SavingAccount extends BankAccount{
    constructor(owner,balance = 0){
        super(owner , balance);
        this.interestRate = 0.02;
    }
    addInterest(){
        const interestAmount = this.balance * this.interestRate;
        this.deposit(interestAmount);
        console.log(`Interest of $${interestAmount} added to ${this.owner} account`);
    }
}
const savings = new SavingAccount('Kim Hong kiki' , 1000)
savings.deposit(500);
savings.displayBalance(); // Output: Current balance for Alice: $1500
savings.withdraw(200);
savings.displayBalance(); // Output: Current balance for Alice: $1300
savings.addInterest(); // Example: Interest of $26 added to Alice's account
savings.displayBalance(); // Output: Current balance for Alice: $1326