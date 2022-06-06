/**
 * @file Цепочка обязанностей
 * Создан Bender 26.05.2022
 */

class Account {
    constructor(name, balance) {
        this.name = name
        this.balance = balance
    }

    setNext(account) {
        this.successor = account
    }

    pay(amountToPay) {
        if (this.canPay(amountToPay)) {
            console.log(`Paid ${amountToPay} using ${this.name}`)
        } else if (this.successor) {
            console.log(`Cannot pay using ${this.name}. Proceeding...`)
            this.successor.pay(amountToPay)
        } else {
            console.log('None of the accounts have enough balance')
        }
    }

    canPay(amount) {
        return this.balance >= amount
    }
}


const bank = new Account('bank', 100)
const paypal = new Account('paypal', 200)
const bitcoin = new Account('bitconin', 300)

bank.setNext(paypal)
paypal.setNext(bitcoin)

// Начнём с банка
bank.pay(10)
