// Define the BankAccount class
class BankAccount {
    constructor() {
        this.balance = 0; // Initialize balance to 0
        this.transactions = []; // Initialize empty transactions array
    }

    // Deposit method
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            this.transactions.push({ type: "deposit", amount: amount });
            return `Successfully deposited $${amount}. New balance: $${this.balance}`;
        } else {
            return "Deposit amount must be greater than zero.";
        }
    }

    // Withdraw method
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactions.push({ type: "withdraw", amount: amount });
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
        } else {
            return "Insufficient balance or invalid amount.";
        }
    }

    // Check balance method
    checkBalance() {
        return `Current balance: $${this.balance}`;
    }

    // List all deposits
    listAllDeposits() {
        const deposits = this.transactions
            .filter(tx => tx.type === "deposit")
            .map(tx => tx.amount);
        return `Deposits: ${deposits.join(",")}`;
    }

    // List all withdrawals
    listAllWithdrawals() {
        const withdrawals = this.transactions
            .filter(tx => tx.type === "withdraw")
            .map(tx => tx.amount);
        return `Withdrawals: ${withdrawals.join(",")}`;
    }
}

// Create an instance named myAccount
const myAccount = new BankAccount();

// Perform transactions to meet the requirements
myAccount.deposit(150);    // Deposit 1
myAccount.deposit(100);    // Deposit 2
myAccount.withdraw(50);    // Withdraw 1
myAccount.withdraw(30);    // Withdraw 2
myAccount.deposit(50);     // Deposit 3 (extra transaction to have at least 5)

// Testing outputs (optional console logs)
// console.log(myAccount.checkBalance());           // Current balance: $220
// console.log(myAccount.listAllDeposits());       // Deposits: 150,100,50
// console.log(myAccount.listAllWithdrawals());    // Withdrawals: 50,30
