function processTransactions(transactions, amount) {
    let log = [];
    let wallet = amount;
    let successful = 0;
    let failed = 0;

    for (let i = 0; i < transactions.length; i++) {
        if (transactions[i].type == "deposit") {
            wallet += transactions[i].amount;
            successful++;
            log.push(`Deposit: +${transactions[i].amount}`);
        } else if (transactions[i].type == "withdraw") {
            wallet -= transactions[i].amount;
            successful++;
            log.push(`Withdraw: -${transactions[i].amount}`);
        } else {
            failed++;
            log.push(`Transfer failed: insufficient funds`);
        }
    }

    return {
        finalBalance: wallet,
        successful,
        failed,
        log
    }
}

// Tulis function processTransactions di sini

let transactions = [
    { type: "deposit", amount: 1000 },
    { type: "withdraw", amount: 500 },
    { type: "transfer", amount: 2000 }
];
let result = processTransactions(transactions, 800);
console.log(result);