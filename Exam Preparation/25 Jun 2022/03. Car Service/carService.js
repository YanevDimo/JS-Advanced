const {expect} = require('chai');
const carService = {
    isItExpensive(issue) {
        if (issue === "Engine" || issue === "Transmission") {
            return `The issue with the car is more severe and it will cost more money`;
        } else {
            return `The overall price will be a bit cheaper`;
        }
    },
    discount(numberOfParts, totalPrice) {
        if (typeof numberOfParts !== "number" || typeof totalPrice !== "number") {
            throw new Error("Invalid input");
        }

        let discountPercentage = 0;

        if (numberOfParts > 2 && numberOfParts <= 7) {
            discountPercentage = 15;
        } else if (numberOfParts > 7) {
            discountPercentage = 30;
        }

        let result = (discountPercentage / 100) * totalPrice;

        if (numberOfParts <= 2) {
            return "You cannot apply a discount";
        } else {
            return `Discount applied! You saved ${result}$`;
        }
    },
    partsToBuy(partsCatalog, neededParts) {
        let totalSum = 0;

        if (!Array.isArray(partsCatalog) || !Array.isArray(neededParts)) {
            throw new Error("Invalid input");
        }
        neededParts.forEach((neededPart) => {
            partsCatalog.map((obj) => {
                if (obj.part === neededPart) {
                    totalSum += obj.price;
                }
            });
        });

        return totalSum;
    },
};
module.exports = carService;




describe('Car Service ', () => {
    describe('isItExpensive', () => {
        it('should return valid parameters ', function () {
            expect(carService.isItExpensive()).to.equal("The overall price will be a bit cheaper")
        });
        it('should return issue parameter  ', function () {
            expect(carService.isItExpensive("Engine")).to.equal('The issue with the car is more severe and it will cost more money')
        });
        it('should return invalid parameter for  issue', function () {
            expect(carService.isItExpensive("Transmission")).to.equal('The issue with the car is more severe and it will cost more money')
        });

    })
    describe('discount', () => {
        it('should return incorrect number of parts ', function () {
            expect(() => carService.discount('string', 3,)).to.Throw(Error, "Invalid input")
        });
        it('should return incorrect price ', function () {
            expect(() => carService.discount(200, 'string',)).to.Throw(Error, "Invalid input")
        });
        it('should return less number of parts', function () {
            expect(carService.discount(1, 2)).to.equal("You cannot apply a discount")
        });
        it('should return more number of parts', function () {
            expect(carService.discount(10, 500)).to.equal('Discount applied! You saved 150$')
        });
        it('should ', function () {
            expect(carService.discount(3, 7)).to.equal('Discount applied! You saved 1.05$')
        });
    })
    describe('partsToBuy', () => {
        it('should return invalid parameter for parts of catalog', function () {
            expect(() =>
                carService.partsToBuy(3, 2)).to.throw(Error, "Invalid input")
        });
        it('should return invalid parameter for needed parts', function () {
            expect(() =>
                carService.partsToBuy('', '')).to.throw(Error, 'Invalid input')
        });
        it('should return correct parameters all parts', function () {
            expect(carService.partsToBuy([3], [3])).to.equal(0)
        });
        it('should return correct parameters all parts', function () {
            expect(carService.partsToBuy([
                    {part: "blowoff valve", price: 145},
                    {part: "coil springs", price: 230},
                ],
                ["blowoff valve", "injectors"])).to.equal(145)
        });
    });
});