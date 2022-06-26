let myAccount = {
    name: 'mohamed douzi',
    expenses: 0,
    income: 0
}




let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
    console.log(account)
}

// add income 

// resetAccount

// getAccountSummary
// Accoumt for andrew has 900$ in income 100$ in expenses


// add income
// add expense
// add expense
// get accountSummary
// reset account
// get account summary

let editAccount = function (account, incomes, expense) {
    let reset = function (account) {
        account.expense = 0
        account.name = account.name
        account.income = 0

    }
   return {
    addIncome: account.income + incomes,
    addExpense: account.expenses + expense,
    accountSummary: `acount for ${account.name} has ${account.income + incomes}$ and ${account.expenses + expense}$ in expenses`,
    acountReset: reset(account)
   }

} 

let challenge = editAccount(myAccount, 500, 700)

console.log(challenge)
console.log(myAccount)

