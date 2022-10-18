const {expect} = require('chai');
const dealership = require('./Dealership');

describe('Test dealership', () => {
    describe('newCarCost', () => {
        it('should correct output', function () {
            expect(dealership.newCarCost('Audi A4 B8', 20000)).to.equal(5000);
        });
        it('should ', function () {
            expect(dealership.newCarCost('Opel', 3000)).to.equal(3000);
        });
    })
    describe('carEquipment', () => {
        it('should ', function () {
            expect(dealership.carEquipment(['heated seats', 'sliding roof', 'sport rims', 'navigation'], [0, 3]))
                .to.deep.equal(['heated seats','navigation']);
        });
    })
    describe('euroCategory', () => {
        it('should return discount price', function () {
            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
        });
        it('should return euro category is low', function () {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
        });
    })
})