const {expect} = require('chai');
const chooseYourCar = require('./chooseYourCar');

describe('chooseYourCar', () => {
    describe('choosingType', () => {
        it('should return error for year ', function () {
            expect(() => chooseYourCar.choosingType('sedan', 'red', 1899)).to.throw('Invalid Year!');
            expect(() => chooseYourCar.choosingType('sedan', 'red', 2023)).to.throw('Invalid Year!');
        });
        it('should return error for different type', function () {
            expect(() => chooseYourCar.choosingType('cupe', 'red', 2021)).to.throw("This type of car is not what you are looking for.")
        });
        // it('should return error for different type', function () {
        //     expect(chooseYourCar.choosingType('sedan', 'red', 2021)).to.equal("This type of car is not what you are looking for.")
        // });

        describe('brandName', () => {
            it('should return error for invalid input', function () {
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 5)).to.throw("Invalid Information!");
                expect(() => chooseYourCar.brandName([], 5)).to.throw("Invalid Information!");
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], -5)).to.throw("Invalid Information!");
                expect(() => chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 2.5)).to.throw("Invalid Information!");
            });
            it('should return error for invalid input', function () {
                expect(chooseYourCar.brandName(["BMW", "Toyota", "Peugeot"], 0)).to.equal("Toyota, Peugeot");

            });


        })
        describe('carFuelConsumption', () => {
            it('should throw error for invalid parameter', function () {
                expect(() => chooseYourCar.carFuelConsumption('200', 10)).to.throw("Invalid Information!");
                expect(() => chooseYourCar.carFuelConsumption(-200, 10)).to.throw("Invalid Information!");
                expect(() => chooseYourCar.carFuelConsumption(200, -10)).to.throw("Invalid Information!");
                expect(() => chooseYourCar.carFuelConsumption(200, "10")).to.throw("Invalid Information!");
                expect(() => chooseYourCar.carFuelConsumption(0, 0)).to.throw("Invalid Information!");

            });
            it('should return efficient enough ', function () {
                expect(chooseYourCar.carFuelConsumption(500, 10)).to.equal('The car is efficient enough, it burns 2.00 liters/100 km.')
            });
            it('should return th ecar is not efficient enough ', function () {
                expect(chooseYourCar.carFuelConsumption(500, 60)).to.equal('The car burns too much fuel - 12.00 liters!')
            });

        })
    })
})