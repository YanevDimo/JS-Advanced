

class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        if (
            this.allCustomers.find((c) => c.firstName === customer.firstName && c.lastName === customer.lastName)) {
            throw new Error(
                `${customer.firstName} ${customer.lastName} is already our customer!”`
            );
        }

        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let person = this.allCustomers.find((c) => c.personalId === personalId);
        if (!person) {
            throw new Error("We have no customer with this ID!");
        }
        if (!person.hasOwnProperty("totalMoney")) {
            person.totalMoney = 0;
        }
        if (!person.hasOwnProperty("transactions")) {
            person.transactions = [];
        }
        person.transactions.unshift(
            `${person.transactions.length + 1}. ${person.firstName} ${
                person.lastName
            } made deposit of ${amount}$!`
        );
        person["totalMoney"] += amount;
        return `${person.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        personalId = Number(personalId);
        amount = Number(amount);

        let person = this.allCustomers.find((x) => x.personalId === personalId);

        if (!person) {
            throw new Error("We have no customer with this ID!");
        }

        if (person.totalMoney < amount) {
            throw new Error(
                `${person.firstName} ${person.lastName} does not have enough money to withdraw that amount!`
            );
        }

        if (!person.hasOwnProperty("transactions")) {
            person.transactions = [];
        }

        person.transactions.unshift(
            `${person.transactions.length + 1}. ${person.firstName} ${
                person.lastName
            } withdrew ${amount}$!`
        );

        person.totalMoney -= amount;
        return `${person.totalMoney}$`;
    }

    customerInfo(personalId) {
        personalId = Number(personalId);

        let person = this.allCustomers.find((x) => x.personalId === personalId);
        if (!person) {
            throw new Error("We have no customer with this ID!");
        }

        let result = [
            `Bank name: ${this._bankName}`,
            `Customer name: ${person.firstName} ${person.lastName}`,
            `Customer ID: ${personalId}`,
            `Total Money: ${person.totalMoney}$`,
            `Transactions:`,
        ];

        person.transactions.forEach((x) => {
            result.push(x);
        });

        return result.join("\n");
    }
}



let bank = new Bank('SoftUniBank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));


