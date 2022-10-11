class Bank {
    constructor(bankName) {
        this.bankname = bankName;
        this.allCustomers = [];
    }

    newCustomer(firstName,lastName,personalId) {
        let customer = {
            firstName,
            lastName,
            personalId
        }
        if (!customer) {
            this.allCustomers.push(customer)
            console.log(this.allCustomers)
        }
    }
}

let bank = new Bank('SoftUniBank');


