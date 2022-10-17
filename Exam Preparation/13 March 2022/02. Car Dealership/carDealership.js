class CarDealership {
    constructor(name) {
        this.name = name;
        this.availableCars = [];
        this.soldCars = [];
        this.totalIncome = 0;
    }

    addCar(model, horsepower, price, mileage) {
        if (model === '' || horsepower < 0 || price < 0 || mileage < 0) {
            throw new Error('Invalid input!');
        }
        this.availableCars.push({ model, horsepower, price, mileage });
        return `New car added: ${model} - ${horsepower} HP - ${mileage.toFixed(2)} km - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredMilage) {
        if (!this.availableCars.find((car) => car.model === model)) {
            throw new Error(`${model} was not found!`);
        }

        for (let car in this.availableCars) {
            if (this.availableCars[car].model === model) {
                if (this.availableCars[car].mileage <= desiredMilage) {
                    this.availableCars[car].price;
                } else if (this.availableCars[car].mileage - desiredMilage <= 40000) {
                    this.availableCars[car].price -= this.availableCars[car].price * 0.05;
                } else if (this.availableCars[car].mileage - desiredMilage > 40000) {
                    this.availableCars[car].price -= this.availableCars[car].price * 0.10;
                }
                this.soldCars.push([this.availableCars[car].model, this.availableCars[car].horsepower, this.availableCars[car].price]);
                this.totalIncome += this.availableCars[car].price;
                return `${model} was sold for ${(this.availableCars[car].price).toFixed(2)}$`;

            }
        }
        this.availableCars.filter((car) => car.model !== model);
    }

    currentCar() {
        if (this.availableCars.length === 0) {
            return "There are no available cars";
        }

        let result = '-Available cars:\n';
        for (let car in this.availableCars) {
            result += `---${this.availableCars[car].model} - ${this.availableCars[car].horsepower} HP - ${this.availableCars[car].mileage.toFixed(2)} km - ${this.availableCars[car].price.toFixed(2)}$\n`;
        }
        return result.trim();
    }

    salesReport(criteria) {
        let sortedCars;
        if (criteria === 'horsepower') {
            sortedCars = this.soldCars.sort((a, b) => b[1] - a[1]);
            console.log(sortedCars);
        } else if (criteria === 'model') {
            sortedCars = this.soldCars.sort((a, b) => a[0].localeCompare(b[0]));
            console.log(sortedCars);

        } else {
            throw new Error('Invalid criteria!');
        }

        let result = `-${this.name} has a total income of ${this.totalIncome.toFixed(2)}$\n-${sortedCars.length} cars sold:\n`;
        for (let car in sortedCars) {
            result += `---${sortedCars[car][0]} - ${sortedCars[car][1]} HP - ${sortedCars[car][2].toFixed(2)}$\n`;
        }
        return result.trim();
    }
}

let dealership = new CarDealership('SoftAuto');
dealership.addCar('Toyota Corolla', 100, 3500, 190000);
dealership.addCar('Mercedes C63', 300, 29000, 187000);
dealership.addCar('Audi A3', 120, 4900, 240000);
console.log(dealership.sellCar('Toyota Corolla', 230000));
console.log(dealership.sellCar('Mercedes C63', 110000));
